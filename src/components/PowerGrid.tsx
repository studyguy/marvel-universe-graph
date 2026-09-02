/** 漫威官方能力量表（Power Grid）：六维 1-7 格点亮展示。
 *  数据来自节点 props.powergrid（官方角色页旧版 power_grid JSON：
 *  { durability, energy, fighting_skills, intelligence, speed, strength }，1-7）。 */
import { t } from '../i18n';
import type { Lang } from '../i18n';

const DIMS = [
  { key: 'intelligence', zh: '智力', en: 'Intelligence' },
  { key: 'strength', zh: '力量', en: 'Strength' },
  { key: 'speed', zh: '速度', en: 'Speed' },
  { key: 'durability', zh: '耐久', en: 'Durability' },
  { key: 'energy', zh: '能量发射', en: 'Energy Projection' },
  { key: 'fighting_skills', zh: '格斗技巧', en: 'Fighting Skills' },
] as const;

type PG = Record<string, string>;

export function PowerGrid({ powergrid, lang }: { powergrid: PG; lang: Lang }) {
  const max = 7;
  return (
    <div className="pg">
      <div className="sec-title">
        {t('pgTitle', lang)}
        <span className="ln" />
      </div>
      {DIMS.map((d) => {
        const raw = powergrid[d.key];
        const val = Math.max(1, Math.min(max, parseInt(raw, 10) || 0));
        return (
          <div className="pg-row" key={d.key}>
            <span className="pg-name">{lang === 'zh' ? d.zh : d.en}</span>
            <span className="pg-dots" aria-label={`${d.en} ${val}/${max}`}>
              {Array.from({ length: max }, (_, i) => (
                <span key={i} className={`pg-dot ${i < val ? 'on' : ''}`} />
              ))}
            </span>
            <span className="pg-val">{val}/7</span>
          </div>
        );
      })}
    </div>
  );
}
