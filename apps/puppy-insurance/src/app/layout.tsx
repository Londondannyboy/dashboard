import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Puppy Insurance UK 2025 | Compare Pet Insurance for Puppies & Dogs',
    template: '%s | Puppy Insurance UK',
  },
  description: 'Compare puppy insurance quotes instantly. Get cover from 8 weeks old. Protect your puppy with comprehensive UK pet insurance.',
  keywords: 'puppy insurance, puppy insurance uk, pet insurance for puppies, dog insurance, puppy insurance cost, best puppy insurance, cheap puppy insurance, puppy insurance comparison, lifetime puppy insurance, how much is puppy insurance, puppy vet insurance, new puppy insurance, puppy health insurance, dog insurance uk, pet insurance quotes, puppy insurance calculator',
  authors: [{ name: 'Puppy Insurance UK' }],
  metadataBase: new URL('https://puppyinsurance.quest'),
  openGraph: {
    title: 'Puppy Insurance UK 2025 | Compare Pet Insurance Quotes',
    description: 'Compare puppy insurance quotes from UK pet insurers. Calculate your puppy insurance costs and find the best cover for your furry friend.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Puppy Insurance UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Puppy Insurance UK 2025 | Compare Pet Insurance Quotes',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puppy Insurance UK 2025',
    description: 'Compare puppy insurance quotes. Find the best pet insurance for your new puppy.',
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

// JSON-LD structured data for the insurance quote service




const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Puppy Insurance UK',
    url: 'https://puppyinsurance.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://puppyinsurance.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Puppy Insurance UK Calculator',
  description: 'Free UK puppy insurance comparison and calculator service',
  url: 'https://puppyinsurance.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free puppy insurance quote comparison service',
  },
  featureList: [
    'Compare puppy insurance quotes',
    'Puppy insurance cost calculator',
    'Lifetime cover options',
    'Accident and illness cover',
    'Vet fee comparison',
    'Breed-specific pricing',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  },
  {
    '@type': 'InsuranceAgency',
  name: 'Puppy Insurance UK',
  description: 'Specialist puppy and dog insurance comparison service for UK pet owners',
  url: 'https://puppyinsurance.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Pet Insurance', 'Puppy Insurance', 'Dog Insurance', 'Animal Insurance'],
  },
  {
    '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much is puppy insurance in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puppy insurance in the UK typically costs between £15-£50 per month depending on your breed, age, location and level of cover. Lifetime cover costs more than time-limited policies, and brachycephalic breeds (like French Bulldogs) tend to be more expensive to insure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What age should I insure my puppy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should insure your puppy as soon as you get them, ideally from 8 weeks old. Most insurers require puppies to be at least 8 weeks old. Getting insurance early means conditions that develop later will be covered, as pre-existing conditions are typically excluded.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does puppy insurance cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puppy insurance typically covers vet fees for accidents and illnesses, third party liability, death from illness or accident, theft or straying, and advertising/reward costs. Some policies also include dental cover, behavioural treatment, and complementary therapies.',
      },
    },
  ],
  }
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
