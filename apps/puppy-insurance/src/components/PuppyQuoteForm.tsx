'use client'

import { useState, useMemo } from 'react'
import {
  QuoteFormData,
  DOG_SIZES,
  COVER_TYPES,
  VET_FEE_LIMITS,
  POPULAR_BREEDS,
  BREED_CATEGORIES,
  formatCurrencyWithPence,
  formatCurrency,
  estimatePremium,
} from '../lib/quote-types'

const INITIAL_FORM_DATA: Partial<QuoteFormData> = {
  dogName: '',
  breed: '',
  breedCategory: 'pedigree-low-risk',
  dogSize: 'medium',
  dateOfBirth: '',
  ageMonths: 8,
  gender: 'male',
  neutered: false,
  coverType: 'lifetime',
  vetFeeLimit: '5000',
  includeThirdParty: true,
  includeDentalCover: false,
  includeBehaviouralCover: false,
  postcode: '',
  hasOtherPets: false,
  firstTimeOwner: false,
  coverStartDate: '',
}

export function PuppyQuoteForm() {
  const [formData, setFormData] = useState<Partial<QuoteFormData>>(INITIAL_FORM_DATA)
  const [step, setStep] = useState(1)
  const [showEstimate, setShowEstimate] = useState(false)

  const premium = useMemo(() => estimatePremium(formData), [formData])

  const updateField = <K extends keyof QuoteFormData>(
    field: K,
    value: QuoteFormData[K]
  ) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value }
      // Auto-set breed category when breed is selected
      if (field === 'breed' && typeof value === 'string') {
        updated.breedCategory = BREED_CATEGORIES[value] || 'pedigree-moderate-risk'
      }
      return updated
    })
  }

  const calculateAgeMonths = (dob: string): number => {
    const birthDate = new Date(dob)
    const today = new Date()
    const months = (today.getFullYear() - birthDate.getFullYear()) * 12 +
      (today.getMonth() - birthDate.getMonth())
    return Math.max(0, months)
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dob = e.target.value
    updateField('dateOfBirth', dob)
    if (dob) {
      setFormData(prev => ({ ...prev, ageMonths: calculateAgeMonths(dob) }))
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.breed && formData.dogSize
      case 2:
        return formData.coverType && formData.vetFeeLimit
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
                  ? 'bg-amber-500 text-white'
                  : s < step
                  ? 'bg-amber-500/30 text-amber-400 cursor-pointer hover:bg-amber-500/50'
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
                  s < step ? 'bg-amber-500/50' : 'bg-slate-700'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Labels */}
      <div className="flex justify-between mb-8 text-sm text-slate-400 px-2">
        <span className={step === 1 ? 'text-amber-400' : ''}>Your Puppy</span>
        <span className={step === 2 ? 'text-amber-400' : ''}>Cover Options</span>
        <span className={step === 3 ? 'text-amber-400' : ''}>Get Quote</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Puppy Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🐕</span> Tell us about your puppy
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Puppy's Name (optional)
                    </label>
                    <input
                      type="text"
                      value={formData.dogName}
                      onChange={(e) => updateField('dogName', e.target.value)}
                      placeholder="e.g. Buddy, Luna, Max"
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Breed <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={formData.breed}
                      onChange={(e) => updateField('breed', e.target.value)}
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">Select breed...</option>
                      {POPULAR_BREEDS.map((breed) => (
                        <option key={breed} value={breed}>
                          {breed}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleDateChange}
                        max={new Date().toISOString().split('T')[0]}
                        className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Gender
                      </label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => updateField('gender', 'male')}
                          className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                            formData.gender === 'male'
                              ? 'bg-amber-500/20 border-2 border-amber-500 text-amber-400'
                              : 'bg-slate-700/30 border-2 border-transparent text-slate-300 hover:bg-slate-700/50'
                          }`}
                        >
                          Male
                        </button>
                        <button
                          type="button"
                          onClick={() => updateField('gender', 'female')}
                          className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                            formData.gender === 'female'
                              ? 'bg-amber-500/20 border-2 border-amber-500 text-amber-400'
                              : 'bg-slate-700/30 border-2 border-transparent text-slate-300 hover:bg-slate-700/50'
                          }`}
                        >
                          Female
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Dog Size <span className="text-red-400">*</span></h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {DOG_SIZES.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => updateField('dogSize', size.value)}
                      className={`p-4 rounded-xl text-center transition-all ${
                        formData.dogSize === size.value
                          ? 'bg-amber-500/20 border-2 border-amber-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white block">{size.label}</span>
                      <span className="text-xs text-slate-400 mt-1 block leading-tight">{size.examples.split(',')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Additional Details</h3>
                <div className="space-y-4">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        checked={formData.neutered}
                        onChange={(e) => updateField('neutered', e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          formData.neutered
                            ? 'bg-amber-500 border-amber-500'
                            : 'border-slate-500 group-hover:border-slate-400'
                        }`}
                      >
                        {formData.neutered && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-medium">Neutered / Spayed</div>
                      <div className="text-sm text-slate-400">This may reduce your premium slightly</div>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        checked={formData.hasOtherPets}
                        onChange={(e) => updateField('hasOtherPets', e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          formData.hasOtherPets
                            ? 'bg-amber-500 border-amber-500'
                            : 'border-slate-500 group-hover:border-slate-400'
                        }`}
                      >
                        {formData.hasOtherPets && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-medium">I have other pets</div>
                      <div className="text-sm text-slate-400">Multi-pet discounts may apply</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Cover Options */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🛡️</span> Choose Your Cover Type
                </h3>
                <div className="space-y-3">
                  {COVER_TYPES.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => updateField('coverType', type.value)}
                      className={`w-full text-left p-4 rounded-xl transition-all relative ${
                        formData.coverType === type.value
                          ? 'bg-amber-500/20 border-2 border-amber-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      {type.popular && (
                        <span className="absolute -top-2 right-4 px-2 py-0.5 bg-amber-500 text-white text-xs font-semibold rounded-full">
                          Most Popular
                        </span>
                      )}
                      <div className="font-medium text-white">{type.label}</div>
                      <div className="text-sm text-slate-400">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Vet Fee Limit</h3>
                <p className="text-sm text-slate-400 mb-4">
                  Choose the maximum amount the insurer will pay towards vet treatment each year
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {VET_FEE_LIMITS.map((limit) => (
                    <button
                      key={limit.value}
                      onClick={() => updateField('vetFeeLimit', limit.value)}
                      className={`p-4 rounded-xl text-center transition-all ${
                        formData.vetFeeLimit === limit.value
                          ? 'bg-amber-500/20 border-2 border-amber-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white">{limit.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Optional Extras</h3>
                <div className="space-y-4">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        checked={formData.includeThirdParty}
                        onChange={(e) => updateField('includeThirdParty', e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          formData.includeThirdParty
                            ? 'bg-amber-500 border-amber-500'
                            : 'border-slate-500 group-hover:border-slate-400'
                        }`}
                      >
                        {formData.includeThirdParty && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-medium">Third Party Liability</div>
                      <div className="text-sm text-slate-400">Cover if your dog causes injury or damage to others (usually included free)</div>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        checked={formData.includeDentalCover}
                        onChange={(e) => updateField('includeDentalCover', e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          formData.includeDentalCover
                            ? 'bg-amber-500 border-amber-500'
                            : 'border-slate-500 group-hover:border-slate-400'
                        }`}
                      >
                        {formData.includeDentalCover && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-medium">Dental Cover</div>
                      <div className="text-sm text-slate-400">Coverage for dental illness and treatment (not just accidents)</div>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative mt-1">
                      <input
                        type="checkbox"
                        checked={formData.includeBehaviouralCover}
                        onChange={(e) => updateField('includeBehaviouralCover', e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          formData.includeBehaviouralCover
                            ? 'bg-amber-500 border-amber-500'
                            : 'border-slate-500 group-hover:border-slate-400'
                        }`}
                      >
                        {formData.includeBehaviouralCover && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-medium">Behavioural Treatment</div>
                      <div className="text-sm text-slate-400">Coverage for behavioural therapy and training from qualified behaviourists</div>
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
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">📍</span> Your Location
                </h3>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Postcode <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.postcode}
                    onChange={(e) => updateField('postcode', e.target.value.toUpperCase())}
                    placeholder="e.g. SW1A 1AA"
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent uppercase"
                    maxLength={8}
                  />
                  <p className="text-xs text-slate-500 mt-2">
                    We need your postcode to find the best local quotes for your area
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
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🐾</span> Quote Summary
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Puppy</span>
                    <span className="text-white">{formData.dogName || 'Your puppy'} ({formData.breed})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Size</span>
                    <span className="text-white">{DOG_SIZES.find(s => s.value === formData.dogSize)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Cover Type</span>
                    <span className="text-white">{COVER_TYPES.find(c => c.value === formData.coverType)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Vet Fee Limit</span>
                    <span className="text-white">{VET_FEE_LIMITS.find(l => l.value === formData.vetFeeLimit)?.label}</span>
                  </div>
                  {formData.includeDentalCover && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Extras</span>
                      <span className="text-amber-400">Dental Cover</span>
                    </div>
                  )}
                  {formData.includeBehaviouralCover && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Extras</span>
                      <span className="text-amber-400">Behavioural Cover</span>
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
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
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
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
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
            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl p-6 border border-amber-500/30">
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Estimated Monthly Premium</div>
                <div className="text-4xl font-bold text-white mb-1">
                  {formatCurrencyWithPence(premium.monthly.low)} - {formatCurrencyWithPence(premium.monthly.high)}
                </div>
                <div className="text-sm text-amber-400">
                  per month
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  ({formatCurrency(premium.annual.low)} - {formatCurrency(premium.annual.high)} per year)
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-600/50 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Compare UK pet insurers
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Lifetime & time-limited options
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  To get accurate quotes from our panel of pet insurers, you'll need to provide a few more details. We'll then compare policies and show you the best options for {formData.dogName || 'your puppy'}.
                </p>
                <a
                  href="tel:08001234567"
                  className="block w-full text-center py-3 rounded-xl font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
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
