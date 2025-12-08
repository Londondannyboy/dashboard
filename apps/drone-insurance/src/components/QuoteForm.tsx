'use client'

import { useState } from 'react'

export function QuoteForm() {
  const [formData, setFormData] = useState({
    droneType: '',
    usage: '',
    droneValue: '',
    postcode: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 text-center">
          <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Quote Request Received!</h3>
          <p className="text-slate-400 mb-6">
            We're comparing drone insurance quotes from our panel of specialist UK insurers.
            You'll receive your personalised quotes by email shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-cyan-400 hover:text-cyan-300 text-sm"
          >
            Get another quote
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
        <h2 className="text-xl font-bold text-white text-center mb-6">
          Get Your Free Drone Insurance Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Type of Drone
            </label>
            <select
              value={formData.droneType}
              onChange={(e) => setFormData({ ...formData, droneType: e.target.value })}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            >
              <option value="">Select drone type...</option>
              <option value="consumer">Consumer Drone (DJI Mini, Air, etc)</option>
              <option value="prosumer">Prosumer Drone (DJI Mavic Pro, Phantom)</option>
              <option value="professional">Professional/Cinema Drone (Inspire, M300)</option>
              <option value="fpv">FPV Racing/Freestyle Drone</option>
              <option value="custom">Custom Built Drone</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              How Will You Use Your Drone?
            </label>
            <select
              value={formData.usage}
              onChange={(e) => setFormData({ ...formData, usage: e.target.value })}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            >
              <option value="">Select usage...</option>
              <option value="recreational">Recreational / Hobby Flying</option>
              <option value="commercial">Commercial Work (Photography, Video)</option>
              <option value="surveying">Surveying / Mapping / Inspections</option>
              <option value="racing">FPV Racing</option>
              <option value="mixed">Mixed (Hobby + Occasional Paid Work)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Total Drone & Equipment Value (£)
            </label>
            <select
              value={formData.droneValue}
              onChange={(e) => setFormData({ ...formData, droneValue: e.target.value })}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            >
              <option value="">Select value range...</option>
              <option value="under500">Under £500</option>
              <option value="500-1000">£500 - £1,000</option>
              <option value="1000-2500">£1,000 - £2,500</option>
              <option value="2500-5000">£2,500 - £5,000</option>
              <option value="5000-10000">£5,000 - £10,000</option>
              <option value="over10000">Over £10,000</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Postcode
            </label>
            <input
              type="text"
              value={formData.postcode}
              onChange={(e) => setFormData({ ...formData, postcode: e.target.value.toUpperCase() })}
              placeholder="e.g. SW1A 1AA"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/25"
          >
            Compare Drone Insurance Quotes
          </button>

          <p className="text-xs text-slate-500 text-center">
            By submitting, you agree to our privacy policy. We'll send quotes from our panel of insurers.
          </p>
        </form>
      </div>
    </div>
  )
}
