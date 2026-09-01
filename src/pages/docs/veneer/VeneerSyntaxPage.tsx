import DocLayout from '../../../components/DocLayout'
import CodeBlock from '../../../components/CodeBlock'
import { Link } from 'react-router-dom'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

export default function VeneerSyntaxPage() {
  return (
    <DocLayout title="Veneer Spec: Syntax & Grammar">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        Veneer Spec syntax is clean, strictly structured into blocks enclosed by curly braces <code className="vnr-op">{"{}"}</code>, and terminated by semicolons <code className="vnr-op">;</code>.
      </p>

      <SectionHeading>File Structure (.vnr)</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Source files use the <code className="vnr-str">.vnr</code> extension (e.g. <code>theme/pages/dashboard.vnr</code>). The <code className="vnr-cmd">spm-cli</code> compiler can read individual files or scan theme directories recursively, aggregating and resolving dependencies across multiple <code className="vnr-str">.vnr</code> files.
      </p>

      <SectionHeading>String Literals &amp; Raw Strings (r#"..."#)</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Veneer Spec supports two string literal formats:
      </p>

      <ul style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
        <li><strong style={{ color: '#fff' }}>Standard String:</strong> Enclosed in double quotes <code className="vnr-str">"text"</code> with support for normal escape characters like <code>\n</code> or <code>\"</code>.</li>
        <li><strong style={{ color: '#fff' }}>Raw String Literal:</strong> Enclosed in <code className="vnr-str">r#"..."#</code>. Completely ignores escape characters. Ideal for complex CSS selectors, regular expressions, and embedded CSS code blocks.</li>
      </ul>

      <CodeBlock>{`// Standard String
pageTitle: "Reports Center \\n Production";

// Raw String (ideal for selectors with quotes or regexes without escaping)
bind userAvatar: r#"td.user-cell img[src*="avatar"] | attr:src"#;`}</CodeBlock>

      <SectionHeading>Comments</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        The compiler discards comments during the lexing phase before building the AST.
      </p>

      <CodeBlock>{`// This is a single-line comment

/*
  This is a multi-line comment.
  Useful for documenting extensive theme rules.
*/`}</CodeBlock>

      <SectionHeading>Reserved Keywords Table</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        The Veneer Spec lexer recognizes the following set of tokens and reserved keywords:
      </p>

      <table className="prose-spm" style={{ width: '100%', marginBottom: '2.5rem' }}>
        <thead>
          <tr>
            <th>KEYWORD</th>
            <th>SCOPE</th>
            <th>DESCRIPTION / PURPOSE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="vnr-kw">theme</code></td>
            <td>Root</td>
            <td>Defines the theme name, CSS variables, and global styles.</td>
          </tr>
          <tr>
            <td><code className="vnr-kw">class</code></td>
            <td>Root</td>
            <td>Declares a reusable data blueprint class.</td>
          </tr>
          <tr>
            <td><code className="vnr-kw">extends</code></td>
            <td>class / child</td>
            <td>Applies single inheritance extending another base class.</td>
          </tr>
          <tr>
            <td><code className="vnr-kw">selector</code></td>
            <td>Root</td>
            <td>Applies direct actions on DOM selectors (e.g. <code>action: hide;</code>).</td>
          </tr>
          <tr>
            <td><code className="vnr-kw">reconstruct</code></td>
            <td>Root</td>
            <td>Maps a container selector to mount a React component.</td>
          </tr>
          <tr>
            <td><code className="vnr-kw">child</code></td>
            <td>reconstruct</td>
            <td>Declares a list/array of child elements extracted from the DOM.</td>
          </tr>
          <tr>
            <td><code className="vnr-kw">bind</code></td>
            <td>class / reconstruct</td>
            <td>Binds a property to a CSS selector and value extractor.</td>
          </tr>
          <tr>
            <td><code className="vnr-kw">preserve</code></td>
            <td>reconstruct</td>
            <td>Preserves hidden form inputs (e.g. CSRF tokens).</td>
          </tr>
        </tbody>
      </table>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <Link to="/docs/veneer/introduction" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          ← Previous: Overview
        </Link>
        <Link to="/docs/veneer/theme" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Next: Theme Definition (theme) →
        </Link>
      </div>
    </DocLayout>
  )
}
