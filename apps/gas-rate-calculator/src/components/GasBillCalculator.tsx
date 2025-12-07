'use client'

import { useState, useEffect, useCallback } from 'react'

// UK Energy Price Cap rates (as of Q4 2024 / Q1 2025)
const DEFAULT_UNIT_RATE = 6.24 // pence per kWh
const DEFAULT_STANDING_CHARGE = 31.66 // pence per day
const CALORIFIC_VALUE = 39.5 // MJ/m³
const VOLUME_CORRECTION = 1.02264
const KWH_CONVERSION = 3.6

interface Results {
  gasUsedM3: number
  gasUsedKwh: number
  unitCost: number
  standingCharge: number
  subtotal: number
  vat: number
  totalCost: number
  dailyAverage: number
}

export function GasBillCalculator() {
  const [meterStart, setMeterStart] = useState('')
  const [meterEnd, setMeterEnd] = useState('')
  const [days, setDays] = useState('30')
  const [unitRate, setUnitRate] = useState(DEFAULT_UNIT_RATE.toString())
  const [standingCharge, setStandingCharge] = useState(DEFAULT_STANDING_CHARGE.toString())
  const [results, setResults] = useState<Results | null>(null)

  const calculate = useCallback(() => {
    const start = parseFloat(meterStart)
    const end = parseFloat(meterEnd)
    const numDays = parseInt(days)
    const rate = parseFloat(unitRate)
    const standing = parseFloat(standingCharge)

    if (isNaN(start) || isNaN(end) || isNaN(numDays) || isNaN(rate) || isNaN(standing)) {
      setResults(null)
      return
    }

    if (end <= start || numDays <= 0) {
      setResults(null)
      return
    }

    // Calculate gas used in m³
    const gasUsedM3 = end - start

    // Convert to kWh: (m³ × Volume Correction × Calorific Value) / kWh Conversion
    const gasUsedKwh = (gasUsedM3 * VOLUME_CORRECTION * CALORIFIC_VALUE) / KWH_CONVERSION

    // Calculate costs (in pence, then convert to pounds)
    const unitCost = (gasUsedKwh * rate) / 100
    const standingTotal = (numDays * standing) / 100
    const subtotal = unitCost + standingTotal
    const vat = subtotal * 0.05 // 5% VAT on domestic energy
    const totalCost = subtotal + vat
    const dailyAverage = totalCost / numDays

    setResults({
      gasUsedM3: Math.round(gasUsedM3 * 1000) / 1000,
      gasUsedKwh: Math.round(gasUsedKwh * 100) / 100,
      unitCost: Math.round(unitCost * 100) / 100,
      standingCharge: Math.round(standingTotal * 100) / 100,
      subtotal: Math.round(subtotal * 100) / 100,
      vat: Math.round(vat * 100) / 100,
      totalCost: Math.round(totalCost * 100) / 100,
      dailyAverage: Math.round(dailyAverage * 100) / 100,
    })
  }, [meterStart, meterEnd, days, unitRate, standingCharge])

  useEffect(() => {
    calculate()
  }, [calculate])

  const resetAll = () => {
    setMeterStart('')
    setMeterEnd('')
    setDays('30')
    setUnitRate(DEFAULT_UNIT_RATE.toString())
    setStandingCharge(DEFAULT_STANDING_CHARGE.toString())
    setResults(null)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Instructions */}
          <div className="mb-6 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
            <h3 className="text-sm font-semibold text-emerald-400 mb-2">How to Use</h3>
            <ol className="text-sm text-slate-400 space-y-1 list-decimal list-inside">
              <li>Enter your previous gas meter reading (in cubic metres)</li>
              <li>Enter your current gas meter reading</li>
              <li>Enter the number of days between readings</li>
              <li>Adjust the unit rate and standing charge if different from your tariff</li>
            </ol>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Meter Readings</h3>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Previous Meter Reading (m³)
                </label>
                <input
                  type="number"
                  step="0.001"
                  value={meterStart}
                  onChange={(e) => setMeterStart(e.target.value)}
                  placeholder="e.g. 1234.567"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Current Meter Reading (m³)
                </label>
                <input
                  type="number"
                  step="0.001"
                  value={meterEnd}
                  onChange={(e) => setMeterEnd(e.target.value)}
                  placeholder="e.g. 1334.567"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  Days Between Readings
                </label>
                <input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  placeholder="e.g. 30"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
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
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
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
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Default rates based on UK Energy Price Cap. Check your bill for actual rates.
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
              <h3 className="text-lg font-semibold text-white mb-4">Your Gas Bill Estimate</h3>

              {results ? (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    <p className="text-sm text-slate-400 mb-1">Gas Used</p>
                    <p className="text-2xl font-bold text-white">{results.gasUsedM3} m³</p>
                    <p className="text-lg text-emerald-400">{results.gasUsedKwh} kWh</p>
                  </div>

                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Unit charges ({results.gasUsedKwh} kWh)</span>
                      <span className="text-white">£{results.unitCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Standing charge ({days} days)</span>
                      <span className="text-white">£{results.standingCharge.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-slate-700/50 pt-2">
                      <span className="text-slate-400">Subtotal</span>
                      <span className="text-white">£{results.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">VAT (5%)</span>
                      <span className="text-white">£{results.vat.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-xl border border-emerald-500/30">
                    <p className="text-sm text-emerald-400 mb-1">Estimated Total</p>
                    <p className="text-4xl font-bold text-white">£{results.totalCost.toFixed(2)}</p>
                    <p className="text-sm text-slate-400 mt-2">
                      Average: £{results.dailyAverage.toFixed(2)}/day
                    </p>
                  </div>

                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                    <h4 className="text-sm font-semibold text-slate-300 mb-2">Calculation Method</h4>
                    <p className="text-xs text-slate-400">
                      kWh = m³ × {VOLUME_CORRECTION} (correction factor) × {CALORIFIC_VALUE} (CV) ÷ {KWH_CONVERSION}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center p-8 bg-slate-900/30 rounded-xl border border-slate-700/30 border-dashed min-h-[300px]">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-slate-500 text-sm">
                      Enter your meter readings to calculate your gas bill
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
