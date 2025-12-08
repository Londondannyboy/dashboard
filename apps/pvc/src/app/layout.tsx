import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PVC Quest - Venture Capital Intelligence',
  description: 'The insider guide to venture capital. VC firm rankings, startup funding rounds, Series A-D intelligence, and market insights for founders and investors.',
  keywords: 'venture capital, VC rankings, startup funding, Series A, Series B, Series C, VC intelligence, startup investment',
  metadataBase: new URL('https://pvc.quest'),
  openGraph: {
    title: 'PVC Quest - Venture Capital Intelligence',
    description: 'The insider guide to venture capital. VC firm rankings, startup funding rounds, and market insights.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'PVC Quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PVC Quest - Venture Capital Intelligence',
    description: 'The insider guide to venture capital. VC firm rankings and startup funding intelligence.',
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
  '@type': 'WebSite',
  name: 'PVC Quest',
  description: 'The insider guide to venture capital. VC firm rankings, startup funding rounds, and market insights.',
  url: 'https://pvc.quest',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PVC Quest',
  description: 'Venture capital intelligence platform providing VC rankings, startup funding data, and market insights',
  url: 'https://pvc.quest',
  areaServed: 'Global',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
