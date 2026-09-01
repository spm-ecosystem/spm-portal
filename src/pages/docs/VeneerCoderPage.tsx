import DocLayout from '../../components/DocLayout'
import MarkdownDocViewer from '../../components/MarkdownDocViewer'

export default function VeneerCoderPage() {
  return (
    <DocLayout activeSlug="veneer-coder">
      <div style={{ maxWidth: 900 }}>
        <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>AI Agent & Fine-Tuning Tooling</p>
        <h1 className="page-title" style={{ margin: '0 0 1rem' }}>Veneer Coder AI Subagent Manual</h1>
        <p className="body-copy" style={{ marginBottom: '2.5rem' }}>
          Compiler-aware fine-tuned LLM subagent for automated legacy HTML modernization and Veneer DSL generation.
        </p>

        <MarkdownDocViewer url="/src/docs/spm_veneer_coder.md" />
      </div>
    </DocLayout>
  )
}
