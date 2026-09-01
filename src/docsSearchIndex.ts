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
    title: 'Getting Started',
    path: '/docs/getting-started',
    description: 'SPM overview, usage workflow, extension installation, local theme setup, hot reload, and anti-flicker.',
    keywords: ['quickstart', 'installation', 'chrome', 'extension', 'dist', 'anti-flicker', 'local theme', 'spm dev', 'spm compile'],
    headings: ['What each part does', 'Mental model', 'Running the extension', 'Prepare a local theme', 'Anti-flickering'],
  },
  {
    title: 'Veneer Spec DSL (Overview)',
    path: '/docs/veneer',
    description: 'Reference manual for the Veneer Spec DSL (.vnr) language for SPM compilers.',
    keywords: ['veneer', '.vnr', 'dsl', 'language', 'compiler', 'spm-cli'],
    headings: ['Language Topics', 'Reference Manual'],
  },
  {
    title: 'Veneer: Overview & Motivation',
    path: '/docs/veneer/introduction',
    description: 'Why Veneer Spec was created, replacing complex JSONs, and blueprinting architecture.',
    keywords: ['motivation', 'architecture', 'philosophy', 'blueprint', 'declarative', 'json vs vnr'],
    headings: ['Why Veneer Spec was created', 'Blueprinting Philosophy', 'Comparison: JSON vs Veneer Spec'],
  },
  {
    title: 'Veneer: Syntax & Grammar',
    path: '/docs/veneer/syntax',
    description: 'Core syntax of the .vnr language: string literals, raw strings r#"..."#, comments, and reserved tokens.',
    keywords: ['syntax', 'grammar', 'raw string', 'comments', 'tokens', 'literals', 'quotes'],
    headings: ['File Structure', 'String Literals & Raw Strings', 'Comments', 'Reserved Keywords Table'],
  },
  {
    title: 'Veneer: Theme Definition (theme)',
    path: '/docs/veneer/theme',
    description: 'theme "Name" { ... } block, custom CSS variables (variables), and global stylesheets (customStyles).',
    keywords: ['theme', 'variables', 'customStyles', 'css variables', 'global styles', 'design tokens'],
    headings: ['Theme Block', 'CSS Variable Mapping', 'Global CSS Injection'],
  },
  {
    title: 'Veneer: Classes & Inheritance (class / extends)',
    path: '/docs/veneer/classes',
    description: 'Creating reusable blueprints with class and single inheritance with the extends keyword.',
    keywords: ['class', 'extends', 'inheritance', 'blueprints', 'scope', 'reusability', 'oop'],
    headings: ['Class Definition', 'Inheritance with extends', 'Scoping with scope', 'Property Resolution'],
  },
  {
    title: 'Veneer: Reconstruction (reconstruct)',
    path: '/docs/veneer/reconstruct',
    description: 'React component injection into Shadow DOM with reconstruct, prop assignment, and CSRF preservation.',
    keywords: ['reconstruct', 'shadow dom', 'props', 'preserve', 'media query', 'injection'],
    headings: ['Shadow DOM Injection', 'Direct Prop Assignment', 'Form Input Preservation (preserve)', 'Media Queries'],
  },
  {
    title: 'Veneer: Bindings & Extractors (bind)',
    path: '/docs/veneer/bindings',
    description: 'DOM data extraction with child and bind operators (text, attr, html, hiddenInputs).',
    keywords: ['bind', 'child', 'extractor', 'text', 'attr', 'html', 'hiddenInputs', 'pipes', 'scraping'],
    headings: ['List Extraction with child', 'Binding Syntax', 'Extractor Operators', 'Piping & Chaining'],
  },
  {
    title: 'Veneer: Selectors & Actions (selector)',
    path: '/docs/veneer/selectors',
    description: 'Hiding and direct modification of legacy DOM elements with action: hide.',
    keywords: ['selector', 'action', 'hide', 'legacy dom', 'remove'],
    headings: ['Hiding Legacy Elements', 'Direct Modification'],
  },
  {
    title: 'Veneer: Diagnostics & CLI (spm compile)',
    path: '/docs/veneer/tooling',
    description: 'Compiling .vnr files via spm-cli, syntax error diagnostics, and circular inheritance checking.',
    keywords: ['spm compile', 'diagnostics', 'syntax errors', 'circular inheritance', 'cli', 'ast'],
    headings: ['Compilation with spm-cli', 'Error Diagnostics', 'Inheritance Graphs'],
  },
  {
    title: 'Manifest Schema',
    path: '/docs/manifest',
    description: 'Compiled JSON format: targetUrl, theme, components, reconstructs, props, propsMap, preserve, children, and infiniteScroll.',
    keywords: ['manifest', 'json', 'schema', 'targetUrl', 'theme', 'components', 'reconstructs', 'propsMap', 'children', 'infiniteScroll'],
    headings: ['Root fields', 'theme', 'components', 'reconstructs', 'Minimal example'],
  },
  {
    title: 'CLI & Tooling',
    path: '/docs/tooling',
    description: 'spm-cli, compilation, WebSocket watcher, dev payload, editor diagnostics, publishing, and commands.',
    keywords: ['spm-cli', 'compile', 'dev', 'publish', 'websocket', 'watcher', 'lexer', 'parser', 'resolver', 'emitter', 'diagnostics'],
    headings: ['Compilation contract', 'Local development', 'Editor diagnostics', 'Theme publishing', 'Exposed commands'],
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
