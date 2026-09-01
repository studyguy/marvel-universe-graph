#!/usr/bin/env node
/**
 * 节点真实图像抓取 — 百度百科通道（直连可达）：
 *  仅抓"人物/称号型"词条（desc 含 漫威/超级英雄/超级反派/反英雄/称号 等），
 *  排除影视作品词条（执导/上映/影片 等），避免把电影海报当角色图。
 * 用法：node scripts/fetch-images-baike.mjs [--limit=N] [--types=mantle,character]
 * 产物 public/assets/images/<id>.jpg → npm run data:build 打标后全站生效。
 * 来源：百度百科词条主图（仅学习/演示用途，页脚/README 已注明来源与许可）。
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'assets', 'images');
fs.mkdirSync(OUT, { recursive: true });

const API = 'https://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';
const graph = JSON.parse(fs.readFileSync(path.join(ROOT, 'public', 'data', 'graph.json'), 'utf8'));
const argLimit = process.argv.find((a) => a.startsWith('--limit='));
const LIMIT = argLimit ? parseInt(argLimit.split('=')[1], 10) : Infinity;
const typesArg = process.argv.find((a) => a.startsWith('--types='));
const TYPES = typesArg ? typesArg.split('=')[1].split(',') : ['mantle', 'character'];

const PERSON_HINTS = ['漫威', '超级英雄', '超级反派', '反英雄', '称号', '漫画旗下', '英雄角色'];
/** 明确错配词条黑名单（词条主义非漫威角色，如《战争机器》游戏 / 日本《幻视 MARU》） */
const BAD_KEYS = ['幻视', '战争机器', '幽灵', '光谱', '回声', '霹雳火', '冰人', '新星', '巫术', '徘徊者', '紫色人', '钢铁少年', '蓝奇', '蝎子人', '蜥蜴人', '美国特工'];
const FILM_HINTS = ['执导', '上映', '影片', '科幻片', '动作片', '动画', '电视剧', '游戏', '神话', '专辑', '乐队', '小说'];
function isPersonEntry(desc) {
  const d = String(desc ?? '');
  if (!d) return false;
  if (FILM_HINTS.some((h) => d.includes(h))) return false;
  return PERSON_HINTS.some((h) => d.includes(h));
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function curlGet(url) {
  return new Promise((resolve) => {
    execFile('curl', ['-s', '--max-time', '12', '-A', UA, url], { maxBuffer: 10 * 1024 * 1024 }, (err, stdout) => resolve(err ? '' : String(stdout)));
  });
}
function curlDownload(url, file) {
  return new Promise((resolve) => {
    execFile('curl', ['-s', '-L', '--max-time', '25', '-A', UA, '-e', 'https://baike.baidu.com/', '-o', file, url], { maxBuffer: 20 * 1024 * 1024 }, (err) => {
      const ok = !err && fs.existsSync(file) && fs.statSync(file).size > 4000;
      if (!ok) fs.rmSync(file, { force: true });
      resolve(ok);
    });
  });
}

const have = new Set(fs.readdirSync(OUT));
const queue = graph.nodes.filter((n) => TYPES.includes(n.type) && !have.has(`${n.id}.jpg`));
console.log(`百度通道：待抓 ${queue.length}（类型 ${TYPES.join('/')}）`);

let ok = 0;
const failed = [];
for (const n of queue) {
  if (ok >= LIMIT && Number.isFinite(LIMIT)) break;
  const key = n.name.zh.trim();
  if (BAD_KEYS.includes(key)) { failed.push(n.id); continue; }
  const file = path.join(OUT, `${n.id}.jpg`);
  try {
    const txt = await curlGet(API + encodeURIComponent(key));
    const d = txt ? JSON.parse(txt) : null;
    if (d?.image && isPersonEntry(d.desc)) {
      const img = String(d.image).split('?')[0] + '?x-bce-process=image/resize,w_500';
      if (await curlDownload(img, file)) {
        ok++;
        if (ok % 10 === 0) console.log(`  已完成 ${ok}`);
      } else {
        failed.push(n.id);
      }
    } else {
      failed.push(n.id);
    }
  } catch {
    failed.push(n.id);
  }
  await sleep(250);
}
console.log(`\n完成：新增 ${ok}，跳过 ${failed.length}。图片总数 ${fs.readdirSync(OUT).length}。下一步：npm run data:build → 刷新网站。`);
