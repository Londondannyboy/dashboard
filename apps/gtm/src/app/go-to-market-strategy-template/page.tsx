import { Metadata } from 'next'
import { HeaderWrapper, FooterWrapper } from '../components/LayoutWrappers'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Go-To-Market Strategy Template | Free GTM Template | GTM Quest',
  description: 'Free go-to-market strategy template to plan your product launch. Download our proven GTM template with frameworks, checklists, and examples used by top companies.',
  keywords: 'go-to-market strategy template, GTM template, GTM strategy template, go-to-market plan template, product launch template, GTM framework template',
  openGraph: {
    title: 'Go-To-Market Strategy Template | Free GTM Template',
    description: 'Free go-to-market strategy template to plan your product launch.',
    url: 'https://gtm.quest/go-to-market-strategy-template',
  },
}

export default function GoToMarketStrategyTemplatePage() {
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
              Free Template
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">Go-To-Market Strategy Template</h1>
            <p className="text-xl text-gray-400 mb-8">
              Download our free go-to-market strategy template used by hundreds of successful product
              launches. This comprehensive GTM template includes frameworks, checklists, and examples
              to guide your planning process.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/#planner" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold hover:opacity-90 transition">
                Generate Your GTM Strategy
              </Link>
              <Link href="/gtm-strategy" className="px-6 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition">
                Learn GTM Strategy Basics
              </Link>
            </div>
          </div>
        </section>

        {/* Why Use a Template */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">Why Use a Go-To-Market Strategy Template?</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-4">
                A go-to-market strategy template provides a proven structure for planning your product
                launch. Instead of starting from scratch, you can leverage frameworks and best practices
                that have worked for successful companies across industries.
              </p>
              <p className="text-gray-300 mb-4">
                The best go-to-market strategy templates help you think through all critical elements
                of your launch—from target market definition to channel strategy to launch execution.
                They ensure you don't miss important considerations and help align your team around
                a common framework.
              </p>
              <p className="text-gray-300 mb-4">
                Using a GTM template also accelerates your planning process. Rather than debating
                structure and format, you can focus on the strategic decisions that matter. A good
                go-to-market strategy template is a starting point, not a rigid constraint—adapt it
                to fit your specific situation.
              </p>
            </div>
          </div>
        </section>

        {/* Template Sections */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">What's in Our Go-To-Market Strategy Template</h2>
            <div className="space-y-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-orange-400 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Executive Summary</h3>
                    <p className="text-gray-400">
                      Our go-to-market strategy template starts with an executive summary section
                      that captures your product vision, target market, value proposition, and key
                      launch objectives. This provides a quick overview for stakeholders and keeps
                      your team aligned on the big picture.
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
                    <h3 className="text-xl font-bold mb-2">Market Analysis</h3>
                    <p className="text-gray-400">
                      The template includes frameworks for market sizing (TAM/SAM/SOM), competitive
                      analysis, and market trends assessment. Document your market research findings
                      and the insights that inform your go-to-market approach.
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
                    <h3 className="text-xl font-bold mb-2">Target Customer Definition</h3>
                    <p className="text-gray-400">
                      Define your ideal customer profile (ICP) and buyer personas using our structured
                      templates. The go-to-market strategy template helps you document demographics,
                      firmographics, pain points, buying behavior, and decision criteria.
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
                    <h3 className="text-xl font-bold mb-2">Positioning & Messaging</h3>
                    <p className="text-gray-400">
                      Our template includes positioning frameworks like the positioning statement
                      template and messaging hierarchy. Define your unique value proposition,
                      key messages, and competitive differentiation.
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
                    <h3 className="text-xl font-bold mb-2">Pricing Strategy</h3>
                    <p className="text-gray-400">
                      Document your pricing model, tiers, and packaging strategy. The go-to-market
                      strategy template includes competitive pricing analysis frameworks and value-based
                      pricing worksheets to help you optimize your monetization approach.
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
                    <h3 className="text-xl font-bold mb-2">Channel Strategy</h3>
                    <p className="text-gray-400">
                      Plan your distribution approach—direct sales, channel partners, self-serve,
                      or hybrid. Our template helps you evaluate channel options and document your
                      channel partner strategy and requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-orange-400 font-bold text-lg">7</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Marketing Plan</h3>
                    <p className="text-gray-400">
                      The go-to-market strategy template includes detailed marketing planning sections
                      covering content strategy, demand generation, brand launch activities, PR,
                      events, and digital marketing campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-orange-400 font-bold text-lg">8</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sales Strategy</h3>
                    <p className="text-gray-400">
                      Document your sales process, methodology, team structure, and enablement needs.
                      The template includes sales playbook frameworks, territory planning, and quota
                      setting guidelines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-orange-400 font-bold text-lg">9</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Launch Timeline</h3>
                    <p className="text-gray-400">
                      Plan your launch phases with our milestone-based timeline template. Track
                      pre-launch, launch, and post-launch activities with clear owners and deadlines.
                      Includes launch checklist and readiness assessment frameworks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-orange-400 font-bold text-lg">10</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Success Metrics</h3>
                    <p className="text-gray-400">
                      Define how you'll measure success with our KPI framework. The go-to-market
                      strategy template includes suggested metrics for each launch phase and tracking
                      dashboard templates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">How to Use This Go-To-Market Strategy Template</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-6">
                Follow these steps to get the most value from our go-to-market strategy template:
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Step 1: Start with Research</h3>
              <p className="text-gray-300 mb-4">
                Before filling in the go-to-market strategy template, gather the inputs you need.
                Conduct customer interviews, analyze competitors, and review market data. The quality
                of your GTM strategy depends on the quality of your research.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Step 2: Work Through Sections Sequentially</h3>
              <p className="text-gray-300 mb-4">
                The template sections build on each other. Start with market analysis and customer
                definition before moving to positioning and channel strategy. Each section informs
                the next, so resist the urge to jump around.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Step 3: Involve Your Team</h3>
              <p className="text-gray-300 mb-4">
                A go-to-market strategy template is most valuable as a collaborative tool. Involve
                product, marketing, sales, and customer success in the planning process. Different
                perspectives strengthen your strategy.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Step 4: Iterate and Refine</h3>
              <p className="text-gray-300 mb-4">
                Your first pass won't be perfect. Use the template to capture initial thinking,
                then refine as you learn more. A good go-to-market strategy evolves as you validate
                assumptions and gather feedback.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Step 5: Keep It Living</h3>
              <p className="text-gray-300 mb-4">
                Don't let your go-to-market strategy template become a static document. Update it
                as market conditions change, you learn from launch results, or your strategy evolves.
                Review and refresh quarterly at minimum.
              </p>
            </div>
          </div>
        </section>

        {/* Template Types */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">Go-To-Market Strategy Template Variations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-orange-400">SaaS GTM Template</h3>
                <p className="text-gray-400 mb-3">
                  Optimized for software-as-a-service launches with sections on pricing tiers,
                  product-led vs sales-led motions, and SaaS-specific metrics like CAC, LTV,
                  and net revenue retention.
                </p>
                <Link href="/saas-gtm-plan" className="text-orange-400 hover:text-orange-300 text-sm">
                  View SaaS GTM Guide →
                </Link>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-amber-400">B2B GTM Template</h3>
                <p className="text-gray-400 mb-3">
                  Designed for business-to-business launches with emphasis on account-based
                  marketing, complex sales cycles, multiple stakeholders, and enterprise
                  go-to-market considerations.
                </p>
                <Link href="/b2b-go-to-market-strategy" className="text-amber-400 hover:text-amber-300 text-sm">
                  View B2B GTM Guide →
                </Link>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Startup GTM Template</h3>
                <p className="text-gray-400 mb-3">
                  Streamlined template for early-stage companies focused on finding product-market
                  fit, validating assumptions quickly, and building repeatable go-to-market
                  processes with limited resources.
                </p>
                <Link href="/gtm-strategy" className="text-yellow-400 hover:text-yellow-300 text-sm">
                  View GTM Strategy Guide →
                </Link>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-orange-300">Enterprise GTM Template</h3>
                <p className="text-gray-400 mb-3">
                  Comprehensive template for large organizations with sections on cross-functional
                  alignment, global market considerations, and integration with existing product
                  portfolios.
                </p>
                <Link href="/directory" className="text-orange-300 hover:text-orange-200 text-sm">
                  Find Enterprise GTM Experts →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI Generator CTA */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl p-8">
              <div className="text-center">
                <h2 className="text-2xl font-black mb-4">Skip the Template—Generate Your GTM Strategy Instantly</h2>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Instead of manually filling out a go-to-market strategy template, use our AI-powered
                  GTM planner to generate a customized strategy in minutes. Just answer a few questions
                  about your product and market.
                </p>
                <Link href="/#planner" className="inline-flex px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-bold hover:opacity-90 transition">
                  Generate Your GTM Strategy Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Build Your Go-To-Market Strategy?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Use our AI-powered generator for instant results, or connect with GTM experts who
              can help you develop a comprehensive go-to-market strategy.
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
