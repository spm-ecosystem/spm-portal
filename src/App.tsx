import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const GettingStarted = lazy(() => import('./pages/docs/GettingStarted'))
const VeneerSpec = lazy(() => import('./pages/docs/VeneerSpec'))
const VeneerIntroPage = lazy(() => import('./pages/docs/veneer/VeneerIntroPage'))
const VeneerSyntaxPage = lazy(() => import('./pages/docs/veneer/VeneerSyntaxPage'))
const VeneerThemePage = lazy(() => import('./pages/docs/veneer/VeneerThemePage'))
const VeneerClassesPage = lazy(() => import('./pages/docs/veneer/VeneerClassesPage'))
const VeneerReconstructPage = lazy(() => import('./pages/docs/veneer/VeneerReconstructPage'))
const VeneerBindingsPage = lazy(() => import('./pages/docs/veneer/VeneerBindingsPage'))
const VeneerSelectorsPage = lazy(() => import('./pages/docs/veneer/VeneerSelectorsPage'))
const VeneerToolingPage = lazy(() => import('./pages/docs/veneer/VeneerToolingPage'))
const VeneerSpecReference = lazy(() => import('./pages/docs/VeneerSpecReference'))
const CompositionMatrixPage = lazy(() => import('./pages/docs/CompositionMatrixPage'))
const VeneerCoderPage = lazy(() => import('./pages/docs/VeneerCoderPage'))
const Tooling = lazy(() => import('./pages/docs/Tooling'))
const ManifestSchema = lazy(() => import('./pages/docs/ManifestSchema'))
const ComponentsExplorer = lazy(() => import('./pages/components/ComponentsExplorer'))
const ComponentDocPage = lazy(() => import('./pages/components/ComponentDocPage'))

const UiImageViewerPage = lazy(() => import('./pages/components/primitives/UiImageViewerPage'))
const UiImageCardPage = lazy(() => import('./pages/components/primitives/UiImageCardPage'))
const UiTagBadgePage = lazy(() => import('./pages/components/primitives/UiTagBadgePage'))
const UiTabsPage = lazy(() => import('./pages/components/primitives/UiTabsPage'))
const UiPaginationBarPage = lazy(() => import('./pages/components/primitives/UiPaginationBarPage'))
const UiSearchBarPage = lazy(() => import('./pages/components/primitives/UiSearchBarPage'))
const UiTablePage = lazy(() => import('./pages/components/primitives/UiTablePage'))
const UiToastContainerPage = lazy(() => import('./pages/components/primitives/UiToastContainerPage'))
const LayoutPrimitivesPage = lazy(() => import('./pages/components/primitives/LayoutPrimitivesPage'))

const UiFormContainerPage = lazy(() => import('./pages/components/dedicated/UiFormContainerPage'))
const UiNavHeaderPage = lazy(() => import('./pages/components/dedicated/UiNavHeaderPage'))
const UiModernGridPageDemo = lazy(() => import('./pages/components/dedicated/UiModernGridPage'))
const UiPostDetailsPage = lazy(() => import('./pages/components/dedicated/UiPostDetailsPage'))
const UiScrollPanelPage = lazy(() => import('./pages/components/dedicated/UiScrollPanelPage'))
const UiTerminalConsolePage = lazy(() => import('./pages/components/dedicated/UiTerminalConsolePage'))
const UiNestedTreeTablePage = lazy(() => import('./pages/components/dedicated/UiNestedTreeTablePage'))
const UiHeroLandingPage = lazy(() => import('./pages/components/dedicated/UiHeroLandingPage'))
const UiCommentListPage = lazy(() => import('./pages/components/dedicated/UiCommentListPage'))
const UiDashboardPage = lazy(() => import('./pages/components/dedicated/UiDashboardPage'))
const UiSplitLayoutPage = lazy(() => import('./pages/components/dedicated/UiSplitLayoutPage'))
const UiStatsDashboard = lazy(() => import('./pages/components/dedicated/UiStatsDashboard'))
const UiTableListPage = lazy(() => import('./pages/components/dedicated/UiTableListPage'))

function PageLoader() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: '1rem',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
      }}
    >
      <div
        style={{
          width: '32px',
          height: '32px',
          border: '2px solid var(--border-contrast)',
          borderTopColor: '#ffffff',
          borderRadius: '50%',
          animation: 'spm-spin 0.8s linear infinite',
        }}
      />
      <style>{`
        @keyframes spm-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <span>Loading portal resource...</span>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/getting-started" element={<GettingStarted />} />
          <Route path="/docs/veneer" element={<VeneerSpec />} />
          <Route path="/docs/veneer/introduction" element={<VeneerIntroPage />} />
          <Route path="/docs/veneer/reference" element={<VeneerSpecReference />} />
          <Route path="/docs/veneer/syntax" element={<VeneerSyntaxPage />} />
          <Route path="/docs/veneer/theme" element={<VeneerThemePage />} />
          <Route path="/docs/veneer/classes" element={<VeneerClassesPage />} />
          <Route path="/docs/veneer/reconstruct" element={<VeneerReconstructPage />} />
          <Route path="/docs/veneer/bindings" element={<VeneerBindingsPage />} />
          <Route path="/docs/veneer/selectors" element={<VeneerSelectorsPage />} />
          <Route path="/docs/veneer/tooling" element={<VeneerToolingPage />} />

          {/* Architecture & Composition */}
          <Route path="/docs/architecture/composition" element={<CompositionMatrixPage />} />

          <Route path="/docs/manifest" element={<ManifestSchema />} />
          <Route path="/docs/tooling" element={<Tooling />} />
          <Route path="/docs/tooling/veneer-coder" element={<VeneerCoderPage />} />
          <Route path="/components" element={<ComponentsExplorer />} />

          {/* Primitive Component Routes */}
          <Route path="/components/primitives/ui-image-viewer" element={<UiImageViewerPage />} />
          <Route path="/components/primitives/ui-image-card" element={<UiImageCardPage />} />
          <Route path="/components/primitives/ui-tag-badge" element={<UiTagBadgePage />} />
          <Route path="/components/primitives/ui-tabs" element={<UiTabsPage />} />
          <Route path="/components/primitives/ui-pagination-bar" element={<UiPaginationBarPage />} />
          <Route path="/components/primitives/ui-search-bar" element={<UiSearchBarPage />} />
          <Route path="/components/primitives/ui-table" element={<UiTablePage />} />
          <Route path="/components/primitives/ui-toast-container" element={<UiToastContainerPage />} />
          <Route path="/components/primitives/layout-primitives" element={<LayoutPrimitivesPage />} />

          {/* Dedicated Page View Component Routes */}
          <Route path="/components/dedicated/ui-form-container" element={<UiFormContainerPage />} />
          <Route path="/components/dedicated/ui-nav-header" element={<UiNavHeaderPage />} />
          <Route path="/components/dedicated/ui-modern-grid-page" element={<UiModernGridPageDemo />} />
          <Route path="/components/dedicated/ui-post-details" element={<UiPostDetailsPage />} />
          <Route path="/components/dedicated/ui-scroll-panel" element={<UiScrollPanelPage />} />
          <Route path="/components/dedicated/ui-terminal-console" element={<UiTerminalConsolePage />} />
          <Route path="/components/dedicated/ui-nested-tree-table" element={<UiNestedTreeTablePage />} />
          <Route path="/components/dedicated/ui-hero-landing" element={<UiHeroLandingPage />} />
          <Route path="/components/dedicated/ui-comment-list-page" element={<UiCommentListPage />} />
          <Route path="/components/dedicated/ui-dashboard-page" element={<UiDashboardPage />} />
          <Route path="/components/dedicated/ui-split-layout" element={<UiSplitLayoutPage />} />
          <Route path="/components/dedicated/ui-stats-dashboard" element={<UiStatsDashboard />} />
          <Route path="/components/dedicated/ui-table-list-page" element={<UiTableListPage />} />

          <Route path="/components/dedicated/:slug" element={<ComponentDocPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
