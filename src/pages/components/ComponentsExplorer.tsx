import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

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
  { name: 'UiImageViewer', slug: 'ui-image-viewer', desc: 'Visualizador de mídia responsivo com suporte a fit contain/cover.' },
  { name: 'UiScrollPanel', slug: 'ui-scroll-panel', desc: 'Painel lateral rolável com bloco de estatísticas, busca e filtros.' },
  { name: 'UiSplitLayout', slug: 'ui-split-layout', desc: 'Layout de 2 colunas com suporte a visualizador de mídia ou slot HTML genérico (mainHtml).' },
  { name: 'UiCommentListPage', slug: 'ui-comment-list-page', desc: 'Feed de comentários em formato de balões de diálogo encadeados.' },
  { name: 'UiDashboardPage', slug: 'ui-dashboard-page', desc: 'Portal de controle com painéis de cartões para opções e ações.' },
  { name: 'UiStatsDashboard', slug: 'ui-stats-dashboard', desc: 'Painel de métricas, rankings e análises em tabelas.' },
  { name: 'UiTable', slug: 'ui-table', desc: 'Tabela de dados genérica com callbacks de linha e colunas configuráveis.' },
  { name: 'UiTableListPage', slug: 'ui-table-list-page', desc: 'Página de listagem tabular densa com busca e paginação.' },
  { name: 'UiToastContainer', slug: 'ui-toast-container', desc: 'Container global para notificações toast e diálogos modais de confirmação.' },
]

export default function ComponentsExplorer() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-absolute)' }}>
      <Navbar />
      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 2rem 6rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p className="eyebrow" style={{ marginBottom: 8 }}>spm-components</p>
          <h1 className="section-title" style={{ margin: '0 0 0.75rem' }}>Catálogo de Componentes</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, maxWidth: 560, lineHeight: 1.65 }}>
            Inventário completo dos componentes React disponíveis no ecossistema SPM. As especificações são sincronizadas em tempo real com o repositório oficial.
          </p>
        </div>

        {/* Primitives */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 13, fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
            Primitivas de Layout
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-contrast)', border: '1px solid var(--border-contrast)', borderRadius: '4px', overflow: 'hidden' }}>
            {primitives.map(p => (
              <Link key={p.slug} to={`/components/dedicated/${p.slug}`} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: 'var(--bg-surface)', padding: '1rem 1.25rem',
                textDecoration: 'none', gap: '2rem',
                transition: 'background 0.12s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-hover)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-surface)')}
              >
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#fff', fontWeight: 600, margin: '0 0 4px' }}>{p.name}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 12, margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: 14, flexShrink: 0 }}>→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Dedicated */}
        <section>
          <h2 style={{ fontSize: 13, fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
            Componentes Dedicados
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-contrast)', border: '1px solid var(--border-contrast)', borderRadius: '4px', overflow: 'hidden' }}>
            {dedicated.map(d => (
              <Link key={d.slug} to={`/components/dedicated/${d.slug}`} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: 'var(--bg-surface)', padding: '1rem 1.25rem',
                textDecoration: 'none', gap: '2rem',
                transition: 'background 0.12s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-hover)')}
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
    </div>
  )
}
