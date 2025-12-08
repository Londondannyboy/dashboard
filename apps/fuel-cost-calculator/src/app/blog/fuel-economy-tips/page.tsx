import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fuel Economy Tips: Improve MPG & Save Money on Driving Costs',
  description: 'Expert fuel economy tips to improve your car MPG, reduce fuel consumption, and save money. Learn driving techniques, maintenance tips, and technology hacks.',
  keywords: 'fuel economy tips, improve mpg, fuel efficiency, driving techniques, fuel consumption reduction, car maintenance fuel saving',
}

export default function FuelEconomyTipsPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <span className="text-xl font-bold text-white">📊</span>
            </div>
            <div>
              <span className="text-xl font-bold text-white">
                Fuel <span className="text-amber-400">Economy</span>
              </span>
              <p className="text-xs text-slate-400">MPG Optimization Guide</p>
            </div>
          </a>
        </div>
      </header>

      <article className="min-h-screen">
        <section className="py-12 sm:py-16 px-4 border-b border-slate-700/50">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Fuel Economy Tips: Expert Strategies to Improve Your Car's MPG
            </h1>
            <p className="text-xl text-slate-300">
              Master fuel economy optimization with proven driving techniques, maintenance secrets, and technology strategies used by professional drivers.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Driving Techniques */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Driving Techniques That Improve Fuel Economy</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-slate-800/30 p-4 rounded border-l-4 border-green-500">
                  <h3 className="text-white font-semibold mb-2">1. Smooth Acceleration</h3>
                  <p className="text-slate-300 text-sm">Accelerate gradually and steadily. Each rapid acceleration event can reduce fuel economy by 5-15%. Professional drivers use 5+ seconds to reach normal cruising speed from a stop.</p>
                </div>

                <div className="bg-slate-800/30 p-4 rounded border-l-4 border-blue-500">
                  <h3 className="text-white font-semibold mb-2">2. Anticipate Traffic</h3>
                  <p className="text-slate-300 text-sm">Look ahead 10-20 seconds and adjust speed before braking. Smooth speed changes use less fuel than constant braking and accelerating. This reduces brake wear too.</p>
                </div>

                <div className="bg-slate-800/30 p-4 rounded border-l-4 border-purple-500">
                  <h3 className="text-white font-semibold mb-2">3. Optimal Gear Selection</h3>
                  <p className="text-slate-300 text-sm">For manual transmissions, shift to higher gears promptly (around 2,000-2,500 RPM). Lower RPMs mean better fuel economy. For automatics, let the transmission handle it but avoid "sport" mode.</p>
                </div>

                <div className="bg-slate-800/30 p-4 rounded border-l-4 border-yellow-500">
                  <h3 className="text-white font-semibold mb-2">4. Cruise Control Usage</h3>
                  <p className="text-slate-300 text-sm">On motorways at steady speeds (45-60 mph), cruise control improves fuel economy by 5-10% by maintaining constant speed without driver fluctuations.</p>
                </div>
              </div>
            </section>

            {/* Maintenance */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Maintenance for Maximum Fuel Efficiency</h2>

              <div className="bg-blue-500/10 border border-blue-500/30 p-6 rounded mb-6">
                <h3 className="text-white font-semibold mb-4">Essential Maintenance Schedule</h3>
                <div className="space-y-3 text-slate-300 text-sm">
                  <div className="flex justify-between items-start p-3 bg-slate-800/30 rounded">
                    <span><strong>Every 1,000 miles:</strong> Check tire pressure</span>
                    <span className="text-green-400">+5% fuel economy</span>
                  </div>
                  <div className="flex justify-between items-start p-3 bg-slate-800/30 rounded">
                    <span><strong>Every 10,000 miles:</strong> Oil and filter change</span>
                    <span className="text-green-400">+1-2% fuel economy</span>
                  </div>
                  <div className="flex justify-between items-start p-3 bg-slate-800/30 rounded">
                    <span><strong>Every 15,000 miles:</strong> Air filter inspection</span>
                    <span className="text-green-400">+2-3% fuel economy</span>
                  </div>
                  <div className="flex justify-between items-start p-3 bg-slate-800/30 rounded">
                    <span><strong>Every 20,000 miles:</strong> Wheel alignment check</span>
                    <span className="text-green-400">+3-5% fuel economy</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 mb-4">
                A single misaligned wheel can reduce fuel economy by 3%, costing over £200 annually for a commuter.
              </p>
            </section>

            {/* Technology */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Using Technology to Monitor & Improve MPG</h2>

              <ul className="text-slate-300 space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span><strong>Vehicle Dashboard Display:</strong> Many cars show real-time MPG. Monitor during drives to train better habits.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span><strong>Mobile Apps:</strong> <a href="https://www.fuelio.de/" className="text-blue-400 hover:text-blue-300 underline" target="_blank">Fuelio</a> and <a href="https://www.fuelly.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank">Fuelly</a> track fuel economy trends and identify issues.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span><strong>Trip Computers:</strong> Reset at the start of each journey to see actual MPG. Compare to theoretical to identify problems.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span><strong>OBD-II Scanners:</strong> Diagnostic tools (£30-100) reveal engine issues affecting efficiency.</span>
                </li>
              </ul>
            </section>

            {/* Advanced Tips */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Advanced Fuel Economy Hacks</h2>

              <ul className="text-slate-300 space-y-2 mb-6">
                <li>• <strong>Drafting on motorways:</strong> Driving behind trucks reduces wind resistance and fuel consumption by 5-10% (maintain safe distance)</li>
                <li>• <strong>Coasting downhill:</strong> Shift to neutral safely on long downhills to save fuel (modern cars cut fuel during coasting)</li>
                <li>• <strong>Synthetic oil:</strong> Reduces engine friction by 5-10% compared to conventional oil</li>
                <li>• <strong>Carbon deposits:</strong> Fuel additives and professional cleaning can improve fuel economy 2-3%</li>
                <li>• <strong>Hypermiling:</strong> Advanced techniques, but risky - focus on the safe methods above instead</li>
              </ul>
            </section>

            {/* Real-World Improvement */}
            <section className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4">Real-World Fuel Economy Improvement Example</h2>
              <p className="text-slate-300 mb-4">
                A typical car driver implementing these strategies:
              </p>
              <div className="space-y-2 text-slate-300 text-sm">
                <div className="flex justify-between p-2">
                  <span>Baseline fuel economy:</span>
                  <span className="font-semibold">35 MPG</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-800/30 rounded">
                  <span>After implementation:</span>
                  <span className="font-semibold text-green-400">42 MPG (+20%)</span>
                </div>
                <div className="flex justify-between p-2">
                  <span>Annual savings (12,000 miles, current fuel prices):</span>
                  <span className="font-semibold text-green-400">£250-350</span>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/30 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Track Your Fuel Economy</h3>
              <p className="text-slate-300 mb-4">
                Use our fuel cost calculator to monitor savings and compare your current fuel economy against targets.
              </p>
              <Link href="/" className="inline-block px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors">
                Fuel Economy Calculator
              </Link>
            </div>
          </div>
        </section>
      </article>

      <section className="py-12 px-4 border-t border-slate-700/50 mt-12 bg-slate-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/how-to-reduce-fuel-costs" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors text-left">
              <h4 className="font-semibold text-white mb-1">Reduce Fuel Costs</h4>
              <p className="text-sm text-slate-400">10 proven money-saving strategies</p>
            </Link>
            <Link href="/hybrid-calculator" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors text-left">
              <h4 className="font-semibold text-white mb-1">Hybrid Calculator</h4>
              <p className="text-sm text-slate-400">Compare fuel economy</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
