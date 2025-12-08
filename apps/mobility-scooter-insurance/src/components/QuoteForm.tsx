'use client'

import { useState } from 'react'

export function QuoteForm() {
  const [formData, setFormData] = useState({
    scooterType: '',
    scooterValue: '',
    yearPurchased: '',
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
          <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Quote Request Received!</h3>
          <p className="text-slate-400 mb-6">
            We're comparing mobility scooter insurance quotes from our panel of specialist UK insurers.
            You'll receive your personalised quotes by email shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-blue-400 hover:text-blue-300 text-sm"
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
          Get Your Free Mobility Scooter Insurance Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Type of Mobility Equipment
            </label>
            <select
              value={formData.scooterType}
              onChange={(e) => setFormData({ ...formData, scooterType: e.target.value })}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select type...</option>
              <option value="class2">Class 2 Mobility Scooter (4mph max)</option>
              <option value="class3">Class 3 Mobility Scooter (8mph max)</option>
              <option value="powerchair">Electric Wheelchair / Powerchair</option>
              <option value="folding">Folding / Travel Scooter</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Scooter Value (£)
            </label>
            <select
              value={formData.scooterValue}
              onChange={(e) => setFormData({ ...formData, scooterValue: e.target.value })}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select value range...</option>
              <option value="under1000">Under £1,000</option>
              <option value="1000-2000">£1,000 - £2,000</option>
              <option value="2000-3000">£2,000 - £3,000</option>
              <option value="3000-5000">£3,000 - £5,000</option>
              <option value="over5000">Over £5,000</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Year Purchased
            </label>
            <select
              value={formData.yearPurchased}
              onChange={(e) => setFormData({ ...formData, yearPurchased: e.target.value })}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select year...</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="older">Before 2021</option>
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
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25"
          >
            Compare Mobility Scooter Insurance Quotes
          </button>

          <p className="text-xs text-slate-500 text-center">
            By submitting, you agree to our privacy policy. We'll send quotes from our panel of insurers.
          </p>
        </form>
      </div>
    </div>
  )
}
