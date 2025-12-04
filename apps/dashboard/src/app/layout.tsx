import type { Metadata } from 'next'
import { StackProvider, StackTheme } from '@stackframe/stack'
import { getStackServerApp, isStackConfigured } from '@/stack'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quest Dashboard',
  description: 'Manage your relocation and placement journey',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get Stack app on server
  const stackApp = await getStackServerApp()

  return (
    <html lang="en">
      <body className="antialiased">
        {stackApp ? (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <StackProvider app={stackApp as any}>
            <StackTheme>
              {children}
            </StackTheme>
          </StackProvider>
        ) : (
          // Render without Stack if not configured
          children
        )}
      </body>
    </html>
  )
}
