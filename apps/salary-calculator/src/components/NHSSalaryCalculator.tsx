'use client'

import { useState, useMemo } from 'react'
import {
  calculateSalary,
  formatCurrency,
  type Region,
  type SalaryInput,
} from '../lib/salary-calculator'

// NHS Pay Bands 2024/25
const NHS_BANDS = [
  { band: '2', min: 23615, max: 23615, label: 'Band 2' },
  { band: '3', min: 24071, max: 25674, label: 'Band 3' },
  { band: '4', min: 26530, max: 29114, label: 'Band 4' },
  { band: '5', min: 29970, max: 36483, label: 'Band 5' },
  { band: '6', min: 37338, max: 44962, label: 'Band 6' },
  { band: '7', min: 46148, max: 52809, label: 'Band 7' },
  { band: '8a', min: 53755, max: 60504, label: 'Band 8a' },
  { band: '8b', min: 62215, max: 72293, label: 'Band 8b' },
  { band: '8c', min: 74290, max: 86893, label: 'Band 8c' },
  { band: '8d', min: 89168, max: 104071, label: 'Band 8d' },
  { band: '9', min: 107637, max: 126281, label: 'Band 9' },
]

// NHS Pension Tiers 2024/25
const NHS_PENSION_TIERS = [
  { threshold: 13246, rate: 5.1 },
  { threshold: 16831, rate: 5.7 },
  { threshold: 22879, rate: 6.1 },
  { threshold: 23948, rate: 6.8 },
  { threshold: 28223, rate: 7.7 },
  { threshold: 29179, rate: 8.8 },
  { threshold: 43805, rate: 9.8 },
  { threshold: 49245, rate: 10.0 },
  { threshold: 56163, rate: 11.6 },
  { threshold: 72030, rate: 12.5 },
  { threshold: Infinity, rate: 13.5 },
]

function getNHSPensionRate(salary: number): number {
  for (const tier of NHS_PENSION_TIERS) {
    if (salary <= tier.threshold) {
      return tier.rate
    }
  }
  return 13.5
}

export function NHSSalaryCalculator() {
  const [selectedBand, setSelectedBand] = useState('5')
  const [salary, setSalary] = useState<number>(29970)
  const [region, setRegion] = useState<Region>('england')
  const [londonWeighting, setLondonWeighting] = useState<'none' | 'inner' | 'outer' | 'fringe'>('none')

  const currentBand = useMemo(() => {
    return NHS_BANDS.find(b => b.band === selectedBand) || NHS_BANDS[3]
  }, [selectedBand])

  // Calculate London weighting
  const londonAllowance = useMemo(() => {
    if (londonWeighting === 'none') return 0
    if (londonWeighting === 'inner') {
      const amount = salary * 0.20
      return Math.min(Math.max(amount, 5274), 7770)
    }
    if (londonWeighting === 'outer') {
      const amount = salary * 0.15
      return Math.min(Math.max(amount, 4655), 6076)
    }
    if (londonWeighting === 'fringe') {
      const amount = salary * 0.05
      return Math.min(Math.max(amount, 1212), 2047)
    }
    return 0
  }, [salary, londonWeighting])

  const totalSalary = salary + londonAllowance

  // NHS Pension rate
  const pensionRate = useMemo(() => getNHSPensionRate(totalSalary), [totalSalary])

  // Calculate take home pay
  const input: SalaryInput = useMemo(() => ({
    grossSalary: totalSalary,
    region,
    pensionContribution: pensionRate,
    pensionType: 'percentage',
    studentLoan: 'none',
    hasPostgraduateLoan: false,
    noNI: false,
    blindPersonsAllowance: false,
    marriageAllowance: 'none',
  }), [totalSalary, region, pensionRate])

  const result = useMemo(() => calculateSalary(input), [input])

  const handleBandChange = (band: string) => {
    setSelectedBand(band)
    const newBand = NHS_BANDS.find(b => b.band === band)
    if (newBand) {
      setSalary(newBand.min)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Band Selection */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Select Your NHS Band
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {NHS_BANDS.map((band) => (
                <button
                  key={band.band}
                  onClick={() => handleBandChange(band.band)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedBand === band.band
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {band.label}
                </button>
              ))}
            </div>
          </div>

          {/* Salary Slider */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Position in Band: {formatCurrency(salary)}
            </label>
            <input
              type="range"
              min={currentBand.min}
              max={currentBand.max}
              value={salary}
              onChange={(e) => setSalary(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>Entry: {formatCurrency(currentBand.min)}</span>
              <span>Top: {formatCurrency(currentBand.max)}</span>
            </div>
          </div>

          {/* Location */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Tax Region</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setRegion('england')}
                    className={`p-3 rounded-lg transition-all text-sm ${
                      region === 'england'
                        ? 'bg-cyan-500/20 border-2 border-cyan-500 text-white'
                        : 'bg-slate-700/30 border-2 border-transparent text-slate-300 hover:bg-slate-700/50'
                    }`}
                  >
                    England/Wales/NI
                  </button>
                  <button
                    onClick={() => setRegion('scotland')}
                    className={`p-3 rounded-lg transition-all text-sm ${
                      region === 'scotland'
                        ? 'bg-cyan-500/20 border-2 border-cyan-500 text-white'
                        : 'bg-slate-700/30 border-2 border-transparent text-slate-300 hover:bg-slate-700/50'
                    }`}
                  >
                    Scotland
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">London Weighting</label>
                <select
                  value={londonWeighting}
                  onChange={(e) => setLondonWeighting(e.target.value as typeof londonWeighting)}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="none">Not in London</option>
                  <option value="inner">Inner London (+20%)</option>
                  <option value="outer">Outer London (+15%)</option>
                  <option value="fringe">London Fringe (+5%)</option>
                </select>
              </div>
            </div>
          </div>

          {/* NHS Pension Info */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
            <h3 className="text-lg font-semibold text-white mb-3">NHS Pension</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Your contribution rate</span>
                <span className="text-cyan-400 font-medium">{pensionRate}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Annual contribution</span>
                <span className="text-white font-medium">{formatCurrency(result.pensionContribution)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Employer contribution</span>
                <span className="text-slate-400">~23.7%</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              NHS pension is a defined benefit scheme with contributions based on salary bands.
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Total Salary */}
          {londonAllowance > 0 && (
            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl p-6 border border-amber-500/30">
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Total Salary (with London Weighting)</div>
                <div className="text-4xl font-bold text-white mb-2">
                  {formatCurrency(totalSalary)}
                </div>
                <div className="text-amber-400">
                  Base: {formatCurrency(salary)} + {formatCurrency(londonAllowance)} London
                </div>
              </div>
            </div>
          )}

          {/* Take Home Pay */}
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-500/30">
            <div className="text-center mb-6">
              <div className="text-sm text-slate-400 mb-1">NHS Take Home Pay</div>
              <div className="text-5xl font-bold text-white mb-2">
                {formatCurrency(result.netSalary)}
              </div>
              <div className="text-lg text-cyan-400">per year</div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400">Monthly</div>
                <div className="text-white font-medium">{formatCurrency(result.monthly.net)}</div>
              </div>
              <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400">Weekly</div>
                <div className="text-white font-medium">{formatCurrency(result.weekly.net)}</div>
              </div>
              <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400">Daily</div>
                <div className="text-white font-medium">{formatCurrency(result.daily.net)}</div>
              </div>
            </div>
          </div>

          {/* Deductions Breakdown */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Annual Deductions</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Gross Salary</span>
                <span className="text-white font-medium">{formatCurrency(totalSalary)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Income Tax</span>
                <span className="text-red-400 font-medium">-{formatCurrency(result.incomeTax)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">National Insurance</span>
                <span className="text-amber-400 font-medium">-{formatCurrency(result.nationalInsurance)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">NHS Pension ({pensionRate}%)</span>
                <span className="text-cyan-400 font-medium">-{formatCurrency(result.pensionContribution)}</span>
              </div>
              <div className="pt-3 border-t border-slate-700 flex justify-between items-center">
                <span className="text-white font-semibold">Take Home Pay</span>
                <span className="text-cyan-400 font-bold text-lg">{formatCurrency(result.netSalary)}</span>
              </div>
            </div>
          </div>

          {/* Effective Rates */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Effective Tax Rate</div>
                <div className="text-2xl font-bold text-white">{result.effectiveTaxRate.toFixed(1)}%</div>
                <div className="text-xs text-slate-500">Tax + NI</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Total Deductions</div>
                <div className="text-2xl font-bold text-white">
                  {((result.incomeTax + result.nationalInsurance + result.pensionContribution) / totalSalary * 100).toFixed(1)}%
                </div>
                <div className="text-xs text-slate-500">Including pension</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
