import DocLayout from '../../components/DocLayout'
import CodeBlock from '../../components/CodeBlock'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

const FeatureCard = ({ title, desc }: { title: string; desc: string }) => (
  <div style={{ border: '1px solid var(--border-contrast)', borderRadius: '4px', padding: '1.25rem', background: 'var(--bg-surface)', marginBottom: '1rem' }}>
    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#fff', fontWeight: 700, margin: '0 0 6px' }}>{title}</p>
    <p style={{ color: 'var(--text-muted)', fontSize: 13, margin: 0, lineHeight: 1.65 }}>{desc}</p>
  </div>
)

export default function Tooling() {
  return (
    <DocLayout title="CLI & Tooling">
      <p className="body-copy" style={{ marginBottom: '2rem' }}>
        Overview of tools surrounding SPM. This page documents the role of <code>spm-cli</code>:
        compiling Veneer Spec, watching themes during development, and publishing artifacts.
      </p>

      <SectionHeading>Compilation Contract</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: '1rem' }}>
        The core purpose of the tooling is to transform <code>.vnr</code> files into a single <code>manifest.json</code>.
        The extension consumes this manifest without relying on internal compiler details.
      </p>

      <CodeBlock>{`# Compile a theme directory
spm compile theme/ -o theme/manifest.json

# Compile an isolated file
spm compile theme/pages/gallery.vnr -o /tmp/gallery.json`}</CodeBlock>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {[
          { title: 'Lexing', desc: 'Strips comments and converts Veneer Spec into tokens.' },
          { title: 'Parsing', desc: 'Builds the AST with theme, class, selector, and reconstruct blocks.' },
          { title: 'Resolution', desc: 'Resolves extends, inheritance, overrides, and shared classes.' },
          { title: 'Emission', desc: 'Generates manifest.json and preserves existing metadata where possible.' },
        ].map(item => (
          <FeatureCard key={item.title} title={item.title} desc={item.desc} />
        ))}
      </div>

      <SectionHeading>Local Development</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: '1rem' }}>
        Dev mode watches theme changes and notifies the extension when a new manifest
        is ready to apply to the active tab.
      </p>

      <CodeBlock>{`spm dev -d /path/to/theme/

# Expected output
# SPM Dev Server - ws://localhost:8080
# Monitoring: /path/to/theme/
# [Watcher] Syncing changes...`}</CodeBlock>

      <FeatureCard
        title="Watcher Payload"
        desc="The server recompiles .vnr upon receiving a directory or file, aggregates theme CSS, and sends a JSON payload with manifest and css to the extension."
      />
      <FeatureCard
        title="Default Port"
        desc="The dev server uses WebSocket at ws://localhost:8080. The extension can connect and request to watch a specific path."
      />

      <SectionHeading>Editor Diagnostics</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: '1.5rem' }}>
        Editor integrations reuse compiler phases to report errors before the final build.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {[
          { type: 'Lexical', desc: 'Unexpected characters, unclosed strings, and invalid tokens.' },
          { type: 'Syntactic', desc: 'Malformed blocks, missing braces, and incorrect pipes.' },
          { type: 'Semantic', desc: 'Non-existent components, classes, or props in the loaded catalog.' },
          { type: 'Autocomplete', desc: 'Suggestions for components, props, bind operators, and scopes.' },
        ].map(d => (
          <div key={d.type} style={{ border: '1px solid var(--border-contrast)', borderRadius: '4px', padding: '1rem', background: 'var(--bg-surface)' }}>
            <p className="eyebrow" style={{ marginBottom: 6 }}>{d.type}</p>
            <p style={{ color: 'var(--text-primary)', fontSize: 13, margin: 0, lineHeight: 1.55 }}>{d.desc}</p>
          </div>
        ))}
      </div>

      <SectionHeading>Theme Publishing</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: '1rem' }}>
        Publishing uploads compiled artifacts, not loose source files. Storage provider details remain outside the portal contract.
      </p>

      <CodeBlock>{`# Simplified publishing pipeline (GitHub Actions / CI/CD)
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Compile themes
        run: spm compile themes/ -o dist/manifest.json
      - name: Publish artifacts
        run: ./scripts/deploy-themes dist/`}</CodeBlock>

      <SectionHeading>Exposed Commands</SectionHeading>
      <div style={{ marginBottom: '1rem' }}>
        <FeatureCard title="spm install" desc="Installs binary to system PATH." />
        <FeatureCard title="spm compile <source> -o <output>" desc="Compiles .vnr file or theme directory into manifest.json." />
        <FeatureCard title="spm dev -d <path>" desc="Starts WebSocket dev server watching a theme, .vnr file, or manifest." />
        <FeatureCard title="spm publish" desc="Reserved workflow for publishing theme to SPM registry." />
      </div>
    </DocLayout>
  )
}
