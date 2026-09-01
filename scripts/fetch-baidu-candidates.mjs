#!/usr/bin/env node
/**
 * 百度图片直连候选抓取（本机 fandom 封锁、必应图床重置时的主通道）：
 * 每节点中文 query 调 image.baidu.com/search/acjson，取前 8 张 thumbURL 下载到
 * .tmp-bing/<id>/<i>.jpg，候选信息写 .tmp-bing/candidates.json（含 objURL 原图）。
 * 用法：node scripts/fetch-baidu-candidates.mjs [--only=id1,id2]
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

const TARGETS = {
  'mnt-black-widow':   { zh: '黑寡妇', queries: ['黑寡妇 漫威 漫画'] },
  'mnt-black-panther': { zh: '黑豹', queries: ['黑豹 漫威 漫画'] },
  'mnt-ghost':         { zh: '幽灵', queries: ['幽灵 漫威 超级英雄', '艾娃·斯塔尔 幽灵 漫威'] },
  'mnt-spectrum':      { zh: '光谱', queries: ['莫妮卡·兰博 光谱 漫威'] },
  'mnt-ms-marvel':     { zh: '惊奇少女', queries: ['惊奇少女 卡玛拉 漫威'] },
  'mnt-echo':          { zh: '回声', queries: ['玛雅·洛佩斯 回声 漫威'] },
  'mnt-iron-fist':     { zh: '铁拳', queries: ['铁拳 丹尼·兰德 漫威'] },
  'mnt-us-agent':      { zh: '美国特工', queries: ['美国特工 约翰·沃克 漫威'] },
  'mnt-prowler':       { zh: '徘徊者', queries: ['徘徊者 漫威 蜘蛛侠'] },
  'mnt-scorpion':      { zh: '蝎子人', queries: ['蝎子人 麦克·加根 漫威'] },
  'mnt-lizard':        { zh: '蜥蜴人', queries: ['蜥蜴人 科特·康纳斯 漫威'] },
  'mnt-kraven':        { zh: '克莱文', queries: ['猎人克莱文 漫威'] },
  'mnt-purple-man':    { zh: '紫色人', queries: ['紫色人 杰西卡·琼斯 漫威', '基尔格雷夫 漫威'] },
  'mnt-human-torch':   { zh: '霹雳火', queries: ['霹雳火 约翰尼·斯通 漫威'] },
  'mnt-gambit':        { zh: '牌皇', queries: ['牌皇 雷米 漫威 X战警'] },
  'mnt-iceman':        { zh: '冰人', queries: ['冰人 鲍比·德雷克 漫威 X战警'] },
  'mnt-nova':          { zh: '新星', queries: ['新星 理查德·赖德 漫威'] },
  'mnt-blue-marvel':   { zh: '蓝奇', queries: ['蓝漫威 蓝奇 亚当·布拉舍尔'] },
  'mnt-wiccan':        { zh: '巫术', queries: ['巫术 比利·卡普兰 漫威'] },
  'mnt-iron-lad':      { zh: '钢铁少年', queries: ['Iron Lad Marvel', '钢铁小子 漫威'] },
  'mnt-morbius':       { zh: '莫比亚斯', queries: ['莫比亚斯 漫威'] },
  'mnt-war-machine':   { zh: '战争机器', queries: ['战争机器 漫威 漫画'] },
  'mnt-vision':        { zh: '幻视', queries: ['幻视 漫威 钢铁侠 3', '幻视 保罗·贝坦尼'] },
  'ch-vision':         { zh: '幻视(人物)', queries: ['幻视 复仇者联盟 漫画'] },
  'ch-james-rhodes':   { zh: '詹姆斯·罗兹', queries: ['詹姆斯·罗兹 战争机器 漫威'] },
};

const onlyArg = process.argv.find((a) => a.startsWith('--only='));
const only = onlyArg ? new Set(onlyArg.split('=')[1].split(',')) : null;
const targets = Object.entries(TARGETS).filter(([id]) => !only || only.has(id));

function exec(url, referer) {
  return new Promise((resolve) => {
    const args = ['-s', '-L', '--max-time', '20', '-A', UA, '-H', 'Accept-Language: zh-CN,zh;q=0.9'];
    if (referer) args.push('-e', referer);
    args.push(url);
    execFile('curl', args, { maxBuffer: 60 * 1024 * 1024 }, (err, stdout) => resolve(err ? null : String(stdout)));
  });
}

async function baiduCandidates(q) {
  const txt = await exec(`https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&word=${encodeURIComponent(q)}&pn=0&rn=30`, 'https://image.baidu.com/');
  if (!txt) return [];
  try {
    const j = JSON.parse(txt);
    const items = [];
    const seen = new Set();
    for (const x of j.data ?? []) {
      if (!x?.thumbURL) continue;
      const k = String(x.objURL ?? '') + String(x.thumbURL);
      if (seen.has(k)) continue;
      seen.add(k);
      items.push({ thumb: x.thumbURL, obj: x.objURL ?? x.thumbURL, title: String(x.fromPageTitleEnc ?? '').slice(0, 60) });
      if (items.length >= 8) break;
    }
    return items;
  } catch { return []; }
}

function curlFile(url, referer, toFile) {
  return new Promise((resolve) => {
    execFile('curl', ['-s', '-L', '--max-time', '25', '-A', UA, '-e', referer, '-o', toFile, url], { maxBuffer: 60 * 1024 * 1024 }, (err) => {
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
  const items = [];
  for (const q of t.queries) {
    const list = await baiduCandidates(q);
    const have = new Set(items.map((x) => x.thumb));
    for (const x of list) if (!have.has(x.thumb)) { items.push(x); have.add(x.thumb); }
    if (items.length >= 8) break;
    await sleep(350);
  }
  candidates[id] = { zh: t.zh, picked: items.slice(0, 8).map((p, i) => ({ ...p, i })) };
  for (const p of candidates[id].picked) {
    await curlFile(p.thumb, 'https://image.baidu.com/', path.join(dir, `${p.i}.jpg`));
    await sleep(120);
  }
  const okN = candidates[id].picked.filter((p) => fs.existsSync(path.join(dir, `${p.i}.jpg`))).length;
  console.log(`✓ ${id} ${t.zh}: ${candidates[id].picked.length} 候选 / ${okN} 下载成功`);
}
fs.writeFileSync(path.join(TMP, 'candidates.json'), JSON.stringify(candidates, null, 1));
console.log('完成 → .tmp-bing/candidates.json');
