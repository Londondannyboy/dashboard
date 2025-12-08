import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getArticleBySlug, getAllArticleSlugs, getRelatedArticles } from '@/lib/articles'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found | Fractional Quest',
    }
  }

  return {
    title: `${article.title} | Fractional Quest`,
    description: article.meta_description,
    keywords: article.secondary_keywords?.join(', ') || article.target_keyword || '',
    openGraph: {
      title: article.title,
      description: article.meta_description,
      images: article.featured_asset_url ? [article.featured_asset_url] : [],
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = await getRelatedArticles(slug, 3)

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
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 mb-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-violet-700">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-violet-700">Articles</Link>
            <span>/</span>
            <span className="text-gray-700 truncate max-w-xs">{article.title}</span>
          </nav>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4">
          <header className="mb-8">
            {article.target_keyword && (
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-violet-100 text-violet-800 mb-4">
                {article.target_keyword}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>
            {article.excerpt && (
              <p className="text-xl text-gray-600 mb-6">{article.excerpt}</p>
            )}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>
                {new Date(article.created_at).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              {article.keyword_volume && (
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                  {article.keyword_volume.toLocaleString()} monthly searches
                </span>
              )}
            </div>
          </header>

          {/* Hero Image */}
          {article.hero_asset_url && (
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image
                src={article.hero_asset_url}
                alt={article.hero_asset_alt || article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-violet-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Content Images */}
          {article.content_image_1_url && (
            <div className="my-10">
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                  src={article.content_image_1_url}
                  alt={article.content_image_1_alt || 'Article image'}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Keywords/Tags */}
          {article.secondary_keywords && article.secondary_keywords.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 mb-3">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {article.secondary_keywords.map((keyword, index) => (
                  <Link
                    key={index}
                    href={`/articles?keyword=${encodeURIComponent(keyword)}`}
                    className="text-sm bg-gray-100 hover:bg-violet-100 text-gray-700 hover:text-violet-800 px-3 py-1 rounded-full transition"
                  >
                    {keyword}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 mt-16">
            <h2 className="text-2xl font-black text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/articles/${related.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition"
                >
                  {related.featured_asset_url && (
                    <div className="relative h-40 bg-gray-100">
                      <Image
                        src={related.featured_asset_url}
                        alt={related.featured_asset_alt || related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-violet-700 transition line-clamp-2">
                      {related.title}
                    </h3>
                    {related.excerpt && (
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{related.excerpt}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 mt-16">
          <div className="bg-violet-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Ready to Find Fractional Jobs?
            </h2>
            <p className="text-violet-100 mb-6">
              Browse the latest fractional executive opportunities across the UK.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/jobs"
                className="bg-white text-violet-900 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition"
              >
                Browse All Jobs
              </Link>
              <Link
                href="/articles"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg transition"
              >
                More Articles
              </Link>
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
