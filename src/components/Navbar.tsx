import { Link, useLocation } from 'react-router-dom'

const SPMLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <div style={{
      width: 28, height: 28, border: '1.5px solid #fff',
      borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 11, color: '#fff', letterSpacing: '-0.5px'
    }}>SPM</div>
    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: '#fff', letterSpacing: 0 }}>Portal</span>
  </div>
)

export default function Navbar() {
  const loc = useLocation()
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
      <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {navLink('/docs/getting-started', 'Docs')}
        {navLink('/components', 'Components')}
        <a href="https://github.com/watashi-00/ImportMarkdownContent" target="_blank" rel="noreferrer"
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
