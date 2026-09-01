/** 全局状态：数据、中心、视图、筛选、历史、面板（persist 到 localStorage） */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { GraphData, GraphNode, GraphEdge } from '../../data/schema';

export type Lang = 'zh' | 'en';
export type Theme = 'dark' | 'light';
export type Status = 'loading' | 'ready' | 'error';

export interface GraphIndex {
  data: GraphData;
  nodeById: Map<string, GraphNode>;
  /** id -> [{edge, other}] */
  adj: Map<string, { edge: GraphEdge; other: string }[]>;
  /** 按类型分组度数排序的节点 */
  byType: Map<string, GraphNode[]>;
  searchList: { id: string; text: string; weight: number }[];
}

export interface UiState {
  lang: Lang;
  theme: Theme;
  view: string;
  centerId: string;
  selectedId: string | null;
  focusEdge: string | null;
  history: string[];
  hiddenNodeTypes: string[];
  hiddenEdgeCats: string[];
  leftOpen: boolean;
  rightOpen: boolean;
  legendOpen: boolean;
  guideDone: boolean;
  mobileFiltersOpen: boolean;
}

export interface StoreState extends UiState {
  status: Status;
  index: GraphIndex | null;
  setLang: (l: Lang) => void;
  setTheme: (t: Theme) => void;
  setView: (v: string) => void;
  setCenter: (id: string, pushHistory?: boolean) => void;
  /** 焦点切换 + 自动展开详情面板（单击节点/搜索直达/面板跳转的统一入口） */
  focusNode: (id: string) => void;
  select: (id: string | null) => void;
  setFocusEdge: (id: string | null) => void;
  goBack: () => void;
  toggleNodeType: (t: string) => void;
  toggleEdgeCat: (c: string) => void;
  resetFilters: () => void;
  setLeftOpen: (v: boolean) => void;
  setRightOpen: (v: boolean) => void;
  setLegendOpen: (v: boolean) => void;
  setGuideDone: (v: boolean) => void;
  setMobileFilters: (v: boolean) => void;
  load: () => Promise<void>;
  hydrateFromRoute: (id: string | null) => void;
}

export const DEFAULT_CENTER = 'cluster:root';

function buildIndex(data: GraphData): GraphIndex {
  const nodeById = new Map<string, GraphNode>();
  const adj = new Map<string, { edge: GraphEdge; other: string }[]>();
  const degree = new Map<string, number>();
  for (const n of data.nodes) nodeById.set(n.id, n);
  for (const e of data.edges) {
    if (!nodeById.has(e.s) || !nodeById.has(e.t)) continue;
    if (!adj.has(e.s)) adj.set(e.s, []);
    if (!adj.has(e.t)) adj.set(e.t, []);
    adj.get(e.s)!.push({ edge: e, other: e.t });
    adj.get(e.t)!.push({ edge: e, other: e.s });
    degree.set(e.s, (degree.get(e.s) ?? 0) + 1);
    degree.set(e.t, (degree.get(e.t) ?? 0) + 1);
  }
  const byType = new Map<string, GraphNode[]>();
  for (const n of data.nodes) {
    if (!byType.has(n.type)) byType.set(n.type, []);
    byType.get(n.type)!.push(n);
  }
  for (const list of byType.values()) list.sort((a, b) => (degree.get(b.id) ?? 0) - (degree.get(a.id) ?? 0));

  const searchList: { id: string; text: string; weight: number }[] = [];
  for (const n of data.nodes) {
    const parts = [n.name.zh, n.name.en];
    if (n.alias) parts.push(...n.alias.zh, ...n.alias.en);
    // 角色（名号）在搜索中优先于人物，符合"作品→角色→人物"认知
    const boost = n.type === 'mantle' ? 500 : 0;
    for (const p of parts) {
      if (p && p !== '—') searchList.push({ id: n.id, text: p.toLowerCase(), weight: (degree.get(n.id) ?? 0) + boost * (p === n.name.zh || p === n.name.en ? 1 : 0.5) });
    }
  }
  return { data, nodeById, adj, byType, searchList };
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      status: 'loading',
      index: null,
      lang: 'zh',
      theme: 'dark',
      view: 'overview',
      centerId: DEFAULT_CENTER,
      selectedId: null,
      focusEdge: null,
      history: [DEFAULT_CENTER],
      hiddenNodeTypes: [],
      hiddenEdgeCats: [],
      leftOpen: true,
      rightOpen: true,
      legendOpen: false,
      guideDone: false,
      mobileFiltersOpen: false,

      setLang: (lang) => set({ lang }),
      setTheme: (theme) => set({ theme }),
      setView: (view) => set({ view, selectedId: null, focusEdge: null }),
      setCenter: (id, pushHistory = true) => {
        const { centerId, history } = get();
        if (id === centerId) return;
        set({
          centerId: id,
          history: pushHistory ? [...history.slice(-24), id] : history,
          selectedId: null,
          focusEdge: null,
        });
      },
      focusNode: (id) => {
        const { centerId, history } = get();
        const isNew = id !== centerId;
        set({
          centerId: id,
          history: isNew ? [...history.slice(-24), id] : history,
          selectedId: id,
          focusEdge: null,
          // 面板展开/收起完全由用户开关（rightOpen）记忆控制，焦点变化不改变
        });
      },
      select: (selectedId) => set({ selectedId, focusEdge: null }),
      setFocusEdge: (focusEdge) => set({ focusEdge }),
      goBack: () => {
        const { history, centerId } = get();
        if (history.length < 2) return;
        const next = [...history];
        next.pop();
        while (next.length && next[next.length - 1] === centerId) next.pop();
        const prev = next[next.length - 1] ?? get().history[0];
        set({ centerId: prev, history: next, selectedId: null, focusEdge: null });
      },
      toggleNodeType: (t) =>
        set((s) => ({
          hiddenNodeTypes: s.hiddenNodeTypes.includes(t) ? s.hiddenNodeTypes.filter((x) => x !== t) : [...s.hiddenNodeTypes, t],
        })),
      toggleEdgeCat: (c) =>
        set((s) => ({
          hiddenEdgeCats: s.hiddenEdgeCats.includes(c) ? s.hiddenEdgeCats.filter((x) => x !== c) : [...s.hiddenEdgeCats, c],
        })),
      resetFilters: () => set({ hiddenNodeTypes: [], hiddenEdgeCats: [] }),
      setLeftOpen: (leftOpen) => set({ leftOpen }),
      setRightOpen: (rightOpen) => set({ rightOpen }),
      setLegendOpen: (legendOpen) => set({ legendOpen }),
      setGuideDone: (guideDone) => set({ guideDone }),
      setMobileFilters: (mobileFiltersOpen) => set({ mobileFiltersOpen }),
      hydrateFromRoute: (id) => {
        if (!id || !get().index) return;
        if (get().centerId === id) {
          set({ selectedId: id });
          return;
        }
        if (get().index!.nodeById.has(id)) {
          const cur = get();
          set({ centerId: id, history: [...cur.history.slice(-24), id], selectedId: id });
        }
      },
      load: async () => {
        set({ status: 'loading' });
        try {
          const res = await fetch('data/graph.json');
          if (!res.ok) throw new Error(String(res.status));
          const data = (await res.json()) as GraphData;
          const index = buildIndex(data);
          set({ status: 'ready', index });
          // 旧持久化 view 可能是已删除的视图 key：回落全景
          if (!viewMap.has(get().view)) set({ view: 'overview' });
          const c = get().centerId;
          const valid = c.startsWith('cluster:root') || (c.startsWith('cluster:') && index.byType.has(c.slice(8))) || index.nodeById.has(c);
          if (!valid) set({ centerId: index.byType.get('character')?.[0]?.id ?? data.nodes[0].id });
        } catch (e) {
          console.error(e);
          set({ status: 'error' });
        }
      },
    }),
    {
      name: 'marvel-graph-ui',
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        lang: s.lang,
        view: s.view,
        centerId: s.centerId,
        history: s.history,
        hiddenNodeTypes: s.hiddenNodeTypes,
        hiddenEdgeCats: s.hiddenEdgeCats,
        leftOpen: s.leftOpen,
        rightOpen: s.rightOpen,
        legendOpen: s.legendOpen,
        guideDone: s.guideDone,
      }),
    }
  )
);

/* ---------- 投影工具 ---------- */

import { relationMap, viewMap } from '../../data/taxonomy';

export interface ProjectedNode {
  node: GraphNode;
  weight: number;
  viaEdgeIds: string[];
}
export interface Projection {
  center: GraphNode | null;
  neighbors: ProjectedNode[];
  edges: GraphEdge[];
  truncated: boolean;
}

/** 当前中心的一层邻域投影（含筛选与视图权重） */
export function project(index: GraphIndex, centerId: string, view: string, hiddenNodeTypes: string[], hiddenEdgeCats: string[], cap: number): Projection {
  const center = index.nodeById.get(centerId) ?? null;
  if (!center) return { center: null, neighbors: [], edges: [], truncated: false };
  const links = index.adj.get(centerId) ?? [];
  const viewCfg = viewMap.get(view);
  const weights = viewCfg?.catWeights ?? {};
  const seen = new Map<string, ProjectedNode>();
  const keptEdges: GraphEdge[] = [];
  for (const { edge, other } of links) {
    const otherNode = index.nodeById.get(other);
    if (!otherNode) continue;
    if (hiddenNodeTypes.includes(otherNode.type)) continue;
    const cat = relationMap.get(edge.r)?.cat;
    if (cat && hiddenEdgeCats.includes(cat)) continue;
    keptEdges.push(edge);
    const w = (relationMap.get(edge.r)?.weight ?? 1) * (weights[cat ?? ''] ?? 1);
    const existing = seen.get(other);
    if (existing) {
      existing.viaEdgeIds.push(edge.id);
      existing.weight += w;
    } else {
      seen.set(other, { node: otherNode, weight: w, viaEdgeIds: [edge.id] });
    }
  }
  const list = [...seen.values()];
  list.sort((a, b) => b.weight - a.weight);
  const truncated = list.length > cap;
  const kept = list.slice(0, cap);
  const keptIds = new Set(kept.map((n) => n.node.id));
  return {
    center,
    neighbors: kept,
    edges: keptEdges.filter((e) => keptIds.has(e.s === centerId ? e.t : e.s)),
    truncated,
  };
}
