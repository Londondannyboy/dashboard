/**
 * Design System Typography
 * Font sizes, weights, and line heights for consistent text styling
 */

export const typography = {
  // Font Families
  fonts: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"Fira Code", "Monaco", monospace',
  },

  // Font Sizes
  sizes: {
    xs: { size: '0.75rem', lineHeight: '1rem' }, // 12px
    sm: { size: '0.875rem', lineHeight: '1.25rem' }, // 14px
    base: { size: '1rem', lineHeight: '1.5rem' }, // 16px
    lg: { size: '1.125rem', lineHeight: '1.75rem' }, // 18px
    xl: { size: '1.25rem', lineHeight: '1.75rem' }, // 20px
    '2xl': { size: '1.5rem', lineHeight: '2rem' }, // 24px
    '3xl': { size: '1.875rem', lineHeight: '2.25rem' }, // 30px
    '4xl': { size: '2.25rem', lineHeight: '2.5rem' }, // 36px
    '5xl': { size: '3rem', lineHeight: '1' }, // 48px
    '6xl': { size: '3.75rem', lineHeight: '1' }, // 60px
  },

  // Font Weights
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  // Text Styles
  styles: {
    // Display / Hero
    display: {
      fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
      fontWeight: 900,
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
    },

    // Headings
    h1: {
      fontSize: '2.25rem',
      fontWeight: 900,
      lineHeight: '2.5rem',
      letterSpacing: '-0.01em',
    },
    h2: {
      fontSize: '1.875rem',
      fontWeight: 800,
      lineHeight: '2.25rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: '2rem',
      letterSpacing: '0',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: '1.75rem',
      letterSpacing: '0',
    },

    // Body
    bodyLarge: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: '1.75rem',
      letterSpacing: '0',
    },
    body: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
      letterSpacing: '0',
    },
    bodySmall: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.25rem',
      letterSpacing: '0',
    },

    // Labels
    label: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: '1.25rem',
      letterSpacing: '0.01em',
      textTransform: 'uppercase' as const,
    },
    labelSmall: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: '1rem',
      letterSpacing: '0.02em',
      textTransform: 'uppercase' as const,
    },

    // Caption
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '1rem',
      letterSpacing: '0',
    },
  },
}

export type TypographyStyle = keyof typeof typography.styles
