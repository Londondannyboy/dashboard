// Base JSON-LD types
export interface Organization {
  '@type': 'Organization'
  name: string
  url: string
  logo?: string
  sameAs?: string[]
}

export interface WebSite {
  '@context': 'https://schema.org'
  '@type': 'WebSite'
  name: string
  url: string
  description?: string
  publisher?: Organization
}

export interface WebApplication {
  '@context': 'https://schema.org'
  '@type': 'WebApplication'
  name: string
  description: string
  url: string
  applicationCategory: string
  operatingSystem: string
  offers?: {
    '@type': 'Offer'
    price: string
    priceCurrency: string
    description?: string
  }
  featureList?: string[]
  areaServed?: {
    '@type': 'Country'
    name: string
  }
}

export interface InsuranceAgency {
  '@context': 'https://schema.org'
  '@type': 'InsuranceAgency'
  name: string
  description: string
  url: string
  areaServed: string
  serviceType: string[]
}

export interface FAQPage {
  '@context': 'https://schema.org'
  '@type': 'FAQPage'
  mainEntity: Array<{
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }>
}

export interface Article {
  '@context': 'https://schema.org'
  '@type': 'Article'
  headline: string
  description: string
  author: {
    '@type': 'Organization' | 'Person'
    name: string
  }
  datePublished: string
  dateModified?: string
  publisher: Organization
}

// Helper to create a calculator/tool schema
export function createCalculatorSchema(config: {
  name: string
  description: string
  url: string
  features: string[]
  country?: string
}): WebApplication {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: config.name,
    description: config.description,
    url: config.url,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      description: `Free ${config.name.toLowerCase()}`,
    },
    featureList: config.features,
    areaServed: {
      '@type': 'Country',
      name: config.country || 'United Kingdom',
    },
  }
}

// Helper to create an insurance service schema
export function createInsuranceSchema(config: {
  name: string
  description: string
  url: string
  serviceTypes: string[]
  country?: string
}): InsuranceAgency {
  return {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: config.name,
    description: config.description,
    url: config.url,
    areaServed: config.country || 'United Kingdom',
    serviceType: config.serviceTypes,
  }
}

// Helper to create a website schema
export function createWebsiteSchema(config: {
  name: string
  url: string
  description: string
}): WebSite {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.name,
    url: config.url,
    description: config.description,
  }
}

// Helper to create FAQ schema
export function createFAQSchema(faqs: Array<{ question: string; answer: string }>): FAQPage {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Helper to generate JSON-LD script tag HTML
export function jsonLdScriptTag(data: object): string {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`
}

// Helper to generate multiple JSON-LD script tags
export function jsonLdScriptTags(data: object[]): string {
  return data.map(jsonLdScriptTag).join('\n')
}
