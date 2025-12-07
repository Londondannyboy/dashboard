'use client'

import { useState, useMemo } from 'react'
import {
  calculateSalary,
  formatCurrency,
  type Region,
  type StudentLoanPlan,
  type SalaryInput,
} from '../lib/salary-calculator'

const PRESET_MONTHLY = [2000, 2500, 3000, 3500, 4000, 5000, 6000, 8000]

export function MonthlySalaryCalculator() {
  const [monthlySalary, setMonthlySalary] = useState<number>(3000)
  const [inputValue, setInputValue] = useState('3,000')
  const [region, setRegion] = useState<Region>('england')
  const [pensionPercent, setPensionPercent] = useState<number>(5)
  const [studentLoan, setStudentLoan] = useState<StudentLoanPlan>('none')

  // Calculate annual salary from monthly
  const annualSalary = useMemo(() => {
    return monthlySalary * 12
  }, [monthlySalary])

  // Calculate take home pay
  const input: SalaryInput = useMemo(() => ({
    grossSalary: annualSalary,
    region,
    pensionContribution: pensionPercent,
    pensionType: 'percentage',
    studentLoan,
    hasPostgraduateLoan: false,
    noNI: false,
    blindPersonsAllowance: false,
    marriageAllowance: 'none',
  }), [annualSalary, region, pensionPercent, studentLoan])

  const result = useMemo(() => calculateSalary(input), [input])

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '')
    const num = parseInt(raw) || 0
    setMonthlySalary(num)
    setInputValue(num.toLocaleString('en-GB'))
  }

  const handlePresetClick = (preset: number) => {
    setMonthlySalary(preset)
    setInputValue(preset.toLocaleString('en-GB'))
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Monthly Salary Input */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Monthly Gross Salary
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400">
                £
              </span>
              <input
                type="text"
                value={inputValue}
                onChange={handleSalaryChange}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl pl-10 pr-20 py-4 text-2xl font-semibold text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="3,000"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                /month
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {PRESET_MONTHLY.map((preset) => (
                <button
                  key={preset}
                  onClick={() => handlePresetClick(preset)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    monthlySalary === preset
                      ? 'bg-violet-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  £{preset.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* Region & Deductions */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Tax Region</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setRegion('england')}
                    className={`p-3 rounded-lg transition-all text-sm ${
                      region === 'england'
                        ? 'bg-violet-500/20 border-2 border-violet-500 text-white'
                        : 'bg-slate-700/30 border-2 border-transparent text-slate-300 hover:bg-slate-700/50'
                    }`}
                  >
                    England/Wales/NI
                  </button>
                  <button
                    onClick={() => setRegion('scotland')}
                    className={`p-3 rounded-lg transition-all text-sm ${
                      region === 'scotland'
                        ? 'bg-violet-500/20 border-2 border-violet-500 text-white'
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
                  value={pensionPercent}
                  onChange={(e) => setPensionPercent(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-violet-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Student Loan</label>
                <select
                  value={studentLoan}
                  onChange={(e) => setStudentLoan(e.target.value as StudentLoanPlan)}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="none">None</option>
                  <option value="plan1">Plan 1</option>
                  <option value="plan2">Plan 2</option>
                  <option value="plan4">Plan 4 (Scotland)</option>
                  <option value="plan5">Plan 5</option>
                </select>
              </div>
            </div>
          </div>

          {/* Annual Equivalent */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30">
            <h3 className="text-lg font-semibold text-white mb-3">Annual Equivalent</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">
                {formatCurrency(annualSalary)}
              </div>
              <div className="text-sm text-slate-400 mt-2">
                £{monthlySalary.toLocaleString()} × 12 months
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Monthly Take Home Pay */}
          <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl p-6 border border-violet-500/30">
            <div className="text-center mb-6">
              <div className="text-sm text-slate-400 mb-1">Monthly Take Home Pay</div>
              <div className="text-5xl font-bold text-white mb-2">
                {formatCurrency(result.monthly.net)}
              </div>
              <div className="text-lg text-violet-400">per month (net)</div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400">Weekly</div>
                <div className="text-white font-medium">{formatCurrency(result.weekly.net)}</div>
              </div>
              <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400">Annual</div>
                <div className="text-white font-medium">{formatCurrency(result.netSalary)}</div>
              </div>
              <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400">Daily</div>
                <div className="text-white font-medium">{formatCurrency(result.daily.net)}</div>
              </div>
            </div>
          </div>

          {/* Monthly Deductions */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Monthly Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Gross Monthly Salary</span>
                <span className="text-white font-medium">{formatCurrency(monthlySalary)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Income Tax</span>
                <span className="text-red-400 font-medium">-{formatCurrency(result.monthly.tax)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">National Insurance</span>
                <span className="text-amber-400 font-medium">-{formatCurrency(result.monthly.ni)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Pension ({pensionPercent}%)</span>
                <span className="text-purple-400 font-medium">-{formatCurrency(result.monthly.pension)}</span>
              </div>
              {result.studentLoanRepayment > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Student Loan</span>
                  <span className="text-blue-400 font-medium">-{formatCurrency(result.monthly.studentLoan)}</span>
                </div>
              )}
              <div className="pt-3 border-t border-slate-700 flex justify-between items-center">
                <span className="text-white font-semibold">Take Home Pay</span>
                <span className="text-violet-400 font-bold text-lg">{formatCurrency(result.monthly.net)}</span>
              </div>
            </div>
          </div>

          {/* Annual Deductions */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Annual Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Gross Annual Salary</span>
                <span className="text-white font-medium">{formatCurrency(annualSalary)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Total Income Tax</span>
                <span className="text-red-400 font-medium">-{formatCurrency(result.incomeTax)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Total National Insurance</span>
                <span className="text-amber-400 font-medium">-{formatCurrency(result.nationalInsurance)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Total Pension</span>
                <span className="text-purple-400 font-medium">-{formatCurrency(result.pensionContribution)}</span>
              </div>
              <div className="pt-3 border-t border-slate-700 flex justify-between items-center">
                <span className="text-white font-semibold">Annual Take Home</span>
                <span className="text-violet-400 font-bold text-lg">{formatCurrency(result.netSalary)}</span>
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
                <div className="text-sm text-slate-400 mb-1">Gross → Net Monthly</div>
                <div className="text-2xl font-bold text-white">
                  {formatCurrency(monthlySalary)} → {formatCurrency(result.monthly.net)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
