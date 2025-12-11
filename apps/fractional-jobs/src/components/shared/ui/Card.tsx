import React from 'react'
import { colors } from '../../theme/colors'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
  bordered?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const paddingMap = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

/**
 * Card Component
 * Container for grouped content with consistent styling
 */
export function Card({
  children,
  hover = false,
  bordered = true,
  padding = 'md',
  className = '',
  style = {},
  ...props
}: CardProps) {
  const baseClasses = `rounded-lg bg-white ${paddingMap[padding]}`
  const borderClasses = bordered ? 'border border-gray-200' : ''
  const hoverClasses = hover ? 'transition-all duration-200 hover:shadow-lg hover:border-violet-300' : ''

  return (
    <div
      className={`${baseClasses} ${borderClasses} ${hoverClasses} ${className}`}
      style={{
        backgroundColor: colors.background,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
