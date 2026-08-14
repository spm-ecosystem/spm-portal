import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GettingStarted from './pages/docs/GettingStarted'
import VeneerSpec from './pages/docs/VeneerSpec'
import VeneerIntroPage from './pages/docs/veneer/VeneerIntroPage'
import VeneerSyntaxPage from './pages/docs/veneer/VeneerSyntaxPage'
import VeneerThemePage from './pages/docs/veneer/VeneerThemePage'
import VeneerClassesPage from './pages/docs/veneer/VeneerClassesPage'
import VeneerReconstructPage from './pages/docs/veneer/VeneerReconstructPage'
import VeneerBindingsPage from './pages/docs/veneer/VeneerBindingsPage'
import VeneerSelectorsPage from './pages/docs/veneer/VeneerSelectorsPage'
import VeneerToolingPage from './pages/docs/veneer/VeneerToolingPage'
import Tooling from './pages/docs/Tooling'
import ManifestSchema from './pages/docs/ManifestSchema'
import ComponentsExplorer from './pages/components/ComponentsExplorer'
import ComponentDocPage from './pages/components/ComponentDocPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/getting-started" element={<GettingStarted />} />
        <Route path="/docs/veneer" element={<VeneerSpec />} />
        <Route path="/docs/veneer/introduction" element={<VeneerIntroPage />} />
        <Route path="/docs/veneer/syntax" element={<VeneerSyntaxPage />} />
        <Route path="/docs/veneer/theme" element={<VeneerThemePage />} />
        <Route path="/docs/veneer/classes" element={<VeneerClassesPage />} />
        <Route path="/docs/veneer/reconstruct" element={<VeneerReconstructPage />} />
        <Route path="/docs/veneer/bindings" element={<VeneerBindingsPage />} />
        <Route path="/docs/veneer/selectors" element={<VeneerSelectorsPage />} />
        <Route path="/docs/veneer/tooling" element={<VeneerToolingPage />} />
        <Route path="/docs/manifest" element={<ManifestSchema />} />
        <Route path="/docs/tooling" element={<Tooling />} />
        <Route path="/components" element={<ComponentsExplorer />} />
        <Route path="/components/dedicated/:slug" element={<ComponentDocPage />} />
      </Routes>
    </HashRouter>
  )
}
