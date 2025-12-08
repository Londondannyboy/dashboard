import type { Metadata } from 'next'

export interface SEOConfig {
  title: string
  titleTemplate?: string
  description: string
  keywords?: string
  siteUrl: string
  siteName?: string
  locale?: string
  type?: 'website' | 'article'
  image?: string
  twitterCard?: 'summary' | 'summary_large_image'
  noIndex?: boolean
}

export function createMetadata(config: SEOConfig): Metadata {
  const siteName = config.siteName || config.title
  const locale = config.locale || 'en_GB'
  const type = config.type || 'website'
  const twitterCard = config.twitterCard || 'summary_large_image'

  return {
    title: config.titleTemplate
      ? { default: config.title, template: config.titleTemplate }
      : config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: siteName }],
    metadataBase: new URL(config.siteUrl),
    openGraph: {
      title: config.title,
      description: config.description,
      type,
      locale,
      siteName,
      ...(config.image && { images: [config.image] }),
    },
    twitter: {
      card: twitterCard,
      title: config.title,
      description: config.description,
      ...(config.image && { images: [config.image] }),
    },
    robots: config.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    icons: {
      icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
      apple: '/icon.svg',
    },
  }
}

// Pre-configured metadata for common site types
export function createInsuranceMetadata(config: {
  insuranceType: string
  siteUrl: string
  description: string
  keywords: string
}): Metadata {
  const title = `${config.insuranceType} Insurance UK 2025 | Compare Quotes`
  return createMetadata({
    title,
    titleTemplate: `%s | ${config.insuranceType} Insurance UK`,
    description: config.description,
    keywords: config.keywords,
    siteUrl: config.siteUrl,
    siteName: `${config.insuranceType} Insurance UK`,
  })
}

export function createCalculatorMetadata(config: {
  calculatorName: string
  siteUrl: string
  description: string
  keywords: string
}): Metadata {
  const title = `${config.calculatorName} Calculator UK 2025 | Free Online Calculator`
  return createMetadata({
    title,
    titleTemplate: `%s | ${config.calculatorName} Calculator UK`,
    description: config.description,
    keywords: config.keywords,
    siteUrl: config.siteUrl,
    siteName: `${config.calculatorName} Calculator`,
  })
}
