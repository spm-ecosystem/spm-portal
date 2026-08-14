import DocLayout from '../../../components/DocLayout'
import CodeBlock from '../../../components/CodeBlock'
import { Link } from 'react-router-dom'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

export default function VeneerToolingPage() {
  return (
    <DocLayout title="Veneer Spec: Diagnósticos & CLI (spm compile)">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        O compilador <code className="vnr-cmd">spm-cli</code> compila especificações Veneer Spec em um contrato JSON otimizado emitindo diagnósticos e mensagens de erro estruturadas.
      </p>

      <SectionHeading>Compilação com spm-cli</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Você pode compilar um diretório completo de temas contendo múltiplos arquivos <code className="vnr-str">.vnr</code> ou compilar um arquivo isolado:
      </p>

      <CodeBlock>{`# Compilar um diretório completo de tema
spm compile theme/ -o theme/manifest.json

# Compilar um arquivo isolado .vnr
spm compile theme/pages/dashboard.vnr -o /tmp/dashboard.json`}</CodeBlock>

      <SectionHeading>Fases do Compilador C++17</SectionHeading>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '14px', fontFamily: 'var(--font-mono)' }}>1. Lexer (Análise Léxica)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
            Tokeniza caracteres em palavras-chave (<code className="vnr-kw">class</code>, <code className="vnr-kw">reconstruct</code>), identificadores, delimitadores e literais de string.
          </p>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '14px', fontFamily: 'var(--font-mono)' }}>2. Parser (Análise Sintática)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
            Constrói a Árvores de Sintaxe Abstrata (AST) validando fechamento de chaves <code className="vnr-op">{"{}"}</code> e delimitadores <code className="vnr-op">;</code>.
          </p>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '14px', fontFamily: 'var(--font-mono)' }}>3. Resolver (Resolução)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
            Mescla a herança entre classes base e derivadas (<code className="vnr-kw">extends</code>) e verifica se há dependências circulares.
          </p>
        </div>

        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', padding: '1.25rem', borderRadius: '4px' }}>
          <h4 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '14px', fontFamily: 'var(--font-mono)' }}>4. Emitter (Emissão JSON)</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
            Emite o manifesto final compilado preservando metadados como <code>targetUrl</code> e <code>version</code>.
          </p>
        </div>
      </div>

      <SectionHeading>Diagnósticos de Erros</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Se o compilador encontrar um caractere inesperado ou chave ausente, ele retorna um erro descritivo indicando a linha e o token com erro:
      </p>

      <CodeBlock>{`[Veneer Parser Error] SyntaxError at line 14:
  expected ';' after binding property value 'td:nth-child(1) | text'
  got 'reconstruct'`}</CodeBlock>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <Link to="/docs/veneer/selectors" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          ← Anterior: Seletores &amp; Ações
        </Link>
        <Link to="/docs/manifest" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Próximo: Manifest Schema Reference →
        </Link>
      </div>
    </DocLayout>
  )
}
