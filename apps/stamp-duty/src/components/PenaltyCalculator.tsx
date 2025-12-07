'use client'

import { useState, useMemo } from 'react'
import { formatCurrency } from '../lib/stamp-duty'

const DELAY_OPTIONS = [
  { value: 30, label: '1 month late' },
  { value: 60, label: '2 months late' },
  { value: 90, label: '3 months late' },
  { value: 120, label: '4 months late' },
  { value: 180, label: '6 months late' },
  { value: 270, label: '9 months late' },
  { value: 365, label: '12 months late' },
  { value: 730, label: '2 years late' },
]

const INTEREST_RATE = 0.0775 // 7.75% annual interest rate

export function PenaltyCalculator() {
  const [taxDue, setTaxDue] = useState<number>(10000)
  const [daysLate, setDaysLate] = useState<number>(90)
  const [inputValue, setInputValue] = useState('10,000')

  const penalties = useMemo(() => {
    let fixedPenalty = 0
    let percentagePenalty = 0

    // Fixed penalties
    if (daysLate > 0) {
      fixedPenalty = 100 // Up to 3 months
    }
    if (daysLate > 90) {
      fixedPenalty = 200 // 3-6 months (additional £100)
    }

    // Percentage penalties (6+ months)
    if (daysLate > 180 && daysLate <= 365) {
      // 5% or £300, whichever is greater
      percentagePenalty = Math.max(taxDue * 0.05, 300)
    } else if (daysLate > 365) {
      // Additional 5% for 12+ months (up to 100% at HMRC discretion)
      // We'll show a conservative 10% here
      percentagePenalty = Math.max(taxDue * 0.10, 300)
    }

    // Interest calculation (daily compounding from day 15)
    const interestDays = daysLate
    const dailyRate = INTEREST_RATE / 365
    const interest = taxDue * dailyRate * interestDays

    const totalPenalty = fixedPenalty + percentagePenalty + interest
    const totalOwed = taxDue + totalPenalty

    return {
      fixedPenalty,
      percentagePenalty,
      interest,
      totalPenalty,
      totalOwed,
    }
  }, [taxDue, daysLate])

  const handleTaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '')
    const num = parseInt(raw) || 0
    setTaxDue(num)
    setInputValue(num.toLocaleString('en-GB'))
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Tax Amount Input */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Stamp Duty Amount Owed
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400">
                £
              </span>
              <input
                type="text"
                value={inputValue}
                onChange={handleTaxChange}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl pl-10 pr-4 py-4 text-2xl font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="10,000"
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              The stamp duty you owe (use our main calculator to find this)
            </p>
          </div>

          {/* Days Late Selection */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              How Late Is Your Payment?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {DELAY_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setDaysLate(option.value)}
                  className={`p-3 rounded-xl text-sm font-medium transition-all ${
                    daysLate === option.value
                      ? 'bg-red-500/20 border-2 border-red-500 text-white'
                      : 'bg-slate-700/30 border-2 border-transparent text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interest Rate Note */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">Current Interest Rate</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-red-400">7.75%</span>
              <span className="text-slate-400 text-sm">per annum</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Interest rates are set by HMRC and may change. Check GOV.UK for current rates.
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Result */}
          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-500/30">
            <div className="text-center">
              <div className="text-sm text-slate-400 mb-1">Total Penalties & Interest</div>
              <div className="text-5xl font-bold text-white mb-2">
                {formatCurrency(penalties.totalPenalty)}
              </div>
              <div className="text-lg text-red-400">
                Total to pay: {formatCurrency(penalties.totalOwed)}
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Penalty Breakdown</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                <div>
                  <div className="text-slate-300">Original Stamp Duty</div>
                  <div className="text-xs text-slate-500">Amount you owed</div>
                </div>
                <div className="text-white font-medium">{formatCurrency(taxDue)}</div>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                <div>
                  <div className="text-amber-400">Fixed Penalty</div>
                  <div className="text-xs text-slate-500">
                    {daysLate <= 90 ? 'Up to 3 months late' : '3-6 months late'}
                  </div>
                </div>
                <div className="text-amber-400 font-medium">{formatCurrency(penalties.fixedPenalty)}</div>
              </div>

              {penalties.percentagePenalty > 0 && (
                <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                  <div>
                    <div className="text-orange-400">Percentage Penalty</div>
                    <div className="text-xs text-slate-500">
                      {daysLate <= 365 ? '5% or £300 (greater)' : '10% or £300 (greater)'}
                    </div>
                  </div>
                  <div className="text-orange-400 font-medium">{formatCurrency(penalties.percentagePenalty)}</div>
                </div>
              )}

              <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                <div>
                  <div className="text-red-400">Interest</div>
                  <div className="text-xs text-slate-500">{daysLate} days at 7.75% p.a.</div>
                </div>
                <div className="text-red-400 font-medium">{formatCurrency(penalties.interest)}</div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <div className="text-white font-semibold">Total to Pay</div>
                <div className="text-red-400 font-bold text-xl">{formatCurrency(penalties.totalOwed)}</div>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-amber-500/10 rounded-2xl p-6 border border-amber-500/30">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Estimates Only
            </h3>
            <p className="text-sm text-slate-400">
              This calculator provides estimates. HMRC has discretion over penalties, especially for very late payments. For payments over 12 months late, penalties can be up to 100% of the tax due. Contact HMRC or a tax advisor for your specific situation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
