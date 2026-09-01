import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { UiSplitLayout } from '@spm/components/dedicated/UiSplitLayout'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'

export default function UiSplitLayoutPage() {
  const [sidebarSide, setSidebarSide] = useState<'left' | 'right'>('left')
  const [mode, setMode] = useState<'docs' | 'gallery'>('docs')

  const vnrExample = `reconstruct "#article-view" -> UiSplitLayout {
  sidebarWidth: "300px";
  sidebarSide: "${sidebarSide}";
  collapsible: true;

  child sidebarContent {
    selector: "aside.doc-sidebar nav";
  }

  child mainContent {
    selector: "article.main-article";
  }
}`

  const propsContract = [
    { name: 'mainContent', type: 'ReactNode', desc: 'Primary main viewport content component or layout.' },
    { name: 'mainHtml', type: 'string', desc: 'HTML content rendered inside main viewport.' },
    { name: 'sidebarContent', type: 'ReactNode', desc: 'Custom sidebar content component (navigation tree, TOC, or meta).' },
    { name: 'sidebarHtml', type: 'string', desc: 'HTML string rendered inside sidebar pane.' },
    { name: 'sidebarWidth', type: 'string', desc: 'Width of the sidebar pane (default: "300px").' },
    { name: 'sidebarSide', type: '"left" | "right"', desc: 'Placement side of the sidebar pane.' },
    { name: 'collapsible', type: 'boolean', desc: 'Enables interactive collapse/expand toggle handle.' },
    { name: 'tags', type: 'TagItem[]', desc: 'Fallback metadata tag list for enterprise media layouts.' },
    { name: 'buttons', type: 'ButtonItem[]', desc: 'Fallback action buttons for enterprise media layouts.' },
  ]

  const useCases = [
    'Render modern documentation portals with interactive navigation sidebars and article views.',
    'Build dual-pane split IDE workspaces, file explorers, and code comparison viewers.',
    'Provide flexible, collapsible split screens with responsive mobile drawer fallbacks.',
  ]

  const sampleSidebar = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontFamily: 'var(--font-mono)' }}>
      <div>
        <p style={{ color: '#ffffff', fontSize: 11, fontWeight: 700, margin: '0 0 0.5rem', letterSpacing: '0.05em' }}>
          DOCUMENTATION INDEX
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {['1. Core Architecture', '2. Veneer Compiler DSL', '3. Shadow DOM Isolation', '4. Manifest Schema Rules', '5. Subagent Fine-Tuning'].map((item, i) => (
            <a
              key={item}
              href="#"
              onClick={e => e.preventDefault()}
              style={{
                display: 'block',
                padding: '6px 10px',
                fontSize: 11,
                borderRadius: 4,
                color: i === 0 ? '#ffffff' : 'var(--text-muted)',
                background: i === 0 ? 'var(--bg-element)' : 'transparent',
                border: i === 0 ? '1px solid var(--border-contrast)' : '1px solid transparent',
                textDecoration: 'none',
                fontWeight: i === 0 ? 700 : 400,
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-contrast)' }}>
        <p style={{ color: '#ffffff', fontSize: 11, fontWeight: 700, margin: '0 0 0.5rem', letterSpacing: '0.05em' }}>
          SYSTEM METADATA
        </p>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div>Compiler: C++17 Engine</div>
          <div>Version: v2.4.0-release</div>
          <div>Status: Production Ready</div>
        </div>
      </div>
    </div>
  )

  const sampleMain = (
    <div style={{ maxWidth: 680, fontFamily: 'var(--font-mono)' }}>
      <p style={{ fontSize: 11, color: 'var(--text-subtle)', margin: '0 0 0.5rem' }}>
        SYSTEM MANUAL / SPECIFICATION 01
      </p>
      <h2 style={{ fontSize: 20, color: '#ffffff', margin: '0 0 1rem', fontWeight: 800 }}>
        Veneer Spec Engine Architecture
      </h2>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: '1.25rem' }}>
        The Veneer Spec engine processes high-performance declarative frontend reconstructions. By compiling <code>.vnr</code> specifications into optimized <code>manifest.json</code> definitions via <code>spm-cli</code>, the extension mounts reactive React component trees inside isolated Shadow DOM hosts with zero server overhead.
      </p>
      <div style={{ padding: '1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', borderRadius: 6, marginBottom: '1.25rem' }}>
        <code style={{ fontSize: 11, color: '#ffffff' }}>
          spm compile theme/ -o dist/manifest.json --strict
        </code>
      </div>
    </div>
  )

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Mode:
          </span>
          <SegmentedToggle<'docs' | 'gallery'>
            size="sm"
            options={[
              { id: 'docs', label: 'Documentation' },
              { id: 'gallery', label: 'Media Explorer' },
            ]}
            value={mode}
            onChange={(val) => setMode(val)}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Sidebar:
          </span>
          <SegmentedToggle<'left' | 'right'>
            size="sm"
            options={[
              { id: 'left', label: 'Left' },
              { id: 'right', label: 'Right' },
            ]}
            value={sidebarSide}
            onChange={(val) => setSidebarSide(val)}
          />
        </div>
      </div>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="UiSplitLayout"
      category="Dedicated Components"
      description="Flexible dual-pane split layout supporting custom sidebar content, article viewports, collapsible panes, and enterprise media fallbacks."
      vnrExample={vnrExample}
      docUrl="/src/docs/UiSplitLayout.md"
      propsContract={propsContract}
      useCases={useCases}
      controls={controls}
    >
      <div style={{ width: '100%', height: 420 }}>
        {mode === 'docs' ? (
          <UiSplitLayout
            sidebarSide={sidebarSide}
            sidebarWidth="280px"
            collapsible={true}
            sidebarContent={sampleSidebar}
            mainContent={sampleMain}
            height="100%"
          />
        ) : (
          <UiSplitLayout
            sidebarSide={sidebarSide}
            sidebarWidth="280px"
            collapsible={true}
            imageSlot={[{ src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop', alt: 'Abstract Artwork' }]}
            tags={[
              { name: 'C++17 Compiler', url: '#' },
              { name: 'Shadow DOM', url: '#' },
              { name: 'React 19', url: '#' },
            ]}
            buttons={[
              { label: 'Download Spec PDF', url: '#' },
              { label: 'View Source Code', url: '#' },
            ]}
            height="100%"
          />
        )}
      </div>
    </ComponentDemoLayout>
  )
}
