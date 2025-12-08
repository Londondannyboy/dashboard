import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Graduate Recruitment Agencies London | Graduated Quest',
  description: 'Leading graduate recruitment agency in London connecting talented university graduates with top UK employers. Expert career guidance, CV support, and interview coaching for entry-level positions.',
  keywords: 'graduate recruitment agencies london, graduate jobs london, graduate recruitment uk, entry level jobs london, graduate schemes, graduate careers',
  metadataBase: new URL('https://graduated.quest'),
  openGraph: {
    title: 'Graduate Recruitment Agencies London | Graduated Quest',
    description: 'Leading graduate recruitment agency in London connecting talented university graduates with top UK employers.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Graduated Quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graduate Recruitment Agencies London | Graduated Quest',
    description: 'Leading graduate recruitment agency in London connecting talented university graduates with top UK employers.',
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
    name: 'Graduated Quest',
    url: 'https://graduated.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://graduated.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebSite',
  name: 'Graduated Quest',
  description: 'Leading graduate recruitment agency in London connecting talented university graduates with top UK employers.',
  url: 'https://graduated.quest',
  },
  {
    '@type': 'EmploymentAgency',
  name: 'Graduated Quest',
  description: 'Graduate recruitment agency specializing in entry-level positions for university graduates in London and UK',
  url: 'https://graduated.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Graduate Recruitment', 'Entry Level Jobs', 'Graduate Schemes', 'Career Guidance'],
  }
  ]
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
