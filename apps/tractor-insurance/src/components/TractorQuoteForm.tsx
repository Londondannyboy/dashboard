'use client'

import { useState, useMemo } from 'react'
import {
  QuoteFormData,
  VEHICLE_TYPES,
  COVER_TYPES,
  VEHICLE_USES,
  POPULAR_TRACTOR_MAKES,
  formatCurrency,
  estimatePremium,
} from '../lib/quote-types'

const INITIAL_FORM_DATA: QuoteFormData = {
  vehicleType: 'tractor',
  make: '',
  model: '',
  yearOfManufacture: '',
  engineCapacity: '',
  currentValue: '',
  registrationNumber: '',
  coverType: 'comprehensive',
  includeImplementCover: false,
  lockedBuildingOvernight: true,
  moreThan100RoadMiles: false,
  primaryUse: 'farming-own-land',
  postcode: '',
  coverStartDate: '',
}

const VALUE_PRESETS = [5000, 10000, 20000, 35000, 50000, 75000, 100000]

export function TractorQuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_FORM_DATA)
  const [step, setStep] = useState(1)
  const [showEstimate, setShowEstimate] = useState(false)

  const premium = useMemo(() => estimatePremium(formData), [formData])

  const updateField = <K extends keyof QuoteFormData>(
    field: K,
    value: QuoteFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '')
    const num = parseInt(raw) || 0
    updateField('currentValue', num.toLocaleString('en-GB'))
  }

  const handleValuePreset = (value: number) => {
    updateField('currentValue', value.toLocaleString('en-GB'))
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 70 }, (_, i) => currentYear - i)

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.make && formData.yearOfManufacture && formData.currentValue
      case 2:
        return formData.coverType && formData.primaryUse
      case 3:
        return formData.postcode
      default:
        return true
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <button
              onClick={() => s < step && setStep(s)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                s === step
                  ? 'bg-green-500 text-white'
                  : s < step
                  ? 'bg-green-500/30 text-green-400 cursor-pointer hover:bg-green-500/50'
                  : 'bg-slate-700 text-slate-400'
              }`}
            >
              {s < step ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </button>
            {s < 3 && (
              <div
                className={`w-16 sm:w-24 h-1 mx-2 rounded ${
                  s < step ? 'bg-green-500/50' : 'bg-slate-700'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Labels */}
      <div className="flex justify-between mb-8 text-sm text-slate-400 px-2">
        <span className={step === 1 ? 'text-green-400' : ''}>Vehicle Details</span>
        <span className={step === 2 ? 'text-green-400' : ''}>Cover Options</span>
        <span className={step === 3 ? 'text-green-400' : ''}>Get Quote</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Vehicle Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Vehicle Type</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {VEHICLE_TYPES.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => updateField('vehicleType', type.value)}
                      className={`p-4 rounded-xl text-center transition-all ${
                        formData.vehicleType === type.value
                          ? 'bg-green-500/20 border-2 border-green-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Vehicle Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Make <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={formData.make}
                      onChange={(e) => updateField('make', e.target.value)}
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select make...</option>
                      {POPULAR_TRACTOR_MAKES.map((make) => (
                        <option key={make} value={make}>
                          {make}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Model
                    </label>
                    <input
                      type="text"
                      value={formData.model}
                      onChange={(e) => updateField('model', e.target.value)}
                      placeholder="e.g. 6R 150"
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Year <span className="text-red-400">*</span>
                      </label>
                      <select
                        value={formData.yearOfManufacture}
                        onChange={(e) => updateField('yearOfManufacture', e.target.value)}
                        className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select year...</option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Engine (cc)
                      </label>
                      <input
                        type="text"
                        value={formData.engineCapacity}
                        onChange={(e) => updateField('engineCapacity', e.target.value)}
                        placeholder="e.g. 6800"
                        className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Registration / Serial Number
                    </label>
                    <input
                      type="text"
                      value={formData.registrationNumber}
                      onChange={(e) => updateField('registrationNumber', e.target.value.toUpperCase())}
                      placeholder="e.g. AB12 CDE"
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent uppercase"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  Current Value <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400">
                    £
                  </span>
                  <input
                    type="text"
                    value={formData.currentValue}
                    onChange={handleValueChange}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-xl pl-10 pr-4 py-4 text-2xl font-semibold text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="25,000"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {VALUE_PRESETS.map((value) => (
                    <button
                      key={value}
                      onClick={() => handleValuePreset(value)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        formData.currentValue === value.toLocaleString('en-GB')
                          ? 'bg-green-500 text-white'
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      £{(value / 1000)}k
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Cover Options */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Cover Type</h3>
                <div className="space-y-3">
                  {COVER_TYPES.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => updateField('coverType', type.value)}
                      className={`w-full text-left p-4 rounded-xl transition-all ${
                        formData.coverType === type.value
                          ? 'bg-green-500/20 border-2 border-green-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <div className="font-medium text-white">{type.label}</div>
                      <div className="text-sm text-slate-400">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Primary Use</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {VEHICLE_USES.map((use) => (
                    <button
                      key={use.value}
                      onClick={() => updateField('primaryUse', use.value)}
                      className={`text-left p-4 rounded-xl transition-all ${
                        formData.primaryUse === use.value
                          ? 'bg-green-500/20 border-2 border-green-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <div className="font-medium text-white">{use.label}</div>
                      <div className="text-xs text-slate-400">{use.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Additional Options</h3>
                <div className="space-y-4">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        checked={formData.includeImplementCover}
                        onChange={(e) => updateField('includeImplementCover', e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          formData.includeImplementCover
                            ? 'bg-green-500 border-green-500'
                            : 'border-slate-500 group-hover:border-slate-400'
                        }`}
                      >
                        {formData.includeImplementCover && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-medium">Include Implement Cover</div>
                      <div className="text-sm text-slate-400">Cover for attached implements and equipment (ploughs, loaders, etc.)</div>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        checked={formData.lockedBuildingOvernight}
                        onChange={(e) => updateField('lockedBuildingOvernight', e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          formData.lockedBuildingOvernight
                            ? 'bg-green-500 border-green-500'
                            : 'border-slate-500 group-hover:border-slate-400'
                        }`}
                      >
                        {formData.lockedBuildingOvernight && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-medium">Kept in Locked Building Overnight</div>
                      <div className="text-sm text-slate-400">Vehicle stored in a secured, locked building when not in use</div>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        checked={formData.moreThan100RoadMiles}
                        onChange={(e) => updateField('moreThan100RoadMiles', e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          formData.moreThan100RoadMiles
                            ? 'bg-green-500 border-green-500'
                            : 'border-slate-500 group-hover:border-slate-400'
                        }`}
                      >
                        {formData.moreThan100RoadMiles && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-medium">More Than 100 Road Miles Per Year</div>
                      <div className="text-sm text-slate-400">Regularly travel on public roads (not just farm tracks)</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Get Quote */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Your Location</h3>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Postcode <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.postcode}
                    onChange={(e) => updateField('postcode', e.target.value.toUpperCase())}
                    placeholder="e.g. SW1A 1AA"
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent uppercase"
                    maxLength={8}
                  />
                  <p className="text-xs text-slate-500 mt-2">
                    We need your postcode to find local insurers and calculate accurate premiums
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Cover Start Date</h3>
                <div>
                  <input
                    type="date"
                    value={formData.coverStartDate}
                    onChange={(e) => updateField('coverStartDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Quote Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Vehicle</span>
                    <span className="text-white">{formData.make} {formData.model} ({formData.yearOfManufacture})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Value</span>
                    <span className="text-white">£{formData.currentValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Cover Type</span>
                    <span className="text-white">{COVER_TYPES.find(c => c.value === formData.coverType)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Primary Use</span>
                    <span className="text-white">{VEHICLE_USES.find(u => u.value === formData.primaryUse)?.label}</span>
                  </div>
                  {formData.includeImplementCover && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Extras</span>
                      <span className="text-green-400">Implement Cover</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 py-4 rounded-xl font-semibold bg-slate-700 text-white hover:bg-slate-600 transition-colors"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={() => canProceed() && setStep(step + 1)}
                disabled={!canProceed()}
                className={`flex-1 py-4 rounded-xl font-semibold transition-colors ${
                  canProceed()
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            ) : (
              <button
                onClick={() => setShowEstimate(true)}
                disabled={!canProceed()}
                className={`flex-1 py-4 rounded-xl font-semibold transition-colors ${
                  canProceed()
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                Get Quote Estimate
              </button>
            )}
          </div>
        </div>

        {/* Estimate Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30">
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Estimated Annual Premium</div>
                <div className="text-4xl font-bold text-white mb-1">
                  {formatCurrency(premium.low)} - {formatCurrency(premium.high)}
                </div>
                <div className="text-sm text-green-400">
                  Average: {formatCurrency(premium.average)}/year
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-600/50 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Compare quotes from UK insurers
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Specialist agricultural cover
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No obligation quote
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-4">
                *Indicative pricing only. Actual premiums depend on individual circumstances.
              </p>
            </div>

            {showEstimate && (
              <div className="mt-4 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-3">What happens next?</h4>
                <p className="text-sm text-slate-400 mb-4">
                  To get accurate quotes from our panel of specialist agricultural insurers, you'll need to provide a few more details. We'll then compare policies and present you with the best options.
                </p>
                <a
                  href="tel:08001234567"
                  className="block w-full text-center py-3 rounded-xl font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
                >
                  Call 0800 123 4567
                </a>
                <p className="text-xs text-slate-500 mt-3 text-center">
                  Lines open Mon-Fri 9am-5pm
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
