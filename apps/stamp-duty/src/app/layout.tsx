import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Stamp Duty Calculator UK 2025 | Free SDLT Calculator',
    template: '%s | Stamp Duty Calculator',
  },
  description: 'Stamp Duty Calculator - Calculate your UK Stamp Duty Land Tax instantly. Free stamp duty calculator for first-time buyers, additional properties & non-UK residents.',
  keywords: 'stamp duty calculator, SDLT calculator, UK stamp duty, stamp duty rates, first-time buyer stamp duty, property tax calculator, stamp duty 2025',
  authors: [{ name: 'Stamp Duty Calculator' }],
  metadataBase: new URL('https://stampdutycalculator.quest'),
  openGraph: {
    title: 'Stamp Duty Calculator UK 2025 | Free SDLT Calculator',
    description: 'Stamp Duty Calculator - Calculate your UK Stamp Duty Land Tax instantly. Free calculator with 2025 rates.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Stamp Duty Calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stamp Duty Calculator UK 2025',
    description: 'Calculate your UK Stamp Duty instantly with our free stamp duty calculator.',
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
}

// JSON-LD structured data for the calculator
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Stamp Duty Calculator',
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
