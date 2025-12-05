import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface GuideSection {
  title: string
  content: string
}

interface Guide {
  title: string
  description: string
  sections: GuideSection[]
}

const GUIDES: Record<string, Guide> = {
  'how-placement-agents-work': {
    title: 'How Placement Agents Work',
    description: 'A step-by-step guide to the PE fundraising process, from pitch development to final close.',
    sections: [
      {
        title: 'What is a Placement Agent?',
        content: `A placement agent is a specialized financial intermediary that helps private equity and venture capital fund managers raise capital from institutional investors. They act as the bridge between GPs (General Partners) seeking capital and LPs (Limited Partners) looking to deploy it.

Placement agents bring deep relationships with institutional investors, market intelligence, and fundraising expertise that most fund managers lack in-house. They're particularly valuable for emerging managers, first-time funds, and managers expanding into new investor segments.`
      },
      {
        title: 'The Fundraising Process',
        content: `**Phase 1: Preparation (2-3 months)**
- Assessment of fund strategy and positioning
- Development of marketing materials (PPM, pitch deck, DDQ)
- Competitive analysis and fee benchmarking
- Target LP identification and prioritization

**Phase 2: Pre-Marketing (1-2 months)**
- Soft market sounding with key LPs
- Refining messaging based on feedback
- Building initial momentum and anchor investor interest

**Phase 3: Active Marketing (6-12 months)**
- Formal roadshow and LP meetings
- Due diligence management
- Subscription document processing
- First close execution

**Phase 4: Final Close**
- Continuing marketing to reach target
- Managing final close timeline
- Post-close reporting`
      },
      {
        title: 'Key Services Provided',
        content: `**Strategic Advisory**
- Fund positioning and differentiation strategy
- Fee structure recommendations
- Market timing advice

**Marketing Execution**
- LP targeting and prioritization
- Meeting scheduling and logistics
- Presentation coaching
- DDQ and RFP support

**Relationship Leverage**
- Access to institutional investor networks
- Introduction facilitation
- Reference coordination

**Process Management**
- Pipeline tracking and reporting
- Due diligence coordination
- Legal documentation support`
      },
      {
        title: 'When to Use a Placement Agent',
        content: `**Ideal Scenarios:**
- First-time fund managers with limited LP relationships
- Established managers entering new geographic markets
- Funds targeting institutional investors for the first time
- Complex strategies requiring specialized investor education
- Time-sensitive raises requiring dedicated resources

**Consider DIY When:**
- Strong existing LP relationships
- Smaller fund targets under $100M
- Specialized strategy with known interested LPs
- Internal IR team with bandwidth and expertise`
      },
    ]
  },
  'choosing-a-placement-agent': {
    title: 'Choosing a Placement Agent',
    description: 'Key factors to consider when selecting the right placement agent for your fund.',
    sections: [
      {
        title: 'Evaluate Track Record',
        content: `Look for agents with demonstrable success in your specific:
- **Asset class** (PE, VC, credit, real estate, infrastructure)
- **Fund size range** (emerging vs. established managers)
- **Geographic focus** (regional specialists vs. global platforms)
- **Strategy type** (buyout, growth, venture, etc.)

Ask for specific case studies and references from managers similar to your profile. Request data on funds raised, time to close, and LP conversion rates.`
      },
      {
        title: 'Assess LP Relationships',
        content: `The quality of LP relationships matters more than quantity:
- **Depth**: How well do they know investment committee members?
- **Breadth**: Coverage across pension funds, endowments, foundations, family offices, sovereigns
- **Relevance**: Do they have relationships with LPs who invest in funds like yours?
- **Currency**: When did they last successfully place a similar fund?

Request a sample target list to evaluate their LP coverage for your specific mandate.`
      },
      {
        title: 'Consider Team Composition',
        content: `**Key questions:**
- Who will be your day-to-day contact?
- What's their personal track record?
- How many active mandates does the team manage?
- Will senior partners be involved throughout?

Beware of "bait and switch" where senior partners pitch but junior staff execute. Ensure contractual commitment to specific team members.`
      },
      {
        title: 'Understand the Fee Structure',
        content: `**Common models:**
- **Retainer + Success Fee**: Monthly retainer ($10-25K) plus success fee (1-2% of capital raised)
- **Success Fee Only**: Higher percentage (2-3%) but no upfront cost
- **Hybrid**: Reduced retainer with moderate success fee

**Key terms to negotiate:**
- Tail period (how long fees apply after engagement ends)
- LP exclusions (investors you brought yourself)
- Ratchets (fee reductions at different thresholds)
- MFN provisions`
      },
      {
        title: 'Red Flags to Watch',
        content: `- Overly optimistic timeline projections
- Reluctance to share references
- Unclear fee structures or hidden costs
- Taking on too many competing mandates
- Lack of sector or strategy expertise
- No clear differentiation from competitors
- High team turnover
- Poor communication during the pitch process`
      },
    ]
  },
  'placement-agent-fees': {
    title: 'Placement Agent Fees',
    description: 'Understanding fee structures, retainers, and success fees in PE fundraising.',
    sections: [
      {
        title: 'Fee Structure Overview',
        content: `Placement agent fees typically comprise two components:

**1. Retainer Fees**
- Monthly payments during the engagement period
- Range: $10,000 - $50,000/month depending on fund size and complexity
- Often credited against success fees
- Purpose: Cover agent's time and expenses

**2. Success Fees**
- Percentage of capital raised
- Range: 1.0% - 3.0% of committed capital
- Paid at closings (first, interim, final)
- May include ratchets or caps`
      },
      {
        title: 'Fee Benchmarks by Fund Size',
        content: `**Emerging Managers (<$250M)**
- Retainer: $15-25K/month
- Success fee: 2.0-2.5%
- Total cost: 2.5-3.5% all-in

**Mid-Market ($250M-$1B)**
- Retainer: $20-35K/month
- Success fee: 1.5-2.0%
- Total cost: 1.8-2.5% all-in

**Large Funds ($1B+)**
- Retainer: $25-50K/month
- Success fee: 1.0-1.5%
- Total cost: 1.2-1.8% all-in

Note: Rates vary by strategy, agent reputation, and market conditions.`
      },
      {
        title: 'Tail Provisions',
        content: `The "tail" is perhaps the most important fee term to negotiate. It determines how long the agent earns fees on LPs they introduced after the engagement ends.

**Standard terms:**
- 12-24 month tail period
- Applies to LPs on a named list
- Full success fee rate during tail

**Negotiation points:**
- Shorter tail (6-12 months)
- Declining fee rate over tail period
- Limited LP list size
- Active pursuit requirement`
      },
      {
        title: 'LP Exclusions',
        content: `Exclusions protect you from paying fees on investors you sourced independently:

**Types of exclusions:**
- Existing LPs (current fund investors)
- Pre-existing relationships (documented prior contact)
- Inbound inquiries (LPs who approached you directly)
- Geographic exclusions (if agent doesn't cover region)

**Best practices:**
- Document all LP relationships before engagement
- Define "introduction" clearly in contract
- Maintain detailed contact logs
- Review exclusion list quarterly`
      },
      {
        title: 'Additional Cost Considerations',
        content: `**Expense reimbursement:**
- Travel costs for meetings
- Marketing materials production
- Conference attendance
- Data room costs

**Hidden costs to watch:**
- Early termination penalties
- Minimum fee guarantees
- Administrative fees
- Extension fees if fund doesn't close on schedule

**Regulatory registration:**
- Some placements require agent to be registered
- FINRA-registered agents may have higher fees
- Non-US placements may require local registration`
      },
    ]
  },
  'what-do-placement-agents-do': {
    title: 'What Do Placement Agents Do?',
    description: 'A comprehensive overview of placement agent services and value proposition.',
    sections: [
      {
        title: 'Core Services',
        content: `**Capital Introduction**
The primary function: connecting fund managers with institutional investors who are actively deploying capital in their strategy.

**Marketing Support**
- Pitch deck refinement
- PPM and DDQ preparation
- Investment presentation coaching
- Market positioning advice

**Process Management**
- Roadshow coordination
- Meeting scheduling and follow-up
- Due diligence facilitation
- Legal documentation support`
      },
      {
        title: 'Strategic Advisory',
        content: `Beyond introductions, top agents provide strategic counsel:

**Market Intelligence**
- LP appetite by strategy and geography
- Competitive positioning analysis
- Timing recommendations
- Fee benchmarking

**Fund Structuring**
- Terms and conditions advice
- Co-investment provisions
- Fee structures
- Governance considerations

**Investor Feedback**
- Real-time market reactions
- Competitive intelligence
- Objection handling strategies`
      },
      {
        title: 'LP Relationship Development',
        content: `**Access to Decision Makers**
- Direct relationships with CIOs and investment committees
- Understanding of LP investment processes and timelines
- Knowledge of current allocation priorities

**Credibility Transfer**
- Agent endorsement signals quality
- Track record validation
- Reference coordination
- Due diligence facilitation

**Long-term Relationship Building**
- Introduction to new LP relationships
- Ongoing investor relations support
- Re-up and follow-on fund assistance`
      },
      {
        title: 'Types of Placement Agents',
        content: `**Full-Service Global Firms**
- Comprehensive coverage across geographies and LP types
- Deep resources and infrastructure
- Higher fees, selective on mandates
- Examples: PJT Partners, Evercore, Credit Suisse

**Specialist Boutiques**
- Focus on specific strategies or LP segments
- Deep expertise in niche areas
- More flexible terms
- Often better for emerging managers

**Regional Specialists**
- Geographic focus (Europe, Asia, Middle East)
- Strong local LP relationships
- Often used alongside global agents
- Essential for international fundraising`
      },
      {
        title: 'When Agents Add Most Value',
        content: `**High value scenarios:**
- First-time funds without institutional LP base
- New strategies requiring investor education
- Expansion into new geographies
- Time-sensitive fundraising situations
- Complex or differentiated strategies

**The ROI calculation:**
Consider: Would you raise more capital, faster, or from higher-quality LPs with an agent versus going it alone? The fee should be viewed against incremental capital raised and time saved, not as a cost of capital you would have raised anyway.`
      },
    ]
  },
}

export function generateStaticParams() {
  return Object.keys(GUIDES).map((slug) => ({ slug }))
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = GUIDES[slug]

  if (!guide) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="PVC"
        brandAccent="Quest"
        brandGradient="from-indigo-400 to-purple-500"
        signInGradient="from-indigo-500 to-purple-500"
        navItems={[
          { href: '/private-equity-placement-agent-news', label: 'News' },
          { href: '/private-equity-placement-agents-list', label: 'Directory' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/resources', label: 'Resources', highlight: true },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-16 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-transparent" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/resources" className="text-indigo-400 hover:text-indigo-300 transition">
                Resources
              </Link>
              <span className="text-gray-600">/</span>
              <span className="text-gray-400">Guide</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6">
              {guide.title}
            </h1>

            <p className="text-xl text-gray-300">
              {guide.description}
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="px-6 py-8 border-b border-white/10 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              In this guide
            </h2>
            <div className="flex flex-wrap gap-2">
              {guide.sections.map((section, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {guide.sections.map((section, index) => (
              <div
                key={index}
                id={`section-${index}`}
                className="mb-12 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="prose prose-lg prose-invert prose-indigo max-w-none">
                  {section.content.split('\n\n').map((paragraph, pIndex) => {
                    if (paragraph.startsWith('**') && paragraph.includes('**\n')) {
                      // List with header
                      const lines = paragraph.split('\n')
                      const header = lines[0].replace(/\*\*/g, '')
                      const items = lines.slice(1).filter(l => l.startsWith('- '))
                      return (
                        <div key={pIndex} className="mb-4">
                          <h4 className="font-semibold text-white mb-2">{header}</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {items.map((item, iIndex) => (
                              <li key={iIndex}>{item.replace('- ', '')}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    } else if (paragraph.startsWith('- ')) {
                      // Simple list
                      const items = paragraph.split('\n').filter(l => l.startsWith('- '))
                      return (
                        <ul key={pIndex} className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                          {items.map((item, iIndex) => (
                            <li key={iIndex}>{item.replace('- ', '')}</li>
                          ))}
                        </ul>
                      )
                    } else {
                      // Regular paragraph
                      return (
                        <p key={pIndex} className="text-gray-300 mb-4 leading-relaxed">
                          {paragraph.split('**').map((part, partIndex) =>
                            partIndex % 2 === 1 ? (
                              <strong key={partIndex} className="text-white font-semibold">{part}</strong>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      )
                    }
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section className="px-6 py-12 bg-white/[0.02] border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(GUIDES)
                .filter(([key]) => key !== slug)
                .slice(0, 2)
                .map(([key, relatedGuide]) => (
                  <Link
                    key={key}
                    href={`/resources/${key}`}
                    className="group p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] transition"
                  >
                    <h3 className="font-semibold group-hover:text-indigo-400 transition mb-1">
                      {relatedGuide.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{relatedGuide.description}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Agent?</h2>
            <p className="text-gray-400 mb-8">
              Browse our comprehensive directory of placement agents or use our AI assistant.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/private-equity-placement-agents-list"
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition"
              >
                Browse Directory
              </Link>
              <Link
                href="/voice"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Ask AI
              </Link>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="PVC"
        brandAccent="Quest"
        brandGradient="from-indigo-400 to-purple-500"
        brandDescription="The insider guide to venture capital"
        productLinks={[
          { label: 'Directory', href: '/private-equity-placement-agents-list' },
          { label: 'Network', href: '/ecosystem' },
          { label: 'News', href: '/private-equity-placement-agent-news' },
        ]}
        companyLinks={[
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Privacy', href: '/privacy' },
        ]}
      />
    </div>
  )
}
