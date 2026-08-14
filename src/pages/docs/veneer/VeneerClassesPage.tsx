import DocLayout from '../../../components/DocLayout'
import CodeBlock from '../../../components/CodeBlock'
import { Link } from 'react-router-dom'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

export default function VeneerClassesPage() {
  return (
    <DocLayout title="Veneer Spec: Classes & Herança (class / extends)">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        As <code className="vnr-kw">class</code> no Veneer Spec servem como <strong>blueprints reutilizáveis de dados e seletores</strong>, permitindo estender e sobrescrever campos sem duplicação de código.
      </p>

      <SectionHeading>Definição de Classes Reutilizáveis</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Uma classe define um modelo de objeto contendo um conjunto de declarações de <code className="vnr-kw">bind</code> (mapeamento de seletores):
      </p>

      <CodeBlock>{`class BaseMediaItem {
  bind id:       "td:nth-child(1) | text";
  bind title:    "td:nth-child(2) a | text";
  bind pageUrl:  "td:nth-child(2) a | attr:href";
}`}</CodeBlock>

      <SectionHeading>Herança Simples com extends</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Com a palavra-chave <code className="vnr-kw">extends</code>, uma classe derivada herda todas as variáveis e bindings da classe pai, podendo adicionar novas propriedades ou sobrescrever bindings existentes:
      </p>

      <CodeBlock>{`// Classe Derivada que herda id, title e pageUrl de BaseMediaItem
class DetailedFileRow extends BaseMediaItem {
  bind category: "td:nth-child(3) | text";
  bind fileSize: "td:nth-child(4) | text";
  bind downloadUrl: "td:nth-child(5) a | attr:href";
}`}</CodeBlock>

      <SectionHeading>Escopamento com scope: "selector"</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        A propriedade opcional <code className="vnr-op">scope</code> dentro de uma classe restringe a busca de todos os seletores <code className="vnr-kw">bind</code> a um sub-container específico do DOM:
      </p>

      <CodeBlock>{`class UserProfileCard {
  scope: ".user-detail-box";

  bind avatarUrl: "img.user-avatar | attr:src";
  bind username:  "h3.user-name | text";
  bind userRole:  "span.role-badge | text";
}`}</CodeBlock>

      <SectionHeading>Resolução pelo Compilador</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '2rem' }}>
        Durante a fase de <strong>Resolution</strong> no <code className="vnr-cmd">spm-cli</code>:
      </p>
      <ul style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, paddingLeft: '1.25rem', marginBottom: '2.5rem' }}>
        <li>O compilador constrói a árvore de herança de todas as classes.</li>
        <li>Mescla os dicionários de bindings de baixo para cima (bottom-up), aplicando overrides.</li>
        <li>Detecta e interrompe o build com erro fatal caso encontre herança circular (ex: <code>class A extends B</code> e <code>class B extends A</code>).</li>
      </ul>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <Link to="/docs/veneer/theme" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          ← Anterior: Definição de Temas
        </Link>
        <Link to="/docs/veneer/reconstruct" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Próximo: Reconstrução (reconstruct) →
        </Link>
      </div>
    </DocLayout>
  )
}
