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
    siteName: 'Chief of Staff Recruitment',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chief of Staff Recruitment Agency UK',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chief of Staff Recruitment Agency UK',
    description: 'Chief of staff recruitment agency for the UK. Find executive roles in London.',
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
    name: 'Chief of Staff Recruitment',
    url: 'https://chiefofstaff.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://chiefofstaff.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebSite',
  name: 'Chief of Staff Recruitment Agency UK',
  description: 'Chief of staff recruitment agency for the UK. Find the best recruiters for executive roles in London.',
  url: 'https://chiefofstaff.quest',
  },
  {
    '@type': 'EmploymentAgency',
  name: 'Chief of Staff Quest',
  description: 'UK recruitment agency specializing in Chief of Staff and executive assistant positions',
  url: 'https://chiefofstaff.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Executive Recruitment', 'Chief of Staff Recruitment', 'Executive Assistant Recruitment'],
  },
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://chiefofstaff.quest'
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
