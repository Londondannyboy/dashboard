'use client'

import React from 'react'
import Link from 'next/link'
import { marked } from 'marked'
import { GlobalHeader, GlobalFooter } from '../layout/index.js'
import { ZepGraph3D, DealTimeline3D } from '../finance/index.js'
import { formatCategory, formatDate, getThumbnail, getCompanyImage } from '../utils/index.js'
import type { HomepageConfig, HomepageData, HomepageSection } from './types.js'

export interface HomepageLayoutProps {
  config: HomepageConfig
  data: HomepageData
}

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

function getAccentClasses(color: 'indigo' | 'emerald' | 'blue') {
  const colors = {
    indigo: {
      badge: 'bg-indigo-500/15 text-indigo-400',
      badgeBorder: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
      button: 'bg-indigo-600 hover:bg-indigo-700',
      gradient: 'from-indigo-500 to-purple-600',
      gradientCta: 'from-indigo-600 to-purple-600',
      text: 'text-indigo-400',
      textLight: 'text-indigo-300',
      border: 'border-indigo-600',
      hoverBorder: 'hover:border-indigo-500/50',
      dot: 'bg-indigo-500',
      bgAccent: 'bg-indigo-500/20',
      bgGradient: 'from-indigo-200 to-purple-200',
      ctaText: 'text-indigo-600',
      shadow: 'hover:shadow-indigo-500/10',
    },
    emerald: {
      badge: 'bg-emerald-500/15 text-emerald-400',
      badgeBorder: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      button: 'bg-emerald-600 hover:bg-emerald-700',
      gradient: 'from-emerald-500 to-teal-600',
      gradientCta: 'from-emerald-600 to-teal-600',
      text: 'text-emerald-400',
      textLight: 'text-emerald-300',
      border: 'border-emerald-600',
      hoverBorder: 'hover:border-emerald-500/50',
      dot: 'bg-emerald-500',
      bgAccent: 'bg-emerald-500/20',
      bgGradient: 'from-emerald-200 to-teal-200',
      ctaText: 'text-emerald-600',
      shadow: 'hover:shadow-emerald-500/10',
    },
    blue: {
      badge: 'bg-blue-500/15 text-blue-400',
      badgeBorder: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
      button: 'bg-indigo-600 hover:bg-indigo-700',
      gradient: 'from-indigo-500 to-purple-600',
      gradientCta: 'from-indigo-600 to-purple-600',
      text: 'text-indigo-400',
      textLight: 'text-indigo-300',
      border: 'border-blue-600',
      hoverBorder: 'hover:border-indigo-500/50',
      dot: 'bg-indigo-500',
      bgAccent: 'bg-indigo-500/20',
      bgGradient: 'from-indigo-200 to-purple-200',
      ctaText: 'text-indigo-600',
      shadow: 'hover:shadow-indigo-500/10',
    },
  }
  return colors[color]
}

export function HomepageLayout({ config, data }: HomepageLayoutProps) {
  const { sections, leadArticle, featuredArticles, articles, companies } = data
  const colors = getAccentClasses(config.accentColor)
  const heroPlaybackId = config.heroPlaybackId || 'qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y'

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName={config.brandName}
        brandAccent={config.brandAccent}
        brandGradient={config.brandGradient}
        signInGradient={config.signInGradient}
        navItems={config.navItems}
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
                <div className={`inline-block bg-gradient-to-r ${colors.gradient} px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6`}>
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
                <span className={`inline-flex items-center gap-3 bg-white/5 ${colors.text} px-8 py-4 rounded-full font-bold text-sm shadow-2xl group-hover:bg-white/10 transition`}>
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
              <h1 className="text-5xl md:text-7xl font-black mb-4">{config.brandName}</h1>
              <p className={`text-xl md:text-2xl ${colors.textLight} font-medium`}>{config.brandDescription}</p>
            </div>
          </section>
        )}

        {/* H1 Header Section */}
        <section className="bg-gradient-to-r from-slate-900 to-indigo-950 py-12 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-black mb-2">{config.brandName} - {config.brandDescription}</h1>
            <p className={`text-lg ${colors.textLight} font-medium`}>Rankings, News & Market Intelligence</p>
          </div>
        </section>

        {/* SEO Intro Text + Featured Articles */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-gray-400 leading-relaxed mb-10 max-w-4xl">
            Welcome to {config.brandName}, your insider guide to the industry.
            We track the top firms, their activities, and market trends.
            Stay ahead with comprehensive intelligence and real-time updates.
          </p>

          {/* Featured Articles Grid */}
          {featuredArticles.length > 0 && (
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
                        <span className={`${colors.badge} px-2 py-0.5 rounded text-xs font-semibold uppercase`}>
                          {formatCategory(article.article_angle)}
                        </span>
                      )}
                      <span className="text-xs text-gray-500">{formatDate(article.published_at || article.created_at)}</span>
                    </div>
                    <h3 className={`font-bold text-lg group-hover:${colors.text} transition line-clamp-2`}>{article.title}</h3>
                    {article.excerpt && (
                      <p className="text-sm text-gray-500 mt-2 line-clamp-2">{article.excerpt}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Network Section */}
        <section className="bg-white/[0.02] border-y border-white/10 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <div className={`inline-flex items-center gap-2 ${colors.badgeBorder} border px-3 py-1.5 rounded-full text-xs mb-2`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Interactive Network
                  <span className="bg-gradient-to-r from-amber-500 to-red-500 text-[8px] px-1.5 py-0.5 rounded text-white font-bold uppercase">Beta</span>
                </div>
                <h2 className="text-2xl font-black">Industry Network</h2>
              </div>
              <Link href="/ecosystem" className={`inline-flex items-center gap-2 ${colors.button} px-5 py-2.5 rounded-lg font-semibold text-sm transition`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore Universe
              </Link>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 ${colors.dot} rounded-full`} />
                <span><strong className="text-white">{companies.length}+</strong> <span className="text-gray-400">Firms</span></span>
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
                companyName="Network"
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
          <h2 className={`text-2xl font-bold mb-4 pb-3 border-b-4 ${colors.border} inline-block`}>Latest News</h2>
          <p className="text-gray-500 mb-8">Stay informed with the latest developments, deals, and insights.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <Link key={article.id} href={`/${article.slug}`} className="block group hover:-translate-y-1 transition-transform duration-300">
                <div className="relative h-48 bg-white/5 rounded-xl overflow-hidden mb-4">
                  {getThumbnail(article) ? (
                    <img src={getThumbnail(article)!} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${colors.bgGradient}`}>
                      <svg className={`w-10 h-10 ${colors.text}`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {article.article_angle && (
                    <span className={`${colors.badge} px-2 py-0.5 rounded text-xs font-semibold uppercase`}>
                      {formatCategory(article.article_angle)}
                    </span>
                  )}
                  <span className="text-xs text-gray-500">{formatDate(article.published_at || article.created_at)}</span>
                </div>
                <h3 className={`font-bold text-lg group-hover:${colors.text} transition leading-snug mb-2`}>{article.title}</h3>
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

        {/* Role Section */}
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

        {/* Full Directory */}
        <section className="bg-white/[0.02] border-t border-white/10 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-4 text-center">Directory</h2>
            <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Browse our comprehensive directory featuring top firms from around the world.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {companies.map(company => {
                const img = getCompanyImage(company)
                return (
                  <Link
                    key={company.id}
                    href={`${config.directoryPath}/${company.slug}`}
                    className={`bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden ${colors.hoverBorder} hover:shadow-lg ${colors.shadow} transition-all group`}
                  >
                    <div className={`h-24 bg-gradient-to-br ${colors.bgGradient} relative`}>
                      {img.url && img.type === 'image' ? (
                        <img src={img.url} alt={company.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className={`text-4xl font-black ${colors.text} opacity-30`}>{company.name?.charAt(0)}</span>
                        </div>
                      )}
                      {img.type === 'logo' && img.url && (
                        <div className="absolute -bottom-4 left-4 w-12 h-12 bg-white rounded-lg p-1 shadow-lg">
                          <img src={img.url} alt={company.name} className="w-full h-full object-contain" />
                        </div>
                      )}
                    </div>
                    <div className="p-5 pt-4">
                      <h3 className={`font-bold group-hover:${colors.text} transition`}>{company.name}</h3>
                      {company.headquarters && <p className="text-xs text-gray-500 mb-1">{company.headquarters}</p>}
                      {company.description && (
                        <p className="text-sm text-gray-400 line-clamp-2 mt-2">{company.description}</p>
                      )}
                      {company.specializations && company.specializations.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {company.specializations.slice(0, 3).map((spec: string, i: number) => (
                            <span key={i} className={`${colors.badge} px-2 py-0.5 rounded-full text-[10px] font-medium`}>
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
                      <div className={`w-12 h-12 ${colors.bgAccent} rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-black ${colors.text}`}>
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

              {sections.fee_structures.content?.standard_fees && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6">Standard Fee Ranges</h3>
                  <div className="space-y-3">
                    {sections.fee_structures.content.standard_fees.map((fee: { fund_type: string; fee_range: string }, i: number) => (
                      <div key={i} className="flex justify-between items-center bg-white/5 rounded-lg px-5 py-4">
                        <span className="text-gray-300">{fee.fund_type}</span>
                        <span className={`font-bold ${colors.text}`}>{fee.fee_range}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {sections.fee_structures.content?.retainer_models && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6">Retainer Models</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {sections.fee_structures.content.retainer_models.map((model: { type: string; monthly_retainer?: string; success_fee?: string; retainer_period?: string; note?: string }, i: number) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <h4 className={`text-lg font-bold mb-4 ${colors.text}`}>{model.type}</h4>
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
                        <span className={`w-8 h-8 ${colors.bgAccent} rounded-full flex items-center justify-center font-bold ${colors.text} text-sm`}>
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
                        <span className={`text-2xl font-black ${colors.text} opacity-50`}>{String(i + 1).padStart(2, '0')}</span>
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

        {/* Why Use Section */}
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
                      <h3 className={`text-lg font-bold mb-3 ${colors.textLight}`}>{reason.title}</h3>
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
                      <span className={`${colors.text} group-open:rotate-45 transition-transform`}>+</span>
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
        <section className={`bg-gradient-to-r ${colors.gradientCta} py-24 text-center`}>
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-black mb-5">Stay Ahead of the Market</h2>
            <p className="text-xl text-white/90 mb-10">
              Get comprehensive intelligence on firms, deals, relationships, and market trends.
            </p>
            <Link
              href="/contact"
              className={`inline-block bg-white ${colors.ctaText} px-10 py-4 rounded-lg font-bold hover:bg-white/90 transition`}
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName={config.brandName}
        brandAccent={config.brandAccent}
        brandGradient={config.brandGradient}
        brandDescription={config.brandDescription}
        productLinks={config.productLinks}
        companyLinks={config.companyLinks}
      />
    </div>
  )
}
