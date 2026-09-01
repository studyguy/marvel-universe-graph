import { useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { GraphPage } from './pages/GraphPage';
import { DocsPage } from './pages/DocsPage';
import { useStore } from './store/useStore';

const THEME_BG: Record<string, string> = { dark: '#05070d', light: '#f7f8fa' };

export default function App() {
  const theme = useStore((s) => s.theme);

  // 主题 → <html data-theme> + 移动端地址栏配色
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_BG[theme] ?? THEME_BG.dark);
  }, [theme]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<GraphPage />} />
        <Route path="/node/:id" element={<GraphPage />} />
        <Route path="/docs/:slug" element={<DocsPage />} />
        <Route path="*" element={<GraphPage />} />
      </Routes>
    </HashRouter>
  );
}
