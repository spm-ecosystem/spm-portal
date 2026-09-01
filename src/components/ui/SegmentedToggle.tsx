import React from 'react'

export interface ToggleOption<T extends string = string> {
  id: T
  label: React.ReactNode
}

export interface SegmentedToggleProps<T extends string = string> {
  options: (ToggleOption<T> | T)[]
  value: T
  onChange: (value: T) => void
  size?: 'sm' | 'md'
  className?: string
  style?: React.CSSProperties
}

export function SegmentedToggle<T extends string = string>({
  options,
  value,
  onChange,
  size = 'md',
  className = '',
  style,
}: SegmentedToggleProps<T>) {
  const normalizedOptions: ToggleOption<T>[] = options.map((opt) =>
    typeof opt === 'string' ? { id: opt as T, label: opt } : opt
  )

  const isSmall = size === 'sm'

  return (
    <div
      className={`segmented-toggle ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '3px',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-contrast)',
        borderRadius: '6px',
        ...style,
      }}
    >
      {normalizedOptions.map((opt) => {
        const isActive = opt.id === value
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            style={{
              padding: isSmall ? '4px 12px' : '6px 14px',
              borderRadius: '4px',
              fontSize: isSmall ? '11px' : '12px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              cursor: 'pointer',
              background: isActive ? '#ffffff' : 'var(--bg-element)',
              color: isActive ? '#000000' : '#ffffff',
              border: '1px solid',
              borderColor: isActive ? '#ffffff' : 'var(--border-contrast)',
              transition: 'all 0.15s ease',
              outline: 'none',
            }}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

export default SegmentedToggle
