import DocLayout from '../../../components/DocLayout'
import CodeBlock from '../../../components/CodeBlock'
import { Link } from 'react-router-dom'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

export default function VeneerReconstructPage() {
  return (
    <DocLayout title="Veneer Spec: Reconstrução (reconstruct)">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        O bloco <code className="vnr-kw">reconstruct</code> é o coração da modernização no SPM. Ele intercepta seletores do DOM antigo e os substitui montando componentes React isolados em Shadow DOM.
      </p>

      <SectionHeading>Injeção em Shadow DOM com reconstruct</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        A sintaxe conecta um seletor container a um componente React alvo usando o operador <code className="vnr-op">-&gt;</code>:
      </p>

      <CodeBlock>{`reconstruct "#legacy-content-wrapper" -> UiTableListPage {
  pageTitle: "Central de Relatórios";
  searchPlaceholder: "Pesquisar documentos...";
}`}</CodeBlock>

      <SectionHeading>Atribuição de Props Diretas</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Valores declarados diretamente no corpo do bloco <code className="vnr-kw">reconstruct</code> (como <code>pageTitle: "..."</code>) são passados como props estáticas para o componente React.
      </p>

      <SectionHeading>Preservação de Form Inputs (preserve)</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Páginas legadas frequentemente dependem de elementos ocultos de segurança para submeter formulários POST (como <code>csrfmiddlewaretoken</code> ou <code>session_id</code>). O bloco <code className="vnr-kw">preserve</code> instrui a extensão a mover esses nós intactos para o novo DOM:
      </p>

      <CodeBlock>{`reconstruct "#search-form" -> UiSearchBar {
  placeholder: "Pesquisar no sistema...";
  
  // Preserva todos os inputs type="hidden" contidos no formulário original
  preserve: "form | hiddenInputs";
}`}</CodeBlock>

      <SectionHeading>Condicionais por Media Query (media)</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Você pode condicionar a reconstrução a resoluções de tela usando o parâmetro <code className="vnr-op">media</code>:
      </p>

      <CodeBlock>{`reconstruct "#mobile-navigation" -> UiNavHeader {
  media: "(max-width: 768px)";
  siteName: "Portal Mobile";
}`}</CodeBlock>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <Link to="/docs/veneer/classes" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          ← Anterior: Classes &amp; Herança
        </Link>
        <Link to="/docs/veneer/bindings" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Próximo: Bindings &amp; Extratores →
        </Link>
      </div>
    </DocLayout>
  )
}
