import DocLayout from '../../../components/DocLayout'
import CodeBlock from '../../../components/CodeBlock'
import { Link } from 'react-router-dom'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

export default function VeneerToolingPage() {
  return (
    <DocLayout title="Veneer Spec: Diagnostics & CLI (spm compile)">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        The <code className="vnr-cmd">spm-cli</code> compiler compiles Veneer Spec specifications into an optimized JSON contract, emitting diagnostics and structured error messages.
      </p>

      <SectionHeading>Compilation with spm-cli</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        You can compile a complete theme directory containing multiple <code className="vnr-str">.vnr</code> files or compile an isolated file:
      </p>

      <CodeBlock>{`# Compile a complete theme directory
spm compile theme/ -o theme/manifest.json

# Compile an isolated .vnr file
spm compile theme/pages/dashboard.vnr -o /tmp/dashboard.json`}</CodeBlock>

      <SectionHeading>C++17 Compiler Phases</SectionHeading>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '14px', fontFamily: 'var(--font-mono)' }}>1. Lexer (Lexical Analysis)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
            Tokenizes characters into keywords (<code className="vnr-kw">class</code>, <code className="vnr-kw">reconstruct</code>), identifiers, delimiters, and string literals.
          </p>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '14px', fontFamily: 'var(--font-mono)' }}>2. Parser (Syntactic Analysis)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
            Builds the Abstract Syntax Tree (AST) while validating brace closing <code className="vnr-op">{"{}"}</code> and semicolons <code className="vnr-op">;</code>.
          </p>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '14px', fontFamily: 'var(--font-mono)' }}>3. Resolver (Resolution)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
            Merges inheritance between base and derived classes (<code className="vnr-kw">extends</code>) and verifies circular dependencies.
          </p>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '14px', fontFamily: 'var(--font-mono)' }}>4. Emitter (JSON Emission)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
            Emits the final compiled manifest preserving metadata such as <code>targetUrl</code> and <code>version</code>.
          </p>
        </div>
      </div>

      <SectionHeading>Error Diagnostics</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        If the compiler encounters an unexpected character or missing brace, it returns a descriptive error indicating the line and token in error:
      </p>

      <CodeBlock>{`[Veneer Parser Error] SyntaxError at line 14:
  expected ';' after binding property value 'td:nth-child(1) | text'
  got 'reconstruct'`}</CodeBlock>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <Link to="/docs/veneer/selectors" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          ← Previous: Selectors &amp; Actions
        </Link>
        <Link to="/docs/manifest" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Next: Manifest Schema Reference →
        </Link>
      </div>
    </DocLayout>
  )
}
