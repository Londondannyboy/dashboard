import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Placement Quest - Fund Placement Intelligence',
  description: 'The insider guide to fund placements. Track placement agent mandates, LP relationships, fundraising activity, and market intelligence.',
  keywords: 'fund placement, placement agent, LP relationships, fundraising, private equity placement, fund manager, capital raising',
  metadataBase: new URL('https://placement.quest'),
  openGraph: {
    title: 'Placement Quest - Fund Placement Intelligence',
    description: 'The insider guide to fund placements. Track placement agent mandates, LP relationships, and fundraising activity.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Placement Quest',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Placement Quest - Fund Placement Intelligence',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Placement Quest - Fund Placement Intelligence',
    description: 'The insider guide to fund placements. Track placement agent mandates and LP relationships.',
    images: '/og-image.png',
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
    name: 'Placement Quest',
    url: 'https://placement.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://placement.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebSite',
  name: 'Placement Quest',
  description: 'The insider guide to fund placements. Track placement agent mandates, LP relationships, and fundraising activity.',
  url: 'https://placement.quest',
  },
  {
    '@type': 'Organization',
  name: 'Placement Quest',
  description: 'Fund placement intelligence platform tracking placement agents, LP relationships, and fundraising activity',
  url: 'https://placement.quest',
  areaServed: 'Global',
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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
