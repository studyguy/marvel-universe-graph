/** 右下控制条（缩放/复位/返回/小地图）与浏览路径面包屑 */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { t } from '../i18n';

export function Controls({ engineRef, mobile }: { engineRef: React.MutableRefObject<any>; mobile: boolean }) {
  const lang = useStore((s) => s.lang);
  const history = useStore((s) => s.history);
  const goBack = useStore((s) => s.goBack);
  const rightOpen = useStore((s) => s.rightOpen);
  const setRightOpen = useStore((s) => s.setRightOpen);
  const navigate = useNavigate();
  const mmRef = useRef<HTMLCanvasElement>(null);
  const dragging = useRef(false);

  const clickMinimap = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    engineRef.current?.minimapClick((e.clientX - rect.left) / rect.width, (e.clientY - rect.top) / rect.height);
  };

  return (
    <div className="controls">
      <div className="minimap" style={{ display: mobile ? 'none' : 'block' }}>
        <canvas
          id="minimap"
          ref={mmRef}
          onMouseDown={(e) => {
            dragging.current = true;
            clickMinimap(e);
          }}
          onMouseMove={(e) => dragging.current && clickMinimap(e)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
        />
      </div>
      <div className="ctl-cluster">
        <button
          className="ctl-btn"
          title={t('backToOverview', lang)}
          onClick={() => {
            useStore.getState().setView('overview');
            useStore.getState().setCenter('cluster:root');
            navigate('/');
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 11l8-7 8 7" />
    <path d="M6 9.5V20h12V9.5" />
  </svg>
        </button>
        <button
          className={`ctl-btn ctl-detail ${rightOpen ? 'on' : ''}`}
          title={lang === 'zh' ? '详情面板（记忆开关）' : 'Detail panel (remembered)'}
          onClick={() => setRightOpen(!rightOpen)}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="4" width="14" height="17" rx="2.2" />
    <rect x="9" y="2.2" width="6" height="3.6" rx="1.2" fill="var(--panel)" />
    <rect x="8.2" y="9.2" width="7.6" height="1.5" rx="0.75" fill="currentColor" stroke="none" />
    <rect x="8.2" y="13.2" width="7.6" height="1.5" rx="0.75" fill="currentColor" stroke="none" />
    <path d="M8.4 17.8l1.6 1.6 2.8-3" />
  </svg>
        </button>
        <button className="ctl-btn" title={t('back', lang)} onClick={goBack} disabled={history.length < 2}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 14L4 9l5-5" />
    <path d="M4 9h10a6 6 0 0 1 6 6v4" />
  </svg>
        </button>
        <button className="ctl-btn" title={t('resetView', lang)} onClick={() => engineRef.current?.resetView()}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 9V4h5" />
    <path d="M15 4h5v5" />
    <path d="M20 15v5h-5" />
    <path d="M9 20H4v-5" />
  </svg>
        </button>
      </div>
    </div>
  );
}

export function Breadcrumb({ mobile }: { mobile: boolean }) {
  const lang = useStore((s) => s.lang);
  const index = useStore((s) => s.index);
  const history = useStore((s) => s.history);
  const centerId = useStore((s) => s.centerId);
  const setCenter = useStore((s) => s.setCenter);
  const goBack = useStore((s) => s.goBack);
  const trail = history.slice(-4);
  const name = (id: string) => {
    if (id === 'cluster:root') return lang === 'zh' ? '全景' : 'Overview';
    if (id.startsWith('cluster:')) {
      const tp = id.slice(8);
      return lang === 'zh' ? ({ character: '角色', team: '团队', location: '地点', item: '物品', work: '作品', event: '事件', universe: '宇宙', channel: '频道', race: '种族', ability: '能力' } as any)[tp] ?? tp : tp;
    }
    const n = index?.nodeById.get(id);
    return n ? (lang === 'zh' ? n.name.zh : n.name.en) : id;
  };
  if (!mobile && history.length < 2) return null;
  return (
    <div className="breadcrumb">
      <span style={{ opacity: 0.7 }}>{t('breadcrumb', lang)}</span>
      {trail.map((id, i) => (
        <span key={id + i} style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
          {i > 0 && <span className="crumb-sep">›</span>}
          <button className={`crumb ${i === trail.length - 1 ? 'last' : ''}`} onClick={() => (i === trail.length - 1 ? goBack() : setCenter(id))}>
            {name(id)}
          </button>
        </span>
      ))}
      {centerId !== trail[trail.length - 1] && (
        <>
          <span className="crumb-sep">›</span>
          <span className="crumb last">{name(centerId)}</span>
        </>
      )}
    </div>
  );
}
