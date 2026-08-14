import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const primitives = [
  { name: 'LayoutPrimitives', slug: 'layout-primitives', desc: 'Primitivas de layout (UiBox, UiFlexRow, UiFlexColumn, UiGrid, UiText, UiImage, UiLink).' },
]

const dedicated = [
  { name: 'UiNavHeader', slug: 'ui-nav-header', desc: 'Barra de navegação topo com logo, siteName e links primários/secundários.' },
  { name: 'UiHeroLanding', slug: 'ui-hero-landing', desc: 'Full-viewport hero com CTA, slogan e barra de busca integrada.' },
  { name: 'UiSearchBar', slug: 'ui-search-bar', desc: 'Campo de pesquisa com formulário GET/POST e preservação de campos hidden.' },
  { name: 'UiImageCard', slug: 'ui-image-card', desc: 'Card de mídia com imagem, título, link e efeitos interativos de hover.' },
  { name: 'UiTagBadge', slug: 'ui-tag-badge', desc: 'Pílula de tag categorizada com contador e acionadores de adição/remoção.' },
  { name: 'UiPaginationBar', slug: 'ui-pagination-bar', desc: 'Barra de controle para paginação de feeds e resultados.' },
  { name: 'UiModernGridPage', slug: 'ui-modern-grid-page', desc: 'Página de galeria em grade responsiva com slot lateral para sidebar.' },
  { name: 'UiImageViewer', slug: 'ui-image-viewer', desc: 'Visualizador de imagens principais com galeria de thumbnails.' },
  { name: 'UiScrollPanel', slug: 'ui-scroll-panel', desc: 'Container rolável com barra de rolagem estilizada.' },
  { name: 'UiSplitLayout', slug: 'ui-split-layout', desc: 'Layout com conteúdo principal e sidebar de metadados.' },
  { name: 'UiCommentListPage', slug: 'ui-comment-list-page', desc: 'Lista de comentários com avatar, autor e HTML preservado.' },
  { name: 'UiDashboardPage', slug: 'ui-dashboard-page', desc: 'Página completa de painel com estatísticas e gráficos de runtime.' },
  { name: 'UiStatsDashboard', slug: 'ui-stats-dashboard', desc: 'Rankings e métricas agrupadas com filtros.' },
  { name: 'UiTable', slug: 'ui-table', desc: 'Tabela genérica moderna com colunas tipadas.' },
  { name: 'UiTableListPage', slug: 'ui-table-list-page', desc: 'Página tabular densa com busca integrada e ações.' },
  { name: 'UiToastContainer', slug: 'ui-toast-container', desc: 'Host de notificações toast em tempo real.' },
]

export default function ComponentsExplorer() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-absolute)' }}>
      <Navbar />

      <main style={{ flex: 1, maxWidth: 1000, margin: '0 auto', padding: '3rem 2rem 6rem', width: '100%' }}>
        <h1 className="page-title" style={{ margin: '0 0 0.5rem' }}>Catálogo de Componentes</h1>
        <p className="body-copy" style={{ maxWidth: 700, margin: '0 0 3rem' }}>
          Explore os componentes React pré-construídos do ecossistema SPM para montagem em Shadow DOM.
        </p>

        {/* Primitivas de Layout */}
        <section style={{ marginBottom: '3rem' }}>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Primitivas de Layout</p>
          {primitives.map(p => (
            <Link
              key={p.slug}
              to={`/components/dedicated/${p.slug}`}
              style={{
                display: 'block', padding: '1.25rem 1.5rem', background: 'var(--bg-surface)',
                border: '1px solid var(--border-contrast)', borderRadius: '4px', textDecoration: 'none',
                marginBottom: '0.75rem', transition: 'all 0.15s'
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-element)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-surface)')}
            >
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: '#fff', fontWeight: 600, margin: '0 0 4px' }}>{p.name}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: 13, margin: 0 }}>{p.desc}</p>
            </Link>
          ))}
        </section>

        {/* Componentes Dedicados */}
        <section>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Componentes Dedicados</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
            {dedicated.map(d => (
              <Link
                key={d.slug}
                to={`/components/dedicated/${d.slug}`}
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
      </main>

      <Footer />
    </div>
  )
}
