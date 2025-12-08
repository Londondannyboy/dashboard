import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Special Event Insurance UK 2025 | One-Off Event Cover & Quotes',
    template: '%s | Special Event Insurance',
  },
  description: 'Special event insurance for one-off events, exhibitions, trade shows, and temporary events. Get public liability insurance quotes for your special occasion.',
  keywords: 'special event insurance, one off event insurance, art exhibition insurance, trade show insurance, outdoor event insurance, pop-up event insurance, multi-event insurance',
  authors: [{ name: 'Special Event Insurance UK' }],
  metadataBase: new URL('https://specialevent.quest'),
  openGraph: {
    title: 'Special Event Insurance UK 2025 | One-Off Event Cover',
    description: 'Specialist insurance for one-off events, exhibitions, trade shows, and temporary occasions.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Special Event Insurance UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Special Event Insurance UK 2025 | One-Off Event Cover',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Special Event Insurance UK 2025',
    description: 'One-off event insurance quotes for UK organisers.',
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
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/icon.svg',
  },
}



const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Special Event Insurance UK',
    url: 'https://specialevent.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://specialevent.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Special Event Insurance UK',
  description: 'Free UK special event insurance quote comparison service',
  url: 'https://specialevent.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free special event insurance quotes',
  },
  featureList: [
    'One-off event insurance',
    'Art exhibition insurance',
    'Trade show coverage',
    'Outdoor event insurance',
    'Pop-up event coverage',
    'Multi-event policies',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  },
  {
    '@type': 'InsuranceAgency',
  name: 'Special Event Insurance UK',
  description: 'Specialist one-off and temporary event insurance',
  url: 'https://specialevent.quest',
  areaServed: 'United Kingdom',
  serviceType: ['One-Off Event Insurance', 'Exhibition Insurance', 'Trade Show Insurance', 'Pop-Up Event Insurance'],
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
