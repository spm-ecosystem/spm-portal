import DocLayout from '../../components/DocLayout'
import { Link } from 'react-router-dom'

const TOPICS = [
  {
    title: '1. Overview & Motivation',
    to: '/docs/veneer/introduction',
    desc: 'Why Veneer Spec was created, eliminating verbose manual JSONs and introducing the blueprinting paradigm.'
  },
  {
    title: '2. Core Syntax & Grammar',
    to: '/docs/veneer/syntax',
    desc: 'Structure of .vnr files, string literals, raw strings r#"..."#, comments, and keyword table.'
  },
  {
    title: '3. Theme Definition (theme)',
    to: '/docs/veneer/theme',
    desc: 'theme "Name" block, CSS variable mapping (variables), and global stylesheets (customStyles).'
  },
  {
    title: '4. Classes & Inheritance (class / extends)',
    to: '/docs/veneer/classes',
    desc: 'Reusable data blueprints with class, single inheritance via extends, and selector scoping.'
  },
  {
    title: '5. Page Reconstruction (reconstruct)',
    to: '/docs/veneer/reconstruct',
    desc: 'React component injection into Shadow DOM, prop assignment, and CSRF token preservation.'
  },
  {
    title: '6. Bindings & Extractors (bind)',
    to: '/docs/veneer/bindings',
    desc: 'List extraction with child and extractor operators (text, attr, html, hiddenInputs).'
  },
  {
    title: '7. Selectors & Actions (selector)',
    to: '/docs/veneer/selectors',
    desc: 'Hiding and direct modification of legacy DOM elements using action: hide.'
  },
  {
    title: '8. Diagnostics & CLI (spm compile)',
    to: '/docs/veneer/tooling',
    desc: 'Compilation of .vnr specifications via spm-cli, AST validation, and syntax error diagnostics.'
  }
]

export default function VeneerSpec() {
  return (
    <DocLayout title="Veneer Spec DSL Language Manual">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        <strong style={{ color: '#fff' }}>Veneer Spec (.vnr)</strong> is the declarative Domain Specific Language (DSL) of the SPM ecosystem. Select a topic below to explore the full manual:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
        {TOPICS.map(topic => (
          <Link
            key={topic.to}
            to={topic.to}
            style={{
              display: 'block', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)',
              borderRadius: '6px', padding: '1.4rem', textDecoration: 'none', transition: 'all 0.15s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-contrast)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <h3 style={{ color: '#fff', fontSize: '16px', margin: '0 0 0.5rem', fontWeight: 700 }}>
              {topic.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
              {topic.desc}
            </p>
            <span style={{ display: 'inline-block', marginTop: '1rem', color: '#fff', fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              Open chapter →
            </span>
          </Link>
        ))}
      </div>
    </DocLayout>
  )
}
