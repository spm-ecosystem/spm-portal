import DocLayout from '../../components/DocLayout'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

const CodeBlock = ({ children }: { children: string }) => (
  <pre style={{ margin: '1rem 0 1.5rem' }}>{children.trim()}</pre>
)

const Step = ({ n, title, children }: { n: number; title: string; children: React.ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: '1rem', marginBottom: '2rem' }}>
    <div style={{
      width: 28, height: 28, borderRadius: 999, border: '1px solid var(--border-focus)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-mono)', fontSize: 12, color: '#fff', fontWeight: 700,
    }}>{n}</div>
    <div>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: '2px 0 0.75rem' }}>{title}</h3>
      {children}
    </div>
  </div>
)

const BulletList = ({ items }: { items: string[] }) => (
  <ul style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.8, paddingLeft: '1.2rem', margin: '0 0 1.5rem' }}>
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>
)

export default function GettingStarted() {
  return (
    <DocLayout title="Primeiros passos">
      <p className="body-copy" style={{ marginBottom: '2rem' }}>
        SPM moderniza páginas legadas sem alterar o servidor original. O fluxo é declarativo:
        o tema descreve seletores, o <code>spm-cli</code> compila um manifesto e a extensão monta componentes React isolados em Shadow DOM.
      </p>

      <SectionHeading>O que cada parte faz</SectionHeading>
      <BulletList items={[
        'site-package-manager: extensão MV3 que carrega manifestos, aplica tema global, extrai dados do DOM e monta componentes.',
        'spm-cli: compilador C++17 que transforma arquivos .vnr em manifest.json e serve hot-reload local via WebSocket.',
        'spm-components: biblioteca React usada como destino dos blocos selector e reconstruct.',
        'spm-websites: lugar natural para temas por domínio, CSS e manifestos compilados.',
        'spm-vscode: camada de ergonomia para syntax highlight, lint e autocomplete da Veneer Spec.',
      ]} />

      <SectionHeading>Fluxo mental</SectionHeading>
      <div style={{ display: 'grid', gap: 1, background: 'var(--border-contrast)', border: '1px solid var(--border-contrast)', borderRadius: 4, overflow: 'hidden', marginBottom: '2rem' }}>
        {[
          ['1', 'Inspecionar o HTML legado', 'Identifique containers, listas, links, formulários e metadados que já existem na página.'],
          ['2', 'Escrever .vnr', 'Declare o alvo, o componente React e como cada prop será extraída.'],
          ['3', 'Compilar manifest.json', 'O spm-cli resolve classes, valida sintaxe e emite o JSON consumido pela extensão.'],
          ['4', 'Carregar no navegador', 'A extensão busca ou recebe o manifesto, aplica CSS e renderiza os componentes.'],
          ['5', 'Iterar com hot-reload', 'No modo dev, alterações no tema são recompiladas e enviadas para a extensão.'],
        ].map(([n, title, desc]) => (
          <div key={n} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '1rem', background: 'var(--bg-surface)', padding: '1rem' }}>
            <code>{n}</code>
            <div>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: 13, margin: '0 0 0.25rem' }}>{title}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <SectionHeading>Rodar a extensão</SectionHeading>
      <Step n={1} title="Instalar dependências e compilar">
        <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: '0.75rem' }}>
          Na raiz do repositório da extensão, gere a pasta <code>dist/</code>.
        </p>
        <CodeBlock>{`
npm install
npm run build
        `}</CodeBlock>
      </Step>

      <Step n={2} title="Carregar a extensão no Chrome">
        <BulletList items={[
          'Abra chrome://extensions.',
          'Ative Developer Mode.',
          'Clique em Load unpacked.',
          'Selecione a pasta dist/ gerada pelo build.',
        ]} />
      </Step>

      <Step n={3} title="Preparar um tema local">
        <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: '0.75rem' }}>
          Um tema mínimo precisa de arquivos <code>.vnr</code>, CSS opcional e um manifesto compilado.
          O CLI aceita diretórios e varre arquivos <code>.vnr</code> recursivamente.
        </p>
        <CodeBlock>{`
theme/
  manifest.json
  content.css
  pages/
    gallery.vnr
  shared/
    classes.vnr
        `}</CodeBlock>
      </Step>

      <Step n={4} title="Compilar ou observar mudanças">
        <CodeBlock>{`
# compilar uma pasta de tema
spm compile theme/ -o theme/manifest.json

# iniciar servidor de desenvolvimento
spm dev -d theme/
        `}</CodeBlock>
      </Step>

      <SectionHeading>Anti-flickering</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: '1rem' }}>
        A extensão evita mostrar a página antiga durante a reconstrução. O interceptor roda em <code>document_start</code>,
        esconde temporariamente o corpo da página e libera a renderização com <code>revealPage()</code> quando o fluxo termina
        ou quando a extensão decide abortar.
      </p>
      <BulletList items={[
        'O CSS anti-flicker entra antes do conteúdo legado piscar na tela.',
        'O tema global aplica tokens CSS e customStyles no documento principal.',
        'Os hosts React usam Shadow DOM para isolar estilos dos componentes.',
        'Containers reconstruídos recebem marcação para evitar montagem duplicada.',
      ]} />

      <SectionHeading>Abrir este portal</SectionHeading>
      <CodeBlock>{`
cd ImportMarkdownContent
npm install
npm run dev
      `}</CodeBlock>
    </DocLayout>
  )
}
