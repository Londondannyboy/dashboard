import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { sql } from '@/lib/db'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import Link from 'next/link'

interface Article {
  id: number
  title: string
  slug: string
  content: string | null
  excerpt: string | null
  published_at: string | null
  created_at: string
  article_angle: string | null
  featured_asset_url: string | null
  video_playback_id: string | null
  payload: any
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const articles = await sql`
      SELECT *
      FROM articles
      WHERE slug = ${slug}
        AND app = 'rainmakrr'
        AND status = 'published'
      LIMIT 1
    `
    if (articles.length === 0) return null
    return articles[0] as Article
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

async function getRelatedArticles(articleId: number): Promise<Article[]> {
  try {
    const articles = await sql`
      SELECT id, title, slug, excerpt, published_at, created_at, article_angle, featured_asset_url, video_playback_id
      FROM articles
      WHERE app = 'rainmakrr'
        AND status = 'published'
        AND id != ${articleId}
      ORDER BY COALESCE(published_at, created_at) DESC
      LIMIT 4
    `
    return articles as Article[]
  } catch (error) {
    console.error('Error fetching related articles:', error)
    return []
  }
}

function formatDate(date: string | null): string {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function formatCategory(angle: string | null): string {
  if (!angle) return 'News'
  return angle.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}

function parseMarkdown(content: string): string {
  return marked.parse(content, { async: false }) as string
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = await getRelatedArticles(article.id)
  const publishDate = formatDate(article.published_at || article.created_at)
  const category = formatCategory(article.article_angle)

  const thumbnail = article.video_playback_id
    ? `https://image.mux.com/${article.video_playback_id}/thumbnail.webp?time=1&width=1200`
    : article.featured_asset_url

  const content = article.content || article.payload?.content || article.excerpt || ''

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="Rainmakrr"
        brandAccent="Quest"
        brandGradient="from-blue-400 to-indigo-500"
        signInGradient="from-blue-500 to-indigo-500"
        navItems={[
          { href: '/private-equity-placement-agent-news', label: 'News', highlight: true },
          { href: '/private-equity-placement-agents-list', label: 'Directory' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-16 px-6">
          {thumbnail && (
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={thumbnail}
                alt={article.title}
                className="w-full h-full object-cover opacity-20 blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/90 to-[#0a0a0f]" />
            </div>
          )}

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                {category}
              </span>
              <span className="text-gray-400">{publishDate}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="text-xl text-gray-300 leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </div>
        </section>

        {/* Featured Media */}
        {thumbnail && (
          <section className="px-6 pb-12">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                {article.video_playback_id ? (
                  <div className="relative aspect-video bg-black">
                    <iframe
                      src={`https://stream.mux.com/${article.video_playback_id}`}
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    src={thumbnail}
                    alt={article.title}
                    className="w-full aspect-video object-cover"
                  />
                )}
              </div>
            </div>
          </section>
        )}

        {/* Article Content */}
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <article
              className="prose prose-lg prose-invert prose-blue max-w-none
                prose-headings:font-bold prose-headings:text-white
                prose-p:text-gray-300 prose-p:leading-relaxed
                prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
                prose-strong:text-white prose-strong:font-semibold
                prose-ul:text-gray-300 prose-ol:text-gray-300
                prose-li:marker:text-blue-500
                prose-blockquote:border-blue-500 prose-blockquote:text-gray-400"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
            />
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="px-6 py-16 bg-white/[0.02] border-t border-white/10">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">More Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedArticles.map((related) => {
                  const relatedThumb = related.video_playback_id
                    ? `https://image.mux.com/${related.video_playback_id}/thumbnail.webp?time=1&width=400`
                    : related.featured_asset_url

                  return (
                    <Link
                      key={related.id}
                      href={`/${related.slug}`}
                      className="group"
                    >
                      <div className="h-40 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl mb-3 overflow-hidden">
                        {relatedThumb ? (
                          <img
                            src={relatedThumb}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-blue-400/30" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/>
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-blue-400 font-medium">
                          {formatCategory(related.article_angle)}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold group-hover:text-blue-400 transition line-clamp-2">
                        {related.title}
                      </h3>
                    </Link>
                  )
                })}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/private-equity-placement-agent-news"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition"
                >
                  View All News
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <GlobalFooter
        brandName="Rainmakrr"
        brandAccent="Quest"
        brandGradient="from-blue-400 to-indigo-500"
        brandDescription="The insider guide to placement agents"
        productLinks={[
          { label: 'Agents', href: '/private-equity-placement-agents-list' },
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
