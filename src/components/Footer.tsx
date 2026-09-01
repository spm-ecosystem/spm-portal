import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-contrast)',
      color: 'var(--text-muted)',
      padding: '4rem 2rem 3rem',
      marginTop: 'auto',
      fontSize: 13,
      lineHeight: 1.6
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <img
                src="https://raw.githubusercontent.com/spm-ecosystem/.github/main/profile/spm_logo.svg"
                alt="SPM Logo"
                style={{ height: 24 }}
              />
              <span style={{ color: '#fff', fontWeight: 800, fontSize: 16, fontFamily: 'var(--font-mono)' }}>
                SPM Portal
              </span>
            </div>
            <p style={{ color: 'var(--text-subtle)', fontSize: 13, margin: '0 0 1.25rem', lineHeight: 1.65 }}>
              {t('footer_tagline')}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#34d399' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#34d399', fontWeight: 600 }}>
                {t('footer_online')}
              </span>
            </div>
          </div>

          {/* Column 1: Portal */}
          <div>
            <p className="eyebrow" style={{ color: '#fff', marginBottom: '1rem', fontWeight: 700 }}>
              {t('footer_col_nav')}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>
                <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  {t('nav_home')}
                </Link>
              </li>
              <li>
                <Link to="/docs/getting-started" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  {t('nav_getting_started')}
                </Link>
              </li>
              <li>
                <Link to="/docs/veneer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  {t('nav_veneer')}
                </Link>
              </li>
              <li>
                <Link to="/components" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  {t('nav_components')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Repositories */}
          <div>
            <p className="eyebrow" style={{ color: '#fff', marginBottom: '1rem', fontWeight: 700 }}>
              {t('footer_col_repos')}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>
                <a href="https://github.com/spm-ecosystem/site-package-manager" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  site-package-manager ↗
                </a>
              </li>
              <li>
                <a href="https://github.com/spm-ecosystem/spm-cli" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  spm-cli ↗
                </a>
              </li>
              <li>
                <a href="https://github.com/spm-ecosystem/spm-components" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  spm-components ↗
                </a>
              </li>
              <li>
                <a href="https://github.com/spm-ecosystem/spm-websites" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  spm-websites ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Specification */}
          <div>
            <p className="eyebrow" style={{ color: '#fff', marginBottom: '1rem', fontWeight: 700 }}>
              {t('footer_col_spec')}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>
                <Link to="/docs/manifest" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  {t('nav_manifest')}
                </Link>
              </li>
              <li>
                <Link to="/docs/tooling" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  {t('nav_tooling')}
                </Link>
              </li>
              <li>
                <Link to="/docs/veneer/syntax" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  Veneer Syntax
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-contrast)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: 12,
          color: 'var(--text-subtle)',
          fontFamily: 'var(--font-mono)'
        }}>
          <div>
            {t('footer_copyright')}
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy</span>
            <span>Terms</span>
            <span>GitHub Ecosystem</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
