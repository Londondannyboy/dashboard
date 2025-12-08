import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { sql } from '@/lib/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

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
  word_count: number | null
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const articles = await sql`
      SELECT *
      FROM articles
      WHERE slug = ${slug}
        AND app = 'placement'
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
      SELECT id, title, slug, excerpt, published_at, created_at, article_angle, featured_asset_url
      FROM articles
      WHERE app = 'placement'
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return { title: 'Article Not Found | Placement Quest' }
  }

  return {
    title: `${article.title} | Placement Quest`,
    description: article.meta_description || article.excerpt || `Read about ${article.title} on Placement Quest.`,
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
  if (!angle) return 'Guide'
  return angle.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}

function estimateReadTime(wordCount: number | null, content: string | null): string {
  const words = wordCount || (content ? content.split(/\s+/).length : 0)
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
  const heroImage = article.hero_asset_url || article.featured_asset_url

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
        {/* Hero */}
        <section className="relative py-16 px-6">
          {heroImage && (
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={heroImage}
                alt={article.title}
                className="w-full h-full object-cover opacity-20 blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/90 to-[#0a0a0f]" />
            </div>
          )}

          <div className="max-w-4xl mx-auto relative z-10">
            <Link
              href="/news"
              className="text-sm text-emerald-400 hover:text-emerald-300 mb-6 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>

            <div className="flex items-center gap-4 mb-6 mt-4">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">
                {category}
              </span>
              <span className="text-gray-400">{publishDate}</span>
              <span className="text-gray-400">
                {estimateReadTime(article.word_count, article.content)}
              </span>
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

        {/* Featured Image */}
        {heroImage && (
          <section className="px-6 pb-12">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={heroImage}
                  alt={article.title}
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </section>
        )}

        {/* Article Content */}
        {article.content && (
          <section className="px-6 pb-16">
            <div className="max-w-4xl mx-auto">
              <article
                className="prose prose-lg prose-invert prose-emerald max-w-none
                  prose-headings:font-bold prose-headings:text-white
                  prose-p:text-gray-300 prose-p:leading-relaxed
                  prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300
                  prose-strong:text-white prose-strong:font-semibold
                  prose-ul:text-gray-300 prose-ol:text-gray-300
                  prose-li:marker:text-emerald-500
                  prose-blockquote:border-emerald-500 prose-blockquote:text-gray-400"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </section>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="px-6 py-16 bg-white/[0.02] border-t border-white/10">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">More Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/${related.slug}`}
                    className="group"
                  >
                    <div className="h-40 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-xl mb-3 overflow-hidden">
                      {related.featured_asset_url ? (
                        <img
                          src={related.featured_asset_url}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-10 h-10 text-emerald-400/30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-emerald-400 font-medium">
                        {formatCategory(related.article_angle)}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold group-hover:text-emerald-400 transition line-clamp-2">
                      {related.title}
                    </h3>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 rounded-lg font-medium transition"
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
