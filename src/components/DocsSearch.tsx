import { useDeferredValue, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { searchDocs } from '../docsSearchIndex'
import { useLanguage } from '../context/LanguageContext'

export default function DocsSearch() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const { t } = useLanguage()

  const results = useMemo(() => {
    if (deferredQuery.trim().length < 3) return []
    return searchDocs(deferredQuery, undefined, 6)
  }, [deferredQuery])

  return (
    <div className="docs-search">
      <label className="eyebrow" htmlFor="docs-search-input">{t('search_label')}</label>
      <input
        id="docs-search-input"
        placeholder={t('search_placeholder')}
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
            <p>{t('search_no_results')}</p>
          )}
        </div>
      )}
    </div>
  )
}
