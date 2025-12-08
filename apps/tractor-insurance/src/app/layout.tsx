import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Agricultural Tractor Insurance UK 2025 | Farm Vehicle Insurance Quotes',
    template: '%s | Agricultural Tractor Insurance UK',
  },
  description: 'Get instant agricultural tractor insurance quotes from leading UK farm insurers. Specialist cover for tractors, farm vehicles and agricultural machinery. Compare agricultural tractor insurance prices and save today.',
  keywords: 'tractor insurance, agricultural tractor insurance, tractor insurance uk, tractor insurance quote, tractor insurance quotes, best tractor insurance, tractor insurance comparison, compare tractor insurance, cheap tractor insurance, vintage tractor insurance, classic tractor insurance uk, antique tractor insurance, farm machinery insurance, agricultural machinery insurance, agricultural vehicle insurance, tractor insurance for road use, uk tractor insurance, farm tractor insurance, single tractor insurance, insurance tractor, do tractors need insurance, how much is tractor insurance',
  authors: [{ name: 'Agricultural Tractor Insurance UK' }],
  metadataBase: new URL('https://tractorinsurance.quest'),
  openGraph: {
    title: 'Agricultural Tractor Insurance UK 2025 | Farm Vehicle Insurance Quotes',
    description: 'Get instant agricultural tractor insurance quotes from leading UK farm insurers. Compare prices and save today.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Agricultural Tractor Insurance UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agricultural Tractor Insurance UK 2025 | Farm Vehicle Insurance Quotes',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agricultural Tractor Insurance UK 2025',
    description: 'Get instant agricultural tractor insurance quotes. Compare UK farm insurers.',
    image: '/og-image.png',
  },
  robots: {
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
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
}

// JSON-LD structured data for the insurance quote service
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Agricultural Tractor Insurance UK',
      description: 'Free UK agricultural tractor insurance quote comparison service for farm vehicles and machinery',
      url: 'https://tractorinsurance.quest',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://tractorinsurance.quest?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'WebApplication',
      name: 'Agricultural Tractor Insurance UK',
      description: 'Free UK agricultural tractor insurance quote comparison service for farm vehicles and machinery',
      url: 'https://tractorinsurance.quest',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'GBP',
        description: 'Free agricultural tractor insurance quote comparison service',
      },
      featureList: [
        'Compare agricultural tractor insurance quotes',
        'Agricultural vehicle coverage',
        'Farm machinery insurance',
        'Smallholder and contractor cover',
        'Comprehensive and third party options',
        'Implement and attachment cover',
      ],
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    },
  ],
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Agricultural Tractor Insurance UK',
  description: 'Specialist agricultural tractor insurance comparison service for UK farmers',
  url: 'https://tractorinsurance.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Agricultural Tractor Insurance', 'Tractor Insurance', 'Agricultural Insurance', 'Farm Vehicle Insurance'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
