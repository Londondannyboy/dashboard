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
}: GlobalFooterProps) {
  // Compact footer - just a simple bar
  if (compact) {
    return (
      <footer className="border-t border-white/10 bg-black/20 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-bold">
            <span className="text-white">{brandName}</span>
            {brandAccent && <span className={`bg-gradient-to-r ${brandGradient} bg-clip-text text-transparent`}>{brandAccent}</span>}
          </p>
          <div className="flex gap-6">
            {productLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {brandName}{brandAccent}
          </p>
        </div>
      </footer>
    )
  }

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2">
              <span className="text-white">{brandName}</span>
              {brandAccent && <span className={`bg-gradient-to-r ${brandGradient} bg-clip-text text-transparent`}>{brandAccent}</span>}
            </h3>
            <p className="text-sm text-gray-400">{brandDescription}</p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Product</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Connect</h4>
            <ul className="space-y-2">
              {socialLinks.twitter && (
                <li>
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition">
                    Twitter / X
                  </a>
                </li>
              )}
              {socialLinks.linkedin && (
                <li>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition">
                    LinkedIn
                  </a>
                </li>
              )}
              {socialLinks.email && (
                <li>
                  <a href={socialLinks.email} className="text-sm text-gray-400 hover:text-white transition">
                    Email Us
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
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
