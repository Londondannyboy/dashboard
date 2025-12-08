import { Metadata } from 'next'
import Link from 'next/link'
import { neon } from '@neondatabase/serverless'

export const metadata: Metadata = {
  title: 'Startup Articles & Guides | Career Insights UK',
  description: 'Browse articles on startup careers, tech recruitment, salary guides, and industry insights. Expert advice for startup professionals in the UK.',
  keywords: 'startup articles, tech career advice, startup salary guide, scale-up recruitment insights, venture-backed jobs UK',
}

async function getArticles() {
  const sql = neon(process.env.DATABASE_URL!)

  const articles = await sql`
    SELECT
      id,
      title,
      excerpt,
      slug,
      published_at,
      created_at,
      article_angle,
      word_count,
      featured_asset_url,
      featured_asset_alt
    FROM articles
    WHERE app = 'rainmakrr-agency'
      AND status = 'published'
    ORDER BY published_at DESC NULLS LAST, created_at DESC
  `

  return articles
}

export default async function ArticlesPage() {
  const articles = await getArticles()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent">Rainmakrr</span>
              <span className="text-2xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Agency</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-violet-600 font-medium">Home</Link>
              <Link href="/articles" className="text-violet-600 font-medium">Articles</Link>
              <Link href="/agencies" className="text-gray-700 hover:text-violet-600 font-medium">Agencies</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/agencies" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-5 py-2 rounded-lg transition">
                Find Agencies
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Articles Header */}
      <section className="bg-white pt-24 pb-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">All Articles</h1>
          <p className="text-lg text-gray-600">Browse our complete collection of startup and tech career insights</p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article: any) => (
                <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  {article.featured_asset_url && (
                    <img src={article.featured_asset_url} alt={article.featured_asset_alt || article.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6">
                    {article.article_angle && (
                      <span className="inline-block bg-violet-100 text-violet-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-3">
                        {article.article_angle}
                      </span>
                    )}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link href={`/${article.slug}`} className="hover:text-violet-600">
                        {article.title}
                      </Link>
                    </h2>
                    {article.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <time dateTime={article.published_at || article.created_at}>
                        {new Date(article.published_at || article.created_at).toLocaleDateString('en-GB', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <Link href={`/${article.slug}`} className="text-violet-600 hover:text-violet-800 font-medium">
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Rainmakrr Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
