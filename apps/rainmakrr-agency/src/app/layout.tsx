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

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Startup Jobs UK | Rainmakrr Agency',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Jobs UK | Rainmakrr Agency',
    description: 'Find startup jobs and recruitment agencies in the UK.',
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
    name: 'Rainmakrr Agency',
    url: 'https://agency.rainmakrr.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://agency.rainmakrr.com/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebSite',
  name: 'Rainmakrr Agency',
  description: 'Find the best startup jobs and recruitment agencies in the UK.',
  url: 'https://agency.rainmakrr.com',
  },
  {
    '@type': 'EmploymentAgency',
  name: 'Rainmakrr Agency',
  description: 'Specialist startup recruitment agency connecting talent with UK startups and scale-ups',
  url: 'https://agency.rainmakrr.com',
  areaServed: 'United Kingdom',
  serviceType: ['Startup Recruitment', 'Tech Jobs', 'Scale-up Recruitment', 'Startup Careers'],
  },
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://agency.rainmakrr.com'
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
