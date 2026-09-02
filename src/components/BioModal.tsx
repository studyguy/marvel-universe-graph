/** 介绍大弹窗：完整分段双语正文（Fandom 式详情）；
 *  通过 Portal 挂到 <body>，避免被详情抽屉的层叠上下文/transform 约束，
 *  确保遮罩铺满视口、盖过右下控制条与预览图；Esc / 遮罩 / 关闭按钮均可关闭。 */
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { GraphNode } from '../../data/schema';
import { bioTitle, t, type Lang } from '../i18n';

export function BioModal({ node, lang, onClose }: { node: GraphNode; lang: Lang; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!node.bio) return null;
  const paras = lang === 'zh' ? node.bio.zh : node.bio.en;

  return createPortal(
    <div className="bio-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bio-modal" onClick={(e) => e.stopPropagation()}>
        <div className="bio-head">
          <div className="bio-title">
            <span className="bio-nm">{lang === 'zh' ? node.name.zh : node.name.en}</span>
            <span className="bio-sub">{bioTitle(node.type, lang)}</span>
          </div>
          <button className="bio-x" onClick={onClose} aria-label={t('bioClose', lang)}>✕</button>
        </div>
        <div className="bio-body">
          {paras.map((p, i) => (
            <p key={i} className="bio-para">{p}</p>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
