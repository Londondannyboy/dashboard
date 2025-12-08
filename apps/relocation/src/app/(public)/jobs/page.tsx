import { Metadata } from 'next'
import Link from 'next/link'
import { StaticHeader } from '@/components/StaticHeader'
import { StaticFooter } from '@/components/StaticFooter'

export const metadata: Metadata = {
  title: 'Jobs with Relocation Assistance | Find Companies That Pay to Move | Relocation Quest',
  description: 'Find jobs with relocation assistance and companies that offer relocation packages. Learn which industries offer the best relocation benefits and how to negotiate moving expenses.',
  keywords: ['jobs with relocation assistance', 'relocation assistance jobs', 'companies that offer relocation packages', 'jobs that pay for relocation', 'relocation benefits jobs'],
  alternates: {
    canonical: 'https://relocation.quest/jobs',
  },
  openGraph: {
    title: 'Jobs with Relocation Assistance - Companies That Pay to Move',
    description: 'Discover companies offering relocation packages and learn how to find jobs that cover your moving costs.',
    type: 'website',
    url: 'https://relocation.quest/jobs',
  },
}

const industriesWithRelocation = [
  {
    icon: '💻',
    industry: 'Technology',
    percentage: '75%',
    description: 'Tech companies lead in relocation benefits, often offering comprehensive packages for software engineers, data scientists, and tech managers.',
    companies: ['Google', 'Microsoft', 'Amazon', 'Apple', 'Meta'],
  },
  {
    icon: '🏥',
    industry: 'Healthcare',
    percentage: '65%',
    description: 'Hospitals and healthcare systems frequently offer relocation assistance to attract doctors, nurses, and specialists to underserved areas.',
    companies: ['Kaiser Permanente', 'HCA Healthcare', 'Mayo Clinic'],
  },
  {
    icon: '🏦',
    industry: 'Finance & Banking',
    percentage: '60%',
    description: 'Financial institutions provide relocation packages for analysts, traders, and management positions, especially for headquarters roles.',
    companies: ['Goldman Sachs', 'JP Morgan', 'Morgan Stanley'],
  },
  {
    icon: '🔬',
    industry: 'Consulting',
    percentage: '70%',
    description: 'Consulting firms typically offer strong relocation benefits as travel and mobility are core to the business model.',
    companies: ['McKinsey', 'BCG', 'Bain', 'Deloitte', 'Accenture'],
  },
  {
    icon: '🛢️',
    industry: 'Energy & Oil',
    percentage: '80%',
    description: 'Energy companies offer some of the most generous relocation packages due to remote project locations.',
    companies: ['ExxonMobil', 'Chevron', 'Shell', 'BP'],
  },
  {
    icon: '🎓',
    industry: 'Higher Education',
    percentage: '50%',
    description: 'Universities often provide relocation assistance for faculty positions, research roles, and senior administrative positions.',
    companies: ['Major Universities', 'Research Institutions'],
  },
]

const packageComponents = [
  { icon: '🚚', title: 'Moving Costs', description: 'Full-service moving company, packing, and shipping of belongings' },
  { icon: '🏠', title: 'Temporary Housing', description: '30-90 days of temporary housing while you find permanent accommodation' },
  { icon: '✈️', title: 'House-Hunting Trip', description: 'Paid trip to explore your new city and find housing' },
  { icon: '🏡', title: 'Home Sale Assistance', description: 'Help selling your current home or breaking your lease' },
  { icon: '💵', title: 'Lump Sum Payment', description: 'Cash payment to cover miscellaneous relocation expenses' },
  { icon: '📋', title: 'Destination Services', description: 'Help with schools, spouse employment, and settling in' },
]

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-white">
      <StaticHeader
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
        signInGradient="from-indigo-500 to-purple-600"
        navItems={[
          { href: '/articles', label: 'Articles' },
          { href: '/jobs', label: 'Jobs', highlight: true },
          { href: '/chat', label: 'Chat' },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
              Career Opportunities
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Jobs with{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Relocation Assistance
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Looking for a job that will pay for your move? Discover which companies and industries
              offer the best relocation packages, and learn how to negotiate moving benefits.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-emerald-500/25"
              >
                Get Career Advice 💬
              </Link>
              <Link
                href="/voice"
                className="inline-flex items-center gap-2 border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition"
              >
                Voice Assistant 🎙️
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Industries That Offer Relocation Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            These industries are most likely to offer relocation assistance to new hires.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesWithRelocation.map((item) => (
              <div
                key={item.industry}
                className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="text-2xl font-black text-emerald-600">{item.percentage}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.industry}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-1">
                  {item.companies.map((company) => (
                    <span
                      key={company}
                      className="px-2 py-1 bg-white rounded text-xs text-gray-600 border"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            What&apos;s Included in Relocation Packages
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Understand what you can negotiate for in your relocation benefits.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packageComponents.map((component) => (
              <div
                key={component.title}
                className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-emerald-300 transition"
              >
                <span className="text-3xl mb-4 block">{component.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{component.title}</h3>
                <p className="text-gray-600 text-sm">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How to Negotiate Relocation Assistance
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                title: 'Research Market Standards',
                description: 'Know what similar companies offer for relocation. This gives you leverage in negotiations.',
              },
              {
                title: 'Ask Early in the Process',
                description: 'Bring up relocation during salary negotiations, not after accepting the offer.',
              },
              {
                title: 'Get Everything in Writing',
                description: 'Ensure all relocation benefits are documented in your offer letter or employment contract.',
              },
              {
                title: 'Consider Tax Implications',
                description: 'Some relocation benefits are taxable. Ask about gross-up provisions to cover taxes.',
              },
              {
                title: 'Negotiate Flexibility',
                description: 'If the company can\'t increase the package, ask for timeline flexibility or additional benefits.',
              },
            ].map((tip, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-gray-50 rounded-2xl"
              >
                <span className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-teal-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Finding Jobs with Relocation?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our AI assistant can help you identify companies offering relocation packages in your
            industry and advise on negotiation strategies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
            >
              Get Career Guidance 💬
            </Link>
            <Link
              href="/voice"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Voice Assistant 🎙️
            </Link>
          </div>
        </div>
      </section>

      <StaticFooter
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
        links={[
          { href: '/articles', label: 'Articles' },
          { href: '/jobs', label: 'Jobs' },
          { href: '/calculator', label: 'Calculator' },
          { href: '/privacy', label: 'Privacy' },
        ]}
      />
    </main>
  )
}
