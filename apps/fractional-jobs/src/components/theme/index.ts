/**
 * Centralized theme exports
 * Use these throughout the application for consistent styling
 */

export { colors, type ColorKey } from './colors'
export { typography, type TypographyStyle } from './typography'
export { spacing, spacingGroups, type SpacingValue } from './spacing'
export {
  badgeStyles,
  badgeClasses,
  getRoleABadgeStyle,
  getLocationBadgeStyle,
  getTypeBadgeStyle,
  type BadgeVariant,
} from './badges'

/**
 * Convenience function to get all theme values
 */
export const theme = {
  colors: require('./colors').colors,
  typography: require('./typography').typography,
  spacing: require('./spacing').spacing,
  badges: require('./badges').badgeStyles,
}
