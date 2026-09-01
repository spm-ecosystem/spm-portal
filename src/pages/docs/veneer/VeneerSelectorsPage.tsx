import DocLayout from '../../../components/DocLayout'
import CodeBlock from '../../../components/CodeBlock'
import { Link } from 'react-router-dom'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

export default function VeneerSelectorsPage() {
  return (
    <DocLayout title="Veneer Spec: Selectors & Actions (selector)">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        The <code className="vnr-kw">selector</code> block allows clean, direct manipulations to legacy elements on the original DOM without mounting React components.
      </p>

      <SectionHeading>Hiding Legacy Elements (action: hide)</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        It is common to want to remove broken legacy menus, outdated footers, or ads from the page without tearing down the structure:
      </p>

      <CodeBlock>{`selector "#old-sidebar" {
  action: hide;
}

selector ".legacy-banner-ads" {
  action: hide;
}`}</CodeBlock>

      <SectionHeading>Difference Between selector and reconstruct</SectionHeading>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '15px' }}><code className="vnr-kw">selector</code></h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
            Only hides (<code>display: none</code>) or modifies existing nodes in the original DOM. Lightweight and fast.
          </p>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '15px' }}><code className="vnr-kw">reconstruct</code></h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
            Scrapes node data, hides the original element, and mounts a new React component inside an isolated Shadow DOM.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <Link to="/docs/veneer/bindings" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          ← Previous: Bindings &amp; Extractors
        </Link>
        <Link to="/docs/veneer/tooling" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Next: Diagnostics &amp; CLI →
        </Link>
      </div>
    </DocLayout>
  )
}
