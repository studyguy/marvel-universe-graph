#!/usr/bin/env node
/**
 * 必应直连候选图抓取（无需代理，本机 fandom 封锁时的补充通道）：
 * 对每个节点用中英双 query 拉 cn.bing.com/images/async，取前 8 张缩略图存 .tmp-bing/<id>/<i>.jpg，
 * 并把候选元信息（turl/murl/purl）写入 .tmp-bing/candidates.json，供 montage-bing-sheets.py 生成接触片目检。
 * 用法：node scripts/fetch-bing-candidates.mjs [--only=id1,id2] [--reuse]（--reuse 跳过搜索，仅按 candidates.json 下载 murl 原图）
 * 注意：ts*.mm.bing.net 缩略图在此网络被重置，故一律下载候选 murl（原始图 URL）。
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TMP = path.join(ROOT, '.tmp-bing');
fs.mkdirSync(TMP, { recursive: true });

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// 目标节点：id -> { zh, queries: [...] }（精选英文 query，倾向漫画官方图风格）
const TARGETS = {
  'mnt-black-widow':   { zh: '黑寡妇',   queries: ['Black Widow Natasha Romanoff Marvel comic art'] },
  'mnt-black-panther': { zh: '黑豹',     queries: ['Black Panther T\'Challa Marvel comic art'] },
  'mnt-ghost':         { zh: '幽灵',     queries: ['Ghost Ava Starr Marvel', 'Ghost Marvel Comics character'] },
  'mnt-spectrum':      { zh: '光谱',     queries: ['Spectrum Monica Rambeau Marvel'] },
  'mnt-ms-marvel':     { zh: '惊奇少女', queries: ['Ms. Marvel Kamala Khan comic art'] },
  'mnt-echo':          { zh: '回声',     queries: ['Echo Maya Lopez Marvel'] },
  'mnt-iron-fist':     { zh: '铁拳',     queries: ['Iron Fist Danny Rand Marvel comic art'] },
  'mnt-us-agent':      { zh: '美国特工', queries: ['U.S. Agent John Walker Marvel'] },
  'mnt-prowler':       { zh: '徘徊者',   queries: ['Prowler Marvel Comics'] },
  'mnt-scorpion':      { zh: '蝎子人',   queries: ['Scorpion Mac Gargan Marvel villain'] },
  'mnt-lizard':        { zh: '蜥蜴人',   queries: ['Lizard Curt Connors Marvel villain'] },
  'mnt-kraven':        { zh: '克莱文',   queries: ['Kraven the Hunter Marvel villain'] },
  'mnt-purple-man':    { zh: '紫色人',   queries: ['Purple Man Killgrave Marvel'] },
  'mnt-human-torch':   { zh: '霹雳火',   queries: ['Human Torch Johnny Storm comic art'] },
  'mnt-gambit':        { zh: '牌皇',     queries: ['Gambit Marvel Comics'] },
  'mnt-iceman':        { zh: '冰人',     queries: ['Iceman Bobby Drake Marvel'] },
  'mnt-nova':          { zh: '新星',     queries: ['Nova Richard Rider Marvel'] },
  'mnt-blue-marvel':   { zh: '蓝奇',     queries: ['Blue Marvel Adam Brashear Marvel'] },
  'mnt-wiccan':        { zh: '巫术',     queries: ['Wiccan Billy Kaplan Marvel'] },
  'mnt-iron-lad':      { zh: '钢铁少年', queries: ['Iron Lad Marvel Avengers'] },
  'mnt-morbius':       { zh: '莫比亚斯', queries: ['Morbius Marvel Comics'] },
  'mnt-war-machine':   { zh: '战争机器', queries: ['War Machine Marvel comic art'] },
  'mnt-vision':        { zh: '幻视',     queries: ['Vision Marvel Comics'] },
  'ch-vision':         { zh: '幻视(人物)', queries: ['Vision Marvel Comics'] },
  'ch-james-rhodes':   { zh: '詹姆斯·罗兹', queries: ['James Rhodes War Machine Marvel'] },
};

const onlyArg = process.argv.find((a) => a.startsWith('--only='));
const only = onlyArg ? new Set(onlyArg.split('=')[1].split(',')) : null;
const reuse = process.argv.includes('--reuse');
const targets = Object.entries(TARGETS).filter(([id]) => !only || only.has(id));

async function bingCandidates(q) {
  const html = await fetchText(`https://cn.bing.com/images/async?q=${encodeURIComponent(q)}&first=0&count=30&mmasync=1`, 'https://cn.bing.com/');
  const items = [];
  for (const m of html.matchAll(/m="(\{[^"]+\})"/g)) {
    try {
      const blob = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
      if (blob.murl && blob.turl) items.push({ turl: blob.turl, murl: blob.murl, purl: blob.purl ?? '', cid: blob.cid ?? '' });
    } catch { /* skip */ }
    if (items.length >= 8) break;
  }
  const seen = new Set();
  const uniq = [];
  for (const it of items) {
    const k = it.murl + '|' + it.turl;
    if (!seen.has(k)) { seen.add(k); uniq.push(it); }
  }
  return uniq;
}

// 小工具：文本抓取
async function fetchText(url, referer) {
  return new Promise((resolve) => {
    const args = ['-s', '-L', '--max-time', '20', '-A', UA];
    if (referer) args.push('-e', referer);
    args.push(url);
    execFile('curl', args, { maxBuffer: 8 * 1024 * 1024 }, (err, stdout) => resolve(err ? '' : String(stdout)));
  });
}

// 下载验证：curl 返回 ok 且文件非空；无效则删除并以 fail 记录
function curlFile(url, referer, toFile) {
  return new Promise((resolve) => {
    const args = ['-s', '-L', '--max-time', '25', '-A', UA];
    if (referer) args.push('-e', referer);
    args.push('-o', toFile, url);
    execFile('curl', args, { maxBuffer: 40 * 1024 * 1024 }, (err) => {
      const ok = !err && fs.existsSync(toFile) && fs.statSync(toFile).size > 1500;
      if (!ok) fs.rmSync(toFile, { force: true });
      resolve(!!ok);
    });
  });
}

const candidates = {};
for (const [id, t] of targets) {
  const dir = path.join(TMP, id);
  fs.mkdirSync(dir, { recursive: true });
  let items;
  if (reuse && fs.existsSync(path.join(TMP, 'candidates.json'))) {
    const existing = JSON.parse(fs.readFileSync(path.join(TMP, 'candidates.json'), 'utf8'))[id];
    items = existing?.picked ?? [];
  } else {
    items = [];
    for (const q of t.queries) {
      const list = await bingCandidates(q);
      mergeUnique(items, list);
      if (items.length >= 8) break;
      await sleep(400);
    }
  }
  candidates[id] = { zh: t.zh, picked: items.slice(0, 8).map((p, i) => ({ ...p, i })) };
  for (const p of candidates[id].picked) {
    await curlFile(p.murl, p.purl || 'https://cn.bing.com/', path.join(dir, `${p.i}.jpg`));
    await sleep(150);
  }
  const okN = candidates[id].picked.filter((p) => fs.existsSync(path.join(dir, `${p.i}.jpg`))).length;
  console.log(`✓ ${id} ${t.zh}: ${candidates[id].picked.length} 候选 / ${okN} 下载成功`);
}
fs.writeFileSync(path.join(TMP, 'candidates.json'), JSON.stringify(candidates, null, 1));
console.log('完成，候选信息 → .tmp-bing/candidates.json');

function mergeUnique(target, list) {
  const have = new Set(target.map((x) => x.murl));
  for (const x of list) if (!have.has(x.murl)) { target.push(x); have.add(x.murl); }
}
