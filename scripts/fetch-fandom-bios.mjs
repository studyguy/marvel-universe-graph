/**
 * fandom 批量采集模块（供浏览器 REPL 加载执行，无需项目内 playwright 依赖）：
 *   import { collectBatch } from '<abs>/scripts/fetch-fandom-bios.mjs'
 * 流程：按 targets 清单逐页 goto → evaluate(EXTRACT) 提取 infobox/分段正文/页面URL
 *       → 写 .tmp-fandom/<type>/<id>.txt + .tmp-fandom/sources.json（供 sources 填写）
 * EXTRACT 兼容上轮验证过的两类页面：普通正文页（.mw-parser-output 章节）与
 * 特殊结构页（长正文无章节，如 Venom (Symbiote)）。
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TMP = path.join(ROOT, '.tmp-fandom');
fs.mkdirSync(TMP, { recursive: true });

/** 页面内执行：提取正文（evaluate 注入） */
export const EXTRACT = () => {
  const clean = (s) => s.replace(/\[\d+\]/g, '').replace(/\s+/g, ' ').trim();
  const h1 = document.querySelector('h1')?.textContent?.trim().replace(/\s+/g, ' ') || '';
  const ib = document.querySelector('aside.portable-infobox');
  const infobox = ib ? clean(ib.textContent).slice(0, 900) : '';
  const root = document.querySelector('.mw-parser-output');
  const intro = [];
  const groups = [];
  let curHeader = null;
  if (root) {
    for (const el of root.children) {
      const tag = el.tagName.toLowerCase();
      if (tag === 'h2' || tag === 'h3') { curHeader = clean(el.textContent); continue; }
      if (tag === 'p') { const t = clean(el.textContent); if (t.length > 60 && !t.startsWith('Contents')) intro.push(t); }
      if (curHeader && el.classList.contains('marvel_database_section')) {
        const ps = Array.from(el.querySelectorAll('p')).map((p) => clean(p.textContent)).filter((t) => t.length > 60);
        if (ps.length) groups.push({ h: curHeader, ps: ps.slice(0, 4) });
        curHeader = null;
      }
    }
    groups.push({ h: 'intro', ps: intro.slice(0, 4) });
  }
  // 特殊结构页兜底：无章节时取整页最长正文
  if (groups.length <= 1) {
    const full = clean(root ? root.innerText : '').slice(0, 6000);
    if (full.length > 200) groups.push({ h: 'body', ps: [full] });
  }
  return { h1, infobox, groups, url: location.href };
};

/**
 * 批量采集：tab 需为已过 Cloudflare 的 fandom 标签页。
 * @param {import('node-repl').any} tab IAB tab
 * @param {Array<{id:string; title:string; type?:string}>} targets
 * @param {{delay?:number; log?:boolean}} opts
 */
export async function collectBatch(tab, targets, opts = {}) {
  const delay = opts.delay ?? 1000;
  const results = [];
  const sources = {};
  for (const t of targets) {
    const type = t.type ?? t.id.split('-')[0];
    const dir = path.join(TMP, type);
    fs.mkdirSync(dir, { recursive: true });
    await tab.goto('https://marvel.fandom.com/wiki/' + encodeURIComponent(t.title));
    await tab.playwright.waitForLoadState({ state: 'domcontentloaded' });
    await new Promise((r) => setTimeout(r, delay));
    const page = await tab.playwright.evaluate(EXTRACT);
    if (page.h1 !== t.title) {
      results.push(`✗ ${t.id}: h1=${page.h1 || '(empty)'}`);
      continue;
    }
    const sb = [`# ${t.title}`, `## h1: ${page.h1}`, `## Infobox`, page.infobox];
    for (const g of page.groups) {
      sb.push(`\n## ${g.h}`);
      for (const p of g.ps) sb.push(p);
    }
    fs.writeFileSync(path.join(dir, `${t.id}.txt`), sb.join('\n\n'));
    sources[t.id] = page.url;
    results.push(`✓ ${t.id}: ${t.title} (${page.groups.length} 段)`);
  }
  const prev = JSON.parse(fs.readFileSync(path.join(TMP, 'sources.json'), 'utf8').catch ? (fs.existsSync(path.join(TMP, 'sources.json')) ? fs.readFileSync(path.join(TMP, 'sources.json'), 'utf8') : '{}') : '{}');
  fs.writeFileSync(path.join(TMP, 'sources.json'), JSON.stringify({ ...prev, ...sources }, null, 1));
  return results;
}

/** 读取已采集素材与来源 */
export function loadMaterial(type) {
  const dir = path.join(TMP, type);
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.txt')) : [];
  const sources = fs.existsSync(path.join(TMP, 'sources.json')) ? JSON.parse(fs.readFileSync(path.join(TMP, 'sources.json'), 'utf8')) : {};
  return files.map((f) => ({
    id: f.replace(/\.txt$/, ''),
    text: fs.readFileSync(path.join(dir, f), 'utf8'),
    url: sources[f.replace(/\.txt$/, '')] ?? '',
  }));
}
