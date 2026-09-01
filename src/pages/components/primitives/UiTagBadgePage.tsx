import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { UiTagBadge } from '@spm/components/primitive/UiTagBadge'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'

export default function UiTagBadgePage() {
  const [variant, setVariant] = useState<string>('info')
  const [showControls, setShowControls] = useState(true)

  const vnrExample = `reconstruct ".tag-item" -> UiTagBadge {
  variant: "${variant}";

  bind label:     "a.tag-name | text";
  bind count:     "span.tag-count | text";
  bind href:      "a.tag-name | attr:href";
  bind addUrl:    "a.add-filter | attr:href";
  bind removeUrl: "a.sub-filter | attr:href";
}`

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Variant:
          </span>
          <SegmentedToggle
            size="sm"
            options={[
              { id: 'info', label: 'Info' },
              { id: 'success', label: 'Success' },
              { id: 'warning', label: 'Warning' },
              { id: 'danger', label: 'Danger' },
              { id: 'default', label: 'Default' },
            ]}
            value={variant}
            onChange={(val) => setVariant(val)}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Filter Actions:
          </span>
          <SegmentedToggle<'on' | 'off'>
            size="sm"
            options={[
              { id: 'on', label: 'On' },
              { id: 'off', label: 'Off' },
            ]}
            value={showControls ? 'on' : 'off'}
            onChange={(val) => setShowControls(val === 'on')}
          />
        </div>
      </div>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="UiTagBadge"
      category="Primitive Component"
      description="Categorized tag badge component with status color variants, count badges, and add/remove filter actions."
      docUrl="/src/docs/UiTagBadge.md"
      useCases={[
        'Render metadata tags and category pills with item count badges.',
        'Support filter add (+) and remove (-) actions for search sidebars.',
        'Apply color variants (default, info, success, warning, danger) to tag badges.',
      ]}
      propsContract={[
        { name: 'label', type: 'string', desc: 'Text label of tag or category (Required).' },
        { name: 'count', type: 'string | number', desc: 'Optional post/item count displayed next to tag label.' },
        { name: 'href', type: 'string', desc: 'Hyperlink URL for tag search navigation.' },
        { name: 'variant', type: 'string', desc: 'Status color variant (default, info, success, warning, danger).' },
        { name: 'addUrl', type: 'string', desc: 'Optional URL for + action button to append tag to current search filter.' },
        { name: 'removeUrl', type: 'string', desc: 'Optional URL for - action button to exclude tag from current search filter.' },
      ]}
      vnrExample={vnrExample}
      controls={controls}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', width: '100%', fontFamily: 'var(--font-mono)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <UiTagBadge
            label="kubernetes-cluster"
            count={1420}
            href="#"
            variant={variant}
            addUrl={showControls ? '#add' : undefined}
            removeUrl={showControls ? '#remove' : undefined}
          />
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '1rem', justifyContent: 'center' }}>
          <UiTagBadge label="system-core" count={12} variant="default" />
          <UiTagBadge label="api-gateway" count={85} variant="info" />
          <UiTagBadge label="deployed-v2" count={34} variant="success" />
          <UiTagBadge label="deprecated-api" count={5} variant="warning" />
          <UiTagBadge label="security-alert" count={2} variant="danger" />
        </div>
      </div>
    </ComponentDemoLayout>
  )
}
