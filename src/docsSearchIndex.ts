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
    title: 'Veneer Spec',
    path: '/docs/veneer',
    description: 'Referência da DSL .vnr: theme, class, extends, selector, reconstruct, child, bind, preserve, scope e raw strings.',
    keywords: ['veneer', '.vnr', 'dsl', 'bind', 'selector', 'reconstruct', 'child', 'preserve', 'scope', 'raw string', 'extends', 'class'],
    headings: ['Modelo mental', 'Blocos principais', 'Como o compilador entende isso', 'selector vs reconstruct', 'Herança estática', 'Operadores de bind'],
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
  {
    title: 'Catálogo de componentes',
    path: '/components',
    description: 'Inventário de primitivas e componentes dedicados usados pelos temas Veneer para montar interfaces React.',
    keywords: ['componentes', 'React', 'UiBox', 'UiGrid', 'UiSplitLayout', 'UiTableListPage', 'UiDashboardPage', 'props contract'],
    headings: ['Primitivas', 'Componentes dedicados'],
  },
  {
    title: 'UiTableListPage',
    path: '/components/dedicated/ui-table-list-page',
    description: 'Listas tabulares densas com colunas configuráveis, links, badges, linhas extraídas e paginação preservada.',
    keywords: ['tabela', 'tableRows', 'columns', 'badge', 'link', 'pagination', 'UiTableListPage'],
    headings: ['Quando usar', 'Contrato de props', 'Exemplo Veneer'],
  },
  {
    title: 'UiSplitLayout',
    path: '/components/dedicated/ui-split-layout',
    description: 'Layout com conteúdo principal e sidebar para mídia, metadados, tags, busca e ações preservadas do DOM legado.',
    keywords: ['split layout', 'sidebar', 'imageSlot', 'tags', 'statisticsHtml', 'preserve', 'UiSplitLayout'],
    headings: ['Quando usar', 'Contrato de props', 'Exemplo Veneer'],
  },
  {
    title: 'UiCommentListPage',
    path: '/components/dedicated/ui-comment-list-page',
    description: 'Lista de comentários extraídos do DOM legado com autor, data, HTML do corpo, avatar e paginação.',
    keywords: ['comentários', 'threads', 'pageLinks', 'avatar', 'author', 'UiCommentListPage'],
    headings: ['Quando usar', 'Contrato de props', 'Exemplo Veneer'],
  },
  {
    title: 'UiStatsDashboard',
    path: '/components/dedicated/ui-stats-dashboard',
    description: 'Rankings e métricas existentes no DOM legado, agrupadas em seções com filtros e itens extraídos.',
    keywords: ['stats', 'dashboard', 'rankings', 'metrics', 'sections', 'navLinks', 'UiStatsDashboard'],
    headings: ['Quando usar', 'Contrato de props', 'Exemplo Veneer'],
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
