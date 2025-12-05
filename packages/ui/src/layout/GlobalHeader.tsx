'use client'

import { useUser, UserButton } from '@stackframe/stack'
import Link from 'next/link'

export interface NavItem {
  href: string
  label: string
  requiresAuth?: boolean
  highlight?: boolean
}

export interface GlobalHeaderProps {
  brandName?: string
  brandAccent?: string  // Second word with accent color
  navItems?: NavItem[]
  brandGradient?: string  // e.g. "from-purple-400 to-pink-500"
  signInGradient?: string
  signInPath?: string
}

const defaultNavItems: NavItem[] = [
  { href: '/articles', label: 'Articles', highlight: true },
  { href: '/chat', label: 'Chat' },
  { href: '/voice', label: 'Voice' },
  { href: '/dashboard', label: 'Dashboard', requiresAuth: true },
]

export function GlobalHeader({
  brandName = 'Relocation',
  brandAccent = 'Quest',
  navItems = defaultNavItems,
  brandGradient = 'from-purple-400 to-pink-500',
  signInGradient = 'from-purple-500 to-pink-500',
  signInPath = '/handler/sign-in',
}: GlobalHeaderProps) {
  const user = useUser()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            <span className="text-white">{brandName}</span>
            {brandAccent && <span className={`bg-gradient-to-r ${brandGradient} bg-clip-text text-transparent`}>{brandAccent}</span>}
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              if (item.requiresAuth && !user) return null
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition ${
                    item.highlight
                      ? 'text-amber-500 font-semibold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-gray-400 hidden md:block">
                {user.displayName || user.primaryEmail}
              </span>
              <UserButton />
            </>
          ) : (
            <Link
              href={signInPath}
              className={`px-4 py-2 bg-gradient-to-r ${signInGradient} rounded-lg hover:opacity-90 transition text-sm font-medium text-white`}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
