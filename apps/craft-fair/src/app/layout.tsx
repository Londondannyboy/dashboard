import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Craft Fair Insurance UK 2025 | Market Stall & Trader Cover',
    template: '%s | Craft Fair Insurance UK',
  },
  description: 'Market stall insurance for craft fairs, farmers markets, car boot sales, and traders. Get public liability insurance quotes for craft sellers and market traders.',
  keywords: 'craft fair insurance, market stall insurance, farmers market insurance, car boot sale insurance, craft seller insurance, market trader insurance, one day stall insurance',
  authors: [{ name: 'Craft Fair Insurance UK' }],
  metadataBase: new URL('https://craftfair.quest'),
  openGraph: {
    title: 'Craft Fair Insurance UK 2025 | Market Stall & Trader Cover',
    description: 'Insurance for craft fairs, market stalls, and traders. Get public liability cover for craft sellers.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Craft Fair Insurance UK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Craft Fair Insurance UK 2025',
    description: 'Market stall and craft fair insurance quotes for UK traders.',
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
  '@type': 'WebApplication',
  name: 'Craft Fair Insurance UK',
  description: 'Free UK craft fair and market stall insurance quote service',
  url: 'https://craftfair.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free craft fair and market stall insurance quotes',
  },
  featureList: [
    'Market stall insurance',
    'Craft fair coverage',
    'Farmers market insurance',
    'Car boot sale protection',
    'One-day stall policies',
    'Craft seller liability cover',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Craft Fair Insurance UK',
  description: 'Specialist market stall and craft fair insurance for traders',
  url: 'https://craftfair.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Market Stall Insurance', 'Craft Fair Insurance', 'Farmers Market Insurance', 'Craft Seller Insurance'],
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
