import { describe, expect, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { NODE_TYPES, RELATION_TYPES } from '../data/taxonomy';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const GRAPH = path.join(ROOT, 'public', 'data', 'graph.json');
const IMG_DIR = path.join(ROOT, 'public', 'assets', 'images');

/** 作品出场边（应与 build-data.ts 保持一致的 5 类） */
const APPEARANCE_RELS = new Set(['debut', 'stars-in', 'appears-in', 'cameo-in', 'mentioned-in']);

function runBuild(): { stdout: string; status: number } {
  const bin = path.join(ROOT, 'node_modules', '.bin', 'tsx');
  const out = execFileSync(bin, [path.join(ROOT, 'scripts', 'build-data.ts')], {
    cwd: ROOT,
    encoding: 'utf8',
    timeout: 120_000,
  });
  return { stdout: out, status: 0 };
}

describe('data:build 全量校验（黑盒）', () => {
  it('构建零错零警告', () => {
    const { stdout } = runBuild();
    expect(stdout).toContain('校验通过');
    expect(stdout).not.toMatch(/✗ 错误/);
    expect(stdout).not.toMatch(/⚠ 警告/);
  });

  it('产物可解析且 stats 与实测一致', () => {
    runBuild();
    const g = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));
    expect(g.stats.nodes).toBe(g.nodes.length);
    expect(g.stats.edges).toBe(g.edges.length);
    expect(g.stats.byType.mantle).toBe(g.nodes.filter((n: any) => n.type === 'mantle').length);
  });

  it('节点 id 唯一且双语文案齐全', () => {
    runBuild();
    const g = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));
    const ids = g.nodes.map((n: any) => n.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const n of g.nodes) {
      expect(n.name?.zh?.trim(), `${n.id} 缺中文名`).toBeTruthy();
      expect(n.name?.en?.trim(), `${n.id} 缺英文名`).toBeTruthy();
      expect(NODE_TYPES.some((t) => t.key === n.type), `${n.id} 未知类型 ${n.type}`).toBe(true);
    }
  });

  it('关系两端存在、类型合法、无重复（同一角色对允许多演员出演边）', () => {
    runBuild();
    const g = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));
    const ids = new Set(g.nodes.map((n: any) => n.id));
    const keys = new Set(RELATION_TYPES.map((r) => r.key));
    // 同一 s|t|r 允许多条仅当它们缀属不同演员（如雷神4：锤哥与娜塔莉同饰 mnt-thor）
    const dupGroups = new Map<string, any[]>();
    for (const e of g.edges) {
      expect(ids.has(e.s), `边 ${e.id} 源不存在 ${e.s}`).toBe(true);
      expect(ids.has(e.t), `边 ${e.id} 目标不存在 ${e.t}`).toBe(true);
      expect(keys.has(e.r), `边 ${e.id} 未知关系 ${e.r}`).toBe(true);
      const dup = `${e.s}|${e.t}|${e.r}`;
      if (!dupGroups.has(dup)) dupGroups.set(dup, []);
      dupGroups.get(dup)!.push(e);
    }
    for (const [dup, list] of dupGroups) {
      if (list.length <= 1) continue;
      // 每组 <=1? 否则必须靠 actor 子属性区分
      expect(list.length > 1, `重复关系 ${dup}（多条）`).toBe(true);
      const actors = list.map((e: any) => JSON.stringify(e.props?.actor ?? e.props?.actress ?? null));
      const distinct = new Set(actors);
      expect(distinct.size, `重复关系 ${dup} 无法按演员属性区分`).toBe(list.length);
      for (const e of list) expect(e.props?.actor != null, `重复关系 ${dup} 缺 actor 标注`).toBe(true);
      void dup;
    }
  });

  it('三层链：held-mantle 维度正确（人物→名号）', () => {
    runBuild();
    const g = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));
    const byId = new Map(g.nodes.map((n: any) => [n.id, n]));
    for (const e of g.edges.filter((x: any) => x.r === 'held-mantle')) {
      expect(e.s.startsWith('ch-'), `held-mantle 源应为人物 ${e.s}`).toBe(true);
      expect(e.t.startsWith('mnt-'), `held-mantle 目标应为名号 ${e.t}`).toBe(true);
    }
    // 每个名号至少有一位担任者
    for (const n of g.nodes.filter((x: any) => x.type === 'mantle')) {
      expect(g.edges.some((e: any) => e.r === 'held-mantle' && e.t === n.id), `名号 ${n.id} 无担任者`).toBe(true);
    }
    // 每个有名号的人物（人物侧有 held-mantle）都能回到名字
    for (const e of g.edges.filter((x: any) => x.r === 'held-mantle')) {
      expect(byId.get(e.s)?.name?.en, `${e.s} 人物缺详情`).toBeTruthy();
    }
  });

  it('防返祖：作品出嘴边不直连有名号的人物', () => {
    runBuild();
    const g = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));
    const hasMantle = new Set(
      g.edges.filter((e: any) => e.r === 'held-mantle').map((e: any) => e.s)
    );
    for (const e of g.edges.filter((x: any) => APPEARANCE_RELS.has(x.r))) {
      for (const end of [e.s, e.t]) {
        if (end.startsWith('ch-') && hasMantle.has(end)) {
          throw new Error(`回归错误：作品边 ${e.s}-${e.r}->${e.t} 直连有名号人物 ${end}`);
        }
      }
    }
  });

  it('图片标记与文件存在性一致', () => {
    runBuild();
    const g = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));
    const exts = ['jpg', 'jpeg', 'png', 'webp'];
    for (const n of g.nodes as any[]) {
      const hasFile = exts.some((ext) => fs.existsSync(path.join(IMG_DIR, `${n.id}.${ext}`)));
      if (n.img) {
        expect(hasFile, `${n.id}: img:true 但无图文件`).toBe(true);
      }
    }
    // 反向：文件存在 → 推荐打标（若真名节点存在）
    const ids = new Set(g.nodes.map((n: any) => n.id));
    for (const f of fs.readdirSync(IMG_DIR)) {
      const id = f.replace(/\.(jpg|jpeg|png|webp)$/, '');
      if (ids.has(id)) {
        const node = g.nodes.find((n: any) => n.id === id);
        expect(node.img, `${id}: 有图文件但无 img 标记`).toBe(true);
      }
    }
  });
});
