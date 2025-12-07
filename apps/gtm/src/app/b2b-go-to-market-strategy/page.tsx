import { Metadata } from 'next'
import { HeaderWrapper, FooterWrapper } from '../components/LayoutWrappers'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'B2B Go-To-Market Strategy | B2B GTM Guide | GTM Quest',
  description: 'Complete guide to B2B go-to-market strategy. Learn how to build a winning B2B GTM strategy with frameworks for enterprise sales, ABM, channel partnerships, and more.',
  keywords: 'B2B go-to-market strategy, B2B GTM strategy, B2B product launch, enterprise GTM, B2B sales strategy, account-based marketing, B2B channel strategy',
  openGraph: {
    title: 'B2B Go-To-Market Strategy | B2B GTM Guide',
    description: 'Complete guide to B2B go-to-market strategy for enterprise success.',
    url: 'https://gtm.quest/b2b-go-to-market-strategy',
  },
}

export default function B2BGoToMarketStrategyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <HeaderWrapper />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full text-sm text-orange-300 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              B2B Playbook
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">B2B Go-To-Market Strategy</h1>
            <p className="text-xl text-gray-400 mb-8">
              A B2B go-to-market strategy requires a specialized approach for selling to businesses.
              Learn how to build a winning B2B GTM strategy that navigates complex buying processes,
              multiple stakeholders, and longer sales cycles.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/#planner" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold hover:opacity-90 transition">
                Create Your B2B GTM Strategy
              </Link>
              <Link href="/directory" className="px-6 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition">
                Find B2B GTM Experts
              </Link>
            </div>
          </div>
        </section>

        {/* What is B2B GTM */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">What is a B2B Go-To-Market Strategy?</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-4">
                A B2B go-to-market strategy is a plan for launching and selling products or services
                to other businesses. Unlike B2C, B2B go-to-market strategies must account for longer
                sales cycles, multiple decision-makers, higher contract values, and relationship-driven
                purchasing decisions.
              </p>
              <p className="text-gray-300 mb-4">
                The best B2B go-to-market strategies recognize that business buyers have different
                motivations than consumers. They're focused on ROI, risk mitigation, and how your
                solution fits their existing systems and processes. Your B2B GTM strategy must speak
                to these concerns.
              </p>
              <p className="text-gray-300 mb-4">
                A successful B2B go-to-market strategy aligns marketing, sales, and customer success
                around a unified approach to winning and retaining business customers. It defines
                who you're targeting, how you'll reach them, what you'll say, and how you'll close
                and expand accounts.
              </p>
            </div>
          </div>
        </section>

        {/* B2B vs B2C */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">B2B vs B2C Go-To-Market Strategy</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 font-bold">Dimension</th>
                    <th className="text-left py-4 px-4 font-bold text-orange-400">B2B GTM Strategy</th>
                    <th className="text-left py-4 px-4 font-bold text-gray-400">B2C GTM Strategy</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium">Buying Decision</td>
                    <td className="py-4 px-4">Committee-based, rational</td>
                    <td className="py-4 px-4">Individual, emotional</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium">Sales Cycle</td>
                    <td className="py-4 px-4">Weeks to months</td>
                    <td className="py-4 px-4">Minutes to days</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium">Deal Size</td>
                    <td className="py-4 px-4">$1K - $1M+</td>
                    <td className="py-4 px-4">$1 - $1,000</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium">Relationship</td>
                    <td className="py-4 px-4">Long-term partnership</td>
                    <td className="py-4 px-4">Transactional</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4 font-medium">Content</td>
                    <td className="py-4 px-4">Educational, ROI-focused</td>
                    <td className="py-4 px-4">Entertaining, benefit-focused</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Channels</td>
                    <td className="py-4 px-4">Direct sales, events, ABM</td>
                    <td className="py-4 px-4">Retail, social, advertising</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Components */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">Key Components of a B2B Go-To-Market Strategy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Ideal Customer Profile (ICP)</h3>
                <p className="text-gray-400">
                  Your B2B go-to-market strategy must define your ideal customer with precision.
                  Include firmographics (size, industry, revenue), technographics (tech stack),
                  and buying signals that indicate readiness to purchase.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Buyer Personas</h3>
                <p className="text-gray-400">
                  B2B go-to-market strategies must address multiple personas within target accounts.
                  Define the economic buyer, technical evaluator, end users, and influencers who
                  impact the purchasing decision.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Value Proposition</h3>
                <p className="text-gray-400">
                  B2B buyers need clear ROI justification. Your B2B go-to-market strategy should
                  articulate quantifiable business outcomes—cost savings, revenue growth, risk
                  reduction, or efficiency gains.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Sales Process</h3>
                <p className="text-gray-400">
                  Define your B2B sales methodology, stages, and qualification criteria. Your
                  go-to-market strategy should include playbooks for discovery, demo, proposal,
                  and negotiation phases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* B2B GTM Motions */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">B2B Go-To-Market Strategy Approaches</h2>
            <div className="space-y-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-orange-400">Account-Based Marketing (ABM)</h3>
                <p className="text-gray-300 mb-4">
                  ABM is a B2B go-to-market strategy that treats individual accounts as markets of one.
                  Instead of casting a wide net, you focus resources on a defined list of high-value
                  target accounts with personalized campaigns and coordinated sales outreach.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">When to Use ABM:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• High ACV products ($50k+)</li>
                      <li>• Limited target account universe</li>
                      <li>• Complex, multi-stakeholder sales</li>
                      <li>• Enterprise-focused products</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">ABM Tactics:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Personalized content and ads</li>
                      <li>• Executive engagement programs</li>
                      <li>• Custom landing pages per account</li>
                      <li>• Coordinated sales and marketing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-amber-400">Inbound-Led B2B GTM Strategy</h3>
                <p className="text-gray-300 mb-4">
                  An inbound B2B go-to-market strategy attracts buyers through valuable content and
                  search visibility. Prospects find you when researching solutions, and your content
                  educates them through the buying journey until they're ready to engage with sales.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">When to Use Inbound:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Mid-market focus ($5k-$50k ACV)</li>
                      <li>• Buyers actively researching online</li>
                      <li>• Educational purchase process</li>
                      <li>• Scalable lead generation needed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Inbound Tactics:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• SEO and content marketing</li>
                      <li>• Webinars and educational events</li>
                      <li>• Lead nurturing workflows</li>
                      <li>• Gated content and demos</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Outbound-Led B2B GTM Strategy</h3>
                <p className="text-gray-300 mb-4">
                  An outbound B2B go-to-market strategy proactively reaches out to potential buyers
                  through direct sales outreach. SDR/BDR teams identify and engage prospects via
                  email, phone, and social selling to generate pipeline.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">When to Use Outbound:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• New or disruptive categories</li>
                      <li>• Buyers not actively searching</li>
                      <li>• Need to create awareness</li>
                      <li>• Targeted account penetration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Outbound Tactics:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Cold email sequences</li>
                      <li>• LinkedIn outreach</li>
                      <li>• Cold calling campaigns</li>
                      <li>• Direct mail</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-orange-300">Channel Partner B2B GTM Strategy</h3>
                <p className="text-gray-300 mb-4">
                  A channel-led B2B go-to-market strategy leverages partners—resellers, consultants,
                  system integrators—to reach and serve customers. Partners extend your market reach
                  and provide local presence without building a large direct sales organization.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">When to Use Channel:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Geographic expansion</li>
                      <li>• Industry-specific expertise needed</li>
                      <li>• Implementation services required</li>
                      <li>• SMB market coverage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Channel Tactics:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Partner recruitment programs</li>
                      <li>• Co-marketing initiatives</li>
                      <li>• Partner enablement training</li>
                      <li>• Deal registration and incentives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Building Your B2B GTM */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">Building Your B2B Go-To-Market Strategy</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-6">
                Follow this framework to develop a comprehensive B2B go-to-market strategy:
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Define Your Market</h3>
              <p className="text-gray-300 mb-4">
                Start your B2B go-to-market strategy by sizing your market and defining your ICP.
                Analyze the competitive landscape and identify where you can win. Be specific about
                the segments where your solution delivers the most value.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Map the Buying Committee</h3>
              <p className="text-gray-300 mb-4">
                B2B purchases typically involve 6-10 stakeholders. Your B2B go-to-market strategy
                should identify all personas involved, their priorities, and how to address each
                one's concerns throughout the sales process.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Develop Your Positioning</h3>
              <p className="text-gray-300 mb-4">
                Create positioning that differentiates you from alternatives and speaks to business
                outcomes. Your B2B go-to-market strategy should include messaging for each persona
                and buying stage.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Choose Your GTM Motion</h3>
              <p className="text-gray-300 mb-4">
                Based on your ACV, market size, and buyer behavior, determine the right mix of
                ABM, inbound, outbound, and channel approaches. Most B2B go-to-market strategies
                combine multiple motions.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Build Sales Infrastructure</h3>
              <p className="text-gray-300 mb-4">
                Your B2B go-to-market strategy needs supporting infrastructure—CRM, sales engagement
                tools, content library, demo environments, and proposal templates. Equip your team
                for success.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">6. Align Marketing and Sales</h3>
              <p className="text-gray-300 mb-4">
                B2B go-to-market success requires tight alignment between marketing and sales.
                Define lead stages, handoff processes, and shared metrics. Regular pipeline reviews
                keep both teams focused on the same goals.
              </p>
            </div>
          </div>
        </section>

        {/* B2B GTM Metrics */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">B2B Go-To-Market Strategy Metrics</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="font-bold mb-2 text-orange-400">Pipeline Metrics</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Marketing Qualified Leads (MQLs)</li>
                  <li>• Sales Qualified Leads (SQLs)</li>
                  <li>• Pipeline generated</li>
                  <li>• Pipeline velocity</li>
                </ul>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="font-bold mb-2 text-amber-400">Efficiency Metrics</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Customer Acquisition Cost (CAC)</li>
                  <li>• CAC payback period</li>
                  <li>• Sales cycle length</li>
                  <li>• Win rate</li>
                </ul>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="font-bold mb-2 text-yellow-400">Revenue Metrics</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Average Contract Value (ACV)</li>
                  <li>• Net Revenue Retention (NRR)</li>
                  <li>• Lifetime Value (LTV)</li>
                  <li>• LTV:CAC ratio</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Build Your B2B Go-To-Market Strategy</h2>
            <p className="text-xl text-gray-400 mb-8">
              Use our AI-powered planner to create a customized B2B go-to-market strategy, or
              connect with GTM experts who specialize in B2B launches.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/#planner" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-bold hover:opacity-90 transition">
                Generate B2B GTM Strategy
              </Link>
              <Link href="/directory" className="px-8 py-4 border border-white/20 rounded-lg font-bold hover:bg-white/5 transition">
                Find B2B GTM Experts
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterWrapper />
    </div>
  )
}
