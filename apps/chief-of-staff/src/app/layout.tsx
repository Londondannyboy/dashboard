import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chief of Staff Recruitment Agency UK',
  description: 'Chief of staff recruitment agency for the UK. Find the best recruiters for executive roles in London. Browse agencies, salary guides, and career advice.',
  keywords: 'chief of staff recruitment agency, chief of staff recruitment agencies, executive assistant recruitment, chief of staff jobs UK, executive assistant jobs London',
  metadataBase: new URL('https://chiefofstaff.quest'),
  openGraph: {
    title: 'Chief of Staff Recruitment Agency UK',
    description: 'Chief of staff recruitment agency for the UK. Find the best recruiters for executive roles in London.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Chief of Staff Recruitment Agency UK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chief of Staff Recruitment Agency UK',
    description: 'Chief of staff recruitment agency for the UK. Find executive roles in London.',
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
  name: 'Chief of Staff Recruitment Agency UK',
  description: 'Chief of staff recruitment agency for the UK. Find the best recruiters for executive roles in London.',
  url: 'https://chiefofstaff.quest',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  name: 'Chief of Staff Quest',
  description: 'UK recruitment agency specializing in Chief of Staff and executive assistant positions',
  url: 'https://chiefofstaff.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Executive Recruitment', 'Chief of Staff Recruitment', 'Executive Assistant Recruitment'],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
