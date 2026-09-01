import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { UiSearchBar } from '@spm/components/primitive/UiSearchBar'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'

export default function UiSearchBarPage() {
  const [queryParam, setQueryParam] = useState('q')
  const [lastQuery, setLastQuery] = useState('')

  const vnrExample = `reconstruct "#search-box" -> UiSearchBar {
  placeholder: "Search endpoints, packages, or logs...";
  queryParamName: "${queryParam}";
  method: "GET";
}`

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Param Key:
          </span>
          <SegmentedToggle<'q' | 'search' | 'query'>
            size="sm"
            options={[
              { id: 'q', label: 'q' },
              { id: 'search', label: 'search' },
              { id: 'query', label: 'query' },
            ]}
            value={queryParam as any}
            onChange={(val) => setQueryParam(val)}
          />
        </div>
      </div>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="UiSearchBar"
      category="Primitive Component"
      description="Form-bound search field primitive preserving hidden security tokens (CSRF) and supporting GET/POST submission."
      docUrl="/src/docs/UiSearchBar.md"
      useCases={[
        'Provide a standard text search input with built-in form action submission.',
        'Forward hidden form parameters (e.g. CSRF tokens, category tags) on search submit.',
        'Embed inside navigation headers, hero sections, and sidebar filter blocks.',
      ]}
      propsContract={[
        { name: 'placeholder', type: 'string', desc: 'Placeholder text displayed when input is empty (defaults to "Search...").' },
        { name: 'defaultValue', type: 'string', desc: 'Initial text value populated in search input field.' },
        { name: 'submitUrl', type: 'string', desc: 'Target URL action for native browser form submission.' },
        { name: 'queryParamName', type: 'string', desc: 'The name attribute key used for search query parameter (defaults to "q").' },
        { name: 'method', type: "'GET' | 'POST'", desc: 'HTTP form submission method (defaults to "GET").' },
        { name: 'onSearch', type: '(value: string) => void', desc: 'Optional JS callback executed when form is submitted.' },
      ]}
      vnrExample={vnrExample}
      controls={controls}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', width: '100%' }}>
        <div style={{ width: '100%', maxWidth: 460 }}>
          <UiSearchBar
            placeholder="Search endpoints, packages, or telemetry logs..."
            queryParamName={queryParam}
            onSearch={(query: string) => setLastQuery(query)}
          />
        </div>

        {lastQuery && (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#ffffff', background: 'var(--bg-element)', padding: '6px 12px', borderRadius: 4, border: '1px solid var(--border-contrast)' }}>
            Submitted Query ({queryParam}): "{lastQuery}"
          </div>
        )}
      </div>
    </ComponentDemoLayout>
  )
}
