import { useState } from 'react'
import { UiNavHeader } from '@spm/components/dedicated/UiNavHeader'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'

export default function UiNavHeaderPage() {
  const [isSticky, setIsSticky] = useState(true)
  const [layoutMode, setLayoutMode] = useState<'standard' | 'stacked' | 'minimal'>('standard')

  const vnrExample = `reconstruct "header#site-header" -> UiNavHeader {
  siteName: "SPM Platform";
  logoUrl: "https://raw.githubusercontent.com/spm-ecosystem/.github/main/profile/spm_logo.svg";
  logoHref: "/";
  sticky: ${isSticky};
  layout: "${layoutMode}";

  child primaryLinks {
    selector: "nav.main-nav a";
    bind label: "self | text";
    bind url:   "self | attr:href";
  }

  child secondaryLinks {
    selector: "div.user-actions a";
    bind label: "self | text";
    bind url:   "self | attr:href";
  }
}`

  const propsContract = [
    { name: 'siteName', type: 'string', desc: 'Name of the website displayed next to the logo.' },
    { name: 'logoUrl', type: 'string', desc: 'URL of the logo image asset.' },
    { name: 'logoHref', type: 'string', desc: 'Target link for clicking the brand logo (default: "/").' },
    { name: 'primaryLinks', type: 'NavLink[]', desc: 'Main navigation items rendered in the primary navigation zone.' },
    { name: 'secondaryLinks', type: 'NavLink[]', desc: 'Action links rendered in the right/secondary section.' },
    { name: 'items', type: 'NavLink[]', desc: 'Fallback array of navigation links.' },
    { name: 'layout', type: '"standard" | "stacked" | "minimal"', desc: 'Visual layout variant of the header.' },
    { name: 'sticky', type: 'boolean', desc: 'Fixes header to top of viewport during scrolling.' },
    { name: 'hideOnMobile', type: 'boolean', desc: 'Hides the navigation header on small screen viewports.' },
    { name: 'mobileBreakpoint', type: 'number', desc: 'Pixel width threshold for mobile layout switching (default: 720).' },
  ]

  const useCases = [
    'Replace clunky, legacy table headers with a modern glassmorphic sticky top navigation bar.',
    'Consolidate scattered top links, user profile shortcuts, and logos into a unified responsive header.',
    'Keep user navigation persistent across long scroll pages in Shadow DOM environments.',
  ]

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Layout:
          </span>
          <SegmentedToggle<'standard' | 'stacked' | 'minimal'>
            size="sm"
            options={[
              { id: 'standard', label: 'Standard' },
              { id: 'stacked', label: 'Stacked' },
              { id: 'minimal', label: 'Minimal' },
            ]}
            value={layoutMode}
            onChange={(val) => setLayoutMode(val)}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Position:
          </span>
          <SegmentedToggle<'sticky' | 'static'>
            size="sm"
            options={[
              { id: 'sticky', label: 'Sticky' },
              { id: 'static', label: 'Static' },
            ]}
            value={isSticky ? 'sticky' : 'static'}
            onChange={(val) => setIsSticky(val === 'sticky')}
          />
        </div>
      </div>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="UiNavHeader"
      category="Dedicated Components"
      description="Glassmorphic sticky header component providing brand logo alignment, primary link navigation, action shortcuts, and responsive mobile behavior."
      vnrExample={vnrExample}
      docUrl="/src/docs/UiNavHeader.md"
      propsContract={propsContract}
      useCases={useCases}
      controls={controls}
    >
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ width: '100%', height: 320, background: 'var(--bg-absolute)', borderRadius: '8px', border: '1px solid var(--border-contrast)', overflowY: 'auto', position: 'relative' }}>
          <UiNavHeader
            siteName="SPM Portal"
            logoUrl="https://raw.githubusercontent.com/spm-ecosystem/.github/main/profile/spm_logo.svg"
            logoHref="#"
            sticky={isSticky}
            layout={layoutMode}
            primaryLinks={[
              { label: 'Components', url: '#' },
              { label: 'Documentation', url: '#' },
              { label: 'Veneer Specification', url: '#' },
              { label: 'CLI Manifest', url: '#' },
            ]}
            secondaryLinks={[
              { label: 'Documentation', url: '#' },
              { label: 'GitHub Repository', url: '#' },
            ]}
          />

          <div style={{ padding: '1.5rem 1.25rem', fontFamily: 'var(--font-mono)' }}>
            <p style={{ color: 'var(--text-subtle)', fontSize: 12, margin: '0 0 1rem' }}>
              Scroll down inside container to test sticky header positioning and overlay glassmorphism:
            </p>
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} style={{ padding: '0.85rem 1rem', marginBottom: '0.75rem', background: 'var(--bg-surface)', borderRadius: 6, border: '1px solid var(--border-contrast)', fontSize: 12, color: 'var(--text-muted)' }}>
                Scroll content item #{idx + 1} — Declarative Veneer specification reconstructs headers dynamically inside Shadow DOM.
              </div>
            ))}
          </div>
        </div>
      </div>
    </ComponentDemoLayout>
  )
}
