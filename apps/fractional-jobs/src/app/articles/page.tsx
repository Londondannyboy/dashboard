import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Fractional Jobs Articles & Guides | Fractional Career Advice | Fractional Quest',
  description: 'Expert articles and guides on fractional work in the UK. Learn about fractional executive careers, day rates, building a portfolio career, and working with recruitment agencies.',
  keywords: 'fractional jobs guide, fractional executive career, fractional CFO salary, how to become fractional executive, fractional work UK',
}

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'CFO', slug: 'cfo' },
  { name: 'CMO', slug: 'cmo' },
  { name: 'CTO', slug: 'cto' },
  { name: 'Getting Started', slug: 'getting-started' },
  { name: 'Salary & Rates', slug: 'salary' },
  { name: 'Locations', slug: 'locations' },
]

export default async function ArticlesPage() {
  const articles = await getAllArticles()

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-violet-900">Fractional</span>
              <span className="text-2xl font-black bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Quest</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/jobs" className="text-gray-700 hover:text-violet-900 font-medium">All Jobs</Link>
              <Link href="/london" className="text-gray-700 hover:text-violet-900 font-medium">London</Link>
              <Link href="/agencies" className="text-gray-700 hover:text-violet-900 font-medium">Agencies</Link>
              <Link href="/articles" className="text-violet-900 font-medium">Articles</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/jobs" className="bg-violet-700 hover:bg-violet-800 text-white font-semibold px-5 py-2 rounded-lg transition">
                Find Jobs
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="bg-gray-50 py-12 px-4 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Fractional Jobs Articles & Guides
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Expert advice on building a successful fractional executive career in the UK. {articles.length} articles covering CFO, CMO, CTO roles and more.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={category.slug === 'all' ? '/articles' : `/articles?category=${category.slug}`}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    category.slug === 'all'
                      ? 'bg-violet-700 text-white'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-violet-300'
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition group">
                  <Link href={`/articles/${article.slug}`}>
                    <div className="relative h-48 bg-gradient-to-br from-violet-100 to-violet-50">
                      {article.featured_asset_url ? (
                        <Image
                          src={article.featured_asset_url}
                          alt={article.featured_asset_alt || article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <span className="text-6xl opacity-50">📄</span>
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {article.target_keyword && (
                        <span className="text-xs font-semibold px-2 py-1 rounded bg-violet-100 text-violet-800">
                          {article.target_keyword}
                        </span>
                      )}
                      {article.keyword_volume && (
                        <span className="text-xs text-gray-500">{article.keyword_volume.toLocaleString()} searches/mo</span>
                      )}
                    </div>
                    <h2 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-violet-700 transition line-clamp-2">
                      <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                    </h2>
                    {article.excerpt && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {new Date(article.created_at).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                      </span>
                      <Link href={`/articles/${article.slug}`} className="text-violet-700 hover:text-violet-900 text-sm font-semibold">
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {articles.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No articles found.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 bg-violet-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Get Fractional Career Insights
            </h2>
            <p className="text-violet-100 mb-8">
              Weekly tips on building a successful fractional executive career in the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg w-full sm:w-auto sm:min-w-[300px] focus:ring-2 focus:ring-amber-400"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-black text-white">Fractional</span>
              <span className="text-xl font-black text-amber-400">Quest</span>
            </Link>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; 2025 Fractional Quest. Fractional Jobs UK.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
