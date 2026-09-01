/** 顶栏：品牌、视图切换、搜索、语言、主题切换、文档入口 */
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { VIEW_MODES, nodeTypeMap } from '../../data/taxonomy';
import { imageUrlFor } from '../graph/avatar';
import { t, type StringKey } from '../i18n';

export function TopBar({ mobile }: { mobile: boolean }) {
  const lang = useStore((s) => s.lang);
  const theme = useStore((s) => s.theme);
  const setTheme = useStore((s) => s.setTheme);
  const view = useStore((s) => s.view);
  const setView = useStore((s) => s.setView);
  const setLang = useStore((s) => s.setLang);
  const index = useStore((s) => s.index);
  return (
    <header className="topbar">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="brand">
          <div className="brand-logo">MARVEL</div>
          <div>
            <div className="brand-title">{t('appTitle', lang)}</div>
            <div className="brand-sub">{t('appSub', lang)}</div>
          </div>
        </div>
      </Link>
      <div className="view-switch" role="tablist">
        {VIEW_MODES.map((v) => (
          <button key={v.key} className={`view-btn ${view === v.key ? 'active' : ''}`} onClick={() => setView(v.key)} title={v.hint[lang]}>
            {v.label[lang]}
          </button>
        ))}
      </div>
      <div className="spacer" />
      <SearchBox mobile={mobile} />
      <button
        className="icon-btn"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        title={t('themeToggle', lang)}
        aria-label={t('themeToggle', lang)}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <button className="icon-btn" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} title="Language">
        {lang === 'zh' ? 'EN' : '中文'}
      </button>
      <Link to="/docs/schema" style={{ textDecoration: 'none' }}>
        <button className="icon-btn" title={t('docsTitle', lang)}>{mobile ? '📖' : t('docs', lang)}</button>
      </Link>
      {index && !mobile && (
        <span className="brand-sub" style={{ flex: 'none' }}>
          {index.data.stats.nodes} {t('dataStats', lang)}
        </span>
      )}
    </header>
  );
}

function SearchBox({ mobile }: { mobile: boolean }) {
  const lang = useStore((s) => s.lang);
  const index = useStore((s) => s.index);
  const focusNode = useStore((s) => s.focusNode);
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!index || query.length < 1) return [];
    const out = index.searchList.filter((r) => r.text.includes(query)).slice(0, 60);
    out.sort((a, b) => b.weight - a.weight);
    const seen = new Set<string>();
    const uniq: typeof out = [];
    for (const r of out) {
      if (seen.has(r.id)) continue;
      seen.add(r.id);
      uniq.push(r);
      if (uniq.length >= (mobile ? 6 : 9)) break;
    }
    return uniq;
  }, [q, index, mobile]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('mousedown', close);
    return () => window.removeEventListener('mousedown', close);
  }, []);

  const go = (id: string) => {
    focusNode(id);
    setOpen(false);
    setQ('');
  };

  return (
    <div className="searchbox" ref={boxRef}>
      <span className="s-icon">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="10.5" cy="10.5" r="6.2" />
          <path d="M15.2 15.2L20.5 20.5" />
        </svg>
      </span>
      <input
        value={q}
        placeholder={t('searchPlaceholder', lang)}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
          setHi(0);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') setHi((h) => Math.min(h + 1, results.length - 1));
          else if (e.key === 'ArrowUp') setHi((h) => Math.max(h - 1, 0));
          else if (e.key === 'Enter' && results[hi]) go(results[hi].id);
          else if (e.key === 'Escape') setOpen(false);
        }}
      />
      {open && q.trim() && (
        <div className="search-pop">
          {results.length === 0 && <div className="search-none">{t('searchEmpty', lang)}</div>}
          {results.map((r, i) => {
            const n = index!.nodeById.get(r.id)!;
            const tp = nodeTypeMap.get(n.type);
            return (
              <div key={r.id + i} className={`search-item ${i === hi ? 'hl' : ''}`} onMouseEnter={() => setHi(i)} onClick={() => go(r.id)}>
                <img className="sthumb" src={imageUrlFor(n)} alt="" loading="lazy" onError={(e: any) => { e.currentTarget.style.visibility = 'hidden'; }} />
                <span className="nm">{lang === 'zh' ? n.name.zh : n.name.en}</span>
                <span className="tp">{tp?.label[lang]}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export type { StringKey };
