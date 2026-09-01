/** 三步引导 + 加载/错误状态 */
import { useState } from 'react';
import { useStore } from '../store/useStore';
import { t } from '../i18n';

const STEPS: { icon: string; title: Record<'zh' | 'en', string>; desc: Record<'zh' | 'en', string> }[] = [
  { icon: '👆', title: { zh: '点选节点', en: 'Click a node' }, desc: { zh: '单击画布中的任意节点，右侧会打开它的详情面板：属性、别名与按大类分组的全部关系。', en: 'Click any node on the canvas — its detail panel opens with attributes and all relations grouped by category.' } },
  { icon: '🎯', title: { zh: '双击下钻', en: 'Double-click to drill' }, desc: { zh: '双击（移动端双触）任意节点，图谱会以它为中心重新展开一层关系；左下路径可随时回退。', en: 'Double-click (or double-tap) any node to re-center the graph; the breadcrumb walks you back.' } },
  { icon: '🔭', title: { zh: '切换视图', en: 'Switch views' }, desc: { zh: '顶部可切换全景 / 角色 / 作品等五大视图，左侧筛选可隐藏类别与关系；中英双语一键切换。', en: 'Switch among five projections; filter categories on the left; toggle Chinese/English anytime.' } },
];

export function Guide({ onClose }: { onClose: () => void }) {
  const lang = useStore((s) => s.lang);
  const [i, setI] = useState(0);
  const step = STEPS[i];
  return (
    <div className="guide-mask" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="guide-card">
        <div className="guide-step">{t('guideTitle', lang).toUpperCase()} · {i + 1}/3</div>
        <div style={{ fontSize: 40, margin: '10px 0 2px' }}>{step.icon}</div>
        <div className="guide-title">{step.title[lang]}</div>
        <div className="guide-desc">{step.desc[lang]}</div>
        <div className="guide-actions">
          <button className="btn-ghost" onClick={onClose}>{t('skip', lang)}</button>
          <button
            className="btn-primary"
            onClick={() => {
              if (i < STEPS.length - 1) setI(i + 1);
              else onClose();
            }}
          >
            {i < STEPS.length - 1 ? t('next', lang) : t('start', lang)}
          </button>
        </div>
        <div className="guide-dots">
          {STEPS.map((_, k) => (
            <i key={k} className={k === i ? 'on' : ''} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function LoadingState() {
  const lang = useStore((s) => s.lang);
  return (
    <div className="center-status">
      <div className="status-card">
        <div className="spinner" />
        {t('loading', lang)}
      </div>
    </div>
  );
}

export function ErrorState({ onRetry }: { onRetry: () => void }) {
  const lang = useStore((s) => s.lang);
  return (
    <div className="center-status">
      <div className="status-card">
        <div style={{ fontSize: 34, marginBottom: 10 }}>🛰️</div>
        {t('loadError', lang)}
        <div style={{ marginTop: 14 }}>
          <button className="btn-primary" onClick={onRetry}>{t('retry', lang)}</button>
        </div>
      </div>
    </div>
  );
}

export function EmptyState() {
  const lang = useStore((s) => s.lang);
  const resetFilters = useStore((s) => s.resetFilters);
  return (
    <div className="center-status" style={{ pointerEvents: 'none' }}>
      <div className="status-card" style={{ pointerEvents: 'auto' }}>
        <div style={{ fontSize: 30, marginBottom: 8 }}>🌌</div>
        {t('emptyResult', lang)}
        <div style={{ marginTop: 12 }}>
          <button className="btn-ghost" onClick={resetFilters}>{t('resetFilters', lang)}</button>
        </div>
      </div>
    </div>
  );
}
