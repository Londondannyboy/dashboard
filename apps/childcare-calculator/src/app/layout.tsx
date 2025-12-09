import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { createFAQSchema } from '@quest/seo/json-ld'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Childcare Calculator UK 2025 | Free Childcare Cost Calculator',
    template: '%s | Childcare Calculator UK',
  },
  description: 'Free UK childcare calculator 2025. Calculate nursery, childminder & nanny costs instantly. Compare by age, region & type. Check Tax-Free Childcare.',
  keywords: 'childcare calculator, childcare costs uk, nursery costs, childminder costs, nanny costs, childcare calculator uk, cost of childcare, tax free childcare calculator, 30 hours free childcare, childcare costs by age, nursery fees calculator, childcare cost calculator, uk childcare calculator, childcare budget calculator',
  authors: [{ name: 'Childcare Calculator UK' }],
  metadataBase: new URL('https://childcarecalculator.quest'),
  openGraph: {
    title: 'Childcare Calculator UK 2025 | Free Childcare Cost Calculator',
    description: 'Calculate UK childcare costs instantly. Free calculator with nursery, childminder and nanny costs by region. Check eligibility for government support.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Childcare Calculator UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Childcare Calculator UK 2025 | Free Childcare Cost Calculator',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Childcare Calculator UK 2025',
    description: 'Calculate UK childcare costs with our free calculator. Compare nurseries, childminders and nannies.',
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
  verification: {
    google: 'verification-code',
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
    question: 'How does the Childcare Calculator work?',
    answer: 'The calculator estimates your childcare costs based on your location, number of children, and type of care needed. It shows your total weekly and monthly costs, helping you plan your childcare budget.'
  },
  {
    question: 'Is the Childcare Calculator free to use?',
    answer: 'Yes, the calculator is completely free to use with no registration required. Simply enter your details to get instant cost estimates.'
  },
  {
    question: 'What childcare types are included?',
    answer: 'The calculator covers nursery care, childminder services, after-school clubs, and holiday care. You can mix different care types to match your specific needs.'
  },
  {
    question: 'Does it include government funding?',
    answer: 'Yes, the calculator accounts for free childcare hours you may be entitled to, including 15 or 30 hours of funded childcare for eligible families in the UK.'
  },
  {
    question: 'Can I compare childcare costs across different areas?',
    answer: 'Yes, you can adjust the location to see how childcare costs vary across different regions in the UK, helping you make informed decisions about where to live.'
  },
  {
    question: 'How accurate are the cost estimates?',
    answer: 'The calculator uses current UK average rates from official sources and is updated regularly. Actual costs may vary depending on your specific provider and location.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Childcare Calculator UK',
    url: 'https://childcarecalculator.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://childcarecalculator.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Childcare Calculator UK',
  description: 'Free UK childcare calculator to work out nursery, childminder and nanny costs. Compare childcare options and check government support eligibility.',
  url: 'https://childcarecalculator.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
  },
  featureList: [
    'Calculate UK childcare costs',
    'Compare nursery, childminder and nanny costs',
    'Regional cost variations',
    'Age-based pricing',
    'Tax-Free Childcare eligibility',
    '30 hours free childcare checker',
    'Government support calculator',
  ],
  },
  {
    '@type': 'LocalBusiness',
    name: 'Childcare Calculator UK',
    description: 'UK childcare cost calculation service helping families budget for nursery, childminder and nanny costs',
    url: 'https://childcarecalculator.quest',
    areaServed: 'United Kingdom',
    serviceType: ['Childcare Cost Calculator', 'Nursery Cost Calculator', 'Childminder Cost Calculator', 'Government Support Eligibility'],
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
