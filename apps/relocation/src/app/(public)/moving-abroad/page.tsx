import { Metadata } from 'next'
import Link from 'next/link'
import { StaticHeader } from '@/components/StaticHeader'
import { StaticFooter } from '@/components/StaticFooter'

export const metadata: Metadata = {
  title: 'Moving Abroad Guide | International Relocation Checklist | Relocation Quest',
  description: 'Complete guide to moving abroad with step-by-step checklist. Learn about visa requirements, international shipping, healthcare, banking, and settling in a new country.',
  keywords: ['moving abroad', 'moving abroad checklist', 'relocating to another country', 'international relocation guide', 'expat moving guide', 'how to move overseas'],
  alternates: {
    canonical: 'https://relocation.quest/moving-abroad',
  },
  openGraph: {
    title: 'Moving Abroad Guide - Complete International Relocation Checklist',
    description: 'Everything you need to know about moving to another country. Visa, housing, healthcare, banking, and more.',
    type: 'website',
    url: 'https://relocation.quest/moving-abroad',
  },
}

const checklistCategories = [
  {
    icon: '📋',
    title: '3-6 Months Before',
    color: 'from-purple-500 to-violet-500',
    items: [
      'Research visa requirements for your destination country',
      'Start gathering documents (birth certificates, diplomas, etc.)',
      'Get documents apostilled or translated if needed',
      'Research cost of living and create a budget',
      'Begin decluttering and deciding what to ship',
      'Research international health insurance options',
    ],
  },
  {
    icon: '📦',
    title: '1-3 Months Before',
    color: 'from-blue-500 to-cyan-500',
    items: [
      'Apply for visa or work permit',
      'Get quotes from international moving companies',
      'Book international shipping for belongings',
      'Notify banks, subscriptions, and services',
      'Schedule medical and dental checkups',
      'Research housing options in your destination',
    ],
  },
  {
    icon: '✈️',
    title: '1-4 Weeks Before',
    color: 'from-emerald-500 to-teal-500',
    items: [
      'Confirm moving company pickup date',
      'Set up mail forwarding',
      'Download offline maps and translation apps',
      'Copy important documents digitally',
      'Arrange temporary accommodation if needed',
      'Say goodbye to friends and family',
    ],
  },
  {
    icon: '🏠',
    title: 'After Arrival',
    color: 'from-amber-500 to-orange-500',
    items: [
      'Register with local authorities if required',
      'Open a local bank account',
      'Get a local phone number/SIM card',
      'Register for healthcare system',
      'Find permanent housing if in temporary',
      'Connect with expat communities',
    ],
  },
]

const popularCountries = [
  { country: 'United Kingdom', flag: '🇬🇧', visa: 'Skilled Worker Visa', healthcare: 'NHS' },
  { country: 'Germany', flag: '🇩🇪', visa: 'EU Blue Card', healthcare: 'Public/Private Mix' },
  { country: 'Spain', flag: '🇪🇸', visa: 'Digital Nomad Visa', healthcare: 'Public Sistema Nacional' },
  { country: 'Portugal', flag: '🇵🇹', visa: 'D7 or Digital Nomad', healthcare: 'SNS Public System' },
  { country: 'Netherlands', flag: '🇳🇱', visa: 'Highly Skilled Migrant', healthcare: 'Mandatory Private' },
  { country: 'Australia', flag: '🇦🇺', visa: 'Skilled Independent', healthcare: 'Medicare' },
]

export default function MovingAbroadPage() {
  return (
    <main className="min-h-screen bg-white">
      <StaticHeader
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
        signInGradient="from-indigo-500 to-purple-600"
        navItems={[
          { href: '/articles', label: 'Articles' },
          { href: '/moving-abroad', label: 'Guide', highlight: true },
          { href: '/chat', label: 'Chat' },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              Complete Guide
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Moving{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Abroad
              </span>{' '}
              Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Planning to relocate to another country? Our comprehensive guide covers everything
              from visas and shipping to healthcare and banking. Plus, use our AI assistant
              for personalized advice.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-purple-500/25"
              >
                Get Personalized Guide 💬
              </Link>
              <Link
                href="/voice"
                className="inline-flex items-center gap-2 border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition"
              >
                Talk to AI Assistant 🎙️
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Checklist */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Moving Abroad Checklist
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Follow this timeline to ensure you don&apos;t miss any important steps in your
            international relocation.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {checklistCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 bg-gray-50 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className={`w-5 h-5 rounded bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Countries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Popular Destinations for Expats
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Quick overview of visa and healthcare options for popular relocation destinations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCountries.map((item) => (
              <Link
                key={item.country}
                href={`/articles?country=${item.country.toLowerCase()}`}
                className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{item.flag}</span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition">
                    {item.country}
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Popular Visa:</span>
                    <span className="text-gray-900 font-medium">{item.visa}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Healthcare:</span>
                    <span className="text-gray-900 font-medium">{item.healthcare}</span>
                  </div>
                </div>
                <div className="mt-4 text-purple-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View guides <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Considerations When Moving Abroad
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛂', title: 'Visa & Work Permits', description: 'Understand entry requirements and work authorization for your destination.' },
              { icon: '🏥', title: 'Healthcare', description: 'Research public vs private healthcare options and insurance requirements.' },
              { icon: '🏦', title: 'Banking & Finance', description: 'Learn about international transfers, local accounts, and tax implications.' },
              { icon: '📱', title: 'Connectivity', description: 'Phone plans, internet options, and staying connected with home.' },
              { icon: '🏠', title: 'Housing', description: 'Rental markets, tenant rights, and finding accommodation remotely.' },
              { icon: '💼', title: 'Employment', description: 'Job market, salary expectations, and working legally abroad.' },
              { icon: '🎓', title: 'Education', description: 'School options for children, language requirements, and qualifications.' },
              { icon: '🌐', title: 'Culture & Language', description: 'Cultural adjustment, language learning, and expat communities.' },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition"
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Your Personalized Moving Abroad Guide
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our AI assistant creates customized relocation plans based on your destination,
            timeline, and personal circumstances.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
            >
              Create My Plan 💬
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
          { href: '/moving-abroad', label: 'Guide' },
          { href: '/calculator', label: 'Calculator' },
          { href: '/privacy', label: 'Privacy' },
        ]}
      />
    </main>
  )
}
