import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Graduate Recruitment Agencies London | Graduated Quest',
  description: 'Leading graduate recruitment agency in London connecting talented university graduates with top UK employers. Expert career guidance, CV support, and interview coaching for entry-level positions.',
  keywords: 'graduate recruitment agencies london, graduate jobs london, graduate recruitment uk, entry level jobs london, graduate schemes, graduate careers',
  openGraph: {
    title: 'Graduate Recruitment Agencies London | Graduated Quest',
    description: 'Leading graduate recruitment agency in London connecting talented university graduates with top UK employers.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graduate Recruitment Agencies London | Graduated Quest',
    description: 'Leading graduate recruitment agency in London connecting talented university graduates with top UK employers.',
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
