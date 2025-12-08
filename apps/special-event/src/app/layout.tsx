import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { createFAQSchema } from '@quest/seo/json-ld'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Special Event Insurance UK 2025 | One-Off Event Cover & Quotes',
    template: '%s | Special Event Insurance',
  },
  description: 'Special event insurance for one-off events, exhibitions, trade shows, and temporary events. Get public liability insurance quotes for your special occasion.',
  keywords: 'special event insurance, one off event insurance, art exhibition insurance, trade show insurance, outdoor event insurance, pop-up event insurance, multi-event insurance',
  authors: [{ name: 'Special Event Insurance UK' }],
  metadataBase: new URL('https://specialevent.quest'),
  openGraph: {
    title: 'Special Event Insurance UK 2025 | One-Off Event Cover',
    description: 'Specialist insurance for one-off events, exhibitions, trade shows, and temporary occasions.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Special Event Insurance UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Special Event Insurance UK 2025 | One-Off Event Cover',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Special Event Insurance UK 2025',
    description: 'One-off event insurance quotes for UK organisers.',
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
    question: 'What does special event insurance cover?',
    answer: 'Coverage includes public liability for attendee injuries, event cancellation due to unforeseen circumstances, weather disruption, supplier failure, property damage, and equipment insurance for hired or owned items.'
  },
  {
    question: 'How much does special event insurance cost?',
    answer: 'One-day event insurance starts from £50-£150 for small gatherings. Larger events with 500+ attendees typically cost £200-£500. Wedding and corporate events may cost more based on value and risk.'
  },
  {
    question: 'What types of events can be insured?',
    answer: 'Weddings, birthday parties, corporate functions, charity galas, festivals, concerts, exhibitions, and virtually any planned gathering. Each event type may need specific coverage tailored to its risks.'
  },
  {
    question: 'Does it cover event cancellation?',
    answer: 'Yes, cancellation cover protects your deposits and costs if you must cancel due to illness, venue closure, extreme weather, supplier bankruptcy, or other covered reasons beyond your control.'
  },
  {
    question: 'How late can I purchase event insurance?',
    answer: 'Most insurers require at least 14-30 days notice before your event. Some offer last-minute cover, but cancellation insurance must typically be purchased soon after making your first deposit.'
  },
  {
    question: 'Does it cover marquee and equipment hire?',
    answer: 'Yes, you can insure hired marquees, furniture, sound systems, lighting, and catering equipment against damage or theft. Check if your hire company\'s insurance is sufficient first.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Special Event Insurance UK',
    url: 'https://specialevent.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://specialevent.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Special Event Insurance UK',
  description: 'Free UK special event insurance quote comparison service',
  url: 'https://specialevent.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free special event insurance quotes',
  },
  featureList: [
    'One-off event insurance',
    'Art exhibition insurance',
    'Trade show coverage',
    'Outdoor event insurance',
    'Pop-up event coverage',
    'Multi-event policies',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  },
  {
    '@type': 'InsuranceAgency',
  name: 'Special Event Insurance UK',
  description: 'Specialist one-off and temporary event insurance',
  url: 'https://specialevent.quest',
  areaServed: 'United Kingdom',
  serviceType: ['One-Off Event Insurance', 'Exhibition Insurance', 'Trade Show Insurance', 'Pop-Up Event Insurance'],
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
