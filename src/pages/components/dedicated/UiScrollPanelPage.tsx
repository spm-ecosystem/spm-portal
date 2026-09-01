import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { UiScrollPanel } from '@spm/components/dedicated/UiScrollPanel'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'

export default function UiScrollPanelPage() {
  const [panelWidth, setPanelWidth] = useState<'280px' | '340px'>('280px')
  const [showSearch, setShowSearch] = useState(true)

  const vnrExample = `reconstruct "#side-panel" -> UiScrollPanel {
  width: "${panelWidth}";
  showSearch: ${showSearch};
  searchPlaceholder: "Filter system modules...";

  child tags {
    selector: "div.tag-list span.tag";
    bind name:  "self | text";
    bind type:  "self | attr:data-category";
    bind count: "span.badge | text";
  }

  child buttons {
    selector: "div.actions a";
    bind label: "self | text";
    bind url:   "self | attr:href";
  }
}`

  const propsContract = [
    { name: 'tags', type: 'TagItem[]', desc: 'Array of tag badges with name, count, type (category), and target url.' },
    { name: 'buttons', type: 'ButtonItem[]', desc: 'Action buttons grouped into primary and ghost variants.' },
    { name: 'statisticsHtml', type: 'string', desc: 'Raw HTML string rendered at the bottom for runtime metrics.' },
    { name: 'showSearch', type: 'boolean', desc: 'Renders an integrated search filter field at the top.' },
    { name: 'searchPlaceholder', type: 'string', desc: 'Placeholder text for search filter field.' },
    { name: 'width', type: 'string', desc: 'Width of the scroll panel container (default: "280px").' },
  ]

  const useCases = [
    'Create slide-over or lateral sidebars containing metadata and action links extracted from legacy DOM.',
    'Group tags into Modules, Technology, System Status, and Environments categories automatically.',
    'Keep search and action buttons accessible in a fixed lateral scroll area.',
  ]

  const sampleTags = [
    { name: 'Core Compiler', type: 'modules', count: '54' },
    { name: 'Shadow DOM Host', type: 'technology', count: '128' },
    { name: 'Security Gateway', type: 'system status', count: '92' },
    { name: 'TypeScript React', type: 'technology', count: '310' },
    { name: 'MV3 Interceptor', type: 'environments', count: '450' },
    { name: 'Vite Build Engine', type: 'tags', count: '67' },
  ]

  const sampleButtons = [
    { label: 'Inspect Component', url: '#' },
    { label: 'Export Config', url: '#' },
    { label: 'View Source', url: '#' },
    { label: 'Share Report', url: '#' },
  ]

  const sampleStats = `
    <div style="font-family: var(--font-mono); font-size: 11px; line-height: 1.6;">
      <div>Compiler: Veneer v2.4.0</div>
      <div>Target Host: Chromium Engine</div>
      <div>Deployed: 2026-08-31</div>
      <div>Status: Operational</div>
    </div>
  `

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Width:
          </span>
          <SegmentedToggle<'280px' | '340px'>
            size="sm"
            options={[
              { id: '280px', label: '280px' },
              { id: '340px', label: '340px' },
            ]}
            value={panelWidth}
            onChange={(val) => setPanelWidth(val)}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Search:
          </span>
          <SegmentedToggle<'on' | 'off'>
            size="sm"
            options={[
              { id: 'on', label: 'On' },
              { id: 'off', label: 'Off' },
            ]}
            value={showSearch ? 'on' : 'off'}
            onChange={(val) => setShowSearch(val === 'on')}
          />
        </div>
      </div>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="UiScrollPanel"
      category="Dedicated Components"
      description="Slide-over lateral scroll panel component for displaying contextual tags, grouped buttons, search field, and system runtime statistics."
      vnrExample={vnrExample}
      docUrl="/src/docs/UiScrollPanel.md"
      propsContract={propsContract}
      useCases={useCases}
      controls={controls}
    >
      <div style={{ width: '100%', height: 420, display: 'flex', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', borderRadius: '8px', overflow: 'hidden' }}>
        <UiScrollPanel
          width={panelWidth}
          showSearch={showSearch}
          searchPlaceholder="Filter system modules..."
          searchSubmitUrl="#"
          tags={sampleTags}
          buttons={sampleButtons}
          statisticsHtml={sampleStats}
        />
        <div style={{ flex: 1, padding: '2rem', background: 'var(--bg-absolute)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontFamily: 'var(--font-mono)' }}>
          Main Content Viewport Area
        </div>
      </div>
    </ComponentDemoLayout>
  )
}
