import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { sql } from '@/lib/db'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
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
  const heroImage = article.hero_asset_url || article.featured_asset_url
  const htmlContent = article.content ? parseMarkdown(article.content) : ''

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
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

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative">
          {/* Hero Image */}
          {heroImage ? (
            <div className="w-full h-[400px] relative">
              <img
                src={heroImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          ) : (
            <div className="w-full h-[300px] bg-gradient-to-br from-emerald-500 to-teal-600 relative">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            </div>
          )}

          {/* Title Overlay */}
          <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <Link
                href="/news"
                className="text-sm text-emerald-600 hover:text-emerald-700 mb-4 inline-flex items-center gap-2 font-medium"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to News
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-4 mt-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  {category}
                </span>
                <span className="text-sm text-gray-500">{publishDate}</span>
                <span className="text-sm text-gray-500">
                  {estimateReadTime(article.word_count, article.content)}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                {article.title}
              </h1>

              {article.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed">
                  {article.excerpt}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Article Content */}
        {htmlContent && (
          <section className="py-12 px-6">
            <div className="max-w-3xl mx-auto">
              <article
                className="prose prose-lg prose-gray max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-emerald-600 prose-a:font-medium hover:prose-a:text-emerald-700
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-ul:text-gray-700 prose-ol:text-gray-700 prose-ul:my-6 prose-ol:my-6
                  prose-li:mb-2 prose-li:marker:text-emerald-500
                  prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>
          </section>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 px-6 bg-gray-50 border-t border-gray-200">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Related Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/${related.slug}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
                  >
                    <div className="h-40 bg-gradient-to-br from-emerald-500 to-teal-600 overflow-hidden">
                      {related.featured_asset_url ? (
                        <img
                          src={related.featured_asset_url}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-12 h-12 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-emerald-600 font-medium">
                        {formatCategory(related.article_angle)}
                      </span>
                      <h3 className="text-sm font-semibold text-gray-900 mt-1 group-hover:text-emerald-600 transition line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:opacity-90 transition"
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

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated on Placements</h3>
            <p className="text-emerald-100 mb-8 text-lg">
              Get the latest news on fund placements, mandate wins, and market insights.
            </p>
            <Link
              href="/directory"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Browse Placement Agents
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
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
