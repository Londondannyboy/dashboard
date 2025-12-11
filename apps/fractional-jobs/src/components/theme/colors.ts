/**
 * Design System Color Palette
 * Used throughout the application for consistent visual styling
 */

export const colors = {
  // Primary Colors
  primary: {
    900: '#5e3cb9', // Deepest violet
    800: '#6d47d6',
    700: '#7c5cdb', // Main primary
    600: '#8b6ee5',
    500: '#9980f0',
    400: '#a892f5',
    300: '#b7a4f9',
    200: '#c6b6fd',
    100: '#e8e0ff', // Lightest violet
    50: '#f3f0ff',
  },

  // Secondary Colors (Amber/Orange accent)
  secondary: {
    600: '#d97706',
    500: '#f59e0b',
    400: '#fbbf24',
    300: '#fcd34d',
    200: '#fde68a',
    100: '#fef3c7',
  },

  // Neutral/Gray Palette
  gray: {
    900: '#111827',
    800: '#1f2937',
    700: '#374151',
    600: '#4b5563',
    500: '#6b7280',
    400: '#9ca3af',
    300: '#d1d5db',
    200: '#e5e7eb',
    100: '#f3f4f6',
    50: '#f9fafb',
  },

  // Role/Status Colors
  cfo: '#10b981', // Green for Finance
  cmo: '#ec4899', // Pink for Marketing
  cto: '#3b82f6', // Blue for Tech
  coo: '#f59e0b', // Amber for Operations
  hr: '#a855f7', // Purple for HR
  sales: '#06b6d4', // Cyan for Sales

  // Semantic Colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',

  // Backgrounds
  background: '#ffffff',
  surface: '#f9fafb',
  surfaceSecondary: '#f3f4f6',

  // Text
  text: {
    primary: '#111827',
    secondary: '#6b7280',
    tertiary: '#9ca3af',
    onPrimary: '#ffffff',
    onSecondary: '#ffffff',
  },

  // Borders
  border: {
    light: '#e5e7eb',
    default: '#d1d5db',
    dark: '#9ca3af',
  },

  // Overlays
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.1)',
}

export type ColorKey = keyof typeof colors
