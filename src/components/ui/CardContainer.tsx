import React from 'react'

export interface CardContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode
  subtitle?: React.ReactNode
  indicatorText?: string
  headerActions?: React.ReactNode
  children: React.ReactNode
  bodyStyle?: React.CSSProperties
  bodyClassName?: string
}

export const CardContainer: React.FC<CardContainerProps> = ({
  title,
  subtitle,
  indicatorText = 'Shadow DOM Ready',
  headerActions,
  children,
  className = '',
  style,
  bodyStyle,
  bodyClassName = '',
  ...props
}) => {
  return (
    <div
      className={`card-container ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-contrast)',
        borderRadius: '6px',
        overflow: 'hidden',
        ...style,
      }}
      {...props}
    >
      <div
        className="card-container-header"
        style={{
          background: 'var(--bg-element)',
          borderBottom: '1px solid var(--border-contrast)',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#ffffff',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: '#ffffff',
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              {title}
            </span>
            {subtitle && (
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--text-subtle)',
                  lineHeight: 1.2,
                }}
              >
                {subtitle}
              </span>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {headerActions}
          {indicatorText && (
            <span
              className="card-container-indicator"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--text-subtle)',
              }}
            >
              {indicatorText}
            </span>
          )}
        </div>
      </div>

      <div
        className={`card-container-body ${bodyClassName}`}
        style={{
          padding: '1.5rem',
          background: 'var(--bg-surface)',
          ...bodyStyle,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default CardContainer
