import { useState } from 'react'
import { UiModernGridPage } from '@spm/components/dedicated/UiModernGridPage'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'
import { ControlBar } from '../../../components/ui/ControlBar'

export default function UiModernGridPageDemo() {
  const [gridMode, setGridMode] = useState<'2-col' | '3-col' | '4-col' | 'masonry'>('3-col')
  const [renderMode, setRenderMode] = useState<'custom' | 'standard'>('custom')

  const sampleItems = [
    {
      id: '1',
      title: 'React 19 Server Components',
      imageUrl: 'https://picsum.photos/350/220?random=1',
      linkUrl: '#',
      desc: 'Compiler specs and server component hydration boundaries.',
      badgeText: 'HYDRATION',
      badgeColor: '#ffffff',
      stars: '4.9',
    },
    {
      id: '2',
      title: 'Shadow DOM Encapsulation',
      imageUrl: 'https://picsum.photos/350/220?random=2',
      linkUrl: '#',
      desc: 'Scoped stylesheet injection with isolated style variables.',
      badgeText: 'ISOLATED',
      badgeColor: '#ffffff',
      stars: '4.8',
    },
    {
      id: '3',
      title: 'Veneer AST Compiler Resolver',
      imageUrl: 'https://picsum.photos/350/220?random=3',
      linkUrl: '#',
      desc: 'High-performance C++ AST resolver converting legacy markup.',
      badgeText: 'CORE ENGINE',
      badgeColor: '#ffffff',
      stars: '5.0',
    },
    {
      id: '4',
      title: 'TypeScript Manifest Validator',
      imageUrl: 'https://picsum.photos/350/220?random=4',
      linkUrl: '#',
      desc: 'Type-safe manifest schema validation and token binding.',
      badgeText: 'TYPE SAFE',
      badgeColor: '#ffffff',
      stars: '4.7',
    },
    {
      id: '5',
      title: 'Stripe Gateway Integration',
      imageUrl: 'https://picsum.photos/350/220?random=5',
      linkUrl: '#',
      desc: 'Webhook signature verification and idempotent payload dispatch.',
      badgeText: 'PAYMENTS',
      badgeColor: '#ffffff',
      stars: '4.9',
    },
    {
      id: '6',
      title: 'Vite Bundler Hot Reloading',
      imageUrl: 'https://picsum.photos/350/220?random=6',
      linkUrl: '#',
      desc: 'Instant Hot Module Replacement for subagent extensions.',
      badgeText: 'DEV TOOL',
      badgeColor: '#ffffff',
      stars: '4.6',
    },
  ]

  const sampleTags = [
    { name: 'Compiler', count: '142', type: 'technology', url: '#' },
    { name: 'Shadow DOM', count: '98', type: 'technology', url: '#' },
    { name: 'TypeScript', count: '45', type: 'modules', url: '#' },
    { name: 'Telemetry', count: '28', type: 'technology', url: '#' },
  ]

  const samplePageLinks = [
    { label: '1', url: '#' },
    { label: '2', url: '#' },
    { label: '3', url: '#' },
    { label: 'Next', url: '#' },
  ]

  const getGridColumns = () => {
    switch (gridMode) {
      case '2-col':
        return 'repeat(2, minmax(0, 1fr))'
      case '3-col':
        return 'repeat(3, minmax(0, 1fr))'
      case '4-col':
        return 'repeat(4, minmax(0, 1fr))'
      case 'masonry':
      default:
        return 'repeat(auto-fill, minmax(180px, 1fr))'
    }
  }

  const customRenderItem = (item: any, index: number) => (
    <div
      key={item.id || index}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-contrast)',
        borderRadius: '6px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.15s ease',
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '130px', overflow: 'hidden' }}>
        <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {item.badgeText && (
          <span
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              padding: '2px 6px',
              fontSize: '9px',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              borderRadius: '3px',
              background: '#000000',
              color: '#ffffff',
              border: '1px solid var(--border-contrast)',
              letterSpacing: '0.05em',
            }}
          >
            {item.badgeText}
          </span>
        )}
      </div>

      <div style={{ padding: '12px 14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '8px' }}>
        <div>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>{item.title}</h4>
          <p style={{ margin: 0, fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.4 }}>{item.desc}</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-contrast)', paddingTop: '8px', marginTop: '4px', fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          <span>Rating: {item.stars}</span>
          <button
            type="button"
            onClick={() => {}}
            style={{
              padding: '3px 8px',
              fontSize: '10px',
              borderRadius: '3px',
              background: '#ffffff',
              color: '#000000',
              border: 'none',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Inspect Spec
          </button>
        </div>
      </div>
    </div>
  )

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Layout:
          </span>
          <SegmentedToggle
            size="sm"
            options={[
              { id: '2-col', label: '2 Col' },
              { id: '3-col', label: '3 Col' },
              { id: '4-col', label: '4 Col' },
              { id: 'masonry', label: 'Masonry' },
            ]}
            value={gridMode}
            onChange={(val) => setGridMode(val as any)}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Card:
          </span>
          <SegmentedToggle
            size="sm"
            options={[
              { id: 'custom', label: 'Custom' },
              { id: 'standard', label: 'Standard' },
            ]}
            value={renderMode}
            onChange={(val) => setRenderMode(val as any)}
          />
        </div>
      </div>
    </ControlBar>
  )

  const vnrExample = `reconstruct "#legacy-gallery" -> UiModernGridPage {
  pageTitle: "SPM Module Gallery";
  sidebarWidth: "220px";
  showSearch: true;

  child items {
    selector: "div.gallery-item";
    bind id:       "self | attr:data-id";
    bind title:    "span.title | text";
    bind imageUrl: "img.thumbnail | attr:src";
    bind linkUrl:  "a.details-link | attr:href";
  }

  child tags {
    selector: "ul.tags-list li";
    bind name:  "a.tag-link | text";
  }
}`

  const propsContract = [
    { name: 'pageTitle', type: 'string', desc: 'Title displayed on top of the gallery grid header.' },
    { name: 'items', type: 'GridItem[] | any[]', desc: 'Array of media grid items or custom objects.' },
    { name: 'renderItem', type: '(item: any, index: number) => ReactNode', desc: 'Custom callback for rendering custom item cards.' },
    { name: 'sidebarSlot / headerSlot / toolbarSlot', type: 'React.ReactNode', desc: 'Custom layout slots for header, sidebar, and toolbar filters.' },
    { name: 'tags', type: 'TagItem[]', desc: 'Categorized tags for the responsive sidebar.' },
    { name: 'tagGroups', type: 'TagGroupConfig[]', desc: 'Custom tag category groupings.' },
    { name: 'pageLinks', type: 'PageLink[]', desc: 'Pagination links extracted from legacy DOM.' },
    { name: 'showSearch', type: 'boolean', desc: 'Displays sidebar search field.' },
    { name: 'searchPlaceholder', type: 'string', desc: 'Placeholder text for sidebar search bar.' },
    { name: 'height', type: 'string', desc: 'Container height (default: "100vh").' },
    { name: 'sidebarWidth', type: 'string', desc: 'CSS width of the tag sidebar (default: "220px").' },
    { name: 'hideSidebarOnMobile', type: 'boolean', desc: 'Hides sidebar behind drawer toggle on mobile viewports.' },
  ]

  const useCases = [
    'Transform unstyled image galleries into responsive modern card grids with tag filtering.',
    'Utilize custom renderItem callbacks to build stylized card components with badge overlays and action buttons.',
    'Toggle between multi-column grid layouts (2-Col, 3-Col, 4-Col, Masonry) effortlessly.',
  ]

  return (
    <ComponentDemoLayout
      name="UiModernGridPage"
      category="Dedicated Components"
      description="Full responsive media grid view component featuring an integrated tag sidebar, search field, dynamic layout modes, custom card renderers, and floating pagination."
      vnrExample={vnrExample}
      docUrl="/src/docs/UiModernGridPage.md"
      propsContract={propsContract}
      useCases={useCases}
      controls={controls}
    >
      <div
        style={{
          width: '100%',
          height: 600,
          border: '1px solid var(--border-contrast)',
          borderRadius: '8px',
          overflow: 'hidden',
          ['--spm-grid-columns' as any]: getGridColumns(),
        }}
      >
        <UiModernGridPage
          pageTitle="System Component & Module Directory"
          items={sampleItems}
          tags={sampleTags}
          pageLinks={samplePageLinks}
          showSearch={true}
          searchPlaceholder="Filter specifications..."
          height="100%"
          sidebarWidth="220px"
          renderItem={renderMode === 'custom' ? customRenderItem : undefined}
        />
      </div>
    </ComponentDemoLayout>
  )
}
