import React from 'react'
import { colors } from '../../theme/colors'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm font-medium rounded',
  md: 'px-4 py-2 text-base font-semibold rounded-lg',
  lg: 'px-6 py-3 text-lg font-bold rounded-lg',
}

/**
 * Button Component
 * Primary interactive element for actions
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  disabled,
  className = '',
  style = {},
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  let baseClasses = `${sizeClasses[size]} font-semibold transition-all duration-200 inline-flex items-center gap-2 justify-center`

  if (fullWidth) {
    baseClasses += ' w-full'
  }

  let variantClasses = ''
  let backgroundColor = ''
  let textColor = ''
  let borderColor = ''

  switch (variant) {
    case 'primary':
      backgroundColor = colors.primary[700]
      textColor = 'white'
      variantClasses = `hover:${colors.primary[800]} active:${colors.primary[900]}`
      break
    case 'secondary':
      backgroundColor = colors.secondary[500]
      textColor = 'white'
      variantClasses = 'hover:bg-amber-600 active:bg-amber-700'
      break
    case 'outline':
      backgroundColor = 'transparent'
      textColor = colors.primary[700]
      borderColor = colors.primary[300]
      variantClasses = `border border-current hover:bg-${colors.primary[50]}`
      break
    case 'ghost':
      backgroundColor = 'transparent'
      textColor = colors.gray[700]
      variantClasses = 'hover:bg-gray-100 active:bg-gray-200'
      break
    case 'danger':
      backgroundColor = '#ef4444'
      textColor = 'white'
      variantClasses = 'hover:bg-red-600 active:bg-red-700'
      break
  }

  if (isDisabled) {
    backgroundColor = colors.gray[300]
    textColor = colors.gray[500]
    variantClasses = 'cursor-not-allowed opacity-60'
  }

  return (
    <button
      disabled={isDisabled}
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={{
        backgroundColor: borderColor ? 'transparent' : backgroundColor,
        color: textColor,
        border: borderColor ? `2px solid ${borderColor}` : 'none',
        ...style,
      }}
      {...props}
    >
      {loading && <span className="animate-spin">⟳</span>}
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </button>
  )
}
