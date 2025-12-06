import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GTM Quest - Go-To-Market Agency & Strategy',
  description: 'Your expert GTM agency partner. AI-powered go-to-market planning, software reviews, campaign examples, and provider directory. Build winning GTM strategies.',
  keywords: 'GTM agency, go-to-market strategy, GTM planner, sales strategy, market launch, product launch, GTM consultant',
  openGraph: {
    title: 'GTM Quest - Go-To-Market Agency & Strategy',
    description: 'Your expert GTM agency partner. AI-powered go-to-market planning and strategy.',
    url: 'https://gtm.quest',
    siteName: 'GTM Quest',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTM Quest - Go-To-Market Agency',
    description: 'AI-powered go-to-market planning and strategy.',
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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
