#!/usr/bin/env node
/**
 * 节点真实图像抓取 — Web 通道（走本机代理）：
 *  - 作品(work)：豆瓣 subject_suggest → 海报大图（l_ratio_poster）
 *  - 其余：必应图片异步接口首图（必应 CDN 缩略）
 * 用法：node scripts/fetch-images-web.mjs [--limit=N] [--proxy=host:port]
 * 产物 public/assets/images/<id>.jpg → npm run data:build 打标后全站生效。
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

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let PROXY = proxyArg ? 'http://' + proxyArg.split('=')[1] : null;

function curlGet(url, referer, toFile) {
  const args = ['-s', '-L', '--max-time', '25', '-A', UA];
  if (referer) args.push('-e', referer);
  if (PROXY) args.unshift('--proxy', PROXY);
  args.push(url);
  if (toFile) args.splice(6, 0, '-o', toFile);
  return new Promise((resolve) => {
    execFile('curl', args, { maxBuffer: 60 * 1024 * 1024 }, (err, stdout) => {
      if (toFile) {
        if (!err && fs.existsSync(toFile) && fs.statSync(toFile).size > 1500) resolve('ok');
        else { fs.rmSync(toFile, { force: true }); resolve('fail'); }
      } else resolve(err ? '' : String(stdout));
    });
  });
}
async function getJson(url, referer) {
  const txt = await curlGet(url, referer);
  if (!txt) return null;
  try { return JSON.parse(txt); } catch { return null; }
}

async function probe(port) {
  const args = ['-s', '-L', '--max-time', '6', '--proxy', 'http://127.0.0.1:' + port, '-o', 'NUL', '-w', '%{http_code}', 'https://marvel.fandom.com/api.php?action=query&format=json&titles=X'];
  return new Promise((resolve) => execFile('curl', args, { maxBuffer: 1024 * 1024 }, (err, stdout) => resolve(err ? '' : String(stdout))));
}
if (!PROXY) {
  for (const p of [7897, 7890, 10809, 1080, 8888]) {
    const code = await probe(p);
    if (code === '200') { PROXY = `http://127.0.0.1:${p}`; console.log(`使用本机代理端口 ${p}`); break; }
  }
  if (!PROXY) { console.error('✗ 未探测到可用代理，请 --proxy=host:port 指定（Web 图床需代理访问）。'); process.exit(2); }
}

async function doubanPoster(zh) {
  const queries = [zh, zh.split(/[：:]/)[0], zh.split(/[：:\s]/)[0], zh.slice(0, 4)].filter((x, i, a) => x && x.length >= 2 && a.indexOf(x) === i);
  for (const q of queries) {
    const list = await getJson(`https://movie.douban.com/j/subject_suggest?q=${encodeURIComponent(q)}`, 'https://movie.douban.com/');
    if (Array.isArray(list) && list.length) {
      const hit = list.find((x) => x.img) ?? list[0];
      if (hit?.img) return hit.img.replace('/s_ratio_poster/', '/l_ratio_poster/');
    }
    await sleep(300);
  }
  return null;
}

async function bingFirstImage(query) {
  const html = await curlGet(`https://cn.bing.com/images/async?q=${encodeURIComponent(query)}&first=0&count=8&mmasync=1`, 'https://cn.bing.com/');
    const m = (html ?? '').match(/m="(\{[^"]+\})"/);
  if (!m) return null;
  try {
    const blob = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
    return { url: blob.turl ?? blob.murl, referer: 'https://cn.bing.com/' };
  } catch { return null; }
}
const SKIP = new Set(['universe', 'race', 'ability', 'channel']);
const TYPE_QUERY = {
  character: (n) => `${n.name.zh.split(/[\s·]+/)[0]} 漫威 角色`,
  team: (n) => `${n.name.zh.split(/[\s·]+/)[0]} 漫威`,
  location: (n) => `${n.name.zh.split(/[\s·]+/)[0]} 漫威 场景`,
  item: (n) => `${n.name.zh.split(/[\s·]+/)[0]} 漫威`,
  event: (n) => `${n.name.zh.split(/[\s·]+/)[0]} 漫威 事件`,
};

const have = new Set(fs.readdirSync(OUT));
const queue = graph.nodes.filter((n) => !have.has(`${n.id}.jpg`) && !SKIP.has(n.type));
let ok = 0;
for (const n of queue) {
  if (Number.isFinite(LIMIT) && ok >= LIMIT) break;
  const file = path.join(OUT, `${n.id}.jpg`);
  let got = false;
  if (n.type === 'work') {
    const poster = await doubanPoster(n.name.zh);
        if (poster && (await curlGet(poster, 'https://movie.douban.com/', file)) === 'ok') got = true;
  }
  if (!got && TYPE_QUERY[n.type]) {
    const img = await bingFirstImage(TYPE_QUERY[n.type](n));
        if (img && (await curlGet(img.url, img.referer, file)) === 'ok') got = true;
  }
  if (got) { ok++; if (ok % 10 === 0) console.log(`  已完成 ${ok}`); }
  else console.log(`  ✗ ${n.id} ${n.name.zh}`);
  await sleep(300);
}
console.log(`\n完成：本轮新增 ${ok}；图片总数 ${fs.readdirSync(OUT).length}。下一步：npm run data:build → 刷新网站。`);
