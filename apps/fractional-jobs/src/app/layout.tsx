import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fractional Jobs UK | Find Fractional Executive Roles in London & UK',
  description: 'Discover fractional jobs in the UK. Browse fractional CFO, CMO, CTO and executive roles in London. Connect with top fractional recruitment agencies and find flexible leadership opportunities.',
  keywords: 'fractional jobs, fractional jobs UK, fractional jobs London, fractional recruitment agencies, fractional CFO, fractional CMO, fractional CTO, fractional executive, part-time executive roles, interim executive',
  openGraph: {
    title: 'Fractional Jobs UK | Find Fractional Executive Roles',
    description: 'Discover fractional jobs in the UK. Browse fractional CFO, CMO, CTO and executive roles in London.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional Jobs UK | Find Fractional Executive Roles',
    description: 'Discover fractional jobs in the UK. Browse fractional CFO, CMO, CTO and executive roles in London.',
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
