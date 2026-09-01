/** 人物信息卡：把人物相关的"关系边"信息（名号/出生地/能力/所属）汇总为键值行。
 *  单一数据源：信息全部来自关系边（held-mantle / born-in / has-ability / member-of 等），
 *  与 props 不重复存储；点击行内芯片可跳转对应节点。 */
import { useStore } from '../store/useStore';
import type { GraphNode } from '../../data/schema';
import { t, type Lang } from '../i18n';

/** 信息卡行定义：key + 关系类型集合 + i18n 标签键 + 显示上限 */
const ROWS: { key: string; rels: string[]; i18n: 'infoMantle' | 'infoBirth' | 'infoAbilities' | 'infoAffiliation'; limit?: number }[] = [
  { key: 'mantle', rels: ['held-mantle'], i18n: 'infoMantle' },
  { key: 'birth', rels: ['born-in'], i18n: 'infoBirth' },
  { key: 'abilities', rels: ['has-ability'], i18n: 'infoAbilities', limit: 6 },
  { key: 'affiliation', rels: ['member-of', 'leader-of', 'founded-org', 'affiliated-with'], i18n: 'infoAffiliation', limit: 4 },
];

export function CharacterInfoCard({ node, lang }: { node: GraphNode; lang: Lang }) {
  const index = useStore((s) => s.index);
  const focusNode = useStore((s) => s.focusNode);
  if (!index) return null;

  const links = index.adj.get(node.id) ?? [];
  const rows = ROWS
    .map((row) => {
      const items = links
        .filter((l) => row.rels.includes(l.edge.r))
        .map((l) => {
          const other = index.nodeById.get(l.other);
          if (!other) return null;
          // has-ability 的 level 子属性（如"Omega 级"）展示为小标签
          let extra = '';
          const lvl = (l.edge.props as Record<string, unknown> | undefined)?.['level'];
          if (lvl != null) {
            extra = typeof lvl === 'object' && lvl !== null && 'zh' in lvl ? (lvl as any)[lang] ?? '' : String(lvl);
          }
          return { id: l.other, name: lang === 'zh' ? other.name.zh : other.name.en, extra };
        })
        .filter((x): x is { id: string; name: string; extra: string } => x !== null)
        .slice(0, row.limit ?? 8);
      return { ...row, items };
    })
    .filter((r) => r.items.length > 0);

  if (rows.length === 0) return null;

  return (
    <div className="info-card">
      {rows.map((row) => (
        <div className="info-row" key={row.key}>
          <span className="ik">{t(row.i18n, lang)}</span>
          <span className="iv">
            {row.items.map((it) => (
              <button
                key={it.id}
                className="ichip"
                title={it.extra ? `${it.name} · ${it.extra}` : it.name}
                onClick={() => focusNode(it.id)}
              >
                {it.name}
                {it.extra ? <em className="lvl">{it.extra}</em> : null}
              </button>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
