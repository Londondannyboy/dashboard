import { Metadata } from 'next'
import { HeaderWrapper, FooterWrapper } from '../components/LayoutWrappers'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best GTM Agency | Top Go-To-Market Agencies Ranked | GTM Quest',
  description: 'Find the best GTM agency for your product launch. Compare top go-to-market agencies by expertise, services, and client results. Expert rankings and reviews.',
  keywords: 'best GTM agency, top GTM agencies, best go-to-market agency, GTM agency comparison, GTM agency reviews, top go-to-market consultants',
  openGraph: {
    title: 'Best GTM Agency | Top Go-To-Market Agencies Ranked',
    description: 'Find the best GTM agency for your product launch. Compare top agencies.',
    url: 'https://gtm.quest/best-gtm-agency',
  },
}

export default function BestGTMAgencyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <HeaderWrapper />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full text-sm text-orange-300 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Expert Rankings
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">Best GTM Agency</h1>
            <p className="text-xl text-gray-400 mb-8">
              Looking for the best GTM agency for your product launch? We've analyzed hundreds of
              go-to-market agencies to help you find the perfect partner. Compare top GTM agencies
              by expertise, services, pricing, and proven results.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/directory" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold hover:opacity-90 transition">
                Browse All GTM Agencies
              </Link>
              <Link href="/#planner" className="px-6 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition">
                Free GTM Strategy Generator
              </Link>
            </div>
          </div>
        </section>

        {/* What Makes the Best GTM Agency */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">What Makes the Best GTM Agency?</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-4">
                The best GTM agency isn't necessarily the biggest or most expensive—it's the one
                that best fits your specific needs, industry, and growth stage. The top go-to-market
                agencies share several key characteristics that set them apart from the competition.
              </p>
              <p className="text-gray-300 mb-4">
                When evaluating GTM agencies, look for partners who combine strategic thinking with
                hands-on execution experience. The best GTM agency will have a proven track record
                of successful launches in your industry or adjacent markets, along with methodologies
                and frameworks that can be adapted to your unique situation.
              </p>
              <p className="text-gray-300 mb-4">
                Great GTM agencies also prioritize measurement and accountability. They establish clear
                KPIs upfront and tie their success to your business outcomes—not just deliverables
                or activity metrics. The best GTM agency partners become true extensions of your team.
              </p>
            </div>
          </div>
        </section>

        {/* Criteria */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8">How We Rank the Best GTM Agencies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-lg font-bold">1</div>
                  <h3 className="text-xl font-bold">Track Record</h3>
                </div>
                <p className="text-gray-400">We evaluate the best GTM agencies based on their history of successful product launches, client case studies, and measurable business outcomes achieved.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-lg font-bold">2</div>
                  <h3 className="text-xl font-bold">Industry Expertise</h3>
                </div>
                <p className="text-gray-400">The best GTM agency for you will have deep expertise in your specific industry, understanding its unique buyers, competitors, and go-to-market dynamics.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-lg font-bold">3</div>
                  <h3 className="text-xl font-bold">Service Breadth</h3>
                </div>
                <p className="text-gray-400">Top GTM agencies offer comprehensive services from strategy through execution. We assess the breadth and depth of their go-to-market capabilities.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-lg font-bold">4</div>
                  <h3 className="text-xl font-bold">Client Reviews</h3>
                </div>
                <p className="text-gray-400">We analyze client testimonials, reviews, and references to understand what it's really like to work with each GTM agency and the results they deliver.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-lg font-bold">5</div>
                  <h3 className="text-xl font-bold">Team Quality</h3>
                </div>
                <p className="text-gray-400">The best GTM agencies have experienced strategists and practitioners. We evaluate team backgrounds, expertise, and the talent assigned to client engagements.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-lg font-bold">6</div>
                  <h3 className="text-xl font-bold">Methodology</h3>
                </div>
                <p className="text-gray-400">Leading GTM agencies have proven frameworks and processes. We assess the rigor and effectiveness of their go-to-market methodologies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of GTM Agencies */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">Types of GTM Agencies</h2>
            <div className="prose prose-invert prose-orange max-w-none mb-8">
              <p className="text-gray-300 text-lg mb-4">
                Not all GTM agencies are the same. The best GTM agency for your needs depends on
                your specific situation, budget, and requirements. Here are the main types of
                go-to-market agencies to consider:
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-orange-400">Full-Service GTM Agencies</h3>
                <p className="text-gray-300 mb-3">
                  These GTM agencies handle everything from strategy development to execution. They're
                  ideal for companies that want a single partner to manage their entire go-to-market
                  process. The best full-service GTM agencies have teams covering research, strategy,
                  creative, demand generation, and sales enablement.
                </p>
                <p className="text-gray-400 text-sm">Best for: Companies launching new products or entering new markets who want comprehensive support.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-amber-400">Strategic GTM Consultancies</h3>
                <p className="text-gray-300 mb-3">
                  These GTM agencies focus primarily on strategy and planning, leaving execution to
                  your internal team or other partners. They typically employ senior strategists with
                  deep industry experience. The best strategic GTM agencies excel at market analysis,
                  positioning, and go-to-market planning.
                </p>
                <p className="text-gray-400 text-sm">Best for: Companies with strong internal execution capabilities who need strategic guidance.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Industry-Specialist GTM Agencies</h3>
                <p className="text-gray-300 mb-3">
                  These GTM agencies specialize in specific verticals like SaaS, healthcare, fintech,
                  or consumer products. They bring deep domain expertise and industry connections. The
                  best specialist GTM agencies have worked with dozens of companies in your exact space.
                </p>
                <p className="text-gray-400 text-sm">Best for: Companies in specialized industries where domain expertise is critical.</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-orange-300">Growth-Stage GTM Agencies</h3>
                <p className="text-gray-300 mb-3">
                  These GTM agencies specialize in working with startups and scale-ups at specific
                  growth stages. They understand the unique challenges of early-stage launches versus
                  expansion-stage scaling. The best growth-stage GTM agencies have startup experience
                  and understand resource constraints.
                </p>
                <p className="text-gray-400 text-sm">Best for: Startups and scale-ups looking for GTM partners who understand their stage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-16 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-6">How to Choose the Best GTM Agency for You</h2>
            <div className="prose prose-invert prose-orange max-w-none">
              <p className="text-gray-300 text-lg mb-6">
                Finding the best GTM agency requires careful evaluation beyond just rankings and
                reviews. Here's a framework for selecting the right go-to-market partner:
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Define Your Requirements</h3>
              <p className="text-gray-300 mb-4">
                Before searching for the best GTM agency, clarify what you need. Are you looking for
                end-to-end support or specific capabilities? What's your budget and timeline? What
                outcomes are you trying to achieve? The best GTM agency for one company may not be
                the best for another.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Evaluate Industry Fit</h3>
              <p className="text-gray-300 mb-4">
                The best GTM agency will have relevant experience in your industry or an adjacent
                space. Ask for case studies and references from similar companies. Look for agencies
                that understand your buyers, competitive landscape, and industry dynamics.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Assess Team Quality</h3>
              <p className="text-gray-300 mb-4">
                The best GTM agency is only as good as the team working on your account. Ask who will
                be assigned to your project and evaluate their experience. Beware of agencies that
                sell with senior people but staff with juniors.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Review Methodology</h3>
              <p className="text-gray-300 mb-4">
                Top GTM agencies have documented methodologies and frameworks. Ask about their approach
                to market research, positioning, launch planning, and execution. The best GTM agency
                will have a structured process that's been refined over many engagements.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Check References</h3>
              <p className="text-gray-300 mb-4">
                Always speak with past clients before selecting a GTM agency. Ask about results
                achieved, working style, communication, and whether they'd work with the agency again.
                The best GTM agencies will have enthusiastic references.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Find the Best GTM Agency for Your Launch</h2>
            <p className="text-xl text-gray-400 mb-8">
              Browse our curated directory of top GTM agencies, filtered by expertise, industry,
              and services. Or use our AI-powered planner to start building your strategy.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/directory" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-bold hover:opacity-90 transition">
                Browse GTM Agencies
              </Link>
              <Link href="/contact" className="px-8 py-4 border border-white/20 rounded-lg font-bold hover:bg-white/5 transition">
                Get Recommendations
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterWrapper />
    </div>
  )
}
