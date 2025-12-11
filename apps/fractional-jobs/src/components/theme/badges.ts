/**
 * Design System Badge Styles
 * Badge variants for tagging jobs, skills, and attributes
 */

import { colors } from './colors'

export type BadgeVariant = 'default' | 'role' | 'location' | 'type' | 'skill' | 'status' | 'featured'

export const badgeStyles = {
  // Default badge
  default: {
    bg: colors.gray[100],
    text: colors.gray[700],
    border: colors.gray[300],
  },

  // Role badges
  role: {
    cfo: {
      bg: '#dcfce7',
      text: colors.cfo,
      border: '#86efac',
    },
    cmo: {
      bg: '#fce7f3',
      text: colors.cmo,
      border: '#fbcfe8',
    },
    cto: {
      bg: '#dbeafe',
      text: colors.cto,
      border: '#bfdbfe',
    },
    coo: {
      bg: '#fef3c7',
      text: colors.coo,
      border: '#fcd34d',
    },
    hr: {
      bg: '#e9d5ff',
      text: colors.hr,
      border: '#d8b4fe',
    },
    sales: {
      bg: '#cffafe',
      text: colors.sales,
      border: '#a5f3fc',
    },
  },

  // Location badges
  location: {
    london: {
      bg: '#dbeafe',
      text: '#1e40af',
      border: '#93c5fd',
    },
    remote: {
      bg: '#d1fae5',
      text: '#065f46',
      border: '#a7f3d0',
    },
    manchester: {
      bg: '#fce7f3',
      text: '#831843',
      border: '#fbcfe8',
    },
    birmingham: {
      bg: '#fef3c7',
      text: '#78350f',
      border: '#fcd34d',
    },
    default: {
      bg: colors.gray[100],
      text: colors.gray[700],
      border: colors.gray[300],
    },
  },

  // Job type badges
  type: {
    hybrid: {
      bg: '#e0e7ff',
      text: '#3730a3',
      border: '#c4b5fd',
    },
    remote: {
      bg: '#d1fae5',
      text: '#065f46',
      border: '#a7f3d0',
    },
    onsite: {
      bg: '#fed7aa',
      text: '#7c2d12',
      border: '#fdba74',
    },
  },

  // Skill/expertise badges
  skill: {
    fintech: {
      bg: '#dbeafe',
      text: '#1e40af',
      border: '#93c5fd',
    },
    saas: {
      bg: '#e0e7ff',
      text: '#3730a3',
      border: '#c4b5fd',
    },
    ecommerce: {
      bg: '#fce7f3',
      text: '#831843',
      border: '#fbcfe8',
    },
    healthcare: {
      bg: '#dcfce7',
      text: '#166534',
      border: '#86efac',
    },
  },

  // Status badges
  status: {
    featured: {
      bg: '#fef3c7',
      text: colors.cfo,
      border: '#fcd34d',
    },
    urgent: {
      bg: '#fee2e2',
      text: '#dc2626',
      border: '#fca5a5',
    },
    new: {
      bg: '#d1fae5',
      text: '#065f46',
      border: '#a7f3d0',
    },
    closing: {
      bg: '#fed7aa',
      text: '#7c2d12',
      border: '#fdba74',
    },
  },
}

/**
 * Get badge styles by role
 */
export function getRoleABadgeStyle(role: string) {
  const normalizedRole = role.toLowerCase() as keyof typeof badgeStyles.role
  return badgeStyles.role[normalizedRole] || badgeStyles.default
}

/**
 * Get badge styles by location
 */
export function getLocationBadgeStyle(location: string) {
  const normalizedLocation = location.toLowerCase() as keyof typeof badgeStyles.location
  return badgeStyles.location[normalizedLocation] || badgeStyles.location.default
}

/**
 * Get badge styles by job type
 */
export function getTypeBadgeStyle(type: string) {
  const normalizedType = type.toLowerCase() as keyof typeof badgeStyles.type
  return badgeStyles.type[normalizedType] || badgeStyles.default
}

export const badgeClasses = {
  default: 'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium',
  sm: 'inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold',
  lg: 'inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold',
}
