'use client'

import { useState, useMemo } from 'react'
import { calculateWalesLTT, formatCurrency, getWalesRateInfo, type BuyerType } from '../lib/stamp-duty'

const BUYER_TYPES: { value: BuyerType; label: string; description: string }[] = [
  { value: 'standard', label: 'Standard Purchase', description: 'Buying a single residential property' },
  { value: 'additional', label: 'Additional Property', description: 'Second home or buy-to-let (higher rates)' },
]

const PRESET_PRICES = [200000, 300000, 400000, 500000, 750000, 1000000]

export function WalesCalculator() {
  const [price, setPrice] = useState<number>(300000)
  const [buyerType, setBuyerType] = useState<BuyerType>('standard')
  const [inputValue, setInputValue] = useState('300,000')

  const result = useMemo(() => calculateWalesLTT(price, buyerType), [price, buyerType])
  const rateInfo = useMemo(() => getWalesRateInfo(buyerType), [buyerType])

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
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl pl-10 pr-4 py-4 text-2xl font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="300,000"
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {PRESET_PRICES.map((presetPrice) => (
                <button
                  key={presetPrice}
                  onClick={() => handlePresetClick(presetPrice)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    price === presetPrice
                      ? 'bg-red-500 text-white'
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
                      ? 'bg-red-500/20 border-2 border-red-500'
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
                  <span className="font-medium text-red-400">{band.rate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Result */}
          <div className="bg-gradient-to-br from-red-500/20 to-rose-500/20 rounded-2xl p-6 border border-red-500/30">
            <div className="text-center">
              <div className="text-sm text-slate-400 mb-1">LTT to Pay</div>
              <div className="text-5xl font-bold text-white mb-2">
                {formatCurrency(result.totalTax)}
              </div>
              <div className="text-lg text-red-400">
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
                  <div className="text-slate-400">Total LTT</div>
                  <div className="text-white font-medium">{formatCurrency(result.totalTax)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown Table */}
          {result.breakdown.length > 0 && (
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">LTT Breakdown</h3>
              <div className="space-y-3">
                {result.breakdown.map((band, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <div>
                      <div className="text-slate-300">{band.band}</div>
                      <div className="text-xs text-slate-500">{formatCurrency(band.taxableAmount)} × {(band.rate * 100).toFixed(1)}%</div>
                    </div>
                    <div className="text-white font-medium">{formatCurrency(band.tax)}</div>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-3 border-t border-slate-600">
                  <div className="text-white font-semibold">Total LTT</div>
                  <div className="text-red-400 font-bold text-lg">{formatCurrency(result.totalTax)}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
