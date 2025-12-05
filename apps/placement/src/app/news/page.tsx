import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { sql } from '@/lib/db'
import Link from 'next/link'

interface Article {
  id: number
  title: string
  excerpt: string | null
  slug: string
  published_at: string | null
  created_at: string
  article_angle: string | null
  featured_asset_url: string | null
}

async function getArticles(): Promise<Article[]> {
  try {
    const articles = await sql`
      SELECT
        id, title, excerpt, slug, published_at, created_at,
        article_angle, featured_asset_url
      FROM articles
      WHERE app = 'placement'
        AND status = 'published'
      ORDER BY COALESCE(published_at, created_at) DESC
      LIMIT 30
    `
    return articles as Article[]
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

function formatDate(date: string | null): string {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

export default async function NewsPage() {
  const articles = await getArticles()

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="Placement"
        brandAccent="Quest"
        brandGradient="from-emerald-400 to-teal-500"
        signInGradient="from-emerald-500 to-teal-500"
        navItems={[
          { href: '/news', label: 'News', highlight: true },
          { href: '/directory', label: 'Directory' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        <section className="py-12 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Placement News</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Latest news on fund placements, mandate wins, LP commitments, and market activity.
            </p>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {articles.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400">Loading articles...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/${article.slug}`}
                    className="group"
                  >
                    <div className="h-48 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                      {article.featured_asset_url ? (
                        <img
                          src={article.featured_asset_url}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      ) : (
                        <svg className="w-12 h-12 text-emerald-400/30" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                        </svg>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs font-medium">
                        {article.article_angle || 'News'}
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatDate(article.published_at || article.created_at)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition line-clamp-2">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {article.excerpt}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="Placement"
        brandAccent="Quest"
        brandGradient="from-emerald-400 to-teal-500"
        brandDescription="The insider guide to fund placements"
        productLinks={[
          { label: 'Mandates', href: '/directory' },
          { label: 'Network', href: '/ecosystem' },
          { label: 'News', href: '/news' },
        ]}
        companyLinks={[
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Privacy', href: '/privacy' },
        ]}
      />
    </div>
  )
}
