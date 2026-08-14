import { useEffect, useState } from 'react'
import { marked } from 'marked'
import { highlightCodeBlock } from '../utils/codeHighlighter'

interface MarkdownDocViewerProps {
  url: string
  fallbackContent?: string
}

function cleanLaTeXMath(rawText: string): string {
  return rawText
    .replace(/\$\$\\text\{Selector\}\s*\\quad\s*\|\s*\\quad\s*\\text\{Operation\}\$\$/g, '`selector | operation`')
    .replace(/\$\$\\text\{([^\}]+)\}\s*\\quad\s*\|\s*\\quad\s*\\text\{([^\}]+)\}\$\$/g, '`$1 | $2`')
    .replace(/\$\$(.*?)\$\$/g, '`$1`')
}

function applySyntaxHighlighting(rawHtml: string): string {
  if (typeof window === 'undefined') return rawHtml
  const parser = new DOMParser()
  const doc = parser.parseFromString(rawHtml, 'text/html')
  
  doc.querySelectorAll('pre code').forEach((codeEl) => {
    const rawCode = codeEl.textContent || ''
    codeEl.innerHTML = highlightCodeBlock(rawCode)
  })

  return doc.body.innerHTML
}

export default function MarkdownDocViewer({ url, fallbackContent }: MarkdownDocViewerProps) {
  const [html, setHtml] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    setError(null)

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.text()
      })
      .then(async text => {
        if (!isMounted) return
        const cleaned = cleanLaTeXMath(text)
        const parsed = await marked.parse(cleaned)
        const highlighted = applySyntaxHighlighting(parsed)
        setHtml(highlighted)
        setLoading(false)
      })
      .catch(err => {
        if (!isMounted) return
        if (fallbackContent) {
          const cleaned = cleanLaTeXMath(fallbackContent)
          marked.parse(cleaned).then(parsed => {
            if (isMounted) {
              const highlighted = applySyntaxHighlighting(parsed)
              setHtml(highlighted)
              setLoading(false)
            }
          })
        } else {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [url, fallbackContent])

  if (loading) {
    return (
      <div style={{ padding: '2rem 0', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
        Carregando documentação...
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ padding: '1rem', background: '#2d1517', border: '1px solid #5c2225', borderRadius: 4, color: '#f87171', fontSize: 13 }}>
        Falha ao carregar documentação ao vivo: {error}
      </div>
    )
  }

  return (
    <div
      className="prose-spm"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
