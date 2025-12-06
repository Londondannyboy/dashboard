import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { ZepGraph3D, DealTimeline3D } from '@quest/ui/finance'
import Link from 'next/link'
import { Metadata } from 'next'
import { sql } from '../lib/db'
import { marked } from 'marked'

export const metadata: Metadata = {
  title: 'Private Equity Placement Agents | Rainmakrr - The Insider Guide',
  description: 'The insider guide to private equity placement agents. Top PE placement agent rankings, fund placement news, deal flow intelligence, and market insights for fund managers and investors.',
  openGraph: {
    title: 'Private Equity Placement Agents | Rainmakrr',
    description: 'The insider guide to private equity placement agents. Rankings, news, and market intelligence.',
  },
}

interface HomepageSection {
  section_type: string
  title: string
  subtitle: string
  content: any
}

interface Article {
  id: number
  title: string
  excerpt: string
  slug: string
  published_at: string
  created_at: string
  article_angle: string
  featured_asset_url: string
  video_playback_id: string
}

interface Agent {
  id: number
  name: string
  slug: string
  description: string
  logo_url: string
  headquarters: string
  specializations: string[]
  global_rank: number
  featured_asset_url: string
}

// Helper: format category
function formatCategory(angle: string | null): string {
  if (!angle) return ''
  return angle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

// Helper: format date
function formatDate(date: string | Date | null): string {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
}

// Helper: get text content from section
function getTextContent(section: HomepageSection | undefined): string {
  if (!section?.content) return ''
  if (typeof section.content === 'string') return section.content
  if (section.content.text) return section.content.text
  if (section.content.body) return section.content.body
  if (section.content.paragraphs && Array.isArray(section.content.paragraphs)) {
    return section.content.paragraphs.map((p: { text?: string }) => p.text || '').join('\n\n')
  }
  return ''
}

// Helper: get thumbnail
function getThumbnail(article: Article): string | null {
  if (article.video_playback_id) {
    return `https://image.mux.com/${article.video_playback_id}/thumbnail.webp?time=1&width=400`
  }
  return article.featured_asset_url || null
}

// Helper: get company image
function getCompanyImage(company: Agent): { url: string | null; type: 'logo' | 'image' | 'placeholder' } {
  if (company.logo_url) return { url: company.logo_url, type: 'logo' }
  if (company.featured_asset_url) return { url: company.featured_asset_url, type: 'image' }
  return { url: null, type: 'placeholder' }
}

export default async function HomePage() {
  // Fetch homepage content from CMS
  const homepageContent = await sql`
    SELECT section_type, title, subtitle, content
    FROM homepage_content
    WHERE site = 'rainmakrr' AND is_active = true
    ORDER BY section_order ASC
  ` as HomepageSection[]

  const sections = {
    intro: homepageContent.find(s => s.section_type === 'intro'),
    role: homepageContent.find(s => s.section_type === 'role'),
    top_agents: homepageContent.find(s => s.section_type === 'top_agents'),
    how_it_works: homepageContent.find(s => s.section_type === 'how_it_works'),
    fee_structures: homepageContent.find(s => s.section_type === 'fee_structures'),
    selection: homepageContent.find(s => s.section_type === 'selection'),
    trends: homepageContent.find(s => s.section_type === 'trends'),
    why_use: homepageContent.find(s => s.section_type === 'why_use'),
    faq: homepageContent.find(s => s.section_type === 'faq'),
  }

  // Fetch lead article for hero
  const leadArticles = await sql`
    SELECT id, title, excerpt, slug, published_at, created_at,
      article_angle, featured_asset_url, video_playback_id
    FROM articles
    WHERE app = 'rainmakrr' AND status = 'published' AND is_featured = true
    ORDER BY COALESCE(published_at, created_at) DESC
    LIMIT 2
  ` as Article[]
  const leadArticle = leadArticles[1] || leadArticles[0] || null

  // Fetch featured articles
  const featuredArticles = await sql`
    SELECT id, title, excerpt, slug, published_at, created_at,
      article_angle, featured_asset_url, video_playback_id
    FROM articles
    WHERE app = 'rainmakrr' AND status = 'published' AND is_featured = true
      ${leadArticle ? sql`AND id != ${leadArticle.id}` : sql``}
    ORDER BY COALESCE(published_at, created_at) DESC
    LIMIT 2
  ` as Article[]

  // Fetch latest news articles
  const articles = await sql`
    SELECT id, title, excerpt, slug, published_at, created_at,
      article_angle, featured_asset_url, video_playback_id
    FROM articles
    WHERE app = 'rainmakrr' AND status = 'published'
      AND (is_featured = false OR is_featured IS NULL)
    ORDER BY COALESCE(published_at, created_at) DESC
    LIMIT 12
  ` as Article[]

  // Fetch all placement agents
  const allAgents = await sql`
    SELECT id, name, slug, description, logo_url, headquarters, specializations, global_rank, featured_asset_url
    FROM companies
    WHERE status = 'published' AND company_type = 'placement_agent'
    ORDER BY CASE WHEN global_rank IS NOT NULL THEN 0 ELSE 1 END, global_rank ASC NULLS LAST, name ASC
  ` as Agent[]

  const heroPlaybackId = 'qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y'

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="Rainmakrr"
        brandAccent="Quest"
        brandGradient="from-blue-400 to-indigo-500"
        signInGradient="from-blue-500 to-indigo-500"
        navItems={[
          { href: '/private-equity-placement-agent-news', label: 'News' },
          { href: '/private-equity-placement-agents-list', label: 'Directory' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Lead Article Hero */}
        {leadArticle ? (
          <Link href={`/${leadArticle.slug}`} className="block relative h-[85vh] min-h-[600px] overflow-hidden group">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-90"
              src={`https://stream.mux.com/${heroPlaybackId}.m3u8`}
              poster={`https://image.mux.com/${heroPlaybackId}/thumbnail.webp?time=1`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-16 z-10">
              <div className="max-w-[800px]">
                <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                  {leadArticle.article_angle ? formatCategory(leadArticle.article_angle) : 'Featured'}
                </div>
                <h2 className="text-4xl md:text-6xl font-black leading-tight mb-5 drop-shadow-2xl">
                  {leadArticle.title}
                </h2>
                {leadArticle.excerpt && (
                  <p className="text-lg text-white/90 mb-8 max-w-[600px] leading-relaxed">
                    {leadArticle.excerpt}
                  </p>
                )}
                <span className="inline-flex items-center gap-3 bg-white/5 text-purple-400 px-8 py-4 rounded-full font-bold text-sm shadow-2xl group-hover:bg-white/10 transition">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <section className="relative overflow-hidden py-20 px-6">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-indigo-900/80 to-slate-900/85" />
            <div className="max-w-6xl mx-auto relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-black mb-4">Private Equity Placement Agents</h1>
              <p className="text-xl md:text-2xl text-indigo-300 font-medium">Fundraising Advisory & Capital Markets Intelligence</p>
            </div>
          </section>
        )}

        {/* H1 Header Section */}
        <section className="bg-gradient-to-r from-slate-900 to-indigo-950 py-12 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-black mb-2">Private Equity Placement Agents</h1>
            <p className="text-lg text-indigo-300 font-medium">Fund Rankings, Deal Flow & Market Intelligence</p>
          </div>
        </section>

        {/* SEO Intro Text + Featured Articles */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-gray-400 leading-relaxed mb-10 max-w-4xl">
            Welcome to Rainmakrr, your insider guide to <strong className="text-white">private equity placement agents</strong>.
            We track the top PE placement agents, their deal flow, fund mandates, and market intelligence.
            Whether you're a fund manager seeking capital, an LP evaluating intermediaries, or an industry professional tracking the market,
            Rainmakrr delivers the intelligence you need to stay ahead.
          </p>

          {/* Featured Articles Grid */}
          {(featuredArticles[0] || featuredArticles[1]) && (
            <div className="mb-12">
              <h2 className="text-xl font-bold mb-6 pb-2 border-b-4 border-red-500 inline-block">Featured</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredArticles.map(article => (
                  <Link key={article.id} href={`/${article.slug}`} className="block group">
                    <div className="relative h-48 bg-white/5 rounded-xl overflow-hidden mb-3">
                      {getThumbnail(article) && (
                        <img src={getThumbnail(article)!} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      {article.article_angle && (
                        <span className="bg-blue-500/15 text-blue-400 px-2 py-0.5 rounded text-xs font-semibold uppercase">
                          {formatCategory(article.article_angle)}
                        </span>
                      )}
                      <span className="text-xs text-gray-500">{formatDate(article.published_at || article.created_at)}</span>
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-blue-400 transition line-clamp-2">{article.title}</h3>
                    {article.excerpt && (
                      <p className="text-sm text-gray-500 mt-2 line-clamp-2">{article.excerpt}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Agent Network Section */}
        <section className="bg-white/[0.02] border-y border-white/10 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1.5 rounded-full text-xs text-indigo-400 mb-2">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Interactive Network
                  <span className="bg-gradient-to-r from-amber-500 to-red-500 text-[8px] px-1.5 py-0.5 rounded text-white font-bold uppercase">Beta</span>
                </div>
                <h2 className="text-2xl font-black">Placement Agent Network</h2>
              </div>
              <Link href="/ecosystem" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-5 py-2.5 rounded-lg font-semibold text-sm transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore Universe
              </Link>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full" />
                <span><strong className="text-white">{allAgents.length}+</strong> <span className="text-gray-400">Placement Agents</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                <span><strong className="text-white">150+</strong> <span className="text-gray-400">Entities</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-amber-500 rounded-full" />
                <span><strong className="text-white">800+</strong> <span className="text-gray-400">Connections</span></span>
              </div>
            </div>

            {/* 3D Graph */}
            <div className="rounded-xl overflow-hidden border border-white/10">
              <ZepGraph3D
                companyId="all"
                companyName="Placement Network"
                height="400px"
                apiEndpoint="/api/zep-graph"
              />
            </div>
          </div>
        </section>

        {/* Deal Timeline Section */}
        <section className="bg-white/[0.03] py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Deal Timeline</h2>
            <DealTimeline3D
              height="400px"
              maxDeals={15}
              apiEndpoint="/api/deals-timeline"
            />
          </div>
        </section>

        {/* Latest News Grid */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-4 pb-3 border-b-4 border-blue-600 inline-block">Latest News</h2>
          <p className="text-gray-500 mb-8">Stay informed with the latest developments, deals, and insights from top private equity placement agents.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <Link key={article.id} href={`/${article.slug}`} className="block group hover:-translate-y-1 transition-transform duration-300">
                <div className="relative h-48 bg-white/5 rounded-xl overflow-hidden mb-4">
                  {getThumbnail(article) ? (
                    <img src={getThumbnail(article)!} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-200">
                      <svg className="w-10 h-10 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {article.article_angle && (
                    <span className="bg-blue-500/15 text-blue-400 px-2 py-0.5 rounded text-xs font-semibold uppercase">
                      {formatCategory(article.article_angle)}
                    </span>
                  )}
                  <span className="text-xs text-gray-500">{formatDate(article.published_at || article.created_at)}</span>
                </div>
                <h3 className="font-bold text-lg group-hover:text-blue-400 transition leading-snug mb-2">{article.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-3">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* SEO CONTENT SECTIONS */}

        {/* Intro Section */}
        {sections.intro && (
          <section className="bg-white/[0.02] border-t border-white/10 py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-5">{sections.intro.title}</h2>
              {sections.intro.subtitle && <p className="text-lg text-gray-400 mb-6">{sections.intro.subtitle}</p>}
              {getTextContent(sections.intro) && (
                <div
                  className="prose prose-invert prose-lg max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ __html: marked(getTextContent(sections.intro)) as string }}
                />
              )}
            </div>
          </section>
        )}

        {/* Role of Placement Agents */}
        {sections.role && (
          <section className="border-t border-white/10 py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-black mb-4 text-center">{sections.role.title}</h2>
              {sections.role.subtitle && (
                <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">{sections.role.subtitle}</p>
              )}
              {sections.role.content?.items && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {sections.role.content.items.map((item: { title: string; description: string }, i: number) => (
                    <div key={i} className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Full Placement Agents Directory */}
        <section className="bg-white/[0.02] border-t border-white/10 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-4 text-center">Top Private Equity Placement Agents Directory</h2>
            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Browse our comprehensive directory featuring top private equity placement agents from around the world.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {allAgents.map(agent => {
                const img = getCompanyImage(agent)
                return (
                  <Link
                    key={agent.id}
                    href={`/private-equity-placement-agents-list/${agent.slug}`}
                    className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all group"
                  >
                    <div className="h-24 bg-gradient-to-br from-indigo-200 to-purple-200 relative">
                      {img.url && img.type === 'image' ? (
                        <img src={img.url} alt={agent.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-4xl font-black text-indigo-500 opacity-30">{agent.name?.charAt(0)}</span>
                        </div>
                      )}
                      {img.type === 'logo' && img.url && (
                        <div className="absolute -bottom-4 left-4 w-12 h-12 bg-white rounded-lg p-1 shadow-lg">
                          <img src={img.url} alt={agent.name} className="w-full h-full object-contain" />
                        </div>
                      )}
                    </div>
                    <div className="p-5 pt-4">
                      <h3 className="font-bold group-hover:text-indigo-400 transition">{agent.name}</h3>
                      {agent.headquarters && <p className="text-xs text-gray-500 mb-1">{agent.headquarters}</p>}
                      {agent.description && (
                        <p className="text-sm text-gray-400 line-clamp-2 mt-2">{agent.description}</p>
                      )}
                      {agent.specializations && agent.specializations.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {agent.specializations.slice(0, 3).map((spec: string, i: number) => (
                            <span key={i} className="bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-full text-[10px] font-medium">
                              {spec}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
            <p className="text-sm text-gray-500 text-center mt-10 max-w-3xl mx-auto leading-relaxed">
              Each of these top private equity placement agents brings unique strengths across different sectors and fund strategies.
              From first-time fund managers to established GPs raising multi-billion dollar vehicles, these firms have the relationships and expertise to execute successful fundraises.
            </p>
          </div>
        </section>

        {/* How It Works */}
        {sections.how_it_works && (
          <section className="border-t border-white/10 py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-black mb-4 text-center">{sections.how_it_works.title}</h2>
              {sections.how_it_works.subtitle && (
                <p className="text-gray-400 text-center mb-12">{sections.how_it_works.subtitle}</p>
              )}
              {sections.how_it_works.content?.steps && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {sections.how_it_works.content.steps.map((step: { title: string; description: string }, i: number) => (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-black text-indigo-400">
                        {i + 1}
                      </div>
                      <h3 className="font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Fee Structures */}
        {sections.fee_structures && (
          <section className="bg-white/[0.02] border-t border-white/10 py-24 px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-black mb-4 text-center">{sections.fee_structures.title}</h2>
              {sections.fee_structures.subtitle && (
                <p className="text-lg text-gray-400 text-center mb-12">{sections.fee_structures.subtitle}</p>
              )}

              {/* Standard Fees Table */}
              {sections.fee_structures.content?.standard_fees && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6">Standard Fee Ranges</h3>
                  <div className="space-y-3">
                    {sections.fee_structures.content.standard_fees.map((fee: { fund_type: string; fee_range: string }, i: number) => (
                      <div key={i} className="flex justify-between items-center bg-white/5 rounded-lg px-5 py-4">
                        <span className="text-gray-300">{fee.fund_type}</span>
                        <span className="font-bold text-indigo-400">{fee.fee_range}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Retainer Models */}
              {sections.fee_structures.content?.retainer_models && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6">Retainer Models</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {sections.fee_structures.content.retainer_models.map((model: { type: string; monthly_retainer?: string; success_fee?: string; retainer_period?: string; note?: string }, i: number) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <h4 className="text-lg font-bold mb-4 text-indigo-400">{model.type}</h4>
                        <div className="text-sm text-gray-300 space-y-2">
                          {model.monthly_retainer && <p><strong>Monthly Retainer:</strong> {model.monthly_retainer}</p>}
                          {model.success_fee && <p><strong>Success Fee:</strong> {model.success_fee}</p>}
                          {model.retainer_period && <p><strong>Period:</strong> {model.retainer_period}</p>}
                          {model.note && <p className="mt-3 italic text-gray-500">{model.note}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Example Calculation */}
              {sections.fee_structures.content?.example && (
                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-bold mb-5">Example: {sections.fee_structures.content.example.fund_size} Fund</h3>
                  <div className="flex justify-center gap-8 flex-wrap">
                    <div>
                      <span className="block text-3xl font-black text-indigo-400">{sections.fee_structures.content.example.total}</span>
                      <span className="text-sm text-gray-400">Total Cost</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Selection Criteria */}
        {sections.selection && (
          <section className="border-t border-white/10 py-24 px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-black mb-4 text-center">{sections.selection.title}</h2>
              {sections.selection.subtitle && (
                <p className="text-lg text-gray-400 text-center mb-12">{sections.selection.subtitle}</p>
              )}

              {sections.selection.content?.criteria && (
                <div className="grid md:grid-cols-2 gap-6">
                  {sections.selection.content.criteria.map((item: { name: string; description: string }, i: number) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 bg-indigo-500/30 rounded-full flex items-center justify-center font-bold text-indigo-400 text-sm">
                          {i + 1}
                        </span>
                        <h3 className="font-bold">{item.name}</h3>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {sections.selection.content?.red_flags && (
                <div className="mt-12 bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-bold text-red-300 mb-4">Red Flags to Watch</h3>
                  <div className="flex flex-wrap gap-2">
                    {sections.selection.content.red_flags.map((flag: string, i: number) => (
                      <span key={i} className="bg-red-500/20 text-red-300 px-3 py-1.5 rounded-full text-sm">
                        {flag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Trends */}
        {sections.trends && (
          <section className="bg-white/[0.02] border-t border-white/10 py-24 px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-black mb-4 text-center">{sections.trends.title}</h2>
              {sections.trends.subtitle && (
                <p className="text-lg text-gray-400 text-center mb-12">{sections.trends.subtitle}</p>
              )}

              {sections.trends.content?.trends && (
                <div className="grid md:grid-cols-2 gap-6">
                  {sections.trends.content.trends.map((trend: { name: string; description: string }, i: number) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-black text-indigo-500/50">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className="font-bold">{trend.name}</h3>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{trend.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Why Use a Placement Agent */}
        {sections.why_use && (
          <section className="border-t border-white/10 py-24 px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-black mb-4 text-center">{sections.why_use.title}</h2>
              {sections.why_use.subtitle && (
                <p className="text-lg text-gray-400 text-center mb-12">{sections.why_use.subtitle}</p>
              )}

              {sections.why_use.content?.reasons && (
                <div className="grid md:grid-cols-2 gap-6">
                  {sections.why_use.content.reasons.map((reason: { title: string; description: string }, i: number) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <h3 className="text-lg font-bold mb-3 text-indigo-300">{reason.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{reason.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* FAQ */}
        {sections.faq && (
          <section className="bg-white/[0.02] border-t border-white/10 py-24 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-black mb-12 text-center">{sections.faq.title || 'Frequently Asked Questions'}</h2>
              <div className="space-y-4">
                {sections.faq.content?.questions?.map((faq: { question: string; answer: string }, i: number) => (
                  <details key={i} className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 group">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                      {faq.question}
                      <span className="text-indigo-400 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="text-gray-400 mt-4 pt-4 border-t border-white/10 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-24 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-black mb-5">Track the Placement Agent Ecosystem</h2>
            <p className="text-xl text-white/90 mb-10">
              Stay ahead with comprehensive intelligence on placement agents, fund mandates, LP relationships, and fundraising trends.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-lg font-bold hover:bg-white/90 transition"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="Rainmakrr"
        brandAccent="Quest"
        brandGradient="from-blue-400 to-indigo-500"
        brandDescription="The insider guide to private equity placement agents"
        productLinks={[
          { label: 'Placement Agents', href: '/private-equity-placement-agents-list' },
          { label: 'Agent Network', href: '/ecosystem' },
          { label: 'Industry News', href: '/private-equity-placement-agent-news' },
          { label: 'Deal Flow', href: '/momentum' },
        ]}
        companyLinks={[
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Privacy', href: '/privacy' },
          { label: 'Terms', href: '/terms' },
        ]}
      />
    </div>
  )
}
