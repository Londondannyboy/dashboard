import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Craft Fair Insurance UK 2025 | Market Stall & Trader Cover',
    template: '%s | Craft Fair Insurance UK',
  },
  description: 'Find craft fairs & artisan markets across the UK. Book stall spaces, browse events & connect with makers. Grow your craft business.',
  keywords: 'craft fair insurance, market stall insurance, farmers market insurance, car boot sale insurance, craft seller insurance, market trader insurance, one day stall insurance',
  authors: [{ name: 'Craft Fair Insurance UK' }],
  metadataBase: new URL('https://craftfair.quest'),
  openGraph: {
    title: 'Craft Fair Insurance UK 2025 | Market Stall & Trader Cover',
    description: 'Insurance for craft fairs, market stalls, and traders. Get public liability cover for craft sellers.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Craft Fair Insurance UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Craft Fair Insurance UK 2025 | Market Stall & Trader Cover',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Craft Fair Insurance UK 2025',
    description: 'Market stall and craft fair insurance quotes for UK traders.',
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
    question: 'What does craft fair insurance cover?',
    answer: 'Coverage includes public liability for visitor injuries, product liability for items sold, stock insurance against theft or damage, stall equipment protection, and personal accident cover for stallholders.'
  },
  {
    question: 'How much does craft fair insurance cost?',
    answer: 'Single-event policies start from £30-£60. Annual policies for regular craft fair traders typically cost £80-£200 depending on stock value, sales turnover, and coverage limits.'
  },
  {
    question: 'Do I need insurance for selling at craft fairs?',
    answer: 'Yes, most craft fair organizers require proof of public liability insurance before allowing you to trade. It\'s essential for protecting yourself from injury claims and product liability issues.'
  },
  {
    question: 'What\'s the difference between public and product liability?',
    answer: 'Public liability covers injuries to visitors at your stall. Product liability covers claims from products you sell causing harm later, such as jewelry causing allergic reactions or unsafe toys.'
  },
  {
    question: 'Does it cover my stock and materials?',
    answer: 'Yes, you can add stock insurance to cover your handmade items, raw materials, and finished products against theft, damage, or loss during transport and at the event.'
  },
  {
    question: 'Can I get annual cover for multiple craft fairs?',
    answer: 'Yes, annual policies are more cost-effective if you attend 3+ events per year. They provide continuous cover for all events, markets, and sometimes even online sales.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Craft Fair Insurance UK',
    url: 'https://craftfair.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://craftfair.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Craft Fair Insurance UK',
  description: 'Free UK craft fair and market stall insurance quote service',
  url: 'https://craftfair.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free craft fair and market stall insurance quotes',
  },
  featureList: [
    'Market stall insurance',
    'Craft fair coverage',
    'Farmers market insurance',
    'Car boot sale protection',
    'One-day stall policies',
    'Craft seller liability cover',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  },
  {
    '@type': 'InsuranceAgency',
  name: 'Craft Fair Insurance UK',
  description: 'Specialist market stall and craft fair insurance for traders',
  url: 'https://craftfair.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Market Stall Insurance', 'Craft Fair Insurance', 'Farmers Market Insurance', 'Craft Seller Insurance'],
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
