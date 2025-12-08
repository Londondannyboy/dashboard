import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { createFAQSchema } from '@quest/seo/json-ld'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Salary Calculator UK 2025 | Free Take Home Pay Calculator',
    template: '%s | Salary Calculator UK',
  },
  description: 'Free UK salary calculator 2025/26. Calculate take home pay, tax, NI & pension deductions instantly. Updated with latest rates for all UK regions.',
  keywords: 'salary calculator, salary calculator uk, uk salary calculator, take home pay calculator, tax calculator uk, income tax calculator, national insurance calculator, net salary calculator, gross to net calculator, payslip calculator, wage calculator uk, salary after tax, pay calculator, earnings calculator, uk tax calculator 2025',
  authors: [{ name: 'Salary Calculator UK' }],
  metadataBase: new URL('https://salarycalculator.quest'),
  openGraph: {
    title: 'Salary Calculator UK 2025 | Free Take Home Pay Calculator',
    description: 'Calculate your UK take home pay instantly. Free salary calculator with 2025/26 tax rates, NI, student loans and pension.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Salary Calculator UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Salary Calculator UK 2025 | Free Take Home Pay Calculator',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salary Calculator UK 2025',
    description: 'Calculate your UK take home pay with our free salary calculator. Updated 2025/26 tax rates.',
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
    question: 'How does the Salary Calculator work?',
    answer: 'Enter your gross salary, and the calculator instantly shows your take-home pay after deducting income tax, National Insurance, student loan repayments, and pension contributions using the latest UK tax rates.'
  },
  {
    question: 'Is the Salary Calculator free?',
    answer: 'Yes, it\'s completely free with no registration required. Calculate your take-home pay as many times as you need.'
  },
  {
    question: 'What tax year does this calculator use?',
    answer: 'The calculator uses the current 2025/26 tax year rates and is updated annually when HMRC announces new tax bands, allowances, and National Insurance thresholds.'
  },
  {
    question: 'Does it include Scottish tax rates?',
    answer: 'Yes, you can select Scotland to apply Scottish income tax rates, which differ from the rest of the UK due to devolved tax powers.'
  },
  {
    question: 'Can I calculate hourly, weekly, or annual salaries?',
    answer: 'Yes, you can enter your salary as an hourly rate, weekly wage, monthly income, or annual salary. The calculator converts and shows all pay frequencies.'
  },
  {
    question: 'Does it include student loan deductions?',
    answer: 'Yes, the calculator includes Plan 1, Plan 2, Plan 4, and Postgraduate Loan deductions based on your income and the relevant repayment thresholds.'
  },
  {
    question: 'Are pension contributions included?',
    answer: 'Yes, you can add your pension contribution percentage, and the calculator shows your take-home pay after both employer and employee pension deductions.'
  }
]

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
