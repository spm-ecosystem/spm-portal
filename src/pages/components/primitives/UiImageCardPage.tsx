import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { UiImageCard } from '@spm/components/primitive/UiImageCard'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'

export default function UiImageCardPage() {
  const [aspectRatio, setAspectRatio] = useState<'square' | 'video' | 'portrait' | 'auto'>('square')
  const [showTitle, setShowTitle] = useState(true)

  const vnrExample = `reconstruct ".gallery-item" -> UiImageCard {
  width: "220px";
  aspectRatio: "${aspectRatio}";
  showTitle: ${showTitle};

  bind id:       "a.card | attr:id";
  bind imageUrl: "img.thumb | attr:src";
  bind linkUrl:  "a.card | attr:href";
  bind title:    "span.title | text";
}`

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Aspect Ratio:
          </span>
          <SegmentedToggle<'square' | 'video' | 'portrait' | 'auto'>
            size="sm"
            options={[
              { id: 'square', label: 'Square (1:1)' },
              { id: 'video', label: 'Video (16:9)' },
              { id: 'portrait', label: 'Portrait (3:4)' },
              { id: 'auto', label: 'Auto' },
            ]}
            value={aspectRatio}
            onChange={(val) => setAspectRatio(val)}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Caption:
          </span>
          <SegmentedToggle<'on' | 'off'>
            size="sm"
            options={[
              { id: 'on', label: 'On' },
              { id: 'off', label: 'Off' },
            ]}
            value={showTitle ? 'on' : 'off'}
            onChange={(val) => setShowTitle(val === 'on')}
          />
        </div>
      </div>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="UiImageCard"
      category="Primitive Component"
      description="Card primitive featuring image media, title caption, aspect ratio controls, and fallback handling."
      docUrl="/src/docs/UiImageCard.md"
      useCases={[
        'Render gallery thumbnail grids with unified aspect ratios.',
        'Display image cards with hover scaling and optional title captions.',
        'Automatically catch 404/broken images and display placeholder fallback icons.',
      ]}
      propsContract={[
        { name: 'imageUrl', type: 'string', desc: 'Source URL for card thumbnail image (Required).' },
        { name: 'linkUrl', type: 'string', desc: 'Target hyperlink URL when clicking card (Required).' },
        { name: 'title', type: 'string', desc: 'Title text used for caption and tooltip attributes (Required).' },
        { name: 'id', type: 'string', desc: 'Unique DOM identifier assigned to card element (Required).' },
        { name: 'width', type: 'string', desc: 'Width of card container (defaults to "160px").' },
        { name: 'aspectRatio', type: "'square' | 'video' | 'portrait' | 'auto'", desc: 'Predefined aspect ratio constraint (defaults to "square").' },
        { name: 'showTitle', type: 'boolean', desc: 'Toggles rendering of bottom title caption block.' },
      ]}
      vnrExample={vnrExample}
      controls={controls}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', width: '100%' }}>
        <UiImageCard
          id="card-demo-1"
          imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80"
          linkUrl="#topology"
          title="Cluster Topology Diagram v2.4"
          width="220px"
          aspectRatio={aspectRatio}
          showTitle={showTitle}
        />
        <UiImageCard
          id="card-demo-2"
          imageUrl="invalid-image-url-for-fallback"
          linkUrl="#fallback"
          title="404 Asset Fallback Container"
          width="220px"
          aspectRatio={aspectRatio}
          showTitle={showTitle}
        />
      </div>
    </ComponentDemoLayout>
  )
}
