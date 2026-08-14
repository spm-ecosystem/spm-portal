import DocLayout from '../../../components/DocLayout'
import CodeBlock from '../../../components/CodeBlock'
import { Link } from 'react-router-dom'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

export default function VeneerThemePage() {
  return (
    <DocLayout title="Veneer Spec: Definição de Temas (theme)">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        O bloco <code className="vnr-kw">theme</code> define a identidade visual do tema, mapeando variáveis CSS globais e customStyles aplicadas ao documento principal.
      </p>

      <SectionHeading>Bloco theme "Nome" {"{ ... }"}</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Toda especificação de tema completa começa com a declaração do bloco <code className="vnr-kw">theme</code> informando o nome identificador do tema entre aspas:
      </p>

      <CodeBlock>{`theme "Obsidian" {
  variables {
    --spm-bg-primary: "#000000";
    --spm-bg-secondary: "#111111";
    --spm-text-primary: "#ffffff";
    --spm-accent: "#7c6af5";
  }

  customStyles {
    "#legacy-notice { display: none !important; }"
    "body { font-family: 'Inter', sans-serif !important; }"
  }
}`}</CodeBlock>

      <SectionHeading>Mapeamento de Variáveis CSS (variables)</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Dentro do bloco <code className="vnr-op">variables</code>, você declara tokens de design como propriedades CSS customizadas (CSS Variables).
      </p>
      <ul style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
        <li>O compilador converte esse bloco em um objeto JSON sob a chave <code>theme.cssVariables</code>.</li>
        <li>Em tempo de execução, a extensão SPM injeta essas variáveis diretamente na tag <code>html</code> do documento principal através da API <code>document.documentElement.style.setProperty</code>.</li>
      </ul>

      <SectionHeading>Injeção de CSS Global (customStyles)</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        O bloco <code className="vnr-op">customStyles</code> aceita um conjunto de regras CSS brutas como strings.
      </p>
      <ul style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, paddingLeft: '1.25rem', marginBottom: '2rem' }}>
        <li>Estas regras são injetadas globalmente na página hospedada através da tag <code>&lt;style id="spm-global-theme-styles"&gt;</code>.</li>
        <li>Útil para ajustar margens da página original, ocultar banners antigos inconvenientes ou sobrescrever fontes.</li>
      </ul>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <Link to="/docs/veneer/syntax" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          ← Anterior: Sintaxe &amp; Gramática
        </Link>
        <Link to="/docs/veneer/classes" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Próximo: Classes &amp; Herança →
        </Link>
      </div>
    </DocLayout>
  )
}
