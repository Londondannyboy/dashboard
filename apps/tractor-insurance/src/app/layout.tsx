import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Tractor Insurance UK 2025 | Agricultural Vehicle Insurance Quotes',
    template: '%s | Tractor Insurance UK',
  },
  description: 'Get instant tractor insurance quotes from leading UK agricultural insurers. Specialist cover for tractors, farm vehicles and agricultural machinery. Compare prices and save on your tractor insurance today.',
  keywords: 'tractor insurance, tractor insurance uk, agricultural insurance, farm vehicle insurance, tractor cover, agricultural vehicle insurance, farm machinery insurance, tractor insurance quotes, cheap tractor insurance, compare tractor insurance, smallholder insurance, agricultural contractor insurance',
  authors: [{ name: 'Tractor Insurance UK' }],
  metadataBase: new URL('https://tractorinsurance.quest'),
  openGraph: {
    title: 'Tractor Insurance UK 2025 | Agricultural Vehicle Insurance Quotes',
    description: 'Get instant tractor insurance quotes from leading UK agricultural insurers. Compare prices and save today.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Tractor Insurance UK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tractor Insurance UK 2025',
    description: 'Get instant tractor insurance quotes. Compare UK agricultural insurers.',
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
  '@type': 'WebApplication',
  name: 'Tractor Insurance UK',
  description: 'Free UK tractor insurance quote comparison service for agricultural vehicles and farm machinery',
  url: 'https://tractorinsurance.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free quote comparison service',
  },
  featureList: [
    'Compare tractor insurance quotes',
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
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Tractor Insurance UK',
  description: 'Specialist agricultural vehicle insurance comparison service',
  url: 'https://tractorinsurance.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Tractor Insurance', 'Agricultural Insurance', 'Farm Vehicle Insurance'],
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
        {children}
      </body>
    </html>
  )
}
