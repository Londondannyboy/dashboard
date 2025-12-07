import { Metadata } from 'next'
import { HeaderWrapper, FooterWrapper } from '../components/LayoutWrappers'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GTM Strategy | Complete Go-To-Market Strategy Guide | GTM Quest',
  description: 'Learn how to build a winning GTM strategy. Comprehensive guide to go-to-market strategy including frameworks, templates, and expert tips for successful product launches.',
  keywords: 'GTM strategy, go-to-market strategy, GTM plan, GTM framework, product launch strategy, market entry strategy, GTM strategy template',
  openGraph: {
    title: 'GTM Strategy | Complete Go-To-Market Strategy Guide',
    description: 'Learn how to build a winning GTM strategy for your product launch.',
    url: 'https://gtm.quest/gtm-strategy',
  },
}

export default function GTMStrategyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <HeaderWrapper />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full text-sm text-orange-300 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Strategy Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">GTM Strategy</h1>
            <p className="text-xl text-gray-400 mb-8">
              A GTM strategy (go-to-market strategy) is your plan for launching a product or service
              into a market. Learn how to build a comprehensive GTM strategy that drives successful
              product launches and market expansion.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/#planner" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold hover:opacity-90 transition">
                Create Your GTM Strategy
              </Link>
              <Link href="/directory" className="px-6 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition">
                Find GTM Strategy Experts
              </Link>
            </div>
          </div>
        </section>

        {/* What is GTM Strategy */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">What is a GTM Strategy?</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-4">
                A GTM strategy (go-to-market strategy) is a comprehensive plan that outlines how a
                company will launch a product or service to market. Your GTM strategy defines your
                target customers, value proposition, pricing, distribution channels, and the tactics
                you'll use to acquire customers and drive growth.
              </p>
              <p className="text-gray-300 mb-4">
                Unlike a general marketing plan, a GTM strategy focuses specifically on the launch
                phase—getting your product to market and achieving initial traction. A strong GTM
                strategy aligns your product, marketing, sales, and customer success teams around
                a unified approach to winning in the market.
              </p>
              <p className="text-gray-300 mb-4">
                The best GTM strategies are built on deep customer understanding, competitive
                analysis, and realistic go-to-market assumptions. They're specific enough to guide
                execution but flexible enough to adapt as you learn from the market.
              </p>
            </div>
          </div>
        </section>

        {/* Key Components */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">Key Components of a GTM Strategy</h2>
            <div className="space-y-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-orange-400 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Target Market Definition</h3>
                    <p className="text-gray-400">
                      Your GTM strategy must clearly define who you're selling to. This includes
                      identifying your ideal customer profile (ICP), market segments, and buyer
                      personas. The more specific your targeting, the more effective your GTM
                      strategy will be.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-orange-400 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Value Proposition</h3>
                    <p className="text-gray-400">
                      A strong GTM strategy articulates why customers should choose your product
                      over alternatives. Your value proposition should address specific pain points,
                      highlight unique differentiators, and communicate clear benefits.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-orange-400 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Pricing Strategy</h3>
                    <p className="text-gray-400">
                      Your GTM strategy must include a pricing model that captures value while
                      remaining competitive. Consider pricing tiers, packaging options, and how
                      pricing supports your overall go-to-market motion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-orange-400 font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Distribution Channels</h3>
                    <p className="text-gray-400">
                      A complete GTM strategy defines how you'll reach customers—whether through
                      direct sales, channel partners, self-serve, or a hybrid approach. Your channel
                      strategy should match your target customers' buying preferences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-orange-400 font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Marketing & Demand Generation</h3>
                    <p className="text-gray-400">
                      Your GTM strategy should outline how you'll create awareness and generate
                      demand. This includes content strategy, advertising, events, PR, and other
                      tactics to fill your pipeline with qualified prospects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-orange-400 font-bold text-lg">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sales Strategy</h3>
                    <p className="text-gray-400">
                      A GTM strategy includes your sales approach—sales methodology, team structure,
                      territories, quotas, and enablement. Your sales strategy should be designed
                      to convert the demand your marketing creates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GTM Strategy Framework */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">GTM Strategy Framework</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-6">
                Building an effective GTM strategy follows a structured process. Here's a proven
                framework used by successful companies and GTM agencies:
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Phase 1: Discovery & Research</h3>
              <p className="text-gray-300 mb-4">
                Every great GTM strategy starts with research. Understand your market size, growth
                trends, competitive landscape, and customer needs. Conduct customer interviews,
                analyze competitors, and validate your assumptions before building your strategy.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Phase 2: Strategy Development</h3>
              <p className="text-gray-300 mb-4">
                Based on your research, develop your GTM strategy. Define your target segments,
                positioning, messaging, pricing, and channel approach. Create a differentiated
                value proposition that resonates with your target buyers.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Phase 3: Go-To-Market Planning</h3>
              <p className="text-gray-300 mb-4">
                Translate your GTM strategy into an actionable plan. Define launch milestones,
                marketing campaigns, sales playbooks, and success metrics. Ensure all teams are
                aligned on the plan and their roles in execution.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Phase 4: Execution & Optimization</h3>
              <p className="text-gray-300 mb-4">
                Launch your GTM strategy and monitor results closely. Track key metrics, gather
                customer feedback, and iterate quickly. The best GTM strategies are living documents
                that evolve based on market learning.
              </p>
            </div>
          </div>
        </section>

        {/* GTM Strategy Types */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">Types of GTM Strategy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-orange-400">Product-Led GTM Strategy</h3>
                <p className="text-gray-400 mb-3">
                  A GTM strategy where the product itself drives acquisition, conversion, and expansion.
                  Users can try and buy with minimal sales involvement.
                </p>
                <p className="text-gray-500 text-sm">Best for: Self-serve SaaS, developer tools, consumer apps</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-amber-400">Sales-Led GTM Strategy</h3>
                <p className="text-gray-400 mb-3">
                  A GTM strategy centered on a sales team that qualifies leads, conducts demos, and
                  closes deals. Requires significant investment in sales resources.
                </p>
                <p className="text-gray-500 text-sm">Best for: Enterprise software, complex solutions, high ACV products</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Channel-Led GTM Strategy</h3>
                <p className="text-gray-400 mb-3">
                  A GTM strategy that relies on partners, resellers, or distributors to reach customers.
                  Extends market reach without building a large direct sales team.
                </p>
                <p className="text-gray-500 text-sm">Best for: Products needing local presence, ecosystem plays</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-orange-300">Hybrid GTM Strategy</h3>
                <p className="text-gray-400 mb-3">
                  A GTM strategy combining multiple motions—for example, product-led acquisition with
                  sales-assisted expansion. Increasingly common in modern SaaS.
                </p>
                <p className="text-gray-500 text-sm">Best for: Companies serving multiple segments or growth stages</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">Common GTM Strategy Mistakes</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-6">
                Even well-intentioned GTM strategies can fail. Avoid these common mistakes when
                developing your go-to-market approach:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Too Broad Targeting:</strong> Trying to be everything to everyone dilutes your GTM strategy. Focus on a specific ICP where you can win.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Weak Differentiation:</strong> A GTM strategy without clear differentiation leads to price competition. Know what makes you unique.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Misaligned Channels:</strong> Your GTM strategy must use channels that match how your buyers actually buy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Unrealistic Assumptions:</strong> GTM strategies fail when built on wishful thinking. Validate assumptions before committing resources.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Poor Cross-Functional Alignment:</strong> A GTM strategy requires alignment across product, marketing, sales, and success. Silos kill launches.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Build Your GTM Strategy</h2>
            <p className="text-xl text-gray-400 mb-8">
              Use our AI-powered GTM strategy generator to create a customized go-to-market plan,
              or connect with expert GTM agencies who can help you develop and execute your strategy.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/#planner" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-bold hover:opacity-90 transition">
                Generate GTM Strategy
              </Link>
              <Link href="/directory" className="px-8 py-4 border border-white/20 rounded-lg font-bold hover:bg-white/5 transition">
                Find GTM Experts
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterWrapper />
    </div>
  )
}
