/** 生成式节点头像 v2 —— "海报级"美术：类型配色 + 子类徽章 + 纹样 + 初始字 + 装饰环，确定性生成 */
import type { GraphNode } from '../../data/schema';
import { nodeTypeMap } from '../../data/taxonomy';

const cache = new Map<string, string>();

function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}
function hexToRgb(hex: string): [number, number, number] {
  const v = parseInt(hex.slice(1), 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
}
function rgba(hex: string, a: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r},${g},${b},${a})`;
}
function shade(hex: string, f: number): string {
  const [r, g, b] = hexToRgb(hex);
  const m = (v: number) => Math.max(0, Math.min(255, Math.round(v * f)));
  return `rgb(${m(r)},${m(g)},${m(b)})`;
}

/** 子类徽章符号（按节点 sub 匹配前缀） */
const SUB_GLYPHS: [RegExp, string][] = [
  [/villain/, '☠'],
  [/^hero$/, '✪'],
  [/^title$/, '✪'], [/superhero|hero-team/, '★'], [/antihero/, '◑'], [/civilian|mundane/, '◦'],
  [/cosmic/, '✦'], [/deity|mythic|faith/, '⚡'], [/ai/, '⚙'], [/symbiote|bio/, '❂'],
  [/variant|clone|secret/, '◈'], [/animal/, '❉'], [/scientist/, '⚛'], [/military|agency|empire/, '⛨'],
  [/city|facility|planet/, '⌖'], [/dimension|nexus|pocket/, '◉'], [/film|series|special/, '▶'],
  [/animation|anime/, '☁'], [/comic/, '✎'], [/game/, '⬢'], [/war|combat|timeline/, '⚔'],
  [/political|media/, '▣'], [/origin|power|spark/, '✸'], [/source/, '⌾'], [/magic/, '❉'],
];
function subGlyph(node: GraphNode): string {
  for (const [re, g] of SUB_GLYPHS) if (re.test(node.sub)) return g;
  return '★';
}

/** 256×256 头像 dataURL（全站统一视觉：画布圆卡 / 详情封面 / 搜索缩略图 / 关系小头像） */
export function avatarFor(node: GraphNode): string {
  const cached = cache.get(node.id);
  if (cached) return cached;
  const type = nodeTypeMap.get(node.type);
  const color = type?.color ?? '#8fa3bf';
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext('2d')!;
  const h = hashCode(node.id);
  const [r, g, b] = hexToRgb(color);

  // 1) 对角渐变底（亮部→深部，随 id 微调角度）
  const grad = ctx.createLinearGradient(h % 80, 0, 256, 256);
  grad.addColorStop(0, shade(color, 1.18));
  grad.addColorStop(0.55, shade(color, 0.55));
  grad.addColorStop(1, `rgb(${Math.round(r * 0.16)},${Math.round(g * 0.14)},${Math.round(b * 0.26)})`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);

  // 2) 几何纹样： seeded 放射条纹 + 点阵
  ctx.save();
  ctx.globalAlpha = 0.10;
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 3; i++) {
    const x = ((h >> (i * 3)) % 256) - 64;
    ctx.save();
    ctx.translate(x, -40);
    ctx.rotate(0.5 + i * 0.18);
    ctx.fillRect(0, 0, 24 + ((h >> i) % 30), 360);
    ctx.restore();
  }
  ctx.restore();
  ctx.save();
  ctx.globalAlpha = 0.08;
  ctx.fillStyle = '#ffffff';
  const dot = 8;
  for (let yy = 16; yy < 256; yy += 24) {
    for (let xx = 16 + ((yy / 24) % 2) * 12; xx < 256; xx += 24) {
      ctx.beginPath();
      ctx.arc(xx, yy, dot / 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();

  // 3) 中心柔光，承托主体
  const glow = ctx.createRadialGradient(128, 116, 20, 128, 128, 150);
  glow.addColorStop(0, 'rgba(255,255,255,0.28)');
  glow.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 256, 256);

  // 4) 主体字（中文首字 / 英文首字母）
  const zhFirst = node.name.zh?.trim()?.[0];
  const enFirst = node.name.en?.trim()?.[0]?.toUpperCase();
  const glyph = /[a-zA-Z0-9]/.test(zhFirst ?? '') ? (enFirst ?? zhFirst) : zhFirst;
  ctx.font = `800 ${glyph && glyph.charCodeAt(0) > 0x2e80 ? 124 : 136}px "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = 'rgba(6,10,18,0.55)';
  ctx.lineWidth = 10;
  ctx.strokeText(glyph ?? '★', 128, 138);
  const tg = ctx.createLinearGradient(0, 60, 0, 210);
  tg.addColorStop(0, '#ffffff');
  tg.addColorStop(1, rgba(color, 0.85));
  ctx.fillStyle = tg;
  ctx.fillText(glyph ?? '★', 128, 138);

  // 5) 子类徽章（右上角圆章）
  const badge = subGlyph(node);
  ctx.save();
  ctx.beginPath();
  ctx.arc(208, 52, 26, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(8,12,22,0.6)';
  ctx.fill();
  ctx.strokeStyle = rgba('#ffffff', 0.5);
  ctx.lineWidth = 2.5;
  ctx.stroke();
  ctx.font = '700 26px "Segoe UI", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(badge, 208, 54);
  ctx.restore();

  // 6) 装饰环（左下弧）+ 年代/编号角标
  ctx.save();
  ctx.strokeStyle = rgba('#ffffff', 0.4);
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(40, 220, 34, Math.PI * 0.9, Math.PI * 1.75);
  ctx.stroke();
  ctx.restore();
  const year = typeof node.props?.year === 'string' ? node.props.year.slice(0, 4) : '';
  const desig = typeof node.props?.designation === 'string' ? node.props.designation : '';
  const tag = (year.match(/^\d{4}/) ?? [])[0] ?? desig;
  if (tag && tag !== '—') {
    ctx.font = '700 20px "Segoe UI", sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.fillText(tag, 14, 244);
  }

  const url = c.toDataURL('image/png');
  cache.set(node.id, url);
  return url;
}

/** 真实图片加载器：优先 /assets/images/<id>.jpg（fetch-images 产物），失败回退生成头像 */
const imgCache = new Map<string, HTMLImageElement>();
export function imageFor(node: GraphNode): HTMLImageElement {
  const hit = imgCache.get(node.id);
  if (hit) return hit;
  const img = new Image();
  if (node.img) {
    img.src = `assets/images/${node.id}.jpg`;
    img.onerror = () => {
      img.onerror = null;
      img.src = avatarFor(node);
    };
  } else {
    img.src = avatarFor(node);
  }
  imgCache.set(node.id, img);
  return img;
}

/** 同步取当前可用图 URL（UI 缩略图用）：真实图存在则用之，否则生成头像 */
export function imageUrlFor(node: GraphNode): string {
  return node.img ? `assets/images/${node.id}.jpg` : avatarFor(node);
}
