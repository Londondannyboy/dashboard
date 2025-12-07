import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Insulin Pump Insurance UK 2025 | Compare Diabetes Device Cover',
    template: '%s | Insulin Pump Insurance UK',
  },
  description: 'Compare insulin pump insurance quotes from UK specialist insurers. Get comprehensive cover for your insulin pump, CGM, and diabetes technology. Protect against loss, theft, and accidental damage from just £6.95/month.',
  keywords: 'insulin pump insurance, insulin pump insurance uk, diabetes pump insurance, cgm insurance, continuous glucose monitor insurance, omnipod insurance, medtronic pump insurance, tandem tslim insurance, dexcom insurance, freestyle libre insurance, diabetes technology insurance, pump cover uk',
  authors: [{ name: 'Insulin Pump Insurance UK' }],
  metadataBase: new URL('https://insulinpumpinsurance.quest'),
  openGraph: {
    title: 'Insulin Pump Insurance UK 2025 | Compare Diabetes Device Cover',
    description: 'Compare insulin pump insurance quotes from UK specialist insurers. Protect your diabetes technology from loss, theft, and damage.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Insulin Pump Insurance UK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insulin Pump Insurance UK 2025',
    description: 'Compare insulin pump insurance quotes. Protect your diabetes technology.',
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
  '@type': 'WebApplication',
  name: 'Insulin Pump Insurance UK Calculator',
  description: 'Free UK insulin pump insurance comparison and calculator service',
  url: 'https://insulinpumpinsurance.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    description: 'Free insulin pump insurance quote comparison service',
  },
  featureList: [
    'Compare insulin pump insurance quotes',
    'Diabetes device insurance calculator',
    'CGM and sensor cover',
    'Accidental damage protection',
    'Theft and loss cover',
    'Worldwide travel coverage',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Insulin Pump Insurance UK',
  description: 'Specialist insulin pump and diabetes technology insurance comparison service for UK residents',
  url: 'https://insulinpumpinsurance.quest',
  areaServed: 'United Kingdom',
  serviceType: ['Insulin Pump Insurance', 'CGM Insurance', 'Diabetes Device Insurance', 'Medical Equipment Insurance'],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does insulin pump insurance cost in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Insulin pump insurance in the UK typically costs between £6-£10 per month for comprehensive cover. This includes protection against accidental damage, theft, and loss. Some policies offer zero excess and worldwide cover for up to 90 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need insurance for my insulin pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While not mandatory, insulin pump insurance is highly recommended. Pumps can cost £2,000-£6,000 to replace, and NHS/ICB replacement can take time. Insurance provides peace of mind and faster replacement if your pump is lost, stolen, or damaged.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does insulin pump insurance cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comprehensive insulin pump insurance typically covers accidental damage, theft, loss, liquid damage, malicious damage, and often includes worldwide cover. Many policies also cover CGM devices, sensors, infusion sets, and loan equipment.',
      },
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
