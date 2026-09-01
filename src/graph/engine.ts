/**
 * 图谱 Canvas 引擎：相机、投影（含全景虚拟聚类）、中心放射布局、渲染、命中、交互、小地图。
 * 视觉基线：照片圆卡 + 有向线 + 胶囊关系标签 + 发光中心（对齐参考图）。
 */
import type { GraphEdge, GraphNode } from '../../data/schema';
import { RELATION_CATEGORIES, relationCatMap, relationMap, nodeTypeMap, NODE_TYPES } from '../../data/taxonomy';
import type { GraphIndex, Lang, Theme } from '../store/useStore';
import { project, type Projection, type ProjectedNode } from '../store/useStore';
import { imageFor } from './avatar';


/** 画布主题色：夜间（深空）与日间（纸白 + 漫威红）双套，随 snapshot.theme 切换 */
const CANVAS_THEMES: Record<Theme, {
  bg: [string, string, string];
  grid: string;
  star: (a: number) => string;
  edgeLabelBg: string;
  edgeLabelBgFocus: string;
  edgeLabelShadow: string;
  edgeLabelText: string;
  edgeLabelTextFocus: string;
  discFill: string;
  discEmpty: string;
  nodeShadow: string;
  centerShadow: string;
  centerGlow: [string, string, string];
  ray: [string, string];
  centerRing: string;
  centerRing2: string;
  breatheRing: string;
  breatheFill: string;
  clusterCount: string;
  clusterCountShadow: string;
  ringDefault: string;
  moreRing: string;
  moreText: string;
  moreSubText: string;
  nameShadow: string;
  nameText: string;
  subText: string;
  mmBg: string;
  mmEdge: string;
  mmNode: string;
  mmViewport: string;
}> = {
  dark: {
    bg: ['#0c1322', '#080d18', '#05070d'],
    grid: 'rgba(120,150,200,0.05)',
    star: (a) => `rgba(190,215,255,${a})`,
    edgeLabelBg: 'rgba(238,244,255,0.92)',
    edgeLabelBgFocus: '#ffffff',
    edgeLabelShadow: 'rgba(0,0,0,0.5)',
    edgeLabelText: '#2c3546',
    edgeLabelTextFocus: '#101726',
    discFill: '#0d1420',
    discEmpty: '#1a2333',
    nodeShadow: 'rgba(0,0,0,0.55)',
    centerShadow: 'rgba(255,170,50,0.65)',
    centerGlow: ['rgba(255,176,64,0.4)', 'rgba(255,150,40,0.13)', 'rgba(255,140,30,0)'],
    ray: ['rgba(255,190,90,0.5)', 'rgba(255,190,90,0)'],
    centerRing: '#ffb547',
    centerRing2: 'rgba(255,181,71,0.32)',
    breatheRing: 'rgba(255,181,71,0.5)',
    breatheFill: 'rgba(255,181,71,0.12)',
    clusterCount: '#eef4ff',
    clusterCountShadow: 'rgba(0,0,0,0.7)',
    ringDefault: 'rgba(235,242,252,0.85)',
    moreRing: 'rgba(190,210,240,0.7)',
    moreText: '#eef4ff',
    moreSubText: 'rgba(200,215,235,0.92)',
    nameShadow: 'rgba(0,0,0,0.85)',
    nameText: '#eef4ff',
    subText: 'rgba(160,180,205,0.95)',
    mmBg: 'rgba(8,12,22,0.88)',
    mmEdge: 'rgba(150,180,220,0.25)',
    mmNode: 'rgba(180,205,240,0.9)',
    mmViewport: 'rgba(255,181,71,0.9)',
  },
  light: {
    bg: ['#ffffff', '#f5f7fb', '#e9edf5'],
    grid: 'rgba(40,60,100,0.055)',
    star: (a) => `rgba(130,150,190,${a * 0.45})`,
    edgeLabelBg: 'rgba(255,255,255,0.96)',
    edgeLabelBgFocus: '#e62429',
    edgeLabelShadow: 'rgba(40,50,80,0.22)',
    edgeLabelText: '#33415c',
    edgeLabelTextFocus: '#ffffff',
    discFill: '#ffffff',
    discEmpty: '#eef1f7',
    nodeShadow: 'rgba(50,60,90,0.3)',
    centerShadow: 'rgba(230,36,41,0.45)',
    centerGlow: ['rgba(230,36,41,0.22)', 'rgba(230,36,41,0.07)', 'rgba(230,36,41,0)'],
    ray: ['rgba(230,36,41,0.38)', 'rgba(230,36,41,0)'],
    centerRing: '#e62429',
    centerRing2: 'rgba(230,36,41,0.26)',
    breatheRing: 'rgba(230,36,41,0.42)',
    breatheFill: 'rgba(230,36,41,0.07)',
    clusterCount: '#243046',
    clusterCountShadow: 'rgba(255,255,255,0.85)',
    ringDefault: 'rgba(50,65,95,0.5)',
    moreRing: 'rgba(80,100,140,0.6)',
    moreText: '#243046',
    moreSubText: 'rgba(80,95,125,0.92)',
    nameShadow: 'rgba(255,255,255,0.9)',
    nameText: '#1c2534',
    subText: 'rgba(90,105,130,0.95)',
    mmBg: 'rgba(255,255,255,0.92)',
    mmEdge: 'rgba(80,100,140,0.28)',
    mmNode: 'rgba(70,90,130,0.85)',
    mmViewport: 'rgba(230,36,41,0.85)',
  },
};

export interface EngineSnapshot {
  theme: Theme;
  centerId: string;
  view: string;
  lang: Lang;
  selectedId: string | null;
  focusEdge: string | null;
  hiddenNodeTypes: string[];
  hiddenEdgeCats: string[];
  mobile: boolean;
}

export interface EngineCallbacks {
  snapshot: () => EngineSnapshot;
  getIndex: () => GraphIndex | null;
  onSelect: (id: string | null) => void;
  onDrill: (id: string) => void;
  /** 单击分类星团：进入该类型关系最丰富的节点（关系图谱） */
  onClusterDrill: (type: string) => void;
  onEdgeFocus: (edgeId: string | null) => void;
}

interface RNode {
  id: string;
  node: GraphNode | null;
  /** 类型环散射布局：诱导子图内的枢纽节点（度数高，名称常显） */
  hub?: boolean;
  cluster?: { type: string; count: number; label: string; rootLevel?: boolean };
  moreCount?: number;
  isCenter: boolean;
  pseudoRoot?: boolean;
  x: number; y: number; tx: number; ty: number;
  baseR: number; r: number;
  alpha: number; targetAlpha: number;
  hover: number;
}
interface REdge {
  edge: GraphEdge;
  a: string; b: string;
  alpha: number; targetAlpha: number;
  hl: number; curve: number;
}

const TAU = Math.PI * 2;
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

export class GraphEngine {
  private cv: HTMLCanvasElement;
  private mm: HTMLCanvasElement | null;
  private ctx: CanvasRenderingContext2D;
  private cb: EngineCallbacks;
  private dpr = Math.min(window.devicePixelRatio || 1, 2);
  private w = 0;
  private h = 0;
  cam = { x: 0, y: 0, scale: 1 };
  private camT = { x: 0, y: 0, scale: 1 };
  private nodes = new Map<string, RNode>();
  private edges: REdge[] = [];
  private projection: Projection | null = null;
  private virtual = false;
  private virtualCenterLabel = '';
  private projKey = '';
  private raf = 0;
  private time = 0;
  private lastT = 0;
  private bg: HTMLCanvasElement | null = null;
  private bgTheme: Theme | null = null;
  private T = CANVAS_THEMES.dark;
  private hoveredId: string | null = null;
  private hoveredEdge: string | null = null;
  private dragNode: RNode | null = null;
  private panning = false;
  private pointerDown = { x: 0, y: 0, id: -1, moved: false };
  private pointers = new Map<number, { x: number; y: number }>();
  private pinchDist = 0;
  private lastTapT = 0;
  private lastTapXY = { x: 0, y: 0 };
  private destroyed = false;
  private transitioning = 0;
  private onViewportCb: (() => void) | null = null;

  constructor(canvas: HTMLCanvasElement, minimap: HTMLCanvasElement | null, cb: EngineCallbacks) {
    this.cv = canvas;
    this.mm = minimap;
    this.ctx = canvas.getContext('2d')!;
    this.cb = cb;
    this.resize();
    window.addEventListener('resize', this.resize);
    canvas.addEventListener('pointerdown', this.onPointerDown);
    canvas.addEventListener('pointermove', this.onPointerMove);
    canvas.addEventListener('pointerup', this.onPointerUp);
    canvas.addEventListener('pointercancel', this.onPointerUp);
    canvas.addEventListener('wheel', this.onWheel, { passive: false });
    canvas.addEventListener('dblclick', this.onDblClick);
    canvas.addEventListener('pointerleave', () => this.setHover(null, null));
    this.lastT = performance.now();
    this.raf = requestAnimationFrame(this.loop);
  }

  onViewport(cb: () => void) {
    this.onViewportCb = cb;
  }

  destroy() {
    this.destroyed = true;
    cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.resize);
    this.cv.removeEventListener('pointerdown', this.onPointerDown);
    this.cv.removeEventListener('pointermove', this.onPointerMove);
    this.cv.removeEventListener('pointerup', this.onPointerUp);
    this.cv.removeEventListener('pointercancel', this.onPointerUp);
    this.cv.removeEventListener('wheel', this.onWheel);
    this.cv.removeEventListener('dblclick', this.onDblClick);
  }

  private resize = () => {
    const rect = this.cv.parentElement?.getBoundingClientRect();
    this.w = Math.max(320, Math.floor(rect?.width ?? window.innerWidth));
    this.h = Math.max(320, Math.floor(rect?.height ?? window.innerHeight));
    this.cv.width = this.w * this.dpr;
    this.cv.height = this.h * this.dpr;
    this.cv.style.width = this.w + 'px';
    this.cv.style.height = this.h + 'px';
    this.bg = null;
  };

  /* ============ 投影构建 ============ */

  refresh(animate = true) {
    const s = this.cb.snapshot();
    const idx = this.cb.getIndex();
    if (!idx) return;
    const cap = s.mobile ? 24 : 44;
    const key = [s.centerId, s.view, s.hiddenNodeTypes.join(','), s.hiddenEdgeCats.join(','), cap, s.centerId.startsWith('cluster:') ? this.indexPage : 0].join('|');
    if (key !== this.projKey || !this.projection) {
      this.projKey = key;
      if (s.centerId.startsWith('cluster:')) {
        this.projection = this.buildVirtualProjection(idx, s, cap);
        this.virtual = true;
      } else {
        this.projection = project(idx, s.centerId, s.view, s.hiddenNodeTypes, s.hiddenEdgeCats, cap);
        this.virtual = false;
      }
      this.applyProjection(s, animate);
    } else {
      this.applySelectionVisuals(s);
    }
  }

  /** 全景虚拟聚类投影：cluster:root → 类型星团；cluster:<type> → 该类全部节点（点状环布 + 互相关联边） */
  private buildVirtualProjection(idx: GraphIndex, s: EngineSnapshot, cap: number): Projection {
    const empty: Projection = { center: null, neighbors: [], edges: [], truncated: false };
    if (s.centerId === 'cluster:root') {
      this.virtualCenterLabel = '';
      const neighbors: ProjectedNode[] = [];
      for (const t of NODE_TYPES) {
        if (s.hiddenNodeTypes.includes(t.key)) continue;
        const list = idx.byType.get(t.key) ?? [];
        if (!list.length) continue;
        neighbors.push({ node: list[0], weight: list.length, viaEdgeIds: [] });
      }
      // 用虚拟节点表示：这里 node 取该类代表节点，引擎端转 cluster
      this.virtualClusters = neighbors.map((nb) => {
        const list = idx.byType.get(nb.node.type) ?? [];
        return { type: nb.node.type, count: list.length, rep: nb.node };
      });
      return { ...empty, neighbors, truncated: false };
    }
    const type = s.centerId.slice('cluster:'.length);
    const tdef = nodeTypeMap.get(type);
    if (!tdef) return empty;
    this.virtualCenterLabel = tdef.label[s.lang];
    const list = idx.byType.get(type) ?? [];
    this.indexPageKey = s.centerId;
    this.indexPage = 0;
    // 全量显示该类型节点（角色 93 / 场景 50 / 事件 35 / 宇宙 28，均在单帧无压力范围）
    const picked: GraphNode[] = list.filter((n) => !s.hiddenNodeTypes.includes(n.type));
    const pickedIds = new Set(picked.map((n) => n.id));
    const neighbors: ProjectedNode[] = picked.map((n) => ({ node: n, weight: 1, viaEdgeIds: [] }));
    // 诱导边：两端都在 picked 集内的关系（如名号间的盟敌/师徒）→ "以该类型为核心"的关联网
    const edges: GraphEdge[] = [];
    const edgeSeen = new Set<string>();
    for (const n of picked) {
      for (const { edge } of idx.adj.get(n.id) ?? []) {
        if (!pickedIds.has(edge.s) || !pickedIds.has(edge.t)) continue;
        if (edgeSeen.has(edge.id)) continue;
        edgeSeen.add(edge.id);
        edges.push(edge);
      }
    }
    return { center: null, neighbors, edges, truncated: false };
  }

  private virtualClusters: { type: string; count: number; rep: GraphNode }[] = [];
  private gridDims: { w: number; h: number } | null = null;
  private indexPage = 0;
  private indexPageKey = '';

  private applyProjection(s: EngineSnapshot, animate: boolean) {
    const p = this.projection!;
    const idx = this.cb.getIndex()!;
    const next = new Map<string, RNode>();
    const isClusterRoot = s.centerId === 'cluster:root';
    const isClusterType = s.centerId.startsWith('cluster:') && !isClusterRoot;

    // 类型环（cluster:<type>）不创建中心伪节点：中心区域留给枢纽节点
    if (!isClusterType) {
      next.set('::center', {
        id: '::center',
        node: p.center,
        isCenter: true,
        pseudoRoot: !p.center,
        x: 0, y: 0, tx: 0, ty: 0,
        baseR: p.center ? 44 : 26, r: 0,
        alpha: 1, targetAlpha: 1, hover: 0,
      });
    }

    const neighbors = p.neighbors;
    const n = neighbors.length;
    let R: number;

    if (isClusterRoot) {
      // 全景：类型星团围绕中心
      R = 235;
      const total = this.virtualClusters.length || 1;
      this.virtualClusters.forEach((vc, i) => {
        const ang = -Math.PI / 2 + (TAU * i) / total;
        const id = 'cluster:' + vc.type;
        const tdef = nodeTypeMap.get(vc.type);
        next.set(id, {
          id, node: null,
          cluster: { type: vc.type, count: vc.count, label: tdef?.label[s.lang] ?? vc.type, rootLevel: true },
          isCenter: false,
          x: 0, y: 0,
          tx: Math.cos(ang) * R, ty: Math.sin(ang) * R,
          baseR: 38, r: 0, alpha: 1, targetAlpha: 1, hover: 0,
        });
      });
    } else if (isClusterType) {
      // 类型全景：度数向心的伞状散射（Vogel 螺旋）——
      // 关联多的枢纽节点聚在中心，关联少的自然散在外围，替代机械的圆弧排布。
      // 1) 诱导子图内连接度
      const deg = new Map<string, number>();
      for (const nb of neighbors) deg.set(nb.node.id, 0);
      for (const e of p.edges) {
        deg.set(e.s, (deg.get(e.s) ?? 0) + 1);
        deg.set(e.t, (deg.get(e.t) ?? 0) + 1);
      }
      // 2) 度数降序（同度按 id 稳定排序，保证每次进入形态一致）
      const ordered = [...neighbors].sort(
        (a, b) => deg.get(b.node.id)! - deg.get(a.node.id)! || a.node.id.localeCompare(b.node.id),
      );
      // 3) 黄金角 + √ 累进半径：中心密、外围疏，天然均匀无重叠
      const spread = Math.max(1, Math.sqrt(n / 40));
      const rHub = 70;
      const rMax = 760 * spread;
      const GOLDEN = 2.39996; // 137.508°
      ordered.forEach((nb, i) => {
        const t = n <= 1 ? 0 : i / (n - 1);
        const rr = rHub + (rMax - rHub) * Math.sqrt(t);
        const ang = i * GOLDEN;
        const d = deg.get(nb.node.id) ?? 0;
        const hub = d >= 4;
        next.set(nb.node.id, {
          id: nb.node.id, node: nb.node, isCenter: false,
          hub,
          x: 0, y: 0,
          tx: Math.cos(ang) * rr, ty: Math.sin(ang) * rr,
          baseR: hub ? 30 : n > 60 ? 22 : 27, r: 0, alpha: 1, targetAlpha: 1, hover: 0,
        });
      });
      this.gridDims = { w: 2 * (rMax + 90), h: 2 * (rMax + 90) };
      if (p.truncated) {
        next.set('::more', {
          id: '::more', node: null, isCenter: false,
          moreCount: Math.max(0, (idx.byType.get(s.centerId.slice(8))?.length ?? 0) - n),
          x: 0, y: 0, tx: 0, ty: rMax * 0.7 + 132,
          baseR: 24, r: 0, alpha: 1, targetAlpha: 1, hover: 0,
        });
      }
      R = 0;
    } else {
      // 分区放射：按最强关系大类分组占据扇区
      const groups = new Map<string, { id: string; w: number }[]>();
      for (const nb of neighbors) {
        let bestCat = 'other';
        let bestW = -1;
        for (const eid of nb.viaEdgeIds) {
          const e = this.edgeById(idx, eid);
          if (!e) continue;
          const cat = relationMap.get(e.r)?.cat ?? 'other';
          const w = relationMap.get(e.r)?.weight ?? 1;
          if (w > bestW) { bestW = w; bestCat = cat; }
        }
        if (!groups.has(bestCat)) groups.set(bestCat, []);
        groups.get(bestCat)!.push({ id: nb.node.id, w: nb.weight });
      }
      R = clamp(180 + n * 8.2, 240, 660);
      const order = [...groups.keys()].sort((a, b) => groups.get(b)!.length - groups.get(a)!.length);
      let sectorStart = -Math.PI / 2;
      for (const cat of order) {
        const g = groups.get(cat)!;
        g.sort((a, b) => b.w - a.w);
        const sector = (TAU * g.length) / Math.max(n, 1);
        g.forEach((it, i) => {
          const ang = sectorStart + (sector * (i + 0.5)) / g.length;
          const jitter = 1 + (((it.id.length * 7 + (it.id.charCodeAt(3) || 9)) % 10) / 10 - 0.5) * 0.2;
          const ringK = i % 2 === 0 ? 1 : 1.42;
          const node = idx.nodeById.get(it.id)!;
          next.set(it.id, {
            id: it.id, node, isCenter: false,
            x: 0, y: 0,
            tx: Math.cos(ang) * R * ringK * jitter, ty: Math.sin(ang) * R * ringK * jitter,
            baseR: 27, r: 0, alpha: 1, targetAlpha: 1, hover: 0,
          });
        });
        sectorStart += sector;
      }
      if (p.truncated) {
        const hiddenCount = isClusterType
          ? Math.max(0, (idx.byType.get(s.centerId.slice(8))?.length ?? 0) - n)
          : Math.max(1, n - this.projection!.neighbors.length);
        next.set('::more', {
          id: '::more', node: null, isCenter: false, moreCount: hiddenCount,
          x: 0, y: 0, tx: 0, ty: R + 90,
          baseR: 24, r: 0, alpha: 1, targetAlpha: 1, hover: 0,
        });
      }
    }

    // 碰撞松弛：避免环上节点重叠（网格布局间距已保证，跳过）
    const ids = [...next.keys()].filter((k) => k !== '::center' && k !== '::more' && !isClusterType);
    for (let iter = 0; iter < 36; iter++) {
      for (let i = 0; i < ids.length; i++) {
        for (let j = i + 1; j < ids.length; j++) {
          const a = next.get(ids[i])!;
          const b = next.get(ids[j])!;
          const dx = b.tx - a.tx;
          const dy = b.ty - a.ty;
          const d = Math.hypot(dx, dy) || 0.01;
          const min = a.baseR + b.baseR + 34;
          if (d < min) {
            const push = (min - d) / 2;
            const ux = dx / d;
            const uy = dy / d;
            a.tx -= ux * push;
            a.ty -= uy * push;
            b.tx += ux * push;
            b.ty += uy * push;
          }
        }
      }
    }

    // 平滑迁移
    const old = this.nodes;
    for (const [id, rn] of next) {
      const prev = old.get(id);
      if (prev && animate && prev.id === id) {
        rn.x = prev.x; rn.y = prev.y; rn.r = prev.r; rn.alpha = prev.alpha;
      } else if (animate) {
        rn.x = rn.tx * 0.1; rn.y = rn.ty * 0.1;
        rn.r = rn.baseR * 0.25;
        rn.alpha = 0;
      } else {
        rn.x = rn.tx; rn.y = rn.ty; rn.r = rn.baseR; rn.alpha = 1;
      }
    }
    this.nodes = next;
    if (!(s.centerId.startsWith('cluster:') && s.centerId !== 'cluster:root')) this.gridDims = null;
    this.transitioning = animate ? 1 : 0;

    // 边（中心节点的存储键是 ::center，需要解析）
    const centerNodeId = p.center?.id ?? '';
    const keyOf = (nid: string) => (nid === centerNodeId ? '::center' : nid);
    const rEdges: REdge[] = [];
    const parallel = new Map<string, number>();
    for (const e of p.edges) {
      const ka = keyOf(e.s);
      const kb = keyOf(e.t);
      if (!next.has(ka) || !next.has(kb)) continue;
      const pairKey = [ka, kb].sort().join('~');
      const c = parallel.get(pairKey) ?? 0;
      parallel.set(pairKey, c + 1);
      rEdges.push({ edge: e, a: ka, b: kb, alpha: animate ? 0 : 1, targetAlpha: 1, hl: 0, curve: c });
    }
    this.edges = rEdges;
    this.fitCamera(animate);
    this.applySelectionVisuals(s);
  }

  private edgeMap: Map<string, GraphEdge> | null = null;
  private edgeById(idx: GraphIndex, id: string): GraphEdge | undefined {
    if (!this.edgeMap || this.edgeMap.size !== idx.data.edges.length) {
      this.edgeMap = new Map(idx.data.edges.map((e: GraphEdge) => [e.id, e] as [string, GraphEdge]));
    }
    return this.edgeMap.get(id);
  }

  private fitCamera(animate: boolean) {
    if (this.gridDims) {
      const s0 = this.cb.snapshot();
      const padX = s0.mobile ? 20 : 60;
      const scale = clamp(Math.min((this.w - padX * 2) / this.gridDims.w, (this.h - 150) / this.gridDims.h), 0.2, 0.85);
      this.camT = { x: 0, y: 0, scale };
      if (!animate) this.cam = { ...this.camT };
      return;
    }
    let maxR = 260;
    for (const rn of this.nodes.values()) maxR = Math.max(maxR, Math.hypot(rn.tx, rn.ty) + 110);
    const s = this.cb.snapshot();
    const padX = s.mobile ? 24 : 90;
    const scale = clamp(Math.min((this.w - padX * 2) / (maxR * 2), (this.h - 170) / (maxR * 2)), 0.16, 1.2);
    this.camT = { x: 0, y: 0, scale };
    if (!animate) this.cam = { ...this.camT };
  }

  private applySelectionVisuals(s: EngineSnapshot) {
    const idx = this.cb.getIndex();
    if (!idx) return;
    const sel = s.selectedId;
    const focus = s.focusEdge;
    const focusEdge = focus ? this.edgeById(idx, focus) : null;
    for (const rn of this.nodes.values()) {
      let targetAlpha = 1;
      if (sel && !rn.isCenter && rn.node) {
        const adjacent = rn.node.id === sel || idx.adj.get(sel)?.some((l) => l.other === rn.node!.id);
        targetAlpha = adjacent ? 1 : 0.26;
      }
      rn.targetAlpha = targetAlpha;
    }
    for (const re of this.edges) {
      let targetAlpha = 0.85;
      if (focusEdge) targetAlpha = re.edge.id === focusEdge.id ? 1 : 0.1;
      else if (sel && sel !== s.centerId) {
        const touches = re.edge.s === sel || re.edge.t === sel;
        targetAlpha = touches ? 1 : 0.14;
      }
      re.targetAlpha = targetAlpha;
    }
  }

  /* ============ 坐标与命中 ============ */

  private toScreen(x: number, y: number): [number, number] {
    return [(x - this.cam.x) * this.cam.scale + this.w / 2, (y - this.cam.y) * this.cam.scale + this.h / 2];
  }
  private toWorld(x: number, y: number): [number, number] {
    return [(x - this.w / 2) / this.cam.scale + this.cam.x, (y - this.h / 2) / this.cam.scale + this.cam.y];
  }

  private hitNode(px: number, py: number): RNode | null {
    let hit: RNode | null = null;
    let bestD = Infinity;
    for (const rn of this.nodes.values()) {
      const [sx, sy] = this.toScreen(rn.x, rn.y);
      const d = Math.hypot(px - sx, py - sy);
      const rr = (rn.baseR + 16) * this.cam.scale + 8;
      if (d < rr && d < bestD) { bestD = d; hit = rn; }
    }
    return hit;
  }

  private hitEdge(px: number, py: number): REdge | null {
    let best: REdge | null = null;
    let bestD = 9 / this.cam.scale;
    for (const re of this.edges) {
      const a = this.nodes.get(re.a);
      const b = this.nodes.get(re.b);
      if (!a || !b) continue;
      const d = distToSegment(px, py, a.x, a.y, b.x, b.y);
      if (d < bestD) { bestD = d; best = re; }
    }
    return best;
  }

  /* ============ 交互 ============ */

  private setHover(nodeId: string | null, edgeId: string | null) {
    if (nodeId !== this.hoveredId) {
      const prev = this.hoveredId ? this.nodes.get(this.hoveredId) : null;
      if (prev) prev.hover = 0;
      this.hoveredId = nodeId;
      const rn = nodeId ? this.nodes.get(nodeId) : null;
      if (rn) rn.hover = 1;
      if (!edgeId) this.cv.style.cursor = nodeId ? 'pointer' : 'grab';
    }
    if (edgeId !== this.hoveredEdge) {
      this.hoveredEdge = edgeId;
      this.cb.onEdgeFocus(edgeId);
    }
  }

  private onPointerDown = (ev: PointerEvent) => {
    try { this.cv.setPointerCapture(ev.pointerId); } catch { /* 合成事件或已释放 */ }
    this.pointers.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
    if (this.pointers.size === 2) {
      const [a, b] = [...this.pointers.values()];
      this.pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
      this.dragNode = null;
      this.panning = false;
      return;
    }
    const rect = this.cv.getBoundingClientRect();
    const px = ev.clientX - rect.left;
    const py = ev.clientY - rect.top;
    this.pointerDown = { x: px, y: py, id: ev.pointerId, moved: false };
    const rn = this.hitNode(px, py);
    if (rn && rn.id !== '::more') this.dragNode = rn;
    else {
      this.dragNode = null;
      this.panning = true;
      this.cv.style.cursor = 'grabbing';
    }
  };

  private onPointerMove = (ev: PointerEvent) => {
    if (this.pointers.has(ev.pointerId)) this.pointers.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
    if (this.pointers.size === 2) {
      const [a, b] = [...this.pointers.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (this.pinchDist > 0 && d > 0) {
        const rect = this.cv.getBoundingClientRect();
        this.zoomAt((a.x + b.x) / 2 - rect.left, (a.y + b.y) / 2 - rect.top, d / this.pinchDist);
      }
      this.pinchDist = d;
      return;
    }
    const rect = this.cv.getBoundingClientRect();
    const px = ev.clientX - rect.left;
    const py = ev.clientY - rect.top;
    if (this.pointerDown.id === ev.pointerId && !this.pointerDown.moved && Math.hypot(px - this.pointerDown.x, py - this.pointerDown.y) > 5) {
      this.pointerDown.moved = true;
    }
    if (this.pointerDown.moved) {
      if (this.dragNode) {
        const [wx, wy] = this.toWorld(px, py);
        this.dragNode.x = wx; this.dragNode.y = wy;
        this.dragNode.tx = wx; this.dragNode.ty = wy;
      } else if (this.panning) {
        this.cam.x -= (px - this.pointerDown.x) / this.cam.scale;
        this.cam.y -= (py - this.pointerDown.y) / this.cam.scale;
        this.camT = { ...this.cam };
        this.pointerDown.x = px;
        this.pointerDown.y = py;
        this.onViewportCb?.();
      }
      return;
    }
    const rn = this.hitNode(px, py);
    if (rn) this.setHover(rn.id, null);
    else {
      const re = this.hitEdge(px, py);
      this.setHover(null, re?.edge.id ?? null);
    }
  };

  private onPointerUp = (ev: PointerEvent) => {
    this.pointers.delete(ev.pointerId);
    if (this.pointers.size < 2) this.pinchDist = 0;
    const rect = this.cv.getBoundingClientRect();
    const px = ev.clientX - rect.left;
    const py = ev.clientY - rect.top;
    const wasDrag = this.pointerDown.moved && this.pointerDown.id === ev.pointerId;
    this.cv.style.cursor = 'grab';
    if (!wasDrag && this.pointerDown.id === ev.pointerId) {
      const rn = this.hitNode(px, py);
      if (rn) {
        const now = performance.now();
        const near = Math.hypot(px - this.lastTapXY.x, py - this.lastTapXY.y) < 30;
        if (now - this.lastTapT < 550 && near && rn.id !== '::center') {
          this.activate(rn);
          this.lastTapT = 0;
        } else if (rn.id === '::more') {
          this.handleMore();
        } else if (rn.cluster) {
          // 单击星团：进入该类型的关系图谱（双击走上方分支 → 分类索引环）
          this.cb.onClusterDrill(rn.cluster.type);
        } else if (rn.id === '::center') {
          // 中心节点：仅选中（打开详情，不重排）
          this.lastTapT = now;
          this.lastTapXY = { x: px, y: py };
          this.cb.onSelect(rn.node?.id ?? null);
        } else {
          // 任意节点：单击即切换焦点，以其为中心展开关系图谱
          this.lastTapT = now;
          this.lastTapXY = { x: px, y: py };
          this.cb.onDrill(rn.node?.id ?? '');
        }
      } else {
        const re = this.hitEdge(px, py);
        if (re) this.cb.onEdgeFocus(re.edge.id);
        else {
          this.cb.onSelect(null);
          this.cb.onEdgeFocus(null);
        }
      }
    }
    this.dragNode = null;
    this.panning = false;
  };

  private activate(rn: RNode) {
    if (rn.cluster) this.cb.onDrill(rn.id);
    else if (rn.node) this.cb.onDrill(rn.node.id);
  }

  private handleMore() {
    // 索引视图：点击"更多" → 翻到下一批（环状结构不变）
    if (this.projection?.truncated && this.cb.snapshot().centerId.startsWith('cluster:')) {
      this.indexPage++;
      this.projKey = '';
      this.refresh(true);
      return;
    }
    // 关系视图：聚合节点 → 提示放宽筛选
    this.cb.onSelect('::more');
  }

  private onDblClick = (ev: MouseEvent) => {
    const rect = this.cv.getBoundingClientRect();
    const rn = this.hitNode(ev.clientX - rect.left, ev.clientY - rect.top);
    if (rn && rn.id !== '::center') this.activate(rn);
    else if (!rn) this.fitCamera(true);
  };

  private zoomAt(px: number, py: number, k: number) {
    const ns = clamp(this.cam.scale * k, 0.14, 3.2);
    const realK = ns / this.cam.scale;
    const [wx, wy] = this.toWorld(px, py);
    this.cam.scale = ns;
    this.cam.x = wx - (px - this.w / 2) / ns;
    this.cam.y = wy - (py - this.h / 2) / ns;
    this.camT = { ...this.cam };
    this.onViewportCb?.();
    void realK;
  }

  private onWheel = (ev: WheelEvent) => {
    ev.preventDefault();
    const rect = this.cv.getBoundingClientRect();
    this.zoomAt(ev.clientX - rect.left, ev.clientY - rect.top, Math.exp(-ev.deltaY * 0.0016));
  };

  /* ============ 渲染 ============ */

  private ensureBg(theme: Theme) {
    if (this.bg && this.bgTheme === theme) return;
    this.bgTheme = theme;
    this.bg = null;
    const T = CANVAS_THEMES[theme] ?? CANVAS_THEMES.dark;
    const c = document.createElement('canvas');
    c.width = this.w;
    c.height = this.h;
    const x = c.getContext('2d')!;
    const g = x.createRadialGradient(this.w / 2, this.h * 0.42, 40, this.w / 2, this.h / 2, Math.max(this.w, this.h) * 0.75);
    g.addColorStop(0, T.bg[0]);
    g.addColorStop(0.55, T.bg[1]);
    g.addColorStop(1, T.bg[2]);
    x.fillStyle = g;
    x.fillRect(0, 0, this.w, this.h);
    x.strokeStyle = T.grid;
    x.lineWidth = 1;
    const step = 56;
    for (let gx = 0; gx < this.w; gx += step) { x.beginPath(); x.moveTo(gx, 0); x.lineTo(gx, this.h); x.stroke(); }
    for (let gy = 0; gy < this.h; gy += step) { x.beginPath(); x.moveTo(0, gy); x.lineTo(this.w, gy); x.stroke(); }
    let seed = 42;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    for (let i = 0; i < 150; i++) {
      x.fillStyle = T.star(0.1 + rnd() * 0.5);
      x.beginPath();
      x.arc(rnd() * this.w, rnd() * this.h, rnd() * 1.4 + 0.3, 0, TAU);
      x.fill();
    }
    this.bg = c;
  }

  private loop = (t: number) => {
    if (this.destroyed) return;
    const dt = Math.min(48, t - this.lastT);
    this.lastT = t;
    this.time += dt;
    this.step(dt);
    this.draw();
    if (this.mm) this.drawMinimap();
    this.raf = requestAnimationFrame(this.loop);
  };

  private step(dt: number) {
    const k = 1 - Math.pow(0.0018, dt / 1000);
    this.cam.x += (this.camT.x - this.cam.x) * k;
    this.cam.y += (this.camT.y - this.cam.y) * k;
    this.cam.scale += (this.camT.scale - this.cam.scale) * k;
    if (this.transitioning > 0) this.transitioning = Math.max(0, this.transitioning - dt / 620);
    const moving = this.transitioning > 0;
    for (const rn of this.nodes.values()) {
      if (moving || this.dragNode !== rn) {
        rn.x += (rn.tx - rn.x) * k;
        rn.y += (rn.ty - rn.y) * k;
      }
      const targetR = rn.baseR * (1 + rn.hover * 0.13);
      rn.r += (targetR - rn.r) * k;
      rn.alpha += (rn.targetAlpha - rn.alpha) * Math.min(1, k * 1.5);
    }
    for (const re of this.edges) {
      re.alpha += (re.targetAlpha - re.alpha) * Math.min(1, k * 1.5);
      const hlt = re.edge.id === this.hoveredEdge ? 1 : 0;
      re.hl += (hlt - re.hl) * Math.min(1, k * 2.2);
    }
  }

  private draw() {
    const ctx = this.ctx;
    const s = this.cb.snapshot();
    const T = (this.T = CANVAS_THEMES[s.theme] ?? CANVAS_THEMES.dark);
    ctx.save();
    ctx.scale(this.dpr, this.dpr);
    ctx.clearRect(0, 0, this.w, this.h);
    this.ensureBg(s.theme);
    if (this.bg) ctx.drawImage(this.bg, 0, 0);
    if (!this.projection) { ctx.restore(); return; }
    const lang = s.lang;
    const sel = s.selectedId;

    // ---- 边 ----
    for (const re of this.edges) {
      const a = this.nodes.get(re.a);
      const b = this.nodes.get(re.b);
      if (!a || !b) continue;
      const alpha = re.alpha;
      const cat = relationMap.get(re.edge.r)?.cat;
      const color = relationCatMap.get(cat ?? '')?.color ?? '#8fa3bf';
      const [x1, y1] = this.toScreen(a.x, a.y);
      const [x2, y2] = this.toScreen(b.x, b.y);
      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2;
      const dx = x2 - x1;
      const dy = y2 - y1;
      const len = Math.hypot(dx, dy) || 1;
      const off = re.curve * 20;
      const cx = mx + (-dy / len) * off;
      const cy = my + (dx / len) * off;
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = (re.hl > 0.05 ? 2.4 : 1.4) * clamp(this.cam.scale, 0.75, 1.5);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.quadraticCurveTo(cx, cy, x2, y2);
      ctx.stroke();
      const rel = relationMap.get(re.edge.r);
      if (rel?.directed) {
        const t = 0.8;
        const ax = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cx + t * t * x2;
        const ay = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cy + t * t * y2;
        const tx = 2 * (1 - t) * (cx - x1) + 2 * t * (x2 - cx);
        const ty = 2 * (1 - t) * (cy - y1) + 2 * t * (y2 - cy);
        const ang = Math.atan2(ty, tx);
        const as = 7 + 3 * this.cam.scale;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(ax + Math.cos(ang) * as, ay + Math.sin(ang) * as);
        ctx.lineTo(ax + Math.cos(ang + 2.5) * as, ay + Math.sin(ang + 2.5) * as);
        ctx.lineTo(ax + Math.cos(ang - 2.5) * as, ay + Math.sin(ang - 2.5) * as);
        ctx.closePath();
        ctx.fill();
      }
      // 胶囊标签
      const isFocus = s.focusEdge === re.edge.id || this.hoveredEdge === re.edge.id;
      const touchesSel = !!sel && (re.edge.s === sel || re.edge.t === sel || re.edge.s === s.centerId || re.edge.t === s.centerId);
      const showLabel = isFocus || touchesSel || this.nodes.size <= 46 || this.cam.scale > 0.9;
      if (showLabel) {
        const label = edgeLabel(re.edge, lang, s.centerId);
        ctx.font = '600 11px "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif';
        const tw = ctx.measureText(label).width;
        const pad = isFocus ? 9 : 6;
        const lx = mx + (-dy / len) * off;
        const ly = my + (dx / len) * off;
        ctx.globalAlpha = alpha;
        roundRect(ctx, lx - tw / 2 - pad, ly - 9, tw + pad * 2, 18, 9);
        ctx.fillStyle = isFocus ? T.edgeLabelBgFocus : T.edgeLabelBg;
        ctx.shadowColor = T.edgeLabelShadow;
        ctx.shadowBlur = isFocus ? 14 : 5;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = isFocus ? T.edgeLabelTextFocus : T.edgeLabelText;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, lx, ly + 0.5);
      }
    }

    // ---- 节点 ----
    const order = [...this.nodes.values()].sort((a, b) => a.baseR - b.baseR);
    for (const rn of order) {
      const [sx, sy] = this.toScreen(rn.x, rn.y);
      const rr = rn.r * this.cam.scale;
      if (sx < -rr * 3 || sx > this.w + rr * 3 || sy < -rr * 3 || sy > this.h + rr * 3) continue;
      ctx.globalAlpha = rn.alpha;

      if (rn.isCenter) {
        if (rn.node) {
          // 发光中心（参考图太阳效果）
          const pulse = 1 + Math.sin(this.time / 900) * 0.05;
          const glow = ctx.createRadialGradient(sx, sy, rr * 0.4, sx, sy, rr * 3.4 * pulse);
          glow.addColorStop(0, T.centerGlow[0]);
          glow.addColorStop(0.5, T.centerGlow[1]);
          glow.addColorStop(1, T.centerGlow[2]);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(sx, sy, rr * 3.4 * pulse, 0, TAU);
          ctx.fill();
          ctx.save();
          ctx.translate(sx, sy);
          ctx.rotate(this.time / 14000);
          for (let i = 0; i < 14; i++) {
            ctx.rotate(TAU / 14);
            const rg = ctx.createLinearGradient(rr * 1.1, 0, rr * 2.7, 0);
            rg.addColorStop(0, T.ray[0]);
            rg.addColorStop(1, T.ray[1]);
            ctx.strokeStyle = rg;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(rr * 1.12, 0);
            ctx.lineTo(rr * 2.7, 0);
            ctx.stroke();
          }
          ctx.restore();
        } else {
          // 虚拟中心：呼吸圆环
          const pulse = 1 + Math.sin(this.time / 700) * 0.08;
          ctx.strokeStyle = T.breatheRing;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(sx, sy, (rr + 6) * pulse, 0, TAU);
          ctx.stroke();
          ctx.fillStyle = T.breatheFill;
          ctx.beginPath();
          ctx.arc(sx, sy, rr * pulse, 0, TAU);
          ctx.fill();
        }
      }

      // 圆形照片卡
      const img = rn.node ? imageFor(rn.node) : null;
      ctx.save();
      ctx.beginPath();
      ctx.arc(sx, sy, rr, 0, TAU);
      ctx.closePath();
      if (img && img.complete && img.naturalWidth > 0) {
        ctx.shadowColor = rn.isCenter ? T.centerShadow : T.nodeShadow;
        ctx.shadowBlur = rn.isCenter ? 26 : 10;
        ctx.fillStyle = T.discFill;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.clip();
        // 居中裁剪（cover）：保持原比例填满圆形，避免图片拉伸变形
        const iw = img.naturalWidth || img.width;
        const ih = img.naturalHeight || img.height;
        let sw = iw;
        let sh = ih;
        let cx0 = 0;
        let cy0 = 0;
        if (iw / ih > 1) {
          // 宽图：裁左右
          sw = ih;
          cx0 = (iw - sw) / 2;
        } else if (ih / iw > 1) {
          // 竖图：裁上下
          sh = iw;
          cy0 = (ih - sh) / 2;
        }
        ctx.drawImage(img, cx0, cy0, sw, sh, sx - rr, sy - rr, rr * 2, rr * 2);
      } else {
        ctx.fillStyle = T.discEmpty;
        ctx.fill();
      }
      ctx.restore();

      // 描边
      const type = rn.node ? nodeTypeMap.get(rn.node.type) : rn.cluster ? nodeTypeMap.get(rn.cluster.type) : null;
      const accent = type?.color ?? '#9fb3d1';
      if (rn.isCenter && rn.node) {
        ctx.strokeStyle = T.centerRing;
        ctx.lineWidth = 3.2;
        ctx.beginPath();
        ctx.arc(sx, sy, rr + 2.4, 0, TAU);
        ctx.stroke();
        ctx.strokeStyle = T.centerRing2;
        ctx.lineWidth = 7;
        ctx.beginPath();
        ctx.arc(sx, sy, rr + 7, 0, TAU);
        ctx.stroke();
      } else if (rn.cluster) {
        ctx.strokeStyle = accent;
        ctx.setLineDash([6, 4]);
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.arc(sx, sy, rr + 2.5, 0, TAU);
        ctx.stroke();
        ctx.setLineDash([]);
        // 星团数量
        ctx.fillStyle = T.clusterCount;
        ctx.font = `700 ${Math.round(rr * 0.66)}px "Segoe UI", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = T.clusterCountShadow;
        ctx.shadowBlur = 6;
        ctx.fillText(String(rn.cluster.count), sx, sy);
        ctx.shadowBlur = 0;
      } else if (!rn.moreCount) {
        const isSelected = sel === rn.node?.id;
        ctx.strokeStyle = isSelected ? accent : T.ringDefault;
        ctx.lineWidth = isSelected ? 3 : 1.6;
        ctx.beginPath();
        ctx.arc(sx, sy, rr + 1.6, 0, TAU);
        ctx.stroke();
        if (rn.hover > 0.05) {
          ctx.globalAlpha = rn.alpha * rn.hover * 0.55;
          ctx.strokeStyle = accent;
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.arc(sx, sy, rr + 4.5, 0, TAU);
          ctx.stroke();
          ctx.globalAlpha = rn.alpha;
        }
      }
      if (rn.moreCount) {
        ctx.strokeStyle = T.moreRing;
        ctx.setLineDash([4, 4]);
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(sx, sy, rr + 1.5, 0, TAU);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = T.moreText;
        ctx.font = `700 ${Math.round(rr * 0.62)}px "Segoe UI", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('+' + rn.moreCount, sx, sy);
      }

      // 名称 / 副标题（LOD）
      // virtual 类型环节点很多时降低文字 LOD：只显示 hover / 缩放到足够近的标签
      const denseVirtual = this.virtual && this.nodes.size > 48;
      const showText =
        rn.isCenter ||
        rn.hub ||
        this.cam.scale > (denseVirtual ? 1.15 : 0.2) ||
        rn.hover > 0.3 ||
        !!rn.cluster ||
        !!rn.moreCount ||
        (this.virtual && this.nodes.size <= 48);
      if (showText) {
        ctx.globalAlpha = rn.alpha * clamp((this.cam.scale - 0.22) * 3 + 0.6, 0.6, 1);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        const nameY = sy + rr + 7;
        ctx.shadowColor = T.nameShadow;
        ctx.shadowBlur = 6;
        if (rn.node) {
          const typeDef = nodeTypeMap.get(rn.node.type);
          const maxLen = this.virtual ? 7 : 18;
          ctx.font = `600 ${rn.isCenter ? 15 : this.virtual ? 12 : 12.5}px "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif`;
          ctx.fillStyle = T.nameText;
          ctx.fillText(truncate(rn.node.name[lang], maxLen), sx, nameY);
          if (!rn.isCenter && typeDef) {
            ctx.font = '400 10.5px "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif';
            ctx.fillStyle = T.subText;
            ctx.fillText(truncate(typeDef.label[lang], 20), sx, nameY + 17);
          }
        } else if (rn.cluster) {
          ctx.font = '600 12px "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif';
          ctx.fillStyle = T.nameText;
          ctx.fillText(rn.cluster.label, sx, nameY);
          if (rn.cluster.rootLevel) {
            ctx.font = '400 10.5px "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif';
            ctx.fillStyle = T.subText;
            ctx.fillText(lang === 'zh' ? '单击进入关系图谱' : 'Click to open the graph', sx, nameY + 17);
          }
        } else if (rn.moreCount) {
          ctx.font = '600 11px "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif';
          ctx.fillStyle = T.moreSubText;
          ctx.fillText(lang === 'zh' ? '更多关系' : 'More relations', sx, nameY);
        }
        ctx.shadowBlur = 0;
      }
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  private drawMinimap() {
    const m = this.mm!;
    const ctx = m.getContext('2d')!;
    const dpr = this.dpr;
    // 1:1 同步：backing store 与 CSS 显示尺寸严格一致，避免拉伸
    const rect = (m.parentElement ?? m).getBoundingClientRect();
    const W = Math.max(60, Math.round(rect.width));
    const H = Math.max(40, Math.round(rect.height));
    if (m.width !== Math.round(W * dpr) || m.height !== Math.round(H * dpr)) {
      m.width = Math.round(W * dpr);
      m.height = Math.round(H * dpr);
      m.style.width = W + 'px';
      m.style.height = H + 'px';
    }
    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, W, H);
    // 圆角底框（内容裁剪进框内）
    roundRect(ctx, 0.5, 0.5, W - 1, H - 1, 8);
    ctx.fillStyle = this.T.mmBg;
    ctx.fill();
    ctx.clip();
    if (!this.nodes.size) { ctx.restore(); return; }
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const rn of this.nodes.values()) {
      minX = Math.min(minX, rn.x); maxX = Math.max(maxX, rn.x);
      minY = Math.min(minY, rn.y); maxY = Math.max(maxY, rn.y);
    }
    const pad = 120;
    minX -= pad; maxX += pad; minY -= pad; maxY += pad;
    const PAD = 8; // 内边距：内容始终在圆角框内
    const sx = (x: number) => ((x - minX) / (maxX - minX)) * (W - PAD * 2) + PAD;
    const sy = (y: number) => ((y - minY) / (maxY - minY)) * (H - PAD * 2) + PAD;
    const clampXY = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
    this.mmBounds = { minX, maxX, minY, maxY, W, H };
    for (const re of this.edges) {
      const a = this.nodes.get(re.a);
      const b = this.nodes.get(re.b);
      if (!a || !b) continue;
      ctx.strokeStyle = this.T.mmEdge;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(sx(a.x), sy(a.y));
      ctx.lineTo(sx(b.x), sy(b.y));
      ctx.stroke();
    }
    for (const rn of this.nodes.values()) {
      ctx.fillStyle = rn.isCenter ? this.T.centerRing : this.T.mmNode;
      ctx.beginPath();
      ctx.arc(clampXY(sx(rn.x), PAD, W - PAD), clampXY(sy(rn.y), PAD, H - PAD), rn.isCenter ? 3.6 : 2, 0, TAU);
      ctx.fill();
    }
    // 视口框：clamp 到画布内，防止溢出圆角框
    const vx0 = clampXY(sx(this.cam.x - this.w / 2 / this.cam.scale), PAD, W - PAD);
    const vy0 = clampXY(sy(this.cam.y - this.h / 2 / this.cam.scale), PAD, H - PAD);
    const vx1 = clampXY(sx(this.cam.x + this.w / 2 / this.cam.scale), PAD, W - PAD);
    const vy1 = clampXY(sy(this.cam.y + this.h / 2 / this.cam.scale), PAD, H - PAD);
    ctx.strokeStyle = this.T.mmViewport;
    ctx.lineWidth = 1;
    ctx.strokeRect(vx0, vy0, Math.max(10, vx1 - vx0), Math.max(10, vy1 - vy0));
    ctx.restore();
  }

  private mmBounds: { minX: number; maxX: number; minY: number; maxY: number; W: number; H: number } | null = null;

  minimapClick(fx: number, fy: number) {
    const b = this.mmBounds;
    if (!b) return;
    const x = b.minX + fx * (b.maxX - b.minX);
    const y = b.minY + fy * (b.maxY - b.minY);
    this.camT = { x, y, scale: this.cam.scale };
  }

  zoomBy(factor: number) {
    this.zoomAt(this.w / 2, this.h / 2, factor);
  }
  resetView() {
    this.fitCamera(true);
  }
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function truncate(s: string, n: number): string {
  return s.length > n ? s.slice(0, n - 1) + '…' : s;
}

function distToSegment(px: number, py: number, x1: number, y1: number, x2: number, y2: number): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const l2 = dx * dx + dy * dy;
  let t = l2 ? ((px - x1) * dx + (py - y1) * dy) / l2 : 0;
  t = clamp(t, 0, 1);
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

function edgeLabel(e: GraphEdge, lang: Lang, centerId: string): string {
  const rel = relationMap.get(e.r);
  if (!rel) return e.r;
  if (!rel.directed) return rel.label[lang];
  if (e.s === centerId) return rel.label[lang];
  return rel.reverseLabel?.[lang] ?? rel.label[lang];
}

export { NODE_TYPES, RELATION_CATEGORIES };
