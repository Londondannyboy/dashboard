import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Yoga Teacher Insurance UK 2025 | Compare Instructor Insurance',
    template: '%s | Yoga Teacher Insurance UK',
  },
  description: 'Compare yoga teacher insurance quotes from specialist UK insurers. Get yoga instructor insurance, pilates teacher insurance & fitness professional cover. Public liability, professional indemnity & treatment risk insurance.',
  keywords: 'yoga teacher insurance, yoga instructor insurance, yoga insurance uk, yoga liability insurance, pilates teacher insurance, yoga professional indemnity, yoga public liability insurance, fitness instructor insurance, yoga therapist insurance, hot yoga insurance, aerial yoga insurance, yoga retreat insurance, yoga studio insurance, cheap yoga insurance, best yoga teacher insurance uk',
  authors: [{ name: 'Yoga Teacher Insurance UK' }],
  metadataBase: new URL('https://yogainsurance.quest'),
  openGraph: {
    title: 'Yoga Teacher Insurance UK 2025 | Compare Instructor Insurance',
    description: 'Compare yoga teacher insurance quotes from specialist UK insurers. Professional cover for yoga instructors - get protected today.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Yoga Teacher Insurance UK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoga Teacher Insurance UK 2025',
    description: 'Compare yoga teacher insurance quotes from UK specialist insurers.',
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
  '@type': 'WebApplication',
  name: 'Yoga Teacher Insurance UK',
  description: 'Free UK yoga teacher insurance quote comparison service for instructors and wellness professionals',
  url: 'https://yogainsurance.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free yoga teacher insurance quote comparison service',
  },
  featureList: [
    'Compare yoga teacher insurance quotes',
    'Public liability cover up to £10M',
    'Professional indemnity insurance',
    'Treatment risk cover',
    'Equipment and prop cover',
    'Worldwide teaching cover options',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Yoga Teacher Insurance UK',
  description: 'Specialist yoga teacher insurance comparison service for UK instructors',
  url: 'https://yogainsurance.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Yoga Teacher Insurance', 'Yoga Instructor Insurance', 'Pilates Teacher Insurance', 'Fitness Professional Insurance'],
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
