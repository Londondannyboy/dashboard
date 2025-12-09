import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Forward Deployed Engineer Recruitment Agency UK',
  description: 'Forward deployed engineer recruitment agency for the UK. Find the best recruiters for FDE roles in London. Browse agencies, salary guides, and career advice.',
  keywords: 'forward deployed engineer recruitment agency, forward deployed engineer jobs, FDE recruitment, forward deployed engineer UK, technical recruitment',
  metadataBase: new URL('https://predeploy.ai'),
  openGraph: {
    title: 'Forward Deployed Engineer Recruitment Agency UK',
    description: 'Forward deployed engineer recruitment agency for the UK. Find the best recruiters for FDE roles in London.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'PreDeploy',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Forward Deployed Engineer Recruitment Agency UK',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forward Deployed Engineer Recruitment Agency UK',
    description: 'Forward deployed engineer recruitment agency for the UK. Find FDE roles in London.',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PreDeploy',
  description: 'Forward deployed engineer recruitment agency for the UK.',
  url: 'https://predeploy.ai',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  name: 'PreDeploy',
  description: 'UK recruitment agency specializing in forward deployed engineer positions',
  url: 'https://predeploy.ai',
  areaServed: 'United Kingdom',
  serviceType: ['Forward Deployed Engineer Recruitment', 'Technical Recruitment', 'FDE Jobs'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
