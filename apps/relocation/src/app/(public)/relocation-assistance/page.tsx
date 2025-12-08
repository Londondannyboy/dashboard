import { Metadata } from 'next'
import Link from 'next/link'
import { StaticHeader } from '@/components/StaticHeader'
import { StaticFooter } from '@/components/StaticFooter'

export const metadata: Metadata = {
  title: 'Relocation Assistance Programs & Services | Relocation Quest',
  description: 'Find relocation assistance programs, government grants, and employer relocation packages. Learn about out-of-state assistance, international moving support, and corporate relocation benefits.',
  keywords: ['relocation assistance', 'relocation assistance programs', 'government relocation assistance', 'out of state relocation assistance', 'corporate relocation packages', 'employer relocation benefits'],
  alternates: {
    canonical: 'https://relocation.quest/relocation-assistance',
  },
  openGraph: {
    title: 'Relocation Assistance Programs & Services',
    description: 'Discover relocation assistance programs, government grants, and employer packages to help fund your move.',
    type: 'website',
    url: 'https://relocation.quest/relocation-assistance',
  },
}

const assistanceTypes = [
  {
    icon: '🏛️',
    title: 'Government Assistance Programs',
    description: 'Federal and state programs that provide financial assistance for relocation, including housing vouchers and moving grants.',
    examples: ['HUD Housing Choice Vouchers', 'State Workforce Programs', 'Veteran Relocation Benefits'],
  },
  {
    icon: '🏢',
    title: 'Corporate Relocation Packages',
    description: 'Employer-sponsored relocation benefits that cover moving costs, temporary housing, and settling-in expenses.',
    examples: ['Moving Cost Reimbursement', 'House-Hunting Trips', 'Temporary Housing'],
  },
  {
    icon: '🌍',
    title: 'International Relocation Support',
    description: 'Comprehensive support for international moves including visa assistance, cultural training, and destination services.',
    examples: ['Visa & Immigration Support', 'Language Training', 'Cultural Orientation'],
  },
  {
    icon: '💰',
    title: 'Relocation Grants & Loans',
    description: 'Financial assistance options including grants, low-interest loans, and tax benefits for qualifying relocations.',
    examples: ['First-Time Mover Grants', 'Employer Advance Programs', 'Tax Deductions'],
  },
]

const faqItems = [
  {
    question: 'What is relocation assistance?',
    answer: 'Relocation assistance refers to support services and financial help provided to individuals or families moving to a new location. This can include direct payments, reimbursements, professional services, and logistical support.',
  },
  {
    question: 'Who qualifies for government relocation assistance?',
    answer: 'Eligibility varies by program. Common qualifications include low-income status, employment-related moves, veteran status, or participation in workforce development programs. Our AI assistant can help identify programs you may qualify for.',
  },
  {
    question: 'How much do employer relocation packages typically cover?',
    answer: 'Corporate relocation packages vary widely, typically ranging from $5,000 to $100,000+ depending on position level and company policy. Common inclusions are moving costs, temporary housing, and closing costs on home sales.',
  },
  {
    question: 'Can I get help with out-of-state relocation?',
    answer: 'Yes! Many programs specifically help with interstate moves. Some states offer incentives to attract workers, and federal programs assist with long-distance relocations for employment.',
  },
]

export default function RelocationAssistancePage() {
  return (
    <main className="min-h-screen bg-white">
      <StaticHeader
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
        signInGradient="from-indigo-500 to-purple-600"
        navItems={[
          { href: '/articles', label: 'Articles' },
          { href: '/relocation-assistance', label: 'Assistance', highlight: true },
          { href: '/chat', label: 'Chat' },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Financial Support Guide
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Relocation{' '}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Assistance
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover programs and services that can help fund your relocation. From government grants
              to employer packages, learn about financial assistance options available for your move.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-blue-500/25"
              >
                Find Programs for Me 💬
              </Link>
              <Link
                href="/voice"
                className="inline-flex items-center gap-2 border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition"
              >
                Speak to AI Assistant 🎙️
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Assistance Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Types of Relocation Assistance
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Understanding the different types of assistance available can help you maximize
            support for your relocation.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {assistanceTypes.map((type) => (
              <div
                key={type.title}
                className="p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition"
              >
                <span className="text-5xl mb-6 block">{type.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example) => (
                    <span
                      key={example}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '40%', label: 'of companies offer relocation packages' },
              { value: '$7,500', label: 'average employer relocation benefit' },
              { value: '50+', label: 'government assistance programs' },
              { value: '3.5M', label: 'people relocate for work annually' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="p-6 bg-gray-50 rounded-2xl"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Relocation Assistance Checklist
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Follow these steps to maximize your relocation assistance benefits.
          </p>
          <div className="max-w-2xl mx-auto">
            {[
              'Research government programs in your origin and destination states',
              'Ask your employer about relocation benefits during job negotiations',
              'Check if you qualify for any tax deductions for moving expenses',
              'Explore veteran benefits if applicable',
              'Look into professional relocation services covered by assistance',
              'Document all relocation expenses for reimbursement claims',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white rounded-xl mb-3 border"
              >
                <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-gray-700 pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-indigo-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Find Relocation Assistance Programs You Qualify For
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our AI assistant can help identify government programs, employer benefits, and other
            assistance options based on your specific situation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
            >
              Check My Eligibility 💬
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
          { href: '/calculator', label: 'Calculator' },
          { href: '/relocation-assistance', label: 'Assistance' },
          { href: '/privacy', label: 'Privacy' },
        ]}
      />
    </main>
  )
}
