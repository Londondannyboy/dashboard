import type { Metadata } from 'next'
import { StackProvider, StackTheme } from '@stackframe/stack'
import { stackServerApp } from '@/stack'
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
      <body className="antialiased">
        <StackProvider app={stackServerApp}>
          <StackTheme>
            {children}
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  )
}
