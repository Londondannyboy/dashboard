import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Relocation Quest',
    template: '%s | Relocation Quest',
  },
  description: 'AI-powered relocation assistance',
}

// This layout does NOT use StackProvider, so pages render as pure static HTML
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
