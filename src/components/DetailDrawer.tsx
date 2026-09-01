/** 右侧详情抽屉（PC）/ 底部弹层（移动端）：节点信息 + 分类关系列表 + 来源 */
import { useMemo, useState } from 'react';
import { useStore } from '../store/useStore';
import { nodeTypeMap, relationCatMap, relationMap, RELATION_CATEGORIES } from '../../data/taxonomy';
import type { GraphEdge } from '../../data/schema';
import { t } from '../i18n';
import { imageUrlFor, avatarFor } from '../graph/avatar';
import { CharacterInfoCard } from './CharacterInfoCard';
import { BioModal } from './BioModal';

const ID_RE = /^(ch|team|loc|item|wk|ev|uni|chan|race|ab)-[\w-]+$/;
function propText(v: unknown, lang: 'zh' | 'en', index?: { nodeById: Map<string, { name: { zh: string; en: string } }> }): string {
  if (v == null) return '—';
  if (typeof v === 'string') {
    if (index && ID_RE.test(v)) {
      const n = index.nodeById.get(v);
      if (n) return lang === 'zh' ? n.name.zh : n.name.en;
    }
    return v;
  }
  if (Array.isArray(v)) return v.map((x) => propText(x, lang, index)).join(' / ');
  if (typeof v === 'object' && 'zh' in (v as any)) return (v as any)[lang] ?? (v as any).zh;
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
                      style={{ color: '#7fa8e0' }}
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

        {node.type === 'character' && <CharacterInfoCard node={node} lang={lang} />}

        {node.bio && (
          <div className="bio-sec">
            <div className="sec-title">
              {t('bioSec', lang)}
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
