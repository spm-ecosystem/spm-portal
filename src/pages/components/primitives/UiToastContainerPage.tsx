import { useState } from 'react'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { UiToast } from '@spm/components/dedicated/UiToast'
import { ControlBar } from '../../../components/ui/ControlBar'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'

export default function UiToastContainerPage() {
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type: 'success' | 'error' | 'info' | 'warning' }>>([
    { id: '1', message: 'Theme manifest compiled successfully.', type: 'success' },
    { id: '2', message: 'SHA-256 integrity verification passed.', type: 'info' },
  ])

  const addToast = (type: 'success' | 'error' | 'info' | 'warning') => {
    const messages = {
      success: 'Operation completed successfully.',
      error: 'Compilation error in forms.vnr spec.',
      info: 'WebSocket telemetry stream connected.',
      warning: 'Selector matched 0 DOM elements.',
    }
    const newToast = { id: String(Date.now()), message: messages[type], type }
    setToasts(prev => [...prev, newToast])
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  const vnrExample = `reconstruct "#toast-host" -> UiToast {
    type: "success";
    message: "Operation completed successfully";
}`

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Type:
          </span>
          <SegmentedToggle<'success' | 'error' | 'info' | 'warning'>
            size="sm"
            options={[
              { id: 'success', label: 'Success' },
              { id: 'error', label: 'Error' },
              { id: 'info', label: 'Info' },
              { id: 'warning', label: 'Warning' },
            ]}
            value="success"
            onChange={(val) => addToast(val)}
          />
        </div>
      </div>
      <button
        onClick={() => setToasts([])}
        style={{
          padding: '4px 10px',
          background: 'var(--bg-element)',
          color: 'var(--text-muted)',
          border: '1px solid var(--border-contrast)',
          borderRadius: 3,
          cursor: 'pointer',
          fontSize: 11,
          fontFamily: 'var(--font-mono)',
        }}
      >
        Clear All
      </button>
    </ControlBar>
  )

  return (
    <ComponentDemoLayout
      name="UiToastContainer"
      category="Primitive Component"
      description="Floating toast notification container for real-time alerts and feedback across Shadow DOM boundaries."
      docUrl="/src/docs/UiToastContainer.md"
      useCases={[
        'Trigger real-time feedback alerts across SPM Shadow DOM boundaries.',
        'Render toast notifications for success, info, warning, and error states.',
        'Support dismissible toast notifications with auto-dismiss timers.',
      ]}
      propsContract={[
        { name: 'message', type: 'string', desc: 'Message text rendered inside toast notification (Required).' },
        { name: 'type', type: "'info' | 'warning' | 'success' | 'error'", desc: "Feedback variant type controlling indicator border color (defaults to 'info')." },
        { name: 'onClose', type: '() => void', desc: 'Callback function invoked when toast is closed or auto-dismissed (Required).' },
        { name: 'position', type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'", desc: 'Screen corner positioning anchor for toast container portal.' },
      ]}
      vnrExample={vnrExample}
      controls={controls}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', maxWidth: 500 }}>
        {toasts.length === 0 ? (
          <div style={{ padding: '1rem', textAlign: 'center', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>
            No active toast notifications. Select a type above to emit a toast.
          </div>
        ) : (
          toasts.map(t => (
            <UiToast key={t.id} type={t.type} message={t.message} onClose={() => removeToast(t.id)} />
          ))
        )}
      </div>
    </ComponentDemoLayout>
  )
}
