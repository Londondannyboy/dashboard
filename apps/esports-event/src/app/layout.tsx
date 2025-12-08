import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Esports Event Insurance UK 2025 | Gaming Tournament & LAN Party Cover',
    template: '%s | Esports Event Insurance UK',
  },
  description: 'Esports event insurance for gaming tournaments, LAN parties, and gaming conventions in the UK. Get public liability cover and equipment insurance for your esports events.',
  keywords: 'esports event insurance, gaming tournament insurance, lan party insurance, esports venue insurance, gaming convention insurance, esports insurance uk, gaming event insurance',
  authors: [{ name: 'Esports Event Insurance UK' }],
  metadataBase: new URL('https://esportsevent.quest'),
  openGraph: {
    title: 'Esports Event Insurance UK 2025 | Gaming Tournament & LAN Party Cover',
    description: 'Specialist insurance for esports events and gaming tournaments. Protect your gaming event with comprehensive cover.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Esports Event Insurance UK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esports Event Insurance UK 2025',
    description: 'Gaming tournament and esports event insurance quotes for UK organisers.',
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
    name: 'Esports Event Insurance UK',
    url: 'https://esportsevent.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://esportsevent.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Esports Event Insurance UK',
  description: 'Free UK esports event insurance quote comparison service for gaming tournaments and LAN parties',
  url: 'https://esportsevent.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free esports event insurance quote comparison service',
  },
  featureList: [
    'Compare esports event insurance quotes',
    'Gaming tournament liability cover',
    'LAN party insurance',
    'Equipment protection',
    'Prize pool insurance',
    'Venue liability coverage',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  },
  {
    '@type': 'InsuranceAgency',
  name: 'Esports Event Insurance UK',
  description: 'Specialist esports and gaming event insurance for UK tournament organisers',
  url: 'https://esportsevent.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Esports Insurance', 'Gaming Tournament Insurance', 'LAN Party Insurance', 'Gaming Convention Insurance'],
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
