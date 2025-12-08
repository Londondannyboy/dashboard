import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GTM Agency | Go-To-Market Strategy & Planning | GTM Quest',
  description: 'Launch your product successfully with our go-to-market platform. Get templates, strategies & tools for UK B2B & SaaS companies.',
  keywords: 'GTM agency, go-to-market agency, GTM strategy, go-to-market strategy, GTM consultant, product launch agency, sales strategy agency',
  metadataBase: new URL('https://gtm.quest'),
  openGraph: {
    title: 'GTM Agency | Go-To-Market Strategy & Planning',
    description: 'Leading GTM agency for go-to-market strategy. AI-powered planning and expert consultants.',
    url: 'https://gtm.quest',
    siteName: 'GTM Quest',
    type: 'website',
    locale: 'en_GB',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GTM Agency | Go-To-Market Strategy & Planning',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTM Agency | Go-To-Market Strategy',
    description: 'Leading GTM agency for go-to-market strategy.',
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
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}



const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'GTM Quest',
    url: 'https://gtm.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://gtm.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebSite',
  name: 'GTM Quest',
  description: 'Leading GTM agency for go-to-market strategy. AI-powered planning and expert consultants.',
  url: 'https://gtm.quest',
  },
  {
    '@type': 'ProfessionalService',
  name: 'GTM Quest',
  description: 'Go-to-market strategy agency providing AI-powered GTM planning and consulting',
  url: 'https://gtm.quest',
  areaServed: 'Global',
  serviceType: ['GTM Strategy', 'Product Launch', 'Go-To-Market Planning', 'GTM Consulting'],
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
