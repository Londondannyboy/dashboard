import { Metadata } from 'next'
import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { GTMPlanner } from './components/GTMPlanner'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'GTM Agency | Go-To-Market Strategy & Planning | GTM Quest',
  description: 'Leading GTM agency for go-to-market strategy. AI-powered GTM planning, expert consultants, and proven frameworks. Launch your product with the top GTM agency partner.',
  keywords: 'GTM agency, go-to-market agency, GTM strategy, go-to-market strategy, GTM consultant, product launch agency, sales strategy agency',
  openGraph: {
    title: 'GTM Agency | Go-To-Market Strategy & Planning',
    description: 'Leading GTM agency for go-to-market strategy. AI-powered planning and expert consultants.',
    url: 'https://gtm.quest',
    siteName: 'GTM Quest',
    type: 'website',
  },
}

const navItems = [
  { href: '/news', label: 'News' },
  { href: '/directory', label: 'Providers' },
  { href: '/ecosystem', label: 'Network' },
  { href: '/momentum', label: 'Momentum' },
]

const productLinks = [
  { label: 'GTM Planner', href: '/' },
  { label: 'Providers', href: '/directory' },
  { label: 'News', href: '/news' },
  { label: 'Network', href: '/ecosystem' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="GTM"
        brandAccent="Quest"
        brandGradient="from-orange-400 to-amber-500"
        signInGradient="from-orange-500 to-amber-500"
        navItems={navItems}
      />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full text-sm text-orange-300 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              #1 GTM Agency for Product Launches
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              GTM Agency for Winning Market Launches
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              GTM Quest is your expert GTM agency partner. We help companies build and execute
              winning go-to-market strategies with AI-powered planning, proven frameworks, and
              expert GTM agency consultants.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#planner" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold hover:opacity-90 transition">
                Free GTM Strategy Generator
              </a>
              <Link href="/directory" className="px-6 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition">
                Browse GTM Agencies
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-orange-400 mb-1">500+</div>
                <div className="text-sm text-gray-400">GTM Agency Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-amber-400 mb-1">1,000+</div>
                <div className="text-sm text-gray-400">Successful Launches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-yellow-400 mb-1">50+</div>
                <div className="text-sm text-gray-400">GTM Tools Reviewed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-orange-300 mb-1">10k+</div>
                <div className="text-sm text-gray-400">GTM Plans Generated</div>
              </div>
            </div>
          </div>
        </section>

        {/* What is a GTM Agency Section */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">What is a GTM Agency?</h2>
                <div className="prose prose-invert prose-orange max-w-none">
                  <p className="text-gray-300 text-lg mb-4">
                    A GTM agency (go-to-market agency) is a specialized consulting firm that helps companies
                    launch products and services into new or existing markets. Unlike traditional marketing
                    agencies, a GTM agency focuses on the entire go-to-market process, from market research
                    and positioning to sales enablement and channel strategy.
                  </p>
                  <p className="text-gray-300 mb-4">
                    The best GTM agency partners combine strategic expertise with hands-on execution. They
                    work with your team to develop comprehensive go-to-market strategies that align your
                    product, messaging, pricing, and distribution channels for maximum market impact.
                  </p>
                  <p className="text-gray-300 mb-4">
                    At GTM Quest, we've built the largest directory of GTM agency providers, along with
                    AI-powered tools that help you create professional go-to-market strategies in minutes.
                    Whether you're looking to hire a GTM agency or build your strategy in-house, we provide
                    the resources you need to succeed.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-2xl p-8 border border-orange-500/20">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                    alt="GTM agency team planning go-to-market strategy session"
                    className="rounded-xl w-full h-auto"
                  />
                  <p className="text-sm text-gray-500 mt-4 text-center">GTM agency strategy planning session</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GTM Agency Services */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">GTM Agency Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A full-service GTM agency provides comprehensive go-to-market support across all stages
                of your product launch. Here's what the top GTM agencies offer:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Market Research & Analysis</h3>
                <p className="text-gray-400">
                  Expert GTM agency analysts conduct thorough market research, competitive analysis, and
                  customer segmentation to identify your ideal target market and positioning strategy.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Messaging & Positioning</h3>
                <p className="text-gray-400">
                  Your GTM agency develops compelling value propositions, brand messaging, and positioning
                  frameworks that differentiate your product and resonate with target buyers.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Sales Enablement</h3>
                <p className="text-gray-400">
                  GTM agency experts create sales playbooks, battle cards, demo scripts, and training
                  materials that empower your sales team to close more deals faster.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Demand Generation</h3>
                <p className="text-gray-400">
                  Leading GTM agencies build and execute multi-channel demand generation programs
                  including content marketing, paid advertising, events, and account-based marketing.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Channel Strategy</h3>
                <p className="text-gray-400">
                  GTM agency consultants help you identify, recruit, and enable the right channel
                  partners to extend your market reach and accelerate growth.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Pricing Strategy</h3>
                <p className="text-gray-400">
                  Expert GTM agency advisors develop pricing models, packaging options, and monetization
                  strategies that maximize revenue while remaining competitive in your market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GTM Planner Section */}
        <section id="planner" className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Free GTM Agency Strategy Generator
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Get instant GTM agency-quality strategy recommendations. Our AI-powered planner uses
                the same frameworks that top GTM agencies use to develop winning go-to-market strategies.
              </p>
            </div>

            <GTMPlanner />
          </div>
        </section>

        {/* Why Choose a GTM Agency */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-2xl p-8 border border-orange-500/20">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
                    alt="GTM agency consultant presenting go-to-market strategy"
                    className="rounded-xl w-full h-auto"
                  />
                  <p className="text-sm text-gray-500 mt-4 text-center">GTM agency expert presenting market strategy</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-black mb-6">Why Work With a GTM Agency?</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 text-lg">
                    Partnering with an experienced GTM agency can dramatically improve your chances of a
                    successful product launch. Here's why companies choose to work with GTM agency experts:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300"><strong className="text-white">Expertise:</strong> A GTM agency brings specialized knowledge from dozens of product launches across multiple industries.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300"><strong className="text-white">Speed:</strong> GTM agency teams have proven playbooks and processes that accelerate time-to-market.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300"><strong className="text-white">Objectivity:</strong> An outside GTM agency provides unbiased perspective on your market positioning and strategy.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300"><strong className="text-white">Resources:</strong> Top GTM agencies have access to research tools, databases, and talent that would be costly to build in-house.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300"><strong className="text-white">Results:</strong> Companies that partner with GTM agency experts see 40% higher success rates in new market entries.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                GTM Agency Resources & Tools
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Whether you're looking to hire a GTM agency or build your strategy in-house,
                GTM Quest provides everything you need for go-to-market success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/directory" className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition group">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition">GTM Agency Directory</h3>
                <p className="text-gray-400">
                  Browse and compare the top GTM agency providers. Find the perfect GTM agency partner
                  for your product launch.
                </p>
              </Link>

              <Link href="/news" className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition group">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition">GTM Agency News</h3>
                <p className="text-gray-400">
                  Stay updated with the latest GTM agency trends, strategies, and industry insights
                  from leading go-to-market experts.
                </p>
              </Link>

              <Link href="/ecosystem" className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition group">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition">GTM Agency Network</h3>
                <p className="text-gray-400">
                  Explore the interconnected ecosystem of GTM agency providers, tools, and service
                  partners in our interactive network.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* How to Choose a GTM Agency */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">How to Choose the Right GTM Agency</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-6">
                Selecting the right GTM agency partner is critical to your product launch success. Here's
                what to look for when evaluating GTM agency candidates:
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Industry Experience</h3>
              <p className="text-gray-300 mb-4">
                Look for a GTM agency with deep experience in your specific industry or market segment.
                The best GTM agency partners understand your buyers, competitive landscape, and industry
                dynamics. Ask for case studies and references from similar companies.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Strategic vs. Tactical Focus</h3>
              <p className="text-gray-300 mb-4">
                Some GTM agencies focus primarily on strategy development, while others specialize in
                execution. Determine whether you need a GTM agency for high-level strategic planning,
                hands-on implementation, or both. The ideal GTM agency can adapt to your needs.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Team Composition</h3>
              <p className="text-gray-300 mb-4">
                Evaluate the GTM agency team that will work on your account. Look for a mix of senior
                strategists and experienced practitioners. The best GTM agency partners assign dedicated
                teams rather than spreading resources thin across many clients.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Methodology & Frameworks</h3>
              <p className="text-gray-300 mb-4">
                A credible GTM agency should have proven methodologies and frameworks for go-to-market
                planning. Ask about their approach to market research, competitive analysis, messaging
                development, and launch execution. The best GTM agencies have documented processes that
                deliver consistent results.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Measurement & Accountability</h3>
              <p className="text-gray-300 mb-4">
                Choose a GTM agency that establishes clear KPIs and holds themselves accountable for
                results. The best GTM agency partners tie their success metrics to your business outcomes,
                not just activity metrics like deliverables completed.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Ready to Work With a GTM Agency?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Whether you're looking for a full-service GTM agency partner or need help with
              specific go-to-market challenges, GTM Quest can help you find the right solution.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#planner" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-bold hover:opacity-90 transition">
                Generate Free GTM Strategy
              </a>
              <Link href="/contact" className="px-8 py-4 border border-white/20 rounded-lg font-bold hover:bg-white/5 transition">
                Talk to a GTM Agency Expert
              </Link>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="GTM"
        brandAccent="Quest"
        brandGradient="from-orange-400 to-amber-500"
        brandDescription="Your expert GTM agency partner for go-to-market success"
        productLinks={productLinks}
        companyLinks={companyLinks}
      />
    </div>
  )
}
