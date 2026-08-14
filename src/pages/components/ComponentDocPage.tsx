import { useState, useMemo, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import MarkdownDocViewer from '../../components/MarkdownDocViewer'
import Footer from '../../components/Footer'
import { useLanguage } from '../../context/LanguageContext'

interface ComponentMeta {
  name: string
  category: 'Primitivas de Layout' | 'Componentes Dedicados'
  description: string
  initialVnr: string
  parseVnrToProps: (vnrText: string) => Record<string, any>
  generateManifestJson: (props: Record<string, any>) => string
  renderPreview: (props: Record<string, any>) => React.ReactNode
}

function colorizeVnrLine(line: string): string {
  if (line.trim().startsWith('//')) {
    return `<span class="syn-comment">${escapeHtml(line)}</span>`
  }

  let escaped = escapeHtml(line)
  // Double quoted strings
  escaped = escaped.replace(/("[^"]*")/g, '<span class="syn-string">$1</span>')
  // Keywords
  escaped = escaped.replace(/\b(class|reconstruct|extends|child|bind)\b/g, '<span class="syn-keyword">$1</span>')
  // Class / Component Names
  escaped = escaped.replace(/\b(Ui[A-Za-z0-9]+|DocumentRow|GridItem|FileRow)\b/g, '<span class="syn-class">$1</span>')
  // Operators
  escaped = escaped.replace(/(-&gt;)/g, '<span class="syn-operator">$1</span>')
  // Props key followed by colon (e.g. pageTitle:)
  escaped = escaped.replace(/\b([a-zA-Z0-9_]+)(?=:)/g, '<span class="syn-prop">$1</span>')

  return escaped
}

function colorizeJsonLine(line: string): string {
  let escaped = escapeHtml(line)
  // JSON Key: "key":
  escaped = escaped.replace(/("[\w-]+")\s*:/g, '<span class="syn-prop">$1</span>:')
  // String value: "value"
  escaped = escaped.replace(/:\s*(".*?")/g, ': <span class="syn-string">$1</span>')
  // Numbers
  escaped = escaped.replace(/:\s*(\d+)/g, ': <span class="syn-cmd">$1</span>')
  // Booleans
  escaped = escaped.replace(/:\s*(true|false)/g, ': <span class="syn-keyword">$1</span>')

  return escaped
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function extractPropFromVnr(vnrText: string, propKey: string, defaultValue: string): string {
  const reg = new RegExp(`${propKey}:\\s*"([^"]+)"`, 'i')
  const match = vnrText.match(reg)
  return match ? match[1] : defaultValue
}

const COMPONENT_DATA: Record<string, ComponentMeta> = {
  'ui-table-list-page': {
    name: 'UiTableListPage',
    category: 'Componentes Dedicados',
    description: 'Página de listagem tabular densa com barra de pesquisa integrada, paginação e ações dinâmicas.',
    initialVnr: `class DocumentRow {
  bind id:       "td:nth-child(1) | text";
  bind fileName: "td:nth-child(2) a | text";
  bind fileUrl:  "td:nth-child(2) a | attr:href";
  bind category: "td:nth-child(3) | text";
}

reconstruct "#legacy-table" -> UiTableListPage {
  pageTitle: "Central de Arquivos";
  placeholder: "Filtrar documentos...";

  child tableRows extends DocumentRow {
    selector: "tbody tr";
  }
}`,
    parseVnrToProps: (vnr) => ({
      pageTitle: extractPropFromVnr(vnr, 'pageTitle', 'Central de Arquivos'),
      placeholder: extractPropFromVnr(vnr, 'placeholder', 'Filtrar documentos...')
    }),
    generateManifestJson: (props) => JSON.stringify({
      reconstructs: [
        {
          containerSelector: "#legacy-table",
          layoutComponent: "UiTableListPage",
          props: {
            pageTitle: props.pageTitle,
            placeholder: props.placeholder
          },
          children: [
            {
              name: "tableRows",
              selector: "tbody tr",
              bindings: {
                id: "td:nth-child(1) | text",
                fileName: "td:nth-child(2) a | text",
                fileUrl: "td:nth-child(2) a | attr:href",
                category: "td:nth-child(3) | text"
              }
            }
          ]
        }
      ]
    }, null, 2),
    renderPreview: (props) => (
      <div className="spm-ui-table-card" style={{ width: '100%' }}>
        <div className="spm-ui-table-header">
          <div>
            <span className="spm-comp-tag">UiTableListPage</span>
            <h4 className="spm-comp-title">{props.pageTitle}</h4>
          </div>
          <span className="spm-item-count">3 registros</span>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder={props.placeholder}
            readOnly
            style={{
              width: '100%', padding: '8px 12px', background: 'var(--bg-element)',
              border: '1px solid var(--border-contrast)', borderRadius: '4px',
              color: '#fff', fontSize: '12px', fontFamily: 'var(--font-mono)'
            }}
          />
        </div>

        <div className="spm-ui-rows-list">
          <div className="spm-ui-row-item">
            <div className="spm-row-info">
              <span className="spm-file-name">manual_usuario.pdf</span>
              <span className="spm-file-meta">Documentação • #001</span>
            </div>
            <span className="spm-action-btn">Baixar PDF →</span>
          </div>
          <div className="spm-ui-row-item">
            <div className="spm-row-info">
              <span className="spm-file-name">schema_banco.sql</span>
              <span className="spm-file-meta">Database • #002</span>
            </div>
            <span className="spm-action-btn">Baixar SQL →</span>
          </div>
          <div className="spm-ui-row-item">
            <div className="spm-row-info">
              <span className="spm-file-name">config_producao.json</span>
              <span className="spm-file-meta">Config • #003</span>
            </div>
            <span className="spm-action-btn">Baixar JSON →</span>
          </div>
        </div>
      </div>
    )
  },

  'ui-search-bar': {
    name: 'UiSearchBar',
    category: 'Componentes Dedicados',
    description: 'Campo de pesquisa autônomo com preservação de inputs ocultos de segurança (CSRF token).',
    initialVnr: `reconstruct "#search-form" -> UiSearchBar {
  placeholder: "Pesquisar na base...";
  buttonText: "Buscar Agora";
}`,
    parseVnrToProps: (vnr) => ({
      placeholder: extractPropFromVnr(vnr, 'placeholder', 'Pesquisar na base...'),
      buttonText: extractPropFromVnr(vnr, 'buttonText', 'Buscar Agora')
    }),
    generateManifestJson: (props) => JSON.stringify({
      reconstructs: [
        {
          containerSelector: "#search-form",
          layoutComponent: "UiSearchBar",
          props: {
            placeholder: props.placeholder,
            buttonText: props.buttonText
          }
        }
      ]
    }, null, 2),
    renderPreview: (props) => (
      <div style={{ width: '100%', padding: '1.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', borderRadius: '6px' }}>
        <span className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>UiSearchBar</span>
        <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            placeholder={props.placeholder}
            style={{
              flex: 1, padding: '10px 14px', background: 'var(--bg-element)',
              border: '1px solid var(--border-contrast)', borderRadius: '4px',
              color: '#fff', fontSize: '13px', fontFamily: 'var(--font-mono)'
            }}
          />
          <button
            type="button"
            style={{
              padding: '0 1.25rem', background: '#fff', color: '#000',
              border: 'none', borderRadius: '4px', fontWeight: 700, fontSize: '13px', cursor: 'pointer'
            }}
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    )
  },

  'ui-stats-dashboard': {
    name: 'UiStatsDashboard',
    category: 'Componentes Dedicados',
    description: 'Painel compacto de métricas operacionais e estatísticas de runtime em grade.',
    initialVnr: `reconstruct "#stats-panel" -> UiStatsDashboard {
  stat1Title: "Requisições/s";
  stat1Value: "14,250";
  stat2Title: "Latência Média";
  stat2Value: "1.2ms";
}`,
    parseVnrToProps: (vnr) => ({
      stat1Title: extractPropFromVnr(vnr, 'stat1Title', 'Requisições/s'),
      stat1Value: extractPropFromVnr(vnr, 'stat1Value', '14,250'),
      stat2Title: extractPropFromVnr(vnr, 'stat2Title', 'Latência Média'),
      stat2Value: extractPropFromVnr(vnr, 'stat2Value', '1.2ms')
    }),
    generateManifestJson: (props) => JSON.stringify({
      reconstructs: [
        {
          containerSelector: "#stats-panel",
          layoutComponent: "UiStatsDashboard",
          props: {
            stat1Title: props.stat1Title,
            stat1Value: props.stat1Value,
            stat2Title: props.stat2Title,
            stat2Value: props.stat2Value
          }
        }
      ]
    }, null, 2),
    renderPreview: (props) => (
      <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', borderRadius: '6px', padding: '1.25rem' }}>
          <span className="eyebrow">{props.stat1Title}</span>
          <h3 style={{ color: '#fff', fontSize: '24px', margin: '0.25rem 0 0', fontWeight: 800 }}>{props.stat1Value}</h3>
          <span style={{ color: '#34d399', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>+12.4% este mês</span>
        </div>
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', borderRadius: '6px', padding: '1.25rem' }}>
          <span className="eyebrow">{props.stat2Title}</span>
          <h3 style={{ color: '#fff', fontSize: '24px', margin: '0.25rem 0 0', fontWeight: 800 }}>{props.stat2Value}</h3>
          <span style={{ color: '#60a5fa', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>Otimizado via C++</span>
        </div>
      </div>
    )
  },

  'ui-nav-header': {
    name: 'UiNavHeader',
    category: 'Componentes Dedicados',
    description: 'Barra de cabeçalho topo fixa com suporte a logo org, links primários e toggle de temas.',
    initialVnr: `reconstruct "#header" -> UiNavHeader {
  siteName: "SPM Portal";
  activeTab: "Início";
}`,
    parseVnrToProps: (vnr) => ({
      siteName: extractPropFromVnr(vnr, 'siteName', 'SPM Portal'),
      activeTab: extractPropFromVnr(vnr, 'activeTab', 'Início')
    }),
    generateManifestJson: (props) => JSON.stringify({
      reconstructs: [
        {
          containerSelector: "#header",
          layoutComponent: "UiNavHeader",
          props: {
            siteName: props.siteName,
            activeTab: props.activeTab
          }
        }
      ]
    }, null, 2),
    renderPreview: (props) => (
      <div style={{ width: '100%', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', borderRadius: '6px', padding: '0.85rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="https://raw.githubusercontent.com/spm-ecosystem/.github/main/profile/spm_logo.svg" alt="Logo" style={{ height: 24 }} />
          <span style={{ color: '#fff', fontWeight: 700, fontSize: '14px', fontFamily: 'var(--font-mono)' }}>{props.siteName}</span>
        </div>
        <div style={{ display: 'flex', gap: '1.25rem', fontSize: '13px', fontWeight: 600 }}>
          <span style={{ color: '#fff' }}>{props.activeTab}</span>
          <span style={{ color: 'var(--text-muted)' }}>Docs</span>
          <span style={{ color: 'var(--text-muted)' }}>Componentes</span>
        </div>
      </div>
    )
  }
}

const getGenericComponentMeta = (name: string): ComponentMeta => ({
  name,
  category: 'Componentes Dedicados',
  description: `Componente React do ecossistema SPM para reconstrução de páginas modernas no Shadow DOM.`,
  initialVnr: `reconstruct "#container" -> ${name} {
  title: "${name} Demo";
  bind content: ".item | text";
}`,
  parseVnrToProps: (vnr) => ({
    title: extractPropFromVnr(vnr, 'title', `${name} Demo`)
  }),
  generateManifestJson: (props) => JSON.stringify({
    reconstructs: [
      {
        containerSelector: "#container",
        layoutComponent: name,
        props: {
          title: props.title
        }
      }
    ]
  }, null, 2),
  renderPreview: (props) => (
    <div style={{ width: '100%', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', borderRadius: '6px', padding: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div>
          <span className="eyebrow">{name}</span>
          <h4 style={{ color: '#fff', margin: 0, fontSize: '18px' }}>{props.title}</h4>
        </div>
        <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', background: 'var(--bg-element)', padding: '3px 8px', borderRadius: '4px', border: '1px solid var(--border-contrast)', color: '#fff' }}>
          Shadow DOM Active
        </span>
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0 }}>
        Visualização de demonstração reativa para <code style={{ color: '#fff' }}>{name}</code>.
      </p>
    </div>
  )
})

export default function ComponentDocPage() {
  const { slug } = useParams<{ slug: string }>()
  const compSlug = slug || 'ui-table-list-page'
  const { t } = useLanguage()
  
  const compMeta = COMPONENT_DATA[compSlug] || getGenericComponentMeta(compSlug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(''))

  const [pageMode, setPageMode] = useState<'sandbox' | 'doc'>('sandbox')
  const [codeMode, setCodeMode] = useState<'vnr' | 'json'>('vnr')
  const [vnrCode, setVnrCode] = useState<string>(compMeta.initialVnr)

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const preRef = useRef<HTMLPreElement>(null)

  const handleScroll = () => {
    if (textareaRef.current && preRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop
      preRef.current.scrollLeft = textareaRef.current.scrollLeft
    }
  }

  const currentProps = useMemo(() => {
    return compMeta.parseVnrToProps(vnrCode)
  }, [vnrCode, compMeta])

  const compiledJson = useMemo(() => {
    return compMeta.generateManifestJson(currentProps)
  }, [currentProps, compMeta])

  const rawUrl = `https://raw.githubusercontent.com/spm-ecosystem/spm-components/main/docs/components/${compMeta.name}.md`

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-absolute)' }}>
      <Navbar />

      <main style={{ flex: 1, maxWidth: 1180, margin: '0 auto', padding: '2.5rem 2rem 6rem', width: '100%' }}>
        {/* Top Header Navigation */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link
            to="/components"
            style={{
              color: 'var(--text-subtle)', textDecoration: 'none', fontSize: 12,
              fontFamily: 'var(--font-mono)', fontWeight: 600, display: 'inline-flex',
              alignItems: 'center', gap: '0.4rem', marginBottom: '1rem'
            }}
          >
            {t('sandbox_back')}
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
            <h1 className="page-title" style={{ fontSize: '2rem', margin: 0 }}>{compMeta.name}</h1>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, background: 'var(--bg-surface)',
              border: '1px solid var(--border-contrast)', padding: '2px 8px', borderRadius: 4, color: 'var(--text-muted)'
            }}>
              {compMeta.category}
            </span>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: 0, maxWidth: 680, lineHeight: 1.6 }}>
            {compMeta.description}
          </p>
        </div>

        {/* 2 Top Level Mode Tabs */}
        <div style={{
          display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-contrast)',
          marginBottom: '2rem', paddingBottom: '0.5rem'
        }}>
          <button
            type="button"
            onClick={() => setPageMode('sandbox')}
            style={{
              padding: '8px 16px', background: pageMode === 'sandbox' ? '#fff' : 'transparent',
              color: pageMode === 'sandbox' ? '#000' : 'var(--text-muted)',
              border: '1px solid', borderColor: pageMode === 'sandbox' ? '#fff' : 'var(--border-contrast)',
              borderRadius: '4px', fontSize: 12, fontFamily: 'var(--font-mono)', fontWeight: 700, cursor: 'pointer'
            }}
          >
            {t('tab_sandbox')}
          </button>

          <button
            type="button"
            onClick={() => setPageMode('doc')}
            style={{
              padding: '8px 16px', background: pageMode === 'doc' ? '#fff' : 'transparent',
              color: pageMode === 'doc' ? '#000' : 'var(--text-muted)',
              border: '1px solid', borderColor: pageMode === 'doc' ? '#fff' : 'var(--border-contrast)',
              borderRadius: '4px', fontSize: 12, fontFamily: 'var(--font-mono)', fontWeight: 700, cursor: 'pointer'
            }}
          >
            {t('tab_doc')}
          </button>
        </div>

        {/* MODE 1: Interactive Playground & Sandbox */}
        {pageMode === 'sandbox' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)', gap: '2rem', alignItems: 'stretch' }}>
            {/* Left Column: Live Rendered Component Sandbox */}
            <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', borderRadius: '6px', overflow: 'hidden' }}>
              <div style={{ background: 'var(--bg-element)', borderBottom: '1px solid var(--border-contrast)', padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#fff', fontWeight: 700 }}>
                  {t('label_shadow_dom')}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-subtle)' }}>
                  {t('label_updates_live')}
                </span>
              </div>
              <div style={{ padding: '1.75rem', background: '#060606', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                {compMeta.renderPreview(currentProps)}
              </div>
            </div>

            {/* Right Column: Clean Code Editor with Manifest JSON Toggle */}
            <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', borderRadius: '6px', overflow: 'hidden' }}>
              <div style={{ background: 'var(--bg-element)', borderBottom: '1px solid var(--border-contrast)', padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#fff', fontWeight: 700 }}>
                  {codeMode === 'vnr' ? t('label_vnr_editor') : t('label_manifest')}
                </span>

                <button
                  type="button"
                  onClick={() => setCodeMode(prev => prev === 'vnr' ? 'json' : 'vnr')}
                  style={{
                    padding: '3px 10px', background: 'var(--bg-surface)', color: '#fff',
                    border: '1px solid var(--border-contrast)', borderRadius: '3px',
                    fontSize: 11, fontFamily: 'var(--font-mono)', fontWeight: 600, cursor: 'pointer'
                  }}
                >
                  {codeMode === 'vnr' ? t('btn_see_manifest') : t('btn_see_vnr')}
                </button>
              </div>

              {/* Code Content Area */}
              <div style={{ flexGrow: 1, background: '#060606', padding: '1rem', position: 'relative' }}>
                {codeMode === 'vnr' ? (
                  <div className="code-editor-wrapper">
                    {/* Syntax Highlighted Color Overlay underneath */}
                    <pre ref={preRef} className="code-editor-pre">
                      <code>
                        {vnrCode.split('\n').map((line, i) => (
                          <div key={i} dangerouslySetInnerHTML={{ __html: colorizeVnrLine(line) || '&nbsp;' }} />
                        ))}
                      </code>
                    </pre>

                    {/* Transparent Editable Textarea overlay on top */}
                    <textarea
                      ref={textareaRef}
                      value={vnrCode}
                      onChange={e => setVnrCode(e.target.value)}
                      onScroll={handleScroll}
                      spellCheck={false}
                      className="code-editor-textarea"
                    />
                  </div>
                ) : (
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.75, overflowX: 'auto', padding: '4px' }}>
                    {compiledJson.split('\n').map((line, i) => (
                      <div key={i} className="mono-terminal-line" dangerouslySetInnerHTML={{ __html: colorizeJsonLine(line) }} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: Clean Technical Markdown Manual */}
        {pageMode === 'doc' && (
          <MarkdownDocViewer url={rawUrl} />
        )}
      </main>

      <Footer />
    </div>
  )
}
