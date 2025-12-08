import { Metadata } from 'next'
import Link from 'next/link'
import { StaticHeader } from '@/components/StaticHeader'
import { StaticFooter } from '@/components/StaticFooter'

export const metadata: Metadata = {
  title: 'Relocation Cost Calculator | Estimate Your Moving Costs | Relocation Quest',
  description: 'Free relocation cost calculator to estimate your international moving expenses. Get personalized cost breakdowns for housing, visa fees, shipping, and living expenses in your destination country.',
  keywords: ['relocation cost calculator', 'moving cost estimator', 'international relocation costs', 'expat moving expenses', 'relocation calculator'],
  alternates: {
    canonical: 'https://relocation.quest/calculator',
  },
  openGraph: {
    title: 'Relocation Cost Calculator - Estimate Your Moving Costs',
    description: 'Calculate your international relocation costs with our AI-powered tool. Get accurate estimates for housing, visa, shipping, and more.',
    type: 'website',
    url: 'https://relocation.quest/calculator',
  },
}

const costCategories = [
  { icon: '🏠', title: 'Housing & Rent', description: 'Deposit, first month rent, and accommodation costs in your new location' },
  { icon: '📦', title: 'Shipping & Moving', description: 'International shipping, moving company fees, and storage costs' },
  { icon: '📋', title: 'Visa & Legal', description: 'Visa application fees, legal documentation, and permit costs' },
  { icon: '✈️', title: 'Travel & Transport', description: 'Flights, temporary accommodation, and local transportation' },
  { icon: '🏥', title: 'Insurance & Healthcare', description: 'International health insurance and medical requirements' },
  { icon: '💼', title: 'Setup Costs', description: 'Utilities, phone plans, bank accounts, and essential purchases' },
]

const popularDestinations = [
  { country: 'United Kingdom', flag: '🇬🇧', avgCost: '$8,000 - $15,000' },
  { country: 'Germany', flag: '🇩🇪', avgCost: '$6,000 - $12,000' },
  { country: 'Netherlands', flag: '🇳🇱', avgCost: '$7,000 - $14,000' },
  { country: 'Spain', flag: '🇪🇸', avgCost: '$5,000 - $10,000' },
  { country: 'Portugal', flag: '🇵🇹', avgCost: '$4,000 - $9,000' },
  { country: 'Switzerland', flag: '🇨🇭', avgCost: '$12,000 - $25,000' },
]

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <StaticHeader
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
        signInGradient="from-indigo-500 to-purple-600"
        navItems={[
          { href: '/articles', label: 'Articles' },
          { href: '/calculator', label: 'Calculator', highlight: true },
          { href: '/chat', label: 'Chat' },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
              Free Cost Estimator
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Relocation Cost{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Calculator
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Planning an international move? Get a personalized estimate of your relocation costs.
              Our AI-powered calculator considers housing, visa fees, shipping, and living expenses
              for your specific destination.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-amber-500/25"
              >
                Calculate My Costs 💬
              </Link>
              <Link
                href="/voice"
                className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 transition"
              >
                Talk to AI Assistant 🎙️
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            What We Calculate
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our relocation cost calculator breaks down all the expenses you need to consider
            when moving internationally.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition"
              >
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Average Relocation Costs by Country
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Here are typical relocation cost ranges for popular expat destinations.
            Get a personalized estimate with our calculator.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((dest) => (
              <div
                key={dest.country}
                className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-amber-300 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{dest.flag}</span>
                  <h3 className="text-xl font-bold text-gray-900">{dest.country}</h3>
                </div>
                <p className="text-2xl font-bold text-amber-600">{dest.avgCost}</p>
                <p className="text-sm text-gray-500 mt-1">Estimated total relocation cost</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How Our Calculator Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Tell Us Your Plans', description: 'Share your destination country, timeline, and what you\'re bringing with you.' },
              { step: '2', title: 'AI Analysis', description: 'Our AI analyzes current costs for housing, visas, shipping, and living expenses.' },
              { step: '3', title: 'Get Your Estimate', description: 'Receive a detailed breakdown of expected costs with tips to save money.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Calculate Your Relocation Costs?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our AI assistant will help you understand exactly what your international move will cost.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
            >
              Start Calculating 💬
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
