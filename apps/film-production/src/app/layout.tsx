import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Film Production Insurance UK 2025 | Short Film & TV Production Cover',
    template: '%s | Film Production Insurance UK',
  },
  description: 'Film production insurance for short films, TV, documentaries, and commercials. Get quotes for independent filmmakers, production companies, and content creators in the UK.',
  keywords: 'film production insurance, short film insurance, tv production insurance, video production insurance, documentary insurance, music video insurance, commercial production insurance, film equipment insurance, cast and crew insurance, independent film insurance, production company insurance, filmmakers insurance uk',
  authors: [{ name: 'Film Production Insurance UK' }],
  metadataBase: new URL('https://filmproduction.quest'),
  openGraph: {
    title: 'Film Production Insurance UK 2025 | Short Film & TV Production Cover',
    description: 'Get specialist insurance for your film production. Covers short films, TV, documentaries, commercials & more.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Film Production Insurance UK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Film Production Insurance UK 2025',
    description: 'Film production insurance quotes for independent creators & production companies.',
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
  name: 'Film Production Insurance UK',
  description: 'Free UK film production insurance quote comparison service for short films, TV, documentaries, and commercials',
  url: 'https://filmproduction.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free film production insurance quote comparison service',
  },
  featureList: [
    'Compare film production insurance quotes',
    'Short film insurance cover',
    'TV and documentary production insurance',
    'Commercial production insurance',
    'Equipment and property damage cover',
    'Cast and crew liability protection',
    'Independent filmmaker and production company options',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Film Production Insurance UK',
  description: 'Specialist film and video production insurance comparison service for UK creators',
  url: 'https://filmproduction.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Film Production Insurance', 'Short Film Insurance', 'TV Production Insurance', 'Documentary Insurance', 'Commercial Production Insurance'],
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
