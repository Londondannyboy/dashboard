import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Farming News & Agricultural Articles | Tractor Insurance UK',
  description: 'Latest farming news, agricultural insights, and tractor industry updates. Stay informed about UK farming, machinery reviews, and agricultural insurance guides.',
  keywords: 'farming news, agricultural news, uk farming, tractor news, farm machinery news, agricultural industry, farming updates',
  openGraph: {
    title: 'Farming News & Agricultural Articles',
    description: 'Latest farming news, agricultural insights, and tractor industry updates from the UK.',
    type: 'website',
    url: 'https://tractorinsurance.quest/articles',
  },
  alternates: {
    canonical: 'https://tractorinsurance.quest/articles',
  },
}

// Placeholder articles - in a real implementation, these would come from a CMS
const PLACEHOLDER_ARTICLES = [
  {
    id: '1',
    title: 'Tractor Insurance Costs in 2025: What to Expect',
    excerpt: 'A comprehensive guide to tractor insurance premiums in 2025, including factors affecting cost and tips for saving money.',
    category: 'Insurance Guides',
    date: 'December 2025',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'Farm Theft on the Rise: Protecting Your Agricultural Equipment',
    excerpt: 'Rural crime statistics show a concerning trend. Learn how to protect your tractors and machinery from theft.',
    category: 'Security',
    date: 'December 2025',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'Electric Tractors: The Future of UK Farming?',
    excerpt: 'With manufacturers launching electric tractors, we look at what this means for UK farmers and their insurance.',
    category: 'Industry News',
    date: 'November 2025',
    readTime: '6 min read',
  },
  {
    id: '4',
    title: 'Understanding Agricultural Contractor Insurance',
    excerpt: 'A guide to insurance requirements for agricultural contractors working on other people\'s land.',
    category: 'Insurance Guides',
    date: 'November 2025',
    readTime: '8 min read',
  },
  {
    id: '5',
    title: 'Vintage Tractor Restoration: Insurance Considerations',
    excerpt: 'Restoring a classic tractor? Here\'s what you need to know about insuring your vintage machinery.',
    category: 'Classic Tractors',
    date: 'October 2025',
    readTime: '5 min read',
  },
  {
    id: '6',
    title: 'GPS Tracking for Tractors: Security and Insurance Benefits',
    excerpt: 'How GPS tracking can help protect your agricultural vehicles and potentially reduce your insurance premiums.',
    category: 'Technology',
    date: 'October 2025',
    readTime: '4 min read',
  },
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center" role="img" aria-label="Tractor Insurance UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Tractor <span className="text-green-400">Insurance</span>
                </span>
                <p className="text-xs text-slate-400">UK Agricultural Cover</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="/#calculator" className="text-slate-300 hover:text-white transition-colors">Get Quote</a>
              <a href="/#cover-types" className="text-slate-300 hover:text-white transition-colors">Cover Types</a>
              <a href="/#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
              <a href="/articles" className="text-green-400 font-medium">Farming News</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Farming News & <span className="text-green-400">Agricultural Articles</span>
          </h1>
          <p className="text-lg text-slate-400">
            Stay up to date with the latest UK farming news, tractor industry updates, and agricultural insurance guides.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLACEHOLDER_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-green-500/30 transition-colors"
              >
                <div className="h-40 bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center">
                  <svg className="w-16 h-16 text-green-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-500">{article.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{article.date}</span>
                    <span className="text-sm text-green-400 font-medium hover:text-green-300 cursor-pointer">
                      Coming Soon →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Subscribe to Farming News
          </h2>
          <p className="text-slate-400 mb-8">
            Get the latest agricultural news, tractor reviews, and insurance tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent flex-1 max-w-sm"
            />
            <button className="px-6 py-3 rounded-xl font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Browse by Topic
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Tractor Insurance',
              'Farm Security',
              'Agricultural Contractors',
              'Vintage Tractors',
              'Technology',
              'Industry News',
              'Insurance Guides',
              'Equipment Reviews',
              'UK Farming',
              'Rural Crime',
            ].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm hover:border-green-500/50 hover:text-white cursor-pointer transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Tractor Insurance?
          </h2>
          <p className="text-slate-300 mb-8">
            Compare quotes from specialist UK agricultural insurers.
          </p>
          <a
            href="/#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Tractor Insurance UK</h4>
              <p className="text-sm text-slate-400">
                Compare tractor and agricultural vehicle insurance quotes from specialist UK insurers.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/#calculator" className="hover:text-green-400">Get Quote</a></li>
                <li><a href="/#cover-types" className="hover:text-green-400">Cover Types</a></li>
                <li><a href="/#faq" className="hover:text-green-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Insurance Types</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-green-400">Tractor Insurance</a></li>
                <li><a href="#" className="hover:text-green-400">Farm Insurance</a></li>
                <li><a href="#" className="hover:text-green-400">Agricultural Fleet</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/articles" className="hover:text-green-400">Farming News</a></li>
                <li><a href="#" className="hover:text-green-400">Insurance Guides</a></li>
                <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Tractor Insurance UK. Compare agricultural vehicle insurance quotes from specialist UK insurers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
