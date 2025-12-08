import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Village Fete Insurance UK 2025 | Community Event Public Liability',
    template: '%s | Village Fete Insurance',
  },
  description: 'Community and village fete insurance for churches, parish councils, and charity events. Get public liability insurance for community gatherings and fundraisers.',
  keywords: 'village fete insurance, community event insurance, church event insurance, parish council insurance, charity fundraiser insurance, village hall insurance, fete insurance',
  authors: [{ name: 'Village Fete Insurance UK' }],
  metadataBase: new URL('https://villagefete.quest'),
  openGraph: {
    title: 'Village Fete Insurance UK 2025 | Community Event Public Liability',
    description: 'Community and village event insurance for fundraisers, churches, and parish councils.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Village Fete Insurance UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Village Fete Insurance UK 2025 | Community Event Public Liability',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Village Fete Insurance UK 2025',
    description: 'Community and village fete insurance quotes for UK events.',
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
    name: 'Village Fete Insurance UK',
    url: 'https://villagefete.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://villagefete.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Village Fete Insurance UK',
  description: 'Free UK community and village fete insurance quote service',
  url: 'https://villagefete.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free community event insurance quotes',
  },
  featureList: [
    'Community event insurance',
    'Church and charity event coverage',
    'Parish council event insurance',
    'Village hall protection',
    'Fete and fundraiser coverage',
    'Public liability up to £10M',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  },
  {
    '@type': 'InsuranceAgency',
  name: 'Village Fete Insurance UK',
  description: 'Specialist community and village event insurance',
  url: 'https://villagefete.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Community Event Insurance', 'Church Event Insurance', 'Parish Council Insurance', 'Charity Event Insurance'],
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
