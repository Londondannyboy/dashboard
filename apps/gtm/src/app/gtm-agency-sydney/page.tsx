import { Metadata } from 'next'
import { HeaderWrapper, FooterWrapper } from '../components/LayoutWrappers'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GTM Agency Sydney | Go-To-Market Strategy Experts | GTM Quest',
  description: 'Find the best GTM agency in Sydney for your product launch. Expert go-to-market strategy consultants helping businesses succeed in Australia\'s largest market.',
  keywords: 'GTM agency Sydney, go-to-market agency Sydney, GTM consultant Sydney, product launch Sydney, Sydney GTM strategy',
  openGraph: {
    title: 'GTM Agency Sydney | Go-To-Market Strategy Experts',
    description: 'Find the best GTM agency in Sydney for your product launch.',
    url: 'https://gtm.quest/gtm-agency-sydney',
  },
}

export default function GTMAgencySydneyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <HeaderWrapper />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full text-sm text-orange-300 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Sydney, Australia
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">GTM Agency Sydney</h1>
            <p className="text-xl text-gray-400 mb-8">
              Looking for a GTM agency in Sydney? Connect with expert go-to-market strategy consultants
              who understand Australia's largest market and can help you launch successfully in Sydney
              and across New South Wales.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/directory" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold hover:opacity-90 transition">
                Browse Sydney GTM Agencies
              </Link>
              <Link href="/#planner" className="px-6 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition">
                Free GTM Strategy Generator
              </Link>
            </div>
          </div>
        </section>

        {/* What is a GTM Agency */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">What Does a GTM Agency in Sydney Do?</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-4">
                A GTM agency in Sydney specializes in helping businesses launch products and services
                into Australia's largest and most competitive market. Sydney-based go-to-market agencies
                combine world-class strategic expertise with deep local market knowledge to create
                launch strategies that drive results.
              </p>
              <p className="text-gray-300 mb-4">
                Sydney GTM agencies understand the unique dynamics of the NSW market, including its
                position as Australia's financial capital, its sophisticated consumer base, and its
                role as the headquarters for many multinational corporations. Whether you're launching
                a fintech product, a consumer brand, or an enterprise SaaS solution, a Sydney-based
                GTM agency provides the expertise you need.
              </p>
              <p className="text-gray-300 mb-4">
                The best GTM agencies in Sydney offer end-to-end go-to-market services including
                market sizing, competitive intelligence, brand positioning, sales strategy, channel
                development, and full launch execution. They work with Sydney-based companies,
                interstate businesses, and international firms looking to establish their Australian
                presence.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">GTM Agency Services in Sydney</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Market Entry Strategy</h3>
                <p className="text-gray-400">Sydney GTM agencies develop comprehensive market entry strategies for companies looking to establish or expand their presence in Australia's largest economy.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Sales Strategy</h3>
                <p className="text-gray-400">Leverage Sydney's concentration of corporate headquarters with GTM strategies designed for enterprise sales cycles and complex B2B buying processes.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">APAC Expansion</h3>
                <p className="text-gray-400">Use Sydney as your launchpad for Asia-Pacific expansion with GTM strategies that scale across multiple markets and time zones.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Demand Generation</h3>
                <p className="text-gray-400">Build pipeline with Sydney-focused demand generation programs including digital marketing, events, ABM, and partner marketing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sydney */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">Why Choose a Sydney GTM Agency?</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-4">
                Sydney is Australia's economic powerhouse and the natural first choice for businesses
                entering the Australian market. A GTM agency based in Sydney offers distinct advantages:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Financial Hub:</strong> Sydney is Australia's financial capital, home to major banks, investment firms, and the ASX. GTM agencies here have deep connections in financial services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Corporate Headquarters:</strong> Most multinational companies base their Australian operations in Sydney, providing access to enterprise decision-makers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Largest Market:</strong> Greater Sydney represents the largest consumer market in Australia with over 5 million people and high average incomes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Global Connectivity:</strong> Sydney's time zone and international connections make it ideal for companies with global operations or APAC ambitions.</span>
                </li>
              </ul>
              <p className="text-gray-300 mb-4">
                Whether you're a Sydney startup scaling up, a Melbourne company expanding east, or an
                international business establishing your Australian headquarters, a Sydney GTM agency
                provides the market access and expertise to accelerate your growth.
              </p>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">Industries Served by Sydney GTM Agencies</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Financial Services',
                'Technology & SaaS',
                'Professional Services',
                'Healthcare & Pharma',
                'Media & Entertainment',
                'Real Estate & Property',
                'Retail & Consumer',
                'Telecommunications',
                'Energy & Resources'
              ].map((industry) => (
                <div key={industry} className="bg-white/[0.03] border border-white/10 rounded-lg p-4 text-center">
                  <span className="text-gray-300">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Find Your Sydney GTM Agency Partner</h2>
            <p className="text-xl text-gray-400 mb-8">
              Browse our directory of GTM agencies serving Sydney and New South Wales, or use our
              AI-powered planner to create your go-to-market strategy.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/directory" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-bold hover:opacity-90 transition">
                Browse GTM Agencies
              </Link>
              <Link href="/contact" className="px-8 py-4 border border-white/20 rounded-lg font-bold hover:bg-white/5 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterWrapper />
    </div>
  )
}
