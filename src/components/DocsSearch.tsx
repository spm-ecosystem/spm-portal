import { useDeferredValue, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { searchDocs } from '../docsSearchIndex'

export default function DocsSearch() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const results = useMemo(() => {
    if (deferredQuery.trim().length < 3) return []
    return searchDocs(deferredQuery, undefined, 6)
  }, [deferredQuery])

  return (
    <div className="docs-search">
      <label className="eyebrow" htmlFor="docs-search-input">Busca rápida</label>
      <input
        id="docs-search-input"
        placeholder="Buscar docs..."
        spellCheck={false}
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      {query.trim().length >= 3 && (
        <div className="docs-search-results">
          {results.length > 0 ? (
            results.map(({ item }) => (
              <Link key={item.path} to={item.path}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </Link>
            ))
          ) : (
            <p>Sem resultados.</p>
          )}
        </div>
      )}
    </div>
  )
}
