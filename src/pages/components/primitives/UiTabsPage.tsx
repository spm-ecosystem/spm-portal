import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { UiTabs } from '@spm/components/primitive/UiTabs'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'

export default function UiTabsPage() {
  const [variant, setVariant] = useState<'underline' | 'pill' | 'boxed'>('underline')
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal')

  const sampleTabs = [
    { id: 'general', label: 'General Info', badge: 3, contentHtml: '<p style="color:var(--text-muted);margin:0;font-family:var(--font-mono);font-size:12px;">Detailed overview of project architecture and deployment configuration.</p>' },
    { id: 'security', label: 'Security & Auth', badge: 'Active', contentHtml: '<p style="color:var(--text-muted);margin:0;font-family:var(--font-mono);font-size:12px;">CSRF token validation, headers, and credentials policies.</p>' },
    { id: 'settings', label: 'System Settings', contentHtml: '<p style="color:var(--text-muted);margin:0;font-family:var(--font-mono);font-size:12px;">Environment variables and global runtime flags.</p>' },
  ]

  const vnrExample = `reconstruct "#tabbed-view" -> UiTabs {
  variant: "${variant}";
  orientation: "${orientation}";

  child tabs {
    selector: "ul.nav-tabs li";
    bind id:          "a | attr:data-tab";
    bind label:       "a | text";
    bind contentHtml: "div.tab-panel | html";
  }
}`

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Variant:
          </span>
          <SegmentedToggle<'underline' | 'pill' | 'boxed'>
            size="sm"
            options={[
              { id: 'underline', label: 'Underline' },
              { id: 'pill', label: 'Pill' },
              { id: 'boxed', label: 'Boxed' },
            ]}
            value={variant}
            onChange={(val) => setVariant(val)}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Orientation:
          </span>
          <SegmentedToggle<'horizontal' | 'vertical'>
            size="sm"
            options={[
              { id: 'horizontal', label: 'Horizontal' },
              { id: 'vertical', label: 'Vertical' },
            ]}
            value={orientation}
            onChange={(val) => setOrientation(val)}
          />
        </div>
      </div>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="UiTabs"
      category="Primitive Component"
      description="Tab navigation switcher component supporting underline, pill, and boxed styling variants with horizontal and vertical orientations."
      docUrl="/src/docs/UiTabs.md"
      useCases={[
        'Switch local HTML tab panels without triggering full page reloads.',
        'Render navigational tab links with badges, disabled options, and URL sync.',
        'Customize tab appearance across underline, pill, and boxed style variants.',
      ]}
      propsContract={[
        { name: 'tabs', type: 'UiTabItem[]', desc: 'Array of tab descriptor items ({ id, label, href, badge, contentHtml, disabled }) (Required).' },
        { name: 'variant', type: "'underline' | 'pill' | 'boxed'", desc: "Visual appearance variant (defaults to 'underline')." },
        { name: 'orientation', type: "'horizontal' | 'vertical'", desc: "Layout direction for tab list and panels (defaults to 'horizontal')." },
        { name: 'activeParamName', type: 'string', desc: 'Optional URL search parameter key to synchronize active tab selection.' },
      ]}
      vnrExample={vnrExample}
      controls={controls}
    >
      <div style={{ width: '100%', maxWidth: 520 }}>
        <UiTabs
          tabs={sampleTabs}
          variant={variant}
          orientation={orientation}
        />
      </div>
    </ComponentDemoLayout>
  )
}
