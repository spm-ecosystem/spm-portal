import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

const portalSections = [
  {
    index: '01',
    badge: 'Quick Guide',
    title: 'Operational Documentation',
    desc: 'Complete step-by-step instructions for local installation, Chrome extension build, browser script injection, and anti-flicker system.',
    tags: ['Installation', 'MV3 Build', 'Anti-Flicker'],
    href: '/docs/getting-started',
  },
  {
    index: '02',
    badge: 'DSL Grammar',
    title: 'Veneer Spec DSL',
    desc: 'Declarative syntax to extract legacy DOM selectors, define classes with inheritance, and map bindings directly to React components.',
    tags: ['Classes & Inheritance', 'Bindings', 'Regex Raw Strings'],
    href: '/docs/veneer',
  },
  {
    index: '03',
    badge: 'Schema Specification',
    title: 'Manifest Schema Reference',
    desc: 'Structure and contract of the JSON format emitted by the spm-cli compiler and consumed by the extension for runtime page reconstruction.',
    tags: ['JSON Schema', 'Props Extraction', 'Shadow DOM Slots'],
    href: '/docs/manifest',
  },
  {
    index: '04',
    badge: 'UI Library',
    title: 'Component Catalog',
    desc: 'Contracts and specifications for the 17 pre-built React components (primitives and dedicated) to assemble modern pages in Shadow DOM.',
    tags: ['17 Components', 'CSS Variables', 'Shadow Isolation'],
    href: '/components',
  },
]

const workflowSteps = [
  {
    step: '01',
    phase: 'DOM Scraping',
    title: 'Inspect Legacy DOM',
    desc: 'Map existing containers, tables, forms, and elements in the original application. SPM identifies how data is structured in legacy HTML for reuse.',
    bullets: [
      'Identification of stable CSS selectors',
      'Preservation of hidden security inputs',
      'Mapping of data lists and tables',
    ],
    terminalHeader: 'Legacy DOM (Original)',
    jsxLines: [
      <span key="1" className="syn-comment">&lt;!-- Original Legacy Page HTML --&gt;</span>,
      <span key="2">&lt;<span className="syn-tag">table</span> <span className="syn-attr">id</span>=<span className="syn-string">"legacy-grid"</span> <span className="syn-attr">class</span>=<span className="syn-string">"data-table"</span>&gt;</span>,
      <span key="3">&nbsp;&nbsp;&lt;<span className="syn-tag">tr</span> <span className="syn-attr">class</span>=<span className="syn-string">"item-row"</span>&gt;</span>,
      <span key="4">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="syn-tag">td</span>&gt;&lt;<span className="syn-tag">a</span> <span className="syn-attr">href</span>=<span className="syn-string">"/item/102"</span>&gt;Item #102&lt;/<span className="syn-tag">a</span>&gt;&lt;/<span className="syn-tag">td</span>&gt;</span>,
      <span key="5">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="syn-tag">td</span>&gt;Active&lt;/<span className="syn-tag">td</span>&gt;</span>,
      <span key="6">&nbsp;&nbsp;&lt;/<span className="syn-tag">tr</span>&gt;</span>,
      <span key="7">&lt;/<span className="syn-tag">table</span>&gt;</span>,
    ],
    align: 'card-left',
  },
  {
    step: '02',
    phase: 'Layout DSL',
    title: 'Declare in Veneer Spec',
    desc: 'Write transformation rules in clean .vnr files. Map scraped elements to React component properties declaratively and with strong typing.',
    bullets: [
      'Class inheritance support (extends)',
      'Custom extractors (text, attr, html)',
      'Unescaped regular expressions in Raw Strings',
    ],
    terminalHeader: 'Veneer Spec (.vnr)',
    jsxLines: [
      <span key="1"><span className="syn-keyword">class</span> <span className="syn-class">GridItem</span> {"{"}</span>,
      <span key="2">&nbsp;&nbsp;<span className="syn-keyword">bind</span> <span className="syn-prop">title</span>: <span className="syn-string">"a | text"</span>;</span>,
      <span key="3">&nbsp;&nbsp;<span className="syn-keyword">bind</span> <span className="syn-prop">url</span>:   <span className="syn-string">"a | attr:href"</span>;</span>,
      <span key="4">{"}"}</span>,
      <span key="5">&nbsp;</span>,
      <span key="6"><span className="syn-keyword">reconstruct</span> <span className="syn-string">"#legacy-grid"</span> <span className="syn-operator">-&gt;</span> <span className="syn-class">UiTableListPage</span> {"{"}</span>,
      <span key="7">&nbsp;&nbsp;<span className="syn-keyword">child</span> <span className="syn-prop">tableRows</span> <span className="syn-keyword">extends</span> <span className="syn-class">GridItem</span> {"{"}</span>,
      <span key="8">&nbsp;&nbsp;&nbsp;&nbsp;<span className="syn-prop">selector</span>: <span className="syn-string">"tr.item-row"</span>;</span>,
      <span key="9">&nbsp;&nbsp;{"}"}</span>,
      <span key="10">{"}"}</span>,
    ],
    align: 'card-right',
  },
  {
    step: '03',
    phase: 'C++ Toolchain',
    title: 'Compile with spm-cli',
    desc: 'The spm-cli compiler processes .vnr files at native C++ speeds. It resolves inheritance graphs, validates syntax, and generates optimized JSON manifests with WebSocket hot-reload support.',
    bullets: [
      'Ultra-fast native C++17 compilation',
      'Circular dependency resolution',
      'Hot-Reload server via WebSockets (port 8080)',
    ],
    terminalHeader: 'Terminal (spm-cli)',
    jsxLines: [
      <span key="1" className="syn-cmd">$ ./spm compile theme/ -o dist/manifest.json</span>,
      <span key="2" style={{ color: '#4ade80' }}>[OK] Lexing &amp; AST parsing complete</span>,
      <span key="3" style={{ color: '#4ade80' }}>[OK] Blueprint class inheritance resolved</span>,
      <span key="4" style={{ color: '#4ade80' }}>[OK] Deep merged sibling manifest metadata</span>,
      <span key="5" style={{ color: '#60a5fa' }}>[RUN] Compiled 1 manifest payload (1.2ms)</span>,
    ],
    align: 'card-left',
  },
  {
    step: '04',
    phase: 'React Injection',
    title: 'Mount in Shadow DOM',
    desc: 'The Chrome extension intercepts the page, applies theme CSS globally, hides legacy nodes, and renders the React 18 component inside an isolated Shadow DOM root.',
    bullets: [
      'Full CSS style isolation via Shadow Root',
      'Preservation of legacy events and form submission',
      'Automatic anti-flicker with smooth transition',
    ],
    terminalHeader: 'Shadow DOM (React 18)',
    jsxLines: [
      <span key="1">&lt;<span className="syn-tag">div</span> <span className="syn-attr">class</span>=<span className="syn-string">"modern-reconstruct-host"</span>&gt;</span>,
      <span key="2" className="syn-comment">&nbsp;&nbsp;#shadow-root (open)</span>,
      <span key="3">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="syn-tag">style</span>&gt;<span className="syn-comment">/* Clean Theme CSS */</span>&lt;/<span className="syn-tag">style</span>&gt;</span>,
      <span key="4">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="syn-class">UiTableListPage</span></span>,
      <span key="5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syn-attr">pageTitle</span>=<span className="syn-string">"Documents"</span></span>,
      <span key="6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syn-attr">tableRows</span>={"{"}<span className="syn-prop">extractedData</span>{"}"}</span>,
      <span key="7">&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</span>,
      <span key="8">&lt;/<span className="syn-tag">div</span>&gt;</span>,
    ],
    align: 'card-right',
  },
]

export default function Home() {
  const [split, setSplit] = useState(50)
  const { t } = useLanguage()

  const updateSplit = (clientX: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setSplit(Math.max(0, Math.min(100, next)))
  }

  return (
    <div className="spm-home">
      <Navbar />

      {/* Hero Section */}
      <section className="home-hero-shell">
        <div>
          <h1 className="home-hero-title">
            SPM
            <br />
            Portal
            <span>Docs.</span>
          </h1>

          <p className="home-hero-copy">
            Central documentation and engineering platform for modernizing web systems using Veneer Spec, compiled manifests, and React in Shadow DOM.
          </p>

          <div className="home-actions">
            <Link to="/docs/getting-started" className="home-primary-action">Get Started with Docs</Link>
            <Link to="/docs/veneer" className="home-secondary-action">Explore Veneer Spec</Link>
          </div>
        </div>
      </section>

      {/* Portal Map Section (4-Card Grid) */}
      <section className="home-section-shell" id="portal-map">
        <div className="home-section-heading">
          <div>
            <p className="eyebrow">Resource Map</p>
            <h2>Choose Where to Explore</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', margin: 0, lineHeight: 1.6 }}>
            Access technical manuals for the compiler, DSL syntax, JSON schema, or React component catalog.
          </p>
        </div>

        <div className="home-doc-cards-grid">
          {portalSections.map(section => (
            <Link key={section.title} to={section.href} className="home-portal-card">
              <div className="portal-card-header">
                <span className="portal-card-num">{section.index}</span>
                <span className="portal-card-badge">{section.badge}</span>
              </div>
              <h3 className="portal-card-title">{section.title}</h3>
              <p className="portal-card-desc">{section.desc}</p>

              <div className="portal-card-tags">
                {section.tags.map(t => (
                  <span key={t} className="portal-tag-pill">{t}</span>
                ))}
              </div>

              <div className="portal-card-footer">
                <span>Access documentation</span>
                <span className="portal-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Interactive Showcase with Veneer Spec Syntax Highlighting */}
      <section className="home-section-shell">
        <div style={{ marginBottom: '1.5rem' }}>
          <p className="eyebrow" style={{ marginBottom: 6 }}>Interactive Showcase</p>
          <h2 className="section-title" style={{ margin: 0 }}>Visual Transformation with Veneer Spec</h2>
        </div>

        <div className="showcase-container-grid">
          {/* Left Column: Interactive Comparison Slider */}
          <div className="showcase-visual-column">
            <div className="showcase-slider-bar">
              <span className="showcase-slider-title">Live Visual Preview</span>
              <span className="showcase-slider-hint">Drag ⇔ to compare</span>
            </div>

            <div
              className="showcase-slider-box"
              onPointerDown={event => {
                event.currentTarget.setPointerCapture(event.pointerId)
                updateSplit(event.clientX, event.currentTarget)
              }}
              onPointerMove={event => {
                if (event.buttons !== 1) return
                updateSplit(event.clientX, event.currentTarget)
              }}
            >
              {/* Underneath: Rendered Legacy HTML Page (Feia / Antiga) */}
              <div className="showcase-pane showcase-pane-legacy">
                <div className="showcase-pane-badge legacy-badge">Legacy DOM (Original)</div>
                
                <div className="raw-legacy-page">
                  <div className="raw-legacy-header">
                    <h3>Legacy File System v1.0</h3>
                    <small>Server: 192.168.1.4 | Protocol: HTTP/1.0</small>
                  </div>
                  <div className="raw-legacy-content">
                    <p className="raw-legacy-note">Listing 3 raw records in relational database:</p>
                    <table className="raw-legacy-table" border={1} cellPadding={6} cellSpacing={0}>
                      <thead>
                        <tr>
                          <th>Code</th>
                          <th>File</th>
                          <th>Category</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#001</td>
                          <td><a href="/docs/manual.pdf">user_manual.pdf</a></td>
                          <td>Docs</td>
                          <td><a href="/docs/manual.pdf">[Download]</a></td>
                        </tr>
                        <tr>
                          <td>#002</td>
                          <td><a href="/db/schema.sql">db_schema.sql</a></td>
                          <td>Database</td>
                          <td><a href="/db/schema.sql">[Download]</a></td>
                        </tr>
                        <tr>
                          <td>#003</td>
                          <td><a href="/config/app.json">prod_config.json</a></td>
                          <td>Config</td>
                          <td><a href="/config/app.json">[Download]</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Overlay: Rendered Modern SPM Component (React Component) */}
              <div className="showcase-pane showcase-pane-modern" style={{ clipPath: `inset(0 0 0 ${split}%)` }}>
                <div className="showcase-pane-badge modern-badge">SPM React Component (UiTableListPage)</div>

                <div className="modern-component-render">
                  <div className="spm-ui-table-card">
                    <div className="spm-ui-table-header">
                      <div>
                        <span className="spm-comp-tag">UiTableListPage</span>
                        <h4 className="spm-comp-title">File Center</h4>
                      </div>
                      <span className="spm-item-count">3 records</span>
                    </div>

                    <div className="spm-ui-rows-list">
                      <div className="spm-ui-row-item">
                        <div className="spm-row-info">
                          <span className="spm-file-name">user_manual.pdf</span>
                          <span className="spm-file-meta">Docs • #001</span>
                        </div>
                        <span className="spm-action-btn">Download PDF →</span>
                      </div>
                      <div className="spm-ui-row-item">
                        <div className="spm-row-info">
                          <span className="spm-file-name">db_schema.sql</span>
                          <span className="spm-file-meta">Database • #002</span>
                        </div>
                        <span className="spm-action-btn">Download SQL →</span>
                      </div>
                      <div className="spm-ui-row-item">
                        <div className="spm-row-info">
                          <span className="spm-file-name">prod_config.json</span>
                          <span className="spm-file-meta">Config • #003</span>
                        </div>
                        <span className="spm-action-btn">Download JSON →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider & Handle */}
              <div className="showcase-divider-line" style={{ left: `${split}%` }} />
              <div className="showcase-handle-circle" style={{ left: `${split}%` }} aria-hidden="true">
                ⇔
              </div>
            </div>
          </div>

          {/* Right Column: Clean Code Window with Syntax Highlighting */}
          <div className="showcase-code-column">
            <div className="showcase-code-header">
              <span className="showcase-code-badge">Veneer Rule Script</span>
              <span className="showcase-file-name">theme/files.vnr</span>
            </div>

            <div className="showcase-code-box">
              <pre>
                <code>
                  <span className="syn-comment">// Veneer Spec Script (.vnr)</span>{'\n'}
                  <span className="syn-keyword">class</span> <span className="syn-class">DocumentRow</span> {"{"}{'\n'}
                  {'  '}<span className="syn-keyword">bind</span> <span className="syn-prop">id</span>:       <span className="syn-string">"td:nth-child(1) | text"</span>;{'\n'}
                  {'  '}<span className="syn-keyword">bind</span> <span className="syn-prop">fileName</span>: <span className="syn-string">"td:nth-child(2) a | text"</span>;{'\n'}
                  {'  '}<span className="syn-keyword">bind</span> <span className="syn-prop">fileUrl</span>:  <span className="syn-string">"td:nth-child(2) a | attr:href"</span>;{'\n'}
                  {'  '}<span className="syn-keyword">bind</span> <span className="syn-prop">category</span>: <span className="syn-string">"td:nth-child(3) | text"</span>;{'\n'}
                  {"}"}{'\n\n'}
                  <span className="syn-keyword">reconstruct</span> <span className="syn-string">"#legacy-table"</span> <span className="syn-operator">-&gt;</span> <span className="syn-class">UiTableListPage</span> {"{"}{'\n'}
                  {'  '}<span className="syn-prop">pageTitle</span>: <span className="syn-string">"File Center"</span>;{'\n\n'}
                  {'  '}<span className="syn-keyword">child</span> <span className="syn-prop">tableRows</span> <span className="syn-keyword">extends</span> <span className="syn-class">DocumentRow</span> {"{"}{'\n'}
                  {'    '}<span className="syn-prop">selector</span>: <span className="syn-string">"tbody tr"</span>;{'\n'}
                  {'  }'}{'\n'}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Zig-Zag Pipeline Section */}
      <section className="home-section-shell">
        <div className="home-section-heading" style={{ marginBottom: '3rem' }}>
          <div>
            <p className="eyebrow">Architecture Flow</p>
            <h2>How SPM Transforms the Page</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', margin: 0, lineHeight: 1.6 }}>
            Step-by-step process of continuous transformation from legacy HTML to React 18 in Shadow DOM.
          </p>
        </div>

        <div className="zigzag-pipeline-list">
          {workflowSteps.map(w => (
            <div key={w.step} className={`zigzag-step-row ${w.align}`}>
              {/* Card (Terminal Window) */}
              <div className="zigzag-card-col">
                <div className="mono-terminal-box">
                  <div className="mono-terminal-header">
                    <div className="mono-terminal-dots">
                      <span className="mono-dot" />
                      <span className="mono-dot" />
                      <span className="mono-dot" />
                    </div>
                    <span className="mono-terminal-title">{w.terminalHeader}</span>
                  </div>
                  <div className="mono-terminal-body">
                    {w.jsxLines.map((jsxLine, lIdx) => (
                      <div key={lIdx} className="mono-terminal-line">{jsxLine}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Text Description Block */}
              <div className="zigzag-text-col">
                <div className="zigzag-step-badge">
                  <span className="step-num">{w.step}</span>
                  <span className="phase-label">{w.phase}</span>
                </div>
                <h3 className="zigzag-title">{w.title}</h3>
                <p className="zigzag-desc">{w.desc}</p>

                <ul className="zigzag-bullets">
                  {w.bullets.map(b => (
                    <li key={b}>
                      <span className="bullet-dash">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Frequently Asked Questions (FAQ) */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '6rem 2rem', borderTop: '1px solid var(--border-contrast)' }}>
        <p className="eyebrow" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{t('home_faq_eyebrow')}</p>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>{t('home_faq_title')}</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              q: 'Who modernizes a website using Site Package Manager (SPM)?',
              a: 'Frontend engineers, enterprise developers, and UI/UX teams who need to upgrade legacy web applications (ASP.NET, PHP, Java JSP, legacy CMS) into modern React 19 interfaces without modifying backend source code.'
            },
            {
              q: 'How to modernize a legacy website without changing backend code?',
              a: 'SPM modernizes legacy websites by running a browser content script engine that inspects target HTML elements, extracts un-structured data, hides legacy markup, and mounts state-of-the-art React components inside isolated Shadow DOM hosts.'
            },
            {
              q: 'What is Veneer Spec (.vnr)?',
              a: 'Veneer Spec is a declarative Domain Specific Language (DSL) created for the SPM C++17 compiler (spm-cli). It provides class blueprints, single inheritance, DOM selectors, and component bindings to compile raw .vnr files into clean manifest.json theme payloads.'
            },
            {
              q: 'Why use Shadow DOM for website modernization?',
              a: 'Shadow DOM guarantees full CSS and DOM encapsulation. It ensures legacy page stylesheets do not bleed into modern UI components and prevents modern component styles from breaking the host web page.'
            },
            {
              q: 'How does SPM handle form submission and security tokens like CSRF?',
              a: 'SPM supports hidden input preservation via the preserve: "form | hiddenInputs" directive. It automatically extracts and moves CSRF tokens, session IDs, and security parameters from legacy forms to the modern React component DOM.'
            },
            {
              q: 'Is Site Package Manager open-source?',
              a: 'Yes, Site Package Manager is 100% open-source under the MIT license, available on GitHub across the SPM ecosystem repositories.'
            }
          ].map(faq => (
            <div key={faq.q} style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-contrast)',
              borderRadius: '6px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <h3 style={{ fontSize: '15px', color: '#fff', fontWeight: 700, margin: '0 0 0.75rem', lineHeight: 1.4 }}>
                {faq.q}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
