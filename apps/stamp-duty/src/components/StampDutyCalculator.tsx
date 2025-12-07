'use client'

import { useState, useMemo } from 'react'
import { calculateStampDuty, formatCurrency, getRateInfo, type BuyerType } from '../lib/stamp-duty'
import { StampDutyPieChart, StampDutyBarChart, ComparisonChart } from './StampDutyChart'

const BUYER_TYPES: { value: BuyerType; label: string; description: string }[] = [
  { value: 'standard', label: 'Standard Purchase', description: 'Buying a single residential property' },
  { value: 'first-time', label: 'First-Time Buyer', description: 'Never owned property before' },
  { value: 'additional', label: 'Additional Property', description: 'Already own another property (+5%)' },
  { value: 'non-uk-resident', label: 'Non-UK Resident', description: 'Living outside the UK (+2%)' },
]

const PRESET_PRICES = [250000, 350000, 500000, 750000, 1000000, 1500000, 2000000]

interface StampDutyCalculatorProps {
  defaultBuyerType?: BuyerType
}

export function StampDutyCalculator({ defaultBuyerType = 'standard' }: StampDutyCalculatorProps) {
  const [price, setPrice] = useState<number>(350000)
  const [buyerType, setBuyerType] = useState<BuyerType>(defaultBuyerType)
  const [inputValue, setInputValue] = useState('350,000')

  const result = useMemo(() => calculateStampDuty(price, buyerType), [price, buyerType])
  const rateInfo = useMemo(() => getRateInfo(buyerType), [buyerType])

  // Comparison data
  const comparisons = useMemo(() => {
    const standard = calculateStampDuty(price, 'standard')
    const firstTime = calculateStampDuty(price, 'first-time')
    const additional = calculateStampDuty(price, 'additional')
    const nonUk = calculateStampDuty(price, 'non-uk-resident')

    return [
      { type: 'first-time', label: 'First-Time', tax: firstTime.totalTax },
      { type: 'standard', label: 'Standard', tax: standard.totalTax },
      { type: 'additional', label: 'Additional', tax: additional.totalTax },
      { type: 'non-uk-resident', label: 'Non-UK', tax: nonUk.totalTax },
    ]
  }, [price])

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '')
    const num = parseInt(raw) || 0
    setPrice(num)
    setInputValue(num.toLocaleString('en-GB'))
  }

  const handlePresetClick = (presetPrice: number) => {
    setPrice(presetPrice)
    setInputValue(presetPrice.toLocaleString('en-GB'))
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Price Input */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Property Price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400">
                £
              </span>
              <input
                type="text"
                value={inputValue}
                onChange={handlePriceChange}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl pl-10 pr-4 py-4 text-2xl font-semibold text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="350,000"
              />
            </div>

            {/* Quick presets */}
            <div className="flex flex-wrap gap-2 mt-4">
              {PRESET_PRICES.map((presetPrice) => (
                <button
                  key={presetPrice}
                  onClick={() => handlePresetClick(presetPrice)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    price === presetPrice
                      ? 'bg-indigo-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  £{(presetPrice / 1000)}k
                </button>
              ))}
            </div>
          </div>

          {/* Buyer Type Selection */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Buyer Type
            </label>
            <div className="space-y-2">
              {BUYER_TYPES.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setBuyerType(type.value)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    buyerType === type.value
                      ? 'bg-indigo-500/20 border-2 border-indigo-500'
                      : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                  }`}
                >
                  <div className="font-medium text-white">{type.label}</div>
                  <div className="text-sm text-slate-400">{type.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Rate Information */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-2">{rateInfo.title}</h3>
            <p className="text-sm text-slate-400 mb-4">{rateInfo.description}</p>
            <div className="space-y-2">
              {rateInfo.bands.map((band, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-slate-300">{band.range}</span>
                  <span className="font-medium text-indigo-400">{band.rate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Result */}
          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30">
            <div className="text-center">
              <div className="text-sm text-slate-400 mb-1">Stamp Duty to Pay</div>
              <div className="text-5xl font-bold text-white mb-2">
                {formatCurrency(result.totalTax)}
              </div>
              <div className="text-lg text-indigo-400">
                {result.effectiveRate.toFixed(2)}% effective rate
              </div>
            </div>

            {/* Breakdown Summary */}
            <div className="mt-6 pt-6 border-t border-slate-600/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-slate-400">Property Price</div>
                  <div className="text-white font-medium">{formatCurrency(price)}</div>
                </div>
                <div>
                  <div className="text-slate-400">Base Tax</div>
                  <div className="text-white font-medium">
                    {formatCurrency(result.totalTax - result.additionalSurcharge - result.nonUkSurcharge)}
                  </div>
                </div>
                {result.additionalSurcharge > 0 && (
                  <div>
                    <div className="text-slate-400">+5% Surcharge</div>
                    <div className="text-amber-400 font-medium">
                      {formatCurrency(result.additionalSurcharge)}
                    </div>
                  </div>
                )}
                {result.nonUkSurcharge > 0 && (
                  <div>
                    <div className="text-slate-400">+2% Non-UK</div>
                    <div className="text-red-400 font-medium">
                      {formatCurrency(result.nonUkSurcharge)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tax Breakdown Chart */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Tax Breakdown</h3>
            <StampDutyPieChart result={result} />
          </div>

          {/* Band Breakdown */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Tax by Band</h3>
            <StampDutyBarChart result={result} />
          </div>

          {/* Comparison Chart */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Compare Buyer Types</h3>
            <ComparisonChart comparisons={comparisons} />
          </div>
        </div>
      </div>

      {/* Detailed Breakdown Table */}
      {result.breakdown.length > 0 && (
        <div className="mt-6 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-lg font-semibold text-white mb-4">Detailed Calculation</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-400 border-b border-slate-700">
                  <th className="text-left py-3 px-4">Band</th>
                  <th className="text-right py-3 px-4">Taxable Amount</th>
                  <th className="text-right py-3 px-4">Rate</th>
                  <th className="text-right py-3 px-4">Tax</th>
                </tr>
              </thead>
              <tbody>
                {result.breakdown.map((band, i) => (
                  <tr key={i} className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-slate-300">{band.band}</td>
                    <td className="text-right py-3 px-4 text-white">{formatCurrency(band.taxableAmount)}</td>
                    <td className="text-right py-3 px-4 text-indigo-400">{(band.rate * 100).toFixed(0)}%</td>
                    <td className="text-right py-3 px-4 text-white font-medium">{formatCurrency(band.tax)}</td>
                  </tr>
                ))}
                {result.additionalSurcharge > 0 && (
                  <tr className="border-b border-slate-700/50 bg-amber-500/10">
                    <td className="py-3 px-4 text-amber-400">Additional Property Surcharge</td>
                    <td className="text-right py-3 px-4 text-white">{formatCurrency(price)}</td>
                    <td className="text-right py-3 px-4 text-amber-400">5%</td>
                    <td className="text-right py-3 px-4 text-amber-400 font-medium">{formatCurrency(result.additionalSurcharge)}</td>
                  </tr>
                )}
                {result.nonUkSurcharge > 0 && (
                  <tr className="border-b border-slate-700/50 bg-red-500/10">
                    <td className="py-3 px-4 text-red-400">Non-UK Resident Surcharge</td>
                    <td className="text-right py-3 px-4 text-white">{formatCurrency(price)}</td>
                    <td className="text-right py-3 px-4 text-red-400">2%</td>
                    <td className="text-right py-3 px-4 text-red-400 font-medium">{formatCurrency(result.nonUkSurcharge)}</td>
                  </tr>
                )}
                <tr className="bg-indigo-500/10">
                  <td className="py-3 px-4 text-white font-semibold" colSpan={3}>Total Stamp Duty</td>
                  <td className="text-right py-3 px-4 text-indigo-400 font-bold text-lg">{formatCurrency(result.totalTax)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
