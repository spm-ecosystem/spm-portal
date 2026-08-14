import DocLayout from '../../components/DocLayout'
import { Link } from 'react-router-dom'

const TOPICS = [
  {
    title: '1. Visão Geral & Motivação',
    to: '/docs/veneer/introduction',
    desc: 'Por que a Veneer Spec foi criada, eliminação de JSONs manuais verbosos e paradigma de blueprinting.'
  },
  {
    title: '2. Sintaxe & Gramática Core',
    to: '/docs/veneer/syntax',
    desc: 'Estrutura de arquivos .vnr, literais de string, raw strings r#"..."#, comentários e tabela de palavras-chave.'
  },
  {
    title: '3. Definição de Temas (theme)',
    to: '/docs/veneer/theme',
    desc: 'Bloco theme "Nome", mapeamento de variáveis CSS (variables) e folhas de estilo globais (customStyles).'
  },
  {
    title: '4. Classes & Herança (class / extends)',
    to: '/docs/veneer/classes',
    desc: 'Blueprints de dados reutilizáveis com class, herança simples via extends e escopamento por seletor.'
  },
  {
    title: '5. Reconstrução de Páginas (reconstruct)',
    to: '/docs/veneer/reconstruct',
    desc: 'Injeção de componentes React em Shadow DOM, atribuição de props e preservação de CSRF tokens.'
  },
  {
    title: '6. Bindings & Extratores (bind)',
    to: '/docs/veneer/bindings',
    desc: 'Extração de listas com child e operadores extratores (text, attr, html, hiddenInputs).'
  },
  {
    title: '7. Seletores & Ações (selector)',
    to: '/docs/veneer/selectors',
    desc: 'Ocultamento e modificação direta de elementos legados no DOM com action: hide.'
  },
  {
    title: '8. Diagnósticos & CLI (spm compile)',
    to: '/docs/veneer/tooling',
    desc: 'Compilação de especificações .vnr via spm-cli, validação de AST e diagnósticos de erros de sintaxe.'
  }
]

export default function VeneerSpec() {
  return (
    <DocLayout title="Veneer Spec DSL Language Manual">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        A <strong style={{ color: '#fff' }}>Veneer Spec (.vnr)</strong> é a linguagem de domínio específico (DSL) declarativa do ecossistema SPM. Selecione um tópico abaixo para explorar o manual completo:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
        {TOPICS.map(topic => (
          <Link
            key={topic.to}
            to={topic.to}
            style={{
              display: 'block', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)',
              borderRadius: '6px', padding: '1.4rem', textDecoration: 'none', transition: 'all 0.15s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-contrast)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <h3 style={{ color: '#fff', fontSize: '16px', margin: '0 0 0.5rem', fontWeight: 700 }}>
              {topic.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
              {topic.desc}
            </p>
            <span style={{ display: 'inline-block', marginTop: '1rem', color: '#fff', fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              Acessar capítulo →
            </span>
          </Link>
        ))}
      </div>
    </DocLayout>
  )
}
