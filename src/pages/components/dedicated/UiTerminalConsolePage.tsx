import { useState, useEffect } from 'react'
import { UiTerminalConsole, LogEntry } from '@spm/components/dedicated/UiTerminalConsole'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'
import { ControlBar } from '../../../components/ui/ControlBar'

export default function UiTerminalConsolePage() {
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: '1', timestamp: '22:50:01', level: 'info', message: 'SPM runtime engine initialized successfully.' },
    { id: '2', timestamp: '22:50:02', level: 'debug', message: 'Loaded 29 registered components from @spm/components manifest.' },
    { id: '3', timestamp: '22:50:04', level: 'info', message: 'Veneer AST compiler initialized with zero syntax errors.' },
    { id: '4', timestamp: '22:50:08', level: 'warn', message: 'Legacy selector "#old-header" matched 2 elements; using primary node.' },
    { id: '5', timestamp: '22:50:12', level: 'info', message: 'Shadow DOM root attached in isolated mode (mode: "open").' },
    { id: '6', timestamp: '22:50:15', level: 'error', message: 'Stylesheet fetch network timeout (Retrying fallback rules...)' },
    { id: '7', timestamp: '22:50:18', level: 'info', message: 'Fallback CSS rules injected successfully from bundled manifest.' },
  ])

  const [autoScroll, setAutoScroll] = useState<boolean>(true)
  const [isStreaming, setIsStreaming] = useState<boolean>(true)

  useEffect(() => {
    if (!isStreaming) return
    const interval = setInterval(() => {
      const timeStr = new Date().toISOString().substring(11, 19)
      const levels: Array<'info' | 'warn' | 'error' | 'debug'> = ['info', 'info', 'warn', 'debug']
      const randomLevel = levels[Math.floor(Math.random() * levels.length)]
      const messages = {
        info: `Processed telemetry ingress frame #${Math.floor(Math.random() * 9000 + 1000)} at ${timeStr}.`,
        warn: `High heap memory usage detected in boundary [0x${Math.floor(Math.random() * 0xffff).toString(16)}].`,
        error: `API gateway request timeout after 5000ms.`,
        debug: `DOM MutationObserver triggered ${Math.floor(Math.random() * 10 + 1)} node mutations.`,
      }
      const newEntry: LogEntry = {
        id: String(Date.now()),
        timestamp: timeStr,
        level: randomLevel,
        message: messages[randomLevel],
      }
      setLogs((prev) => [...prev, newEntry])
    }, 2000)

    return () => clearInterval(interval)
  }, [isStreaming])

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Stream Ingestion:
          </span>
          <SegmentedToggle
            size="sm"
            options={[
              { id: 'active', label: 'Active' },
              { id: 'paused', label: 'Paused' },
            ]}
            value={isStreaming ? 'active' : 'paused'}
            onChange={(val) => setIsStreaming(val === 'active')}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            Auto-Scroll:
          </span>
          <SegmentedToggle
            size="sm"
            options={[
              { id: 'on', label: 'On' },
              { id: 'off', label: 'Off' },
            ]}
            value={autoScroll ? 'on' : 'off'}
            onChange={(val) => setAutoScroll(val === 'on')}
          />
        </div>
      </div>
    </ControlBar>
  )

  const vnrExample = `reconstruct "#terminal-view" -> UiTerminalConsole {
  title: "Compiler & Diagnostics Shell";
  filterLevel: "all";
  autoScroll: ${autoScroll};

  child logs {
    selector: "#log-container div.log-row";
    bind timestamp: "span.time | text";
    bind level:     "span.level | text";
    bind message:   "span.msg | text";
  }
}`

  const propsContract = [
    { name: 'title', type: 'string', desc: 'Title displayed on terminal top bar (default: "Console Output").' },
    { name: 'logs', type: 'LogEntry[]', desc: 'Array of log entries containing level, timestamp, and message string.' },
    { name: 'filterLevel', type: '"all" | "info" | "warn" | "error" | "debug"', desc: 'Initial log level filter selection.' },
    { name: 'autoScroll', type: 'boolean', desc: 'Automatically scroll terminal view to bottom on new log additions.' },
    { name: 'maxLines', type: 'number', desc: 'Maximum number of log rows retained in buffer.' },
    { name: 'onClear', type: '() => void', desc: 'Callback invoked when the Clear Logs action button is clicked.' },
    { name: 'onCopy', type: '(copiedText: string) => void', desc: 'Callback invoked when Copy All formats and copies logs.' },
    { name: 'logRenderer', type: '(log: LogEntry, index: number) => ReactNode', desc: 'Custom renderer for log entry lines.' },
    { name: 'toolbarSlot', type: 'ReactNode', desc: 'Custom slot for adding controls to the console top bar.' },
  ]

  const useCases = [
    'Render live system diagnostics, build output, or API request logs in a retro dark console layout.',
    'Filter logs dynamically by severity level (INFO, DEBUG, WARN, ERROR) or text search input.',
    'Provide real-time log stream ingestion, line counter badge, auto-scroll, Copy All, and Clear Logs actions.',
  ]

  return (
    <ComponentDemoLayout
      name="UiTerminalConsole"
      category="Dedicated Components"
      description="Dark interactive terminal log console component featuring log level filtering, search query filtering, line counter, Copy All, and Clear Logs actions."
      vnrExample={vnrExample}
      docUrl="/src/docs/UiTerminalConsole.md"
      propsContract={propsContract}
      useCases={useCases}
      controls={controls}
    >
      <div style={{ width: '100%', maxWidth: 840, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <UiTerminalConsole
          title="Compiler Diagnostic & Ingestion Console"
          logs={logs}
          autoScroll={autoScroll}
          filterLevel="all"
          onClear={() => setLogs([])}
          toolbarSlot={
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: 11, fontFamily: 'var(--font-mono)' }}>
              <span style={{ color: 'var(--text-subtle)' }}>
                Buffer: <strong style={{ color: '#ffffff' }}>{logs.length} entries</strong>
              </span>
              <span style={{ color: isStreaming ? '#ffffff' : 'var(--text-subtle)', fontWeight: 600 }}>
                STATUS: {isStreaming ? 'STREAMING' : 'PAUSED'}
              </span>
            </div>
          }
        />
      </div>
    </ComponentDemoLayout>
  )
}
