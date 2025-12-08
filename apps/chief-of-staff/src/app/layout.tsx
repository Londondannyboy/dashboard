import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chief of Staff Recruitment Agencies UK | Find Executive Assistant Jobs',
  description: 'Discover leading chief of staff recruitment agencies in the UK. Browse executive assistant jobs, connect with top recruiters, and find your next C-suite support role in London and across the UK.',
  keywords: 'chief of staff recruitment, chief of staff recruitment agencies, executive assistant recruitment, chief of staff jobs UK, executive assistant jobs London, C-suite support, EA recruitment agencies',
  openGraph: {
    title: 'Chief of Staff Recruitment Agencies UK',
    description: 'Discover leading chief of staff recruitment agencies in the UK. Find executive assistant jobs and connect with top recruiters.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chief of Staff Recruitment Agencies UK',
    description: 'Discover leading chief of staff recruitment agencies in the UK. Find executive assistant jobs.',
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
