import { Metadata } from 'next'
import { HeaderWrapper, FooterWrapper } from '../components/LayoutWrappers'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Go-To-Market Strategy Example | GTM Strategy Examples | GTM Quest',
  description: 'Real go-to-market strategy examples from successful product launches. Learn from GTM strategy examples across SaaS, B2B, consumer, and startup categories.',
  keywords: 'go-to-market strategy example, GTM strategy examples, go-to-market examples, product launch examples, GTM case studies, successful GTM strategies',
  openGraph: {
    title: 'Go-To-Market Strategy Example | GTM Strategy Examples',
    description: 'Real go-to-market strategy examples from successful product launches.',
    url: 'https://gtm.quest/go-to-market-strategy-example',
  },
}

export default function GoToMarketStrategyExamplePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <HeaderWrapper />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full text-sm text-orange-300 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Case Studies
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">Go-To-Market Strategy Example</h1>
            <p className="text-xl text-gray-400 mb-8">
              Learn from real go-to-market strategy examples that drove successful product launches.
              We break down GTM strategy examples across different industries, company sizes, and
              go-to-market motions to help you build your own winning strategy.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/#planner" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold hover:opacity-90 transition">
                Create Your GTM Strategy
              </Link>
              <Link href="/go-to-market-strategy-template" className="px-6 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition">
                Get GTM Template
              </Link>
            </div>
          </div>
        </section>

        {/* Why Examples Matter */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">Learning from Go-To-Market Strategy Examples</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-4">
                Studying go-to-market strategy examples from successful companies helps you understand
                what works in practice—not just theory. Each GTM strategy example reveals how companies
                made critical decisions about positioning, pricing, channels, and launch tactics.
              </p>
              <p className="text-gray-300 mb-4">
                The best go-to-market strategy examples show the complete picture: the market context,
                the strategic choices made, the execution approach, and the results achieved. By
                analyzing multiple GTM strategy examples, you can identify patterns and principles
                to apply to your own situation.
              </p>
              <p className="text-gray-300 mb-4">
                Remember that every go-to-market strategy example is context-specific. What worked
                for one company may not work for yours. Use these examples as inspiration and
                learning, not as templates to copy exactly.
              </p>
            </div>
          </div>
        </section>

        {/* Example 1: Product-Led SaaS */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">Go-To-Market Strategy Example: Product-Led SaaS</h2>

            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Collaboration Tool Launch</h3>
                  <p className="text-gray-500 text-sm">B2B SaaS • Product-Led Growth</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">The Situation</h4>
                  <p className="text-gray-300">
                    A team collaboration startup was entering a crowded market dominated by established
                    players. With limited marketing budget and no sales team, they needed a go-to-market
                    strategy that could scale efficiently.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">GTM Strategy Approach</h4>
                  <p className="text-gray-300 mb-3">
                    This go-to-market strategy example focused on product-led growth with viral mechanics:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span><strong>Freemium Model:</strong> Generous free tier to remove adoption friction and let product demonstrate value</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span><strong>Viral Loops:</strong> Built-in collaboration features that naturally brought in new users when teams shared projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span><strong>Self-Serve Onboarding:</strong> Interactive tutorials and templates to drive activation without human touch</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span><strong>Community-Led Growth:</strong> User community and template marketplace to drive organic discovery</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Results</h4>
                  <p className="text-gray-300">
                    This go-to-market strategy example achieved 50% month-over-month growth in the first
                    year, with 40% of new signups coming from viral referrals. The product-led approach
                    kept customer acquisition costs under $50.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-xl p-6">
              <h4 className="font-bold mb-2">Key Takeaway from This GTM Strategy Example</h4>
              <p className="text-gray-300">
                Product-led go-to-market strategies work best when your product delivers immediate value,
                has natural sharing mechanics, and targets users who can adopt without procurement approval.
              </p>
            </div>
          </div>
        </section>

        {/* Example 2: Enterprise B2B */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">Go-To-Market Strategy Example: Enterprise B2B</h2>

            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Security Platform Launch</h3>
                  <p className="text-gray-500 text-sm">Enterprise B2B • Sales-Led</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">The Situation</h4>
                  <p className="text-gray-300">
                    A cybersecurity company was launching a new platform targeting Fortune 500 enterprises.
                    The product required significant implementation effort and had a $200k+ average contract
                    value, necessitating a high-touch go-to-market strategy.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">GTM Strategy Approach</h4>
                  <p className="text-gray-300 mb-3">
                    This go-to-market strategy example used an account-based, sales-led approach:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span><strong>Target Account List:</strong> Identified 200 high-value accounts based on firmographic and technographic data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span><strong>Multi-Thread Engagement:</strong> Coordinated outreach to CISOs, security architects, and IT directors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span><strong>Executive Events:</strong> Intimate dinners and roundtables with CISOs to build relationships and credibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span><strong>Proof of Value:</strong> Free 60-day pilots with dedicated success resources to demonstrate ROI before purchase</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-400 mb-2">Results</h4>
                  <p className="text-gray-300">
                    This go-to-market strategy example closed 15 enterprise deals in the first year with
                    an average contract value of $350k. The pilot-to-close rate was 70%, validating the
                    proof-of-value approach.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-xl p-6">
              <h4 className="font-bold mb-2">Key Takeaway from This GTM Strategy Example</h4>
              <p className="text-gray-300">
                Enterprise go-to-market strategies require patience and investment. Focus on fewer,
                higher-quality opportunities and invest heavily in building trust before asking for
                the sale.
              </p>
            </div>
          </div>
        </section>

        {/* Example 3: Market Expansion */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">Go-To-Market Strategy Example: Market Expansion</h2>

            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">International Market Entry</h3>
                  <p className="text-gray-500 text-sm">SaaS • Geographic Expansion</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">The Situation</h4>
                  <p className="text-gray-300">
                    A successful US-based SaaS company wanted to expand into Europe. They had strong
                    product-market fit domestically but needed a go-to-market strategy adapted for
                    new markets with different buying behaviors and regulatory requirements.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">GTM Strategy Approach</h4>
                  <p className="text-gray-300 mb-3">
                    This go-to-market strategy example used a phased expansion approach:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span><strong>Beachhead Market:</strong> Started with UK as the initial market due to language and cultural similarities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span><strong>Local Team:</strong> Hired a country manager and small sales team with deep local market experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span><strong>Partner Channel:</strong> Established partnerships with local consultancies and system integrators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span><strong>Localization:</strong> Adapted pricing, messaging, and compliance features for European requirements</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Results</h4>
                  <p className="text-gray-300">
                    This go-to-market strategy example achieved break-even in the UK within 18 months
                    and successfully expanded to Germany and France in year two. Europe now represents
                    30% of total company revenue.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
              <h4 className="font-bold mb-2">Key Takeaway from This GTM Strategy Example</h4>
              <p className="text-gray-300">
                Geographic expansion requires adapting your go-to-market strategy to local conditions.
                Start with a beachhead market, invest in local talent, and be patient—building presence
                in new markets takes time.
              </p>
            </div>
          </div>
        </section>

        {/* Example 4: Startup */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">Go-To-Market Strategy Example: Early-Stage Startup</h2>

            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Seed-Stage Product Launch</h3>
                  <p className="text-gray-500 text-sm">Startup • Finding Product-Market Fit</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">The Situation</h4>
                  <p className="text-gray-300">
                    A seed-funded startup had built an MVP and needed to find their first 50 customers.
                    With limited runway and a small team, they needed a go-to-market strategy that
                    maximized learning while conserving resources.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">GTM Strategy Approach</h4>
                  <p className="text-gray-300 mb-3">
                    This go-to-market strategy example focused on founder-led sales and rapid learning:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span><strong>Founder Sales:</strong> CEO personally sold to first 30 customers to deeply understand buyer needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span><strong>Narrow Focus:</strong> Targeted only marketing agencies with 10-50 employees to maintain focus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span><strong>Community Presence:</strong> Became active in Slack communities and forums where target buyers gathered</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400">•</span>
                      <span><strong>Design Partners:</strong> Offered free access to 5 agencies in exchange for weekly feedback and case study rights</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Results</h4>
                  <p className="text-gray-300">
                    This go-to-market strategy example achieved 50 paying customers in 6 months with
                    zero marketing spend. More importantly, the founder-led approach generated insights
                    that shaped the product roadmap and validated product-market fit for Series A.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-xl p-6">
              <h4 className="font-bold mb-2">Key Takeaway from This GTM Strategy Example</h4>
              <p className="text-gray-300">
                Early-stage go-to-market strategies should prioritize learning over scale. Founder
                involvement in sales is essential for understanding customers and building conviction
                in your direction.
              </p>
            </div>
          </div>
        </section>

        {/* Common Patterns */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">Common Patterns Across GTM Strategy Examples</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-6">
                Analyzing multiple go-to-market strategy examples reveals common success patterns:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Clear Target Focus:</strong> Successful GTM strategy examples all have narrowly defined target markets. Trying to serve everyone serves no one.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Motion Matches Market:</strong> The best go-to-market strategy examples align their GTM motion with how customers actually buy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Value Before Sale:</strong> Whether through free trials, pilots, or content, GTM strategy examples show value before asking for commitment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300"><strong className="text-white">Continuous Learning:</strong> All successful go-to-market strategy examples built in feedback loops to refine their approach based on results.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Create Your Own Go-To-Market Strategy</h2>
            <p className="text-xl text-gray-400 mb-8">
              Use these go-to-market strategy examples as inspiration for your own launch. Our
              AI-powered planner helps you build a customized GTM strategy in minutes.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/#planner" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-bold hover:opacity-90 transition">
                Generate Your GTM Strategy
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
