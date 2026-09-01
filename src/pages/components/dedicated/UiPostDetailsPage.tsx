import { useState } from 'react'
import { UiPostDetails } from '@spm/components/dedicated/UiPostDetails'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'
import { Badge } from '../../../components/ui/Badge'

type MediaMode = 'video' | 'carousel' | 'hero'

export default function UiPostDetailsPage() {
  const [mediaMode, setMediaMode] = useState<MediaMode>('video')
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  const carouselImages = [
    {
      url: 'https://picsum.photos/800/500?random=10',
      caption: 'SPM Shadow DOM Component Architecture Overview',
    },
    {
      url: 'https://picsum.photos/800/500?random=11',
      caption: 'Isolated CSS Variable Theme Engine Diagnostics',
    },
    {
      url: 'https://picsum.photos/800/500?random=12',
      caption: 'Veneer Spec AST Compiler Resolver Pipeline',
    },
  ]

  const vnrExample = `reconstruct "#legacy-post-container" -> UiPostDetails {
  showSearch: true;
  searchPlaceholder: "Search tags...";

  bind imageUrl: "#post-hero-img | attr:src";
  bind imageAlt: "#post-hero-img | attr:alt";
  bind statisticsHtml: "#post-sidebar-meta | html";

  child tags {
    selector: "div.tag-container a";
    bind name:  "self | text";
    bind count: "span.badge | text";
    bind type:  "self | attr:data-type";
    bind url:   "self | attr:href";
  }

  child buttons {
    selector: "div.post-actions a";
    bind label:   "self | text";
    bind url:     "self | attr:href";
    bind variant: "self | attr:data-variant";
  }
}`

  const propsContract = [
    { name: 'imageUrl', type: 'string', desc: 'URL of the main image asset displayed in the post view.' },
    { name: 'imageAlt', type: 'string', desc: 'Alternative text for accessibility.' },
    { name: 'tags', type: 'TagItem[]', desc: 'Categorized tags list rendered in the metadata sidebar.' },
    { name: 'statisticsHtml', type: 'string', desc: 'Raw HTML string preserved for custom post statistics.' },
    { name: 'buttons', type: 'GenericButtonItem[]', desc: 'Action buttons with explicit variant support (primary, secondary, ghost).' },
    { name: 'showSearch', type: 'boolean', desc: 'Displays sidebar search field.' },
    { name: 'mediaSlot', type: 'ReactNode', desc: 'Slot for custom rich media viewports (video, carousel, 3D model).' },
    { name: 'sidebarSlot', type: 'ReactNode', desc: 'Custom sidebar content slot.' },
    { name: 'actionsSlot', type: 'ReactNode', desc: 'Custom action toolbar slot.' },
    { name: 'footerSlot', type: 'ReactNode', desc: 'Custom content slot below main viewport.' },
  ]

  const useCases = [
    'Reconstruct article and post details pages supporting images, video embeds, carousels, or 3D models via mediaSlot.',
    'Consolidate metadata, tags, and action buttons using explicit variants (primary, secondary, ghost).',
    'Switch media viewports dynamically with ControlBar controls.',
    'Extend layouts with custom sidebars, action toolbars, and post footers.',
  ]

  const sampleTags = [
    { name: 'Veneer Specification', count: '1,200', type: 'modules', url: '#' },
    { name: 'Shadow DOM Host', count: '850', type: 'technology', url: '#' },
    { name: 'Core Compiler', count: '430', type: 'modules', url: '#' },
    { name: 'TypeScript React', count: '910', type: 'technology', url: '#' },
  ]

  const sampleButtons = [
    { label: 'Previous Spec', url: '#', variant: 'primary' as const },
    { label: 'Next Spec', url: '#', variant: 'primary' as const },
    { label: 'Download Spec PDF', url: '#', variant: 'secondary' as const },
  ]

  const sampleStatsHtml = `
    <div style="font-family: var(--font-mono); font-size: 11px; line-height: 1.8;">
      <div><strong>Article ID:</strong> VNR-2026-0831</div>
      <div><strong>Total Views:</strong> 24,850</div>
      <div><strong>License:</strong> Apache-2.0</div>
    </div>
  `

  return (
    <ComponentDemoLayout
      name="UiPostDetails"
      category="Dedicated Components"
      description="Rich article details page component with mediaSlot switcher (Video Player, Photo Carousel, Hero Image), sidebarSlot author bio, actionsSlot custom triggers, and explicit button variants."
      vnrExample={vnrExample}
      docUrl="/src/docs/UiPostDetails.md"
      propsContract={propsContract}
      useCases={useCases}
    >
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Media View:
            </span>
            <SegmentedToggle<MediaMode>
              size="sm"
              options={[
                { id: 'video', label: 'Video Player' },
                { id: 'carousel', label: 'Carousel' },
                { id: 'hero', label: 'Hero Image' },
              ]}
              value={mediaMode}
              onChange={(mode) => setMediaMode(mode)}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Badge variant="default" size="sm">
              {mediaMode.toUpperCase()} MODE
            </Badge>
          </div>
        </ControlBar>

        <div style={{ width: '100%', border: '1px solid var(--border-contrast)', borderRadius: '8px', overflow: 'hidden' }}>
          <UiPostDetails
            imageUrl={mediaMode === 'hero' ? 'https://picsum.photos/800/500?random=10' : undefined}
            imageAlt="SPM Architecture Overview"
            tags={sampleTags}
            buttons={sampleButtons}
            statisticsHtml={sampleStatsHtml}
            showSearch={true}
            searchPlaceholder="Search post tags..."
            mediaSlot={
              mediaMode === 'video' ? (
                <div
                  style={{
                    width: '100%',
                    height: '380px',
                    background: 'var(--bg-absolute)',
                    borderRadius: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '16px',
                    boxSizing: 'border-box',
                    border: '1px solid var(--border-contrast)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-mono)' }}>
                      COMPILER_ARCHITECTURE_WALKTHROUGH.MP4
                    </span>
                    <Badge variant="default" size="sm">HD</Badge>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      zIndex: 2,
                    }}
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    <div
                      style={{
                        padding: '10px 20px',
                        background: '#ffffff',
                        color: '#000000',
                        fontWeight: 700,
                        fontSize: '12px',
                        fontFamily: 'var(--font-mono)',
                        borderRadius: '4px',
                      }}
                    >
                      {isPlaying ? 'PAUSE' : 'PLAY'}
                    </div>
                  </div>

                  <div style={{ zIndex: 2 }}>
                    <div style={{ width: '100%', height: '3px', background: 'var(--bg-element)', borderRadius: '2px', marginBottom: '8px', position: 'relative' }}>
                      <div style={{ width: isPlaying ? '65%' : '30%', height: '100%', background: '#ffffff', borderRadius: '2px' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>
                      <span>{isPlaying ? '04:12 / 12:40' : '01:45 / 12:40'}</span>
                      <span>1080p</span>
                    </div>
                  </div>
                </div>
              ) : mediaMode === 'carousel' ? (
                <div
                  style={{
                    width: '100%',
                    height: '380px',
                    background: 'var(--bg-surface)',
                    borderRadius: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid var(--border-contrast)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <img
                    src={carouselImages[activeSlide].url}
                    alt="Carousel Slide"
                    style={{
                      width: '100%',
                      height: '320px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div style={{ padding: '10px 16px', background: 'var(--bg-absolute)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ fontSize: '11px', color: '#ffffff', fontWeight: 600 }}>
                      Slide {activeSlide + 1} of {carouselImages.length}: {carouselImages[activeSlide].caption}
                    </span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : carouselImages.length - 1))}
                        style={{ background: 'var(--bg-element)', color: '#fff', border: '1px solid var(--border-contrast)', borderRadius: '3px', padding: '2px 8px', fontSize: '11px', cursor: 'pointer' }}
                      >
                        Prev
                      </button>
                      <button
                        onClick={() => setActiveSlide((prev) => (prev < carouselImages.length - 1 ? prev + 1 : 0))}
                        style={{ background: 'var(--bg-element)', color: '#fff', border: '1px solid var(--border-contrast)', borderRadius: '3px', padding: '2px 8px', fontSize: '11px', cursor: 'pointer' }}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              ) : undefined
            }
            sidebarSlot={
              <div
                style={{
                  background: 'var(--bg-surface)',
                  padding: '14px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-contrast)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  Dr. Akira Vance
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '10px' }}>
                  Principal Compiler Architect
                </div>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: 1.5 }}>
                  Author of Veneer Specification v2.4 and Shadow DOM isolation rules.
                </p>
                <button
                  style={{
                    width: '100%',
                    padding: '6px',
                    borderRadius: '4px',
                    background: '#ffffff',
                    color: '#000000',
                    border: 'none',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Follow Author
                </button>
              </div>
            }
            actionsSlot={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  style={{
                    padding: '6px 12px',
                    borderRadius: '4px',
                    background: '#ffffff',
                    color: '#000000',
                    border: 'none',
                    fontSize: '11px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                  }}
                >
                  Bookmark Spec
                </button>
              </div>
            }
            footerSlot={
              <div
                style={{
                  padding: '12px 16px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-contrast)',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div>
                  Declarative specifications are isolated via Shadow DOM boundary #VNR-2026.
                </div>
                <Badge variant="default" size="sm">
                  Apache-2.0
                </Badge>
              </div>
            }
          />
        </div>
      </div>
    </ComponentDemoLayout>
  )
}
