#!/usr/bin/env node
/**
 * 覆盖度报告：逐类型输出 内容/关系 缺口，供排期与验收。
 * 用法：node scripts/coverage-report.mjs [--type=mantle] [--json]
 * 输出：每类型 bio 覆盖 / desc 长度分布 / 孤点名单 / 关键关系计数
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const graph = JSON.parse(fs.readFileSync(path.join(ROOT, 'public', 'data', 'graph.json'), 'utf8'));

const arg = (k) => process.argv.find((a) => a.startsWith(`--${k}=`))?.split('=')[1];
const onlyType = arg('type');
const asJson = process.argv.includes('--json');

const NODE_TYPES = ['character', 'mantle', 'team', 'location', 'item', 'work', 'event', 'universe', 'channel', 'race', 'ability'];
const byType = new Map(graph.nodes.map((n) => [n.type, n]));
const adj = new Map();
for (const n of graph.nodes) adj.set(n.id, []);
for (const e of graph.edges) {
  adj.get(e.s)?.push(e);
  adj.get(e.t)?.push(e);
}

const TYPES = (onlyType ? [onlyType] : NODE_TYPES).filter((t) => byType.has(t));
const report = {};

for (const t of TYPES) {
  const nodes = graph.nodes.filter((n) => n.type === t);
  const bioN = nodes.filter((n) => n.bio).length;
  const shortDesc = nodes.filter((n) => (n.desc?.zh ?? '').length < 30);
  const avgDesc = Math.round(nodes.reduce((a, n) => a + (n.desc?.zh ?? '').length, 0) / Math.max(1, nodes.length));
  const isolates = nodes.filter((n) => (adj.get(n.id) ?? []).length === 0).map((n) => n.id);
  const withSrc = nodes.filter((n) => (n.sources ?? []).length > 0).length;
  const maxDeg = Math.max(0, ...nodes.map((n) => (adj.get(n.id) ?? []).length));
  report[t] = { count: nodes.length, bio: bioN, shortDesc: shortDesc.length, avgDesc, isolates: isolates.length, withSrc, maxDeg };
}

// 关键关系计数（跨类型）
const edgeOf = (pred) => graph.edges.filter(pred).length;
const keyRels = {
  'team↔team': edgeOf((e) => e.s.startsWith('team-') && e.t.startsWith('team-')),
  'team↔work(出场)': edgeOf((e) => ['debut', 'stars-in', 'appears-in', 'cameo-in', 'mentioned-in'].includes(e.r) && (e.s.startsWith('team-') || e.t.startsWith('team-'))),
  'location↔work': edgeOf((e) => ['set-in', 'battlefield-of'].includes(e.r) && (e.s.startsWith('loc-') || e.t.startsWith('loc-')) && (e.s.startsWith('wk-') || e.t.startsWith('wk-'))),
  'event↔location(战场)': edgeOf((e) => e.r === 'battlefield-of'),
  'appears-in 总数': edgeOf((e) => e.r === 'appears-in'),
  'born-in/lives-in': edgeOf((e) => ['born-in', 'lives-in'].includes(e.r)),
};

if (asJson) {
  console.log(JSON.stringify({ byType: report, keyRels, edges: graph.edges.length, nodes: graph.nodes.length }, null, 1));
} else {
  console.log('== 内容覆盖 ==');
  console.table(report);
  console.log('== 关键关系缺口 ==');
  for (const [k, v] of Object.entries(keyRels)) console.log(`  ${k}: ${v}`);
  if (onlyType && report[onlyType]) {
    const iso = graph.nodes.filter((n) => n.type === onlyType && (adj.get(n.id) ?? []).length === 0);
    if (iso.length) console.log(`\n== ${onlyType} 孤点 ==\n  ${iso.map((n) => n.id).join('\n  ')}`);
  }
}
