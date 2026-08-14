import DocLayout from '../../../components/DocLayout'
import CodeBlock from '../../../components/CodeBlock'
import { Link } from 'react-router-dom'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

export default function VeneerBindingsPage() {
  return (
    <DocLayout title="Veneer Spec: Bindings & Extratores (bind)">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        A instrução <code className="vnr-kw">bind</code> conecta propriedades de componentes a seletores CSS e extratores de conteúdo no DOM antigo.
      </p>

      <SectionHeading>Sintaxe de Binding</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        A sintaxe padrão de um binding segue o formato <code>bind &lt;propriedade&gt;: "&lt;Seletor CSS&gt; | &lt;Operador Extrator&gt;"</code>:
      </p>

      <CodeBlock>{`bind fileName: "td:nth-child(2) a | text";
bind downloadUrl: "td:nth-child(2) a | attr:href";`}</CodeBlock>

      <SectionHeading>Operadores Extratores</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        O SPM inclui extratores integrados para ler diferentes partes dos nós do DOM antigo:
      </p>

      <table className="prose-spm" style={{ width: '100%', marginBottom: '2rem' }}>
        <thead>
          <tr>
            <th>OPERADOR</th>
            <th>EXEMPLO</th>
            <th>DESCRIÇÃO DO COMPORTAMENTO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="vnr-op">text</code></td>
            <td><code>"h1 | text"</code></td>
            <td>Extrai o texto interno limpo (<code>textContent.trim()</code>).</td>
          </tr>
          <tr>
            <td><code className="vnr-op">attr:&lt;nome&gt;</code></td>
            <td><code>"a | attr:href"</code></td>
            <td>Lê o valor do atributo HTML (ex: <code>href</code>, <code>src</code>, <code>data-id</code>).</td>
          </tr>
          <tr>
            <td><code className="vnr-op">html</code></td>
            <td><code>"div.content | html"</code></td>
            <td>Extrai o código HTML interno preservando formatação (<code>innerHTML</code>).</td>
          </tr>
          <tr>
            <td><code className="vnr-op">hiddenInputs</code></td>
            <td><code>"form | hiddenInputs"</code></td>
            <td>Extrai um vetor JSON com todos os pares <code>name</code> e <code>value</code> de inputs ocultos.</td>
          </tr>
        </tbody>
      </table>

      <SectionHeading>Extração de Listas Repetidas com child</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Para raspar tabelas com múltiplas linhas ou grades de cartões, use o bloco <code className="vnr-kw">child</code> dentro do <code className="vnr-kw">reconstruct</code> indicando a classe blueprint de extração:
      </p>

      <CodeBlock>{`class TableRowItem {
  bind id:       "td:nth-child(1) | text";
  bind name:     "td:nth-child(2) | text";
  bind link:     "td:nth-child(2) a | attr:href";
}

reconstruct "#documents-table" -> UiTableListPage {
  pageTitle: "Arquivos do Servidor";

  // Mapeia todas as tr do tbody usando a classe TableRowItem
  child tableRows extends TableRowItem {
    selector: "tbody tr";
  }
}`}</CodeBlock>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <Link to="/docs/veneer/reconstruct" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          ← Anterior: Reconstrução (reconstruct)
        </Link>
        <Link to="/docs/veneer/selectors" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Próximo: Seletores &amp; Ações →
        </Link>
      </div>
    </DocLayout>
  )
}
