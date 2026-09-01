import DocLayout from '../../../components/DocLayout'
import CodeBlock from '../../../components/CodeBlock'
import { Link } from 'react-router-dom'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

export default function VeneerBindingsPage() {
  return (
    <DocLayout title="Veneer Spec: Bindings & Extractors (bind)">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        The <code className="vnr-kw">bind</code> statement connects component properties to CSS selectors and content extractors in the legacy DOM.
      </p>

      <SectionHeading>Binding Syntax</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        The standard binding syntax follows the format <code>bind &lt;property&gt;: "&lt;CSS Selector&gt; | &lt;Extractor Operator&gt;"</code>:
      </p>

      <CodeBlock>{`bind fileName: "td:nth-child(2) a | text";
bind downloadUrl: "td:nth-child(2) a | attr:href";`}</CodeBlock>

      <SectionHeading>Extractor Operators</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        SPM includes built-in extractors to read different parts of legacy DOM nodes:
      </p>

      <table className="prose-spm" style={{ width: '100%', marginBottom: '2rem' }}>
        <thead>
          <tr>
            <th>OPERATOR</th>
            <th>EXAMPLE</th>
            <th>BEHAVIOR DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="vnr-op">text</code></td>
            <td><code>"h1 | text"</code></td>
            <td>Extracts clean inner text (<code>textContent.trim()</code>).</td>
          </tr>
          <tr>
            <td><code className="vnr-op">attr:&lt;name&gt;</code></td>
            <td><code>"a | attr:href"</code></td>
            <td>Reads the HTML attribute value (e.g. <code>href</code>, <code>src</code>, <code>data-id</code>).</td>
          </tr>
          <tr>
            <td><code className="vnr-op">html</code></td>
            <td><code>"div.content | html"</code></td>
            <td>Extracts inner HTML code preserving markup (<code>innerHTML</code>).</td>
          </tr>
          <tr>
            <td><code className="vnr-op">hiddenInputs</code></td>
            <td><code>"form | hiddenInputs"</code></td>
            <td>Extracts a JSON array with all <code>name</code> and <code>value</code> pairs of hidden inputs.</td>
          </tr>
        </tbody>
      </table>

      <SectionHeading>Repeated List Extraction with child</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        To scrape multi-row tables or card grids, use the <code className="vnr-kw">child</code> block inside <code className="vnr-kw">reconstruct</code> referencing the extraction blueprint class:
      </p>

      <CodeBlock>{`class TableRowItem {
  bind id:       "td:nth-child(1) | text";
  bind name:     "td:nth-child(2) | text";
  bind link:     "td:nth-child(2) a | attr:href";
}

reconstruct "#documents-table" -> UiTableListPage {
  pageTitle: "Server Files";

  // Maps all tr elements in tbody using the TableRowItem class
  child tableRows extends TableRowItem {
    selector: "tbody tr";
  }
}`}</CodeBlock>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <Link to="/docs/veneer/reconstruct" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          ← Previous: Reconstruction (reconstruct)
        </Link>
        <Link to="/docs/veneer/selectors" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Next: Selectors &amp; Actions →
        </Link>
      </div>
    </DocLayout>
  )
}
