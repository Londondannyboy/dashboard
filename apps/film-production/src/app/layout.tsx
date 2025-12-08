import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { createFAQSchema } from '@quest/seo/json-ld'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Film Production Insurance UK 2025 | Short Film & TV Production Cover',
    template: '%s | Film Production Insurance UK',
  },
  description: 'Find UK film production services & crews. Browse locations, equipment hire & post-production. Bring your film project to life.',
  keywords: 'film production insurance, short film insurance, tv production insurance, video production insurance, documentary insurance, music video insurance, commercial production insurance, film equipment insurance, cast and crew insurance, independent film insurance, production company insurance, filmmakers insurance uk',
  authors: [{ name: 'Film Production Insurance UK' }],
  metadataBase: new URL('https://filmproduction.quest'),
  openGraph: {
    title: 'Film Production Insurance UK 2025 | Short Film & TV Production Cover',
    description: 'Get specialist insurance for your film production. Covers short films, TV, documentaries, commercials & more.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Film Production Insurance UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Film Production Insurance UK 2025 | Short Film & TV Production Cover',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Film Production Insurance UK 2025',
    description: 'Film production insurance quotes for independent creators & production companies.',
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
    question: 'What does film production insurance cover?',
    answer: 'Coverage includes equipment insurance, public liability, cast insurance, errors and omissions (E&O), props and wardrobe, location damage, and production interruption due to unforeseen circumstances.'
  },
  {
    question: 'How much does film production insurance cost?',
    answer: 'Short film insurance starts from £200-£500. Feature films and commercials typically pay 1-3% of the production budget. A £100,000 production might cost £1,000-£3,000 to insure.'
  },
  {
    question: 'Is film production insurance required?',
    answer: 'Yes, most locations, equipment rental companies, and distributors require proof of insurance. Broadcasters and streaming platforms mandate E&O insurance before they\'ll air your content.'
  },
  {
    question: 'What equipment is covered?',
    answer: 'Cameras, lenses, lighting, audio equipment, drones, editing systems, and all owned or hired production gear. Coverage includes theft, damage, and loss on location or in transit.'
  },
  {
    question: 'Does it cover cast and crew?',
    answer: 'Yes, you can add cast insurance covering illness or injury that delays production, plus employer\'s liability for crew and public liability for all people on set.'
  },
  {
    question: 'What is E&O insurance and do I need it?',
    answer: 'Errors & Omissions insurance protects against claims of copyright infringement, defamation, and privacy violations. It\'s essential for distribution and required by most broadcasters and platforms.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Film Production Insurance UK',
    url: 'https://filmproduction.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://filmproduction.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Film Production Insurance UK',
  description: 'Free UK film production insurance quote comparison service for short films, TV, documentaries, and commercials',
  url: 'https://filmproduction.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free film production insurance quote comparison service',
  },
  featureList: [
    'Compare film production insurance quotes',
    'Short film insurance cover',
    'TV and documentary production insurance',
    'Commercial production insurance',
    'Equipment and property damage cover',
    'Cast and crew liability protection',
    'Independent filmmaker and production company options',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  },
  {
    '@type': 'InsuranceAgency',
  name: 'Film Production Insurance UK',
  description: 'Specialist film and video production insurance comparison service for UK creators',
  url: 'https://filmproduction.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Film Production Insurance', 'Short Film Insurance', 'TV Production Insurance', 'Documentary Insurance', 'Commercial Production Insurance'],
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
