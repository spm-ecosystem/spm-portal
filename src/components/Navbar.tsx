import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const SPMLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <img
      src="https://raw.githubusercontent.com/spm-ecosystem/.github/main/profile/spm_logo.svg"
      alt="SPM Logo"
      style={{ height: 28, width: 'auto' }}
    />
    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: '#fff', letterSpacing: 0 }}>Portal</span>
  </div>
)

export default function Navbar() {
  const loc = useLocation()
  const [lang, setLang] = useState<'PT' | 'EN'>('PT')

  const toggleLang = () => {
    setLang(prev => (prev === 'PT' ? 'EN' : 'PT'))
  }

  const navLink = (to: string, label: string) => {
    const active = loc.pathname === to || (to !== '/' && loc.pathname.startsWith(to))
    return (
      <Link to={to} style={{
        color: active ? '#fff' : 'var(--text-muted)',
        textDecoration: 'none', fontSize: 13, fontWeight: 600,
        transition: 'color 0.15s',
        letterSpacing: 0,
      }}
        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
        onMouseLeave={e => (e.currentTarget.style.color = active ? '#fff' : 'var(--text-muted)')}
      >{label}</Link>
    )
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(6,6,6,0.88)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-contrast)',
      padding: '0 2rem',
      height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}><SPMLogo /></Link>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <button
          type="button"
          onClick={toggleLang}
          aria-label="Trocar idioma"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            minHeight: '28px',
            border: '1px solid var(--border-contrast)',
            borderRadius: '4px',
            background: 'var(--bg-element)',
            color: '#fff',
            cursor: 'pointer',
            font: '700 11px/1 var(--font-mono)',
            padding: '0 0.65rem',
            transition: 'border-color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-contrast)')}
        >
          {lang} <span style={{ color: 'var(--text-subtle)', fontWeight: 600 }}>Idioma</span>
        </button>

        {navLink('/docs/getting-started', 'Docs')}
        {navLink('/components', 'Components')}
        <a href="https://github.com/spm-ecosystem" target="_blank" rel="noreferrer"
          style={{
            color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13,
            fontWeight: 500, transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
        >GitHub ↗</a>
      </nav>
    </header>
  )
}
