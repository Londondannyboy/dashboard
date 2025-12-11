import React from 'react'
import { colors } from '../../theme/colors'

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl'
type TextColor = 'primary' | 'secondary' | 'tertiary' | 'custom'

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  size?: TextSize
  color?: TextColor | string
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  italic?: boolean
  truncate?: boolean
  lineClamp?: 1 | 2 | 3 | 4
}

const sizeMap: Record<TextSize, { fontSize: string; lineHeight: string }> = {
  xs: { fontSize: '0.75rem', lineHeight: '1rem' },
  sm: { fontSize: '0.875rem', lineHeight: '1.25rem' },
  base: { fontSize: '1rem', lineHeight: '1.5rem' },
  lg: { fontSize: '1.125rem', lineHeight: '1.75rem' },
  xl: { fontSize: '1.25rem', lineHeight: '1.75rem' },
}

const colorMap: Record<TextColor, string> = {
  primary: colors.text.primary,
  secondary: colors.text.secondary,
  tertiary: colors.text.tertiary,
  custom: 'inherit',
}

const weightMap: Record<string, number> = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
}

/**
 * Text Component
 * Semantic text element with typography styles
 */
export function Text({
  children,
  size = 'base',
  color = 'primary',
  weight = 'normal',
  italic = false,
  truncate = false,
  lineClamp,
  className = '',
  style = {},
  ...props
}: TextProps) {
  const sizeStyle = sizeMap[size]
  const colorValue = colorMap[color as TextColor] || color
  const fontWeight = weightMap[weight]

  let truncateClass = ''
  if (truncate) {
    truncateClass = 'truncate'
  } else if (lineClamp) {
    truncateClass = `line-clamp-${lineClamp}`
  }

  return (
    <p
      className={`${truncateClass} ${className}`}
      style={{
        fontSize: sizeStyle.fontSize,
        lineHeight: sizeStyle.lineHeight,
        color: colorValue,
        fontWeight: fontWeight,
        fontStyle: italic ? 'italic' : 'normal',
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  )
}
