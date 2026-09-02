/** 右侧详情抽屉（PC）/ 底部弹层（移动端）：节点信息 + 分类关系列表 + 来源 */
import { useMemo, useState } from 'react';
import { useStore } from '../store/useStore';
import { nodeTypeMap, relationCatMap, relationMap, RELATION_CATEGORIES } from '../../data/taxonomy';
import type { GraphEdge } from '../../data/schema';
import { bioTitle, t } from '../i18n';
import { imageUrlFor, avatarFor } from '../graph/avatar';
import { CharacterInfoCard } from './CharacterInfoCard';
import { BioModal } from './BioModal';
import { PowerGrid } from './PowerGrid';

const ID_RE = /^(ch|team|loc|item|wk|ev|uni|chan|race|ab)-[\w-]+$/;

/* ---------- 英文界面下的 props 值翻译（数据层为纯中文字符串的字段） ---------- */
const CJK = /[\u4e00-\u9fff]/;
/** 值含「中文…英文」尾注时切出英文（如演员/阶段/年份字段） */
function embeddedEn(v: string): string | null {
  const i = v.search(/[A-Za-z]/);
  if (i <= 0) return null;
  const tail = v.slice(i);
  if (CJK.test(tail)) return null;
  return tail.replace(/[（）()]/g, '').trim() || null;
}
/** 作品中文标题 → 英文标题映射（懒构建自图内 work 节点） */
let workTitles: { zh: string; en: string }[] | null = null;
function worksOf(index: { nodeById: Map<string, any> }): { zh: string; en: string }[] {
  if (!workTitles) {
    workTitles = [];
    for (const n of index.nodeById.values()) {
      if (n.type === 'work' && n.name?.zh) workTitles.push({ zh: n.name.zh, en: n.name.en });
    }
  }
  return workTitles;
}
/** 兜底：个别无独立作品节点的漫画刊物/系列名前缀 */
const WK_ALIAS: [string, string][] = [
  ['神奇蜘蛛侠', 'Amazing Spider-Man'],
  ['超凡蜘蛛侠', 'The Amazing Spider-Man'],
  ['神奇四侠', 'Fantastic Four'],
  ['X战警', 'X-Men'],
  ['新X战警', 'New X-Men'],
  ['复仇者', 'Avengers'],
  ['蜘蛛侠', 'Spider-Man'],
  ['雷神', 'Thor'],
  ['奇异博士', 'Doctor Strange'],
  ['美国队长', 'Captain America'],
  ['死侍', 'Deadpool'],
  ['毒液', 'Venom'],
];
/** 作品首登场串（如「钢铁侠 (2008)」「X战警 #1 (1963) 彩蛋」）转英文 */
function workDebutEn(v: string, index: { nodeById: Map<string, any> }): string | null {
  const t = v.trim();
  for (const { zh, en } of worksOf(index)) {
    if (t.startsWith(zh)) {
      let rest = t.slice(zh.length).trim().replace('彩蛋', 'cameo');
      rest = rest.replace(/[（]/g, '(').replace(/[）]/g, ')');
      return en + (rest ? ` ${rest}` : '');
    }
  }
  for (const [zh, en] of WK_ALIAS) {
    if (t.startsWith(zh)) {
      let rest = t.slice(zh.length).trim().replace('彩蛋', 'cameo');
      return en + (rest ? ` ${rest}` : '');
    }
  }
  return null;
}
/** 职业（occupation）分词表 —— 词段级英文 */
const OCC: Record<string, string> = {
  复仇者: 'Avenger', 初代复仇者: 'Founding Avenger', 科学家: 'Scientist', 学生: 'Student', 少年英雄: 'Teen hero',
  英雄: 'Hero', 护卫队: 'Guardians', 'X 战警': 'X-Man', 永恒族: 'Eternal', 至尊法师: 'Sorcerer Supreme',
  生物学家: 'Biologist', 克里军官: 'Kree officer', 罪犯: 'Criminal', 阿斯加德之王: 'King of Asgard',
  王后: 'Queen', 雷霆特攻队: 'Thunderbolts', 功夫大师: 'Kung-fu master', 法师: 'Sorcerer', 特工: 'Agent',
  变种人: 'Mutant', 义警: 'Vigilante', 雇佣兵: 'Mercenary', 化身: 'Avatar', 十环之主: 'Master of the Ten Rings',
  幻象师: 'Illusionist', 政客: 'Politician', 刺客: 'Assassin', 战士: 'Warrior', 摄影师: 'Photographer', 永续传承: 'Legacy continues',
  企业家: 'Entrepreneur', 反派: 'Villain', 电工: 'Electrician', 超级士兵: 'Super-Soldier', 间谍: 'Spy',
  守门人: 'Gatekeeper', 屠神者: 'God Butcher', 死亡女神: 'Goddess of Death', 新阿斯加德之王: 'King of New Asgard',
  时间之神: 'God of Time', 征服者: 'Conqueror', 时间独裁者: 'Time tyrant', 多元旅行者: 'Multiversal traveler',
  公主: 'Princess', 黑豹: 'Black Panther', 瓦坎达国王: 'King of Wakanda', 瓦坎达将军: 'General of Wakanda',
  部落首领: 'Tribe leader', 塔罗坎之王: 'King of Talokan', 电气工程师: 'Electrical engineer', 护卫队队长: 'Guardians leader',
  掠夺者头目: 'Ravager captain', 宇宙征服者: 'Cosmic conqueror', 斯克鲁领袖: 'Skrull leader', 雇佣兵英雄: 'Mercenary hero',
  律师: 'Lawyer', 社工: 'Social worker', 邪教主: 'Cult leader', 女巫: 'Witch', 保安: 'Security', 裁缝: 'Tailor',
  '刺客 → 复仇者': 'Assassin → Avenger', '特工 → 守护者': 'Agent → Guardian', '科学家 / 英雄': 'Scientist / Hero',
  神盾局长: 'Director of S.H.I.E.L.D.', 神盾副局长: 'Deputy Director of S.H.I.E.L.D.', 神盾特工: 'S.H.I.E.L.D. agent',
  神盾创始人: 'Founder of S.H.I.E.L.D.', 九头蛇首领: 'Head of HYDRA', 战术家: 'Tactician', 掠夺者: 'Ravager',
  国王: 'King', 领袖: 'Leader', 总统: 'President', 将军: 'General', 空军上校: 'Air Force Colonel',
  '斯塔克工业 CEO': 'CEO of Stark Industries', '斯塔克工业副主席': 'V.P. of Stark Industries', 安保主管: 'Head of Security',
  'AIM 创始人': 'Founder of A.I.M.', 掮客: 'Power broker', 指挥官: 'Commander', 红房指挥官: 'Red Room commander',
  瓦坎达僭主: 'Wakandan usurper', 神王: 'All-Father', 'salvage 商': 'Salvage dealer', 堕落法师: 'Fallen sorcerer',
  黑暗精灵之王: 'King of the Dark Elves', 法师学徒: 'Sorcerer apprentice', 发明家: 'Inventor', 演员: 'Actor',
  前神盾局长: 'Former S.H.I.E.L.D. Director', 外交官: 'Diplomat', 时间管理员: 'TVA analyst', 'TVA 分析员': 'TVA analyst',
};
function occEn(v: string): string | null {
  if (OCC[v]) return OCC[v];
  const parts = v.split(/\s*\/\s*|\s*→\s*/);
  if (parts.length > 1) {
    const t = parts.map((p) => OCC[p]).filter(Boolean);
    if (t.length === parts.length) return t.join(' / ');
  }
  return null;
}
/** 综合英文回退：成功返回译文，失败返回 null（调用方保留原文） */
function cjkPropEn(v: string, index: { nodeById: Map<string, any> }): string | null {
  const e = embeddedEn(v);
  if (e) return e;
  const w = workDebutEn(v, index);
  if (w) return w;
  return occEn(v);
}

function propText(v: unknown, lang: 'zh' | 'en', index?: { nodeById: Map<string, { name: { zh: string; en: string } }> }): string {
  if (v == null) return '—';
  if (typeof v === 'string') {
    if (lang === 'en' && CJK.test(v) && index) {
      const t = cjkPropEn(v, index as { nodeById: Map<string, any> });
      if (t) return t;
    }
    if (index && ID_RE.test(v)) {
      const n = index.nodeById.get(v);
      if (n) return lang === 'zh' ? n.name.zh : n.name.en;
    }
    return v;
  }
  if (Array.isArray(v)) return v.map((x) => propText(x, lang, index)).join(' / ');
  if (typeof v === 'object' && 'zh' in (v as any)) return (v as any)[lang] ?? (v as any).zh;
  if (typeof v === 'object') {
    // 嵌套形状（如 mantle 节点的 { status: '永续传承' }）：取首个字符串值
    const first = Object.values(v as Record<string, unknown>).find((x) => typeof x === 'string') as string | undefined;
    if (first) {
      if (lang === 'en' && CJK.test(first) && index) {
        const t = cjkPropEn(first, index as { nodeById: Map<string, any> });
        if (t) return t;
      }
      return first;
    }
    return Object.values(v as Record<string, unknown>).map((x) => propText(x, lang, index)).filter(Boolean).join(' / ');
  }
  return String(v);
}

export function DetailDrawer({ collapsed, mobile }: { collapsed: boolean; mobile: boolean }) {
  const lang = useStore((s) => s.lang);
  const index = useStore((s) => s.index);
  const centerId = useStore((s) => s.centerId);
  const setCenter = useStore((s) => s.setCenter);
  const setRightOpen = useStore((s) => s.setRightOpen);
  const setFocusEdge = useStore((s) => s.setFocusEdge);
  const focusNode = useStore((s) => s.focusNode);
  const [bioOpen, setBioOpen] = useState(false);

  const id = centerId.startsWith('cluster:') ? null : centerId;
  const node = id ? index?.nodeById.get(id) ?? null : null;

  const groups = useMemo(() => {
    if (!node || !index) return [];
    const links = index.adj.get(node.id) ?? [];
    const byCat = new Map<string, { edge: GraphEdge; otherId: string }[]>();
    for (const { edge, other } of links) {
      const cat = relationMap.get(edge.r)?.cat ?? 'other';
      if (!byCat.has(cat)) byCat.set(cat, []);
      byCat.get(cat)!.push({ edge, otherId: other });
    }
    const order = RELATION_CATEGORIES.map((c) => c.key).filter((k) => byCat.has(k));
    for (const k of byCat.keys()) if (!order.includes(k)) order.push(k);
    return order.map((cat) => ({ cat, items: byCat.get(cat)! }));
  }, [node, index]);

  if (!index) return null;
  if (!node) {
    return (
      <aside className={`drawer sheet ${collapsed ? 'collapsed' : ''}`}>
        <div className="grabber" />
        <div className="drawer-body" style={{ paddingTop: 20 }}>
          <div style={{ color: 'var(--text-dim)', fontSize: 12.5, textAlign: 'center', padding: '30px 0', lineHeight: 1.9 }}>
            {centerId === 'cluster:root'
              ? (lang === 'zh' ? '这是宇宙全景：单击任意分类星团即可展开该类节点；或使用顶部搜索直达任意角色。' : 'This is the cosmos overview: click any star cluster to expand it, or search above to jump straight to any character.')
              : (lang === 'zh' ? '单击画布中的节点查看详情' : 'Click a node on the canvas')}
          </div>
        </div>
      </aside>
    );
  }

  const type = nodeTypeMap.get(node.type);
  
  return (
    <aside className={`drawer sheet ${collapsed ? 'collapsed' : ''}`}>
      <div className="grabber" onClick={() => setRightOpen(false)} />
      <div className="drawer-head">
        <div className="drawer-cover">
          <img
            className="cover-img"
            src={imageUrlFor(node)}
            alt=""
            onError={(e: any) => {
              const el = e.currentTarget as HTMLImageElement;
              if (!el.dataset.fb) { el.dataset.fb = '1'; el.src = avatarFor(node); }
            }}
          />
          <span className="type-badge" style={{ background: type?.color }}>
            {type?.label[lang]}
          </span>
          <button className="drawer-close" title={lang === 'zh' ? '收起面板' : 'Collapse'} onClick={() => setRightOpen(false)}>
            ✕
          </button>
        </div>
      </div>
      <div className="drawer-body">
        <div className="nm-zh">{node.name.zh}</div>
        <div className="nm-en">{node.name.en}</div>
        {node.alias && (node.alias.zh.length > 0 || node.alias.en.length > 0) && (
          <div className="alias-row">
            {[...node.alias.zh, ...node.alias.en].slice(0, 6).map((a) => (
              <span key={a} className="alias-chip">{a}</span>
            ))}
          </div>
        )}
        <div className="desc">{lang === 'zh' ? node.desc.zh : node.desc.en}</div>

        <div className="sec-title">
          {t('keyProps', lang)}
          <span className="ln" />
        </div>
        <div className="props">
          {type?.props.map((p) => {
            if (p.key === 'powergrid') return null; // 由 PowerGrid 专用组件渲染
            const v = node.props[p.key];
            if (v == null || v === '') return null;
            const val = propText(v, lang, index);
            // 指向节点的引用值渲染为可跳转
            const ref = index.nodeById.get(val);
            return (
              <div className="prop-row" key={p.key}>
                <span className="k">{p.label[lang]}</span>
                <span className="v">
                  {ref ? (
                    <a
                      href="#"
                      style={{ color: 'var(--link)' }}
                      onClick={(e) => {
                        e.preventDefault();
                        focusNode(ref.id);
                      }}
                    >
                      {lang === 'zh' ? ref.name.zh : ref.name.en}
                    </a>
                  ) : (
                    val
                  )}
                </span>
              </div>
            );
          })}
        </div>

        {(node.type === 'character' || node.type === 'mantle') && (node.props as any)?.powergrid && (
          <PowerGrid powergrid={(node.props as any).powergrid} lang={lang} />
        )}

        {node.type === 'character' && <CharacterInfoCard node={node} lang={lang} />}

        {node.bio && (
          <div className="bio-sec">
            <div className="sec-title">
              {bioTitle(node.type, lang)}
              <span className="ln" />
            </div>
            <p className="bio-teaser">
              {(() => {
                const para = (lang === 'zh' ? node.bio!.zh : node.bio!.en)[0] ?? '';
                return para.length > 200 ? para.slice(0, 200) + '…' : para;
              })()}
            </p>
            <button className="read-bio-btn" onClick={() => setBioOpen(true)}>
              {t('readFullBio', lang)} ⋯
            </button>
          </div>
        )}

        <div className="sec-title">
          {t('relations', lang)} · {index.adj.get(node.id)?.length ?? 0}
          <span className="ln" />
        </div>
        {groups.map(({ cat, items }) => {
          const cdef = relationCatMap.get(cat);
          return (
            <div className="rel-group" key={cat}>
              <div style={{ fontSize: 10.5, color: cdef?.color, fontWeight: 700, padding: '5px 8px 3px', letterSpacing: '0.05em' }}>
                ● {cdef?.label[lang]}
              </div>
              {items.map(({ edge, otherId }) => {
                const rel = relationMap.get(edge.r)!;
                const on = index.nodeById.get(otherId);
                if (!on) return null;
                const forward = edge.s === node.id;
                const label = rel.directed ? (forward ? rel.label[lang] : rel.reverseLabel?.[lang] ?? rel.label[lang]) : rel.label[lang];
                const subKeys = Object.keys(edge.props ?? {}).filter((k) => k !== 'status' || true);
                const subSummary = subKeys
                  .slice(0, 2)
                  .map((k) => propText((edge.props as any)?.[k], lang, index))
                  .filter(Boolean)
                  .join(' · ');
                return (
                  <button
                    key={edge.id}
                    className="rel-item"
                    onClick={() => {
                      focusNode(otherId);
                      setFocusEdge(null);
                    }}
                    onMouseEnter={() => setFocusEdge(edge.id)}
                    onMouseLeave={() => setFocusEdge(null)}
                  >
                    <span className="rel-tag" style={{ background: cdef?.color }}>{label}{rel.directed ? (forward ? ' →' : ' ←') : ''}</span>
                    <span className="rel-target">
                      <img className="ravatar" src={imageUrlFor(on)} alt="" loading="lazy" onError={(e: any) => { e.currentTarget.style.visibility = 'hidden'; }} />
                      <span className="dot" style={{ background: nodeTypeMap.get(on.type)?.color }} />
                      <span className="nm">{lang === 'zh' ? on.name.zh : on.name.en}</span>
                    </span>
                    {subSummary && <span className="rel-sub">{subSummary}</span>}
                  </button>
                );
              })}
            </div>
          );
        })}

        {node.sources?.length > 0 && (
          <>
            <div className="sec-title">
              {t('sources', lang)}
              <span className="ln" />
            </div>
            {node.sources.map((u: string) => (
              <a key={u} className="src-link" href={u} target="_blank" rel="noreferrer">
                ↗ {new URL(u).hostname}
              </a>
            ))}
          </>
        )}

      </div>
      {bioOpen && node.bio && <BioModal node={node} lang={lang} onClose={() => setBioOpen(false)} />}
    </aside>
  );
}

/** 悬停关系线时的子属性浮卡 */
export function EdgeCard() {
  const lang = useStore((s) => s.lang);
  const index = useStore((s) => s.index);
  const focusEdge = useStore((s) => s.focusEdge);
  const setFocusEdge = useStore((s) => s.setFocusEdge);
  const centerId = useStore((s) => s.centerId);
  if (!focusEdge || !index || focusEdge === '::more') return null;
  const edge = index.data.edges.find((e) => e.id === focusEdge);
  if (!edge) return null;
  const rel = relationMap.get(edge.r);
  if (!rel) return null;
  const a = index.nodeById.get(edge.s)!;
  const b = index.nodeById.get(edge.t)!;
  const forward = edge.s === centerId;
  const label = rel.directed ? (forward ? rel.label[lang] : rel.reverseLabel?.[lang] ?? rel.label[lang]) : rel.label[lang];
  const cat = relationCatMap.get(rel.cat);
  const props = Object.entries(edge.props ?? {});
  return (
    <div className="edge-card">
      <button className="x" onClick={() => setFocusEdge(null)}>✕</button>
      <div className="t">
        {lang === 'zh' ? a.name.zh : a.name.en}
        <span style={{ color: 'var(--text-dim)' }}>{rel.directed ? '─▶' : '──'}</span>
        <span className="cap">{label}</span>
        <span style={{ color: 'var(--text-dim)' }}>{rel.directed ? '─▶' : '──'}</span>
        {lang === 'zh' ? b.name.zh : b.name.en}
        <span style={{ width: 6, height: 6, borderRadius: 99, background: cat?.color, display: 'inline-block' }} />
      </div>
      <div className="sub">
        {props.length === 0 && <div style={{ fontSize: 11.5, color: 'var(--text-dim)' }}>{t('noSubProps', lang)}</div>}
        {props.map(([k, v]) => {
          const field = rel.subProps.find((f) => f.key === k);
          const text = propText(v, lang, index);
          return (
            <div className="row" key={k}>
              <span className="k">{field?.label[lang] ?? k}</span>
              <span>{text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
