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

function cleanDocContent(rawText: string): string {
  let text = cleanLaTeXMath(rawText)

  // Strip redundant top metadata header blocks like "# UiFormContainer Component Specification\n\n- Component Name: ..."
  if (text.includes('Component Specification')) {
    text = text.replace(/^#\s+.*?Component Specification[\s\S]*?(?:---|##\s+Overview|##\s+1\.)/i, '## Overview')
  }

  return text
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

const bundledDocs = import.meta.glob<string>([
  '/src/docs/*.md',
  '../docs/*.md',
  './src/docs/*.md',
], { query: '?raw', import: 'default', eager: true })

function getBundledDoc(url: string): string | null {
  try {
    const rawFilename = url.split('/').pop()?.replace(/\.md$/, '')
    if (!rawFilename) return null

    const normalizedName = rawFilename.replace(/Page$/, '')

    const matchKey = Object.keys(bundledDocs).find(key => {
      const base = key.split('/').pop()?.replace(/\.md$/, '') || ''
      return base.toLowerCase() === rawFilename.toLowerCase() || base.toLowerCase() === normalizedName.toLowerCase()
    })

    return matchKey ? bundledDocs[matchKey] : null
  } catch {
    return null
  }
}

export default function MarkdownDocViewer({ url, fallbackContent }: MarkdownDocViewerProps) {
  const [html, setHtml] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    setError(null)

    const bundledText = getBundledDoc(url)
    const sourcePromise = bundledText
      ? Promise.resolve(bundledText)
      : fetch(url).then(res => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
          return res.text()
        }).then(text => {
          if (text.trim().startsWith('<!doctype html>') || text.trim().startsWith('<html') || text.includes('@vite/client')) {
            throw new Error('Documentation file not found on server.')
          }
          return text
        })

    sourcePromise
      .then(async text => {
        if (!isMounted) return
        const cleaned = cleanDocContent(text)
        const parsed = await marked.parse(cleaned)
        const highlighted = applySyntaxHighlighting(parsed)
        setHtml(highlighted)
        setLoading(false)
      })
      .catch(err => {
        if (!isMounted) return
        if (fallbackContent) {
          const cleaned = cleanDocContent(fallbackContent)
          Promise.resolve(marked.parse(cleaned)).then(parsed => {
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
        Loading documentation...
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ padding: '1.25rem', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', borderRadius: 6, color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6 }}>
        <p style={{ margin: '0 0 0.5rem', color: '#ffffff', fontWeight: 600 }}>Documentation Spec</p>
        <p style={{ margin: 0 }}>
          Technical specification for this component is synchronized directly from <code>spm-components</code> documentation repository.
        </p>
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
