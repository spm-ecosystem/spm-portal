import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { UiTable } from '@spm/components/primitive/UiTable'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'

interface PackageRow {
  id: string
  name: string
  version: string
  status: string
}

export default function UiTablePage() {
  const [sortKey, setSortKey] = useState<string>('name')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [selectedRow, setSelectedRow] = useState<PackageRow | null>(null)

  const rawData: PackageRow[] = [
    { id: 'pkg-01', name: '@spm/core', version: '2.4.1', status: 'Stable' },
    { id: 'pkg-02', name: '@spm/veneer', version: '1.9.0', status: 'Active' },
    { id: 'pkg-03', name: '@spm/components', version: '3.1.2', status: 'Updated' },
    { id: 'pkg-04', name: '@spm/cli', version: '0.8.4', status: 'Beta' },
  ]

  const columns = [
    { key: 'id', header: 'ID', width: '100px' },
    { key: 'name', header: 'Package Identifier' },
    { key: 'version', header: 'Version', align: 'center' as const },
    {
      key: 'status',
      header: 'Status',
      align: 'right' as const,
      render: (item: PackageRow) => (
        <span style={{
          background: 'var(--bg-element)',
          color: '#ffffff',
          border: '1px solid var(--border-contrast)',
          padding: '2px 8px', borderRadius: 3, fontSize: 10, fontFamily: 'var(--font-mono)', fontWeight: 700, textTransform: 'uppercase'
        }}>
          {item.status}
        </span>
      )
    }
  ]

  const sortedData = [...rawData].sort((a, b) => {
    const valA = String(a[sortKey as keyof PackageRow] || '')
    const valB = String(b[sortKey as keyof PackageRow] || '')
    return sortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA)
  })

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDirection('asc')
    }
  }

  const vnrExample = `reconstruct "table#data-grid" -> UiTable {
  sortKey: "${sortKey}";
  sortDirection: "${sortDirection}";

  child columns {
    bind key:    "th | attr:data-field";
    bind header: "th | text";
  }

  child data {
    selector: "tbody tr";
    bind id:      "td.col-id | text";
    bind name:    "td.col-name | text";
    bind version: "td.col-ver | text";
    bind status:  "td.col-status | text";
  }
}`

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Direction:
          </span>
          <SegmentedToggle<'asc' | 'desc'>
            size="sm"
            options={[
              { id: 'asc', label: 'ASC' },
              { id: 'desc', label: 'DESC' },
            ]}
            value={sortDirection}
            onChange={(val) => setSortDirection(val)}
          />
        </div>
      </div>
      <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>
        Sort Column: <span style={{ color: '#ffffff', fontWeight: 600 }}>{sortKey}</span>
      </div>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="UiTable"
      category="Primitive Component"
      description="Generic typed data table primitive supporting column headers, custom cell renders, row click listeners, and sorting."
      docUrl="/src/docs/UiTable.md"
      useCases={[
        'Render structured datasets in formatted HTML table elements.',
        'Configure column definitions with custom alignment, widths, and cell renders.',
        'Handle interactive row selection callbacks and client-side column sorting.',
      ]}
      propsContract={[
        { name: 'columns', type: 'ColumnConfig<T>[]', desc: 'Array of column definitions ({ key, header, width, align, render }) (Required).' },
        { name: 'data', type: 'T[]', desc: 'Dataset array containing row objects to render (Required).' },
        { name: 'onRowClick', type: '(item: T) => void', desc: 'Optional click event callback executed when a table row is clicked.' },
        { name: 'sortKey', type: 'string', desc: 'Currently active column key for sorting indicator.' },
        { name: 'sortDirection', type: "'asc' | 'desc'", desc: 'Sorting order direction.' },
      ]}
      vnrExample={vnrExample}
      controls={controls}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
        <UiTable
          columns={columns}
          data={sortedData}
          sortKey={sortKey}
          sortDirection={sortDirection}
          onSort={handleSort}
          onRowClick={item => setSelectedRow(item)}
        />

        {selectedRow && (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#ffffff', background: 'var(--bg-element)', padding: '6px 12px', borderRadius: 4, border: '1px solid var(--border-contrast)' }}>
            Selected Row: {selectedRow.name} ({selectedRow.id}) - v{selectedRow.version}
          </div>
        )}
      </div>
    </ComponentDemoLayout>
  )
}
