import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rainmakrr - Private Equity Placement Agent Intelligence',
  description: 'The insider guide to placement agents. Top PE & VC placement agent rankings, fund placement news, deal flow intelligence, and market insights.',
  keywords: 'placement agents, private equity placement, PE placement agent, VC placement agent, fund placement, deal flow, LP relationships',
  metadataBase: new URL('https://rainmakrr.com'),
  openGraph: {
    title: 'Rainmakrr - Private Equity Placement Agent Intelligence',
    description: 'Top PE & VC placement agent rankings, fund placement news, and deal flow intelligence.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Rainmakrr',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rainmakrr - Private Equity Placement Agent Intelligence',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rainmakrr - Private Equity Placement Agent Intelligence',
    description: 'Top PE & VC placement agent rankings and fund placement news.',
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
    name: 'Rainmakrr',
    url: 'https://rainmakrr.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://rainmakrr.com/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebSite',
  name: 'Rainmakrr',
  description: 'Top PE & VC placement agent rankings, fund placement news, and deal flow intelligence.',
  url: 'https://rainmakrr.com',
  },
  {
    '@type': 'Organization',
  name: 'Rainmakrr',
  description: 'Private equity and venture capital placement agent intelligence platform',
  url: 'https://rainmakrr.com',
  areaServed: 'Global',
  },
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rainmakrr.com'
      }
    ]
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
