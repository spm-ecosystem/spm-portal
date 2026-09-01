import { Link } from 'react-router-dom'
import Navbar from './Navbar'

interface PropRow {
  name: string
  type: string
  desc: string
}

interface ComponentReferenceProps {
  name: string
  summary: string
  useCases: string[]
  props: PropRow[]
  example: string
}

export default function ComponentReference({ name, summary, useCases, props, example }: ComponentReferenceProps) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-absolute)' }}>
      <Navbar />
      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 2rem 6rem' }}>
        <Link to="/components" className="surface-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, marginBottom: '2rem', display: 'inline-block' }}>
          ← Components
        </Link>
        <p className="eyebrow" style={{ marginBottom: 8 }}>Dedicated Component</p>
        <h1 className="section-title" style={{ margin: '0 0 0.75rem' }}>{name}</h1>
        <p className="body-copy" style={{ marginBottom: '2.5rem', maxWidth: 680 }}>{summary}</p>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>When to use</h2>
          <div style={{ display: 'grid', gap: 1, background: 'var(--border-contrast)', border: '1px solid var(--border-contrast)', borderRadius: 4, overflow: 'hidden' }}>
            {useCases.map(item => (
              <p key={item} style={{ background: 'var(--bg-surface)', color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6, margin: 0, padding: '0.9rem 1rem' }}>{item}</p>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Props Contract</h2>
          <div style={{ border: '1px solid var(--border-contrast)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', background: 'var(--bg-element)', padding: '0.7rem 1rem', borderBottom: '1px solid var(--border-contrast)' }}>
              {['Prop', 'Type', 'Description'].map(h => (
                <span key={h} className="eyebrow">{h}</span>
              ))}
            </div>
            {props.map((p, i) => (
              <div key={p.name} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', padding: '0.75rem 1rem', borderBottom: i < props.length - 1 ? '1px solid var(--border-contrast)' : 'none', background: 'var(--bg-surface)' }}>
                <code style={{ fontSize: 12 }}>{p.name}</code>
                <code style={{ fontSize: 12, color: 'var(--text-muted)' }}>{p.type}</code>
                <span style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>{p.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Veneer Example</h2>
          <pre>{example.trim()}</pre>
        </section>
      </main>
    </div>
  )
}
