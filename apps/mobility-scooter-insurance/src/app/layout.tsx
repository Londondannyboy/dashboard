import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { createFAQSchema } from '@quest/seo/json-ld'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Mobility Scooter Insurance UK 2025 | Compare Quotes & Save',
    template: '%s | Mobility Scooter Insurance UK',
  },
  description: 'Compare mobility scooter insurance quotes instantly. Get specialist UK cover for road & pavement use. Save on premiums today.',
  keywords: 'mobility scooter insurance, mobility scooter insurance uk, electric scooter insurance, disability scooter insurance, mobility scooter cover, cheap mobility scooter insurance, best mobility scooter insurance, compare mobility scooter insurance, mobility insurance, electric wheelchair insurance, powerchair insurance, mobility aid insurance, scooter insurance for disabled, mobility equipment insurance',
  authors: [{ name: 'Mobility Scooter Insurance UK' }],
  metadataBase: new URL('https://mobilityscooterinsurance.quest'),
  openGraph: {
    title: 'Mobility Scooter Insurance UK 2025 | Compare Quotes & Save',
    description: 'Compare mobility scooter insurance quotes from specialist UK insurers. Free quotes - save on your mobility equipment insurance today.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Mobility Scooter Insurance UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mobility Scooter Insurance UK 2025 | Compare Quotes & Save',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobility Scooter Insurance UK 2025',
    description: 'Compare mobility scooter insurance quotes from UK specialist insurers.',
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
    question: 'What does mobility scooter insurance cover?',
    answer: 'Coverage includes third-party liability for injury or damage to others, theft and damage to your scooter, personal accident cover, and breakdown assistance. Some policies also cover accessories and batteries.'
  },
  {
    question: 'How much does mobility scooter insurance cost?',
    answer: 'Annual premiums typically range from £60-£200 depending on scooter value, usage (pavement or road), and coverage level. Class 3 road-legal scooters cost more to insure than Class 2.'
  },
  {
    question: 'Is mobility scooter insurance required by law?',
    answer: 'Class 3 mobility scooters used on roads legally require third-party insurance. Class 2 pavement scooters don\'t legally require insurance, but it\'s strongly recommended for liability protection.'
  },
  {
    question: 'What\'s the difference between Class 2 and Class 3 scooters?',
    answer: 'Class 2 scooters have a maximum speed of 4mph and are for pavement use only. Class 3 scooters can reach 8mph, have lights and indicators, and can be used on roads.'
  },
  {
    question: 'Does insurance cover battery replacement?',
    answer: 'Some policies include accidental battery damage, but normal battery wear and tear is usually excluded. Check your policy for specific battery coverage terms.'
  },
  {
    question: 'Can I get breakdown cover for my mobility scooter?',
    answer: 'Yes, most insurers offer breakdown cover as standard or as an optional add-on, providing recovery if your scooter breaks down away from home.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Mobility Scooter Insurance UK',
    url: 'https://mobilityscooterinsurance.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://mobilityscooterinsurance.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Mobility Scooter Insurance UK',
  description: 'Free UK mobility scooter insurance quote comparison service for disability scooters and electric wheelchairs',
  url: 'https://mobilityscooterinsurance.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free mobility scooter insurance quote comparison service',
  },
  featureList: [
    'Compare mobility scooter insurance quotes',
    'Electric wheelchair coverage',
    'Theft and accidental damage protection',
    'Breakdown cover options',
    'Personal accident cover',
    'Public liability insurance',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  },
  {
    '@type': 'InsuranceAgency',
  name: 'Mobility Scooter Insurance UK',
  description: 'Specialist mobility scooter insurance comparison service for UK users',
  url: 'https://mobilityscooterinsurance.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Mobility Scooter Insurance', 'Disability Scooter Insurance', 'Electric Wheelchair Insurance', 'Mobility Aid Insurance'],
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
