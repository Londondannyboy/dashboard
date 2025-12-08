import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Gas Rate Calculator UK | Free Gas Appliance Heat Input Calculator',
    template: '%s | Gas Rate Calculator UK',
  },
  description: 'Free UK gas rate calculator for gas engineers. Calculate gas appliance heat input in kW from meter readings or test dial. Supports metric and imperial measurements. Essential tool for gas safe registered engineers.',
  keywords: 'gas rate calculator, gas rate calculator uk, gas calculator, heat input calculator, gas appliance calculator, gas engineer calculator, gas safe calculator, meter reading calculator, test dial calculator, kW calculator gas, gas consumption calculator, gas rate kW, gas flow rate calculator, burner pressure calculator',
  authors: [{ name: 'Gas Rate Calculator UK' }],
  metadataBase: new URL('https://gasratecalculator.quest'),
  openGraph: {
    title: 'Gas Rate Calculator UK | Free Gas Appliance Heat Input Calculator',
    description: 'Calculate gas appliance heat input instantly. Free gas rate calculator for UK gas engineers with metric and imperial support.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Gas Rate Calculator UK',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gas Rate Calculator UK | Free Gas Appliance Heat Input Calculator',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gas Rate Calculator UK',
    description: 'Calculate gas appliance heat input with our free gas rate calculator. Metric and imperial support.',
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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Gas Rate Calculator UK',
      description: 'Free UK gas rate calculator to calculate gas appliance heat input from meter readings or test dial measurements',
      url: 'https://gasratecalculator.quest',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://gasratecalculator.quest?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'WebApplication',
      name: 'Gas Rate Calculator UK',
      description: 'Free UK gas rate calculator to calculate gas appliance heat input from meter readings or test dial measurements',
      url: 'https://gasratecalculator.quest',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'GBP',
      },
      featureList: [
        'Calculate gas rate from meter readings',
        'Calculate gas rate from test dial',
        'Metric measurement support',
        'Imperial measurement support',
        'Gross and net kW output',
        'Built-in timer function',
        'Gas Safe compliant calculations',
      ],
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
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
