import DocLayout from '../../../components/DocLayout'
import CodeBlock from '../../../components/CodeBlock'
import { Link } from 'react-router-dom'

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

export default function VeneerThemePage() {
  return (
    <DocLayout title="Veneer Spec: Theme Definition (theme)">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        The <code className="vnr-kw">theme</code> block defines the visual identity of the theme, mapping global CSS variables and customStyles applied to the main document.
      </p>

      <SectionHeading>theme "Name" {"{ ... }"}</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Every complete theme specification starts with the declaration of the <code className="vnr-kw">theme</code> block specifying the theme identifier name in quotes:
      </p>

      <CodeBlock>{`theme "Obsidian" {
  variables {
    --spm-bg-primary: "#000000";
    --spm-bg-secondary: "#111111";
    --spm-text-primary: "#ffffff";
    --spm-accent: "#7c6af5";
  }

  customStyles {
    "#legacy-notice { display: none !important; }"
    "body { font-family: 'Inter', sans-serif !important; }"
  }
}`}</CodeBlock>

      <SectionHeading>CSS Variable Mapping (variables)</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Inside the <code className="vnr-op">variables</code> block, you declare design tokens as custom CSS properties (CSS Variables).
      </p>
      <ul style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
        <li>The compiler converts this block into a JSON object under the key <code>theme.cssVariables</code>.</li>
        <li>At runtime, the SPM extension injects these variables directly onto the <code>html</code> tag of the main document via the <code>document.documentElement.style.setProperty</code> API.</li>
      </ul>

      <SectionHeading>Global CSS Injection (customStyles)</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        The <code className="vnr-op">customStyles</code> block accepts a set of raw CSS rules as string literals.
      </p>
      <ul style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, paddingLeft: '1.25rem', marginBottom: '2rem' }}>
        <li>These rules are injected globally into the host page via a <code>&lt;style id="spm-global-theme-styles"&gt;</code> tag.</li>
        <li>Useful for adjusting margins of the original page, hiding legacy banners, or overriding fonts.</li>
      </ul>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <Link to="/docs/veneer/syntax" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          ← Previous: Syntax &amp; Grammar
        </Link>
        <Link to="/docs/veneer/classes" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Next: Classes &amp; Inheritance →
        </Link>
      </div>
    </DocLayout>
  )
}
