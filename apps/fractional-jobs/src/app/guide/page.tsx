import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Find Fractional Jobs | Complete Guide to Getting Fractional Work | Fractional Quest',
  description: 'Learn how to find fractional jobs in the UK. Step-by-step guide to building a fractional executive career, finding clients, and getting fractional work.',
  keywords: 'how to find fractional jobs, get fractional jobs, find fractional jobs, fractional jobs meaning, what are fractional jobs, how to become fractional executive, fractional career guide',
}

const steps = [
  {
    number: 1,
    title: 'Define Your Fractional Offering',
    description: 'Identify your core expertise and the specific value you can deliver. Are you a CFO who specialises in fundraising? A CMO with D2C experience? A CTO who builds engineering teams? Define your niche.',
    tips: [
      'Focus on 2-3 core competencies',
      'Identify industries where you have deep experience',
      'Consider company stages you work best with (startup, scale-up, established)',
    ],
  },
  {
    number: 2,
    title: 'Build Your Fractional Brand',
    description: 'Position yourself as a fractional executive, not someone "looking for work." Update your LinkedIn, create a simple website, and develop a clear value proposition.',
    tips: [
      'Update LinkedIn headline to include "Fractional [Role]"',
      'Share insights and thought leadership',
      'Collect testimonials from previous employers/clients',
    ],
  },
  {
    number: 3,
    title: 'Tap Into Your Network',
    description: 'Most fractional opportunities come through referrals. Let your network know you\'re available for fractional work and the types of companies you want to work with.',
    tips: [
      'Reach out to investors, founders, and executives you know',
      'Join fractional executive communities',
      'Attend industry events and networking sessions',
    ],
  },
  {
    number: 4,
    title: 'Register With Fractional Agencies',
    description: 'Fractional recruitment agencies specialise in placing executives in part-time roles. Register with several agencies that focus on your function and target industries.',
    tips: [
      'Research agencies that specialise in your role (CFO, CMO, CTO)',
      'Prepare a clear pitch about your fractional offering',
      'Be specific about your availability and ideal client profile',
    ],
  },
  {
    number: 5,
    title: 'Apply for Fractional Roles',
    description: 'Actively search and apply for fractional opportunities on job boards, company websites, and through direct outreach to companies that might need your expertise.',
    tips: [
      'Set up alerts for fractional jobs in your function',
      'Research companies that recently raised funding',
      'Reach out to companies before they advertise roles',
    ],
  },
  {
    number: 6,
    title: 'Negotiate Your Engagement',
    description: 'Once you have interest, negotiate the scope, commitment level, day rate, and contract terms. Be clear about what\'s included and what\'s not.',
    tips: [
      'Agree on specific deliverables and outcomes',
      'Set clear expectations about availability',
      'Consider a trial period before longer commitment',
    ],
  },
]

const faqs = [
  {
    q: 'What are fractional jobs?',
    a: 'Fractional jobs are part-time executive roles where you work with a company for a fraction of the week—typically 1-3 days. Unlike interim or contract roles, fractional positions are ongoing relationships where you provide strategic leadership as a member of the leadership team, just on a part-time basis.',
  },
  {
    q: 'What does "fractional" mean in fractional jobs?',
    a: '"Fractional" means you work a fraction of a full-time schedule. Instead of being a full-time CFO at one company, you might be a Fractional CFO working 2 days/week with 2-3 companies simultaneously. Each company gets a "fraction" of your time.',
  },
  {
    q: 'How much experience do I need for fractional jobs?',
    a: 'Most fractional executive roles require 15+ years of experience with at least 5 years at a senior/executive level. Companies hire fractional executives for their expertise and ability to deliver results quickly—you need to be able to add value from day one.',
  },
  {
    q: 'How do I price myself for fractional work?',
    a: 'Fractional executives typically charge day rates ranging from £600-£1,500 depending on role, seniority, and industry. Research rates for your function, consider your experience level, and factor in that you\'re providing senior expertise without benefits or job security.',
  },
  {
    q: 'Can I work with multiple clients as a fractional executive?',
    a: 'Yes, most fractional executives work with 2-4 clients simultaneously. This is one of the key benefits of fractional work—you diversify your income and experience. Just be careful not to overcommit and ensure you can deliver quality work for each client.',
  },
  {
    q: 'What\'s the difference between fractional and interim?',
    a: 'Interim roles are typically full-time, short-term engagements to cover a gap (maternity leave, executive departure). Fractional roles are part-time, ongoing relationships where you work 1-3 days per week indefinitely. Fractional executives usually have multiple clients; interim executives have one.',
  },
]

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-violet-900">Fractional</span>
              <span className="text-2xl font-black bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Quest</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/jobs" className="text-gray-700 hover:text-violet-900 font-medium">All Jobs</Link>
              <Link href="/remote" className="text-gray-700 hover:text-violet-900 font-medium">Remote</Link>
              <Link href="/london" className="text-gray-700 hover:text-violet-900 font-medium">London</Link>
              <Link href="/agencies" className="text-gray-700 hover:text-violet-900 font-medium">Agencies</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/jobs" className="bg-violet-700 hover:bg-violet-800 text-white font-semibold px-5 py-2 rounded-lg transition">
                Find Jobs
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="hero-gradient py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              How to Find Fractional Jobs
            </h1>
            <p className="text-xl text-violet-100 max-w-3xl mx-auto">
              A complete guide to building a successful fractional executive career.
              Learn what fractional jobs are, how to position yourself, and where to find opportunities.
            </p>
          </div>
        </section>

        {/* What Are Fractional Jobs Section */}
        <section className="py-16 px-4 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">
              What Are Fractional Jobs?
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Fractional jobs</strong> are part-time executive roles where experienced professionals
                work with companies for a fraction of the week—typically 1-3 days. Instead of hiring a full-time
                CFO, CMO, or CTO, companies engage a <strong>fractional executive</strong> who provides the same
                strategic leadership on a part-time basis.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Part-Time</h3>
                  <p className="text-sm text-gray-600">Work 1-3 days per week per client</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Multiple Clients</h3>
                  <p className="text-sm text-gray-600">Work with 2-4 companies simultaneously</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Strategic Impact</h3>
                  <p className="text-sm text-gray-600">Executive-level leadership and decisions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">
              How to Get Fractional Jobs: Step-by-Step
            </h2>
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-violet-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-violet-700 mt-1">✓</span>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Find Fractional Jobs */}
        <section className="py-16 px-4 bg-violet-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-8 text-center">
              Where to Find Fractional Jobs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="font-bold text-white text-lg mb-3">Job Boards & Platforms</h3>
                <ul className="space-y-2 text-violet-100">
                  <li>• Fractional Quest (you&apos;re here!)</li>
                  <li>• LinkedIn Jobs (search "fractional")</li>
                  <li>• Specialised fractional platforms</li>
                  <li>• Executive job boards</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="font-bold text-white text-lg mb-3">Recruitment Agencies</h3>
                <ul className="space-y-2 text-violet-100">
                  <li>• Fractional-specialist agencies</li>
                  <li>• Executive search firms</li>
                  <li>• Industry-specific recruiters</li>
                  <li>• Interim management agencies</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="font-bold text-white text-lg mb-3">Direct Outreach</h3>
                <ul className="space-y-2 text-violet-100">
                  <li>• Contact companies directly</li>
                  <li>• Reach out to investors/VCs</li>
                  <li>• Connect with founders</li>
                  <li>• Join startup communities</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="font-bold text-white text-lg mb-3">Your Network</h3>
                <ul className="space-y-2 text-violet-100">
                  <li>• Former colleagues and bosses</li>
                  <li>• Industry connections</li>
                  <li>• Professional associations</li>
                  <li>• Alumni networks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
              Frequently Asked Questions About Fractional Jobs
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-xl px-6 py-5 group border border-gray-200">
                  <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.q}
                    <span className="text-violet-700 group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <p className="text-gray-600 mt-4 pt-4 border-t border-gray-200">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Ready to Find Fractional Jobs?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Browse the latest fractional opportunities across the UK.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/jobs" className="bg-violet-700 hover:bg-violet-800 text-white font-bold px-8 py-4 rounded-lg transition">
                Browse All Jobs
              </Link>
              <Link href="/agencies" className="bg-white text-violet-700 border-2 border-violet-700 hover:bg-violet-50 font-bold px-8 py-4 rounded-lg transition">
                Find Agencies
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-black text-white">Fractional</span>
              <span className="text-xl font-black text-amber-400">Quest</span>
            </Link>
            <p className="text-gray-400 text-sm">
              &copy; 2025 Fractional Quest. How to Find Fractional Jobs.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
