import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { UiImageViewer } from '@spm/components/dedicated/UiImageViewer'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'

export default function UiImageViewerPage() {
  const [fit, setFit] = useState<'contain' | 'cover'>('contain')
  const [enableZoom, setEnableZoom] = useState(true)

  const vnrExample = `reconstruct "#media-viewer" -> UiImageViewer {
  fit: "${fit}";
  enableZoom: ${enableZoom};

  bind src: "img.hero | attr:src";
  bind alt: "img.hero | attr:alt";
}`

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Fit Mode:
          </span>
          <SegmentedToggle<'contain' | 'cover'>
            size="sm"
            options={[
              { id: 'contain', label: 'Contain' },
              { id: 'cover', label: 'Cover' },
            ]}
            value={fit}
            onChange={(val) => setFit(val)}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Zoom:
          </span>
          <SegmentedToggle<'on' | 'off'>
            size="sm"
            options={[
              { id: 'on', label: 'On' },
              { id: 'off', label: 'Off' },
            ]}
            value={enableZoom ? 'on' : 'off'}
            onChange={(val) => setEnableZoom(val === 'on')}
          />
        </div>
      </div>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="UiImageViewer"
      category="Primitive Component"
      description="Interactive image viewer primitive centering media with customizable fit modes, aspect-ratio fallback, and click-to-zoom controls."
      docUrl="/src/docs/UiImageViewer.md"
      useCases={[
        'Present full-container hero image media with dynamic aspect ratio fitting.',
        'Provide interactive click-to-zoom and fit mode toggles (contain vs cover).',
        'Detect extreme aspect ratios to prevent unintended cropping.',
      ]}
      propsContract={[
        { name: 'src', type: 'string', desc: 'Source URL of image to display.' },
        { name: 'alt', type: 'string', desc: 'Alt text for image element.' },
        { name: 'fit', type: "'contain' | 'cover'", desc: "CSS object-fit sizing behavior (defaults to 'contain')." },
        { name: 'enableZoom', type: 'boolean', desc: 'Enables click-to-zoom on image and overlay toggle fit button (defaults to true).' },
        { name: 'onFitChange', type: "(fit: 'contain' | 'cover') => void", desc: 'Callback fired when user toggles fit mode.' },
      ]}
      vnrExample={vnrExample}
      controls={controls}
    >
      <div style={{ width: '100%', height: 350, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <UiImageViewer
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
          alt="Infrastructure Dashboard Architecture Diagram"
          fit={fit}
          enableZoom={enableZoom}
          onFitChange={newFit => setFit(newFit)}
        />
      </div>
    </ComponentDemoLayout>
  )
}
