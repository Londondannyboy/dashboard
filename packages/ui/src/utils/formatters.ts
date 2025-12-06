/**
 * Shared formatting utilities for Quest apps
 */

export function formatCategory(angle: string | null): string {
  if (!angle) return ''
  return angle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export function formatDate(date: string | Date | null): string {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
}
