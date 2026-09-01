import DocLayout from '../../../components/DocLayout'
import CodeBlock from '../../../components/CodeBlock'
import { Link } from 'react-router-dom'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

export default function VeneerIntroPage() {
  return (
    <DocLayout title="Veneer Spec: Overview & Motivation">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        <strong style={{ color: '#fff' }}>Veneer Spec (<code className="vnr-str">.vnr</code>)</strong> is the declarative Domain Specific Language (DSL) designed specifically for the <strong>Site Package Manager (SPM)</strong> compiler.
      </p>

      <SectionHeading>Why Was Veneer Spec Created?</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1.25rem' }}>
        Originally, page modernization mapping and DOM replacement in SPM were written directly in pure JSON files (<code className="vnr-str">manifest.json</code>). However, as theme complexity scaled to hundreds of properties, data selectors, and nested loops, editing raw JSON became impractical for three main reasons:
      </p>

      <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '15px' }}>1. Verbosity and Excessive Escaping</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
            Regular expressions and complex CSS selectors in JSON required multiple backslash escapes (<code>\\\\</code>), making writing error-prone and hard to read.
          </p>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '15px' }}>2. Code Duplication (Lack of Inheritance)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
            Tabular lists and repeated cards had to duplicate the exact same JSON binding objects. Veneer Spec introduced <strong>Blueprint-based Object Orientation</strong> with <code className="vnr-kw">class</code> and <code className="vnr-kw">extends</code>.
          </p>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '15px' }}>3. Absence of Compilation Diagnostics</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
            Errors in JSON were only detected at runtime in the browser. Veneer Spec features a C++17 compiler (<code className="vnr-cmd">spm-cli</code>) that analyzes the AST, validates types, and points out the exact line of any syntax error before emitting the final build.
          </p>
        </div>
      </div>

      <SectionHeading>Blueprinting and Reconstruction Philosophy</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Veneer Spec operates under a declarative paradigm: instead of writing imperative DOM manipulation code (such as <code>document.querySelector</code> or manual loops), you declare:
      </p>

      <ul style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, paddingLeft: '1.25rem', marginBottom: '2rem' }}>
        <li><strong style={{ color: '#fff' }}>WHAT</strong> to target on the legacy page (CSS selectors of legacy HTML).</li>
        <li><strong style={{ color: '#fff' }}>WHICH</strong> React component from the SPM library to mount inside the isolated Shadow DOM.</li>
        <li><strong style={{ color: '#fff' }}>HOW</strong> to extract unstructured data from the legacy page to populate React props.</li>
      </ul>

      <SectionHeading>Comparison: Manual JSON vs Veneer Spec</SectionHeading>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
        <div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Before: Verbose Manual JSON</span>
          <CodeBlock>{`{
  "reconstructs": [{
    "containerSelector": "#table",
    "layoutComponent": "UiTableListPage",
    "children": [{
      "name": "rows",
      "selector": "tbody tr",
      "bindings": {
        "title": "td:nth-child(1) | text"
      }
    }]
  }]
}`}</CodeBlock>
        </div>

        <div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>After: Veneer Spec (.vnr)</span>
          <CodeBlock>{`class FileRow {
  bind title: "td:nth-child(1) | text";
}

reconstruct "#table" -> UiTableListPage {
  child rows extends FileRow {
    selector: "tbody tr";
  }
}`}</CodeBlock>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <div></div>
        <Link to="/docs/veneer/syntax" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Next: Syntax &amp; Grammar →
        </Link>
      </div>
    </DocLayout>
  )
}
