'use client'

import Link from 'next/link'

export interface FooterLink {
  href: string
  label: string
  external?: boolean
}

export interface GlobalFooterProps {
  brandName?: string
  brandAccent?: string
  brandDescription?: string
  brandGradient?: string
  productLinks?: FooterLink[]
  companyLinks?: FooterLink[]
  socialLinks?: {
    twitter?: string
    linkedin?: string
    email?: string
  }
  compact?: boolean  // Simple one-line footer
  theme?: 'dark' | 'light'
}

const defaultProductLinks: FooterLink[] = [
  { href: '/articles', label: 'Articles' },
  { href: '/chat', label: 'Chat' },
  { href: '/voice', label: 'Voice' },
  { href: '/dashboard', label: 'Dashboard' },
]

const defaultCompanyLinks: FooterLink[] = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

export function GlobalFooter({
  brandName = 'Relocation',
  brandAccent = 'Quest',
  brandDescription = 'AI-powered relocation guidance',
  brandGradient = 'from-purple-400 to-pink-500',
  productLinks = defaultProductLinks,
  companyLinks = defaultCompanyLinks,
  socialLinks = {},
  compact = false,
  theme = 'light',
}: GlobalFooterProps) {
  const isLight = theme === 'light'

  // Compact footer - just a simple bar
  if (compact) {
    return (
      <footer className={`border-t py-6 ${isLight ? 'border-gray-200 bg-gray-50' : 'border-white/10 bg-black/20'}`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-bold">
            <span className={isLight ? 'text-gray-900' : 'text-white'}>{brandName}</span>
            {brandAccent && <span className={`bg-gradient-to-r ${brandGradient} bg-clip-text text-transparent`}>{brandAccent}</span>}
          </p>
          <div className="flex gap-6">
            {productLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition ${isLight ? 'text-gray-600 hover:text-gray-900' : 'text-gray-500 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className={`text-xs ${isLight ? 'text-gray-500' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} {brandName}{brandAccent}
          </p>
        </div>
      </footer>
    )
  }

  const linkClass = isLight ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'
  const headingClass = isLight ? 'text-gray-900' : 'text-white'

  return (
    <footer className={`border-t backdrop-blur-sm mt-auto ${isLight ? 'border-gray-200 bg-gray-50' : 'border-white/10 bg-black/20'}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2">
              <span className={headingClass}>{brandName}</span>
              {brandAccent && <span className={`bg-gradient-to-r ${brandGradient} bg-clip-text text-transparent`}>{brandAccent}</span>}
            </h3>
            <p className={`text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{brandDescription}</p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className={`text-sm font-semibold mb-3 ${headingClass}`}>Product</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={`text-sm transition ${linkClass}`}>
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className={`text-sm transition ${linkClass}`}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className={`text-sm font-semibold mb-3 ${headingClass}`}>Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={`text-sm transition ${linkClass}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className={`text-sm font-semibold mb-3 ${headingClass}`}>Connect</h4>
            <ul className="space-y-2">
              {socialLinks.twitter && (
                <li>
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className={`text-sm transition ${linkClass}`}>
                    Twitter / X
                  </a>
                </li>
              )}
              {socialLinks.linkedin && (
                <li>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={`text-sm transition ${linkClass}`}>
                    LinkedIn
                  </a>
                </li>
              )}
              {socialLinks.email && (
                <li>
                  <a href={socialLinks.email} className={`text-sm transition ${linkClass}`}>
                    Email Us
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t flex flex-col md:flex-row items-center justify-between ${isLight ? 'border-gray-200' : 'border-white/10'}`}>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {brandName}{brandAccent}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2 md:mt-0">
            Powered by AI
          </p>
        </div>
      </div>
    </footer>
  )
}
