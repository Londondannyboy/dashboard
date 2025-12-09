import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Drone Insurance UK 2025 | UAV & Quadcopter Insurance Quotes',
    template: '%s | Drone Insurance UK',
  },
  description: 'Compare drone insurance quotes for UK pilots. Get specialist cover for commercial & recreational drones. Instant quotes from top insurers.',
  keywords: 'drone insurance, drone insurance uk, uav insurance, quadcopter insurance, commercial drone insurance, drone public liability insurance, fpv drone insurance, dji drone insurance, drone insurance for beginners, cheap drone insurance, best drone insurance uk, drone cover, drone liability insurance, recreational drone insurance, professional drone insurance, a2 cofc drone insurance',
  authors: [{ name: 'Drone Insurance UK' }],
  metadataBase: new URL('https://droneinsurance.quest'),
  openGraph: {
    title: 'Drone Insurance UK 2025 | UAV & Quadcopter Insurance Quotes',
    description: 'Compare drone insurance quotes from specialist UK insurers. Hobbyist and commercial UAV cover - get protected today.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Drone Insurance UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Drone Insurance UK 2025 | UAV & Quadcopter Insurance Quotes',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Insurance UK 2025',
    description: 'Compare drone insurance quotes from UK specialist insurers.',
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
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
}

// FAQ data for rich snippets
const faqs = [
  {
    question: 'What does drone insurance cover?',
    answer: 'Drone insurance typically covers public liability for third-party damage, hull insurance for your drone and equipment, theft, and damage during flight. Commercial policies also include professional indemnity.'
  },
  {
    question: 'How much does drone insurance cost in the UK?',
    answer: 'Recreational drone insurance starts from around £50-£100 per year. Commercial drone insurance typically costs £200-£500 annually depending on your equipment value and business use.'
  },
  {
    question: 'Who needs drone insurance?',
    answer: 'Commercial drone operators legally require insurance with minimum £1 million public liability cover. Recreational pilots are not legally required to have insurance, but it\'s highly recommended for protection.'
  },
  {
    question: 'Is drone insurance required by law?',
    answer: 'Yes, commercial drone operators must have insurance. The CAA requires at least £1 million public liability cover for any commercial drone operation in the UK.'
  },
  {
    question: 'What\'s not covered by drone insurance?',
    answer: 'Exclusions typically include deliberate damage, flying in restricted airspace, unregistered drones, criminal activity, and flying outside policy geographical limits or height restrictions.'
  },
  {
    question: 'How do I get a drone insurance quote?',
    answer: 'Use our comparison service to get multiple quotes from UK drone insurance specialists. You\'ll need details about your drone, its value, and how you plan to use it.'
  },
  {
    question: 'Can I get instant drone insurance coverage?',
    answer: 'Yes, many insurers offer instant online cover. Once you purchase your policy, you can typically download your certificate immediately and start flying the same day.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Drone Insurance UK',
    url: 'https://droneinsurance.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://droneinsurance.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Drone Insurance UK',
  description: 'Free UK drone insurance quote comparison service for UAVs, quadcopters and commercial drones',
  url: 'https://droneinsurance.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free drone insurance quote comparison service',
  },
  featureList: [
    'Compare drone insurance quotes',
    'Public liability cover up to £10M',
    'Hull and equipment damage protection',
    'Theft cover for drones and accessories',
    'Commercial and recreational options',
    'FPV and racing drone cover',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  },
  {
    '@type': 'InsuranceAgency',
  name: 'Drone Insurance UK',
  description: 'Specialist drone and UAV insurance comparison service for UK pilots',
  url: 'https://droneinsurance.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Drone Insurance', 'UAV Insurance', 'Quadcopter Insurance', 'Commercial Drone Insurance'],
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
