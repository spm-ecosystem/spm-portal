import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { UiStatsDashboard as UiStatsDashboardComponent, StatSection } from '@spm/components/dedicated/UiStatsDashboard'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'
import { Badge } from '../../../components/ui/Badge'

type PeriodOption = 'live' | '24h' | '7d'

export default function UiStatsDashboard() {
  const [period, setPeriod] = useState<PeriodOption>('24h')
  const [isLiveActive, setIsLiveActive] = useState(true)

  const sectionsData: Record<PeriodOption, StatSection[]> = {
    live: [
      {
        title: 'Traffic Ingress Leaderboard',
        items: [
          { rank: 1, name: 'api.stripe.com/v1/charges', amount: '1,420 req/s', trend: 'up', change: '+24.5%' },
          { rank: 2, name: 'auth.vercel.app/oauth/token', amount: '980 req/s', trend: 'up', change: '+12.1%' },
          { rank: 3, name: 'github.com/api/v3/graphql', amount: '340 req/s', trend: 'down', change: '-2.4%' },
          { rank: 4, name: 'telemetry.k8s.io/metrics', amount: '110 req/s', trend: 'neutral', change: '0.0%' },
        ],
      },
      {
        title: 'Realtime Latency Distribution',
        items: [
          { rank: 1, name: 'AST Resolver Parse Latency', amount: '0.08ms', trend: 'up', change: '-14.2% faster' },
          { rank: 2, name: 'Shadow DOM Attach Overhead', amount: '0.12ms', trend: 'neutral', change: '0.0%' },
          { rank: 3, name: 'CSS Var Injection Delay', amount: '0.24ms', trend: 'down', change: '+5.1% slower' },
        ],
      },
    ],
    '24h': [
      {
        title: 'Top Theme Compilations (24H)',
        items: [
          { rank: 1, name: 'api.stripe.com/v1/charges', amount: '45,210 hits', trend: 'up', change: '+18.4%' },
          { rank: 2, name: 'auth.vercel.app/oauth/token', amount: '38,900 hits', trend: 'up', change: '+9.2%' },
          { rank: 3, name: 'github.com/api/v3/graphql', amount: '12,450 hits', trend: 'down', change: '-4.1%' },
          { rank: 4, name: 'telemetry.k8s.io/metrics', amount: '8,320 hits', trend: 'neutral', change: '0.0%' },
        ],
      },
      {
        title: 'Compiler Validation Metrics',
        items: [
          { rank: 1, name: 'AST Parse Success Rate', amount: '100%', trend: 'neutral', change: '0.0%' },
          { rank: 2, name: 'Strict Mode Warnings', amount: '0', trend: 'up', change: '-100%' },
          { rank: 3, name: 'Average AST Resolver Latency', amount: '0.12ms', trend: 'up', change: '-0.04ms' },
          { rank: 4, name: 'Memory Leak Detections', amount: '0', trend: 'neutral', change: '0' },
        ],
      },
    ],
    '7d': [
      {
        title: 'Weekly Usage Summary',
        items: [
          { rank: 1, name: 'api.stripe.com/v1/charges', amount: '312,400 hits', trend: 'up', change: '+32.8%' },
          { rank: 2, name: 'auth.vercel.app/oauth/token', amount: '245,100 hits', trend: 'up', change: '+15.4%' },
          { rank: 3, name: 'github.com/api/v3/graphql', amount: '89,200 hits', trend: 'down', change: '-8.5%' },
          { rank: 4, name: 'telemetry.k8s.io/metrics', amount: '41,100 hits', trend: 'up', change: '+4.2%' },
        ],
      },
      {
        title: 'Weekly Security Audit Log',
        items: [
          { rank: 1, name: 'Sanitized Script Tags (DOMPurify)', amount: '14,890', trend: 'up', change: '+11.2%' },
          { rank: 2, name: 'XSS Interceptions', amount: '42', trend: 'down', change: '-45.0%' },
          { rank: 3, name: 'CSP Directive Violations', amount: '0', trend: 'neutral', change: '0' },
        ],
      },
    ],
  }

  const periodLabels: Record<PeriodOption, string> = {
    live: 'Realtime Stream (1s window)',
    '24h': 'Last 24 Hours',
    '7d': 'Last 7 Days',
  }

  const propsContract = [
    { name: 'pageTitle', type: 'string', desc: 'Title displayed at the top of the analytics dashboard.' },
    { name: 'dateRangeText', type: 'string', desc: 'Date range indicator text (e.g. "Last 30 Days").' },
    { name: 'sections', type: 'StatSection[]', desc: 'Grouped ranking sections and items supporting trend indicators (trend, change).' },
    { name: 'sparklineSlot', type: 'ReactNode', desc: 'Slot for analytics charts or sparkline visualizers.' },
    { name: 'toolbarSlot', type: 'ReactNode', desc: 'Custom controls toolbar slot in dashboard header.' },
    { name: 'headerSlot', type: 'ReactNode', desc: 'Custom header replacement slot.' },
  ]

  const useCases = [
    'Render grouped rankings and analytics leaderboards with rank badges and trend indicators.',
    'Embed interactive SVG sparkline charts or visual analytics graphs via sparklineSlot.',
    'Filter analytics ranges in real-time using ControlBar period buttons (Realtime, 24 Hours, 7 Days).',
    'Tokenize rank badge background colors with CSS variables.',
  ]

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          Period Range:
        </span>
        <SegmentedToggle<PeriodOption>
          size="sm"
          options={[
            { id: 'live', label: 'Realtime' },
            { id: '24h', label: '24 Hours' },
            { id: '7d', label: '7 Days' },
          ]}
          value={period}
          onChange={(val) => setPeriod(val)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Badge variant="default" size="sm">
          RANGE: {period.toUpperCase()}
        </Badge>
        <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
          <input
            type="checkbox"
            checked={isLiveActive}
            onChange={(e) => setIsLiveActive(e.target.checked)}
          />
          Auto Refresh
        </label>
      </div>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="UiStatsDashboard"
      category="Dedicated Page View"
      description="Grouped rankings and analytics metrics view featuring interactive ControlBar period switcher, trend indicators, tokenized rank badges, and mini-chart sparklines."
      docUrl="/src/docs/UiStatsDashboard.md"
      propsContract={propsContract}
      useCases={useCases}
      vnrExample={`reconstruct "#analytics-root" -> UiStatsDashboard {
  pageTitle: "Compiler Performance Metrics";
  dateRangeText: "Last 30 Days";

  child sections {
    selector: "div.stats-group";
    bind title: "h3.group-title | text";
  }
}`}
      controls={controls}
    >
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ width: '100%', border: '1px solid var(--border-contrast)', borderRadius: '8px', overflow: 'hidden' }}>
          <UiStatsDashboardComponent
            pageTitle="System Analytics & Telemetry Leaderboards"
            dateRangeText={periodLabels[period]}
            sections={sectionsData[period]}
            sparklineSlot={
              <div
                style={{
                  width: '100%',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-contrast)',
                  borderRadius: '6px',
                  padding: '16px 24px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-subtle)', fontWeight: 700, letterSpacing: '0.05em' }}>
                    System Throughput & Latency ({period.toUpperCase()})
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    0.18ms
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>
                      +14% throughput
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="180" height="36" viewBox="0 0 180 36" style={{ overflow: 'visible' }}>
                    <path
                      d={
                        period === 'live'
                          ? 'M0 25 Q 30 8, 60 20 T 120 12 T 180 6'
                          : period === '24h'
                          ? 'M0 20 Q 40 30, 80 10 T 140 16 T 180 4'
                          : 'M0 30 Q 45 12, 90 22 T 135 8 T 180 14'
                      }
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <circle cx="180" cy={period === 'live' ? '6' : period === '24h' ? '4' : '14'} r="3" fill="#ffffff" />
                  </svg>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </ComponentDemoLayout>
  )
}
