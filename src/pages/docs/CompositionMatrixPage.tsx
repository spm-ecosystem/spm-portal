import DocLayout from '../../components/DocLayout'
import MarkdownDocViewer from '../../components/MarkdownDocViewer'

export default function CompositionMatrixPage() {
  return (
    <DocLayout activeSlug="composition">
      <div style={{ maxWidth: 900 }}>
        <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Component Architecture</p>
        <h1 className="page-title" style={{ margin: '0 0 1rem' }}>Component Architecture & Composition Matrix</h1>
        <p className="body-copy" style={{ marginBottom: '2.5rem' }}>
          Learn how Primitive Atoms (<code>UiTabs</code>, <code>UiSearchBar</code>, <code>UiTagBadge</code>, <code>UiTable</code>) compose inside Dedicated Organism Pages (<code>UiFormContainer</code>, <code>UiTableListPage</code>, <code>UiModernGridPage</code>).
        </p>

        <MarkdownDocViewer url="/src/docs/composition_matrix.md" />
      </div>
    </DocLayout>
  )
}
