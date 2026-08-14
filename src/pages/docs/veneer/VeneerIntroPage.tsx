import DocLayout from '../../../components/DocLayout'
import CodeBlock from '../../../components/CodeBlock'
import { Link } from 'react-router-dom'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

export default function VeneerIntroPage() {
  return (
    <DocLayout title="Veneer Spec: Visão Geral & Motivação">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        A <strong style={{ color: '#fff' }}>Veneer Spec (<code className="vnr-str">.vnr</code>)</strong> é a linguagem DSL (Domain Specific Language) declarativa projetada especificamente para o compilador do <strong>Site Package Manager (SPM)</strong>.
      </p>

      <SectionHeading>Por que a Veneer Spec foi criada?</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1.25rem' }}>
        Originalmente, o mapeamento de modernização de páginas e substituição de DOM no SPM era escrito diretamente em arquivos JSON puros (<code className="vnr-str">manifest.json</code>). No entanto, à medida que a complexidade dos temas escalou para centenas de propriedades, seletores de dados e loops aninhados, editar JSON cru tornou-se impraticável por três razões principais:
      </p>

      <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '15px' }}>1. Verbosidade e Escape Excessivo</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
            Expressões regulares e seletores CSS complexos em JSON exigiam múltiplos escapes de barra invertida (<code>\\\\</code>), tornando a escrita propensa a erros e difícil de ler.
          </p>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '15px' }}>2. Repetição de Código (Falta de Herança)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
            Listas tabulares e cartões repetidos precisavam duplicar exatamente os mesmos objetos de bindings JSON. A Veneer Spec introduziu <strong>Orientação a Objetos por Blueprints</strong> com <code className="vnr-kw">class</code> e <code className="vnr-kw">extends</code>.
          </p>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '15px' }}>3. Ausência de Diagnósticos de Compilação</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
            Erros em JSON só eram detectados em tempo de execução no navegador. A Veneer Spec possui um compilador em C++17 (<code className="vnr-cmd">spm-cli</code>) que analisa a AST, valida tipos e indica a linha exata de qualquer erro sintático antes de emitir o build final.
          </p>
        </div>
      </div>

      <SectionHeading>Filosofia de Blueprinting e Reconstrução</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        A Veneer Spec opera sob um paradigma declarativo: em vez de escrever código imperativo de manipulação de DOM (como <code>document.querySelector</code> ou loops manuais), você declara:
      </p>

      <ul style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, paddingLeft: '1.25rem', marginBottom: '2rem' }}>
        <li><strong style={{ color: '#fff' }}>O QUÊ</strong> direcionar na página antiga (seletores CSS do HTML legado).</li>
        <li><strong style={{ color: '#fff' }}>QUAL</strong> componente React da biblioteca SPM montar dentro do Shadow DOM isolado.</li>
        <li><strong style={{ color: '#fff' }}>COMO</strong> extrair os dados não estruturados da página antiga para popular as props do React.</li>
      </ul>

      <SectionHeading>Comparativo: JSON Manual vs Veneer Spec</SectionHeading>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
        <div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Antes: JSON Manual Verbos</span>
          <CodeBlock>{`{
  "reconstructs": [{
    "containerSelector": "#table",
    "layoutComponent": "UiTableListPage",
    "children": [{
      "name": "rows",
      "selector": "tbody tr",
      "bindings": {
        "title": "td:nth-child(1) | text"
      }
    }]
  }]
}`}</CodeBlock>
        </div>

        <div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>Depois: Veneer Spec (.vnr)</span>
          <CodeBlock>{`class FileRow {
  bind title: "td:nth-child(1) | text";
}

reconstruct "#table" -> UiTableListPage {
  child rows extends FileRow {
    selector: "tbody tr";
  }
}`}</CodeBlock>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <div></div>
        <Link to="/docs/veneer/syntax" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Próximo: Sintaxe &amp; Gramática →
        </Link>
      </div>
    </DocLayout>
  )
}
