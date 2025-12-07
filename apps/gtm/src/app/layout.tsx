import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GTM Agency | Go-To-Market Strategy & Planning | GTM Quest',
  description: 'Leading GTM agency for go-to-market strategy. AI-powered GTM planning, expert consultants, and proven frameworks. Launch your product with the top GTM agency partner.',
  keywords: 'GTM agency, go-to-market agency, GTM strategy, go-to-market strategy, GTM consultant, product launch agency, sales strategy agency',
  openGraph: {
    title: 'GTM Agency | Go-To-Market Strategy & Planning',
    description: 'Leading GTM agency for go-to-market strategy. AI-powered planning and expert consultants.',
    url: 'https://gtm.quest',
    siteName: 'GTM Quest',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTM Agency | Go-To-Market Strategy',
    description: 'Leading GTM agency for go-to-market strategy.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
