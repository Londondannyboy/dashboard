import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quest Dashboard',
  description: 'Manage your relocation and placement journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
