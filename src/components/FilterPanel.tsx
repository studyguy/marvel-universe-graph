/** 左侧筛选面板：节点大类开关 + 关系大类开关 + 图例 */
import { useStore } from '../store/useStore';
import { NODE_TYPES, RELATION_CATEGORIES, nodeTypeMap, relationCatMap } from '../../data/taxonomy';
import { t } from '../i18n';

export function FilterPanel({ collapsed }: { collapsed: boolean }) {
  const lang = useStore((s) => s.lang);
  const index = useStore((s) => s.index);
  const hiddenNodeTypes = useStore((s) => s.hiddenNodeTypes);
  const hiddenEdgeCats = useStore((s) => s.hiddenEdgeCats);
  const toggleNodeType = useStore((s) => s.toggleNodeType);
  const toggleEdgeCat = useStore((s) => s.toggleEdgeCat);
  const resetFilters = useStore((s) => s.resetFilters);
  const legendOpen = useStore((s) => s.legendOpen);
  const setLegendOpen = useStore((s) => s.setLegendOpen);

  return (
    <aside id="filter-panel" className={`filter-panel ${collapsed ? 'collapsed' : ''}`}>
      <div className="filter-head">
        ☰ {t('filterTitle', lang)}
        <span style={{ flex: 1 }} />
        {(hiddenNodeTypes.length > 0 || hiddenEdgeCats.length > 0) && (
          <button className="icon-btn" style={{ height: 26, fontSize: 11 }} onClick={resetFilters}>
            {t('resetFilters', lang)}
          </button>
        )}
      </div>
      <div className="filter-body">
        <div className="filter-sec">
          <div className="filter-sec-title">{t('nodeTypes', lang).toUpperCase()}</div>
          {NODE_TYPES.map((tp) => {
            const cnt = index?.data.stats.byType[tp.key] ?? 0;
            const off = hiddenNodeTypes.includes(tp.key);
            return (
              <button key={tp.key} className={`filter-row ${off ? 'off' : ''}`} onClick={() => toggleNodeType(tp.key)}>
                <span className="dot" style={{ background: tp.color }} />
                <span className="nm">{tp.label[lang]}</span>
                <span className="cnt">{cnt}</span>
              </button>
            );
          })}
        </div>
        <div className="filter-sec">
          <div className="filter-sec-title">{t('relationCats', lang).toUpperCase()}</div>
          {RELATION_CATEGORIES.map((c) => {
            const off = hiddenEdgeCats.includes(c.key);
            return (
              <button key={c.key} className={`filter-row ${off ? 'off' : ''}`} onClick={() => toggleEdgeCat(c.key)}>
                <span className="dot" style={{ background: c.color }} />
                <span className="nm">{c.label[lang]}</span>
              </button>
            );
          })}
        </div>
        <button className={`filter-row ${legendOpen ? '' : 'off'}`} onClick={() => setLegendOpen(!legendOpen)} style={{ marginTop: 10, background: 'var(--input-bg)' }}>
          <span>❐</span>
          <span className="nm">{t('legend', lang)}</span>
        </button>
        {legendOpen && (
          <div className="legend-box">
            <b>{t('legendNodes', lang)}</b>
            <br />
            {NODE_TYPES.slice(0, 10).map((tp) => (
              <span key={tp.key} style={{ color: tp.color, marginRight: 8 }}>
                ● {tp.label[lang]}
              </span>
            ))}
            <br />
            <b>{t('legendLines', lang)}</b>
            <br />
            {RELATION_CATEGORIES.slice(0, 8).map((c) => (
              <span key={c.key} style={{ color: c.color, marginRight: 8 }}>
                ─ {c.label[lang]}
              </span>
            ))}
            <br />
            <span>{t('legendChannels', lang)}</span>
            <br />
            <span>{t('legendActors', lang)}</span>
            <br />
            <span>{t('legendVariants', lang)}</span>
          </div>
        )}
      </div>
    </aside>
  );
}

export { nodeTypeMap, relationCatMap };
