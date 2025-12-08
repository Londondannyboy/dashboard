import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { neon } from '@neondatabase/serverless'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getArticle(slug: string) {
  const sql = neon(process.env.DATABASE_URL!)

  const result = await sql`
    SELECT
      id,
      title,
      content,
      excerpt,
      slug,
      published_at,
      created_at,
      article_angle,
      word_count,
      featured_asset_url,
      featured_asset_alt
    FROM articles
    WHERE slug = ${slug}
      AND app = 'rainmakrr-agency'
    LIMIT 1
  `

  return result[0] || null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return {
      title: 'Article Not Found | Rainmakrr Agency',
    }
  }

  return {
    title: `${article.title} | Rainmakrr Agency`,
    description: article.excerpt || article.title,
    keywords: `startup jobs, tech recruitment, ${article.article_angle || 'career advice'}`,
    openGraph: {
      title: article.title,
      description: article.excerpt || article.title,
      type: 'article',
      publishedTime: article.published_at || article.created_at,
      images: article.featured_asset_url ? [{ url: article.featured_asset_url }] : [],
    },
  }
}

// Simple markdown to HTML converter
function parseMarkdown(content: string): string {
  if (!content) return ''

  let html = content
    // Headers
    .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold text-gray-900 mt-12 mb-6">$1</h1>')
    // Bold and italic
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-violet-600 font-semibold underline hover:text-violet-800" target="_blank" rel="noopener noreferrer">$1</a>')
    // Line breaks
    .replace(/\n\n/g, '</p><p class="text-gray-700 leading-relaxed mb-6">')
    // Unordered lists
    .replace(/^\- (.*$)/gm, '<li class="mb-2 text-gray-700">$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gm, '<li class="mb-2 text-gray-700">$1</li>')
    // Blockquotes
    .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-violet-600 pl-4 italic my-6 text-gray-600">$1</blockquote>')

  // Wrap in paragraph tags
  html = '<p class="text-gray-700 leading-relaxed mb-6">' + html + '</p>'

  // Clean up empty paragraphs
  html = html.replace(/<p class="[^"]*"><\/p>/g, '')

  // Wrap lists
  html = html.replace(/(<li[^>]*>.*?<\/li>)+/g, '<ul class="my-6 list-disc pl-6">$&</ul>')

  return html
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  const contentHtml = parseMarkdown(article.content || '')

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
              <Link href="/articles" className="text-gray-700 hover:text-violet-600 font-medium">Articles</Link>
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

      {/* Article Content */}
      <article className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-8">
            {article.article_angle && (
              <span className="inline-block bg-violet-100 text-violet-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-4">
                {article.article_angle}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>
            {article.excerpt && (
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {article.excerpt}
              </p>
            )}
            <div className="flex items-center text-sm text-gray-500 space-x-4 mb-8">
              <time dateTime={article.published_at || article.created_at}>
                {new Date(article.published_at || article.created_at).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {article.word_count && (
                <>
                  <span>&bull;</span>
                  <span>{article.word_count} words</span>
                </>
              )}
            </div>

            {/* Hero Image */}
            {article.featured_asset_url && (
              <div className="mb-8">
                <img
                  src={article.featured_asset_url}
                  alt={article.featured_asset_alt || article.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
          </header>

          {/* Article Body */}
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>

          {/* Back Link */}
          <div className="mt-12">
            <Link href="/articles" className="inline-flex items-center text-violet-600 hover:text-violet-800 font-medium">
              &larr; Back to articles
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Rainmakrr Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
