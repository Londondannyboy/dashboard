import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Relocation Quest - AI-Powered International Relocation Guide',
    template: '%s | Relocation Quest',
  },
  description: 'Find trusted UK relocation services. Compare removal companies, international movers & storage. Get instant quotes for your move.',
  keywords: 'relocation, move abroad, international relocation, visa guide, expat, emigration, digital nomad, cost of living',
  metadataBase: new URL('https://relocation.quest'),
  openGraph: {
    title: 'Relocation Quest - AI-Powered International Relocation Guide',
    description: 'AI-powered relocation assistant helping you move abroad. Personalized visa guides and cost of living comparisons.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Relocation Quest',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Relocation Quest - AI-Powered International Relocation Guide',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Relocation Quest - AI-Powered International Relocation Guide',
    description: 'AI-powered relocation assistant helping you move abroad.',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Relocation Quest',
    url: 'https://relocation.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://relocation.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebSite',
    name: 'Relocation Quest',
    description: 'AI-powered relocation assistant helping you move abroad with personalized visa guides and cost of living comparisons.',
    url: 'https://relocation.quest',
  },
  {
    '@type': 'WebApplication',
    name: 'Relocation Quest',
    description: 'AI-powered international relocation assistant',
    url: 'https://relocation.quest',
    applicationCategory: 'TravelApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      description: 'Free relocation planning assistant',
    },
    featureList: ['AI relocation advice', 'Visa guides', 'Cost of living comparisons', 'Country guides', 'Digital nomad information'],
    areaServed: {
      '@type': 'Country',
      name: 'Global',
    },
  }
  ]
}

// Root layout without Providers - auth routes add Providers via (auth)/layout.tsx
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
