'use client'

import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'

export default function HandlerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <GlobalHeader
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-purple-400 to-pink-500"
        signInGradient="from-purple-500 to-pink-500"
        navItems={[
          { href: '/articles', label: 'Articles' },
          { href: '/chat', label: 'Chat' },
          { href: '/voice', label: 'Voice' },
          { href: '/dashboard', label: 'Dashboard', requiresAuth: true },
        ]}
      />
      <main className="flex-1 pt-16">{children}</main>
      <GlobalFooter
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-purple-400 to-pink-500"
        compact
      />
    </div>
  )
}
