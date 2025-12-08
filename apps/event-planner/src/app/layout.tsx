import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Event Planner Insurance UK 2025 | Public Liability for Event Organisers',
    template: '%s | Event Planner Insurance UK',
  },
  description: 'Event planner and event organiser insurance in the UK. Get public liability insurance, event management insurance, and charity event insurance quotes for professional event organisers.',
  keywords: 'event planner insurance, event organiser insurance, public liability insurance for events, event management insurance, charity event insurance, corporate event insurance, wedding planner insurance, festival insurance, event insurance uk',
  authors: [{ name: 'Event Planner Insurance UK' }],
  metadataBase: new URL('https://eventplanner.quest'),
  openGraph: {
    title: 'Event Planner Insurance UK 2025 | Public Liability for Event Organisers',
    description: 'Professional event insurance for event planners and organisers. Get public liability cover and event management insurance.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Event Planner Insurance UK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Planner Insurance UK 2025',
    description: 'Event insurance quotes for professional event planners and organisers.',
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
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/icon.svg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Event Planner Insurance UK',
  description: 'Free UK event planner insurance quote comparison service',
  url: 'https://eventplanner.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free event insurance quote comparison service',
  },
  featureList: [
    'Compare event insurance quotes',
    'Public liability cover up to £10M',
    'Event management insurance',
    'Charity event coverage',
    'Corporate event insurance',
    'Professional event planner options',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Event Planner Insurance UK',
  description: 'Specialist event insurance for professional event planners and organisers',
  url: 'https://eventplanner.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Event Insurance', 'Public Liability Insurance', 'Event Management Insurance', 'Charity Event Insurance'],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
