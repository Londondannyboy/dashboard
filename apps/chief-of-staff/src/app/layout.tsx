import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chief of Staff Recruitment Agency UK',
  description: 'Chief of staff recruitment agency for the UK. Find the best recruiters for executive roles in London. Browse agencies, salary guides, and career advice.',
  keywords: 'chief of staff recruitment agency, chief of staff recruitment agencies, executive assistant recruitment, chief of staff jobs UK, executive assistant jobs London',
  openGraph: {
    title: 'Chief of Staff Recruitment Agency UK',
    description: 'Chief of staff recruitment agency for the UK. Find the best recruiters for executive roles in London.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chief of Staff Recruitment Agency UK',
    description: 'Chief of staff recruitment agency for the UK. Find executive roles in London.',
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
