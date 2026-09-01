#!/usr/bin/env node
/**
 * 节点真实图像抓取 — Fandom 主通道（CC BY-SA 3.0）。
 * 用法：node scripts/fetch-images.mjs [--limit=N] [--proxy=host:port]
 * 代理：自动探测本机常见代理端口（7897/7890/10809/1080/8888），或 --proxy 指定；直连失败自动启用。
 * 产物：public/assets/images/<id>.jpg（400px）→ npm run data:build → 全站生效。
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'assets', 'images');
fs.mkdirSync(OUT, { recursive: true });

const graph = JSON.parse(fs.readFileSync(path.join(ROOT, 'public', 'data', 'graph.json'), 'utf8'));
const argLimit = process.argv.find((a) => a.startsWith('--limit='));
const LIMIT = argLimit ? parseInt(argLimit.split('=')[1], 10) : Infinity;
const proxyArg = process.argv.find((a) => a.startsWith('--proxy='));
const PITHUMB = 400;

const WIKIS = {
  mcu: 'https://marvelcinematicuniverse.fandom.com/api.php',
  db: 'https://marvel.fandom.com/api.php',
};

const OVERRIDE = {
  'wk-hulk': 'The Incredible Hulk (film)',
  'wk-gotg-holiday': 'The Guardians of the Galaxy Holiday Special',
  'wk-thunderbolts': 'Thunderbolts*',
  'wk-what-if': 'What If...?',
  'wk-xmen97': "X-Men '97",
  'wk-yfnsm': 'Your Friendly Neighborhood Spider-Man',
  'wk-daredevil-ba': 'Daredevil: Born Again',
  'wk-daredevil-netflix': 'Daredevil (TV series)',
  'wk-aos': 'Agents of S.H.I.E.L.D.',
  'wk-jessica-jones-show': 'Jessica Jones (TV series)',
  'wk-luke-cage-show': 'Luke Cage (TV series)',
  'wk-iron-fist-show': 'Iron Fist (TV series)',
  'wk-punisher-show': 'The Punisher (TV series)',
  'wk-ff-comics': 'Fantastic Four (1961 team)',
  'wk-uncanny-xmen': 'Uncanny X-Men',
  'wk-amazing-spider-man': 'The Amazing Spider-Man',
  'wk-infinity-gauntlet': 'The Infinity Gauntlet',
  'wk-civil-war-comic': 'Civil War (comics)',
  'wk-secret-wars-15': 'Secret Wars (2015)',
  'wk-kravens-last-hunt': "Kraven's Last Hunt",
  'wk-old-man-logan': 'Old Man Logan',
  'wk-house-of-x': 'Dawn of X',
  'ch-tony-stark': 'Iron Man',
  'ch-steve-rogers': 'Captain America',
  'ch-wanda-maximoff': 'Scarlet Witch',
  'ch-black-panther-tchalla': "Black Panther",
  'ch-carol-danvers': 'Captain Marvel',
  'ch-nick-fury': 'Nick Fury',
};

function candidates(n) {
  const out = [];
  const push = (t) => { if (t && !out.includes(t)) out.push(t); };
  if (OVERRIDE[n.id]) push(OVERRIDE[n.id]);
  if (n.props?.wiki) push(n.props.wiki);
  const base = (n.name.en || '').split('/')[0].replace(/\s*\((MCU|616|828|Earth[^)]*)\)\s*$/i, '').trim();
  if (!base) return out;
  push(base);
  push(base.replace(/\([^)]*\)\s*$/, '').trim());
  const inner = base.match(/\(([^)]+)\)/);
  if (inner) push(inner[1]);
  if (base.toLowerCase().startsWith('the ')) push(base.slice(4));
  // 别名候选（中英）
  for (const a of n.alias?.en ?? []) push(a);
  for (const a of n.alias?.zh ?? []) push(a);
  const year = String(n.props?.year ?? '').match(/\d{4}/)?.[0];
  if (n.type === 'work') {
    if (n.sub === 'film') push(`${base} (film)`);
    if (n.sub === 'series') push(`${base} (TV series)`);
    if (n.sub === 'comic-event' && year) push(`${base} (${year})`);
    if (n.sub === 'comic') push(`${base} Vol 1`);
  }
  if (n.type === 'character' && /616|comics/i.test(String(n.props?.universe ?? ''))) push(`${base} (Earth-616)`);
  if (n.type === 'character') push(`${base} (MCU)`);
  return out;
}
function wikiOrder(n) {
  const u = String(n.props?.universe ?? '');
  if (u.includes('199999')) return ['mcu', 'db'];
  if (n.type === 'work' && /漫画宇宙/.test(String(n.props?.channel ?? ''))) return ['db', 'mcu'];
  return ['db', 'mcu'];
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function curl(url) {
  const args = ['-s', '-L', '--max-time', '25', url];
  if (PROXY) args.unshift('--proxy', PROXY);
  return new Promise((resolve) => {
    execFile('curl', args, { maxBuffer: 20 * 1024 * 1024 }, (err, stdout) => resolve(err ? '' : String(stdout)));
  });
}
async function getJson(url) {
  for (let a = 0; a < 2; a++) {
    const txt = await curl(url);
    if (txt) {
      try { return JSON.parse(txt); } catch { /* retry */ }
    }
    await sleep(500);
  }
  throw new Error('fetch failed: ' + url.slice(0, 80));
}
async function download(url, file) {
  const txt = await new Promise((resolve) => {
    const args = ['-s', '-L', '--max-time', '40', url, '-o', file];
    if (PROXY) args.unshift('--proxy', PROXY);
    execFile('curl', args, { maxBuffer: 20 * 1024 * 1024 }, (err) => resolve(err ? '' : 'ok'));
  });
  if (txt !== 'ok') return false;
  const size = fs.existsSync(file) ? fs.statSync(file).size : 0;
  if (size < 1500) { fs.rmSync(file, { force: true }); return false; }
  return true;
}

/* ---------- 代理探测 ---------- */
let PROXY = proxyArg ? 'http://' + proxyArg.split('=')[1] : null;
const PROXY_PORTS = [7897, 7890, 10809, 1080, 8888, 8118];
async function testDirect() {
  const txt = await curl('https://marvel.fandom.com/api.php?action=query&format=json&titles=X');
  return txt.includes('query');
}
async function testProxy(p) {
  const txt = await new Promise((resolve) => {
    const args = ['-s', '--max-time', '8', '--proxy', 'http://127.0.0.1:' + p, 'https://marvel.fandom.com/api.php?action=query&format=json&titles=X'];
    execFile('curl', args, (err, stdout) => resolve(err ? '' : String(stdout)));
  });
  return txt.includes('query');
}
if (!PROXY) {
  if (await testDirect()) {
    console.log('直连 fandom 成功（未使用代理）');
  } else {
    for (const p of PROXY_PORTS) {
      if (await testProxy(p)) { PROXY = `http://127.0.0.1:${p}`; console.log(`自动探测到本机代理端口 ${p}，已启用`); break; }
    }
  }
  if (!PROXY) {
    console.error('✗ 直连失败且未探测到本机代理。请开启代理后重试，或 --proxy=host:port 指定。');
    process.exit(2);
  }
}

/* ---------- 批量查询与抓取 ---------- */
async function batchImages(api, titles) {
  const url = `${api}?action=query&prop=pageimages&piprop=thumbnail&pithumbsize=${PITHUMB}&format=json&redirects=1&titles=${encodeURIComponent(titles.join('|'))}`;
  const data = await getJson(url);
  const map = {};
  for (const p of Object.values(data?.query?.pages ?? {})) {
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

const have = new Set(fs.readdirSync(OUT));
const todo = graph.nodes.filter((n) => !have.has(`${n.id}.jpg`)).slice(0, Number.isFinite(LIMIT) ? LIMIT : undefined);
console.log(`待抓取 ${todo.length} / ${graph.nodes.length} 节点`);

const tasks = todo.map((n) => ({
  id: n.id,
  file: path.join(OUT, `${n.id}.jpg`),
  tries: candidates(n).flatMap((t) => wikiOrder(n).map((w) => ({ title: t, api: WIKIS[w] }))),
}));

let ok = 0;
let round = 0;
let pending = tasks.slice();
while (pending.length && round < 6) {
  const byApi = new Map();
  for (const t of pending) {
    const trie = t.tries[round];
    if (!trie) continue;
    const arr = byApi.get(trie.api) ?? [];
    arr.push({ task: t, title: trie.title });
    byApi.set(trie.api, arr);
  }
  const nextPending = [];
  for (const [api, arr] of byApi) {
    for (let i = 0; i < arr.length; i += 10) {
      const chunk = arr.slice(i, i + 10);
      let map = {};
      try {
        map = await batchImages(api, chunk.map((c) => c.title));
      } catch (e) {
        console.error(`  API 失败: ${e.message}`);
        nextPending.push(...chunk.map((c) => c.task));
        continue;
      }
      for (const c of chunk) {
        const url = map[c.title.toLowerCase()];
        if (url && (await download(url, c.task.file))) {
          ok++;
          c.task.tries = [];
        }
      }
      await sleep(200);
    }
  }
  pending = pending.filter((t) => t.tries.length && !fs.existsSync(t.file));
  round++;
  console.log(`第 ${round} 轮完成：累计成功 ${ok}，剩余 ${pending.length}`);
}

const missList = tasks.filter((t) => !fs.existsSync(t.file)).map((t) => t.id);
fs.writeFileSync(path.join(ROOT, 'scripts', 'fetch-misses.json'), JSON.stringify({ source: 'fandom', misses: missList, at: new Date().toISOString() }, null, 2));
console.log(`\n完成：命中 ${ok}，未命中 ${missList.length}。下一步：npm run data:build → 刷新网站。`);
