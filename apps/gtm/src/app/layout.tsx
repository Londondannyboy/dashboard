import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GTM Agency | Go-To-Market Strategy & Planning | GTM Quest',
  description: 'Leading GTM agency for go-to-market strategy. AI-powered GTM planning, expert consultants, and proven frameworks. Launch your product with the top GTM agency partner.',
  keywords: 'GTM agency, go-to-market agency, GTM strategy, go-to-market strategy, GTM consultant, product launch agency, sales strategy agency',
  metadataBase: new URL('https://gtm.quest'),
  openGraph: {
    title: 'GTM Agency | Go-To-Market Strategy & Planning',
    description: 'Leading GTM agency for go-to-market strategy. AI-powered planning and expert consultants.',
    url: 'https://gtm.quest',
    siteName: 'GTM Quest',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTM Agency | Go-To-Market Strategy',
    description: 'Leading GTM agency for go-to-market strategy.',
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
  '@type': 'WebSite',
  name: 'GTM Quest',
  description: 'Leading GTM agency for go-to-market strategy. AI-powered planning and expert consultants.',
  url: 'https://gtm.quest',
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'GTM Quest',
  description: 'Go-to-market strategy agency providing AI-powered GTM planning and consulting',
  url: 'https://gtm.quest',
  areaServed: 'Global',
  serviceType: ['GTM Strategy', 'Product Launch', 'Go-To-Market Planning', 'GTM Consulting'],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
