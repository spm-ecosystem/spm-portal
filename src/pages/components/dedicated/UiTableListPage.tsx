import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { UiTableListPage as UiTableListPageComponent, TableColumn } from '@spm/components/dedicated/UiTableListPage'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'
import { ControlBar } from '../../../components/ui/ControlBar'

export default function UiTableListPage() {
  const [paginationMode, setPaginationMode] = useState<'floating' | 'inline' | 'infinite'>('inline')
  const [columnView, setColumnView] = useState<'standard' | 'extended'>('standard')

  const [tableRows] = useState([
    {
      id: 'doc-1',
      title: 'k8s-ingress-controller.yaml',
      url: '#k8s',
      author: 'devops-lead',
      kind: 'Infrastructure',
      status: 'production',
      statusLabel: 'Production',
      size: '2.4 MB',
      updatedAt: '2026-08-28',
    },
    {
      id: 'doc-2',
      title: 'compiler-ast-transform.rs',
      url: '#ast',
      author: 'compiler-team',
      kind: 'Specification',
      status: 'staging',
      statusLabel: 'In Review',
      size: '184 KB',
      updatedAt: '2026-08-30',
    },
    {
      id: 'doc-3',
      title: 'stripe-webhook-gateway.go',
      url: '#stripe',
      author: 'sec-ops',
      kind: 'Security Audit',
      status: 'passed',
      statusLabel: 'Verified',
      size: '512 KB',
      updatedAt: '2026-08-31',
    },
    {
      id: 'doc-4',
      title: 'auth-oidc-provider.ts',
      url: '#oidc',
      author: 'identity-core',
      kind: 'Configuration',
      status: 'failed',
      statusLabel: 'Build Error',
      size: '96 KB',
      updatedAt: '2026-09-01',
    },
    {
      id: 'doc-5',
      title: 'telemetry-prometheus-exporter.rs',
      url: '#metrics',
      author: 'telemetry',
      kind: 'Specification',
      status: 'archived',
      statusLabel: 'Archived',
      size: '1.2 MB',
      updatedAt: '2026-07-15',
    },
  ])

  // Custom column definitions with sleek enterprise status badges and code fonts
  const standardColumns: TableColumn[] = [
    {
      key: 'title',
      header: 'Source Asset',
      type: 'link',
      urlKey: 'url',
      sortable: true,
      render: (item: any) => (
        <a
          href={item.url}
          style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600, fontFamily: 'var(--font-mono)' }}
        >
          {item.title}
        </a>
      ),
    },
    {
      key: 'statusLabel',
      header: 'Status',
      sortable: true,
      render: (item: any) => (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '2px 8px',
            borderRadius: '3px',
            fontSize: '10px',
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
            background: 'var(--bg-element)',
            color: '#ffffff',
            border: '1px solid var(--border-contrast)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {item.statusLabel}
        </span>
      ),
    },
    {
      key: 'kind',
      header: 'Category',
      type: 'badge',
      sortable: true,
    },
    {
      key: 'author',
      header: 'Maintainer',
      sortable: true,
      render: (item: any) => (
        <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
          @{item.author}
        </span>
      ),
    },
  ]

  const extendedColumns: TableColumn[] = [
    ...standardColumns,
    {
      key: 'size',
      header: 'Payload Size',
      width: '120px',
      sortable: true,
    },
    {
      key: 'updatedAt',
      header: 'Modified Date',
      width: '130px',
      sortable: true,
    },
    {
      key: 'actions',
      header: 'Actions',
      width: '110px',
      render: (item: any) => (
        <button
          type="button"
          onClick={() => {}}
          style={{
            padding: '3px 8px',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            background: '#ffffff',
            color: '#000000',
            border: 'none',
            borderRadius: '3px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Inspect
        </button>
      ),
    },
  ]

  const activeColumns = columnView === 'extended' ? extendedColumns : standardColumns

  const handleLoadMore = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    const moreRows = [
      {
        id: `infinite-1`,
        title: 'compiler-parser-patch.rs',
        url: '#inf1',
        author: 'compiler-team',
        kind: 'Patch',
        status: 'passed',
        statusLabel: 'Verified',
        size: '128 KB',
        updatedAt: '2026-09-01',
      },
      {
        id: `infinite-2`,
        title: 'telemetry-schema-v2.json',
        url: '#inf2',
        author: 'data-pipeline',
        kind: 'Audit',
        status: 'production',
        statusLabel: 'Production',
        size: '760 KB',
        updatedAt: '2026-09-01',
      },
    ]
    return { tableRows: moreRows, hasMore: true }
  }

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Pagination:
          </span>
          <SegmentedToggle
            size="sm"
            options={[
              { id: 'inline', label: 'Inline' },
              { id: 'floating', label: 'Floating' },
              { id: 'infinite', label: 'Infinite Scroll' },
            ]}
            value={paginationMode}
            onChange={(val) => setPaginationMode(val as 'floating' | 'inline' | 'infinite')}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            View:
          </span>
          <SegmentedToggle
            size="sm"
            options={[
              { id: 'standard', label: 'Standard' },
              { id: 'extended', label: 'Extended' },
            ]}
            value={columnView}
            onChange={(val) => setColumnView(val as 'standard' | 'extended')}
          />
        </div>
      </div>
    </ControlBar>
  )

  const vnrExample = `reconstruct "#wiki-directory" -> UiTableListPage {
  pageTitle: "Enterprise Repository Directory";
  paginationMode: "${paginationMode}";

  columns: [
    { key: "title", header: "Asset", type: "link", urlKey: "url" },
    { key: "statusLabel", header: "Status", type: "badge" },
    { key: "kind", header: "Category", type: "badge" }
  ];

  child tableRows {
    selector: "table.legacy-grid tr.row";
    bind title: "td.title a | text";
    bind url:   "td.title a | attr:href";
    bind kind:  "td.kind | text";
  }
}`

  return (
    <ComponentDemoLayout
      name="UiTableListPage"
      category="Dedicated Page View"
      description="Dense tabular list component from legacy DOM rows, featuring custom column schemas, badge renderers, sorting, and configurable pagination modes."
      docUrl="/src/docs/UiTableListPage.md"
      useCases={[
        'Modernize administrative tables without changing backend data sources.',
        'Transform cells into interactive links, status badges, or custom formatted elements.',
        'Maintain original pagination modes (Inline, Floating, Infinite) while providing state-of-the-art presentations.',
      ]}
      propsContract={[
        { name: 'pageTitle', type: 'string', desc: 'Title displayed at the top of the table list view.' },
        { name: 'columns', type: 'TableColumn[]', desc: 'Definition of columns, custom renderers, data types, and width.' },
        { name: 'tableRows', type: 'Record<string, any>[]', desc: 'Rows rendered in table list.' },
        { name: 'sidebarSlot', type: 'React.ReactNode', desc: 'React slot for optional sidebar content.' },
        { name: 'paginationMode', type: '"floating" | "inline" | "infinite"', desc: 'Pagination presentation mode variant.' },
        { name: 'pageLinks', type: 'PageLink[]', desc: 'Pagination links array.' },
        { name: 'onLoadMore', type: '() => Promise<{ tableRows, hasMore }>', desc: 'Async callback for infinite scroll loading.' },
      ]}
      vnrExample={vnrExample}
      controls={controls}
    >
      <div style={{ width: '100%', height: paginationMode === 'infinite' ? 520 : 'auto', overflow: 'hidden', border: '1px solid var(--border-contrast)', borderRadius: 8 }}>
        <UiTableListPageComponent
          pageTitle="Enterprise Telemetry & Asset Directory"
          columns={activeColumns}
          tableRows={tableRows}
          paginationMode={paginationMode}
          height={paginationMode === 'infinite' ? '100%' : 'auto'}
          onLoadMore={paginationMode === 'infinite' ? handleLoadMore : undefined}
          sidebarSlot={
            <div>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                Asset Filter
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                <div style={{ padding: '6px 10px', borderRadius: 4, background: '#ffffff', color: '#000000', fontWeight: 700 }}>
                  All Assets ({tableRows.length})
                </div>
                <div style={{ padding: '6px 10px', borderRadius: 4, color: 'var(--text-muted)', cursor: 'pointer' }}>
                  Specifications (2)
                </div>
                <div style={{ padding: '6px 10px', borderRadius: 4, color: 'var(--text-muted)', cursor: 'pointer' }}>
                  Security Audits (1)
                </div>
              </div>
            </div>
          }
          pageLinks={[
            { label: '1', url: '#1' },
            { label: '2', url: '#2' },
            { label: '3', url: '#3' },
            { label: 'Next', url: '#next' },
          ]}
        />
      </div>
    </ComponentDemoLayout>
  )
}
