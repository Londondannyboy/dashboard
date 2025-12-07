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
  updated_at: string | null
  article_angle: string | null
  featured_asset_url: string | null
  featured_asset_alt: string | null
  hero_asset_url: string | null
  hero_asset_alt: string | null
  word_count: number | null
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const articles = await sql`
      SELECT
        id, title, slug, content, excerpt, meta_description,
        published_at, created_at, updated_at, article_angle,
        featured_asset_url, featured_asset_alt,
        hero_asset_url, hero_asset_alt, word_count
      FROM articles
      WHERE slug = ${slug}
        AND app = 'placement'
        AND status = 'published'
      LIMIT 1
    `
    return articles[0] as Article || null
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
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
        <article>
          {/* Hero Section */}
          <header className="py-12 px-6 border-b border-white/10">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/news"
                className="text-sm text-emerald-400 hover:text-emerald-300 mb-6 inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to News
              </Link>

              <div className="flex items-center gap-3 mb-4 mt-4">
                {article.article_angle && (
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">
                    {article.article_angle}
                  </span>
                )}
                <span className="text-sm text-gray-500">
                  {formatDate(article.published_at || article.created_at)}
                </span>
                <span className="text-sm text-gray-500">
                  {estimateReadTime(article.word_count, article.content)}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
                {article.title}
              </h1>

              {article.excerpt && (
                <p className="text-xl text-gray-400 leading-relaxed">
                  {article.excerpt}
                </p>
              )}
            </div>
          </header>

          {/* Hero Image */}
          {heroImage && (
            <div className="border-b border-white/10">
              <div className="max-w-5xl mx-auto px-6 py-8">
                <div className="rounded-xl overflow-hidden bg-white/5">
                  <img
                    src={heroImage}
                    alt={article.hero_asset_alt || article.featured_asset_alt || article.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          {article.content && (
            <div className="py-12 px-6">
              <div className="max-w-3xl mx-auto">
                <div
                  className="prose prose-lg prose-invert prose-emerald max-w-none
                    prose-headings:font-bold prose-headings:text-white
                    prose-p:text-gray-300 prose-p:leading-relaxed
                    prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-white
                    prose-ul:text-gray-300 prose-ol:text-gray-300
                    prose-blockquote:border-emerald-500 prose-blockquote:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </div>
          )}

          {/* Footer CTA */}
          <div className="py-12 px-6 border-t border-white/10 bg-white/[0.02]">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-6">
                Get the latest placement news and market insights delivered to your inbox.
              </p>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Browse More News
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </article>
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
