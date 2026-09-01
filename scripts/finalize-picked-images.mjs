#!/usr/bin/env node
/**
 * 候选定稿：按 picks 表把 .tmp-bing/candidates.json 中选中的候选下载为
 * public/assets/images/<id>.jpg（thumb 去 w/h 参数取原尺寸；失败则回退 objURL）。
 * 用法：node scripts/finalize-picked-images.mjs
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TMP = path.join(ROOT, '.tmp-bing');
const OUT = path.join(ROOT, 'public', 'assets', 'images');

// 目检选图（index 对应 montage 接触片编号）
const PICKS = {
  'mnt-black-widow': 1,
  'mnt-black-panther': 1,
  'mnt-ghost': 0,
  'mnt-spectrum': 1,
  'mnt-ms-marvel': 0,
  'mnt-echo': 3,
  'mnt-iron-fist': 0,
  'mnt-us-agent': 1,
  'mnt-prowler': 5,
  'mnt-scorpion': 0,
  'mnt-lizard': 0,
  'mnt-kraven': 1,
  'mnt-purple-man': 0,
  'mnt-human-torch': 0,
  'mnt-gambit': 0,
  'mnt-iceman': 0,
  'mnt-nova': 1,
  'mnt-blue-marvel': 1,
  'mnt-wiccan': 3,
  'mnt-iron-lad': 2,
  'mnt-morbius': 5,
  'mnt-war-machine': 1,
  'mnt-vision': 4,
  'ch-vision': 4,
  'ch-james-rhodes': 0,
};

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function curlFile(url, referer, toFile) {
  return new Promise((resolve) => {
    execFile('curl', ['-s', '-L', '--max-time', '30', '-A', UA, '-e', referer, '-o', toFile, url], { maxBuffer: 60 * 1024 * 1024 }, (err) => {
      const ok = !err && fs.existsSync(toFile) && fs.statSync(toFile).size > 2000;
      if (!ok) fs.rmSync(toFile, { force: true });
      resolve(!!ok);
    });
  });
}

const candidates = JSON.parse(fs.readFileSync(path.join(TMP, 'candidates.json'), 'utf8'));
const provenance = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'fetch-provenance.json'), 'utf8'));

for (const [id, pick] of Object.entries(PICKS)) {
  const c = candidates[id]?.picked?.[pick];
  if (!c) { console.log(`✗ ${id}: 无候选 ${pick}`); continue; }
  let urls = [c.thumb.replace(/\?w=\d+(&h=\d+)?/, ''), c.thumb, c.obj].filter((u, i, a) => u && a.indexOf(u) === i);
  let done = false;
  let usedUrl = null;
  for (const u of urls) {
    const dest = path.join(OUT, `${id}.jpg`);
    if (await curlFile(u, 'https://image.baidu.com/', dest)) { done = true; usedUrl = u; break; }
  }
  if (done) {
    provenance[id] = { src: 'baidu-image', url: usedUrl, pick: pick, ts: new Date().toISOString() };
    fs.writeFileSync(path.join(ROOT, 'scripts', 'fetch-provenance.json'), JSON.stringify(provenance, null, 1));
    console.log(`✓ ${id}`);
  } else {
    console.log(`✗ ${id}: 全部 URL 下载失败`);
  }
  await sleep(150);
}
console.log('完成 → public/assets/images/<id>.jpg');
