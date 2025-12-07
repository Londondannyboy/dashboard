'use client'

import { useState, useMemo } from 'react'
import { formatCurrency } from '../lib/stamp-duty'

const PRESET_PRICES = [250000, 350000, 500000, 750000, 1000000, 1500000]

export function RefundCalculator() {
  const [price, setPrice] = useState<number>(400000)
  const [inputValue, setInputValue] = useState('400,000')

  // Calculate the 5% surcharge that can be refunded
  const refundAmount = useMemo(() => price * 0.05, [price])

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
              Property Purchase Price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400">
                £
              </span>
              <input
                type="text"
                value={inputValue}
                onChange={handlePriceChange}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl pl-10 pr-4 py-4 text-2xl font-semibold text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="400,000"
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Enter the price you paid for your new property
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {PRESET_PRICES.map((presetPrice) => (
                <button
                  key={presetPrice}
                  onClick={() => handlePresetClick(presetPrice)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    price === presetPrice
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  £{(presetPrice / 1000)}k
                </button>
              ))}
            </div>
          </div>

          {/* Eligibility Checklist */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Eligibility Checklist</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-300">Paid the 5% additional property surcharge</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-300">Sold previous main residence within 36 months</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-300">Claiming within 12 months of the sale</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-300">New property is now your main residence</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Result */}
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30">
            <div className="text-center">
              <div className="text-sm text-slate-400 mb-1">Your Refund Amount</div>
              <div className="text-5xl font-bold text-white mb-2">
                {formatCurrency(refundAmount)}
              </div>
              <div className="text-lg text-green-400">
                5% of {formatCurrency(price)}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-600/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-slate-400">Property Price</div>
                  <div className="text-white font-medium">{formatCurrency(price)}</div>
                </div>
                <div>
                  <div className="text-slate-400">Surcharge Rate</div>
                  <div className="text-white font-medium">5%</div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Claim */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">How to Claim Your Refund</h3>
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                <span className="text-slate-300">Gather your SDLT return reference number from your purchase</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                <span className="text-slate-300">Collect proof of sale of your previous main residence</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                <span className="text-slate-300">Apply online via HMRC or send form SDLT16 by post</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
                <span className="text-slate-300">Receive refund within 15 working days (online applications)</span>
              </li>
            </ol>
          </div>

          {/* Important Note */}
          <div className="bg-amber-500/10 rounded-2xl p-6 border border-amber-500/30">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Important
            </h3>
            <p className="text-sm text-slate-400">
              This calculator shows the 5% additional property surcharge only. You cannot reclaim the standard stamp duty rates - only the surcharge that was charged because you owned another property at the time of purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
