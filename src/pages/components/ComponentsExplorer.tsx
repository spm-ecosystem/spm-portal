import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const dedicated = [
  { name: 'UiTableListPage', path: '/components/dedicated/ui-table-list-page', desc: 'Complete tabular page view with sortable columns, search, and page links.' },
  { name: 'UiCommentListPage', path: '/components/dedicated/ui-comment-list-page', desc: 'Nested comment tree discussion thread with DOMPurify XSS sanitization.' },
  { name: 'UiFormContainer', path: '/components/dedicated/ui-form-container', desc: 'Authentication & form card with tabbed mode toggling, hidden inputs, and recovery links.' },
  { name: 'UiModernGridPage', path: '/components/dedicated/ui-modern-grid-page', desc: 'Gallery grid page view with responsive tag sidebar and search bar.' },
  { name: 'UiNavHeader', path: '/components/dedicated/ui-nav-header', desc: 'Sticky glassmorphic navbar with logo, siteName, and centered link zones.' },
  { name: 'UiPostDetails', path: '/components/dedicated/ui-post-details', desc: 'Post and article detail view with metadata sidebar, buttons, and tag groups.' },
  { name: 'UiScrollPanel', path: '/components/dedicated/ui-scroll-panel', desc: 'Slide-over lateral panel container for contextual data and tag lists.' },
  { name: 'UiSplitLayout', path: '/components/dedicated/ui-split-layout', desc: 'Dual-pane split view combining main content HTML and metadata sidebar.' },
  { name: 'UiTerminalConsole', path: '/components/dedicated/ui-terminal-console', desc: 'Dark interactive terminal log console with auto-scroll and log level filtering.' },
  { name: 'UiNestedTreeTable', path: '/components/dedicated/ui-nested-tree-table', desc: 'Hierarchical tree table for rendering structured nested dataset rows.' },
  { name: 'UiDashboardPage', path: '/components/dedicated/ui-dashboard-page', desc: 'Multi-card dashboard page view for statistics and system monitoring.' },
  { name: 'UiStatsDashboard', path: '/components/dedicated/ui-stats-dashboard', desc: 'Grouped rankings and metrics dashboard view with date range filters.' },
  { name: 'UiHeroLanding', path: '/components/dedicated/ui-hero-landing', desc: 'Hero section landing view with CTA, site logo, and integrated search.' },
]

const primitives = [
  { name: 'UiBox', path: '/components/primitives/layout-primitives', desc: 'Generic box container supporting style overrides and custom children.' },
  { name: 'UiFlexRow', path: '/components/primitives/layout-primitives', desc: 'Flexbox row container for horizontal component alignment.' },
  { name: 'UiFlexColumn', path: '/components/primitives/layout-primitives', desc: 'Flexbox column container for vertical stacking.' },
  { name: 'UiGrid', path: '/components/primitives/layout-primitives', desc: 'CSS Grid container for dynamic multi-column layouts.' },
  { name: 'UiScrollBox', path: '/components/dedicated/ui-scroll-panel', desc: 'Scrollable container with explicit overflow and custom scrollbar styling.' },
  { name: 'UiImage', path: '/components/primitives/layout-primitives', desc: 'Optimized image element with alt text and fallback state.' },
  { name: 'UiImageCard', path: '/components/primitives/ui-image-card', desc: 'Media card with image, title, aspect ratio control, and linkUrl.' },
  { name: 'UiImageViewer', path: '/components/primitives/ui-image-viewer', desc: 'Interactive image viewer with click-to-zoom and fit mode toggles.' },
  { name: 'UiTagBadge', path: '/components/primitives/ui-tag-badge', desc: 'Categorized tag badge with count badges and add/remove triggers.' },
  { name: 'UiTabs', path: '/components/primitives/ui-tabs', desc: 'Tab bar switcher component for dynamic view toggling.' },
  { name: 'UiPaginationBar', path: '/components/primitives/ui-pagination-bar', desc: 'Numeric pagination bar for feeding page navigation links.' },
  { name: 'UiSearchBar', path: '/components/primitives/ui-search-bar', desc: 'Form-bound search field with GET/POST submission and hidden fields.' },
  { name: 'UiTable', path: '/components/primitives/ui-table', desc: 'Generic typed data table with column headers and sorting handlers.' },
  { name: 'UiLink', path: '/components/primitives/layout-primitives', desc: 'Styled anchor link component.' },
  { name: 'UiText', path: '/components/primitives/layout-primitives', desc: 'Typography text element.' },
  { name: 'UiToastContainer', path: '/components/primitives/ui-toast-container', desc: 'Floating cross-frame toast notification host.' },
]

export default function ComponentsExplorer() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-absolute)' }}>
      <Navbar />

      <main style={{ flex: 1, maxWidth: 1000, margin: '0 auto', padding: '3rem 2rem 6rem', width: '100%' }}>
        <h1 className="page-title" style={{ margin: '0 0 0.5rem' }}>Component Catalog</h1>
        <p className="body-copy" style={{ maxWidth: 700, margin: '0 0 3rem' }}>
          Explore the 29 pre-built React components (13 Dedicated Views + 16 Primitives) from the SPM ecosystem designed for Shadow DOM mounting.
        </p>

        {/* Dedicated Components (First) */}
        <section style={{ marginBottom: '3rem' }}>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>13 Dedicated Page Views</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
            {dedicated.map(d => (
              <Link
                key={d.name}
                to={d.path}
                style={{
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                  padding: '1rem 1.25rem', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)',
                  borderRadius: '4px', textDecoration: 'none', transition: 'all 0.15s'
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-element)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-surface)')}
              >
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#fff', fontWeight: 600, margin: '0 0 4px' }}>{d.name}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 12, margin: 0, lineHeight: 1.5 }}>{d.desc}</p>
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: 14, flexShrink: 0 }}>→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Layout Primitives (Second) */}
        <section>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>16 Primitive Components</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
            {primitives.map(p => (
              <Link
                key={p.name}
                to={p.path}
                style={{
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  padding: '1rem 1.25rem', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)',
                  borderRadius: '4px', textDecoration: 'none', transition: 'all 0.15s'
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-element)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-surface)')}
              >
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#fff', fontWeight: 600, margin: '0 0 4px' }}>{p.name}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 12, margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
