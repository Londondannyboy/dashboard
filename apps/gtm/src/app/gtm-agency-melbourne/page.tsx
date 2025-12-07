import { Metadata } from 'next'
import { HeaderWrapper, FooterWrapper } from '../components/LayoutWrappers'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GTM Agency Melbourne | Go-To-Market Strategy Experts | GTM Quest',
  description: 'Find the best GTM agency in Melbourne for your product launch. Expert go-to-market strategy consultants helping Australian businesses succeed in competitive markets.',
  keywords: 'GTM agency Melbourne, go-to-market agency Melbourne, GTM consultant Melbourne, product launch Melbourne, Melbourne GTM strategy',
  openGraph: {
    title: 'GTM Agency Melbourne | Go-To-Market Strategy Experts',
    description: 'Find the best GTM agency in Melbourne for your product launch.',
    url: 'https://gtm.quest/gtm-agency-melbourne',
  },
}

export default function GTMAgencyMelbournePage() {
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
              Melbourne, Australia
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">GTM Agency Melbourne</h1>
            <p className="text-xl text-gray-400 mb-8">
              Looking for a GTM agency in Melbourne? Find expert go-to-market strategy consultants
              who understand the Australian market and can help you launch successfully in Melbourne
              and across Australia.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/directory" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold hover:opacity-90 transition">
                Browse Melbourne GTM Agencies
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
            <h2 className="text-3xl font-black mb-6">What Does a GTM Agency in Melbourne Do?</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-4">
                A GTM agency in Melbourne specializes in helping businesses launch products and services
                into the Australian market. These go-to-market agencies combine strategic expertise with
                local market knowledge to create launch strategies that resonate with Australian consumers
                and businesses.
              </p>
              <p className="text-gray-300 mb-4">
                Melbourne GTM agencies understand the unique characteristics of the Victorian market,
                including its diverse multicultural population, strong tech startup ecosystem, and
                competitive retail landscape. Whether you're launching a B2B SaaS product or a consumer
                brand, a Melbourne-based GTM agency can provide invaluable local insights.
              </p>
              <p className="text-gray-300 mb-4">
                The best GTM agencies in Melbourne offer comprehensive go-to-market services including
                market research, competitive analysis, positioning strategy, channel development, and
                launch execution. They work with both local Australian companies and international
                businesses looking to enter the Australian market through Melbourne.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">GTM Agency Services in Melbourne</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Australian Market Research</h3>
                <p className="text-gray-400">Melbourne GTM agencies conduct thorough research into Australian consumer behaviour, market trends, and competitive dynamics specific to Victoria and broader Australia.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Local Brand Positioning</h3>
                <p className="text-gray-400">Develop messaging and positioning that resonates with Melbourne's diverse audience, from inner-city professionals to suburban families and regional businesses.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Channel Partner Development</h3>
                <p className="text-gray-400">Connect with Melbourne's network of distributors, retailers, and channel partners to expand your market reach across Victoria and Australia.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Launch Execution</h3>
                <p className="text-gray-400">End-to-end launch management including event coordination, PR, digital marketing, and sales enablement for Melbourne market entry.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Melbourne */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">Why Choose a Melbourne GTM Agency?</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-4">
                Melbourne is Australia's second-largest city and a major business hub, making it an
                ideal location for go-to-market activities. A GTM agency based in Melbourne offers
                several advantages:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Local Market Expertise:</strong> Deep understanding of Melbourne's business landscape, consumer preferences, and competitive dynamics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Strong Tech Ecosystem:</strong> Melbourne has a thriving startup and tech scene, with experienced GTM professionals who understand SaaS, fintech, and digital products.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Multicultural Reach:</strong> Melbourne's diverse population allows GTM agencies to test messaging across different cultural segments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">APAC Gateway:</strong> Melbourne serves as a gateway to the broader Asia-Pacific region, making it ideal for companies with regional expansion plans.</span>
                </li>
              </ul>
              <p className="text-gray-300 mb-4">
                Whether you're a local Melbourne startup looking to scale, an interstate company
                expanding into Victoria, or an international business entering the Australian market,
                partnering with a Melbourne GTM agency gives you the local expertise needed for success.
              </p>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">Industries Served by Melbourne GTM Agencies</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Technology & SaaS',
                'Financial Services',
                'Healthcare & Biotech',
                'Retail & E-commerce',
                'Professional Services',
                'Manufacturing',
                'Education & EdTech',
                'Property & Construction',
                'Food & Beverage'
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
            <h2 className="text-3xl md:text-4xl font-black mb-6">Find Your Melbourne GTM Agency Partner</h2>
            <p className="text-xl text-gray-400 mb-8">
              Browse our directory of GTM agencies serving Melbourne and Victoria, or use our
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
