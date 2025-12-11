import React from 'react'
import { badgeClasses, getRoleABadgeStyle, getLocationBadgeStyle, getTypeBadgeStyle, type BadgeVariant } from '../../theme/badges'
import { colors } from '../../theme/colors'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: BadgeVariant
  size?: 'sm' | 'default' | 'lg'
  role?: string
  location?: string
  type?: string
  color?: string
  dotted?: boolean
}

/**
 * Badge Component
 * Used for tagging jobs, skills, and attributes
 */
export function Badge({
  children,
  variant = 'default',
  size = 'default',
  role,
  location,
  type: jobType,
  color,
  dotted = false,
  className = '',
  style = {},
  ...props
}: BadgeProps) {
  let bgColor = colors.gray[100]
  let textColor = colors.gray[700]
  let borderColor = colors.gray[300]

  // Determine colors based on variant and type
  if (role) {
    const roleStyle = getRoleABadgeStyle(role)
    bgColor = roleStyle.bg
    textColor = roleStyle.text
    borderColor = roleStyle.border
  } else if (location) {
    const locStyle = getLocationBadgeStyle(location)
    bgColor = locStyle.bg
    textColor = locStyle.text
    borderColor = locStyle.border
  } else if (jobType) {
    const typeStyle = getTypeBadgeStyle(jobType)
    bgColor = typeStyle.bg
    textColor = typeStyle.text
    borderColor = typeStyle.border
  } else if (color) {
    // Allow custom color override
    textColor = color
  }

  const baseBorderStyle = dotted ? '1px dotted' : '1px solid'

  return (
    <span
      className={`${badgeClasses[size]} ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: `${baseBorderStyle} ${borderColor}`,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  )
}
