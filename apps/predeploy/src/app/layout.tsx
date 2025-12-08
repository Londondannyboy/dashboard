import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Forward Deployed Engineer Recruitment Agency UK',
  description: 'Forward deployed engineer recruitment agency for the UK. Find the best recruiters for FDE roles in London. Browse agencies, salary guides, and career advice.',
  keywords: 'forward deployed engineer recruitment agency, forward deployed engineer jobs, FDE recruitment, forward deployed engineer UK, technical recruitment',
  openGraph: {
    title: 'Forward Deployed Engineer Recruitment Agency UK',
    description: 'Forward deployed engineer recruitment agency for the UK. Find the best recruiters for FDE roles in London.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forward Deployed Engineer Recruitment Agency UK',
    description: 'Forward deployed engineer recruitment agency for the UK. Find FDE roles in London.',
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
