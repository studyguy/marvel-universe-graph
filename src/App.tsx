import { HashRouter, Route, Routes } from 'react-router-dom';
import { GraphPage } from './pages/GraphPage';
import { DocsPage } from './pages/DocsPage';

export default function App() {
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
