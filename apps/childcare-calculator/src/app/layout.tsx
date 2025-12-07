import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Childcare Calculator UK 2025 | Free Childcare Cost Calculator',
    template: '%s | Childcare Calculator UK',
  },
  description: 'Free UK childcare calculator 2025. Calculate childcare costs for nurseries, childminders, nannies and after-school clubs. Compare costs by age, region and childcare type. Check eligibility for Tax-Free Childcare and 30 free hours.',
  keywords: 'childcare calculator, childcare costs uk, nursery costs, childminder costs, nanny costs, childcare calculator uk, cost of childcare, tax free childcare calculator, 30 hours free childcare, childcare costs by age, nursery fees calculator, childcare cost calculator, uk childcare calculator, childcare budget calculator',
  authors: [{ name: 'Childcare Calculator UK' }],
  metadataBase: new URL('https://childcarecalculator.quest'),
  openGraph: {
    title: 'Childcare Calculator UK 2025 | Free Childcare Cost Calculator',
    description: 'Calculate UK childcare costs instantly. Free calculator with nursery, childminder and nanny costs by region. Check eligibility for government support.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Childcare Calculator UK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Childcare Calculator UK 2025',
    description: 'Calculate UK childcare costs with our free calculator. Compare nurseries, childminders and nannies.',
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

const jsonLd = {
  '@context': 'https://schema.org',
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
