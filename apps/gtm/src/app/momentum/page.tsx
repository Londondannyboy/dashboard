'use client'

import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { ZepGraph3D, DealTimeline3D } from '@quest/ui/finance'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Deal {
  id: string
  title: string
  date: string
  type: 'deal' | 'news' | 'event'
  value: number
  company: string
  slug?: string
}

interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  published_at: string
  created_at: string
  article_angle: string
}

export default function MomentumPage() {
  const [deals, setDeals] = useState<Deal[]>([])
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [dealsRes, articlesRes] = await Promise.all([
          fetch('/api/deals-timeline'),
          fetch('/api/articles?limit=10')
        ])

        if (dealsRes.ok) {
          const dealsData = await dealsRes.json()
          setDeals(dealsData.slice(0, 20))
        }

        if (articlesRes.ok) {
          const articlesData = await articlesRes.json()
          setArticles(articlesData.articles || [])
        }
      } catch (error) {
        console.error('Error fetching momentum data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const dealCount = deals.filter(d => d.type === 'deal').length
  const eventCount = deals.filter(d => d.type === 'event').length
  const topCompanies = [...new Set(deals.map(d => d.company))].slice(0, 5)

  const dealsByMonth: Record<string, Deal[]> = {}
  deals.forEach(deal => {
    const month = deal.date?.slice(0, 7) || 'Unknown'
    if (!dealsByMonth[month]) dealsByMonth[month] = []
    dealsByMonth[month].push(deal)
  })

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="GTM"
        brandAccent="Quest"
        brandGradient="from-orange-400 to-amber-500"
        signInGradient="from-orange-500 to-amber-500"
        navItems={[
          { href: '/news', label: 'News' },
          { href: '/directory', label: 'Providers' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum', highlight: true },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-12 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full text-sm text-amber-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Live Signals
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">GTM Momentum</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Real-time market activity, trending launches, and GTM signals
              across the go-to-market ecosystem.
            </p>
          </div>
        </section>

        {/* Metrics Dashboard */}
        <section className="py-8 px-6 border-b border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-black text-orange-400 mb-1">
                  {loading ? '...' : dealCount}
                </div>
                <div className="text-sm text-gray-400">Product Launches</div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-black text-amber-400 mb-1">
                  {loading ? '...' : eventCount}
                </div>
                <div className="text-sm text-gray-400">GTM Events</div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-black text-yellow-400 mb-1">
                  {loading ? '...' : articles.length}
                </div>
                <div className="text-sm text-gray-400">News Stories</div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-black text-orange-300 mb-1">
                  {loading ? '...' : Object.keys(dealsByMonth).length}
                </div>
                <div className="text-sm text-gray-400">Active Months</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3D Visualizations */}
        <section className="py-12 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Provider Network</h2>
                <ZepGraph3D
                  companyId="all"
                  companyName="GTM Network"
                  height="400px"
                  apiEndpoint="/api/zep-graph"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Activity Timeline</h2>
                <DealTimeline3D
                  height="400px"
                  maxDeals={15}
                  apiEndpoint="/api/deals-timeline"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Activity Feed */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                GTM Activity
              </h2>

              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-4 animate-pulse">
                      <div className="h-5 bg-white/10 rounded w-3/4 mb-2" />
                      <div className="h-4 bg-white/5 rounded w-1/2" />
                    </div>
                  ))}
                </div>
              ) : deals.length === 0 ? (
                <div className="text-center py-12 bg-white/[0.03] border border-white/10 rounded-xl">
                  <p className="text-gray-400">No recent activity to display.</p>
                  <p className="text-sm text-gray-500 mt-2">Check back soon for GTM updates.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {deals.slice(0, 15).map((deal) => (
                    <div
                      key={deal.id}
                      className="bg-white/[0.03] border border-white/10 rounded-xl p-4 hover:border-orange-500/30 transition group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                              deal.type === 'deal'
                                ? 'bg-orange-500/20 text-orange-300'
                                : deal.type === 'event'
                                ? 'bg-amber-500/20 text-amber-300'
                                : 'bg-yellow-500/20 text-yellow-300'
                            }`}>
                              {deal.type.toUpperCase()}
                            </span>
                            <span className="text-xs text-gray-500">{deal.date}</span>
                          </div>
                          {deal.slug ? (
                            <Link href={`/${deal.slug}`} className="font-medium group-hover:text-orange-400 transition line-clamp-2">
                              {deal.title}
                            </Link>
                          ) : (
                            <p className="font-medium line-clamp-2">{deal.title}</p>
                          )}
                          <p className="text-sm text-gray-500 mt-1">{deal.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Active Companies */}
              <div>
                <h3 className="text-lg font-bold mb-4">Active Players</h3>
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  {loading ? (
                    <div className="space-y-2">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="h-8 bg-white/5 rounded animate-pulse" />
                      ))}
                    </div>
                  ) : topCompanies.length === 0 ? (
                    <p className="text-gray-400 text-sm">No active players to display.</p>
                  ) : (
                    <div className="space-y-2">
                      {topCompanies.map((company, i) => (
                        <div key={company} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            i === 0 ? 'bg-orange-500/20 text-orange-400' :
                            i === 1 ? 'bg-gray-500/20 text-gray-400' :
                            i === 2 ? 'bg-amber-500/20 text-amber-400' :
                            'bg-white/10 text-gray-500'
                          }`}>
                            {i + 1}
                          </div>
                          <span className="text-sm font-medium">{company}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Latest News */}
              <div>
                <h3 className="text-lg font-bold mb-4">Latest News</h3>
                <div className="space-y-3">
                  {loading ? (
                    [1, 2, 3].map(i => (
                      <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-4 animate-pulse">
                        <div className="h-4 bg-white/10 rounded w-full mb-2" />
                        <div className="h-3 bg-white/5 rounded w-2/3" />
                      </div>
                    ))
                  ) : articles.length === 0 ? (
                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                      <p className="text-gray-400 text-sm">No recent news.</p>
                    </div>
                  ) : (
                    articles.slice(0, 5).map(article => (
                      <Link
                        key={article.id}
                        href={`/${article.slug}`}
                        className="block bg-white/[0.03] border border-white/10 rounded-xl p-4 hover:border-orange-500/30 transition"
                      >
                        <p className="text-sm font-medium line-clamp-2 mb-1">{article.title}</p>
                        <span className="text-xs text-gray-500">
                          {new Date(article.published_at || article.created_at).toLocaleDateString()}
                        </span>
                      </Link>
                    ))
                  )}
                </div>
                <Link
                  href="/news"
                  className="block text-center text-sm text-orange-400 hover:text-orange-300 mt-4"
                >
                  View all news
                </Link>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-4">Explore</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/ecosystem"
                    className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 text-center hover:bg-orange-500/20 transition"
                  >
                    <svg className="w-6 h-6 mx-auto mb-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c0-1.657-4.03-3-9-3s-9 1.343-9 3m18 0a9 9 0 01-9 9m-9-9a9 9 0 019-9" />
                    </svg>
                    <span className="text-sm font-medium text-orange-300">Network</span>
                  </Link>
                  <Link
                    href="/directory"
                    className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center hover:bg-amber-500/20 transition"
                  >
                    <svg className="w-6 h-6 mx-auto mb-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-sm font-medium text-amber-300">Providers</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <GlobalFooter
        brandName="GTM"
        brandAccent="Quest"
        brandGradient="from-orange-400 to-amber-500"
        brandDescription="Your expert GTM agency partner"
        productLinks={[
          { label: 'GTM Planner', href: '/' },
          { label: 'Providers', href: '/directory' },
          { label: 'News', href: '/news' },
          { label: 'Network', href: '/ecosystem' },
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
