/** 数据汇编：校验 data/source → public/data/graph.json */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { NODE_TYPES, RELATION_TYPES, nodeTypeMap } from '../data/taxonomy';
import { seeds, edgeSeeds, bios, nodePatches } from '../data/source/registry';
import { PERSON_NAME_OVERRIDE, normalizePersonName } from './graph-normalize';
import type { GraphData, GraphNode } from '../data/schema';

// 数据源装配（副作用注册）
import '../data/source/foundation';
import '../data/source/works-mcu';
import '../data/source/characters-mcu';
import '../data/source/characters-mcu2';
import '../data/source/characters-variants';
import '../data/source/characters-comics';
import '../data/source/characters-other';
import '../data/source/teams';
import '../data/source/locations';
import '../data/source/items';
import '../data/source/events';
import '../data/source/works-other';
import '../data/source/edges-mcu';
import '../data/source/edges-comics';
import '../data/source/edges-audit';
import '../data/source/supplement';
import '../data/source/mantles';
import '../data/source/bios';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public', 'data');
const IMG_DIR = path.join(ROOT, 'public', 'assets', 'images');

const errors: string[] = [];
const warnings: string[] = [];

/* ---------- 校验 ---------- */
const byId = new Map<string, GraphNode>();
for (const s of seeds) {
  if (byId.has(s.id)) errors.push(`重复节点 id: ${s.id}`);
  const t = nodeTypeMap.get(s.type);
  if (!t) {
    errors.push(`${s.id}: 未知节点类型 ${s.type}`);
    continue;
  }
  if (!t.subs.some((x) => x.key === s.sub)) errors.push(`${s.id}: ${s.type} 下未知子类 ${s.sub}`);
  if (!s.name.zh?.trim() || !s.name.en?.trim()) errors.push(`${s.id}: 缺少双语名称`);
  if (!s.desc.zh?.trim() || !s.desc.en?.trim()) warnings.push(`${s.id}: 缺少双语简介`);
  const knownProps = new Set(t.props.map((p) => p.key));
  for (const k of Object.keys(s.props)) {
    if (!knownProps.has(k)) warnings.push(`${s.id}: 未声明属性字段 ${k}`);
  }
  // 真实图片探测
  let img: true | undefined;
  for (const ext of ['jpg', 'jpeg', 'png', 'webp']) {
    if (fs.existsSync(path.join(IMG_DIR, `${s.id}.${ext}`))) {
      img = true;
      break;
    }
  }
  const node: GraphNode = { id: s.id, type: s.type, sub: s.sub, name: s.name, desc: s.desc, props: s.props, sources: s.sources };
  if (s.alias) node.alias = s.alias;
  if (img) node.img = img;
  const b = bios.get(s.id);
  if (b) node.bio = b;
  byId.set(s.id, node);
}

/* ---------- 节点字段补丁（patchProps：merge props / 追加 sources） ---------- */
for (const p of nodePatches) {
  const node = byId.get(p.id);
  if (!node) {
    errors.push(`字段补丁: 目标节点不存在 ${p.id}`);
    continue;
  }
  if (p.props) node.props = { ...node.props, ...p.props };
  if (p.sources?.length) {
    node.sources = [...new Set([...node.sources, ...p.sources])];
  }
}

/* ---------- 人物介绍校验（可选增强；有则必须完整） ---------- */
for (const [id, b] of bios) {
  if (!byId.has(id)) {
    errors.push(`人物介绍: 目标节点不存在 ${id}`);
    continue;
  }
  if (!b.zh.length || !b.en.length) errors.push(`人物介绍: ${id} 缺少双语段落`);
  else if (b.zh.length !== b.en.length) errors.push(`人物介绍: ${id} 中英段落数不一致（${b.zh.length} vs ${b.en.length}）`);
  for (const para of [...b.zh, ...b.en]) {
    if (para.length < 10) errors.push(`人物介绍: ${id} 存在过短段落（${para.length} 字）`);
  }
}

const relSeen = new Set<string>();
const declaredRels = new Map(RELATION_TYPES.map((r) => [r.key, r]));
for (const e of edgeSeeds) {
  const r = declaredRels.get(e.r);
  if (!r) {
    errors.push(`关系 ${e.s} -${e.r}-> ${e.t}: 未知关系类型 ${e.r}`);
    continue;
  }
  if (!byId.has(e.s)) errors.push(`关系 ${e.r}: 源节点不存在 ${e.s}`);
  if (!byId.has(e.t)) errors.push(`关系 ${e.r}: 目标节点不存在 ${e.t}`);
  if (e.s === e.t) warnings.push(`自环关系 ${e.s} -${e.r}-> ${e.t}`);
  const dup = `${e.s}|${e.t}|${e.r}`;
  if (relSeen.has(dup)) warnings.push(`重复关系 ${dup}`);
  relSeen.add(dup);
  if (e.props) {
    const declared = new Set(r.subProps.map((p) => p.key));
    for (const k of Object.keys(e.props)) {
      if (!declared.has(k)) warnings.push(`关系 ${e.s}-${e.r}->${e.t}: 未声明子属性 ${k}`);
    }
  }
}

for (const t of NODE_TYPES) {
  const n = seeds.filter((s) => s.type === t.key).length;
  if (n === 0) warnings.push(`节点类型 ${t.key} 无数据`);
}

/* ---------- 关系链重构：作品 → 角色（名号）→ 人物 ---------- */



/** 人物 → 主角色（prime role）：该人物第一条"担任"边对应的角色 */
const APPEARANCE_RELS = new Set(['debut', 'stars-in', 'appears-in', 'cameo-in', 'mentioned-in']);
const personPrime = new Map<string, string>();
for (const e of edgeSeeds) {
  if (e.r === 'held-mantle' && e.s.startsWith('ch-') && e.t.startsWith('mnt-') && !personPrime.has(e.s)) {
    personPrime.set(e.s, e.t);
  }
}

const renamed: string[] = [];
for (const sd of seeds) {
  const ov = PERSON_NAME_OVERRIDE[sd.id];
  const prime = personPrime.has(sd.id) ? personPrime.get(sd.id)! : null;
  // 仅对"拥有角色"的人物改名（无名号人物保持原名）
  if (sd.type !== 'character' || !prime) continue;
  const before = { ...sd.name };
  if (ov?.zh) sd.name.zh = ov.zh;
  if (ov?.en) sd.name.en = ov.en;
  if (!ov?.zh || !ov?.en) {
    const n = normalizePersonName(sd.name.zh, sd.name.en);
    if (!ov?.zh && n.zh !== sd.name.zh) sd.name.zh = n.zh;
    if (!ov?.en && n.en !== sd.name.en) sd.name.en = n.en;
  }
  if (sd.name.zh !== before.zh || sd.name.en !== before.en) {
    // 原名进入别名（历史检索兼容）
    sd.alias = sd.alias ?? { zh: [], en: [] };
    if (before.zh !== sd.name.zh && !sd.alias.zh.includes(before.zh)) sd.alias.zh.push(before.zh);
    if (before.en !== sd.name.en && !sd.alias.en.includes(before.en)) sd.alias.en.push(before.en);
    renamed.push(sd.id);
  }
}

/* 作品出场边改道：人物 → 主角色（名号） */
let rerouted = 0;
for (const e of edgeSeeds) {
  if (!APPEARANCE_RELS.has(e.r)) continue;
  const from = e.s.startsWith('ch-') ? e.s : e.t.startsWith('ch-') ? e.t : null;
  const to = e.s.startsWith('ch-') ? e.t : e.s;
  if (!from || personPrime.has(from)) {
    if (from && personPrime.has(from)) {
      const prime = personPrime.get(from)!;
      if (e.s === from) e.s = prime;
      else e.t = prime;
      rerouted++;
    }
  }
}

/* ---------- 社会类边改道：角色（名号）为核心 ----------
 * 英雄身份之间的关系（盟敌/战斗/师徒/创造/组织/事件/武器/能力）
 * 挂在有名号的人物上时自动改道到其主名号；人的亲缘/情感/变体/地理事实保留人物层。 */
const MANTLE_RELS = new Set([
  // social
  'ally', 'nemesis', 'best-friend', 'rival', 'idolizes', 'distrusts',
  // combat
  'killed', 'defeated', 'betrayed', 'rescued', 'sacrificed-for',
  // mentorship / creation
  'mentor-of', 'creator-of', 'resurrected', 'converted', 'mind-controlled',
  // org
  'member-of', 'leader-of', 'undercover-in', 'founded-org', 'affiliated-with',
  // participation
  'initiated', 'participated', 'victim-of', 'prevented', 'witnessed',
  // possession / lineage
  'wields', 'empowered-by', 'has-ability',
]);
let socialRerouted = 0;
for (const e of edgeSeeds) {
  if (!MANTLE_RELS.has(e.r)) continue;
  if (e.s.startsWith('ch-') && personPrime.has(e.s)) {
    e.s = personPrime.get(e.s)!;
    socialRerouted++;
  }
  if (e.t.startsWith('ch-') && personPrime.has(e.t)) {
    e.t = personPrime.get(e.t)!;
    socialRerouted++;
  }
}
/* 改道后清理：同主名号人物互相关系产生的自环丢弃；完全相同的边（含 props）合并 */
let selfLoopsDropped = 0;
let dupMerged = 0;
{
  const seen = new Set<string>();
  const kept: typeof edgeSeeds = [];
  for (const e of edgeSeeds) {
    if (e.s === e.t) {
      selfLoopsDropped++;
      continue;
    }
    const key = `${e.s}|${e.t}|${e.r}|${JSON.stringify(e.props ?? null)}`;
    if (seen.has(key)) {
      dupMerged++;
      continue;
    }
    seen.add(key);
    kept.push(e);
  }
  edgeSeeds.length = 0;
  edgeSeeds.push(...kept);
}

/* 校验：作品出场边不得直接连"有角色的人物"（防返祖） */
for (const e of edgeSeeds) {
  if (!APPEARANCE_RELS.has(e.r)) continue;
  for (const end of [e.s, e.t]) {
    if (end.startsWith('ch-') && personPrime.has(end)) {
      errors.push(`回归错误：作品关系 ${e.s} -${e.r}-> ${e.t} 直接连向有名号的人物 ${end}（应改道角色）`);
    }
  }
}
/* 校验：社会类关系不得直接连"有角色的人物"（角色核心防返祖） */
for (const e of edgeSeeds) {
  if (!MANTLE_RELS.has(e.r)) continue;
  for (const end of [e.s, e.t]) {
    if (end.startsWith('ch-') && personPrime.has(end)) {
      errors.push(`回归错误：社会关系 ${e.s} -${e.r}-> ${e.t} 直连有名号的人物 ${end}（应改道名号）`);
    }
  }
}
console.log(
  `重构：人物改名 ${renamed.length} 个 · 作品边改道角色 ${rerouted} 条 · 社会边改道名号 ${socialRerouted} 端 · 去重合并 ${dupMerged} 条 · 自环丢弃 ${selfLoopsDropped} 条 · 有名号人物 ${personPrime.size} 人`,
);

/* ---------- 汇编 ---------- */
const byType: Record<string, number> = {};
for (const s of seeds) byType[s.type] = (byType[s.type] ?? 0) + 1;

const data: GraphData = {
  version: '1.0',
  generatedAt: new Date().toISOString(),
  nodes: [...byId.values()],
  edges: edgeSeeds.map((e, i) => ({ id: `e${i}`, s: e.s, t: e.t, r: e.r, ...(e.props ? { props: e.props } : {}) })),
  stats: { nodes: seeds.length, edges: edgeSeeds.length, byType },
};

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, 'graph.json'), JSON.stringify(data));

/* ---------- 报告 ---------- */
console.log(`节点 ${data.stats.nodes} · 关系 ${data.stats.edges}`);
console.table(byType);
if (warnings.length) console.log(`\n⚠ 警告 ${warnings.length} 条:\n` + warnings.slice(0, 40).join('\n'));
if (errors.length) {
  console.error(`\n✗ 错误 ${errors.length} 条:\n` + errors.slice(0, 60).join('\n'));
  process.exit(1);
}
console.log('\n✓ 校验通过 → public/data/graph.json');
