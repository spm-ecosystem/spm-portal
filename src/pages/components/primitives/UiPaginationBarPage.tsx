import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { UiPaginationBar } from '@spm/components/dedicated/UiPaginationBar'
import { ControlBar } from '../../../components/ui/ControlBar'

export default function UiPaginationBarPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const vnrExample = `reconstruct "#paginator" -> UiPaginationBar {
  paramName: "pid";

  child pageLinks {
    selector: "div.pagination a";
    bind label: "self | text";
    bind url:   "self | attr:href";
  }
}`

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
        Active Page: <span style={{ color: '#ffffff', fontWeight: 700 }}>{currentPage}</span> (Offset: {(currentPage - 1) * 40})
      </div>
      <div style={{ fontSize: 11, color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>
        UiPaginationBar Spec v2.4
      </div>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="UiPaginationBar"
      category="Primitive Component"
      description="Pagination bar primitive for parsing URL page offsets, page jump controls, and prev/next links."
      docUrl="/src/docs/UiPaginationBar.md"
      useCases={[
        'Parse legacy pagination DOM anchors and extract numeric page parameters.',
        'Provide responsive pagination bar with next/prev arrows and direct page jump inputs.',
        'Preserve server-side URL pagination parameters while styling navigation controls.',
      ]}
      propsContract={[
        { name: 'pageLinks', type: 'PageLink[]', desc: 'Array of page navigation links extracted from legacy HTML.' },
        { name: 'paramName', type: 'string', desc: 'URL query parameter name for pagination (defaults to "pid").' },
      ]}
      vnrExample={vnrExample}
      controls={controls}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', width: '100%' }}>
        <div
          onClickCapture={(e) => {
            const target = e.target as HTMLElement
            const link = target.closest('a')
            if (link) {
              e.preventDefault()
              e.stopPropagation()
              const text = link.textContent?.trim() || ''
              if (text === '›' || text.includes('Next')) {
                setCurrentPage(prev => Math.min(5, prev + 1))
              } else if (text === '‹' || text.includes('Prev')) {
                setCurrentPage(prev => Math.max(1, prev - 1))
              } else if (!isNaN(parseInt(text, 10))) {
                setCurrentPage(parseInt(text, 10))
              }
            }
          }}
        >
          <UiPaginationBar
            pageLinks={[
              { label: '1', url: `?pid=0` },
              { label: '2', url: '?pid=40' },
              { label: '3', url: '?pid=80' },
              { label: '4', url: '?pid=120' },
              { label: '5', url: '?pid=160' },
            ]}
            paramName="pid"
          />
        </div>
      </div>
    </ComponentDemoLayout>
  )
}
