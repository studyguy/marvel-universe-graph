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

  it('关系两端存在、类型合法、无重复（允许 props 不同的同名号对多边，如多宇宙宿敌/双演员）', () => {
    runBuild();
    const g = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));
    const ids = new Set(g.nodes.map((n: any) => n.id));
    const keys = new Set(RELATION_TYPES.map((r) => r.key));
    // 与 build-data 去重逻辑对齐：s|t|r|JSON(props) 完全一致才视为重复
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
      const sigs = list.map((e: any) => JSON.stringify(e.props ?? null));
      expect(new Set(sigs).size, `重复关系 ${dup}（${list.length} 条 props 完全相同）`).toBe(list.length);
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

  it('人物介绍（bio）：多类型节点、双语段落结构完整', () => {
    runBuild();
    const g = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));
    const withBio = g.nodes.filter((n: any) => n.bio);
    // 人物 30 + 名号 93 全覆（P1 里程碑）
    expect(withBio.length).toBeGreaterThanOrEqual(120);
    expect(g.nodes.filter((n: any) => n.type === 'mantle' && n.bio).length, '名号 bio 应全覆').toBe(93);
    for (const n of withBio) {
      const { zh, en } = n.bio;
      expect(zh.length, `${n.id} 缺中文段落`).toBeGreaterThanOrEqual(1);
      expect(en.length, `${n.id} 缺英文段落`).toBeGreaterThanOrEqual(1);
      expect(zh.length, `${n.id} 中英段落数不一致`).toBe(en.length);
      for (const p of [...zh, ...en]) {
        expect(p.trim().length, `${n.id} 存在过短段落`).toBeGreaterThanOrEqual(10);
      }
    }
  });

  /** 作品出场 + 社会类（应改道名号层）的关系清单，需与 build-data.ts 的 MANTLE_RELS 保持一致 */
  const MANTLE_RELS = new Set([
    'ally', 'nemesis', 'best-friend', 'rival', 'idolizes', 'distrusts',
    'killed', 'defeated', 'betrayed', 'rescued', 'sacrificed-for',
    'mentor-of', 'creator-of', 'resurrected', 'converted', 'mind-controlled',
    'member-of', 'leader-of', 'undercover-in', 'founded-org', 'affiliated-with',
    'initiated', 'participated', 'victim-of', 'prevented', 'witnessed',
    'wields', 'empowered-by', 'has-ability',
  ]);

  it('角色核心：社会类关系不直连有名号的人物（防返祖 generalized）', () => {
    runBuild();
    const g = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));
    const prime = new Map<string, string>();
    for (const e of g.edges) {
      if (e.r === 'held-mantle' && e.s.startsWith('ch-') && !prime.has(e.s)) prime.set(e.s, e.t);
    }
    for (const e of g.edges) {
      if (!MANTLE_RELS.has(e.r)) continue;
      for (const end of [e.s, e.t]) {
        if (end.startsWith('ch-') && prime.has(end)) {
          throw new Error(`回归：社会关系 ${e.s}-${e.r}->${e.t} 直连有名号人物 ${end}（应改道名号）`);
        }
      }
    }
  });

  it('角色核心：名号层关系已成网（mnt↔mnt ≥ 60 条，mnt 端参与边 ≥ 400）', () => {
    runBuild();
    const g = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));
    const mntMnt = g.edges.filter((e: any) => e.s.startsWith('mnt-') && e.t.startsWith('mnt-'));
    expect(mntMnt.length, '名号↔名号关系过少').toBeGreaterThanOrEqual(60);
    const mntAny = g.edges.filter((e: any) => e.s.startsWith('mnt-') || e.t.startsWith('mnt-'));
    expect(mntAny.length, '名号端参与的边过少').toBeGreaterThanOrEqual(400);
  });

  it('图健康：全图无自环边', () => {
    runBuild();
    const g = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));
    const loops = g.edges.filter((e: any) => e.s === e.t);
    expect(loops, `存在自环 ${loops.map((e: any) => e.s).join(', ')}`).toHaveLength(0);
  });

  it('名号核心：社会类关系不直连有名号人物（防返祖 generalized）', () => {
    runBuild();
    const g = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));
    const prime = new Map<string, string>();
    for (const e of g.edges as any[]) {
      if (e.r === 'held-mantle' && e.s.startsWith('ch-') && !prime.has(e.s)) prime.set(e.s, e.t);
    }
    const MANTLE_RELS = new Set([
      'ally', 'nemesis', 'best-friend', 'rival', 'idolizes', 'distrusts',
      'killed', 'defeated', 'betrayed', 'rescued', 'sacrificed-for',
      'mentor-of', 'creator-of', 'resurrected', 'converted', 'mind-controlled',
      'member-of', 'leader-of', 'undercover-in', 'founded-org', 'affiliated-with',
      'initiated', 'participated', 'victim-of', 'prevented', 'witnessed',
      'wields', 'empowered-by', 'has-ability',
    ]);
    let mntMantle = 0;
    for (const e of g.edges as any[]) {
      if (e.s === e.t, false) continue;
      if (MANTLE_RELS.has(e.r)) {
        for (const end of [e.s, e.t]) {
          if (String(end).startsWith('ch-') && prime.has(end)) {
            throw new Error(`回归错误：社会关系 ${e.s}-${e.r}->${e.t} 直连有名号人物 ${end}`);
          }
        }
      }
      if (String(e.s).startsWith('mnt-') && String(e.t).startsWith('mnt-')) mntMantle++;
    }
    expect(mntMantle, '名号间关系边应形成网络').toBeGreaterThanOrEqual(60);
    expect(g.edges.filter((e: any) => e.s === e.t).length, '全图不应有自环').toBe(0);
  });

  it('人物介绍未混入 props（关键属性区不受污染）', () => {
    runBuild();
    const g = JSON.parse(fs.readFileSync(GRAPH, 'utf8'));
    for (const n of g.nodes as any[]) {
      expect(n.props?.['bio'], `${n.id} 不应有 props.bio`).toBeUndefined();
      const def = NODE_TYPES.find((t) => t.key === n.type);
      const known = new Set((def?.props ?? []).map((p) => p.key));
      for (const k of Object.keys(n.props ?? {})) {
        expect(known.has(k), `${n.id} 出现未声明属性 ${k}`).toBe(true);
      }
    }
  });
});
