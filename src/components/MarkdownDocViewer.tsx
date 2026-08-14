import { useEffect, useState } from 'react'
import { marked } from 'marked'
import Navbar from './Navbar'

interface MarkdownDocViewerProps {
  url: string
  title?: string
  fallbackContent?: string
}

export default function MarkdownDocViewer({ url, title, fallbackContent }: MarkdownDocViewerProps) {
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
        const parsed = await marked.parse(text)
        setHtml(parsed)
        setLoading(false)
      })
      .catch(err => {
        if (!isMounted) return
        if (fallbackContent) {
          marked.parse(fallbackContent).then(parsed => {
            if (isMounted) {
              setHtml(parsed)
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

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-absolute)', color: 'var(--text-primary)' }}>
      <Navbar />
      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 2rem 6rem' }}>
        {title && <h1 className="section-title" style={{ margin: '0 0 1.5rem' }}>{title}</h1>}

        {loading && (
          <div style={{ padding: '3rem 0', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
            Carregando documentação sincronizada do repositório...
          </div>
        )}

        {error && !loading && (
          <div style={{ padding: '1.5rem', background: '#2d1517', border: '1px solid #5c2225', borderRadius: 6, color: '#f87171', fontSize: 13 }}>
            Falha ao carregar a documentação ao vivo do repositório: {error}
          </div>
        )}

        {!loading && !error && (
          <div
            className="prose-spm"
            dangerouslySetInnerHTML={{ __html: html }}
            style={{
              lineHeight: 1.7,
              fontSize: 14,
              color: 'var(--text-primary)'
            }}
          />
        )}
      </main>
    </div>
  )
}
