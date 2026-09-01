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
    <DocLayout title="Veneer Spec: Reconstruction (reconstruct)">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        The <code className="vnr-kw">reconstruct</code> block is the heart of modernization in SPM. It intercepts legacy DOM selectors and replaces them by mounting isolated React components in Shadow DOM.
      </p>

      <SectionHeading>Shadow DOM Injection with reconstruct</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        The syntax connects a container selector to a target React component using the <code className="vnr-op">-&gt;</code> operator:
      </p>

      <CodeBlock>{`reconstruct "#legacy-content-wrapper" -> UiTableListPage {
  pageTitle: "Reports Center";
  searchPlaceholder: "Search documents...";
}`}</CodeBlock>

      <SectionHeading>Direct Prop Assignment</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Values declared directly in the body of the <code className="vnr-kw">reconstruct</code> block (such as <code>pageTitle: "..."</code>) are passed as static props to the React component.
      </p>

      <SectionHeading>Form Input Preservation (preserve)</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Legacy pages frequently rely on hidden security elements to submit POST forms (such as <code>csrfmiddlewaretoken</code> or <code>session_id</code>). The <code className="vnr-kw">preserve</code> block instructs the extension to move these intact nodes into the new DOM:
      </p>

      <CodeBlock>{`reconstruct "#search-form" -> UiSearchBar {
  placeholder: "Search system...";
  
  // Preserve all hidden inputs contained in the original form
  preserve: "form | hiddenInputs";
}`}</CodeBlock>

      <SectionHeading>Media Query Conditionals (media)</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        You can condition reconstruction on screen resolutions using the <code className="vnr-op">media</code> parameter:
      </p>

      <CodeBlock>{`reconstruct "#mobile-navigation" -> UiNavHeader {
  media: "(max-width: 768px)";
  siteName: "Mobile Portal";
}`}</CodeBlock>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <Link to="/docs/veneer/classes" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          ← Previous: Classes &amp; Inheritance
        </Link>
        <Link to="/docs/veneer/bindings" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Next: Bindings &amp; Extractors →
        </Link>
      </div>
    </DocLayout>
  )
}
