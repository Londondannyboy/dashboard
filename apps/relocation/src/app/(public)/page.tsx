import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { StaticHeader } from '@/components/StaticHeader'
import { StaticFooter } from '@/components/StaticFooter'
import { HomeVideoHero } from '@/components/HomeVideoHero'

interface Article {
  id: number
  slug: string
  title: string
  excerpt: string | null
  article_mode: string
  country: string | null
  flag_emoji: string | null
  video_playback_id: string | null
  published_at: string | null
  word_count: number | null
}

const MODE_CONFIG: Record<string, { label: string; icon: string; gradient: string }> = {
  story: { label: 'Stories', icon: '📖', gradient: 'from-amber-500 to-orange-600' },
  guide: { label: 'Guides', icon: '📋', gradient: 'from-blue-500 to-indigo-600' },
  yolo: { label: 'YOLO', icon: '🚀', gradient: 'from-pink-500 to-rose-600' },
  voices: { label: 'Voices', icon: '💬', gradient: 'from-purple-500 to-violet-600' },
  topic: { label: 'Deep Dives', icon: '🔍', gradient: 'from-emerald-500 to-teal-600' },
  nomad: { label: 'Digital Nomad', icon: '🌍', gradient: 'from-cyan-500 to-blue-600' },
}

const GATEWAY_URL = process.env.GATEWAY_URL || process.env.NEXT_PUBLIC_GATEWAY_URL || 'https://quest-gateway-production.up.railway.app'

function getThumbnail(playbackId: string | null, time: number = 5): string {
  if (!playbackId) return ''
  return `https://image.mux.com/${playbackId}/thumbnail.jpg?time=${time}&width=800`
}

async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch(
      `${GATEWAY_URL}/dashboard/content/articles?limit=100`,
      {
        next: { revalidate: 3600 },
        headers: { 'Accept': 'application/json' }
      }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.articles || []
  } catch {
    return []
  }
}

export const metadata: Metadata = {
  title: 'Relocation Quest - Expert Guides for Your International Move',
  description: 'Plan your international relocation with expert guides, visa information, cost of living data, and AI-powered advice. Covering 50+ countries with detailed expat resources.',
  alternates: {
    canonical: 'https://relocation.quest',
  },
  openGraph: {
    title: 'Relocation Quest - Your International Move Starts Here',
    description: 'Expert relocation guides, visa requirements, and AI-powered advice for moving abroad.',
    type: 'website',
  },
}

export default async function HomePage() {
  const articles = await getArticles()

  // Group by article_mode
  const articlesByMode: Record<string, Article[]> = {}
  articles.forEach((article) => {
    const mode = article.article_mode || 'topic'
    if (!articlesByMode[mode]) articlesByMode[mode] = []
    articlesByMode[mode].push(article)
  })

  // Find featured article
  const featuredArticle = articles.find(a => a.video_playback_id && a.article_mode === 'story')
    || articles.find(a => a.video_playback_id)
    || articles[0]

  const sectionOrder = ['story', 'guide', 'yolo', 'voices', 'topic', 'nomad']
  const videoCount = articles.filter(a => a.video_playback_id).length

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <StaticHeader
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
        signInGradient="from-indigo-500 to-purple-600"
        navItems={[
          { href: '/articles', label: 'Articles', highlight: true },
          { href: '/chat', label: 'Chat' },
          { href: '/voice', label: 'Voice' },
        ]}
      />

      {/* Hero with Video Background */}
      <header className="relative min-h-[80vh] flex items-center pt-20">
        {featuredArticle?.video_playback_id && (
          <HomeVideoHero playbackId={featuredArticle.video_playback_id} />
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-amber-400">
                {articles.length} Expert Articles
              </span>
              <span className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-purple-400">
                {videoCount} With Video
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              <span className="bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Your Relocation
              </span>
              <br />
              <span className="text-white">Journey Starts Here</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Deep-dive guides, real expat stories, and actionable advice for your international relocation journey.
            </p>

            {featuredArticle && (
              <Link
                href={`/articles/${featuredArticle.slug}`}
                className="group inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
                style={{ boxShadow: '0 0 60px -15px rgba(245, 158, 11, 0.3)' }}
              >
                {featuredArticle.video_playback_id && (
                  <div className="w-16 h-16 rounded-xl overflow-hidden relative">
                    <Image
                      src={getThumbnail(featuredArticle.video_playback_id, 5)}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">Featured</p>
                  <p className="text-white font-bold line-clamp-1">{featuredArticle.title}</p>
                </div>
                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="relative z-10 py-8 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: articlesByMode.story?.length || 0, label: 'Stories', icon: '📖' },
              { value: articlesByMode.guide?.length || 0, label: 'Guides', icon: '📋' },
              { value: (articlesByMode.yolo?.length || 0) + (articlesByMode.voices?.length || 0), label: 'Experiences', icon: '🌍' },
              { value: articlesByMode.topic?.length || 0, label: 'Deep Dives', icon: '🔍' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm mt-1">{stat.icon} {stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mode Filter */}
      <section className="sticky top-16 z-40 py-4 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {sectionOrder.filter(mode => articlesByMode[mode]?.length > 0).map(mode => {
              const config = MODE_CONFIG[mode]
              return (
                <a
                  key={mode}
                  href={`#${mode}`}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap flex items-center gap-2 bg-gradient-to-r ${config.gradient} hover:opacity-90 transition-opacity`}
                >
                  {config.icon} {config.label}
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                    {articlesByMode[mode].length}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {sectionOrder.filter(mode => articlesByMode[mode]?.length > 0).map(mode => {
          const config = MODE_CONFIG[mode]
          const modeArticles = articlesByMode[mode]
          return (
            <section key={mode} id={mode} className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-2xl`}>
                  {config.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{config.label}</h2>
                  <p className="text-gray-500">
                    {modeArticles.length} {modeArticles.length === 1 ? 'article' : 'articles'}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modeArticles.map((article, index) => {
                  const articleConfig = MODE_CONFIG[article.article_mode] || MODE_CONFIG.topic
                  const thumbnail = article.video_playback_id
                    ? getThumbnail(article.video_playback_id, article.article_mode === 'topic' ? 1 + (index % 6) * 2 : 5)
                    : null
                  const publishDate = article.published_at
                    ? new Date(article.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
                    : null

                  return (
                    <Link
                      key={article.id}
                      href={`/articles/${article.slug}`}
                      className="group block transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full hover:border-white/20">
                        <div className="relative aspect-video">
                          {thumbnail ? (
                            <>
                              <Image
                                src={thumbnail}
                                alt={article.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </>
                          ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${articleConfig.gradient} opacity-30 flex items-center justify-center`}>
                              <span className="text-6xl opacity-50">{articleConfig.icon}</span>
                            </div>
                          )}
                          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                            {article.flag_emoji && (
                              <span className="text-2xl">{article.flag_emoji}</span>
                            )}
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${articleConfig.gradient}`}>
                              {articleConfig.icon} {articleConfig.label}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-amber-400 transition-colors">
                            {article.title}
                          </h3>
                          {article.excerpt && (
                            <p className="text-gray-500 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                          )}
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 text-xs">{publishDate}</span>
                            <span className="text-amber-500 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                              Read <span>→</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA */}
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Ready to Start Your Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Get personalized advice from our AI assistant.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/voice"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
              style={{ boxShadow: '0 0 60px -15px rgba(245, 158, 11, 0.3)' }}
            >
              Try Voice Chat 🎙️
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center gap-3 border-2 border-amber-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-500/10 transition-all"
            >
              Start Text Chat 💬
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <StaticFooter
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
      />
    </main>
  )
}
