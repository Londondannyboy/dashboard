'use client'

import { useState, useMemo } from 'react'
import {
  calculateSalary,
  formatCurrency,
  formatCurrencyPrecise,
  getTaxBandInfo,
  getNIBandInfo,
  type Region,
  type StudentLoanPlan,
  type SalaryInput,
} from '../lib/salary-calculator'
import { SalaryPieChart, TaxBreakdownChart, DeductionsBarChart } from './SalaryCharts'

const PRESET_SALARIES = [25000, 35000, 50000, 75000, 100000, 150000]

const STUDENT_LOAN_OPTIONS: { value: StudentLoanPlan; label: string }[] = [
  { value: 'none', label: 'None' },
  { value: 'plan1', label: 'Plan 1 (pre-2012)' },
  { value: 'plan2', label: 'Plan 2 (post-2012)' },
  { value: 'plan4', label: 'Plan 4 (Scotland)' },
  { value: 'plan5', label: 'Plan 5 (post-2023)' },
]

type PayPeriod = 'yearly' | 'monthly' | 'weekly' | 'daily'

export function SalaryCalculator() {
  const [salary, setSalary] = useState<number>(35000)
  const [inputValue, setInputValue] = useState('35,000')
  const [region, setRegion] = useState<Region>('england')
  const [pensionPercent, setPensionPercent] = useState<number>(5)
  const [studentLoan, setStudentLoan] = useState<StudentLoanPlan>('none')
  const [hasPostgraduateLoan, setHasPostgraduateLoan] = useState(false)
  const [noNI, setNoNI] = useState(false)
  const [blindPersonsAllowance, setBlindPersonsAllowance] = useState(false)
  const [marriageAllowance, setMarriageAllowance] = useState<'none' | 'receiving' | 'transferring'>('none')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [displayPeriod, setDisplayPeriod] = useState<PayPeriod>('yearly')

  const input: SalaryInput = useMemo(() => ({
    grossSalary: salary,
    region,
    pensionContribution: pensionPercent,
    pensionType: 'percentage',
    studentLoan,
    hasPostgraduateLoan,
    noNI,
    blindPersonsAllowance,
    marriageAllowance,
  }), [salary, region, pensionPercent, studentLoan, hasPostgraduateLoan, noNI, blindPersonsAllowance, marriageAllowance])

  const result = useMemo(() => calculateSalary(input), [input])

  const taxBandInfo = useMemo(() => getTaxBandInfo(region), [region])
  const niBandInfo = useMemo(() => getNIBandInfo(), [])

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

  const currentPeriod = result[displayPeriod]

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
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl pl-10 pr-4 py-4 text-2xl font-semibold text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="35,000"
              />
            </div>

            {/* Quick presets */}
            <div className="flex flex-wrap gap-2 mt-4">
              {PRESET_SALARIES.map((presetSalary) => (
                <button
                  key={presetSalary}
                  onClick={() => handlePresetClick(presetSalary)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    salary === presetSalary
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  £{(presetSalary / 1000)}k
                </button>
              ))}
            </div>
          </div>

          {/* Region Selection */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Tax Region
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setRegion('england')}
                className={`p-4 rounded-xl transition-all ${
                  region === 'england'
                    ? 'bg-emerald-500/20 border-2 border-emerald-500'
                    : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                }`}
              >
                <div className="font-medium text-white">England, Wales & NI</div>
                <div className="text-xs text-slate-400">Standard UK tax rates</div>
              </button>
              <button
                onClick={() => setRegion('scotland')}
                className={`p-4 rounded-xl transition-all ${
                  region === 'scotland'
                    ? 'bg-emerald-500/20 border-2 border-emerald-500'
                    : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                }`}
              >
                <div className="font-medium text-white">Scotland</div>
                <div className="text-xs text-slate-400">Scottish tax rates</div>
              </button>
            </div>
          </div>

          {/* Pension & Student Loan */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <div className="space-y-4">
              {/* Pension */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Pension Contribution
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="1"
                    value={pensionPercent}
                    onChange={(e) => setPensionPercent(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <span className="text-white font-medium w-12 text-right">{pensionPercent}%</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Salary sacrifice reduces tax & NI
                </p>
              </div>

              {/* Student Loan */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Student Loan
                </label>
                <select
                  value={studentLoan}
                  onChange={(e) => setStudentLoan(e.target.value as StudentLoanPlan)}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {STUDENT_LOAN_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Postgraduate Loan */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPostgraduateLoan}
                  onChange={(e) => setHasPostgraduateLoan(e.target.checked)}
                  className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-emerald-500 focus:ring-emerald-500"
                />
                <span className="text-sm text-slate-300">Postgraduate Loan (6% over £21,000)</span>
              </label>
            </div>
          </div>

          {/* Advanced Options Toggle */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="w-full text-left bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:bg-slate-800/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-300">Advanced Options</span>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {showAdvanced && (
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={noNI}
                  onChange={(e) => setNoNI(e.target.checked)}
                  className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-emerald-500 focus:ring-emerald-500"
                />
                <span className="text-sm text-slate-300">No NI (State Pension Age+)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={blindPersonsAllowance}
                  onChange={(e) => setBlindPersonsAllowance(e.target.checked)}
                  className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-emerald-500 focus:ring-emerald-500"
                />
                <span className="text-sm text-slate-300">Blind Person's Allowance (+£3,070)</span>
              </label>

              <div>
                <label className="block text-sm text-slate-300 mb-2">Marriage Allowance</label>
                <select
                  value={marriageAllowance}
                  onChange={(e) => setMarriageAllowance(e.target.value as typeof marriageAllowance)}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="none">Not applicable</option>
                  <option value="receiving">Receiving (+£1,260 allowance)</option>
                  <option value="transferring">Transferring (-£1,260 allowance)</option>
                </select>
              </div>
            </div>
          )}

          {/* Tax Rates Info */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">{taxBandInfo.title}</h3>
            <div className="space-y-2">
              {taxBandInfo.bands.map((band, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-slate-300">{band.range}</span>
                  <span className="font-medium text-emerald-400">{band.rate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Result */}
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-6 border border-emerald-500/30">
            <div className="text-center">
              <div className="text-sm text-slate-400 mb-1">Take Home Pay</div>
              <div className="text-5xl font-bold text-white mb-2">
                {formatCurrency(currentPeriod.net)}
              </div>
              <div className="text-lg text-emerald-400">
                {displayPeriod === 'yearly' ? 'per year' : displayPeriod === 'monthly' ? 'per month' : displayPeriod === 'weekly' ? 'per week' : 'per day'}
              </div>
            </div>

            {/* Period Selector */}
            <div className="flex justify-center gap-2 mt-4">
              {(['yearly', 'monthly', 'weekly', 'daily'] as PayPeriod[]).map((period) => (
                <button
                  key={period}
                  onClick={() => setDisplayPeriod(period)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    displayPeriod === period
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </button>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="mt-6 pt-6 border-t border-slate-600/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-slate-400">Gross Salary</div>
                  <div className="text-white font-medium">{formatCurrency(currentPeriod.gross)}</div>
                </div>
                <div>
                  <div className="text-slate-400">Income Tax</div>
                  <div className="text-red-400 font-medium">-{formatCurrency(currentPeriod.tax)}</div>
                </div>
                <div>
                  <div className="text-slate-400">National Insurance</div>
                  <div className="text-amber-400 font-medium">-{formatCurrency(currentPeriod.ni)}</div>
                </div>
                <div>
                  <div className="text-slate-400">Pension</div>
                  <div className="text-purple-400 font-medium">-{formatCurrency(currentPeriod.pension)}</div>
                </div>
                {currentPeriod.studentLoan > 0 && (
                  <div>
                    <div className="text-slate-400">Student Loan</div>
                    <div className="text-blue-400 font-medium">-{formatCurrency(currentPeriod.studentLoan)}</div>
                  </div>
                )}
                {currentPeriod.postgraduateLoan > 0 && (
                  <div>
                    <div className="text-slate-400">PG Loan</div>
                    <div className="text-cyan-400 font-medium">-{formatCurrency(currentPeriod.postgraduateLoan)}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Effective Tax Rate */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Effective Tax Rate</div>
                <div className="text-3xl font-bold text-white">{result.effectiveTaxRate.toFixed(1)}%</div>
                <div className="text-xs text-slate-500">Tax + NI as % of gross</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Marginal Rate</div>
                <div className="text-3xl font-bold text-white">{result.marginalTaxRate.toFixed(0)}%</div>
                <div className="text-xs text-slate-500">Tax on next £1 earned</div>
              </div>
            </div>
          </div>

          {/* Salary Breakdown Chart */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Salary Breakdown</h3>
            <SalaryPieChart result={result} />
          </div>

          {/* Deductions Chart */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Annual Deductions</h3>
            <DeductionsBarChart result={result} />
          </div>

          {/* Tax by Band Chart */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Tax by Band</h3>
            <TaxBreakdownChart result={result} />
          </div>
        </div>
      </div>

      {/* Detailed Breakdown Table */}
      <div className="mt-6 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
        <h3 className="text-lg font-semibold text-white mb-4">Detailed Calculation Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-slate-400 border-b border-slate-700">
                <th className="text-left py-3 px-4">Description</th>
                <th className="text-right py-3 px-4">Yearly</th>
                <th className="text-right py-3 px-4">Monthly</th>
                <th className="text-right py-3 px-4">Weekly</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4 text-slate-300">Gross Salary</td>
                <td className="text-right py-3 px-4 text-white">{formatCurrencyPrecise(result.yearly.gross)}</td>
                <td className="text-right py-3 px-4 text-white">{formatCurrencyPrecise(result.monthly.gross)}</td>
                <td className="text-right py-3 px-4 text-white">{formatCurrencyPrecise(result.weekly.gross)}</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4 text-slate-300">Personal Allowance</td>
                <td className="text-right py-3 px-4 text-emerald-400" colSpan={3}>{formatCurrency(result.personalAllowance)}</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4 text-slate-300">Income Tax</td>
                <td className="text-right py-3 px-4 text-red-400">-{formatCurrencyPrecise(result.yearly.tax)}</td>
                <td className="text-right py-3 px-4 text-red-400">-{formatCurrencyPrecise(result.monthly.tax)}</td>
                <td className="text-right py-3 px-4 text-red-400">-{formatCurrencyPrecise(result.weekly.tax)}</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4 text-slate-300">National Insurance</td>
                <td className="text-right py-3 px-4 text-amber-400">-{formatCurrencyPrecise(result.yearly.ni)}</td>
                <td className="text-right py-3 px-4 text-amber-400">-{formatCurrencyPrecise(result.monthly.ni)}</td>
                <td className="text-right py-3 px-4 text-amber-400">-{formatCurrencyPrecise(result.weekly.ni)}</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-4 text-slate-300">Pension ({pensionPercent}%)</td>
                <td className="text-right py-3 px-4 text-purple-400">-{formatCurrencyPrecise(result.yearly.pension)}</td>
                <td className="text-right py-3 px-4 text-purple-400">-{formatCurrencyPrecise(result.monthly.pension)}</td>
                <td className="text-right py-3 px-4 text-purple-400">-{formatCurrencyPrecise(result.weekly.pension)}</td>
              </tr>
              {result.studentLoanRepayment > 0 && (
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 text-slate-300">Student Loan</td>
                  <td className="text-right py-3 px-4 text-blue-400">-{formatCurrencyPrecise(result.yearly.studentLoan)}</td>
                  <td className="text-right py-3 px-4 text-blue-400">-{formatCurrencyPrecise(result.monthly.studentLoan)}</td>
                  <td className="text-right py-3 px-4 text-blue-400">-{formatCurrencyPrecise(result.weekly.studentLoan)}</td>
                </tr>
              )}
              {result.postgraduateLoanRepayment > 0 && (
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 text-slate-300">Postgraduate Loan</td>
                  <td className="text-right py-3 px-4 text-cyan-400">-{formatCurrencyPrecise(result.yearly.postgraduateLoan)}</td>
                  <td className="text-right py-3 px-4 text-cyan-400">-{formatCurrencyPrecise(result.monthly.postgraduateLoan)}</td>
                  <td className="text-right py-3 px-4 text-cyan-400">-{formatCurrencyPrecise(result.weekly.postgraduateLoan)}</td>
                </tr>
              )}
              <tr className="bg-emerald-500/10">
                <td className="py-3 px-4 text-white font-semibold">Take Home Pay</td>
                <td className="text-right py-3 px-4 text-emerald-400 font-bold">{formatCurrencyPrecise(result.yearly.net)}</td>
                <td className="text-right py-3 px-4 text-emerald-400 font-bold">{formatCurrencyPrecise(result.monthly.net)}</td>
                <td className="text-right py-3 px-4 text-emerald-400 font-bold">{formatCurrencyPrecise(result.weekly.net)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
