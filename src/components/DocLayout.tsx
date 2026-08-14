import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import type { ReactNode } from 'react'
import DocsSearch from './DocsSearch'

interface NavItem {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

const docNav: NavItem[] = [
  { label: 'Primeiros passos', to: '/docs/getting-started' },
  { 
    label: 'Veneer Spec DSL', 
    to: '/docs/veneer',
    children: [
      { label: 'Visão Geral & Motivação', to: '/docs/veneer/introduction' },
      { label: 'Sintaxe & Gramática', to: '/docs/veneer/syntax' },
      { label: 'Definição de Temas', to: '/docs/veneer/theme' },
      { label: 'Classes & Herança', to: '/docs/veneer/classes' },
      { label: 'Reconstrução de Páginas', to: '/docs/veneer/reconstruct' },
      { label: 'Bindings & Extratores', to: '/docs/veneer/bindings' },
      { label: 'Seletores & Ações', to: '/docs/veneer/selectors' },
      { label: 'Diagnósticos & CLI', to: '/docs/veneer/tooling' },
    ]
  },
  { label: 'Manifest Schema', to: '/docs/manifest' },
  { label: 'CLI & Tooling', to: '/docs/tooling' },
]

interface DocLayoutProps {
  children: ReactNode
  title?: string
}

export default function DocLayout({ children, title }: DocLayoutProps) {
  const loc = useLocation()
  
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-absolute)' }}>
      <Navbar />
      <div style={{ display: 'flex', maxWidth: 1200, margin: '0 auto' }}>
        {/* Sidebar */}
        <aside style={{
          width: 250, flexShrink: 0, paddingTop: '2.5rem',
          paddingRight: '1.5rem', position: 'sticky', top: 56,
          height: 'calc(100vh - 56px)', overflowY: 'auto',
          borderRight: '1px solid var(--border-contrast)',
        }}>
          <DocsSearch />
          <p className="eyebrow" style={{ marginBottom: '0.75rem', paddingLeft: '1rem' }}>Documentação</p>
          
          {docNav.map(n => {
            const isMainActive = loc.pathname === n.to || loc.pathname.startsWith(n.to + '/')
            const isExactActive = loc.pathname === n.to

            return (
              <div key={n.to} style={{ marginBottom: '0.25rem' }}>
                <Link
                  to={n.to}
                  style={{
                    display: 'block', padding: '6px 1rem',
                    fontSize: 13, textDecoration: 'none', borderRadius: '3px',
                    color: isExactActive ? '#fff' : isMainActive ? '#fff' : 'var(--text-muted)',
                    background: isExactActive ? 'var(--bg-hover)' : 'transparent',
                    borderLeft: isExactActive ? '2px solid #fff' : '2px solid transparent',
                    fontWeight: isMainActive ? 600 : 400,
                    transition: 'all 0.12s',
                  }}
                  onMouseEnter={e => { if (!isExactActive) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'var(--bg-element)' } }}
                  onMouseLeave={e => { if (!isExactActive) { e.currentTarget.style.color = isMainActive ? '#fff' : 'var(--text-muted)'; e.currentTarget.style.background = 'transparent' } }}
                >
                  {n.label}
                </Link>

                {/* Render sub-items if parent is active or has children */}
                {n.children && isMainActive && (
                  <div style={{ paddingLeft: '0.85rem', marginTop: '2px', borderLeft: '1px solid var(--border-contrast)', marginLeft: '1rem' }}>
                    {n.children.map(sub => {
                      const subActive = loc.pathname === sub.to
                      return (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          style={{
                            display: 'block', padding: '4px 0.75rem',
                            fontSize: 12, textDecoration: 'none', borderRadius: '3px',
                            fontFamily: 'var(--font-mono)',
                            color: subActive ? '#fff' : 'var(--text-subtle)',
                            background: subActive ? 'var(--bg-element)' : 'transparent',
                            fontWeight: subActive ? 600 : 400,
                            transition: 'all 0.12s',
                          }}
                          onMouseEnter={e => { if (!subActive) { e.currentTarget.style.color = '#fff' } }}
                          onMouseLeave={e => { if (!subActive) { e.currentTarget.style.color = 'var(--text-subtle)' } }}
                        >
                          {sub.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </aside>

        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '2.5rem 3rem', maxWidth: 780 }}>
          {title && <h1 className="section-title" style={{ marginBottom: '0.75rem' }}>{title}</h1>}
          {children}
        </main>
      </div>
    </div>
  )
}
