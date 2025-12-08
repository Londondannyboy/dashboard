import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { createFAQSchema } from '@quest/seo/json-ld'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Event Planner Insurance UK 2025 | Public Liability for Event Organisers',
    template: '%s | Event Planner Insurance UK',
  },
  description: 'Plan unforgettable events with our UK platform. Find venues, suppliers & services for corporate & private events. Get instant quotes.',
  keywords: 'event planner insurance, event organiser insurance, public liability insurance for events, event management insurance, charity event insurance, corporate event insurance, wedding planner insurance, festival insurance, event insurance uk',
  authors: [{ name: 'Event Planner Insurance UK' }],
  metadataBase: new URL('https://eventplanner.quest'),
  openGraph: {
    title: 'Event Planner Insurance UK 2025 | Public Liability for Event Organisers',
    description: 'Professional event insurance for event planners and organisers. Get public liability cover and event management insurance.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Event Planner Insurance UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Event Planner Insurance UK 2025 | Public Liability for Event Organisers',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Planner Insurance UK 2025',
    description: 'Event insurance quotes for professional event planners and organisers.',
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
    question: 'What does event planner insurance cover?',
    answer: 'Event planner insurance covers public liability for accidents at events, professional indemnity for advice errors, equipment damage, event cancellation, and employer\'s liability if you have staff.'
  },
  {
    question: 'How much does event planner insurance cost?',
    answer: 'Annual premiums typically range from £150-£600 depending on your turnover, event types, and coverage limits. One-off event policies start from around £50-£100.'
  },
  {
    question: 'Do I need insurance as an event planner?',
    answer: 'Yes, most venues require proof of public liability insurance before allowing events. Professional indemnity is also essential to protect against claims from planning mistakes or vendor issues.'
  },
  {
    question: 'Does event insurance cover cancellation?',
    answer: 'Event cancellation cover is available as an add-on and protects against financial losses from venue closure, supplier failure, extreme weather, or other unforeseen circumstances.'
  },
  {
    question: 'What\'s the difference between public liability and professional indemnity?',
    answer: 'Public liability covers physical injury or property damage at events. Professional indemnity covers financial losses from your advice, planning mistakes, or failure to deliver agreed services.'
  },
  {
    question: 'Can I get insurance for a single event?',
    answer: 'Yes, single-event policies are available for one-off occasions. However, annual policies are more cost-effective if you plan more than 3-4 events per year.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Event Planner Insurance UK',
    url: 'https://eventplanner.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://eventplanner.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
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
  },
  {
    '@type': 'InsuranceAgency',
  name: 'Event Planner Insurance UK',
  description: 'Specialist event insurance for professional event planners and organisers',
  url: 'https://eventplanner.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Event Insurance', 'Public Liability Insurance', 'Event Management Insurance', 'Charity Event Insurance'],
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
