import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { createFAQSchema } from '@quest/seo/json-ld'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Yoga Teacher Insurance UK 2025 | Compare Instructor Insurance',
    template: '%s | Yoga Teacher Insurance UK',
  },
  description: 'Compare yoga teacher insurance quotes instantly. Get specialist UK cover for yoga instructors & studios. Save on premiums today.',
  keywords: 'yoga teacher insurance, yoga instructor insurance, yoga insurance uk, yoga liability insurance, pilates teacher insurance, yoga professional indemnity, yoga public liability insurance, fitness instructor insurance, yoga therapist insurance, hot yoga insurance, aerial yoga insurance, yoga retreat insurance, yoga studio insurance, cheap yoga insurance, best yoga teacher insurance uk',
  authors: [{ name: 'Yoga Teacher Insurance UK' }],
  metadataBase: new URL('https://yogainsurance.quest'),
  openGraph: {
    title: 'Yoga Teacher Insurance UK 2025 | Compare Instructor Insurance',
    description: 'Compare yoga teacher insurance quotes from specialist UK insurers. Professional cover for yoga instructors - get protected today.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Yoga Teacher Insurance UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yoga Teacher Insurance UK 2025 | Compare Instructor Insurance',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoga Teacher Insurance UK 2025',
    description: 'Compare yoga teacher insurance quotes from UK specialist insurers.',
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

// FAQ data for rich snippets
const faqs = [
  {
    question: 'What does yoga teacher insurance cover?',
    answer: 'Coverage includes public liability for student injuries, professional indemnity for advice claims, equipment insurance, and treatment risk cover. Some policies include online class coverage.'
  },
  {
    question: 'How much does yoga teacher insurance cost?',
    answer: 'Annual premiums range from £60-£200 depending on class frequency, student numbers, and whether you teach at studios, outdoors, online, or from home.'
  },
  {
    question: 'Do I need insurance to teach yoga?',
    answer: 'Most studios, gyms, and venues require proof of insurance before allowing you to teach. It\'s also essential for protecting yourself financially from injury claims and professional negligence.'
  },
  {
    question: 'Does it cover online yoga classes?',
    answer: 'Yes, many modern policies include online teaching via Zoom, YouTube, or pre-recorded content. Check your policy specifically mentions virtual/online class coverage.'
  },
  {
    question: 'What\'s the difference between public liability and professional indemnity?',
    answer: 'Public liability covers physical injuries to students. Professional indemnity covers financial losses from poor advice, incorrect technique instruction, or failure to identify student health issues.'
  },
  {
    question: 'Am I covered for outdoor yoga sessions?',
    answer: 'Yes, most policies cover outdoor teaching in parks, beaches, and gardens. Check geographical limits and whether you need additional cover for specific locations or events.'
  },
  {
    question: 'Do I need insurance if I only teach occasionally?',
    answer: 'Yes, even occasional teaching needs insurance. One injury claim could cost thousands. Many insurers offer flexible policies for part-time teachers at reduced rates.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Yoga Teacher Insurance UK',
    url: 'https://yogainsurance.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://yogainsurance.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Yoga Teacher Insurance UK',
  description: 'Free UK yoga teacher insurance quote comparison service for instructors and wellness professionals',
  url: 'https://yogainsurance.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free yoga teacher insurance quote comparison service',
  },
  featureList: [
    'Compare yoga teacher insurance quotes',
    'Public liability cover up to £10M',
    'Professional indemnity insurance',
    'Treatment risk cover',
    'Equipment and prop cover',
    'Worldwide teaching cover options',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  },
  {
    '@type': 'InsuranceAgency',
  name: 'Yoga Teacher Insurance UK',
  description: 'Specialist yoga teacher insurance comparison service for UK instructors',
  url: 'https://yogainsurance.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Yoga Teacher Insurance', 'Yoga Instructor Insurance', 'Pilates Teacher Insurance', 'Fitness Professional Insurance'],
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
