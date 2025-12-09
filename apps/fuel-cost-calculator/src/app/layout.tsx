import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Fuel Cost Calculator UK | Free Petrol & Diesel Cost Calculator',
    template: '%s | Fuel Cost Calculator UK',
  },
  description: 'Free UK fuel cost calculator for petrol and diesel. Calculate fuel costs per mile, journey costs, and fuel efficiency. Perfect for commuters, business mileage, and trip planning.',
  keywords: 'fuel cost calculator uk, petrol cost calculator, diesel cost calculator, fuel cost per mile, journey fuel cost, fuel economy calculator, mileage calculator, petrol expense calculator, cost of fuel calculator',
  authors: [{ name: 'Fuel Cost Calculator UK' }],
  metadataBase: new URL('https://fuelcostcalculator.quest'),
  openGraph: {
    title: 'Fuel Cost Calculator UK | Free Petrol & Diesel Cost Calculator',
    description: 'Calculate your fuel costs instantly. Free UK fuel cost calculator for petrol and diesel with cost per mile and journey planning.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Fuel Cost Calculator UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fuel Cost Calculator UK | Free Petrol & Diesel Cost Calculator',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fuel Cost Calculator UK',
    description: 'Calculate fuel costs with our free UK fuel cost calculator. Petrol & diesel support.',
    images: ['/og-image.png'],
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
    question: 'How does the Fuel Cost Calculator work?',
    answer: 'Enter your journey distance, vehicle\'s MPG (miles per gallon), and current fuel price. The calculator instantly shows your trip\'s fuel cost and total consumption.'
  },
  {
    question: 'Is the Fuel Cost Calculator free?',
    answer: 'Yes, it\'s completely free with no registration or payment required. Calculate unlimited journeys anytime.'
  },
  {
    question: 'Can I calculate costs for multiple journeys?',
    answer: 'Yes, you can calculate costs for individual trips or estimate weekly, monthly, and annual fuel expenses based on your regular mileage.'
  },
  {
    question: 'Does it work for both petrol and diesel?',
    answer: 'Yes, the calculator works for petrol, diesel, and other fuel types. Simply enter the appropriate fuel price for your vehicle type.'
  },
  {
    question: 'How do I find my car\'s MPG?',
    answer: 'Check your vehicle\'s manual, manufacturer website, or use the trip computer display. You can also calculate it by dividing miles driven by fuel consumed.'
  },
  {
    question: 'Are fuel prices updated automatically?',
    answer: 'The calculator uses current UK average fuel prices by default, but you can manually adjust the price to match your local rates for more accurate results.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Fuel Cost Calculator UK',
    url: 'https://fuelcostcalculator.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://fuelcostcalculator.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Fuel Cost Calculator UK',
  description: 'Free UK fuel cost calculator to calculate petrol and diesel costs per mile and for journeys',
  url: 'https://fuelcostcalculator.quest',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
  },
  featureList: [
    'Calculate fuel cost per mile',
    'Calculate journey fuel costs',
    'Petrol cost calculator',
    'Diesel cost calculator',
    'Real-time fuel prices',
    'Fuel economy tracking',
    'Business mileage calculator',
    'Trip cost planning',
  ],
  },
  {
    '@type': 'LocalBusiness',
    name: 'Fuel Cost Calculator UK',
    description: 'UK fuel cost calculation service for petrol and diesel journey planning',
    url: 'https://fuelcostcalculator.quest',
    areaServed: 'United Kingdom',
    serviceType: ['Fuel Cost Calculator', 'Journey Cost Calculator', 'Mileage Calculator', 'Fuel Economy Calculator'],
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
