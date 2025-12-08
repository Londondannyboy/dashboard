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
  meta_description: string | null
  published_at: string | null
  created_at: string
  article_angle: string | null
  featured_asset_url: string | null
  hero_asset_url: string | null
  hero_asset_alt: string | null
  video_playback_id: string | null
  payload: any
  word_count: number | null
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
  return new Date(date).toLocaleDateString('en-GB', {
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

function estimateReadTime(wordCount: number | null, content: string): string {
  const words = wordCount || content.split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min read`
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
  const content = article.content || article.payload?.content || article.excerpt || ''
  const readTime = estimateReadTime(article.word_count, content)

  const heroImage = article.hero_asset_url || article.featured_asset_url || (
    article.video_playback_id
      ? `https://image.mux.com/${article.video_playback_id}/thumbnail.webp?time=1&width=1200`
      : null
  )

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Dark header section */}
      <div className="bg-slate-900">
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
      </div>

      <main className="flex-1">
        {/* Hero Section - Dark */}
        <section className="bg-slate-900 pt-24 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                {category}
              </span>
              <span className="text-slate-400 text-sm">{publishDate}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 text-sm">{readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            {article.excerpt && (
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </div>
        </section>

        {/* Hero Image */}
        {heroImage && (
          <section className="bg-slate-100 px-6 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-xl overflow-hidden shadow-lg">
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
                    src={heroImage}
                    alt={article.hero_asset_alt || article.title}
                    className="w-full aspect-video object-cover"
                  />
                )}
              </div>
            </div>
          </section>
        )}

        {/* Article Content - White Background */}
        <section className="px-6 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <article
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-200
                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-h4:text-lg prose-h4:md:text-xl prose-h4:mt-6 prose-h4:mb-3
                prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-blue-600 prose-a:font-medium prose-a:no-underline hover:prose-a:text-blue-700 hover:prose-a:underline
                prose-strong:text-slate-900 prose-strong:font-semibold
                prose-ul:text-slate-700 prose-ol:text-slate-700 prose-ul:my-6 prose-ol:my-6
                prose-li:my-2 prose-li:marker:text-blue-500
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-slate-600 prose-blockquote:italic prose-blockquote:not-italic
                prose-table:my-8 prose-table:w-full
                prose-thead:bg-slate-100 prose-thead:border-b-2 prose-thead:border-slate-200
                prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:text-sm prose-th:font-semibold prose-th:text-slate-900
                prose-td:px-4 prose-td:py-3 prose-td:text-sm prose-td:text-slate-700 prose-td:border-b prose-td:border-slate-100
                prose-tr:hover:bg-slate-50
                prose-hr:my-12 prose-hr:border-slate-200
                prose-code:text-blue-600 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:shadow-lg"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
            />
          </div>
        </section>

        {/* Related Articles - Light Gray Background */}
        {relatedArticles.length > 0 && (
          <section className="px-6 py-16 bg-slate-50 border-t border-slate-200">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedArticles.map((related) => {
                  const relatedThumb = related.video_playback_id
                    ? `https://image.mux.com/${related.video_playback_id}/thumbnail.webp?time=1&width=400`
                    : related.featured_asset_url

                  return (
                    <Link
                      key={related.id}
                      href={`/${related.slug}`}
                      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    >
                      <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                        {relatedThumb ? (
                          <img
                            src={relatedThumb}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/>
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-blue-600 font-medium uppercase tracking-wide">
                          {formatCategory(related.article_angle)}
                        </span>
                        <h3 className="mt-2 text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition line-clamp-2">
                          {related.title}
                        </h3>
                      </div>
                    </Link>
                  )
                })}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/private-equity-placement-agent-news"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition"
                >
                  View All Articles
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer - Dark */}
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
