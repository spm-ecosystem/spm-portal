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
    <DocLayout title="Veneer Spec: Classes & Inheritance (class / extends)">
      <p className="body-copy" style={{ marginBottom: '2rem', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-muted)' }}>
        In Veneer Spec, <code className="vnr-kw">class</code> constructs serve as <strong>reusable data and selector blueprints</strong>, allowing fields to be extended and overridden without code duplication.
      </p>

      <SectionHeading>Defining Reusable Classes</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        A class defines an object model containing a set of <code className="vnr-kw">bind</code> declarations (selector mappings):
      </p>

      <CodeBlock>{`class BaseMediaItem {
  bind id:       "td:nth-child(1) | text";
  bind title:    "td:nth-child(2) a | text";
  bind pageUrl:  "td:nth-child(2) a | attr:href";
}`}</CodeBlock>

      <SectionHeading>Single Inheritance with extends</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        Using the <code className="vnr-kw">extends</code> keyword, a derived class inherits all variables and bindings from its parent class, and can add new properties or override existing bindings:
      </p>

      <CodeBlock>{`// Derived class inheriting id, title, and pageUrl from BaseMediaItem
class DetailedFileRow extends BaseMediaItem {
  bind category: "td:nth-child(3) | text";
  bind fileSize: "td:nth-child(4) | text";
  bind downloadUrl: "td:nth-child(5) a | attr:href";
}`}</CodeBlock>

      <SectionHeading>Scoping with scope: "selector"</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '1rem' }}>
        The optional <code className="vnr-op">scope</code> property inside a class restricts all <code className="vnr-kw">bind</code> selector searches to a specific sub-container in the DOM:
      </p>

      <CodeBlock>{`class UserProfileCard {
  scope: ".user-detail-box";

  bind avatarUrl: "img.user-avatar | attr:src";
  bind username:  "h3.user-name | text";
  bind userRole:  "span.role-badge | text";
}`}</CodeBlock>

      <SectionHeading>Compiler Resolution</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, marginBottom: '2rem' }}>
        During the <strong>Resolution</strong> phase in <code className="vnr-cmd">spm-cli</code>:
      </p>
      <ul style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, paddingLeft: '1.25rem', marginBottom: '2.5rem' }}>
        <li>The compiler builds the inheritance tree of all classes.</li>
        <li>It merges binding dictionaries bottom-up, applying overrides.</li>
        <li>It detects and aborts the build with a fatal error if circular inheritance is found (e.g. <code>class A extends B</code> and <code>class B extends A</code>).</li>
      </ul>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border-contrast)' }}>
        <Link to="/docs/veneer/theme" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          ← Previous: Theme Definition
        </Link>
        <Link to="/docs/veneer/reconstruct" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700 }}>
          Next: Reconstruction (reconstruct) →
        </Link>
      </div>
    </DocLayout>
  )
}
