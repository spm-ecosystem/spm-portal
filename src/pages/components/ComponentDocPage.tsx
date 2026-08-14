import { useParams } from 'react-router-dom'
import MarkdownDocViewer from '../../components/MarkdownDocViewer'

const SLUG_TO_NAME: Record<string, string> = {
  'ui-nav-header': 'UiNavHeader',
  'ui-hero-landing': 'UiHeroLanding',
  'ui-search-bar': 'UiSearchBar',
  'ui-image-card': 'UiImageCard',
  'ui-tag-badge': 'UiTagBadge',
  'ui-pagination-bar': 'UiPaginationBar',
  'ui-modern-grid-page': 'UiModernGridPage',
  'ui-image-viewer': 'UiImageViewer',
  'ui-scroll-panel': 'UiScrollPanel',
  'ui-split-layout': 'UiSplitLayout',
  'ui-comment-list-page': 'UiCommentListPage',
  'ui-dashboard-page': 'UiDashboardPage',
  'ui-stats-dashboard': 'UiStatsDashboard',
  'ui-table': 'UiTable',
  'ui-table-list-page': 'UiTableListPage',
  'ui-toast-container': 'UiToastContainer',
  'layout-primitives': 'LayoutPrimitives'
}

export default function ComponentDocPage() {
  const { slug } = useParams<{ slug: string }>()
  const componentName = slug ? (SLUG_TO_NAME[slug] || slug) : 'UiSplitLayout'

  const rawUrl = `https://raw.githubusercontent.com/spm-ecosystem/spm-components/main/docs/components/${componentName}.md`

  return (
    <MarkdownDocViewer
      url={rawUrl}
      title={`${componentName} Documentation`}
    />
  )
}
