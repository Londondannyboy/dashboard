'use client'

import { useState } from 'react'
import Link from 'next/link'

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

export function GTMPlanner() {
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
    <div className="max-w-4xl mx-auto">
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
  )
}
