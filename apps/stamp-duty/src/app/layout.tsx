import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { createFAQSchema } from '@quest/seo/json-ld'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Stamp Duty Calculator UK 2025 | Free SDLT Calculator',
    template: '%s | Stamp Duty Calculator',
  },
  description: 'Free UK stamp duty calculator 2025. Calculate stamp duty land tax for England, Wales, Scotland & Northern Ireland. Get instant accurate results.',
  keywords: 'stamp duty calculator, SDLT calculator, UK stamp duty, stamp duty rates, first-time buyer stamp duty, property tax calculator, stamp duty 2025',
  authors: [{ name: 'Stamp Duty Calculator' }],
  metadataBase: new URL('https://stampdutycalculator.quest'),
  openGraph: {
    title: 'Stamp Duty Calculator UK 2025 | Free SDLT Calculator',
    description: 'Stamp Duty Calculator - Calculate your UK Stamp Duty Land Tax instantly. Free calculator with 2025 rates.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Stamp Duty Calculator UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stamp Duty Calculator UK 2025 | Free SDLT Calculator',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stamp Duty Calculator UK 2025',
    description: 'Calculate your UK Stamp Duty instantly with our free stamp duty calculator.',
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
    google: 'verification-code', // Add your Google Search Console verification code
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
    question: 'How does the Stamp Duty Calculator work?',
    answer: 'Enter your property purchase price and buyer status (first-time buyer, home mover, or additional property). The calculator shows your exact stamp duty bill using current UK rates and thresholds.'
  },
  {
    question: 'Is the Stamp Duty Calculator free?',
    answer: 'Yes, it\'s completely free with no registration or payment required. Calculate stamp duty for unlimited properties.'
  },
  {
    question: 'What are the current stamp duty rates for 2025?',
    answer: 'Rates vary by property value and buyer type. First-time buyers get relief up to £425,000. Standard rates start at 0% up to £250,000, then increase progressively on the amount above each threshold.'
  },
  {
    question: 'Do first-time buyers pay less stamp duty?',
    answer: 'Yes, first-time buyers pay no stamp duty on properties up to £425,000, with relief available on properties up to £625,000 in England and Northern Ireland.'
  },
  {
    question: 'Is there extra stamp duty on second homes?',
    answer: 'Yes, an additional 3% surcharge applies to second homes and buy-to-let properties on top of the standard rates for each band.'
  },
  {
    question: 'Does stamp duty apply in Scotland and Wales?',
    answer: 'No, Scotland uses Land and Buildings Transaction Tax (LBTT) and Wales uses Land Transaction Tax (LTT), which have different rates. This calculator is for England and Northern Ireland only.'
  }
]

// JSON-LD structured data for the calculator
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Stamp Duty Calculator UK',
      description: 'Free UK Stamp Duty Land Tax calculator for residential properties',
      url: 'https://stampdutycalculator.quest',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://stampdutycalculator.quest?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'WebApplication',
      name: 'Stamp Duty Calculator UK',
      description: 'Free UK Stamp Duty Land Tax calculator for residential properties',
      url: 'https://stampdutycalculator.quest',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'GBP',
      },
      featureList: [
        'Calculate UK Stamp Duty Land Tax',
        'First-time buyer relief calculator',
        'Additional property surcharge calculator',
        'Non-UK resident stamp duty calculator',
        '2025 SDLT rates',
      ],
    },
    ...createFAQSchema(faqs),
  ],
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
