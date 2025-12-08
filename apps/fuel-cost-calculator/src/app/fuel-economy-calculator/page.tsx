import { Metadata } from 'next'
import Link from 'next/link'
import { FuelCostCalculator } from '../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Fuel Economy Calculator UK | Calculate MPG & Fuel Efficiency',
  description: 'Free UK fuel economy calculator. Calculate your car MPG, fuel consumption, and efficiency. Track improvements and identify fuel waste.',
  keywords: 'fuel economy calculator uk, mpg calculator, fuel consumption calculator, car fuel economy, mpg calculator uk',
  openGraph: {
    title: 'Fuel Economy Calculator UK',
    description: 'Calculate your car\'s fuel economy and MPG with detailed efficiency analysis.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/fuel-economy-calculator',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/fuel-economy-calculator',
  },
}

export default function FuelEconomyCalculatorPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-white">
                Fuel Economy <span className="text-green-400">Calculator</span>
              </span>
              <p className="text-xs text-slate-400">MPG & Efficiency Tracker</p>
            </div>
          </a>
        </div>
      </header>

      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Fuel Economy
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Calculator</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate your car's fuel economy (MPG) and track efficiency improvements.
          </p>
          <p className="text-sm text-slate-500">
            Monitor fuel consumption, identify efficiency problems, and optimize your driving.
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">How to Calculate Fuel Economy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-green-400 mb-2">Step 1: Fill Up</p>
                <p>Fill your fuel tank completely and note the mileage.</p>
              </div>
              <div>
                <p className="font-semibold text-green-400 mb-2">Step 2: Drive Normally</p>
                <p>Drive for at least 100+ miles on typical routes.</p>
              </div>
              <div>
                <p className="font-semibold text-green-400 mb-2">Step 3: Fill Up Again</p>
                <p>Fill the tank again and record the new mileage and fuel amount.</p>
              </div>
              <div>
                <p className="font-semibold text-green-400 mb-2">Step 4: Calculate</p>
                <p>Use our calculator: Miles ÷ Gallons = MPG</p>
              </div>
            </div>
          </div>
          <FuelCostCalculator />
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">
            Understanding Fuel Economy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">What is MPG?</h3>
              <p className="text-slate-300 text-sm mb-4">
                MPG (Miles Per Gallon) measures how many miles your car travels on one gallon of fuel. Higher MPG means better fuel efficiency and lower fuel costs.
              </p>
              <div className="bg-slate-700/30 p-3 rounded text-sm text-slate-300">
                <p className="font-semibold text-green-400 mb-2">Example:</p>
                <p>100 miles ÷ 4 gallons = 25 MPG</p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Typical UK Vehicle MPG</h3>
              <ul className="text-sm text-slate-300 space-y-2">
                <li><strong>Small Petrol Car:</strong> 45-55 MPG</li>
                <li><strong>Mid-Range Petrol:</strong> 35-45 MPG</li>
                <li><strong>Diesel Car:</strong> 50-65 MPG</li>
                <li><strong>Hybrid Car:</strong> 50-70 MPG</li>
                <li><strong>EV:</strong> Equivalent to 200+ MPG in fuel savings</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Factors Affecting Fuel Economy</h3>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>✓ Driving style (smooth vs aggressive)</li>
                <li>✓ Speed (higher speeds = lower MPG)</li>
                <li>✓ Road conditions (motorway vs city)</li>
                <li>✓ Vehicle weight and cargo</li>
                <li>✓ Tire pressure and alignment</li>
                <li>✓ Engine maintenance condition</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">How to Improve MPG</h3>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>✓ Smooth acceleration and gentle braking</li>
                <li>✓ Maintain optimal tire pressure</li>
                <li>✓ Remove unnecessary weight</li>
                <li>✓ Regular vehicle maintenance</li>
                <li>✓ Reduce speed and use cruise control</li>
                <li>✓ Minimize air conditioning use</li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Real-World Example</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex justify-between p-2 bg-slate-700/30 rounded">
                <span>Baseline fuel economy:</span>
                <span className="font-semibold">35 MPG</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-700/30 rounded">
                <span>After implementing efficiency tips:</span>
                <span className="font-semibold text-green-400">42 MPG (+20%)</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-700/30 rounded">
                <span>Annual savings on 12,000 miles:</span>
                <span className="font-semibold text-green-400">£150-250</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Track & Improve Your Fuel Economy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link href="/blog/fuel-economy-tips" className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Fuel Economy Tips</h3>
              <p className="text-sm text-slate-400 mb-3">Expert strategies to improve your car's MPG and reduce fuel consumption.</p>
              <span className="text-green-400 text-sm font-semibold">Read guide →</span>
            </Link>

            <Link href="/blog/how-to-reduce-fuel-costs" className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Reduce Fuel Costs</h3>
              <p className="text-sm text-slate-400 mb-3">10 proven strategies to save money on fuel while maintaining vehicle efficiency.</p>
              <span className="text-green-400 text-sm font-semibold">Read guide →</span>
            </Link>

            <Link href="/comparison/diesel-vs-petrol" className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Fuel Type Comparison</h3>
              <p className="text-sm text-slate-400 mb-3">Compare fuel economy and costs between petrol, diesel, hybrid, and electric vehicles.</p>
              <span className="text-green-400 text-sm font-semibold">Compare →</span>
            </Link>

            <Link href="/mileage-calculator" className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Mileage Calculator</h3>
              <p className="text-sm text-slate-400 mb-3">Calculate cost per mile and track business driving expenses.</p>
              <span className="text-green-400 text-sm font-semibold">Use calculator →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-800/30 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Fuel Economy FAQ
          </h2>

          <div className="space-y-4">
            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Why does my actual MPG differ from the official figure?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Official figures are tested under ideal conditions. Real-world MPG varies due to driving style, traffic, weather, and vehicle condition. City driving typically yields lower MPG than motorway driving.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>How often should I check my fuel economy?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Check monthly or every 1,000 miles to identify trends. A sudden drop in MPG signals potential mechanical issues (tire pressure, engine problems, alignment).</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>What's considered good fuel economy in the UK?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Good fuel economy depends on vehicle type. Modern cars should achieve 35-50 MPG. Hybrids exceed 50 MPG, while EVs are equivalent to 200+ MPG. Check your vehicle's manual for baseline expectations.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Can I improve my car's MPG significantly?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Yes! Most drivers can improve MPG by 10-20% through maintenance and driving technique improvements. Check tire pressure, get regular servicing, and adopt smooth acceleration habits.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
