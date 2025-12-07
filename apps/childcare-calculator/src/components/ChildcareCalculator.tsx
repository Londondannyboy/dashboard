'use client'

import { useState, useCallback } from 'react'
import {
  calculateChildcareCosts,
  regions,
  childcareTypes,
  ageGroups,
  getHourlyRate,
  type Child,
  type ChildcareInput,
  type ChildcareResult,
  type Region,
  type ChildcareType,
  type AgeGroup,
} from '../lib/childcare-calculator'

function generateId(): string {
  return Math.random().toString(36).substring(2, 9)
}

function createDefaultChild(): Child {
  return {
    id: generateId(),
    ageGroup: '2-years',
    hoursPerWeek: 30,
    weeksPerYear: 48,
    childcareType: 'nursery',
  }
}

export function ChildcareCalculator() {
  const [children, setChildren] = useState<Child[]>([createDefaultChild()])
  const [region, setRegion] = useState<Region>('south-east')
  const [householdIncome, setHouseholdIncome] = useState(50000)
  const [bothParentsWorking, setBothParentsWorking] = useState(true)
  const [singleParent, setSingleParent] = useState(false)
  const [receiveUniversalCredit, setReceiveUniversalCredit] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const addChild = useCallback(() => {
    if (children.length < 5) {
      setChildren([...children, createDefaultChild()])
    }
  }, [children])

  const removeChild = useCallback((id: string) => {
    if (children.length > 1) {
      setChildren(children.filter((child) => child.id !== id))
    }
  }, [children])

  const updateChild = useCallback((id: string, updates: Partial<Child>) => {
    setChildren(children.map((child) =>
      child.id === id ? { ...child, ...updates } : child
    ))
  }, [children])

  const input: ChildcareInput = {
    children,
    region,
    householdIncome,
    bothParentsWorking,
    singleParent,
    receiveUniversalCredit,
  }

  const result: ChildcareResult = calculateChildcareCosts(input)

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Region Selection */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Your Region
            </h3>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value as Region)}
              className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {regions.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* Children Section */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Your Children
              </h3>
              <button
                onClick={addChild}
                disabled={children.length >= 5}
                className="text-sm bg-pink-500/20 text-pink-400 px-3 py-1 rounded-lg hover:bg-pink-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                + Add Child
              </button>
            </div>

            <div className="space-y-4">
              {children.map((child, index) => (
                <div key={child.id} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-medium">Child {index + 1}</span>
                    {children.length > 1 && (
                      <button
                        onClick={() => removeChild(child.id)}
                        className="text-slate-400 hover:text-red-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Age Group</label>
                      <select
                        value={child.ageGroup}
                        onChange={(e) => updateChild(child.id, { ageGroup: e.target.value as AgeGroup })}
                        className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      >
                        {ageGroups.map((age) => (
                          <option key={age.value} value={age.value}>
                            {age.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Childcare Type</label>
                      <select
                        value={child.childcareType}
                        onChange={(e) => updateChild(child.id, { childcareType: e.target.value as ChildcareType })}
                        className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      >
                        {childcareTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Hours per Week</label>
                      <input
                        type="number"
                        min={1}
                        max={60}
                        value={child.hoursPerWeek}
                        onChange={(e) => updateChild(child.id, { hoursPerWeek: parseInt(e.target.value) || 0 })}
                        className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-slate-400 block mb-1">Weeks per Year</label>
                      <input
                        type="number"
                        min={1}
                        max={52}
                        value={child.weeksPerYear}
                        onChange={(e) => updateChild(child.id, { weeksPerYear: parseInt(e.target.value) || 0 })}
                        className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-700/50">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Hourly rate for {child.ageGroup.replace('-', ' ')}</span>
                      <span className="text-pink-400 font-medium">
                        {formatCurrency(getHourlyRate(child.childcareType, child.ageGroup, region))}/hr
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Government Support Section */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full flex items-center justify-between text-lg font-semibold text-white"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Government Support
              </span>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showAdvanced && (
              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-sm text-slate-400 block mb-2">Household Income (per year)</label>
                  <input
                    type="number"
                    value={householdIncome}
                    onChange={(e) => setHouseholdIncome(parseInt(e.target.value) || 0)}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={singleParent}
                      onChange={(e) => {
                        setSingleParent(e.target.checked)
                        if (e.target.checked) setBothParentsWorking(false)
                      }}
                    />
                    <span className="text-slate-300">Single parent household</span>
                  </label>

                  {!singleParent && (
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={bothParentsWorking}
                        onChange={(e) => setBothParentsWorking(e.target.checked)}
                      />
                      <span className="text-slate-300">Both parents working (16+ hours/week each)</span>
                    </label>
                  )}

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={receiveUniversalCredit}
                      onChange={(e) => setReceiveUniversalCredit(e.target.checked)}
                    />
                    <span className="text-slate-300">Receiving Universal Credit</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Result Card */}
          <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-pink-500/30">
            <h3 className="text-lg font-semibold text-white mb-4">Your Childcare Costs</h3>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-xs text-slate-400 mb-1">Weekly</p>
                <p className="text-xl font-bold text-white">{formatCurrency(result.netCostWeekly)}</p>
              </div>
              <div className="text-center border-x border-slate-700/50">
                <p className="text-xs text-slate-400 mb-1">Monthly</p>
                <p className="text-xl font-bold text-white">{formatCurrency(result.netCostMonthly)}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-400 mb-1">Yearly</p>
                <p className="text-xl font-bold text-white">{formatCurrency(result.netCostYearly)}</p>
              </div>
            </div>

            {result.governmentSupport.totalSupport > 0 && (
              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30">
                <div className="flex items-center gap-2 text-green-400 font-medium mb-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Government Support Included
                </div>
                <p className="text-sm text-slate-400">
                  You could save up to <span className="text-green-400 font-medium">{formatCurrency(result.governmentSupport.totalSupport)}</span> per year
                </p>
              </div>
            )}
          </div>

          {/* Cost Breakdown */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Cost Breakdown</h3>

            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-slate-700/50">
                <span className="text-slate-400">Gross Childcare Cost</span>
                <span className="text-white font-medium">{formatCurrency(result.grossCostYearly)}/year</span>
              </div>

              {result.governmentSupport.freeHours15 > 0 && (
                <div className="flex justify-between py-2 border-b border-slate-700/50">
                  <span className="text-slate-400">Free Hours Entitlement</span>
                  <span className="text-green-400 font-medium">-{formatCurrency(result.governmentSupport.freeHours15)}</span>
                </div>
              )}

              {result.governmentSupport.taxFreeChildcare > 0 && (
                <div className="flex justify-between py-2 border-b border-slate-700/50">
                  <span className="text-slate-400">Tax-Free Childcare</span>
                  <span className="text-green-400 font-medium">-{formatCurrency(result.governmentSupport.taxFreeChildcare)}</span>
                </div>
              )}

              {result.governmentSupport.universalCreditSupport > 0 && (
                <div className="flex justify-between py-2 border-b border-slate-700/50">
                  <span className="text-slate-400">Universal Credit Support</span>
                  <span className="text-green-400 font-medium">-{formatCurrency(result.governmentSupport.universalCreditSupport)}</span>
                </div>
              )}

              <div className="flex justify-between py-2 bg-pink-500/10 -mx-6 px-6 rounded-lg">
                <span className="text-white font-semibold">Net Cost (You Pay)</span>
                <span className="text-pink-400 font-bold">{formatCurrency(result.netCostYearly)}/year</span>
              </div>
            </div>
          </div>

          {/* Per Child Breakdown */}
          {result.breakdown.length > 1 && (
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Per Child Costs</h3>
              <div className="space-y-3">
                {result.breakdown.map((child, index) => (
                  <div key={child.childId} className="flex justify-between py-2 border-b border-slate-700/50 last:border-0">
                    <div>
                      <span className="text-white">Child {index + 1}</span>
                      <span className="text-xs text-slate-500 ml-2">
                        ({child.ageGroup.replace('-', ' ')}, {child.childcareType})
                      </span>
                    </div>
                    <span className="text-pink-400 font-medium">{formatCurrency(child.yearlyCost)}/year</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Eligibility Info */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Your Eligibility</h3>
            <div className="space-y-3">
              {children.map((child, index) => {
                const breakdown = result.breakdown[index]
                return (
                  <div key={child.id} className="bg-slate-900/50 rounded-xl p-4">
                    <p className="text-white font-medium mb-2">Child {index + 1} ({child.ageGroup.replace('-', ' ')})</p>
                    <div className="space-y-2 text-sm">
                      {breakdown.freeHoursEntitlement > 0 ? (
                        <div className="flex items-center gap-2 text-green-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Eligible for {breakdown.freeHoursEntitlement} free hours/week</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span>Not eligible for free hours (age/work status)</span>
                        </div>
                      )}

                      {breakdown.taxFreeChildcareContribution > 0 ? (
                        <div className="flex items-center gap-2 text-green-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Tax-Free Childcare: {formatCurrency(breakdown.taxFreeChildcareContribution)}/year</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-slate-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span>Tax-Free Childcare: Check eligibility</span>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
