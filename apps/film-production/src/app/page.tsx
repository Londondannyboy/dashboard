export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-film-dark-900 via-film-dark-800 to-film-dark-900">
      {/* Navigation */}
      <nav className="border-b border-film-gold-500/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-film-gold-400">Film Production Insurance</h1>
            <div className="hidden md:flex gap-8">
              <a href="#" className="text-film-dark-200 hover:text-film-gold-400">Features</a>
              <a href="#" className="text-film-dark-200 hover:text-film-gold-400">About</a>
              <a href="#" className="text-film-dark-200 hover:text-film-gold-400">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Film Production <span className="text-film-gold-400">Insurance</span>
            </h2>
            <p className="text-xl text-film-dark-300 max-w-2xl mx-auto mb-8">
              Specialist insurance for short films, TV productions, documentaries, and commercials. Protect your production with comprehensive coverage.
            </p>
            <button className="bg-film-gold-500 hover:bg-film-gold-600 text-film-dark-900 font-bold py-3 px-8 rounded-lg transition-colors">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-film-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Coverage Types</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Short Film Insurance', desc: 'Public liability and equipment cover for independent shorts' },
              { title: 'TV Production Insurance', desc: 'Comprehensive coverage for television productions' },
              { title: 'Documentary Insurance', desc: 'Specialized policies for documentary filmmakers' },
              { title: 'Music Video Insurance', desc: 'Cover for music video productions and artists' },
              { title: 'Commercial Insurance', desc: 'Advertising and commercial production insurance' },
              { title: 'Equipment Insurance', desc: 'Protect your cameras, lighting, and production gear' },
            ].map((item, i) => (
              <div key={i} className="bg-film-dark-700 border border-film-gold-500/30 rounded-lg p-6 hover:border-film-gold-400 transition-colors">
                <h4 className="text-xl font-bold text-film-gold-400 mb-3">{item.title}</h4>
                <p className="text-film-dark-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Insurance?</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'Quick Quotes', desc: 'Get insurance quotes in minutes, not days' },
              { title: 'Expert Support', desc: 'Specialist underwriters who understand film production' },
              { title: 'Flexible Coverage', desc: 'Customize your policy to match your production needs' },
              { title: 'Competitive Rates', desc: 'Best prices from leading UK insurers' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-film-gold-500/20 flex items-center justify-center">
                  <span className="text-film-gold-400 text-xl">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-film-dark-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-film-gold-500 to-film-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-film-dark-900 mb-6">Ready to Protect Your Production?</h3>
          <p className="text-lg text-film-dark-800 mb-8">Get a free, no-obligation insurance quote today</p>
          <button className="bg-film-dark-900 hover:bg-film-dark-800 text-film-gold-400 font-bold py-3 px-8 rounded-lg transition-colors">
            Get Quote Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-film-dark-900 border-t border-film-gold-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-film-dark-400">
          <p>&copy; 2025 Film Production Insurance UK. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
