import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import type { ReactNode } from 'react'
import DocsSearch from './DocsSearch'

const docNav = [
  { label: 'Primeiros passos', to: '/docs/getting-started' },
  { label: 'Veneer Spec', to: '/docs/veneer' },
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
          width: 220, flexShrink: 0, paddingTop: '2.5rem',
          paddingRight: '2rem', position: 'sticky', top: 56,
          height: 'calc(100vh - 56px)', overflowY: 'auto',
          borderRight: '1px solid var(--border-contrast)',
        }}>
          <div className="docs-sidebar-tools">
            <button type="button" aria-label="Trocar idioma">
              PT
              <span>Idioma</span>
            </button>
          </div>
          <DocsSearch />
          <p className="eyebrow" style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem' }}>Documentação</p>
          {docNav.map(n => {
            const active = loc.pathname === n.to
            return (
              <Link key={n.to} to={n.to} style={{
                display: 'block', padding: '6px 1.5rem',
                fontSize: 13, textDecoration: 'none', borderRadius: '3px',
                color: active ? '#fff' : 'var(--text-muted)',
                background: active ? 'var(--bg-hover)' : 'transparent',
                borderLeft: active ? '1px solid #fff' : '1px solid transparent',
                fontWeight: active ? 500 : 400,
                transition: 'all 0.12s',
              }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'var(--bg-element)' } }}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent' } }}
              >{n.label}</Link>
            )
          })}
        </aside>
        {/* Content */}
        <main style={{ flex: 1, padding: '2.5rem 3rem', maxWidth: 760 }}>
          {title && <h1 className="section-title" style={{ marginBottom: '0.75rem' }}>{title}</h1>}
          {children}
        </main>
      </div>
    </div>
  )
}
