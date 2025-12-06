'use client'

import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { useState } from 'react'
import Link from 'next/link'

const navItems = [
  { href: '/news', label: 'News' },
  { href: '/directory', label: 'Providers' },
  { href: '/ecosystem', label: 'Network' },
  { href: '/momentum', label: 'Momentum' },
]

const productLinks = [
  { label: 'GTM Planner', href: '/' },
  { label: 'Providers', href: '/directory' },
  { label: 'News', href: '/news' },
  { label: 'Network', href: '/ecosystem' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

interface GTMPlan {
  executive_summary: string
  target_market: {
    segments: string[]
    icp: string
    pain_points: string[]
  }
  positioning: {
    value_proposition: string
    differentiators: string[]
    messaging: string
  }
  channels: {
    name: string
    strategy: string
    priority: 'high' | 'medium' | 'low'
  }[]
  timeline: {
    phase: string
    duration: string
    activities: string[]
  }[]
  metrics: {
    kpi: string
    target: string
  }[]
}

export default function HomePage() {
  const [formData, setFormData] = useState({
    product: '',
    targetAudience: '',
    problem: '',
    solution: '',
    budget: '',
    timeline: '',
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [plan, setPlan] = useState<GTMPlan | null>(null)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    setError('')
    setPlan(null)

    try {
      const response = await fetch('/api/planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to generate GTM plan')
      }

      const data = await response.json()
      setPlan(data.plan)
    } catch (err) {
      setError('Failed to generate your GTM plan. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="GTM"
        brandAccent="Quest"
        brandGradient="from-orange-400 to-amber-500"
        signInGradient="from-orange-500 to-amber-500"
        navItems={navItems}
      />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full text-sm text-orange-300 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI-Powered GTM Strategy
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Your Expert{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-500 text-transparent bg-clip-text">
                GTM Agency
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Build winning go-to-market strategies with AI. Get instant GTM plans,
              discover top providers, and learn from successful campaign examples.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#planner" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold hover:opacity-90 transition">
                Create GTM Plan
              </a>
              <Link href="/directory" className="px-6 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition">
                Browse Providers
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-6 bg-white/[0.02] border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-orange-400 mb-1">500+</div>
                <div className="text-sm text-gray-400">GTM Providers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-amber-400 mb-1">1,000+</div>
                <div className="text-sm text-gray-400">Campaign Examples</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-yellow-400 mb-1">50+</div>
                <div className="text-sm text-gray-400">Software Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-orange-300 mb-1">10k+</div>
                <div className="text-sm text-gray-400">Plans Generated</div>
              </div>
            </div>
          </div>
        </section>

        {/* GTM Planner Section */}
        <section id="planner" className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                AI GTM Planner
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tell us about your product and we'll generate a comprehensive go-to-market
                strategy in seconds.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Product/Service Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    placeholder="e.g., SaaS Analytics Platform"
                    className="w-full px-4 py-3 planner-input text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Target Audience *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                    placeholder="e.g., B2B SaaS companies, 50-500 employees"
                    className="w-full px-4 py-3 planner-input text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Problem You Solve *
                </label>
                <textarea
                  required
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  placeholder="Describe the main problem or pain point your product addresses..."
                  rows={3}
                  className="w-full px-4 py-3 planner-input text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Solution *
                </label>
                <textarea
                  required
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                  placeholder="How does your product solve this problem? What makes it unique?"
                  rows={3}
                  className="w-full px-4 py-3 planner-input text-white placeholder-gray-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Marketing Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 planner-input text-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="<10k">Less than $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value=">500k">$500,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Launch Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 planner-input text-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="1-month">1 Month</option>
                    <option value="3-months">3 Months</option>
                    <option value="6-months">6 Months</option>
                    <option value="12-months">12 Months</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-bold text-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Generating Plan...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Generate GTM Plan
                    </>
                  )}
                </button>
              </div>
            </form>

            {error && (
              <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
                {error}
              </div>
            )}

            {plan && (
              <div className="mt-12 space-y-8">
                <div className="planner-result p-8">
                  <h3 className="text-2xl font-bold mb-4 text-orange-400">Executive Summary</h3>
                  <p className="text-gray-300 leading-relaxed">{plan.executive_summary}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="planner-result p-6">
                    <h3 className="text-xl font-bold mb-4 text-orange-400">Target Market</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Segments</h4>
                        <div className="flex flex-wrap gap-2">
                          {plan.target_market.segments.map((seg, i) => (
                            <span key={i} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                              {seg}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Ideal Customer Profile</h4>
                        <p className="text-gray-300">{plan.target_market.icp}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Pain Points</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {plan.target_market.pain_points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="planner-result p-6">
                    <h3 className="text-xl font-bold mb-4 text-orange-400">Positioning</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Value Proposition</h4>
                        <p className="text-gray-300">{plan.positioning.value_proposition}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Differentiators</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {plan.positioning.differentiators.map((diff, i) => (
                            <li key={i}>{diff}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="planner-result p-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">Marketing Channels</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {plan.channels.map((channel, i) => (
                      <div key={i} className="bg-white/[0.03] border border-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{channel.name}</h4>
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            channel.priority === 'high' ? 'bg-green-500/20 text-green-400' :
                            channel.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {channel.priority}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{channel.strategy}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="planner-result p-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">Launch Timeline</h3>
                  <div className="space-y-4">
                    {plan.timeline.map((phase, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-24 shrink-0">
                          <div className="text-sm font-medium text-orange-400">{phase.phase}</div>
                          <div className="text-xs text-gray-500">{phase.duration}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap gap-2">
                            {phase.activities.map((activity, j) => (
                              <span key={j} className="px-3 py-1 bg-white/[0.05] border border-white/10 rounded text-sm text-gray-300">
                                {activity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="planner-result p-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">Key Metrics</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {plan.metrics.map((metric, i) => (
                      <div key={i} className="bg-white/[0.03] border border-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-white mb-1">{metric.target}</div>
                        <div className="text-sm text-gray-400">{metric.kpi}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <button className="px-6 py-3 bg-orange-500/20 border border-orange-500/30 rounded-lg font-semibold text-orange-400 hover:bg-orange-500/30 transition">
                    Download PDF
                  </button>
                  <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold hover:opacity-90 transition">
                    Get Expert Help
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Everything You Need for GTM Success
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                From strategy to execution, we've got you covered with tools, providers, and insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/directory" className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition group">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition">GTM Providers</h3>
                <p className="text-gray-400">
                  Discover top go-to-market agencies, consultants, and service providers.
                </p>
              </Link>

              <Link href="/news" className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition group">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition">GTM News</h3>
                <p className="text-gray-400">
                  Stay updated with the latest go-to-market trends, strategies, and insights.
                </p>
              </Link>

              <Link href="/ecosystem" className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition group">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition">GTM Network</h3>
                <p className="text-gray-400">
                  Explore the interconnected ecosystem of GTM tools and service providers.
                </p>
              </Link>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Software Reviews</h3>
                <p className="text-gray-400">
                  In-depth reviews of GTM tools - CRMs, marketing automation, analytics, and more.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Campaign Examples</h3>
                <p className="text-gray-400">
                  Learn from successful GTM campaigns across industries and company sizes.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">AI Strategy</h3>
                <p className="text-gray-400">
                  Get instant, AI-powered GTM strategies tailored to your product and market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Ready to Launch Your GTM Strategy?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Work with our expert GTM team to build and execute a winning go-to-market plan.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#planner" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-bold hover:opacity-90 transition">
                Try the GTM Planner
              </a>
              <Link href="/contact" className="px-8 py-4 border border-white/20 rounded-lg font-bold hover:bg-white/5 transition">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="GTM"
        brandAccent="Quest"
        brandGradient="from-orange-400 to-amber-500"
        brandDescription="Your expert GTM agency partner"
        productLinks={productLinks}
        companyLinks={companyLinks}
      />
    </div>
  )
}
