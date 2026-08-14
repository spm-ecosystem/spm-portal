import DocLayout from '../../../components/DocLayout'
import CodeBlock from '../../../components/CodeBlock'
import { Link } from 'react-router-dom'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

export default function VeneerSyntaxPage() {
  return (
    <DocLayout title="Veneer Spec: Sintaxe & Gramática">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        A sintaxe da Veneer Spec é limpa, estritamente estruturada por blocos delimitados por chaves <code className="vnr-op">{"{}"}</code> e instruída por ponto e vírgula <code className="vnr-op">;</code>.
      </p>

      <SectionHeading>Estrutura de Arquivos (.vnr)</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Os arquivos fonte possuem a extensão <code className="vnr-str">.vnr</code> (ex: <code>theme/pages/dashboard.vnr</code>). O compilador <code className="vnr-cmd">spm-cli</code> pode ler arquivos individuais ou varrer pastas de temas recursivamente agregando e resolvendo dependências entre múltiplos arquivos <code className="vnr-str">.vnr</code>.
      </p>

      <SectionHeading>Literais de String &amp; Raw Strings (r#"..."#)</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        A Veneer Spec suporta dois formatos de literais de string:
      </p>

      <ul style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
        <li><strong style={{ color: '#fff' }}>String Padrão:</strong> Delimitada por aspas duplas <code className="vnr-str">"texto"</code> com suporte a caracteres de escape normais como <code>\n</code> ou <code>\"</code>.</li>
        <li><strong style={{ color: '#fff' }}>Raw String Literal:</strong> Delimitada por <code className="vnr-str">r#"..."#</code>. Ignora totalmente caracteres de escape. É ideal para seletores CSS complexos, expressões regulares e blocos de código CSS embutido.</li>
      </ul>

      <CodeBlock>{`// String Padrão
pageTitle: "Central de Relatórios \\n Produção";

// Raw String (perfeita para seletores com aspas ou regex sem precisar escapar)
bind userAvatar: r#"td.user-cell img[src*="avatar"] | attr:src"#;`}</CodeBlock>

      <SectionHeading>Comentários</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        O compilador descarta comentários durante a fase de lexing antes de montar a AST.
      </p>

      <CodeBlock>{`// Este é um comentário de linha única

/*
  Este é um comentário de múltiplas linhas.
  Útil para documentar regras de temas extensos.
*/`}</CodeBlock>

      <SectionHeading>Tabela de Palavras-Chave Reservadas</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        O lexer da Veneer Spec reconhece o seguinte conjunto de tokens e palavras-chave reservadas:
      </p>

      <table className="prose-spm" style={{ width: '100%', marginBottom: '2.5rem' }}>
        <thead>
          <tr>
            <th>PALAVRA-CHAVE</th>
            <th>ESCOPO</th>
            <th>DESCRIÇÃO / FINALIDADE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="vnr-kw">theme</code></td>
            <td>Raiz</td>
            <td>Define o nome do tema, variáveis CSS e estilos globais.</td>
          </tr>
          <tr>
            <td><code className="vnr-kw">class</code></td>
            <td>Raiz</td>
            <td>Declara uma classe blueprint de dados reutilizável.</td>
          </tr>
          <tr>
            <td><code className="vnr-kw">extends</code></td>
            <td>class / child</td>
            <td>Aplica herança simples estendendo outra classe base.</td>
          </tr>
          <tr>
            <td><code className="vnr-kw">selector</code></td>
            <td>Raiz</td>
            <td>Aplica ações diretas em seletores do DOM (ex: <code>action: hide;</code>).</td>
          </tr>
          <tr>
            <td><code className="vnr-kw">reconstruct</code></td>
            <td>Raiz</td>
            <td>Mapeia um seletor container para montar um componente React.</td>
          </tr>
          <tr>
            <td><code className="vnr-kw">child</code></td>
            <td>reconstruct</td>
            <td>Declara uma lista/vetor de elementos filhos extraídos do DOM.</td>
          </tr>
          <tr>
            <td><code className="vnr-kw">bind</code></td>
            <td>class / reconstruct</td>
            <td>Conecta uma propriedade a um seletor CSS e extrator de valor.</td>
          </tr>
          <tr>
            <td><code className="vnr-kw">preserve</code></td>
            <td>reconstruct</td>
            <td>Preserva inputs ocultos de formulário (ex: CSRF token).</td>
          </tr>
        </tbody>
      </table>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <Link to="/docs/veneer/introduction" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          ← Anterior: Visão Geral
        </Link>
        <Link to="/docs/veneer/theme" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Próximo: Definição de Temas (theme) →
        </Link>
      </div>
    </DocLayout>
  )
}
