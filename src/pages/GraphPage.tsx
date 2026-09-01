/** 图谱主页：引擎挂载、状态接线、布局三区 */
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore, project } from '../store/useStore';
import { GraphEngine } from '../graph/engine';
import { TopBar } from '../components/TopBar';
import { FilterPanel } from '../components/FilterPanel';
import { DetailDrawer, EdgeCard } from '../components/DetailDrawer';
import { Controls, Breadcrumb } from '../components/Controls';
import { Guide, LoadingState, ErrorState, EmptyState } from '../components/States';
import { viewMap } from '../../data/taxonomy';

export function GraphPage() {
  const navigate = useNavigate();
  const { id: routeId } = useParams();
  const store = useStore();
  const { status, index, lang, view, centerId, selectedId, focusEdge, hiddenNodeTypes, hiddenEdgeCats, leftOpen, rightOpen, guideDone } = store;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<GraphEngine | null>(null);
  const [mobile, setMobile] = useState(() => window.innerWidth < 900);
  const [guideOpen, setGuideOpen] = useState(false);

  useEffect(() => {
    const onR = () => setMobile(window.innerWidth < 900);
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);

  // 首次访问：语言跟随浏览器；打开引导
  useEffect(() => {
    if (!localStorage.getItem('marvel-graph-ui')) {
      const zh = navigator.language.toLowerCase().startsWith('zh');
      if (!zh) store.setLang('en');
    }
    store.load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (status === 'ready' && !guideDone) setGuideOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, guideDone]);

  // 深链 /node/:id
  useEffect(() => {
    if (routeId && status === 'ready') store.hydrateFromRoute(routeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeId, status]);

  // 引擎生命周期
  useEffect(() => {
    if (!canvasRef.current || !index || engineRef.current) return;
    const engine = new GraphEngine(canvasRef.current, document.getElementById('minimap') as HTMLCanvasElement, {
      snapshot: () => ({
        centerId: useStore.getState().centerId,
        view: useStore.getState().view,
        lang: useStore.getState().lang,
        selectedId: useStore.getState().selectedId,
        focusEdge: useStore.getState().focusEdge,
        hiddenNodeTypes: useStore.getState().hiddenNodeTypes,
        hiddenEdgeCats: useStore.getState().hiddenEdgeCats,
        mobile: window.innerWidth < 900,
      }),
      getIndex: () => useStore.getState().index,
      onSelect: (id) => {
        if (id === '::more') {
          if (window.innerWidth < 900) useStore.getState().setMobileFilters(true);
          else useStore.getState().setLeftOpen(true);
          return;
        }
        const st = useStore.getState();
        st.select(id);
      },
      onDrill: (id) => {
        useStore.getState().focusNode(id);
        navigate(id.startsWith('cluster:') ? '/' : `/node/${id}`);
      },
      onClusterDrill: (type) => {
        const st = useStore.getState();
        const top = st.index?.byType.get(type)?.[0];
        if (top) {
          st.setCenter(top.id);
          navigate(`/node/${top.id}`);
        } else {
          st.setCenter(`cluster:${type}`);
          navigate('/');
        }
      },
      onEdgeFocus: (eid) => useStore.getState().setFocusEdge(eid),
    });
    engineRef.current = engine;
    (window as any).__graphEngine = engine;
    (window as any).__mgStore = useStore;
    engine.refresh(false);
    return () => {
      engine.destroy();
      engineRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // 状态变化 → 重新投影
  useEffect(() => {
    engineRef.current?.refresh();
  }, [centerId, view, hiddenNodeTypes, hiddenEdgeCats, selectedId, focusEdge, lang, index, mobile]);

  // 切换视图 = 换一张投影：跳到该视图主角类型的关系图谱（带连线的焦点视图）。
  // 仅在 view/index 变化时执行；内部用 store.getState() 取最新状态，
  // 避免用户单击节点切换焦点时被本 effect 弹回视图主角。
  useEffect(() => {
    const st = useStore.getState();
    const idx = st.index;
    if (!idx) return;
    const curView = st.view;
    const curCenter = st.centerId;
    if (curView === 'overview') {
      // 全景：回到宇宙星团聚簇视图（含刷新后残留的分类索引环）
      if (curCenter !== 'cluster:root') st.setCenter('cluster:root');
      return;
    }
    const primary = viewMap.get(curView)?.primary[0];
    if (!primary) return;
    const top = idx.byType.get(primary)?.[0]; // 该类型度数最高节点（byType 已按度数排序）
    if (curCenter.startsWith('cluster:')) {
      if (curCenter === `cluster:${primary}`) return; // 已在对应列表环
      if (top) st.setCenter(top.id);
      else st.setCenter(`cluster:${primary}`);
      return;
    }
    const node = idx.nodeById.get(curCenter);
    if (node && node.type !== primary) {
      // "角色"视图：直接落在角色列表环（钢侠/美队/绿巨人…，单击任一角进入其图谱）
      if (primary === 'mantle') st.setCenter('cluster:mantle');
      else if (top) st.setCenter(top.id);
      else st.setCenter(`cluster:${primary}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, index]);

  const isEmpty = useMemo(() => {
    if (!index) return false;
    const p = project(index, centerId.startsWith('cluster:') ? '' : centerId, view, hiddenNodeTypes, hiddenEdgeCats, 10);
    return centerId.startsWith('cluster:') ? false : p.neighbors.length === 0;
  }, [index, centerId, view, hiddenNodeTypes, hiddenEdgeCats]);

  return (
    <div className="app">
      <TopBar onOpenGuide={() => setGuideOpen(true)} mobile={mobile} />
      <div className="main">
        <FilterPanel collapsed={mobile ? !store.mobileFiltersOpen : !leftOpen} />
        <div className="canvas-wrap">
          <canvas ref={canvasRef} id="graph-canvas" />
          {status === 'loading' && <LoadingState />}
          {status === 'error' && <ErrorState onRetry={() => store.load()} />}
          {status === 'ready' && isEmpty && <EmptyState />}
          <EdgeCard />
          <Controls engineRef={engineRef} mobile={mobile} />
          <Breadcrumb mobile={mobile} />
          {!mobile && (
            <div className="attribution">
              图像与数据 <a href="https://marvel.fandom.com" target="_blank" rel="noreferrer">Marvel Database</a> ·{' '}
              <a href="https://marvelcinematicuniverse.fandom.com" target="_blank" rel="noreferrer">MCU Wiki</a>（CC BY-SA 3.0）·{' '}
              <a href="https://zh.moegirl.org.cn" target="_blank" rel="noreferrer">萌娘百科</a>（CC BY-NC-SA）· 学习/粉丝用途
            </div>
          )}
          {/* 移动端抽屉触发按钮 */}
          {mobile && (
            <>
              <button
                className="icon-btn m-btn"
                style={{ position: 'absolute', left: 10, top: 10, zIndex: 23 }}
                onClick={() => store.setMobileFilters(!store.mobileFiltersOpen)}
              >
                ☰ {store.mobileFiltersOpen ? '✕' : ''}
              </button>
              <button
                className={`icon-btn m-btn ${rightOpen ? 'on' : ''}`}
                style={{ position: 'absolute', right: 10, top: 10, zIndex: 23 }}
                onClick={() => store.setRightOpen(!rightOpen)}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
                  <rect x="5" y="4" width="14" height="17" rx="2.2" />
                  <rect x="9" y="2.2" width="6" height="3.6" rx="1.2" fill="var(--panel)" />
                  <rect x="8.2" y="9.2" width="7.6" height="1.5" rx="0.75" fill="currentColor" stroke="none" />
                  <rect x="8.2" y="13.2" width="7.6" height="1.5" rx="0.75" fill="currentColor" stroke="none" />
                  <path d="M8.4 17.8l1.6 1.6 2.8-3" />
                </svg>
                {rightOpen ? (store.lang === 'zh' ? '收起' : 'Hide') : (store.lang === 'zh' ? '详情' : 'Info')}
              </button>
            </>
          )}
        </div>
        <DetailDrawer collapsed={!rightOpen} mobile={mobile} />
      </div>
      {guideOpen && <Guide onClose={() => { setGuideOpen(false); store.setGuideDone(true); }} />}
    </div>
  );
}
