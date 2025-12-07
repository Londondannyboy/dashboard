import { Metadata } from 'next'
import { HeaderWrapper, FooterWrapper } from '../components/LayoutWrappers'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SaaS GTM Plan | Go-To-Market Strategy for SaaS | GTM Quest',
  description: 'Build a winning SaaS GTM plan. Complete guide to go-to-market strategy for SaaS companies including PLG, sales-led, and hybrid approaches. Templates and frameworks.',
  keywords: 'SaaS GTM plan, SaaS go-to-market strategy, SaaS launch strategy, B2B SaaS GTM, product-led growth, SaaS sales strategy',
  openGraph: {
    title: 'SaaS GTM Plan | Go-To-Market Strategy for SaaS',
    description: 'Build a winning SaaS GTM plan for your product launch.',
    url: 'https://gtm.quest/saas-gtm-plan',
  },
}

export default function SaaSGTMPlanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <HeaderWrapper />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full text-sm text-orange-300 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              SaaS Playbook
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">SaaS GTM Plan</h1>
            <p className="text-xl text-gray-400 mb-8">
              Building a SaaS GTM plan requires a specialized approach. Learn how to create a
              go-to-market strategy optimized for SaaS business models, whether you're pursuing
              product-led growth, sales-led, or a hybrid approach.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/#planner" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold hover:opacity-90 transition">
                Create Your SaaS GTM Plan
              </Link>
              <Link href="/directory" className="px-6 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition">
                Find SaaS GTM Experts
              </Link>
            </div>
          </div>
        </section>

        {/* What is SaaS GTM */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">What is a SaaS GTM Plan?</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-4">
                A SaaS GTM plan is a go-to-market strategy specifically designed for software-as-a-service
                businesses. Unlike traditional product launches, a SaaS GTM plan must account for
                subscription economics, recurring revenue models, customer acquisition costs, and
                lifetime value optimization.
              </p>
              <p className="text-gray-300 mb-4">
                The best SaaS GTM plans balance growth with unit economics. They define how you'll
                acquire customers efficiently, onboard them successfully, and retain them long enough
                to achieve positive ROI on your customer acquisition investment.
              </p>
              <p className="text-gray-300 mb-4">
                A successful SaaS GTM plan also considers the entire customer journey—from initial
                awareness through expansion and advocacy. SaaS businesses grow not just through new
                customer acquisition but through expansion revenue from existing customers.
              </p>
            </div>
          </div>
        </section>

        {/* SaaS GTM Motions */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">SaaS GTM Plan Approaches</h2>
            <div className="space-y-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-orange-400">Product-Led Growth (PLG) GTM Plan</h3>
                <p className="text-gray-300 mb-4">
                  A product-led SaaS GTM plan puts the product at the center of customer acquisition.
                  Users can sign up, try, and often buy without talking to sales. The product itself
                  demonstrates value and drives conversion.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Elements:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Free trial or freemium model</li>
                      <li>• Self-serve onboarding</li>
                      <li>• In-product conversion prompts</li>
                      <li>• Usage-based triggers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Best For:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Low ACV products (&lt;$10k)</li>
                      <li>• Individual or team buyers</li>
                      <li>• Products with quick time-to-value</li>
                      <li>• Horizontal tools with broad appeal</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-amber-400">Sales-Led SaaS GTM Plan</h3>
                <p className="text-gray-300 mb-4">
                  A sales-led SaaS GTM plan relies on a sales team to qualify prospects, conduct
                  demonstrations, navigate buying committees, and close deals. This motion is essential
                  for complex, high-value SaaS products.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Elements:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Demand generation programs</li>
                      <li>• SDR/BDR qualification</li>
                      <li>• Demo-driven sales process</li>
                      <li>• Enterprise sales playbooks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Best For:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• High ACV products (&gt;$25k)</li>
                      <li>• Complex buying processes</li>
                      <li>• Enterprise customers</li>
                      <li>• Products requiring customization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Hybrid SaaS GTM Plan</h3>
                <p className="text-gray-300 mb-4">
                  A hybrid SaaS GTM plan combines product-led and sales-led motions. Users can start
                  with self-serve but get sales assistance for larger deals or complex needs. This
                  approach is increasingly common in modern SaaS.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Elements:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• PLG for initial acquisition</li>
                      <li>• Product-qualified leads (PQLs)</li>
                      <li>• Sales-assist for expansion</li>
                      <li>• Segment-specific motions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Best For:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Mid-market focus ($5k-$50k ACV)</li>
                      <li>• Land-and-expand models</li>
                      <li>• Multi-segment strategies</li>
                      <li>• Companies with both SMB and enterprise</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Building a SaaS GTM Plan */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">Building Your SaaS GTM Plan</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-6">
                Follow this framework to build a comprehensive SaaS GTM plan:
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Define Your ICP and Segments</h3>
              <p className="text-gray-300 mb-4">
                Your SaaS GTM plan starts with crystal-clear customer definition. Identify your
                ideal customer profile including company size, industry, tech stack, and buying
                behavior. Segment your market to prioritize the most attractive opportunities.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Map the Buyer Journey</h3>
              <p className="text-gray-300 mb-4">
                Understand how your target customers discover, evaluate, and purchase SaaS products.
                Your SaaS GTM plan should align with this journey—meeting buyers where they are and
                guiding them toward conversion.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Choose Your GTM Motion</h3>
              <p className="text-gray-300 mb-4">
                Based on your ACV, customer type, and product complexity, determine whether your
                SaaS GTM plan should be product-led, sales-led, or hybrid. This fundamental choice
                shapes your entire go-to-market approach.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Design Your Pricing Model</h3>
              <p className="text-gray-300 mb-4">
                SaaS pricing is critical to your GTM plan. Consider usage-based, seat-based, or
                feature-based pricing. Design tiers that enable land-and-expand and align with
                customer value realization.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Build Your Acquisition Engine</h3>
              <p className="text-gray-300 mb-4">
                Your SaaS GTM plan needs a reliable engine for acquiring customers. Define your
                marketing channels, content strategy, paid acquisition approach, and sales process.
                Build systems that can scale as you grow.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">6. Plan for Retention and Expansion</h3>
              <p className="text-gray-300 mb-4">
                Unlike one-time purchases, SaaS GTM plans must consider post-sale success. Include
                onboarding, customer success, retention, and expansion strategies. Net revenue
                retention is often more important than new logo acquisition.
              </p>
            </div>
          </div>
        </section>

        {/* SaaS GTM Metrics */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">Key SaaS GTM Plan Metrics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Customer Acquisition Cost (CAC)</h3>
                <p className="text-gray-400 text-sm">
                  Total cost to acquire a customer including marketing and sales expenses. Your SaaS
                  GTM plan should target efficient CAC relative to customer value.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Lifetime Value (LTV)</h3>
                <p className="text-gray-400 text-sm">
                  Total revenue expected from a customer over their lifetime. A healthy SaaS GTM
                  plan targets LTV:CAC ratio of at least 3:1.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">CAC Payback Period</h3>
                <p className="text-gray-400 text-sm">
                  Months required to recoup customer acquisition cost. Top SaaS companies target
                  payback under 12 months in their GTM plans.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Net Revenue Retention (NRR)</h3>
                <p className="text-gray-400 text-sm">
                  Revenue retained from existing customers including expansion and churn. Best-in-class
                  SaaS GTM plans target NRR above 120%.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Activation Rate</h3>
                <p className="text-gray-400 text-sm">
                  Percentage of signups that reach meaningful product usage. Critical for product-led
                  SaaS GTM plans where self-serve onboarding drives conversion.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Sales Cycle Length</h3>
                <p className="text-gray-400 text-sm">
                  Average time from lead to close. Your SaaS GTM plan should include strategies to
                  shorten sales cycles and increase velocity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SaaS GTM by Stage */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">SaaS GTM Plan by Company Stage</h2>
            <div className="prose prose-invert prose-orange max-w-none mb-8">
              <p className="text-gray-300 text-lg mb-6">
                Your SaaS GTM plan should evolve as your company grows. Here's how to adapt your
                go-to-market approach at different stages:
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-orange-400">Pre-Seed / Seed Stage SaaS GTM Plan</h3>
                <p className="text-gray-300 mb-3">
                  At this stage, your SaaS GTM plan focuses on finding product-market fit. You're
                  likely doing "things that don't scale"—manual outreach, founder-led sales, and
                  high-touch customer development.
                </p>
                <p className="text-gray-400 text-sm">Focus: Validate ICP, test messaging, find repeatable patterns</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-amber-400">Series A SaaS GTM Plan</h3>
                <p className="text-gray-300 mb-3">
                  With product-market fit established, your SaaS GTM plan shifts to building
                  repeatable, scalable go-to-market processes. Hire your first sales reps, build
                  marketing infrastructure, and document playbooks.
                </p>
                <p className="text-gray-400 text-sm">Focus: Build repeatability, hire first GTM team, establish processes</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Series B+ SaaS GTM Plan</h3>
                <p className="text-gray-300 mb-3">
                  At scale, your SaaS GTM plan focuses on efficiency and expansion. Optimize unit
                  economics, expand to new segments or markets, and build specialized GTM motions
                  for different customer types.
                </p>
                <p className="text-gray-400 text-sm">Focus: Optimize efficiency, expand markets, segment GTM motions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Create Your SaaS GTM Plan</h2>
            <p className="text-xl text-gray-400 mb-8">
              Use our AI-powered planner to generate a customized SaaS GTM plan, or connect with
              agencies who specialize in SaaS go-to-market strategy.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/#planner" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-bold hover:opacity-90 transition">
                Generate SaaS GTM Plan
              </Link>
              <Link href="/directory" className="px-8 py-4 border border-white/20 rounded-lg font-bold hover:bg-white/5 transition">
                Find SaaS GTM Experts
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterWrapper />
    </div>
  )
}
