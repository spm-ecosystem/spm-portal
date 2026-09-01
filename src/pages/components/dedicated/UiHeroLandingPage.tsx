import { useState } from 'react'
import { UiHeroLanding, HeroAlignVariant } from '@spm/components/dedicated/UiHeroLanding'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'
import { Badge } from '../../../components/ui/Badge'

export default function UiHeroLandingPage() {
  const [align, setAlign] = useState<HeroAlignVariant>('split-horizontal')
  const [showMedia, setShowMedia] = useState(true)
  const [mediaType, setMediaType] = useState<'terminal' | 'card' | 'stats'>('card')
  const [showGlow, setShowGlow] = useState(true)

  const vnrExample = `reconstruct "header#hero-landing" -> UiHeroLanding {
  siteName: "SPM Ecosystem";
  tagline: "Modern Web Reconstruction Engine";
  subtext: "Transform legacy web applications cleanly with zero backend code changes using declarative Veneer specifications.";
  ctaLabel: "Explore Documentation";
  ctaUrl: "/docs/getting-started";
  searchPlaceholder: "Search components or documentation...";
  searchSubmitUrl: "/search";
  align: "${align}";

  child primaryLinks {
    selector: "nav.hero-links a";
    bind label: "self | text";
    bind url:   "self | attr:href";
  }
}`

  const propsContract = [
    { name: 'siteName', type: 'string', desc: 'Main site title or brand header text.' },
    { name: 'logoUrl', type: 'string', desc: 'URL of logo graphic asset.' },
    { name: 'align', type: '"centered" | "split-horizontal" | "left-aligned" | "compact-banner"', desc: 'Alignment layout variant.' },
    { name: 'actionsSlot', type: 'ReactNode', desc: 'Multi-CTA or custom interactive buttons slot.' },
    { name: 'mediaSlot', type: 'ReactNode', desc: 'Hero illustration, video embed, or interactive canvas slot.' },
    { name: 'brandSlot', type: 'ReactNode', desc: 'Custom brand logo or header slot.' },
    { name: 'backgroundSlot', type: 'ReactNode', desc: 'Custom hero background slot (gradient, video, particles).' },
    { name: 'primaryLinks', type: 'NavLink[]', desc: 'Pill navigation links rendered at bottom of hero section.' },
  ]

  const useCases = [
    'Reconstruct dated homepage hero banners into modern header sections with 4 alignment layouts.',
    'Embed hero illustrations, video demos, or 3D graphics via mediaSlot.',
    'Provide multi-CTA action buttons using actionsSlot.',
    'Custom background gradients, ambient glowing particles, or video overlays using backgroundSlot.',
  ]

  const sampleLinks = [
    { label: 'Documentation', url: '#' },
    { label: 'Veneer Spec', url: '#' },
    { label: 'Component Catalog', url: '#' },
    { label: 'CLI Tooling', url: '#' },
  ]

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Layout:
          </span>
          <SegmentedToggle<HeroAlignVariant>
            size="sm"
            options={[
              { id: 'centered', label: 'Centered' },
              { id: 'split-horizontal', label: 'Split' },
              { id: 'left-aligned', label: 'Left Aligned' },
              { id: 'compact-banner', label: 'Banner' },
            ]}
            value={align}
            onChange={(val) => setAlign(val)}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Media:
          </span>
          <SegmentedToggle<'card' | 'terminal' | 'stats'>
            size="sm"
            options={[
              { id: 'card', label: 'Graphic' },
              { id: 'terminal', label: 'Shell' },
              { id: 'stats', label: 'Metrics' },
            ]}
            value={mediaType}
            onChange={(val) => setMediaType(val)}
          />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
          <input
            type="checkbox"
            checked={showGlow}
            onChange={(e) => setShowGlow(e.target.checked)}
          />
          Ambient Glow
        </label>
      </div>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="UiHeroLanding"
      category="Dedicated Components"
      description="Modern hero header section component supporting 4 layout alignment variants (Centered, Split Horizontal, Left Aligned, Compact Banner), multi-CTA action buttons via actionsSlot, interactive hero graphics via mediaSlot, and ambient glowing backgrounds."
      vnrExample={vnrExample}
      docUrl="/src/docs/UiHeroLanding.md"
      propsContract={propsContract}
      useCases={useCases}
      controls={controls}
    >
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ width: '100%', border: '1px solid var(--border-contrast)', borderRadius: '8px', overflow: 'hidden', minHeight: 480, background: 'var(--bg-absolute)', position: 'relative' }}>
          <UiHeroLanding
            align={align}
            siteName="SPM Platform Portal"
            logoUrl="https://raw.githubusercontent.com/spm-ecosystem/.github/main/profile/spm_logo.svg"
            logoHref="#"
            tagline="Next-Generation Web Reconstruction Engine"
            subtext="Transform legacy web applications cleanly inside isolated Shadow DOM trees using declarative Veneer specifications and pre-built React components."
            ctaLabel="Explore Components"
            ctaUrl="#"
            searchPlaceholder="Search 29 component specifications..."
            searchSubmitUrl="#"
            primaryLinks={sampleLinks}
            backgroundSlot={
              showGlow ? (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />
              ) : undefined
            }
            actionsSlot={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/spm-ecosystem"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '4px',
                    background: '#ffffff',
                    color: '#000000',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  GitHub Repository
                </a>
              </div>
            }
            mediaSlot={
              showMedia ? (
                mediaType === 'card' ? (
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '440px',
                      height: '260px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-contrast)',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      padding: '24px',
                      boxSizing: 'border-box',
                      textAlign: 'center',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: '15px', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                      Declarative Shadow DOM Reconstruction
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                      Renders isolated Web Components with 0% style leakage and 100% semantic accessibility.
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Badge variant="default" size="sm">Style Isolation</Badge>
                      <Badge variant="default" size="sm">0.12ms Latency</Badge>
                    </div>
                  </div>
                ) : mediaType === 'terminal' ? (
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '460px',
                      height: '260px',
                      background: 'var(--bg-absolute)',
                      border: '1px solid var(--border-contrast)',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{ background: 'var(--bg-surface)', padding: '6px 12px', borderBottom: '1px solid var(--border-contrast)', color: 'var(--text-subtle)' }}>
                      bash - spm compile
                    </div>
                    <div style={{ padding: '16px', color: '#ffffff', overflowY: 'auto', flex: 1, lineHeight: 1.7 }}>
                      <div>$ npx @spm/cli compile --spec veneer.vnr</div>
                      <div>Parsing AST rules...</div>
                      <div>Generating Shadow DOM components... [29 items]</div>
                      <div style={{ color: 'var(--text-muted)' }}>Theme CSS bundle minified (4.2 KB)</div>
                      <div>Server running on http://localhost:5173</div>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: '100%',
                      maxWidth: '440px',
                      height: '260px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-contrast)',
                      borderRadius: '8px',
                      padding: '20px',
                      boxSizing: 'border-box',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
                      Real-Time System Metrics
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div style={{ background: 'var(--bg-absolute)', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-contrast)' }}>
                        <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Shadow Roots</div>
                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff' }}>1,420</div>
                      </div>
                      <div style={{ background: 'var(--bg-absolute)', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-contrast)' }}>
                        <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Latency</div>
                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff' }}>0.14ms</div>
                      </div>
                    </div>
                    <div style={{ fontSize: '10px', color: 'var(--text-subtle)', textAlign: 'right' }}>
                      Telemetry Stream Active
                    </div>
                  </div>
                )
              ) : undefined
            }
          />
        </div>
      </div>
    </ComponentDemoLayout>
  )
}
