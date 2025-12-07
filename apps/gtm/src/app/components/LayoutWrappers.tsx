import Link from 'next/link'

const navItems = [
  { href: '/news', label: 'News' },
  { href: '/directory', label: 'Providers' },
  { href: '/ecosystem', label: 'Network' },
  { href: '/momentum', label: 'Momentum' },
]

const productLinks = [
  { label: 'GTM Planner', href: '/' },
  { label: 'Providers', href: '/directory' },
  { label: 'News', href: '/news' },
  { label: 'Network', href: '/ecosystem' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

// Static header for SEO - no auth dependency
export function HeaderWrapper() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            <span className="text-white">GTM</span>
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Quest</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/handler/sign-in"
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg hover:opacity-90 transition text-sm font-medium text-white"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  )
}

// Static footer for SEO - no auth dependency
export function FooterWrapper() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold">
              <span className="text-white">GTM</span>
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Quest</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Your expert GTM agency partner for go-to-market success
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
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
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <p className="text-sm text-gray-400">hello@gtm.quest</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GTM Quest. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
