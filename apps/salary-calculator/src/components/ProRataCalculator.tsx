'use client'

import { useState, useMemo } from 'react'
import {
  calculateSalary,
  formatCurrency,
  formatCurrencyPrecise,
  type Region,
  type StudentLoanPlan,
  type SalaryInput,
} from '../lib/salary-calculator'

const PRESET_SALARIES = [25000, 30000, 35000, 40000, 50000, 60000]

const COMMON_PATTERNS = [
  { label: '4 days (80%)', hours: 30, ftHours: 37.5 },
  { label: '3 days (60%)', hours: 22.5, ftHours: 37.5 },
  { label: 'Half-time (50%)', hours: 18.75, ftHours: 37.5 },
  { label: '4 days (32hrs)', hours: 32, ftHours: 40 },
]

export function ProRataCalculator() {
  const [fullTimeSalary, setFullTimeSalary] = useState<number>(35000)
  const [inputValue, setInputValue] = useState('35,000')
  const [yourHours, setYourHours] = useState<number>(22.5)
  const [fullTimeHours, setFullTimeHours] = useState<number>(37.5)
  const [region, setRegion] = useState<Region>('england')
  const [pensionPercent, setPensionPercent] = useState<number>(5)
  const [studentLoan, setStudentLoan] = useState<StudentLoanPlan>('none')

  // Calculate pro rata salary
  const proRataPercentage = useMemo(() => {
    return fullTimeHours > 0 ? (yourHours / fullTimeHours) * 100 : 0
  }, [yourHours, fullTimeHours])

  const proRataSalary = useMemo(() => {
    return fullTimeHours > 0 ? Math.round(fullTimeSalary * (yourHours / fullTimeHours)) : 0
  }, [fullTimeSalary, yourHours, fullTimeHours])

  // Calculate take home pay
  const input: SalaryInput = useMemo(() => ({
    grossSalary: proRataSalary,
    region,
    pensionContribution: pensionPercent,
    pensionType: 'percentage',
    studentLoan,
    hasPostgraduateLoan: false,
    noNI: false,
    blindPersonsAllowance: false,
    marriageAllowance: 'none',
  }), [proRataSalary, region, pensionPercent, studentLoan])

  const result = useMemo(() => calculateSalary(input), [input])

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '')
    const num = parseInt(raw) || 0
    setFullTimeSalary(num)
    setInputValue(num.toLocaleString('en-GB'))
  }

  const handlePresetClick = (presetSalary: number) => {
    setFullTimeSalary(presetSalary)
    setInputValue(presetSalary.toLocaleString('en-GB'))
  }

  const handlePatternClick = (pattern: typeof COMMON_PATTERNS[0]) => {
    setYourHours(pattern.hours)
    setFullTimeHours(pattern.ftHours)
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Full-Time Salary Input */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Full-Time Equivalent Salary
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400">
                £
              </span>
              <input
                type="text"
                value={inputValue}
                onChange={handleSalaryChange}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl pl-10 pr-4 py-4 text-2xl font-semibold text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="35,000"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {PRESET_SALARIES.map((presetSalary) => (
                <button
                  key={presetSalary}
                  onClick={() => handlePresetClick(presetSalary)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    fullTimeSalary === presetSalary
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  £{(presetSalary / 1000)}k
                </button>
              ))}
            </div>
          </div>

          {/* Hours Input */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Working Hours
            </label>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Your Weekly Hours</label>
                <input
                  type="number"
                  value={yourHours}
                  onChange={(e) => setYourHours(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  step="0.5"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Full-Time Hours</label>
                <input
                  type="number"
                  value={fullTimeHours}
                  onChange={(e) => setFullTimeHours(parseFloat(e.target.value) || 0)}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  step="0.5"
                />
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-3">Quick patterns:</p>
            <div className="flex flex-wrap gap-2">
              {COMMON_PATTERNS.map((pattern) => (
                <button
                  key={pattern.label}
                  onClick={() => handlePatternClick(pattern)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    yourHours === pattern.hours && fullTimeHours === pattern.ftHours
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {pattern.label}
                </button>
              ))}
            </div>
          </div>

          {/* Region & Deductions */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Tax Region
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setRegion('england')}
                    className={`p-3 rounded-lg transition-all text-sm ${
                      region === 'england'
                        ? 'bg-emerald-500/20 border-2 border-emerald-500 text-white'
                        : 'bg-slate-700/30 border-2 border-transparent text-slate-300 hover:bg-slate-700/50'
                    }`}
                  >
                    England/Wales/NI
                  </button>
                  <button
                    onClick={() => setRegion('scotland')}
                    className={`p-3 rounded-lg transition-all text-sm ${
                      region === 'scotland'
                        ? 'bg-emerald-500/20 border-2 border-emerald-500 text-white'
                        : 'bg-slate-700/30 border-2 border-transparent text-slate-300 hover:bg-slate-700/50'
                    }`}
                  >
                    Scotland
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Pension Contribution: {pensionPercent}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={pensionPercent}
                  onChange={(e) => setPensionPercent(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Pro Rata Result */}
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30">
            <div className="text-center mb-6">
              <div className="text-sm text-slate-400 mb-1">Pro Rata Salary</div>
              <div className="text-5xl font-bold text-white mb-2">
                {formatCurrency(proRataSalary)}
              </div>
              <div className="text-lg text-purple-400">
                {proRataPercentage.toFixed(1)}% of full-time
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-900/30 rounded-lg p-3">
                <div className="text-slate-400">Full-Time Salary</div>
                <div className="text-white font-medium">{formatCurrency(fullTimeSalary)}</div>
              </div>
              <div className="bg-slate-900/30 rounded-lg p-3">
                <div className="text-slate-400">Working Pattern</div>
                <div className="text-white font-medium">{yourHours} / {fullTimeHours} hrs</div>
              </div>
            </div>
          </div>

          {/* Take Home Pay */}
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-6 border border-emerald-500/30">
            <div className="text-center mb-6">
              <div className="text-sm text-slate-400 mb-1">Take Home Pay (Net)</div>
              <div className="text-4xl font-bold text-white mb-1">
                {formatCurrency(result.netSalary)}
              </div>
              <div className="text-emerald-400">per year</div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                <div className="text-slate-400 text-xs">Monthly</div>
                <div className="text-white font-medium">{formatCurrency(result.monthly.net)}</div>
              </div>
              <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                <div className="text-slate-400 text-xs">Weekly</div>
                <div className="text-white font-medium">{formatCurrency(result.weekly.net)}</div>
              </div>
              <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                <div className="text-slate-400 text-xs">Daily</div>
                <div className="text-white font-medium">{formatCurrency(result.daily.net)}</div>
              </div>
            </div>
          </div>

          {/* Deductions Breakdown */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Annual Deductions</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Gross Pro Rata Salary</span>
                <span className="text-white font-medium">{formatCurrency(proRataSalary)}</span>
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
                <span className="text-slate-400">Pension ({pensionPercent}%)</span>
                <span className="text-purple-400 font-medium">-{formatCurrency(result.pensionContribution)}</span>
              </div>
              <div className="pt-3 border-t border-slate-700 flex justify-between items-center">
                <span className="text-white font-semibold">Take Home Pay</span>
                <span className="text-emerald-400 font-bold text-lg">{formatCurrency(result.netSalary)}</span>
              </div>
            </div>
          </div>

          {/* Pro Rata Holiday */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Pro Rata Holiday Entitlement</h3>
            <p className="text-sm text-slate-400 mb-3">
              Based on 28 days full-time entitlement (including bank holidays):
            </p>
            <div className="text-3xl font-bold text-emerald-400">
              {(28 * (yourHours / fullTimeHours)).toFixed(1)} days
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Minimum statutory entitlement: {(5.6 * (yourHours / 5)).toFixed(1)} weeks
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
