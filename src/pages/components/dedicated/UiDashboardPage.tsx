import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { UiDashboardPage as UiDashboardPageComponent, DashboardCard } from '@spm/components/dedicated/UiDashboardPage'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'
import { ControlBar } from '../../../components/ui/ControlBar'

export default function UiDashboardPage() {
  const [layoutMode, setLayoutMode] = useState<'grid-2-col' | 'grid-3-col' | 'masonry' | 'vertical-stack'>('grid-2-col')
  const [cards] = useState<DashboardCard[]>([
    {
      title: 'Compiled Specifications',
      value: '1,420',
      change: '+12.4%',
      trend: 'up',
      description: 'Active reconstructed Veneer specifications across production targets.',
      url: '#themes',
    },
    {
      title: 'Active Shadow DOM Roots',
      value: '890',
      change: '+8.1%',
      trend: 'up',
      description: 'Isolated custom element roots mounted in consumer DOMs.',
      url: '#hosts',
    },
    {
      title: 'p99 Frame Hydration Time',
      value: '0.4ms',
      change: '-15.2%',
      trend: 'down',
      description: 'Frame rendering time measured from hydration start to DOM painted.',
      url: '#latency',
    },
    {
      title: 'Compiler Validation Pass',
      value: '100%',
      change: '0.0%',
      trend: 'neutral',
      description: 'AST syntax parsing validation success rate across test runs.',
      url: '#pass',
    },
    {
      title: 'LRU Cache Hit Ratio',
      value: '99.4%',
      change: '+1.2%',
      trend: 'up',
      description: 'Pre-parsed AST tokens retained in compilation memory buffer.',
      url: '#tokens',
    },
    {
      title: 'Per-Boundary Memory Footprint',
      value: '1.2 MB',
      change: '-5.3%',
      trend: 'down',
      description: 'Heap memory usage per active Shadow DOM boundary.',
      url: '#memory',
    },
  ])

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
          Layout:
        </span>
        <SegmentedToggle
          size="sm"
          options={[
            { id: 'grid-2-col', label: '2-Col' },
            { id: 'grid-3-col', label: '3-Col' },
            { id: 'masonry', label: 'Masonry' },
            { id: 'vertical-stack', label: 'Stack' },
          ]}
          value={layoutMode}
          onChange={(val) => setLayoutMode(val as any)}
        />
      </div>
      <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
        UiDashboardPage Spec v2.4
      </div>
    </ControlBar>
  )

  const vnrExample = `reconstruct "#admin-overview" -> UiDashboardPage {
  pageTitle: "System Operations Dashboard";
  subTitle: "Real-time metrics and compile pass status";
  layoutMode: "${layoutMode}";

  child cards {
    selector: "div.stat-card";
    bind title:  "span.card-label | text";
    bind value:  "h2.card-val | text";
    bind change: "span.card-change | text";
  }
}`

  const propsContract = [
    { name: 'pageTitle', type: 'string', desc: 'Title displayed at the top of the dashboard.' },
    { name: 'subTitle', type: 'string', desc: 'Subtitle or description of the dashboard context.' },
    { name: 'layoutMode', type: '"grid-2-col" | "grid-3-col" | "masonry" | "vertical-stack"', desc: 'Layout grid structure variant.' },
    { name: 'cards', type: 'DashboardCard[] | any[]', desc: 'Metric cards data array.' },
    { name: 'renderCard', type: '(card: any, index: number) => ReactNode', desc: 'Custom card rendering function.' },
    { name: 'sidebarSlot / headerSlot', type: 'React.ReactNode', desc: 'Custom layout slots.' },
  ]

  const useCases = [
    'Transform administrative overview pages into modern responsive dashboards with live layout toggles.',
    'Display system health metrics, statistics cards, and percentage trend indicators.',
    'Integrate multiple data cards in unified responsive structures (Grid 2-Col, Grid 3-Col, Masonry, Vertical Stack).',
  ]

  return (
    <ComponentDemoLayout
      name="UiDashboardPage"
      category="Dedicated Page View"
      description="Multi-card dashboard page view component for rendering system metrics, statistics cards, trend indicators, and operational status in flexible layout modes."
      docUrl="/src/docs/UiDashboardPage.md"
      propsContract={propsContract}
      useCases={useCases}
      vnrExample={vnrExample}
      controls={controls}
    >
      <div style={{ width: '100%', height: 580, overflowY: 'auto', border: '1px solid var(--border-contrast)', borderRadius: 8 }}>
        <UiDashboardPageComponent
          pageTitle="Cluster Telemetry & Operational Metrics"
          subTitle="Real-time performance metrics, AST compilation throughput, and operational status"
          layoutMode={layoutMode}
          cards={cards}
          height="100%"
        />
      </div>
    </ComponentDemoLayout>
  )
}
