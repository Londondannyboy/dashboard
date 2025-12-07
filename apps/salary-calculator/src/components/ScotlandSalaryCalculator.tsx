'use client'

import { useState, useMemo } from 'react'
import {
  calculateSalary,
  formatCurrency,
  type StudentLoanPlan,
  type SalaryInput,
} from '../lib/salary-calculator'
import { SalaryPieChart, DeductionsBarChart } from './SalaryCharts'

const PRESET_SALARIES = [25000, 35000, 50000, 75000, 100000, 150000]

export function ScotlandSalaryCalculator() {
  const [salary, setSalary] = useState<number>(35000)
  const [inputValue, setInputValue] = useState('35,000')
  const [pensionPercent, setPensionPercent] = useState<number>(5)
  const [studentLoan, setStudentLoan] = useState<StudentLoanPlan>('none')

  // Calculate for both Scotland and England
  const scotlandInput: SalaryInput = useMemo(() => ({
    grossSalary: salary,
    region: 'scotland',
    pensionContribution: pensionPercent,
    pensionType: 'percentage',
    studentLoan,
    hasPostgraduateLoan: false,
    noNI: false,
    blindPersonsAllowance: false,
    marriageAllowance: 'none',
  }), [salary, pensionPercent, studentLoan])

  const englandInput: SalaryInput = useMemo(() => ({
    grossSalary: salary,
    region: 'england',
    pensionContribution: pensionPercent,
    pensionType: 'percentage',
    studentLoan,
    hasPostgraduateLoan: false,
    noNI: false,
    blindPersonsAllowance: false,
    marriageAllowance: 'none',
  }), [salary, pensionPercent, studentLoan])

  const scotlandResult = useMemo(() => calculateSalary(scotlandInput), [scotlandInput])
  const englandResult = useMemo(() => calculateSalary(englandInput), [englandInput])

  const taxDifference = scotlandResult.incomeTax - englandResult.incomeTax

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '')
    const num = parseInt(raw) || 0
    setSalary(num)
    setInputValue(num.toLocaleString('en-GB'))
  }

  const handlePresetClick = (presetSalary: number) => {
    setSalary(presetSalary)
    setInputValue(presetSalary.toLocaleString('en-GB'))
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Salary Input */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Annual Gross Salary
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400">
                £
              </span>
              <input
                type="text"
                value={inputValue}
                onChange={handleSalaryChange}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl pl-10 pr-4 py-4 text-2xl font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="35,000"
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {PRESET_SALARIES.map((presetSalary) => (
                <button
                  key={presetSalary}
                  onClick={() => handlePresetClick(presetSalary)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    salary === presetSalary
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  £{(presetSalary / 1000)}k
                </button>
              ))}
            </div>
          </div>

          {/* Deductions */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <div className="space-y-4">
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
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Student Loan
                </label>
                <select
                  value={studentLoan}
                  onChange={(e) => setStudentLoan(e.target.value as StudentLoanPlan)}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          {/* Tax Comparison */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30">
            <h3 className="text-lg font-semibold text-white mb-4">Scotland vs Rest of UK</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Scottish Income Tax</span>
                <span className="text-blue-400 font-medium">{formatCurrency(scotlandResult.incomeTax)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Rest of UK Income Tax</span>
                <span className="text-emerald-400 font-medium">{formatCurrency(englandResult.incomeTax)}</span>
              </div>
              <div className="pt-3 border-t border-slate-700 flex justify-between items-center">
                <span className="text-white font-medium">Difference</span>
                <span className={`font-bold ${taxDifference > 0 ? 'text-red-400' : taxDifference < 0 ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {taxDifference > 0 ? '+' : ''}{formatCurrency(taxDifference)}
                  <span className="text-xs text-slate-500 ml-1">
                    {taxDifference > 0 ? 'more' : taxDifference < 0 ? 'less' : ''}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Scottish Take Home Pay */}
          <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-6 border border-blue-500/30">
            <div className="text-center">
              <div className="text-sm text-slate-400 mb-1">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scottish Take Home Pay</div>
              <div className="text-5xl font-bold text-white mb-2">
                {formatCurrency(scotlandResult.netSalary)}
              </div>
              <div className="text-lg text-blue-400">
                {formatCurrency(scotlandResult.monthly.net)} per month
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-600/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-slate-400">Gross Salary</div>
                  <div className="text-white font-medium">{formatCurrency(salary)}</div>
                </div>
                <div>
                  <div className="text-slate-400">Income Tax</div>
                  <div className="text-red-400 font-medium">-{formatCurrency(scotlandResult.incomeTax)}</div>
                </div>
                <div>
                  <div className="text-slate-400">National Insurance</div>
                  <div className="text-amber-400 font-medium">-{formatCurrency(scotlandResult.nationalInsurance)}</div>
                </div>
                <div>
                  <div className="text-slate-400">Pension</div>
                  <div className="text-purple-400 font-medium">-{formatCurrency(scotlandResult.pensionContribution)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Effective Rates */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Effective Tax Rate</div>
                <div className="text-3xl font-bold text-white">{scotlandResult.effectiveTaxRate.toFixed(1)}%</div>
                <div className="text-xs text-slate-500">Tax + NI as % of gross</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Marginal Rate</div>
                <div className="text-3xl font-bold text-white">{scotlandResult.marginalTaxRate.toFixed(0)}%</div>
                <div className="text-xs text-slate-500">Tax on next £1 earned</div>
              </div>
            </div>
          </div>

          {/* Salary Breakdown Chart */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Salary Breakdown</h3>
            <SalaryPieChart result={scotlandResult} />
          </div>

          {/* Deductions Chart */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Annual Deductions</h3>
            <DeductionsBarChart result={scotlandResult} />
          </div>
        </div>
      </div>
    </div>
  )
}
