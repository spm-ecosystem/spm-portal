import DocLayout from '../../components/DocLayout'
import CodeBlock from '../../components/CodeBlock'

const SectionHeading = ({ children }: { children: string }) => (
  <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0, margin: '2.5rem 0 1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-contrast)' }}>
    {children}
  </h2>
)

const FeatureCard = ({ title, desc }: { title: string; desc: string }) => (
  <div style={{ border: '1px solid var(--border-contrast)', borderRadius: '4px', padding: '1.25rem', background: 'var(--bg-surface)', marginBottom: '1rem' }}>
    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#fff', fontWeight: 700, margin: '0 0 6px' }}>{title}</p>
    <p style={{ color: 'var(--text-muted)', fontSize: 13, margin: 0, lineHeight: 1.65 }}>{desc}</p>
  </div>
)

export default function Tooling() {
  return (
    <DocLayout title="CLI & Tooling">
      <p className="body-copy" style={{ marginBottom: '2rem' }}>
        Mapa das ferramentas que cercam o SPM. Esta página documenta o papel do <code>spm-cli</code>:
        compilar Veneer Spec, observar temas em desenvolvimento e publicar artefatos.
      </p>

      <SectionHeading>Contrato de compilação</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: '1rem' }}>
        O ponto central do tooling é transformar arquivos <code>.vnr</code> em um <code>manifest.json</code> único.
        A extensão deve consumir esse manifesto sem depender dos detalhes internos do compilador.
      </p>

      <CodeBlock>{`# Compilar uma pasta de tema
spm compile theme/ -o theme/manifest.json

# Compilar um arquivo isolado
spm compile theme/pages/gallery.vnr -o /tmp/gallery.json`}</CodeBlock>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {[
          { title: 'Lexing', desc: 'Remove comentários e transforma a Veneer Spec em tokens.' },
          { title: 'Parsing', desc: 'Monta a AST com blocos theme, class, selector e reconstruct.' },
          { title: 'Resolution', desc: 'Resolve extends, herança, overrides e classes compartilhadas.' },
          { title: 'Emission', desc: 'Gera manifest.json e preserva metadados existentes quando possível.' },
        ].map(item => (
          <FeatureCard key={item.title} title={item.title} desc={item.desc} />
        ))}
      </div>

      <SectionHeading>Desenvolvimento local</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: '1rem' }}>
        O modo de desenvolvimento deve observar mudanças no tema e notificar a extensão quando um manifesto novo
        estiver pronto para aplicação na aba aberta.
      </p>

      <CodeBlock>{`spm dev -d /path/to/theme/

# Saida esperada
# SPM Dev Server - ws://localhost:8080
# Monitoring: /path/to/theme/
# [Watcher] Syncing changes...`}</CodeBlock>

      <FeatureCard
        title="Payload do watcher"
        desc="O servidor recompila .vnr quando recebe um diretório ou arquivo, agrega CSS do tema e envia um JSON com manifest e css para a extensão."
      />
      <FeatureCard
        title="Porta padrão"
        desc="O dev server usa WebSocket em ws://localhost:8080. A extensão pode se conectar e pedir para observar um caminho específico."
      />

      <SectionHeading>Diagnósticos de editor</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: '1.5rem' }}>
        Uma integração de editor deve reaproveitar as mesmas fases do compilador para devolver erros antes do build final.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {[
          { type: 'Léxico', desc: 'Caracteres inesperados, strings incompletas e tokens inválidos.' },
          { type: 'Sintático', desc: 'Blocos mal formados, chaves ausentes e pipes incorretos.' },
          { type: 'Semântico', desc: 'Componentes, classes ou props inexistentes no catálogo carregado.' },
          { type: 'Autocomplete', desc: 'Sugestões de componentes, props, operadores de bind e escopos.' },
        ].map(d => (
          <div key={d.type} style={{ border: '1px solid var(--border-contrast)', borderRadius: '4px', padding: '1rem', background: 'var(--bg-surface)' }}>
            <p className="eyebrow" style={{ marginBottom: 6 }}>{d.type}</p>
            <p style={{ color: 'var(--text-primary)', fontSize: 13, margin: 0, lineHeight: 1.55 }}>{d.desc}</p>
          </div>
        ))}
      </div>

      <SectionHeading>Publicação de temas</SectionHeading>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7, marginBottom: '1rem' }}>
        A publicação deve enviar artefatos compilados, não arquivos fonte soltos. O provedor de storage fica fora do contrato do portal.
      </p>

      <CodeBlock>{`# Pipeline simplificado de publicação (GitHub Actions / CI/CD)
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Compilar temas
        run: spm compile themes/ -o dist/manifest.json
      - name: Publicar artefatos
        run: ./scripts/deploy-themes dist/`}</CodeBlock>

      <SectionHeading>Comandos expostos</SectionHeading>
      <div style={{ marginBottom: '1rem' }}>
        <FeatureCard title="spm install" desc="Instala o binário no PATH do sistema." />
        <FeatureCard title="spm compile <source> -o <output>" desc="Compila arquivo .vnr ou diretório de tema para manifest.json." />
        <FeatureCard title="spm dev -d <path>" desc="Inicia o servidor WebSocket de desenvolvimento observando um tema, arquivo .vnr ou manifesto." />
        <FeatureCard title="spm publish" desc="Fluxo reservado para publicação de tema no registro do SPM." />
      </div>
    </DocLayout>
  )
}
