'use client'

import { useState } from 'react'

export function QuoteForm() {
  const [formData, setFormData] = useState({
    yogaStyle: '',
    teachingType: '',
    experience: '',
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
          <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Quote Request Received!</h3>
          <p className="text-slate-400 mb-6">
            We're comparing yoga teacher insurance quotes from our panel of specialist UK insurers.
            You'll receive your personalised quotes by email shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-purple-400 hover:text-purple-300 text-sm"
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
          Get Your Free Yoga Teacher Insurance Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Yoga Style(s) You Teach
            </label>
            <select
              value={formData.yogaStyle}
              onChange={(e) => setFormData({ ...formData, yogaStyle: e.target.value })}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            >
              <option value="">Select primary style...</option>
              <option value="standard">Standard Yoga (Hatha, Vinyasa, Yin, etc)</option>
              <option value="hot">Hot Yoga / Bikram</option>
              <option value="aerial">Aerial Yoga / Hammock</option>
              <option value="acro">AcroYoga / Partner Yoga</option>
              <option value="prenatal">Prenatal / Postnatal Yoga</option>
              <option value="therapy">Yoga Therapy (1-to-1)</option>
              <option value="pilates">Pilates (Mat or Reformer)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Teaching Environment
            </label>
            <select
              value={formData.teachingType}
              onChange={(e) => setFormData({ ...formData, teachingType: e.target.value })}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            >
              <option value="">Select where you teach...</option>
              <option value="studio">Studio / Gym Classes</option>
              <option value="private">Private / 1-to-1 Sessions</option>
              <option value="online">Online / Virtual Classes</option>
              <option value="outdoor">Outdoor / Park Yoga</option>
              <option value="corporate">Corporate / Workplace Yoga</option>
              <option value="retreat">Retreats / Workshops</option>
              <option value="mixed">Mixed (Multiple Venues)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Teaching Experience
            </label>
            <select
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            >
              <option value="">Select experience level...</option>
              <option value="new">Newly Qualified (under 1 year)</option>
              <option value="1-3">1-3 Years Experience</option>
              <option value="3-5">3-5 Years Experience</option>
              <option value="5-10">5-10 Years Experience</option>
              <option value="10+">10+ Years Experience</option>
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
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/25"
          >
            Compare Yoga Teacher Insurance Quotes
          </button>

          <p className="text-xs text-slate-500 text-center">
            By submitting, you agree to our privacy policy. We'll send quotes from our panel of insurers.
          </p>
        </form>
      </div>
    </div>
  )
}
