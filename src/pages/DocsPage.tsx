/** 体系文档页：节点分类 / 关系体系 / 子属性 / 视图 —— 直接由 data/taxonomy 渲染，永不与实现脱节 */
import { Link, useParams } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { NODE_TYPES, RELATION_CATEGORIES, RELATION_TYPES, VIEW_MODES } from '../../data/taxonomy';
import { t } from '../i18n';

export function DocsPage() {
  const { slug } = useParams();
  const lang = useStore((s) => s.lang);
  const index = useStore((s) => s.index);
  const tab = slug === 'relations' ? 'relations' : 'schema';

  return (
    <div className="app" style={{ overflow: 'auto' }}>
      <header className="topbar">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="brand">
            <div className="brand-logo">MARVEL</div>
            <div>
              <div className="brand-title">{t('docsTitle', lang)}</div>
              <div className="brand-sub">{t('appTitle', lang)}</div>
            </div>
          </div>
        </Link>
        <div className="spacer" />
        <Link to="/docs/schema"><button className={`icon-btn ${tab === 'schema' ? 'on' : ''}`}>{lang === 'zh' ? '节点分类' : 'Node Taxonomy'}</button></Link>
        <Link to="/docs/relations"><button className={`icon-btn ${tab === 'relations' ? 'on' : ''}`}>{lang === 'zh' ? '关系体系' : 'Relations'}</button></Link>
        <Link to="/"><button className="icon-btn">{t('backToGraph', lang)}</button></Link>
      </header>
      <div style={{ flex: 1, overflowY: 'auto', padding: '26px 18px 60px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <div className="legend-box" style={{ marginBottom: 18 }}>
            {t('aboutText', lang)}
          </div>
          {tab === 'schema' ? <SchemaDoc lang={lang} index={index} /> : <RelationDoc lang={lang} />}
        </div>
      </div>
    </div>
  );
}

const cell: React.CSSProperties = { padding: '8px 10px', borderBottom: '1px solid var(--panel-border)', fontSize: 12.5, verticalAlign: 'top' };

function SchemaDoc({ lang, index }: { lang: 'zh' | 'en'; index: ReturnType<typeof useStore.getState>['index'] }) {
  return (
    <div>
      <h1 style={{ fontSize: 22, margin: '6px 0 4px' }}>{lang === 'zh' ? '节点分类体系' : 'Node Taxonomy'}</h1>
      <p style={{ color: 'var(--text-dim)', fontSize: 13, lineHeight: 1.8 }}>
        {lang === 'zh'
          ? '全站内容按 10 大类组织（基线 10 类经真实内容校验微调）。演员不设独立节点，作为“出场”关系的子属性；跨宇宙同名角色分立节点并以“多元变体”关系互连。'
          : 'Content is organized into 10 node categories (baseline validated against real content). Actors are sub-properties of appearance relations, not nodes; same-name characters across universes are separate nodes linked as multiversal variants.'}
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--panel)', borderRadius: 12, overflow: 'hidden' }}>
        <thead>
          <tr style={{ color: 'var(--text-dim)', fontSize: 11, textAlign: 'left' }}>
            <th style={cell}>{lang === 'zh' ? '大类' : 'Category'}</th>
            <th style={cell}>{lang === 'zh' ? '子类' : 'Subtypes'}</th>
            <th style={cell}>{lang === 'zh' ? '关键属性' : 'Key Props'}</th>
            <th style={cell}>{lang === 'zh' ? '数量' : 'Count'}</th>
          </tr>
        </thead>
        <tbody>
          {NODE_TYPES.map((tp) => (
            <tr key={tp.key}>
              <td style={cell}><span style={{ color: tp.color, marginRight: 6 }}>●</span><b>{tp.label[lang]}</b></td>
              <td style={cell}>{tp.subs.map((s) => s.label[lang]).join(' / ')}</td>
              <td style={{ ...cell, color: 'var(--text-dim)' }}>{tp.props.map((p) => p.label[lang]).join(' · ')}</td>
              <td style={cell}>{index?.data.stats.byType[tp.key] ?? 0}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ fontSize: 17, margin: '30px 0 8px' }}>{lang === 'zh' ? '视图模式（同一张图的九种投影）' : 'View Modes (nine projections of one graph)'}</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--panel)', borderRadius: 12, overflow: 'hidden' }}>
        <tbody>
          {VIEW_MODES.map((v) => (
            <tr key={v.key}>
              <td style={cell} className="vd"><b>{v.label[lang]}</b></td>
              <td style={{ ...cell, color: 'var(--text-dim)' }}>{v.hint[lang]}</td>
              <td style={{ ...cell, color: 'var(--text-dim)', width: 220 }}>
                {lang === 'zh' ? '突出：' : 'Highlights: '}
                {(Object.entries(v.catWeights).filter(([, w]) => (w as number) >= 2).map(([k]) => RELATION_CATEGORIES.find((c) => c.key === k)?.label[lang]).filter(Boolean) as string[]).join(' / ') || '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ fontSize: 17, margin: '30px 0 8px' }}>{lang === 'zh' ? '媒体频道划分规则' : 'Media Channel Rules'}</h2>
      <div className="legend-box" style={{ fontSize: 12.5 }}>
        {t('legendChannels', lang)}
        <br />
        {t('legendActors', lang)}
        <br />
        {t('legendVariants', lang)}
      </div>
    </div>
  );
}

function RelationDoc({ lang }: { lang: 'zh' | 'en' }) {
  return (
    <div>
      <h1 style={{ fontSize: 22, margin: '6px 0 4px' }}>{lang === 'zh' ? '关系体系' : 'Relation System'}</h1>
      <p style={{ color: 'var(--text-dim)', fontSize: 13, lineHeight: 1.8 }}>
        {lang === 'zh'
          ? `共 ${RELATION_CATEGORIES.length} 个关系大类、${RELATION_TYPES.length} 种关系类型。每条关系可携带子属性：通用子属性（起始 since / 状态 status / 来源作品 via）+ 类型特有子属性（见下表）。`
          : `${RELATION_CATEGORIES.length} relation categories and ${RELATION_TYPES.length} relation types. Every relation can carry sub-properties: generic (since / status / source work) plus type-specific ones (see table).`}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '14px 0 20px' }}>
        {RELATION_CATEGORIES.map((c) => (
          <span key={c.key} style={{ fontSize: 12, padding: '4px 10px', borderRadius: 99, border: `1px solid ${c.color}55`, color: c.color }}>
            ● {c.label[lang]}
          </span>
        ))}
      </div>
      {RELATION_CATEGORIES.map((c) => {
        const rels = RELATION_TYPES.filter((r) => r.cat === c.key);
        if (!rels.length) return null;
        return (
          <div key={c.key} style={{ marginBottom: 22 }}>
            <h3 style={{ fontSize: 14.5, color: c.color, margin: '14px 0 8px' }}>● {c.label[lang]}</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--panel)', borderRadius: 12, overflow: 'hidden' }}>
              <thead>
                <tr style={{ color: 'var(--text-dim)', fontSize: 11, textAlign: 'left' }}>
                  <th style={cell}>{lang === 'zh' ? '关系' : 'Relation'}</th>
                  <th style={cell}>{lang === 'zh' ? '方向' : 'Dir'}</th>
                  <th style={cell}>{lang === 'zh' ? '反向读法' : 'Reverse'}</th>
                  <th style={cell}>{lang === 'zh' ? '特有子属性' : 'Sub-properties'}</th>
                </tr>
              </thead>
              <tbody>
                {rels.map((r) => (
                  <tr key={r.key}>
                    <td style={cell}><b>{r.label[lang]}</b></td>
                    <td style={{ ...cell, color: 'var(--text-dim)' }}>{r.directed ? (lang === 'zh' ? '有向 →' : 'Directed →') : lang === 'zh' ? '无向 —' : 'Undirected —'}</td>
                    <td style={{ ...cell, color: 'var(--text-dim)' }}>{r.reverseLabel?.[lang] ?? '—'}</td>
                    <td style={{ ...cell, color: 'var(--text-dim)' }}>
                      {r.subProps.filter((p) => !['since', 'status', 'via'].includes(p.key)).map((p) => p.label[lang]).join(' · ') || '—'}
                      <span style={{ opacity: 0.6 }}>{lang === 'zh' ? '（通用：起始 / 状态 / 来源作品）' : ' (generic: since / status / via)'}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
