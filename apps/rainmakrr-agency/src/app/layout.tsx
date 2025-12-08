import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Startup Jobs UK | Rainmakrr Agency',
  description: 'Find the best startup jobs and recruitment agencies in the UK. Connect with specialist recruiters for startup roles in London and across Britain.',
  keywords: 'startup jobs UK, startup recruitment agency, tech startup jobs London, startup careers UK, scale-up jobs',
  metadataBase: new URL('https://agency.rainmakrr.com'),
  openGraph: {
    title: 'Startup Jobs UK | Rainmakrr Agency',
    description: 'Find the best startup jobs and recruitment agencies in the UK. Connect with specialist recruiters for startup roles.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Rainmakrr Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Jobs UK | Rainmakrr Agency',
    description: 'Find startup jobs and recruitment agencies in the UK.',
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
  name: 'Rainmakrr Agency',
  description: 'Find the best startup jobs and recruitment agencies in the UK.',
  url: 'https://agency.rainmakrr.com',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  name: 'Rainmakrr Agency',
  description: 'Specialist startup recruitment agency connecting talent with UK startups and scale-ups',
  url: 'https://agency.rainmakrr.com',
  areaServed: 'United Kingdom',
  serviceType: ['Startup Recruitment', 'Tech Jobs', 'Scale-up Recruitment', 'Startup Careers'],
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
