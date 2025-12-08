'use client'

import { useState, useCallback } from 'react'

type CalculatorMode = 'cost-per-mile' | 'journey-cost' | 'fuel-price'

interface Results {
  costPerMile: number
  journeyDistance?: number
  journeyTime?: number
  journeyCost?: number
  fuelPrice?: number
  fuelEconomy?: number
}

export function FuelCostCalculator() {
  const [mode, setMode] = useState<CalculatorMode>('cost-per-mile')

  // Cost per mile inputs
  const [distance, setDistance] = useState('')
  const [fuelUsed, setFuelUsed] = useState('')
  const [totalCost, setTotalCost] = useState('')

  // Journey cost inputs
  const [journeyDist, setJourneyDist] = useState('')
  const [journeyFuelPrice, setJourneyFuelPrice] = useState('1.45')
  const [journeyFuelEconomy, setJourneyFuelEconomy] = useState('')

  // Fuel price inputs
  const [pricePerLitre, setPricePerLitre] = useState('1.45')
  const [mpg, setMpg] = useState('')

  const [results, setResults] = useState<Results | null>(null)

  const calculateCostPerMile = useCallback(() => {
    if (mode === 'cost-per-mile') {
      const dist = parseFloat(distance)
      const used = parseFloat(fuelUsed)
      const cost = parseFloat(totalCost)

      if (!dist || !cost || dist <= 0 || cost <= 0) {
        setResults(null)
        return
      }

      const costPerMile = cost / dist
      const fuelEcon = used > 0 ? dist / used : undefined

      setResults({
        costPerMile,
        fuelEconomy: fuelEcon,
      })
    } else if (mode === 'journey-cost') {
      const dist = parseFloat(journeyDist)
      const price = parseFloat(journeyFuelPrice)
      const economy = parseFloat(journeyFuelEconomy)

      if (!dist || !price || !economy || dist <= 0 || economy <= 0) {
        setResults(null)
        return
      }

      const litresNeeded = dist / economy
      const cost = litresNeeded * price
      const costPerMile = cost / dist

      setResults({
        costPerMile,
        journeyDistance: dist,
        journeyCost: cost,
        fuelEconomy: economy,
      })
    } else if (mode === 'fuel-price') {
      const price = parseFloat(pricePerLitre)
      const fuelMpg = parseFloat(mpg)

      if (!price || !fuelMpg || price <= 0 || fuelMpg <= 0) {
        setResults(null)
        return
      }

      const costPerMile = price / fuelMpg

      setResults({
        costPerMile,
        fuelPrice: price,
        fuelEconomy: fuelMpg,
      })
    }
  }, [mode, distance, fuelUsed, totalCost, journeyDist, journeyFuelPrice, journeyFuelEconomy, pricePerLitre, mpg])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8">
        {/* Mode Selector */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-white mb-3">
            Calculator Mode
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => {
                setMode('cost-per-mile')
                setResults(null)
              }}
              className={`py-3 px-4 rounded-lg font-medium transition-all ${
                mode === 'cost-per-mile'
                  ? 'bg-blue-600 text-white border-2 border-blue-400'
                  : 'bg-slate-700 text-slate-300 border-2 border-slate-600 hover:border-slate-500'
              }`}
            >
              Cost per Mile
            </button>
            <button
              onClick={() => {
                setMode('journey-cost')
                setResults(null)
              }}
              className={`py-3 px-4 rounded-lg font-medium transition-all ${
                mode === 'journey-cost'
                  ? 'bg-green-600 text-white border-2 border-green-400'
                  : 'bg-slate-700 text-slate-300 border-2 border-slate-600 hover:border-slate-500'
              }`}
            >
              Journey Cost
            </button>
            <button
              onClick={() => {
                setMode('fuel-price')
                setResults(null)
              }}
              className={`py-3 px-4 rounded-lg font-medium transition-all ${
                mode === 'fuel-price'
                  ? 'bg-purple-600 text-white border-2 border-purple-400'
                  : 'bg-slate-700 text-slate-300 border-2 border-slate-600 hover:border-slate-500'
              }`}
            >
              Price Analysis
            </button>
          </div>
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          {mode === 'cost-per-mile' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Total Distance (miles)
                  </label>
                  <input
                    type="number"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    placeholder="e.g. 150"
                    step="0.1"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Total Cost (£)
                  </label>
                  <input
                    type="number"
                    value={totalCost}
                    onChange={(e) => setTotalCost(e.target.value)}
                    placeholder="e.g. 20.50"
                    step="0.01"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Fuel Used (litres) <span className="text-slate-500">Optional</span>
                </label>
                <input
                  type="number"
                  value={fuelUsed}
                  onChange={(e) => setFuelUsed(e.target.value)}
                  placeholder="e.g. 14"
                  step="0.1"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
              </div>
            </>
          )}

          {mode === 'journey-cost' && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Journey Distance (miles)
                </label>
                <input
                  type="number"
                  value={journeyDist}
                  onChange={(e) => setJourneyDist(e.target.value)}
                  placeholder="e.g. 250"
                  step="0.1"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-green-400"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Fuel Economy (MPG)
                  </label>
                  <input
                    type="number"
                    value={journeyFuelEconomy}
                    onChange={(e) => setJourneyFuelEconomy(e.target.value)}
                    placeholder="e.g. 35"
                    step="0.1"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-green-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Fuel Price (£/litre)
                  </label>
                  <input
                    type="number"
                    value={journeyFuelPrice}
                    onChange={(e) => setJourneyFuelPrice(e.target.value)}
                    placeholder="e.g. 1.45"
                    step="0.01"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-green-400"
                  />
                </div>
              </div>
            </>
          )}

          {mode === 'fuel-price' && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Fuel Price (£/litre)
                  </label>
                  <input
                    type="number"
                    value={pricePerLitre}
                    onChange={(e) => setPricePerLitre(e.target.value)}
                    placeholder="e.g. 1.45"
                    step="0.01"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Car's MPG
                  </label>
                  <input
                    type="number"
                    value={mpg}
                    onChange={(e) => setMpg(e.target.value)}
                    placeholder="e.g. 35"
                    step="0.1"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateCostPerMile}
          className={`w-full py-4 px-6 rounded-lg font-bold text-white text-lg transition-all ${
            mode === 'cost-per-mile'
              ? 'bg-blue-600 hover:bg-blue-700'
              : mode === 'journey-cost'
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          Calculate
        </button>

        {/* Results */}
        {results && (
          <div className="mt-8 pt-8 border-t border-slate-700/50 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl ${
                mode === 'cost-per-mile'
                  ? 'bg-blue-500/20 border border-blue-500/50'
                  : mode === 'journey-cost'
                  ? 'bg-green-500/20 border border-green-500/50'
                  : 'bg-purple-500/20 border border-purple-500/50'
              }`}>
                <p className="text-slate-400 text-sm mb-1">Cost per Mile</p>
                <p className={`text-3xl font-bold ${
                  mode === 'cost-per-mile'
                    ? 'text-blue-400'
                    : mode === 'journey-cost'
                    ? 'text-green-400'
                    : 'text-purple-400'
                }`}>
                  £{results.costPerMile.toFixed(2)}
                </p>
              </div>

              {results.journeyCost !== undefined && (
                <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/50">
                  <p className="text-slate-400 text-sm mb-1">Journey Cost</p>
                  <p className="text-3xl font-bold text-green-400">
                    £{results.journeyCost.toFixed(2)}
                  </p>
                </div>
              )}

              {results.fuelEconomy !== undefined && (
                <div className={`p-4 rounded-xl ${
                  results.journeyCost !== undefined
                    ? 'bg-slate-700/50 border border-slate-600'
                    : mode === 'cost-per-mile'
                    ? 'bg-slate-700/50 border border-slate-600'
                    : 'bg-slate-700/50 border border-slate-600'
                }`}>
                  <p className="text-slate-400 text-sm mb-1">Fuel Economy</p>
                  <p className="text-3xl font-bold text-slate-300">
                    {results.fuelEconomy.toFixed(2)} MPG
                  </p>
                </div>
              )}

              {results.journeyDistance !== undefined && (
                <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600">
                  <p className="text-slate-400 text-sm mb-1">Journey Distance</p>
                  <p className="text-3xl font-bold text-slate-300">
                    {results.journeyDistance.toFixed(1)} mi
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
