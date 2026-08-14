import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GettingStarted from './pages/docs/GettingStarted'
import VeneerSpec from './pages/docs/VeneerSpec'
import Tooling from './pages/docs/Tooling'
import ManifestSchema from './pages/docs/ManifestSchema'
import ComponentsExplorer from './pages/components/ComponentsExplorer'
import ComponentDocPage from './pages/components/ComponentDocPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/getting-started" element={<GettingStarted />} />
        <Route path="/docs/veneer" element={<VeneerSpec />} />
        <Route path="/docs/manifest" element={<ManifestSchema />} />
        <Route path="/docs/tooling" element={<Tooling />} />
        <Route path="/components" element={<ComponentsExplorer />} />
        <Route path="/components/dedicated/:slug" element={<ComponentDocPage />} />
      </Routes>
    </BrowserRouter>
  )
}
