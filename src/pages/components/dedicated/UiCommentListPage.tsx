import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import {
  UiCommentListPage as UiCommentListPageComponent,
  UiCommentReply,
  CommentThread,
} from '@spm/components/dedicated/UiCommentListPage'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'
import { Badge } from '../../../components/ui/Badge'

export default function UiCommentListPage() {
  const [sortBy, setSortBy] = useState<'latest' | 'liked'>('latest')
  const [searchQuery, setSearchQuery] = useState('')
  const [newCommentText, setNewCommentText] = useState('')
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({
    'c1': 42,
    'c2': 18,
    'c3': 89,
    'c4': 27,
  })

  const initialThreads: CommentThread[] = [
    {
      id: 'thread-1',
      postUrl: '#pr-4028',
      postUser: 'alex-rivera (Lead Architect)',
      postDate: '10 minutes ago',
      postRating: 'Verified',
      postScore: 'Score: 142',
      thumbnailUrl: 'https://picsum.photos/200/200?random=101',
      tags: [
        { label: 'spm-core', url: '#', type: 'module' },
        { label: 'react19', url: '#', type: 'technology' },
        { label: 'dom-purify', url: '#', type: 'system' },
        { label: 'security', url: '#', type: 'metadata' },
      ],
      comments: [
        {
          author: 'alex-rivera',
          authorUrl: '#user-alex',
          date: '10 minutes ago',
          body: 'The <code>DOMPurify</code> HTML sanitization pipeline works seamlessly inside <code>UiCommentReply</code>. Potential script injections are stripped prior to Shadow DOM mount.',
          isHtml: true,
        },
        {
          author: 'sarah-dev',
          authorUrl: '#user-sarah',
          date: '5 minutes ago',
          body: 'Verified in production build. All custom <code>replyActionSlot</code> triggers render without breaking style isolation.',
        },
      ],
    },
    {
      id: 'thread-2',
      postUrl: '#pr-4029',
      postUser: 'elena-rostova',
      postDate: '2 hours ago',
      postRating: 'Reviewed',
      postScore: 'Score: 310',
      thumbnailUrl: 'https://picsum.photos/200/200?random=102',
      tags: [
        { label: 'shadow-dom', url: '#', type: 'technology' },
        { label: 'performance', url: '#', type: 'module' },
        { label: 'css-variables', url: '#', type: 'system' },
      ],
      comments: [
        {
          author: 'elena-rostova',
          authorUrl: '#user-elena',
          date: '2 hours ago',
          body: 'CSS variable scope bleeding across nested Web Components has been addressed by enforcing high-contrast token overrides.',
        },
        {
          author: 'marcus-vance',
          authorUrl: '#user-marcus',
          date: '1 hour ago',
          body: 'We utilize isolated style tags within each component container. Check out the <code>UiCommentListPage</code> CSS variable contract.',
          isHtml: true,
        },
      ],
    },
  ]

  const [threads, setThreads] = useState<CommentThread[]>(initialThreads)

  const handleLike = (commentId: string) => {
    setLikeCounts((counts) => ({
      ...counts,
      [commentId]: (counts[commentId] || 0) + 1,
    }))
  }

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCommentText.trim()) return

    const newComment = {
      author: 'watashi',
      authorUrl: '#user-watashi',
      date: 'Just now',
      body: newCommentText,
      isHtml: true,
    }

    setThreads((prev) => [
      {
        ...prev[0],
        comments: [...(prev[0].comments || []), newComment],
      },
      ...prev.slice(1),
    ])

    setNewCommentText('')
  }

  const displayedThreads = [...threads]
    .filter((t) => {
      if (!searchQuery) return true
      const query = searchQuery.toLowerCase()
      const inPostUser = t.postUser?.toLowerCase().includes(query)
      const inTags = t.tags?.some((tag: any) => tag.label?.toLowerCase().includes(query))
      const inComments = t.comments?.some(
        (c: any) => c.author?.toLowerCase().includes(query) || c.body?.toLowerCase().includes(query)
      )
      return inPostUser || inTags || inComments
    })

  const samplePageLinks = [
    { label: 'Prev', url: '#' },
    { label: '1', url: '#' },
    { label: '2', url: '#' },
    { label: '3', url: '#' },
    { label: 'Next', url: '#' },
  ]

  const propsContract = [
    { name: 'pageTitle', type: 'string', desc: 'Title displayed at the top of the comment thread page.' },
    { name: 'threads', type: 'CommentThread[]', desc: 'Hierarchical comment items extracted from legacy HTML.' },
    { name: 'pageLinks', type: 'PageLink[]', desc: 'Pagination links preserved from the original thread.' },
    { name: 'sidebarSlot', type: 'ReactNode', desc: 'Custom sidebar content slot for navigation or filters.' },
    { name: 'commentFormSlot', type: 'ReactNode', desc: 'Slot for rich comment composition or input form.' },
    { name: 'replyActionSlot', type: 'ReactNode', desc: 'Action trigger slot per comment reply (e.g. quote, vote, flag).' },
    { name: 'headerActionsSlot', type: 'ReactNode', desc: 'Header toolbar action buttons slot.' },
  ]

  return (
    <ComponentDemoLayout
      name="UiCommentListPage"
      category="Dedicated Page View"
      description="Modular comment threads layout with interactive ControlBar sorting, live search filtering, rich composition forms (commentFormSlot), and interactive per-reply triggers (replyActionSlot)."
      docUrl="/src/docs/UiCommentListPage.md"
      useCases={[
        'Modernize legacy discussion forums with modular subcomponents (UiCommentCard & UiCommentReply).',
        'Inject rich comment composition forms with formatting toolbars via commentFormSlot.',
        'Sanitize legacy HTML comment bodies safely against XSS attacks using DOMPurify.',
        'Interactive thread sorting and live keyword filtering.',
      ]}
      propsContract={propsContract}
      vnrExample={`reconstruct "table.comment-tree" -> UiCommentListPage {
  pageTitle: "Discussion Thread";

  child threads extends HNCommentItem {
    selector: "tr.athing.comtr";
    bind author: "a.hnuser | text";
    bind date:   "span.age | text";
    bind body:   "div.comment span.commtext | html";
  }
}`}
    >
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Sort:
            </span>
            <SegmentedToggle
              size="sm"
              options={[
                { id: 'latest', label: 'Latest' },
                { id: 'liked', label: 'Most Liked' },
              ]}
              value={sortBy}
              onChange={(val) => setSortBy(val as 'latest' | 'liked')}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input
              type="text"
              placeholder="Filter threads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid var(--border-contrast)',
                background: 'var(--bg-element)',
                color: '#ffffff',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                width: '180px',
                outline: 'none',
              }}
            />
            <Badge variant="default" size="sm">
              DOMPurify Active
            </Badge>
            <Badge variant="default" size="sm">
              {displayedThreads.length} Threads
            </Badge>
          </div>
        </ControlBar>

        <div style={{ width: '100%', border: '1px solid var(--border-contrast)', borderRadius: '8px', overflow: 'hidden' }}>
          <UiCommentListPageComponent
            pageTitle="PR #4028 Code Review & Discussion"
            threads={displayedThreads}
            pageLinks={samplePageLinks}
            height="auto"
            sidebarSlot={
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
                <h4 style={{ margin: '0 0 12px 0', textTransform: 'uppercase', color: 'var(--text-subtle)', fontSize: '11px', letterSpacing: '0.05em' }}>
                  Topics
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>
                    <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span># Architecture</span>
                      <span style={{ fontSize: '10px', background: 'var(--bg-element)', padding: '1px 6px', borderRadius: '4px' }}>12</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span># Security</span>
                      <span style={{ fontSize: '10px', background: 'var(--bg-element)', padding: '1px 6px', borderRadius: '4px' }}>8</span>
                    </a>
                  </li>
                </ul>
              </div>
            }
            headerActionsSlot={
              <button
                style={{
                  padding: '6px 14px',
                  borderRadius: '4px',
                  background: '#ffffff',
                  color: '#000000',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                New Thread
              </button>
            }
            commentFormSlot={
              <form
                onSubmit={handleAddComment}
                style={{
                  background: 'var(--bg-surface)',
                  padding: '16px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-contrast)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                    Add Review Comment as <strong>watashi</strong>
                  </span>
                </div>

                <textarea
                  rows={3}
                  placeholder="Write a comment..."
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '4px',
                    border: '1px solid var(--border-contrast)',
                    background: 'var(--bg-absolute)',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    outline: 'none',
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                  <button
                    type="submit"
                    style={{
                      padding: '6px 16px',
                      borderRadius: '4px',
                      background: '#ffffff',
                      color: '#000000',
                      border: 'none',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    Submit Comment
                  </button>
                </div>
              </form>
            }
            replyActionSlot={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => handleLike('c1')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '11px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                  }}
                >
                  Like ({likeCounts['c1'] || 42})
                </button>
              </div>
            }
          />
        </div>

        <div style={{ marginTop: '12px', paddingTop: '16px', borderTop: '1px dashed var(--border-contrast)' }}>
          <h3 style={{ fontSize: '12px', marginBottom: '12px', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>
            Subcomponent Instance (UiCommentReply)
          </h3>
          <UiCommentReply
            comment={{
              author: 'system-bot',
              authorUrl: '#bot',
              date: 'Just now',
              body: 'Automated CI test pass completed for <code>UiCommentReply</code> container.',
              isHtml: true,
            }}
            replyActionSlot={
              <Badge variant="default" size="sm">
                Verified CI
              </Badge>
            }
          />
        </div>
      </div>
    </ComponentDemoLayout>
  )
}
