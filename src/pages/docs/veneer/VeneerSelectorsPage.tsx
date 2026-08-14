import DocLayout from '../../../components/DocLayout'
import CodeBlock from '../../../components/CodeBlock'
import { Link } from 'react-router-dom'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

export default function VeneerSelectorsPage() {
  return (
    <DocLayout title="Veneer Spec: Seletores & Ações (selector)">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        O bloco <code className="vnr-kw">selector</code> permite aplicar manipulações diretas e limpas em elementos legados do DOM original sem montar componentes React.
      </p>

      <SectionHeading>Ocultando Elementos Legados (action: hide)</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        É comum querer remover menus legados quebrados, rodapés antigos ou anúncios da página sem desmontar a estrutura:
      </p>

      <CodeBlock>{`selector "#old-sidebar" {
  action: hide;
}

selector ".legacy-banner-ads" {
  action: hide;
}`}</CodeBlock>

      <SectionHeading>Diferença entre selector e reconstruct</SectionHeading>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '15px' }}><code className="vnr-kw">selector</code></h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
            Apenas esconde (<code>display: none</code>) ou modifica nós existentes no DOM original. Leve e rápido.
          </p>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '15px' }}><code className="vnr-kw">reconstruct</code></h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
            Raspa os dados do nó, esconde o elemento original e monta um novo componente React dentro de um Shadow DOM isolado.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <Link to="/docs/veneer/bindings" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          ← Anterior: Bindings &amp; Extratores
        </Link>
        <Link to="/docs/veneer/tooling" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Próximo: Diagnósticos &amp; CLI →
        </Link>
      </div>
    </DocLayout>
  )
}
