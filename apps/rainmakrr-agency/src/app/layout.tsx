import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Startup Jobs UK | Rainmakrr Agency',
  description: 'Find the best startup jobs and recruitment agencies in the UK. Connect with specialist recruiters for startup roles in London and across Britain.',
  keywords: 'startup jobs UK, startup recruitment agency, tech startup jobs London, startup careers UK, scale-up jobs',
  openGraph: {
    title: 'Startup Jobs UK | Rainmakrr Agency',
    description: 'Find the best startup jobs and recruitment agencies in the UK. Connect with specialist recruiters for startup roles.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Jobs UK | Rainmakrr Agency',
    description: 'Find startup jobs and recruitment agencies in the UK.',
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
