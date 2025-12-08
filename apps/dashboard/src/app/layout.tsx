import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quest Dashboard',
  description: 'Manage your relocation and placement journey',
  metadataBase: new URL('https://dashboard.quest'),
  openGraph: {
    title: 'Quest Dashboard',
    description: 'Manage your relocation and placement journey',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Quest Dashboard',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Quest Dashboard',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quest Dashboard',
    description: 'Manage your relocation and placement journey',
    image: '/og-image.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
