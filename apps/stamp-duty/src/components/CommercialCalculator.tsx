'use client'

import { useState, useMemo } from 'react'
import { calculateCommercialSDLT, formatCurrency, getCommercialRateInfo } from '../lib/stamp-duty'

const PRESET_PRICES = [150000, 250000, 500000, 750000, 1000000, 2000000]

export function CommercialCalculator() {
  const [price, setPrice] = useState<number>(500000)
  const [inputValue, setInputValue] = useState('500,000')

  const result = useMemo(() => calculateCommercialSDLT(price), [price])
  const rateInfo = useMemo(() => getCommercialRateInfo(), [])

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
    <div className="w-full max-w-4xl mx-auto">
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
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl pl-10 pr-4 py-4 text-2xl font-semibold text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="500,000"
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {PRESET_PRICES.map((presetPrice) => (
                <button
                  key={presetPrice}
                  onClick={() => handlePresetClick(presetPrice)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    price === presetPrice
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  £{(presetPrice / 1000)}k
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
                  <span className="font-medium text-emerald-400">{band.rate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Property Types */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-emerald-500/30">
            <h3 className="text-lg font-semibold text-white mb-4">What Counts as Commercial?</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>Shops, offices, and retail premises</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>Warehouses and industrial units</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>Agricultural land and buildings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>Mixed-use properties (part residential, part commercial)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>Properties with 6+ residential units</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Result */}
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-6 border border-emerald-500/30">
            <div className="text-center">
              <div className="text-sm text-slate-400 mb-1">SDLT to Pay</div>
              <div className="text-5xl font-bold text-white mb-2">
                {formatCurrency(result.totalTax)}
              </div>
              <div className="text-lg text-emerald-400">
                {result.effectiveRate.toFixed(2)}% effective rate
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-600/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-slate-400">Property Price</div>
                  <div className="text-white font-medium">{formatCurrency(price)}</div>
                </div>
                <div>
                  <div className="text-slate-400">Total SDLT</div>
                  <div className="text-white font-medium">{formatCurrency(result.totalTax)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown Table */}
          {result.breakdown.length > 0 && (
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">SDLT Breakdown</h3>
              <div className="space-y-3">
                {result.breakdown.map((band, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <div>
                      <div className="text-slate-300">{band.band}</div>
                      <div className="text-xs text-slate-500">{formatCurrency(band.taxableAmount)} × {(band.rate * 100).toFixed(0)}%</div>
                    </div>
                    <div className="text-white font-medium">{formatCurrency(band.tax)}</div>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-3 border-t border-slate-600">
                  <div className="text-white font-semibold">Total SDLT</div>
                  <div className="text-emerald-400 font-bold text-lg">{formatCurrency(result.totalTax)}</div>
                </div>
              </div>
            </div>
          )}

          {/* Comparison Box */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Commercial vs Residential</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Nil-rate threshold</span>
                <span className="text-emerald-400">£150,000 (vs £125,000 residential)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Maximum rate</span>
                <span className="text-emerald-400">5% (vs 12% residential)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Additional surcharges</span>
                <span className="text-emerald-400">None apply</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
