import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { createFAQSchema } from '@quest/seo/json-ld'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Esports Event Insurance UK 2025 | Gaming Tournament & LAN Party Cover',
    template: '%s | Esports Event Insurance UK',
  },
  description: 'Plan epic esports events in the UK. Find venues, equipment & tournament management services. Host professional gaming competitions.',
  keywords: 'esports event insurance, gaming tournament insurance, lan party insurance, esports venue insurance, gaming convention insurance, esports insurance uk, gaming event insurance',
  authors: [{ name: 'Esports Event Insurance UK' }],
  metadataBase: new URL('https://esportsevent.quest'),
  openGraph: {
    title: 'Esports Event Insurance UK 2025 | Gaming Tournament & LAN Party Cover',
    description: 'Specialist insurance for esports events and gaming tournaments. Protect your gaming event with comprehensive cover.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Esports Event Insurance UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Esports Event Insurance UK 2025 | Gaming Tournament & LAN Party Cover',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esports Event Insurance UK 2025',
    description: 'Gaming tournament and esports event insurance quotes for UK organisers.',
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
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/icon.svg',
  },
}

// FAQ data for rich snippets
const faqs = [
  {
    question: 'What does esports event insurance cover?',
    answer: 'Coverage includes public liability for attendee injuries, equipment insurance for gaming hardware, event cancellation, cyber liability, and protection for streaming equipment and prize money.'
  },
  {
    question: 'How much does esports event insurance cost?',
    answer: 'Insurance for small tournaments starts from £100-£200. Larger esports events with substantial prize pools and equipment can cost £500-£2,000 depending on scale and coverage.'
  },
  {
    question: 'Who needs esports event insurance?',
    answer: 'Tournament organizers, esports venues, LAN party hosts, and gaming cafes all need insurance to protect against liability claims, equipment damage, and event cancellation costs.'
  },
  {
    question: 'Does it cover gaming equipment damage?',
    answer: 'Yes, specialist policies cover gaming PCs, consoles, monitors, VR equipment, streaming hardware, and networking equipment against theft, damage, and technical failure during events.'
  },
  {
    question: 'Is cyber liability included?',
    answer: 'Many esports policies include cyber liability to cover DDoS attacks, data breaches, stream hijacking, and other cyber incidents that could disrupt your tournament or expose attendee data.'
  },
  {
    question: 'Can I insure online-only esports tournaments?',
    answer: 'Yes, you can get coverage for virtual events including protection for technical failures, cyber attacks, and professional indemnity for organizing and running online competitions.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Esports Event Insurance UK',
    url: 'https://esportsevent.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://esportsevent.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Esports Event Insurance UK',
  description: 'Free UK esports event insurance quote comparison service for gaming tournaments and LAN parties',
  url: 'https://esportsevent.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free esports event insurance quote comparison service',
  },
  featureList: [
    'Compare esports event insurance quotes',
    'Gaming tournament liability cover',
    'LAN party insurance',
    'Equipment protection',
    'Prize pool insurance',
    'Venue liability coverage',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  },
  {
    '@type': 'InsuranceAgency',
  name: 'Esports Event Insurance UK',
  description: 'Specialist esports and gaming event insurance for UK tournament organisers',
  url: 'https://esportsevent.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Esports Insurance', 'Gaming Tournament Insurance', 'LAN Party Insurance', 'Gaming Convention Insurance'],
  },
  ...createFAQSchema(faqs),
  ]
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
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
