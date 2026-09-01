import React from 'react'

export interface ControlBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  align?: 'left' | 'center' | 'right' | 'between'
  padding?: string
}

export const ControlBar: React.FC<ControlBarProps> = ({
  children,
  align = 'between',
  padding = '8px 16px',
  className = '',
  style,
  ...props
}) => {
  const getJustifyContent = () => {
    switch (align) {
      case 'left':
        return 'flex-start'
      case 'center':
        return 'center'
      case 'right':
        return 'flex-end'
      case 'between':
      default:
        return 'space-between'
    }
  }

  return (
    <div
      className={`control-bar ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: getJustifyContent(),
        flexWrap: 'wrap',
        gap: '0.75rem',
        padding,
        background: 'var(--bg-element)',
        borderBottom: '1px solid var(--border-contrast)',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default ControlBar
