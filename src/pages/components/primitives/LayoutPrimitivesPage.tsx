import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { UiBox, UiFlexRow, UiFlexColumn, UiGrid, UiText, UiImage, UiLink } from '@spm/components/primitives/LayoutPrimitives'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'

export default function LayoutPrimitivesPage() {
  const [activePrimitive, setActivePrimitive] = useState<string>('all')

  const vnrExample = `reconstruct "#layout-grid" -> LayoutPrimitives {
  child box {
    selector: "div.container-box";
  }
}`

  const propsContract = [
    { name: 'UiBox', type: 'ContainerProps', desc: 'Generic box container supporting background, padding, and border styles.' },
    { name: 'UiFlexRow', type: 'FlexProps', desc: 'Flexbox row container for horizontal element alignment.' },
    { name: 'UiFlexColumn', type: 'FlexProps', desc: 'Flexbox column container for vertical element stacking.' },
    { name: 'UiGrid', type: 'GridProps', desc: 'CSS grid container for multi-column responsive item arrangements.' },
    { name: 'UiText', type: 'TextProps', desc: 'Typography wrapper with content prop and customizable font styling.' },
    { name: 'UiImage', type: 'ImageProps', desc: 'Responsive img element wrapper supporting src, alt, and fit modes.' },
    { name: 'UiLink', type: 'LinkProps', desc: 'Hyperlink anchor wrapper supporting href and target attributes.' },
  ]

  const useCases = [
    'Compose atomic page sections using standard flexbox and CSS grid layouts.',
    'Render responsive image elements with fallback alt text and object-fit modes.',
    'Wrap legacy HTML blocks into structured box containers inside Shadow DOM.',
  ]

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
          Primitive:
        </span>
        <SegmentedToggle
          size="sm"
          options={[
            { id: 'all', label: 'All' },
            { id: 'UiBox', label: 'Box' },
            { id: 'UiFlexRow', label: 'FlexRow' },
            { id: 'UiFlexColumn', label: 'FlexColumn' },
            { id: 'UiGrid', label: 'Grid' },
            { id: 'UiText', label: 'Text' },
            { id: 'UiImage', label: 'Image' },
            { id: 'UiLink', label: 'Link' },
          ]}
          value={activePrimitive}
          onChange={(val) => setActivePrimitive(val)}
        />
      </div>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="Layout Primitives"
      category="Primitive Components"
      description="Atomic layout building blocks including UiBox, UiFlexRow, UiFlexColumn, UiGrid, UiText, UiImage, and UiLink."
      vnrExample={vnrExample}
      docUrl="/src/docs/components.md"
      propsContract={propsContract}
      useCases={useCases}
      controls={controls}
    >
      <UiFlexColumn style={{ gap: '1.25rem', width: '100%', fontFamily: 'var(--font-mono)' }}>
        {(activePrimitive === 'all' || activePrimitive === 'UiBox') && (
          <UiBox style={{ padding: '1rem', background: 'var(--bg-element)', border: '1px solid var(--border-contrast)', borderRadius: 6 }}>
            <span style={{ display: 'block', marginBottom: 4, fontSize: 11, fontWeight: 700, color: '#ffffff' }}>UiBox</span>
            <UiText content="Generic box container supporting background, padding, and border styles." style={{ color: 'var(--text-muted)', fontSize: 12 }} />
          </UiBox>
        )}

        {(activePrimitive === 'all' || activePrimitive === 'UiFlexRow') && (
          <UiBox style={{ padding: '1rem', background: 'var(--bg-element)', border: '1px solid var(--border-contrast)', borderRadius: 6 }}>
            <span style={{ display: 'block', marginBottom: 8, fontSize: 11, fontWeight: 700, color: '#ffffff' }}>UiFlexRow</span>
            <UiFlexRow style={{ alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'var(--bg-surface)', padding: '6px 12px', borderRadius: 4, fontSize: 11, color: '#ffffff', border: '1px solid var(--border-contrast)' }}>Item Alpha</div>
              <div style={{ background: 'var(--bg-surface)', padding: '6px 12px', borderRadius: 4, fontSize: 11, color: '#ffffff', border: '1px solid var(--border-contrast)' }}>Item Beta</div>
              <UiLink href="#" style={{ color: '#ffffff', fontSize: 11, textDecoration: 'underline' }}>View Details</UiLink>
            </UiFlexRow>
          </UiBox>
        )}

        {(activePrimitive === 'all' || activePrimitive === 'UiFlexColumn') && (
          <UiBox style={{ padding: '1rem', background: 'var(--bg-element)', border: '1px solid var(--border-contrast)', borderRadius: 6 }}>
            <span style={{ display: 'block', marginBottom: 8, fontSize: 11, fontWeight: 700, color: '#ffffff' }}>UiFlexColumn</span>
            <UiFlexColumn style={{ gap: '6px' }}>
              <div style={{ background: 'var(--bg-surface)', padding: '6px 10px', borderRadius: 4, fontSize: 11, color: '#ffffff', border: '1px solid var(--border-contrast)' }}>Service Mesh Gateway</div>
              <div style={{ background: 'var(--bg-surface)', padding: '6px 10px', borderRadius: 4, fontSize: 11, color: '#ffffff', border: '1px solid var(--border-contrast)' }}>Worker Node Array</div>
            </UiFlexColumn>
          </UiBox>
        )}

        {(activePrimitive === 'all' || activePrimitive === 'UiGrid') && (
          <UiBox style={{ padding: '1rem', background: 'var(--bg-element)', border: '1px solid var(--border-contrast)', borderRadius: 6 }}>
            <span style={{ display: 'block', marginBottom: 8, fontSize: 11, fontWeight: 700, color: '#ffffff' }}>UiGrid</span>
            <UiGrid style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              <div style={{ background: 'var(--bg-surface)', padding: '10px', borderRadius: 4, fontSize: 11, textAlign: 'center', color: '#ffffff', border: '1px solid var(--border-contrast)' }}>Node Alpha</div>
              <div style={{ background: 'var(--bg-surface)', padding: '10px', borderRadius: 4, fontSize: 11, textAlign: 'center', color: '#ffffff', border: '1px solid var(--border-contrast)' }}>Node Beta</div>
              <div style={{ background: 'var(--bg-surface)', padding: '10px', borderRadius: 4, fontSize: 11, textAlign: 'center', color: '#ffffff', border: '1px solid var(--border-contrast)' }}>Node Gamma</div>
            </UiGrid>
          </UiBox>
        )}

        {(activePrimitive === 'all' || activePrimitive === 'UiText') && (
          <UiBox style={{ padding: '1rem', background: 'var(--bg-element)', border: '1px solid var(--border-contrast)', borderRadius: 6 }}>
            <span style={{ display: 'block', marginBottom: 8, fontSize: 11, fontWeight: 700, color: '#ffffff' }}>UiText</span>
            <UiText content="Typography wrapper with content prop and customizable font styling." style={{ color: '#ffffff', fontSize: 12, fontWeight: 600 }} />
          </UiBox>
        )}

        {(activePrimitive === 'all' || activePrimitive === 'UiImage') && (
          <UiBox style={{ padding: '1rem', background: 'var(--bg-element)', border: '1px solid var(--border-contrast)', borderRadius: 6 }}>
            <span style={{ display: 'block', marginBottom: 8, fontSize: 11, fontWeight: 700, color: '#ffffff' }}>UiImage</span>
            <UiFlexRow style={{ alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <UiImage
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
                alt="System Architecture Illustration"
                style={{ width: 140, height: 80, objectFit: 'cover', borderRadius: 4, border: '1px solid var(--border-contrast)' }}
              />
              <UiFlexColumn style={{ gap: '4px' }}>
                <UiText content="System Architecture Illustration" style={{ color: '#ffffff', fontSize: 12, fontWeight: 700 }} />
                <UiText content="Raw responsive img element wrapper with alt prop and CSS object-fit support." style={{ color: 'var(--text-muted)', fontSize: 11 }} />
              </UiFlexColumn>
            </UiFlexRow>
          </UiBox>
        )}

        {(activePrimitive === 'all' || activePrimitive === 'UiLink') && (
          <UiBox style={{ padding: '1rem', background: 'var(--bg-element)', border: '1px solid var(--border-contrast)', borderRadius: 6 }}>
            <span style={{ display: 'block', marginBottom: 8, fontSize: 11, fontWeight: 700, color: '#ffffff' }}>UiLink</span>
            <UiLink href="#" style={{ color: '#ffffff', fontSize: 12, textDecoration: 'underline', fontWeight: 600 }}>
              Interactive Anchor Hyperlink Wrapper
            </UiLink>
          </UiBox>
        )}
      </UiFlexColumn>
    </ComponentDemoLayout>
  )
}
