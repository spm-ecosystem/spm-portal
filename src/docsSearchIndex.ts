export interface DocsSearchItem {
  title: string
  path: string
  description: string
  keywords: string[]
  headings: string[]
}

export interface IndexedDocsSearchItem extends DocsSearchItem {
  normalizedTitle: string
  normalizedDescription: string
  normalizedKeywords: string
  normalizedHeadings: string
  normalizedAll: string
}

const items: DocsSearchItem[] = [
  {
    title: 'Primeiros passos',
    path: '/docs/getting-started',
    description: 'Visão geral do SPM, fluxo de uso, instalação local da extensão, tema local, hot reload e anti-flicker.',
    keywords: ['quickstart', 'instalação', 'chrome', 'extensão', 'dist', 'anti-flicker', 'tema local', 'spm dev', 'spm compile'],
    headings: ['O que cada parte faz', 'Fluxo mental', 'Rodar a extensão', 'Preparar um tema local', 'Anti-flickering'],
  },
  {
    title: 'Veneer Spec DSL (Visão Geral)',
    path: '/docs/veneer',
    description: 'Manual de referência da linguagem Veneer Spec DSL (.vnr) para compiladores SPM.',
    keywords: ['veneer', '.vnr', 'dsl', 'linguagem', 'compilador', 'spm-cli'],
    headings: ['Tópicos da Linguagem', 'Manual de Referência'],
  },
  {
    title: 'Veneer: Visão Geral & Motivação',
    path: '/docs/veneer/introduction',
    description: 'Por que a Veneer Spec foi criada, substituição de JSONs complexos e arquitetura de blueprints.',
    keywords: ['motivação', 'arquitetura', 'filosofia', 'blueprint', 'declarativo', 'json vs vnr'],
    headings: ['Por que a Veneer Spec foi criada?', 'Filosofia de Blueprinting', 'Comparativo: JSON vs Veneer Spec'],
  },
  {
    title: 'Veneer: Sintaxe & Gramática',
    path: '/docs/veneer/syntax',
    description: 'Sintaxe core da linguagem .vnr: literais de string, raw strings r#"..."#, comentários e tokens reservados.',
    keywords: ['sintaxe', 'gramática', 'raw string', 'comentários', 'tokens', 'literais', 'aspas'],
    headings: ['Estrutura de Arquivos', 'Literais de String & Raw Strings', 'Comentários', 'Tabela de Palavras-Chave Reservadas'],
  },
  {
    title: 'Veneer: Definição de Temas (theme)',
    path: '/docs/veneer/theme',
    description: 'Bloco theme "Nome" { ... }, variáveis CSS personalizadas (variables) e folhas de estilo globais (customStyles).',
    keywords: ['theme', 'variables', 'customStyles', 'css variables', 'estilos globais', 'design tokens'],
    headings: ['Bloco theme', 'Mapeamento de variáveis CSS', 'Injeção de CSS Global'],
  },
  {
    title: 'Veneer: Classes & Herança (class / extends)',
    path: '/docs/veneer/classes',
    description: 'Criação de blueprints reutilizáveis com class e herança simples com a palavra-chave extends.',
    keywords: ['class', 'extends', 'herança', 'blueprints', 'scope', 'reutilização', 'poo'],
    headings: ['Definição de Classes', 'Herança com extends', 'Escopamento com scope', 'Resolução de Propriedades'],
  },
  {
    title: 'Veneer: Reconstrução (reconstruct)',
    path: '/docs/veneer/reconstruct',
    description: 'Injeção de componentes React em Shadow DOM com reconstruct, atribuição de props e preservação de CSRF.',
    keywords: ['reconstruct', 'shadow dom', 'props', 'preserve', 'media query', 'injeção'],
    headings: ['Injeção em Shadow DOM', 'Atribuição de Props Diretas', 'Preservação de Form Inputs (preserve)', 'Media Queries'],
  },
  {
    title: 'Veneer: Bindings & Extratores (bind)',
    path: '/docs/veneer/bindings',
    description: 'Extração de dados do DOM com child e operadores de bind (text, attr, html, hiddenInputs).',
    keywords: ['bind', 'child', 'extrator', 'text', 'attr', 'html', 'hiddenInputs', 'pipes', 'scraping'],
    headings: ['Extração de Listas com child', 'Sintaxe de Binding', 'Operadores Extratores', 'Encadeamento com Pipes'],
  },
  {
    title: 'Veneer: Seletores & Ações (selector)',
    path: '/docs/veneer/selectors',
    description: 'Ocultamento e modificação direta de elementos legados no DOM com action: hide.',
    keywords: ['selector', 'action', 'hide', 'ocultar', 'dom legado', 'remover'],
    headings: ['Ocultando Elementos Legados', 'Modificação Direta'],
  },
  {
    title: 'Veneer: Diagnósticos & CLI (spm compile)',
    path: '/docs/veneer/tooling',
    description: 'Compilação de arquivos .vnr via spm-cli, diagnósticos de erros de sintaxe e verificação de herança circular.',
    keywords: ['spm compile', 'diagnósticos', 'erros de sintaxe', 'herança circular', 'cli', 'ast'],
    headings: ['Compilação com spm-cli', 'Diagnósticos de Erros', 'Grafos de Herança'],
  },
  {
    title: 'Manifest Schema',
    path: '/docs/manifest',
    description: 'Formato JSON compilado: targetUrl, theme, components, reconstructs, props, propsMap, preserve, children e infiniteScroll.',
    keywords: ['manifest', 'json', 'schema', 'targetUrl', 'theme', 'components', 'reconstructs', 'propsMap', 'children', 'infiniteScroll'],
    headings: ['Campos raiz', 'theme', 'components', 'reconstructs', 'Exemplo mínimo'],
  },
  {
    title: 'CLI & Tooling',
    path: '/docs/tooling',
    description: 'spm-cli, compilação, watcher WebSocket, payload de desenvolvimento, diagnósticos de editor, publicação e comandos.',
    keywords: ['spm-cli', 'compile', 'dev', 'publish', 'websocket', 'watcher', 'lexer', 'parser', 'resolver', 'emitter', 'diagnóstico'],
    headings: ['Contrato de compilação', 'Desenvolvimento local', 'Diagnósticos de editor', 'Publicação de temas', 'Comandos expostos'],
  },
]

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

export const docsSearchIndex: IndexedDocsSearchItem[] = items.map(item => ({
  ...item,
  normalizedTitle: normalize(item.title),
  normalizedDescription: normalize(item.description),
  normalizedKeywords: normalize(item.keywords.join(' ')),
  normalizedHeadings: normalize(item.headings.join(' ')),
  normalizedAll: normalize([
    item.title,
    item.description,
    item.keywords.join(' '),
    item.headings.join(' '),
  ].join(' ')),
}))

export const normalizeDocsQuery = normalize

const tokenize = (value: string) =>
  normalize(value)
    .split(/\s+/)
    .map(token => token.trim())
    .filter(Boolean)

export function createDocsSearchIndex(source: DocsSearchItem[]): IndexedDocsSearchItem[] {
  return source.map(item => ({
    ...item,
    normalizedTitle: normalize(item.title),
    normalizedDescription: normalize(item.description),
    normalizedKeywords: normalize(item.keywords.join(' ')),
    normalizedHeadings: normalize(item.headings.join(' ')),
    normalizedAll: normalize([
      item.title,
      item.description,
      item.keywords.join(' '),
      item.headings.join(' '),
    ].join(' ')),
  }))
}

export function searchDocs(query: string, index: IndexedDocsSearchItem[] = docsSearchIndex, limit = 8) {
  const terms = tokenize(query)
  if (terms.length === 0) return []

  return index
    .map(item => {
      let score = 0
      for (const term of terms) {
        if (item.normalizedTitle.includes(term)) score += 42
        if (item.normalizedKeywords.includes(term)) score += 30
        if (item.normalizedHeadings.includes(term)) score += 20
        if (item.normalizedDescription.includes(term)) score += 16
        if (item.normalizedAll.split(/\s+/).some(token => token.startsWith(term))) score += 10
        if (!item.normalizedAll.includes(term)) score -= 18
      }
      return { item, score }
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
}
