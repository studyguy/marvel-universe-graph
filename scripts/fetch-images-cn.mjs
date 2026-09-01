#!/usr/bin/env node
/**
 * 节点真实图像抓取 — 中文百科通道（萌娘百科，环境可达）。
 * 用法：node scripts/fetch-images-cn.mjs [--limit=100] [--redownload]
 * - 按节点中文名（含别名/全角冒号变体）批量查询萌娘百科 MediaWiki API 的页面主图
 * - 下载去除水印变换的原图，存 public/assets/images/<id>.jpg → npm run data:build 打标后全站生效
 * 数据来源：https://zh.moegirl.org.cn（CC BY-NC-SA，页脚已署名），仅供学习/粉丝用途。
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'assets', 'images');
fs.mkdirSync(OUT, { recursive: true });

const API = 'https://zh.moegirl.org.cn/api.php';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) marvel-graph/1.0';
const argLimit = process.argv.find((a) => a.startsWith('--limit='));
const LIMIT = argLimit ? parseInt(argLimit.split('=')[1], 10) : Infinity;
const REDOWNLOAD = process.argv.includes('--redownload');

const graph = JSON.parse(fs.readFileSync(path.join(ROOT, 'public', 'data', 'graph.json'), 'utf8'));

/** 候选中文标题：主名 → 全角冒号变体 → 别名 → 去括号变体 */
function candidates(n) {
  const out = [];
  const push = (t) => {
    if (!t) return;
    t = t.trim();
    if (t && !out.includes(t) && t.length >= 2 && !/^—/.test(t)) out.push(t);
  };
  const zh = n.name.zh || '';
  push(zh);
  push(zh.replace(/:/g, '：'));
  push(zh.replace(/：/g, ':'));
  push(zh.replace(/\s*（[^）]*）\s*/g, ''));
  push(zh.replace(/\s*\([^)]*\)\s*/g, ''));
  // 分段：按空格/冒号/间隔号拆分，补齐首段与各段（"钢铁侠 托尼·斯塔克"→"钢铁侠"）
  for (const seg of zh.split(/[\s：:·]+/)) push(seg);
  for (const a of n.alias?.zh ?? []) { push(a); push(a.split(/[\s：:·]+/)[0]); }
  return out;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** GET JSON（带重试） */
async function getJson(url) {
  for (let a = 0; a < 3; a++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA } });
      if (!res.ok) throw new Error(String(res.status));
      return await res.json();
    } catch (e) {
      if (a === 2) throw e;
      await sleep(600);
    }
  }
}

/** 批量查询 10 个标题的主图 URL（返回 { 查询标题小写: 图URL }，含重定向/规范化映射） */
async function batchImages(titles) {
  const url = `${API}?action=query&prop=pageimages&piprop=thumbnail&pithumbsize=500&format=json&formatversion=1&redirects=1&titles=${encodeURIComponent(titles.join('|'))}`;
  const data = await getJson(url);
  const map = {};
  const pages = data?.query?.pages ?? {};
  for (const p of Object.values(pages)) {
    if (p.thumbnail?.source) map[String(p.title).toLowerCase()] = p.thumbnail.source;
  }
  for (const arr of [data?.query?.redirects ?? [], data?.query?.normalized ?? []]) {
    for (const r of arr) {
      const from = String(r.from).toLowerCase();
      const to = String(r.to).toLowerCase();
      if (map[to]) map[from] = map[to];
    }
  }
  return map;
}

/** 下载原图（去掉 "!/fw/..." 水印变换后缀） */
async function download(url, file) {
  const original = url.split('!')[0];
  for (let a = 0; a < 2; a++) {
    try {
      const res = await fetch(original, { headers: { 'User-Agent': UA, Referer: 'https://zh.moegirl.org.cn/' } });
      if (!res.ok) throw new Error(String(res.status));
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1500) throw new Error('too small');
      fs.writeFileSync(file, buf);
      return true;
    } catch (e) {
      if (a === 1) return false;
      await sleep(500);
    }
  }
  return false;
}

const todo = graph.nodes
  .filter((n) => REDOWNLOAD || !fs.existsSync(path.join(OUT, `${n.id}.jpg`)))
  .slice(0, Number.isFinite(LIMIT) ? LIMIT : undefined);
console.log(`待抓取 ${todo.length} / ${graph.nodes.length} 节点（来源：萌娘百科）`);

// 展开任务：每个节点取前 4 个候选
const tasks = todo.map((n) => ({ id: n.id, file: path.join(OUT, `${n.id}.jpg`), tries: candidates(n).slice(0, 4) }));

// 预连通
try {
  await getJson(`${API}?action=query&format=json&titles=X`);
} catch (e) {
  console.error('✗ 无法访问萌娘百科 API：' + e.message);
  process.exit(2);
}

let ok = 0;
let round = 0;
let pending = tasks.slice();
const okFiles = [];

while (pending.length && round < 4) {
  const byTitle = pending.map((t) => ({ task: t, title: t.tries[round] })).filter((x) => x.title);
  for (let i = 0; i < byTitle.length; i += 10) {
    const chunk = byTitle.slice(i, i + 10);
    let map = {};
    try {
      map = await batchImages(chunk.map((c) => c.title));
    } catch (e) {
      console.error(`  批次失败: ${e.message}`);
      continue;
    }
    for (const c of chunk) {
      const url = map[c.title.toLowerCase()];
      if (url && (await download(url, c.task.file))) {
        ok++;
        okFiles.push(c.id);
        c.task.tries = [];
      }
    }
    await sleep(180);
  }
  pending = pending.filter((t) => t.tries.length > round + 1 && !fs.existsSync(t.file));
  round++;
  console.log(`第 ${round} 轮完成：累计成功 ${ok}，剩余 ${pending.length}`);
}

// ===== 搜索兜底：对仍缺失的角色/作品/团队/地点/物品/事件用全文搜索找词条 =====
const PREFIX_TYPE = { ch: 'character', wk: 'work', team: 'team', loc: 'location', item: 'item', ev: 'event' };
const SEARCHABLE = new Set(Object.keys(PREFIX_TYPE));
const searchPending = tasks.filter((t) => !fs.existsSync(t.file) && SEARCHABLE.has(t.id.split('-')[0]));
console.log(`搜索兜底：${searchPending.length} 个节点`);
const nodeById = new Map(graph.nodes.map((n) => [n.id, n]));
for (let i = 0; i < searchPending.length; i++) {
  const t = searchPending[i];
  const n = nodeById.get(t.id);
  const q = (n.name.zh || '').replace(/\s*\([^)]*\)\s*/g, '').split(/[\s：:·]+/)[0];
  if (!q || q.length < 2) continue;
  try {
    const sd = await getJson(`${API}?action=query&list=search&srsearch=${encodeURIComponent(q)}&srlimit=1&format=json`);
    const hitTitle = sd?.query?.search?.[0]?.title;
    if (!hitTitle) continue;
    const map = await batchImages([hitTitle]);
    const url = map[String(hitTitle).toLowerCase()];
    if (url && (await download(url, t.file))) {
      ok++;
      console.log(`  [search] ${t.id} ← ${hitTitle}`);
    }
  } catch { /* 跳过 */ }
  await sleep(150);
  if (i % 50 === 49) console.log(`  搜索进度 ${i + 1}/${searchPending.length}`);
}

const missList = tasks.filter((t) => !fs.existsSync(t.file)).map((t) => t.id);
fs.writeFileSync(path.join(ROOT, 'scripts', 'fetch-misses.json'), JSON.stringify({ source: 'moegirl', misses: missList, at: new Date().toISOString() }, null, 2));
console.log(`\n完成：命中 ${ok}，未命中 ${missList.length}（清单 scripts/fetch-misses.json）。`);
console.log('下一步：npm run data:build → 刷新网站，真实图像全站生效。');
