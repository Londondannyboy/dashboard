'use client'

import { useState, useEffect, useCallback } from 'react'

// UK Energy Price Cap rates
const DEFAULT_UNIT_RATE = 6.24 // pence per kWh
const DEFAULT_STANDING_CHARGE = 31.66 // pence per day

type Period = 'daily' | 'weekly' | 'monthly' | 'yearly'

interface Results {
  daily: number
  weekly: number
  monthly: number
  yearly: number
  standingChargeYearly: number
  unitCostYearly: number
}

export function GasCostCalculator() {
  const [kwhUsage, setKwhUsage] = useState('')
  const [period, setPeriod] = useState<Period>('monthly')
  const [unitRate, setUnitRate] = useState(DEFAULT_UNIT_RATE.toString())
  const [standingCharge, setStandingCharge] = useState(DEFAULT_STANDING_CHARGE.toString())
  const [results, setResults] = useState<Results | null>(null)

  const calculate = useCallback(() => {
    const usage = parseFloat(kwhUsage)
    const rate = parseFloat(unitRate)
    const standing = parseFloat(standingCharge)

    if (isNaN(usage) || isNaN(rate) || isNaN(standing) || usage <= 0) {
      setResults(null)
      return
    }

    // Convert usage to yearly kWh
    let yearlyKwh: number
    switch (period) {
      case 'daily':
        yearlyKwh = usage * 365
        break
      case 'weekly':
        yearlyKwh = usage * 52
        break
      case 'monthly':
        yearlyKwh = usage * 12
        break
      case 'yearly':
        yearlyKwh = usage
        break
    }

    // Calculate costs (including 5% VAT)
    const standingYearly = (365 * standing / 100) * 1.05
    const unitYearly = (yearlyKwh * rate / 100) * 1.05
    const totalYearly = standingYearly + unitYearly

    setResults({
      daily: Math.round((totalYearly / 365) * 100) / 100,
      weekly: Math.round((totalYearly / 52) * 100) / 100,
      monthly: Math.round((totalYearly / 12) * 100) / 100,
      yearly: Math.round(totalYearly * 100) / 100,
      standingChargeYearly: Math.round(standingYearly * 100) / 100,
      unitCostYearly: Math.round(unitYearly * 100) / 100,
    })
  }, [kwhUsage, period, unitRate, standingCharge])

  useEffect(() => {
    calculate()
  }, [calculate])

  const resetAll = () => {
    setKwhUsage('')
    setPeriod('monthly')
    setUnitRate(DEFAULT_UNIT_RATE.toString())
    setStandingCharge(DEFAULT_STANDING_CHARGE.toString())
    setResults(null)
  }

  // Quick select usage presets
  const presets = [
    { label: 'Low (8,000 kWh/yr)', value: 8000 },
    { label: 'Medium (12,000 kWh/yr)', value: 12000 },
    { label: 'High (17,000 kWh/yr)', value: 17000 },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Quick Presets */}
          <div className="mb-6">
            <p className="text-sm text-slate-400 mb-3">Quick estimate by household size:</p>
            <div className="flex flex-wrap gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => {
                    setKwhUsage(preset.value.toString())
                    setPeriod('yearly')
                  }}
                  className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-sm text-slate-300 rounded-lg transition-colors"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Gas Usage</h3>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Gas Usage (kWh)
                </label>
                <input
                  type="number"
                  value={kwhUsage}
                  onChange={(e) => setKwhUsage(e.target.value)}
                  placeholder="Enter your gas usage"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Usage Period
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['daily', 'weekly', 'monthly', 'yearly'] as Period[]).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPeriod(p)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        period === p
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {p.charAt(0).toUpperCase() + p.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/50">
                <h4 className="text-sm font-semibold text-white mb-3">Tariff Rates</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">
                      Unit Rate (p/kWh)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={unitRate}
                      onChange={(e) => setUnitRate(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">
                      Standing Charge (p/day)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={standingCharge}
                      onChange={(e) => setStandingCharge(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Default rates based on UK Energy Price Cap (includes 5% VAT).
                </p>
              </div>

              <button
                onClick={resetAll}
                className="w-full px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors"
              >
                Reset All
              </button>
            </div>

            {/* Results Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Estimated Gas Costs</h3>

              {results ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                      <p className="text-sm text-slate-400 mb-1">Daily</p>
                      <p className="text-2xl font-bold text-white">£{results.daily.toFixed(2)}</p>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                      <p className="text-sm text-slate-400 mb-1">Weekly</p>
                      <p className="text-2xl font-bold text-white">£{results.weekly.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl border border-cyan-500/30">
                    <p className="text-sm text-cyan-400 mb-1">Monthly</p>
                    <p className="text-4xl font-bold text-white">£{results.monthly.toFixed(2)}</p>
                  </div>

                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    <p className="text-sm text-slate-400 mb-1">Yearly</p>
                    <p className="text-2xl font-bold text-white">£{results.yearly.toFixed(2)}</p>
                  </div>

                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 space-y-2">
                    <h4 className="text-sm font-semibold text-slate-300 mb-2">Annual Breakdown</h4>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Unit costs</span>
                      <span className="text-white">£{results.unitCostYearly.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Standing charges</span>
                      <span className="text-white">£{results.standingChargeYearly.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-slate-500 pt-2 border-t border-slate-700/50">
                      All prices include 5% VAT
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center p-8 bg-slate-900/30 rounded-xl border border-slate-700/30 border-dashed min-h-[300px]">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-slate-500 text-sm">
                      Enter your gas usage or select a preset to estimate costs
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
