import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Gas Rate Calculator UK | Free Gas Appliance Heat Input Calculator',
    template: '%s | Gas Rate Calculator UK',
  },
  description: 'Free gas rate calculator for UK gas engineers. Calculate appliance heat input in kW from meter readings. Metric & imperial support.',
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
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
}

// FAQ data for rich snippets
const faqs = [
  {
    question: 'How does the Gas Rate Calculator work?',
    answer: 'The calculator uses meter readings or test dial measurements to calculate the heat input (kW) of your gas appliances. Simply enter your readings for instant results following Gas Safe guidelines.'
  },
  {
    question: 'Is the Gas Rate Calculator free?',
    answer: 'Yes, the calculator is completely free to use with no registration required. It\'s designed as a professional tool for Gas Safe engineers and trainees.'
  },
  {
    question: 'What measurements do I need?',
    answer: 'You need either meter readings taken over a timed period, or test dial measurements showing the volume of gas consumed. The calculator supports both metric and imperial units.'
  },
  {
    question: 'Is this calculator Gas Safe compliant?',
    answer: 'Yes, the calculations follow Gas Safe Register standards and industry best practices for determining appliance heat input and gas consumption rates.'
  },
  {
    question: 'Can I use this for domestic and commercial appliances?',
    answer: 'Yes, the calculator works for both domestic and commercial gas appliances including boilers, cookers, fires, and industrial equipment.'
  },
  {
    question: 'Do I need to enter the calorific value?',
    answer: 'The calculator uses the standard UK calorific value by default, but you can adjust this if you have specific regional data from your gas supplier.'
  },
  {
    question: 'Does it calculate both gross and net heat input?',
    answer: 'Yes, the calculator provides both gross and net kW values, giving you complete data for appliance rating verification and Gas Safe compliance checks.'
  }
]

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
    {
      '@type': 'LocalBusiness',
      name: 'Gas Rate Calculator UK',
      description: 'Professional gas rate calculation service for Gas Safe engineers and technicians',
      url: 'https://gasratecalculator.quest',
      areaServed: 'United Kingdom',
      serviceType: ['Gas Rate Calculator', 'Heat Input Calculator', 'Gas Safe Calculations', 'Appliance Testing'],
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
