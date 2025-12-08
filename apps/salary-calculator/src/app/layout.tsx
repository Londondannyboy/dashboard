import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Salary Calculator UK 2025 | Free Take Home Pay Calculator',
    template: '%s | Salary Calculator UK',
  },
  description: 'Free UK salary calculator 2025/26. Calculate your take home pay, income tax, National Insurance, student loan repayments and pension deductions. Updated with latest tax rates for England, Wales, Scotland and Northern Ireland.',
  keywords: 'salary calculator, salary calculator uk, uk salary calculator, take home pay calculator, tax calculator uk, income tax calculator, national insurance calculator, net salary calculator, gross to net calculator, payslip calculator, wage calculator uk, salary after tax, pay calculator, earnings calculator, uk tax calculator 2025',
  authors: [{ name: 'Salary Calculator UK' }],
  metadataBase: new URL('https://salarycalculator.quest'),
  openGraph: {
    title: 'Salary Calculator UK 2025 | Free Take Home Pay Calculator',
    description: 'Calculate your UK take home pay instantly. Free salary calculator with 2025/26 tax rates, NI, student loans and pension.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Salary Calculator UK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salary Calculator UK 2025',
    description: 'Calculate your UK take home pay with our free salary calculator. Updated 2025/26 tax rates.',
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

// JSON-LD structured data for the calculator
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'WebSite',
    name: 'Salary Calculator UK',
    url: 'https://salarycalculator.quest',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://salarycalculator.quest/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@type': 'WebApplication',
  name: 'Salary Calculator UK',
  description: 'Free UK salary calculator to work out your take home pay after tax, National Insurance and other deductions',
  url: 'https://salarycalculator.quest',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
  },
  featureList: [
    'Calculate UK take home pay',
    'Income tax calculator',
    'National Insurance calculator',
    'Student loan repayment calculator',
    'Pension contribution calculator',
    'Scottish tax rates',
    '2025/26 tax year rates',
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
