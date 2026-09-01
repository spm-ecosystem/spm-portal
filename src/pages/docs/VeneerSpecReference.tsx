import DocLayout from '../../components/DocLayout'
import MarkdownDocViewer from '../../components/MarkdownDocViewer'

export default function VeneerSpecReference() {
  return (
    <DocLayout activeSlug="veneer-reference">
      <div style={{ maxWidth: 900 }}>
        <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Compiler Reference Manual</p>
        <h1 className="page-title" style={{ margin: '0 0 1rem' }}>Veneer Spec Language Reference Manual</h1>
        <p className="body-copy" style={{ marginBottom: '2.5rem' }}>
          Complete, authoritative specification of the Veneer Spec (`.vnr`) DSL compiled by `spm-cli`.
        </p>

        <MarkdownDocViewer url="/src/docs/veneer_spec.md" />
      </div>
    </DocLayout>
  )
}
