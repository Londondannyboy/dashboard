import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Best Online MBA Programs 2025 | MBA Quest - Reviews & Rankings',
  description: 'Compare the best online MBA programs worldwide. Expert reviews, rankings, and comprehensive guides to help you choose the right MBA online degree for your career goals.',
  keywords: 'MBA online, online MBA programs, best online MBA, MBA rankings, MBA reviews, executive MBA online, global MBA, online business degree, MBA comparison',
  openGraph: {
    title: 'Best Online MBA Programs 2025 | MBA Quest',
    description: 'Compare the best online MBA programs worldwide. Expert reviews, rankings, and comprehensive guides.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Online MBA Programs 2025 | MBA Quest',
    description: 'Compare the best online MBA programs worldwide. Expert reviews, rankings, and comprehensive guides.',
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
