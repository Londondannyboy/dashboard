import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fractional Jobs UK | Find Fractional Executive Roles in London & UK',
  description: 'Find fractional executive jobs in the UK. Browse part-time C-suite & senior leadership roles. Connect with top companies hiring fractional talent.',
  keywords: 'fractional jobs, fractional jobs UK, fractional jobs London, fractional recruitment agencies, fractional CFO, fractional CMO, fractional CTO, fractional executive, part-time executive roles, interim executive',
  metadataBase: new URL('https://fractional.quest'),
  openGraph: {
    title: 'Fractional Jobs UK | Find Fractional Executive Roles',
    description: 'Discover fractional jobs in the UK. Browse fractional CFO, CMO, CTO and executive roles in London.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Fractional Quest',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fractional Jobs UK | Find Fractional Executive Roles',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional Jobs UK | Find Fractional Executive Roles',
    description: 'Discover fractional jobs in the UK. Browse fractional CFO, CMO, CTO and executive roles in London.',
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
    name: 'Fractional Quest',
    url: 'https://fractional.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://fractional.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebSite',
  name: 'Fractional Quest',
  description: 'Discover fractional jobs in the UK. Browse fractional CFO, CMO, CTO and executive roles in London.',
  url: 'https://fractional.quest',
  },
  {
    '@type': 'EmploymentAgency',
  name: 'Fractional Quest',
  description: 'UK platform connecting businesses with fractional executives - CFOs, CMOs, CTOs and other part-time leadership roles',
  url: 'https://fractional.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Fractional CFO', 'Fractional CMO', 'Fractional CTO', 'Interim Executive', 'Part-time Executive'],
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
