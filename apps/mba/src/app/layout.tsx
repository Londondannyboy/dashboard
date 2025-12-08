import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Best Online MBA Programs 2025 | MBA Quest - Reviews & Rankings',
  description: 'Compare the best online MBA programs worldwide. Expert reviews, rankings, and comprehensive guides to help you choose the right MBA online degree for your career goals.',
  keywords: 'MBA online, online MBA programs, best online MBA, MBA rankings, MBA reviews, executive MBA online, global MBA, online business degree, MBA comparison',
  metadataBase: new URL('https://mba.quest'),
  openGraph: {
    title: 'Best Online MBA Programs 2025 | MBA Quest',
    description: 'Compare the best online MBA programs worldwide. Expert reviews, rankings, and comprehensive guides.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'MBA Quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Online MBA Programs 2025 | MBA Quest',
    description: 'Compare the best online MBA programs worldwide. Expert reviews, rankings, and comprehensive guides.',
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
  name: 'MBA Quest',
  description: 'Compare the best online MBA programs worldwide. Expert reviews, rankings, and comprehensive guides.',
  url: 'https://mba.quest',
}

const educationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'MBA Quest',
  description: 'Online MBA program comparison and ranking tool',
  url: 'https://mba.quest',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free MBA program comparison service',
  },
  featureList: ['Compare MBA programs', 'View MBA rankings', 'Read MBA reviews', 'Find online MBA degrees'],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationJsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
