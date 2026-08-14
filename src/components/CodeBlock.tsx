import { highlightCodeBlock } from '../utils/codeHighlighter'

interface CodeBlockProps {
  children: string
}

export default function CodeBlock({ children }: CodeBlockProps) {
  const highlighted = highlightCodeBlock(children)

  return (
    <pre style={{
      margin: '1rem 0 1.5rem',
      background: '#09090b',
      padding: '1.25rem',
      borderRadius: '4px',
      border: '1px solid var(--border-contrast)',
      overflowX: 'auto'
    }}>
      <code
        style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: '1.7', color: '#f4f4f5' }}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </pre>
  )
}
