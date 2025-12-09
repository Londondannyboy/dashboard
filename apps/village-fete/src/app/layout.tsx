import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Village Fete Insurance UK 2025 | Community Event Public Liability',
    template: '%s | Village Fete Insurance',
  },
  description: 'Community and village fete insurance for churches, parish councils, and charity events. Get public liability insurance for community gatherings and fundraisers.',
  keywords: 'village fete insurance, community event insurance, church event insurance, parish council insurance, charity fundraiser insurance, village hall insurance, fete insurance',
  authors: [{ name: 'Village Fete Insurance UK' }],
  metadataBase: new URL('https://villagefete.quest'),
  openGraph: {
    title: 'Village Fete Insurance UK 2025 | Community Event Public Liability',
    description: 'Community and village event insurance for fundraisers, churches, and parish councils.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Village Fete Insurance UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Village Fete Insurance UK 2025 | Community Event Public Liability',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Village Fete Insurance UK 2025',
    description: 'Community and village fete insurance quotes for UK events.',
    images: '/og-image.png',
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
    question: 'What does village fete insurance cover?',
    answer: 'Coverage includes public liability for visitor injuries, marquee and equipment insurance, event cancellation, weather cover, and protection for fundraising activities like raffles and competitions.'
  },
  {
    question: 'How much does village fete insurance cost?',
    answer: 'Single-event fete insurance typically costs £75-£200 depending on expected attendance, activities planned, and whether you include cancellation cover. Annual policies for regular events are more economical.'
  },
  {
    question: 'Do we need insurance for a small village fete?',
    answer: 'Yes, most venues and councils require proof of public liability insurance. It protects your committee and volunteers from personal financial liability if someone is injured at the event.'
  },
  {
    question: 'Does it cover weather cancellation?',
    answer: 'Weather cover is available as an add-on and pays out if excessive rain, wind, or snow forces cancellation. You\'ll need to set trigger points like rainfall measurements for claims.'
  },
  {
    question: 'Are volunteers and committee members covered?',
    answer: 'Yes, public liability insurance covers organizers, committee members, and volunteers acting on behalf of the event. Consider trustee indemnity for committee financial protection too.'
  },
  {
    question: 'What about funfair rides and inflatables?',
    answer: 'Equipment suppliers should have their own insurance, but verify this. Your policy should cover your liability for hiring them. Higher-risk activities may need specific cover.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Village Fete Insurance UK',
    url: 'https://villagefete.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://villagefete.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Village Fete Insurance UK',
  description: 'Free UK community and village fete insurance quote service',
  url: 'https://villagefete.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free community event insurance quotes',
  },
  featureList: [
    'Community event insurance',
    'Church and charity event coverage',
    'Parish council event insurance',
    'Village hall protection',
    'Fete and fundraiser coverage',
    'Public liability up to £10M',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  },
  {
    '@type': 'InsuranceAgency',
  name: 'Village Fete Insurance UK',
  description: 'Specialist community and village event insurance',
  url: 'https://villagefete.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Community Event Insurance', 'Church Event Insurance', 'Parish Council Insurance', 'Charity Event Insurance'],
  },
  {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
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
