export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900">
      {/* Navigation */}
      <nav className="border-b border-craft-warm-500/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-craft-warm-400">Craft Fair Insurance</h1>
            <div className="hidden md:flex gap-8">
              <a href="#" className="text-amber-100 hover:text-craft-warm-400">Features</a>
              <a href="#" className="text-amber-100 hover:text-craft-warm-400">About</a>
              <a href="#" className="text-amber-100 hover:text-craft-warm-400">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Craft Fair <span className="text-craft-warm-400">Insurance</span>
            </h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-8">
              Public liability insurance for market traders, craft sellers, and market stalls. Protect your business.
            </p>
            <button className="bg-craft-warm-500 hover:bg-craft-warm-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-amber-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Coverage Types</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Market Stall Insurance', desc: 'Public liability cover for market traders' },
              { title: 'One-Day Stall Insurance', desc: 'Flexible one-off market stall coverage' },
              { title: 'Farmers Market Insurance', desc: 'Insurance for farmers market sellers' },
              { title: 'Car Boot Insurance', desc: 'Car boot sale protection and coverage' },
              { title: 'Christmas Market Insurance', desc: 'Seasonal market event coverage' },
              { title: 'Craft Seller Insurance', desc: 'Liability cover for craft manufacturers' },
            ].map((item, i) => (
              <div key={i} className="bg-amber-800/50 border border-craft-warm-500/30 rounded-lg p-6 hover:border-craft-warm-400 transition-colors">
                <h4 className="text-xl font-bold text-craft-warm-400 mb-3">{item.title}</h4>
                <p className="text-amber-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why Choose Us?</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'Fast Quotes', desc: 'Get covered in minutes for market events' },
              { title: 'Flexible Terms', desc: 'One-day or annual coverage options' },
              { title: 'Expert Support', desc: 'Team that understands market trading' },
              { title: 'Best Prices', desc: 'Competitive rates from UK insurers' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-craft-warm-500/20 flex items-center justify-center">
                  <span className="text-craft-warm-400 text-xl">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-amber-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-craft-terra-600 to-craft-warm-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Protect Your Market Stall</h3>
          <p className="text-lg text-white/90 mb-8">Get market stall insurance in minutes</p>
          <button className="bg-amber-900 hover:bg-amber-800 text-craft-warm-400 font-bold py-3 px-8 rounded-lg transition-colors">
            Get Quote Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 border-t border-craft-warm-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-amber-200">
          <p>&copy; 2025 Craft Fair Insurance UK. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
