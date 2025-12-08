import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Forward Deployment Engineer Jobs | FDE Recruitment Agency | Pre-Dash Deploy',
  description: 'Leading Forward Deployment Engineer recruitment agency connecting technical talent with top tech companies. Find FDE jobs at Palantir, Scale AI, and startups. Expert technical recruitment for customer-facing engineering roles.',
  keywords: 'forward deployment engineer jobs, fde recruitment, forward deployed engineer, customer engineer jobs, solutions engineer recruitment, technical customer success, palantir fde, scale ai fde',
  openGraph: {
    title: 'Forward Deployment Engineer Jobs | FDE Recruitment Agency | Pre-Dash Deploy',
    description: 'Leading Forward Deployment Engineer recruitment agency connecting technical talent with top tech companies.',
    type: 'website',
    locale: 'en_GB',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Forward Deployment Engineer Jobs | FDE Recruitment Agency | Pre-Dash Deploy',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forward Deployment Engineer Jobs | FDE Recruitment Agency | Pre-Dash Deploy',
    description: 'Leading Forward Deployment Engineer recruitment agency connecting technical talent with top tech companies.',
    image: '/og-image.png',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
