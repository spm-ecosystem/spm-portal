import { useState } from 'react'
import { UiNestedTreeTable, TreeNode, TreeColumn } from '@spm/components/dedicated/UiNestedTreeTable'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'
import { Badge } from '../../../components/ui/Badge'

type ExpansionMode = 'depth-1' | 'depth-2' | 'expand-all' | 'collapse-all'

export default function UiNestedTreeTablePage() {
  const [expansionMode, setExpansionMode] = useState<ExpansionMode>('depth-2')
  const [useCustomRenderCell, setUseCustomRenderCell] = useState(true)
  const [activeTab, setActiveTab] = useState<'demo' | 'aria'>('demo')

  const getExpandedDepth = () => {
    switch (expansionMode) {
      case 'collapse-all':
        return 0
      case 'depth-1':
        return 1
      case 'depth-2':
        return 2
      case 'expand-all':
        return 99
      default:
        return 2
    }
  }

  const vnrExample = `reconstruct "#file-explorer-grid" -> UiNestedTreeTable {
  title: "Ecosystem Directory Hierarchy";
  expandedDepth: 2;

  columns: [
    { key: "size", title: "Size", width: "120px" },
    { key: "type", title: "Type", width: "140px" },
    { key: "modified", title: "Last Modified", width: "160px" },
    { key: "actions", title: "Actions", width: "110px" }
  ];

  child data {
    selector: "tr.tree-row";
    bind id:    "self | attr:data-id";
    bind label: "td.name | text";
  }
}`

  const propsContract = [
    { name: 'title', type: 'ReactNode', desc: 'Title displayed above the tree table header.' },
    { name: 'columns', type: 'TreeColumn[]', desc: 'Custom columns array defining key, title, and optional width.' },
    { name: 'data', type: 'TreeNode[]', desc: 'Hierarchical node items with nested children, icons, and ReactNode cell values.' },
    { name: 'expandedDepth', type: 'number', desc: 'Initial tree depth expanded automatically on mount (default: 1).' },
    { name: 'renderCell', type: '(node: TreeNode, columnKey: string) => ReactNode', desc: 'Custom cell renderer function per column key.' },
  ]

  const useCases = [
    'Render file directory structures, nested categories, or organizational hierarchy trees with WAI-ARIA treegrid attributes.',
    'Provide interactive expand and collapse toggle controls with configurable depth presets (Depth 1, Depth 2, Expand All, Collapse All).',
    'Custom ReactNode cell rendering via renderCell prop for status badges, formatted file sizes, and action buttons.',
    'WAI-ARIA accessibility with role="treegrid", aria-level, and aria-expanded semantics.',
  ]

  const sampleColumns: TreeColumn[] = [
    { key: 'size', title: 'Size', width: '110px' },
    { key: 'type', title: 'Kind', width: '150px' },
    { key: 'modified', title: 'Modified', width: '130px' },
    { key: 'actions', title: 'Actions', width: '110px' },
  ]

  const sampleData: TreeNode[] = [
    {
      id: 'root-src',
      label: 'src/',
      values: {
        size: '3.8 MB',
        type: 'Directory',
        modified: '2026-08-31',
        actions: 'Inspect',
      },
      children: [
        {
          id: 'src-components',
          label: 'components/',
          values: {
            size: '2.1 MB',
            type: 'Directory',
            modified: '2026-08-31',
            actions: 'Inspect',
          },
          children: [
            {
              id: 'c-dedicated',
              label: 'dedicated/',
              values: {
                size: '1.4 MB',
                type: 'Directory',
                modified: '2026-08-31',
                actions: 'Inspect',
              },
              children: [
                {
                  id: 'c-comment-list',
                  label: 'UiCommentListPage.tsx',
                  values: {
                    size: '12.8 KB',
                    type: 'TSX Component',
                    modified: '2026-08-31',
                    actions: 'View AST',
                  },
                },
                {
                  id: 'c-post-details',
                  label: 'UiPostDetailsPage.tsx',
                  values: {
                    size: '11.5 KB',
                    type: 'TSX Component',
                    modified: '2026-08-31',
                    actions: 'View AST',
                  },
                },
                {
                  id: 'c-hero-landing',
                  label: 'UiHeroLandingPage.tsx',
                  values: {
                    size: '9.7 KB',
                    type: 'TSX Component',
                    modified: '2026-08-31',
                    actions: 'View AST',
                  },
                },
              ],
            },
            {
              id: 'c-ui-primitives',
              label: 'ui/',
              values: {
                size: '420 KB',
                type: 'Directory',
                modified: '2026-08-30',
                actions: 'Inspect',
              },
              children: [
                {
                  id: 'c-controlbar',
                  label: 'ControlBar.tsx',
                  values: {
                    size: '2.1 KB',
                    type: 'TSX Component',
                    modified: '2026-08-30',
                    actions: 'View AST',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'src-styles',
          label: 'index.css',
          values: {
            size: '8.8 KB',
            type: 'CSS Module',
            modified: '2026-08-28',
            actions: 'Build',
          },
        },
      ],
    },
    {
      id: 'root-config',
      label: 'configuration/',
      values: {
        size: '154 KB',
        type: 'Directory',
        modified: '2026-08-20',
        actions: 'Inspect',
      },
      children: [
        {
          id: 'f-package',
          label: 'package.json',
          values: {
            size: '776 B',
            type: 'JSON Manifest',
            modified: '2026-08-31',
            actions: 'Validate',
          },
        },
        {
          id: 'f-tsconfig',
          label: 'tsconfig.json',
          values: {
            size: '618 B',
            type: 'JSON Manifest',
            modified: '2026-08-25',
            actions: 'Validate',
          },
        },
      ],
    },
  ]

  const customRenderCell = (node: TreeNode, columnKey: string) => {
    const rawVal = node.values?.[columnKey]

    if (columnKey === 'type') {
      return (
        <span
          style={{
            display: 'inline-block',
            padding: '2px 6px',
            borderRadius: '3px',
            fontSize: '10px',
            fontFamily: 'var(--font-mono)',
            background: 'var(--bg-element)',
            color: '#ffffff',
            border: '1px solid var(--border-contrast)',
            fontWeight: 600,
          }}
        >
          {String(rawVal || '')}
        </span>
      )
    }

    if (columnKey === 'size') {
      return (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
          {rawVal}
        </span>
      )
    }

    if (columnKey === 'actions') {
      return (
        <button
          onClick={() => {}}
          style={{
            padding: '2px 6px',
            borderRadius: '3px',
            background: '#ffffff',
            border: 'none',
            color: '#000000',
            fontSize: '10px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          {rawVal}
        </button>
      )
    }

    return undefined
  }

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          Depth Expansion:
        </span>
        <SegmentedToggle<ExpansionMode>
          size="sm"
          options={[
            { id: 'depth-1', label: 'Depth 1' },
            { id: 'depth-2', label: 'Depth 2' },
            { id: 'expand-all', label: 'Expand All' },
            { id: 'collapse-all', label: 'Collapse' },
          ]}
          value={expansionMode}
          onChange={(mode) => setExpansionMode(mode)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
          <input
            type="checkbox"
            checked={useCustomRenderCell}
            onChange={(e) => setUseCustomRenderCell(e.target.checked)}
          />
          Custom Render Cell
        </label>
        <Badge variant="default" size="sm">
          WAI-ARIA treegrid
        </Badge>
      </div>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="UiNestedTreeTable"
      category="Dedicated Components"
      description="Hierarchical tree table component featuring interactive ControlBar expansion presets (Depth 1, Depth 2, Expand All, Collapse All), custom renderCell node formatting, and full WAI-ARIA accessibility (role='treegrid', aria-level, aria-expanded)."
      vnrExample={vnrExample}
      docUrl="/src/docs/UiNestedTreeTable.md"
      propsContract={propsContract}
      useCases={useCases}
      controls={controls}
    >
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-contrast)', paddingBottom: '8px' }}>
          <button
            onClick={() => setActiveTab('demo')}
            style={{
              padding: '4px 12px',
              borderRadius: '4px',
              border: 'none',
              background: activeTab === 'demo' ? '#ffffff' : 'transparent',
              color: activeTab === 'demo' ? '#000000' : 'var(--text-muted)',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Tree View
          </button>
          <button
            onClick={() => setActiveTab('aria')}
            style={{
              padding: '4px 12px',
              borderRadius: '4px',
              border: 'none',
              background: activeTab === 'aria' ? '#ffffff' : 'transparent',
              color: activeTab === 'aria' ? '#000000' : 'var(--text-muted)',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Accessibility Spec
          </button>
        </div>

        {activeTab === 'demo' ? (
          <div style={{ width: '100%', border: '1px solid var(--border-contrast)', borderRadius: '8px', overflow: 'hidden' }}>
            <UiNestedTreeTable
              key={`tree-${expansionMode}-${useCustomRenderCell}`}
              title="Project File Directory & Hierarchy"
              columns={sampleColumns}
              data={sampleData}
              expandedDepth={getExpandedDepth()}
              renderCell={useCustomRenderCell ? customRenderCell : undefined}
            />
          </div>
        ) : (
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-contrast)',
              borderRadius: '8px',
              padding: '20px',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
            }}
          >
            <h4 style={{ margin: '0 0 12px 0', color: '#ffffff', fontSize: '14px' }}>
              WAI-ARIA Accessibility 1.2 Treegrid Compliance
            </h4>
            <p style={{ margin: '0 0 14px 0' }}>
              The <code>UiNestedTreeTable</code> component satisfies WAI-ARIA accessibility patterns for hierarchical grid data:
            </p>
            <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <code>role="treegrid"</code>: Set on top-level <code>&lt;table&gt;</code> element to notify screen readers of nested row relationships.
              </li>
              <li>
                <code>role="row"</code> & <code>aria-level</code>: Applied dynamically to every <code>&lt;tr&gt;</code> to communicate nesting depth level.
              </li>
              <li>
                <code>aria-expanded</code>: Computed on rows containing children so assistive technologies announce row expand/collapse state.
              </li>
              <li>
                <code>role="rowheader"</code> & <code>role="gridcell"</code>: Semantic cell roles distinguishing the expandable structure column from data cells.
              </li>
            </ul>
          </div>
        )}
      </div>
    </ComponentDemoLayout>
  )
}
