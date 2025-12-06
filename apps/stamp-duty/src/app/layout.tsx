import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UK Stamp Duty Calculator 2025 | SDLT Calculator',
  description: 'Calculate UK Stamp Duty Land Tax (SDLT) for residential properties. Includes first-time buyer relief, additional property surcharge, and non-UK resident rates.',
  keywords: 'stamp duty calculator, SDLT calculator, UK property tax, first-time buyer, stamp duty rates 2025',
  openGraph: {
    title: 'UK Stamp Duty Calculator 2025 | SDLT Calculator',
    description: 'Calculate UK Stamp Duty Land Tax for residential properties. First-time buyer relief, additional property rates, and more.',
    type: 'website',
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
