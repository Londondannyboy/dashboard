import React from 'react'
import { typography, type TypographyStyle } from '../../theme/typography'
import { colors } from '../../theme/colors'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  level?: HeadingLevel
  color?: string
}

const headingElements: Record<HeadingLevel, HeadingLevel> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
}

const typographyMap: Record<HeadingLevel, TypographyStyle> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h3',
  h6: 'h4',
}

/**
 * Heading Component
 * Semantic heading element with consistent typography
 */
export function Heading({
  children,
  level = 'h1',
  color = colors.text.primary,
  className = '',
  style = {},
  ...props
}: HeadingProps) {
  const Element = headingElements[level]
  const typographyStyle = typography.styles[typographyMap[level]]

  return React.createElement(Element, {
    className,
    style: {
      fontSize: typographyStyle.fontSize,
      fontWeight: typographyStyle.fontWeight,
      lineHeight: typographyStyle.lineHeight,
      letterSpacing: typographyStyle.letterSpacing,
      color,
      ...style,
    },
    children,
    ...props,
  })
}
