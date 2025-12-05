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
  video_playback_id: string | null
}

async function getArticles(): Promise<Article[]> {
  try {
    const articles = await sql`
      SELECT
        id, title, excerpt, slug, published_at, created_at,
        article_angle, featured_asset_url, video_playback_id
      FROM articles
      WHERE app = 'pvc'
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

function formatCategory(angle: string | null): string {
  if (!angle) return 'News'
  return angle.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}

function getThumbnail(article: Article): string | null {
  if (article.video_playback_id) {
    return `https://image.mux.com/${article.video_playback_id}/thumbnail.webp?time=1&width=400`
  }
  return article.featured_asset_url || null
}

export default async function NewsPage() {
  const articles = await getArticles()

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="PVC"
        brandAccent="Quest"
        brandGradient="from-indigo-400 to-purple-500"
        signInGradient="from-indigo-500 to-purple-500"
        navItems={[
          { href: '/private-equity-placement-agent-news', label: 'News', highlight: true },
          { href: '/private-equity-placement-agents-list', label: 'Directory' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/visualizations', label: 'Visualizations' },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-12 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-4">VC & PE News</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Latest news on venture capital deals, private equity transactions,
              fund launches, and market analysis.
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-4 px-6 border-b border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto flex gap-6 overflow-x-auto">
            <button className="text-indigo-400 font-medium whitespace-nowrap border-b-2 border-indigo-400 pb-2">
              All News
            </button>
            <button className="text-gray-400 font-medium whitespace-nowrap hover:text-white transition pb-2">
              Deals
            </button>
            <button className="text-gray-400 font-medium whitespace-nowrap hover:text-white transition pb-2">
              Fund Launches
            </button>
            <button className="text-gray-400 font-medium whitespace-nowrap hover:text-white transition pb-2">
              People
            </button>
            <button className="text-gray-400 font-medium whitespace-nowrap hover:text-white transition pb-2">
              Analysis
            </button>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {articles.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400">Loading articles...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => {
                  const thumbnail = getThumbnail(article)
                  return (
                    <Link
                      key={article.id}
                      href={`/${article.slug}`}
                      className="group"
                    >
                      <div className="h-48 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                        {thumbnail ? (
                          <img
                            src={thumbnail}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                        ) : (
                          <svg className="w-12 h-12 text-indigo-400/30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/>
                          </svg>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs font-medium">
                          {formatCategory(article.article_angle)}
                        </span>
                        <span className="text-sm text-gray-500">
                          {formatDate(article.published_at || article.created_at)}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-400 transition line-clamp-2">
                        {article.title}
                      </h3>
                      {article.excerpt && (
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {article.excerpt}
                        </p>
                      )}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="PVC"
        brandAccent="Quest"
        brandGradient="from-indigo-400 to-purple-500"
        brandDescription="The insider guide to venture capital"
        productLinks={[
          { label: 'VC Firms', href: '/private-equity-placement-agents-list' },
          { label: 'Network', href: '/ecosystem' },
          { label: 'News', href: '/private-equity-placement-agent-news' },
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
