import React from 'react'

export type BadgeVariant = 'default' | 'info' | 'success' | 'warning' | 'danger'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
}

const variantStyles: Record<BadgeVariant, { bg: string; color: string; border: string }> = {
  default: {
    bg: 'var(--bg-element, #1e1e24)',
    color: '#ffffff',
    border: '1px solid var(--border-contrast, #27272a)',
  },
  info: {
    bg: 'var(--bg-surface, #121215)',
    color: 'var(--text-muted, #a1a1aa)',
    border: '1px solid var(--border-contrast, #27272a)',
  },
  success: {
    bg: '#ffffff',
    color: '#000000',
    border: '1px solid #ffffff',
  },
  warning: {
    bg: 'var(--bg-element, #1e1e24)',
    color: 'var(--text-muted, #a1a1aa)',
    border: '1px dashed var(--border-contrast, #27272a)',
  },
  danger: {
    bg: 'var(--bg-surface, #121215)',
    color: '#ffffff',
    border: '1px solid var(--border-contrast, #27272a)',
  },
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  style,
  ...props
}) => {
  const currentVariant = variantStyles[variant] || variantStyles.default
  const isSmall = size === 'sm'

  return (
    <span
      className={`ui-badge ui-badge-${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: isSmall ? '2px 6px' : '3px 8px',
        borderRadius: '4px',
        fontFamily: 'var(--font-mono, monospace)',
        fontSize: isSmall ? '10px' : '11px',
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '0.02em',
        background: currentVariant.bg,
        color: currentVariant.color,
        border: currentVariant.border,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
