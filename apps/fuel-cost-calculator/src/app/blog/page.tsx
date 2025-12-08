import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fuel Cost Blog: Expert Guides, Tips & Money-Saving Strategies',
  description: 'Read expert guides on fuel costs, money-saving strategies, EV charging, fuel economy tips, and business mileage rates for UK drivers.',
  keywords: 'fuel blog, fuel cost guides, driving tips, fuel economy, EV charging guide, mileage rates, fuel saving',
  openGraph: {
    title: 'Fuel Cost Blog: Expert Guides & Tips',
    description: 'Comprehensive blog with expert guides on reducing fuel costs and optimizing fuel economy.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/blog',
  },
}

export default function BlogPage() {
  const articles = [
    {
      slug: 'how-to-reduce-fuel-costs',
      title: 'How to Reduce Fuel Costs: 10 Proven Strategies',
      excerpt: 'Learn 10 proven strategies to reduce fuel costs and save money on petrol and diesel. Discover driving tips, maintenance advice, and fuel optimization techniques.',
      date: 'December 2025',
      readTime: '10 min',
      category: 'Money-Saving',
      icon: '💰',
    },
    {
      slug: 'uk-mileage-rates',
      title: 'UK Mileage Rates 2025: Complete Tax Guide',
      excerpt: 'Complete guide to official UK mileage reimbursement rates, tax relief, and how to claim business mileage expenses for 2025.',
      date: 'December 2025',
      readTime: '8 min',
      category: 'Business Driving',
      icon: '📊',
    },
    {
      slug: 'ev-charging-guide',
      title: 'Complete EV Charging Guide 2025',
      excerpt: 'Master electric vehicle charging with our comprehensive guide covering charging types, costs, home installation, and public network strategies.',
      date: 'December 2025',
      readTime: '9 min',
      category: 'EV & Alternative',
      icon: '⚡',
    },
    {
      slug: 'fuel-economy-tips',
      title: 'Fuel Economy Tips: Improve Your Car MPG',
      excerpt: 'Master fuel economy optimization with proven driving techniques, maintenance secrets, and technology strategies used by professional drivers.',
      date: 'December 2025',
      readTime: '7 min',
      category: 'Driving Techniques',
      icon: '📈',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-xl font-bold text-white">📚</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Fuel <span className="text-blue-400">Blog</span>
                </span>
                <p className="text-xs text-slate-400">Expert Guides & Tips</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="/blog" className="text-slate-300 hover:text-white transition-colors font-semibold text-blue-400">Blog</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 sm:py-24 px-4 border-b border-slate-700/50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Fuel Cost Blog
          </h1>
          <p className="text-xl text-slate-400 mb-4">
            Expert guides, money-saving strategies, and practical tips for UK drivers.
          </p>
          <p className="text-slate-500">
            From reducing fuel costs to understanding EV charging, discover comprehensive resources to optimize your driving expenses.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{article.icon}</span>
                    <span className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{article.date}</span>
                    <span>{article.readTime} read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Optimize Your Fuel Costs?
            </h2>
            <p className="text-slate-300 mb-6">
              Use our fuel cost calculators to estimate your savings and take control of your driving expenses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                Fuel Calculator
              </Link>
              <Link href="/comparison/diesel-vs-petrol" className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors border border-slate-600">
                Fuel Type Comparison
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-4 border-t border-slate-700/50 mt-12 bg-slate-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-6">Explore Fuel Cost Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/" className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h4 className="font-semibold text-white text-sm mb-1">Home</h4>
              <p className="text-xs text-slate-400">Main calculator</p>
            </Link>
            <Link href="/comparison/diesel-vs-petrol" className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h4 className="font-semibold text-white text-sm mb-1">Comparisons</h4>
              <p className="text-xs text-slate-400">Fuel type guides</p>
            </Link>
            <Link href="/scotland-fuel-prices" className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h4 className="font-semibold text-white text-sm mb-1">Regional Prices</h4>
              <p className="text-xs text-slate-400">Local fuel costs</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
