'use client'

import { useState, useMemo } from 'react'
import {
  calculateSalary,
  formatCurrency,
  type Region,
  type StudentLoanPlan,
  type SalaryInput,
} from '../lib/salary-calculator'

const PRESET_HOURLY_RATES = [10, 12.21, 15, 20, 25, 30, 40, 50]

export function HourlySalaryCalculator() {
  const [hourlyRate, setHourlyRate] = useState<number>(15)
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40)
  const [region, setRegion] = useState<Region>('england')
  const [pensionPercent, setPensionPercent] = useState<number>(5)
  const [studentLoan, setStudentLoan] = useState<StudentLoanPlan>('none')

  // Calculate annual salary from hourly rate
  const annualSalary = useMemo(() => {
    return Math.round(hourlyRate * hoursPerWeek * 52)
  }, [hourlyRate, hoursPerWeek])

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

  // Calculate hourly take home
  const hourlyTakeHome = useMemo(() => {
    return result.netSalary / (hoursPerWeek * 52)
  }, [result.netSalary, hoursPerWeek])

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Hourly Rate Input */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Hourly Rate
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400">
                £
              </span>
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(parseFloat(e.target.value) || 0)}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl pl-10 pr-4 py-4 text-2xl font-semibold text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="15.00"
                step="0.01"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                /hour
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {PRESET_HOURLY_RATES.map((rate) => (
                <button
                  key={rate}
                  onClick={() => setHourlyRate(rate)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    hourlyRate === rate
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  £{rate}
                </button>
              ))}
            </div>
          </div>

          {/* Hours Per Week */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Hours Per Week: {hoursPerWeek}
            </label>
            <input
              type="range"
              min="1"
              max="60"
              step="0.5"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2">
              <span>Part-time</span>
              <span>Full-time (40)</span>
              <span>Overtime</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {[20, 30, 35, 37.5, 40, 45].map((hours) => (
                <button
                  key={hours}
                  onClick={() => setHoursPerWeek(hours)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    hoursPerWeek === hours
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {hours}hrs
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
                  Pension: {pensionPercent}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={pensionPercent}
                  onChange={(e) => setPensionPercent(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Student Loan</label>
                <select
                  value={studentLoan}
                  onChange={(e) => setStudentLoan(e.target.value as StudentLoanPlan)}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Annual Salary Result */}
          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl p-6 border border-amber-500/30">
            <div className="text-center mb-4">
              <div className="text-sm text-slate-400 mb-1">Annual Salary (Gross)</div>
              <div className="text-5xl font-bold text-white mb-2">
                {formatCurrency(annualSalary)}
              </div>
              <div className="text-lg text-amber-400">
                £{hourlyRate.toFixed(2)}/hr × {hoursPerWeek}hrs × 52 weeks
              </div>
            </div>
          </div>

          {/* Take Home Pay */}
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-6 border border-emerald-500/30">
            <div className="text-center mb-4">
              <div className="text-sm text-slate-400 mb-1">Take Home Pay (Net)</div>
              <div className="text-4xl font-bold text-white mb-2">
                {formatCurrency(result.netSalary)}
              </div>
              <div className="text-emerald-400">per year</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400">Hourly (Net)</div>
                <div className="text-white font-medium">£{hourlyTakeHome.toFixed(2)}</div>
              </div>
              <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400">Daily (Net)</div>
                <div className="text-white font-medium">{formatCurrency(result.daily.net)}</div>
              </div>
              <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400">Weekly (Net)</div>
                <div className="text-white font-medium">{formatCurrency(result.weekly.net)}</div>
              </div>
              <div className="bg-slate-900/30 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400">Monthly (Net)</div>
                <div className="text-white font-medium">{formatCurrency(result.monthly.net)}</div>
              </div>
            </div>
          </div>

          {/* Deductions Breakdown */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Annual Deductions</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Gross Annual Salary</span>
                <span className="text-white font-medium">{formatCurrency(annualSalary)}</span>
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
              {result.studentLoanRepayment > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Student Loan</span>
                  <span className="text-blue-400 font-medium">-{formatCurrency(result.studentLoanRepayment)}</span>
                </div>
              )}
              <div className="pt-3 border-t border-slate-700 flex justify-between items-center">
                <span className="text-white font-semibold">Take Home Pay</span>
                <span className="text-emerald-400 font-bold text-lg">{formatCurrency(result.netSalary)}</span>
              </div>
            </div>
          </div>

          {/* Effective Rates */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Effective Tax Rate</div>
                <div className="text-2xl font-bold text-white">{result.effectiveTaxRate.toFixed(1)}%</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Gross → Net Hourly</div>
                <div className="text-2xl font-bold text-white">
                  £{hourlyRate.toFixed(2)} → £{hourlyTakeHome.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
