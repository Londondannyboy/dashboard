import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Mobility Scooter Insurance UK 2025 | Compare Quotes & Save',
    template: '%s | Mobility Scooter Insurance UK',
  },
  description: 'Compare mobility scooter insurance quotes from specialist UK insurers. Get cheap mobility scooter insurance, disability scooter cover & electric wheelchair insurance. Free quotes - comprehensive cover for your mobility equipment.',
  keywords: 'mobility scooter insurance, mobility scooter insurance uk, electric scooter insurance, disability scooter insurance, mobility scooter cover, cheap mobility scooter insurance, best mobility scooter insurance, compare mobility scooter insurance, mobility insurance, electric wheelchair insurance, powerchair insurance, mobility aid insurance, scooter insurance for disabled, mobility equipment insurance',
  authors: [{ name: 'Mobility Scooter Insurance UK' }],
  metadataBase: new URL('https://mobilityscooterinsurance.quest'),
  openGraph: {
    title: 'Mobility Scooter Insurance UK 2025 | Compare Quotes & Save',
    description: 'Compare mobility scooter insurance quotes from specialist UK insurers. Free quotes - save on your mobility equipment insurance today.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Mobility Scooter Insurance UK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobility Scooter Insurance UK 2025',
    description: 'Compare mobility scooter insurance quotes from UK specialist insurers.',
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



const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Mobility Scooter Insurance UK',
    url: 'https://mobilityscooterinsurance.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://mobilityscooterinsurance.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Mobility Scooter Insurance UK',
  description: 'Free UK mobility scooter insurance quote comparison service for disability scooters and electric wheelchairs',
  url: 'https://mobilityscooterinsurance.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free mobility scooter insurance quote comparison service',
  },
  featureList: [
    'Compare mobility scooter insurance quotes',
    'Electric wheelchair coverage',
    'Theft and accidental damage protection',
    'Breakdown cover options',
    'Personal accident cover',
    'Public liability insurance',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  },
  {
    '@type': 'InsuranceAgency',
  name: 'Mobility Scooter Insurance UK',
  description: 'Specialist mobility scooter insurance comparison service for UK users',
  url: 'https://mobilityscooterinsurance.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Mobility Scooter Insurance', 'Disability Scooter Insurance', 'Electric Wheelchair Insurance', 'Mobility Aid Insurance'],
  }
  ]
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
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
