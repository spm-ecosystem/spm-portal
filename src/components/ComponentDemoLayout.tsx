import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import MarkdownDocViewer from './MarkdownDocViewer'
import { highlightCodeBlock } from '../utils/codeHighlighter'

export interface PropRow {
  name: string
  type: string
  desc: string
}

export interface ComponentDemoLayoutProps {
  name: string
  category?: string
  description: string
  vnrExample: string
  docUrl: string
  propsContract: PropRow[]
  useCases: string[]
  controls?: React.ReactNode
  children: React.ReactNode
}

function ControlBar({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: '12px 16px',
        background: '#0a0a0a',
        borderBottom: '1px solid var(--border-contrast)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
        fontSize: 12,
      }}
    >
      {children}
    </div>
  )
}

function generateManifestJson(compName: string, vnr: string): string {
  const selectorMatch = vnr.match(/reconstruct\s+"([^"]+)"/)
  const childSelectorMatch = vnr.match(/selector:\s+"([^"]+)"/)

  const manifestObj = {
    reconstructs: [
      {
        containerSelector: selectorMatch ? selectorMatch[1] : '.legacy-container',
        layoutComponent: compName,
        props: {
          style: 'max-width: 1100px; margin: 0 auto;',
        },
        children: [
          {
            name: 'items',
            selector: childSelectorMatch ? childSelectorMatch[1] : 'tr.item-row',
            propsMap: {
              title: 'a | text',
              url: 'a | attr:href',
            },
          },
        ],
      },
    ],
  }
  return JSON.stringify(manifestObj, null, 2)
}

export default function ComponentDemoLayout({
  name,
  category = 'Dedicated Components',
  description,
  vnrExample,
  docUrl,
  propsContract,
  useCases,
  controls,
  children,
}: ComponentDemoLayoutProps) {
  const [activeTab, setActiveTab] = useState<'sandbox' | 'docs'>('sandbox')
  const [specView, setSpecView] = useState<'vnr' | 'manifest'>('vnr')

  const codeToShow = specView === 'vnr' ? vnrExample.trim() : generateManifestJson(name, vnrExample)
  const highlightedCode = highlightCodeBlock(codeToShow)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-absolute)' }}>
      <Navbar />

      <main style={{ flex: 1, maxWidth: 1100, margin: '0 auto', padding: '2.5rem 2rem 6rem', width: '100%' }}>
        {/* Top Breadcrumb & Title */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link
            to="/components"
            className="surface-link"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              marginBottom: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--text-subtle)',
              textDecoration: 'none',
            }}
          >
            ← Component Catalog
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <h1 className="page-title" style={{ fontSize: '2rem', margin: 0, color: '#ffffff', fontWeight: 800 }}>
              {name}
            </h1>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-contrast)',
                padding: '2px 8px',
                borderRadius: 4,
                color: 'var(--text-muted)',
              }}
            >
              {category}
            </span>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: 0, maxWidth: 720, lineHeight: 1.6 }}>
            {description}
          </p>
        </div>

        {/* Tab switcher: Sandbox vs Technical Documentation */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            borderBottom: '1px solid var(--border-contrast)',
            marginBottom: '2rem',
            paddingBottom: '0.5rem',
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('sandbox')}
            style={{
              padding: '8px 18px',
              background: activeTab === 'sandbox' ? '#ffffff' : 'transparent',
              color: activeTab === 'sandbox' ? '#000000' : 'var(--text-muted)',
              border: '1px solid',
              borderColor: activeTab === 'sandbox' ? '#ffffff' : 'var(--border-contrast)',
              borderRadius: '4px',
              fontSize: 12,
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            Interactive Sandbox
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('docs')}
            style={{
              padding: '8px 18px',
              background: activeTab === 'docs' ? '#ffffff' : 'transparent',
              color: activeTab === 'docs' ? '#000000' : 'var(--text-muted)',
              border: '1px solid',
              borderColor: activeTab === 'docs' ? '#ffffff' : 'var(--border-contrast)',
              borderRadius: '4px',
              fontSize: 12,
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            Technical Spec (.md)
          </button>
        </div>

        {/* TAB 1: Live Sandbox & Veneer Example */}
        {activeTab === 'sandbox' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Live Interactive Sandbox Box */}
            <section style={{ display: 'flex', flexDirection: 'column', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', borderRadius: '6px', overflow: 'hidden' }}>
              <div
                style={{
                  background: 'var(--bg-element)',
                  borderBottom: '1px solid var(--border-contrast)',
                  padding: '10px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffffff' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#ffffff', fontWeight: 700 }}>
                    Live Component Demonstration (@spm/components)
                  </span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-subtle)' }}>
                  Shadow DOM Ready
                </span>
              </div>

              {controls && <ControlBar>{controls}</ControlBar>}

              <div
                onClickCapture={(e) => {
                  const target = e.target as HTMLElement
                  const anchor = target.closest('a')
                  if (anchor) {
                    e.preventDefault()
                    e.stopPropagation()
                  }
                }}
                style={{ padding: '2rem', background: 'var(--bg-surface)', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 280 }}
              >
                {children}
              </div>
            </section>

            {/* Veneer Spec & Manifest JSON Panel */}
            <section style={{ display: 'flex', flexDirection: 'column', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', borderRadius: '6px', overflow: 'hidden' }}>
              <div
                style={{
                  background: 'var(--bg-element)',
                  borderBottom: '1px solid var(--border-contrast)',
                  padding: '10px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#ffffff', fontWeight: 700 }}>
                    {specView === 'vnr' ? 'Veneer Spec Example (.vnr)' : 'Compiled Manifest (manifest.json)'}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => setSpecView('vnr')}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      background: specView === 'vnr' ? '#ffffff' : 'var(--bg-surface)',
                      color: specView === 'vnr' ? '#000000' : 'var(--text-muted)',
                      border: '1px solid',
                      borderColor: specView === 'vnr' ? '#ffffff' : 'var(--border-contrast)',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    .vnr (Veneer Spec)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSpecView('manifest')}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      background: specView === 'manifest' ? '#ffffff' : 'var(--bg-surface)',
                      color: specView === 'manifest' ? '#000000' : 'var(--text-muted)',
                      border: '1px solid',
                      borderColor: specView === 'manifest' ? '#ffffff' : 'var(--border-contrast)',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    manifest.json
                  </button>
                </div>
              </div>

              <div style={{ padding: '1.25rem', background: '#09090b', overflowX: 'auto' }}>
                <pre
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: '#f4f4f5',
                  }}
                  dangerouslySetInnerHTML={{ __html: highlightedCode }}
                />
              </div>
            </section>

            {/* When to Use */}
            {useCases && useCases.length > 0 && (
              <section>
                <h2 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>When to Use</h2>
                <div style={{ display: 'grid', gap: 1, background: 'var(--border-contrast)', border: '1px solid var(--border-contrast)', borderRadius: 4, overflow: 'hidden' }}>
                  {useCases.map(uc => (
                    <p key={uc} style={{ background: 'var(--bg-surface)', color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6, margin: 0, padding: '0.9rem 1rem' }}>
                      • {uc}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* Props Contract */}
            {propsContract && propsContract.length > 0 && (
              <section>
                <h2 style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>Props Contract</h2>
                <div style={{ border: '1px solid var(--border-contrast)', borderRadius: '6px', overflow: 'hidden', background: 'var(--bg-surface)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ background: 'var(--bg-element)', borderBottom: '1px solid var(--border-contrast)' }}>
                        <th style={{ padding: '10px 16px', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em', width: '22%' }}>Prop Name</th>
                        <th style={{ padding: '10px 16px', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em', width: '25%' }}>TypeScript Type</th>
                        <th style={{ padding: '10px 16px', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {propsContract.map((p, i) => (
                        <tr
                          key={p.name}
                          style={{
                            borderBottom: i < propsContract.length - 1 ? '1px solid var(--border-contrast)' : 'none',
                            transition: 'background 0.15s ease',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-element)')}
                          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                        >
                          <td style={{ padding: '12px 16px', verticalAlign: 'top' }}>
                            <span style={{ display: 'inline-block', background: 'rgba(255, 255, 255, 0.08)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.15)', padding: '2px 8px', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600 }}>
                              {p.name}
                            </span>
                          </td>
                          <td style={{ padding: '12px 16px', verticalAlign: 'top' }}>
                            <span style={{ display: 'inline-block', background: 'rgba(255, 255, 255, 0.04)', color: '#a1a1aa', border: '1px solid var(--border-contrast)', padding: '2px 8px', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                              {p.type}
                            </span>
                          </td>
                          <td style={{ padding: '12px 16px', color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.6, verticalAlign: 'top' }}>
                            {p.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </div>
        )}

        {/* TAB 2: Technical Markdown Documentation */}
        {activeTab === 'docs' && (
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', borderRadius: '6px', padding: '2rem' }}>
            <MarkdownDocViewer url={docUrl} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
