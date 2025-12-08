export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-special-purple-800 to-special-pink-900">
      {/* Navigation */}
      <nav className="border-b border-special-purple-500/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-special-pink-400">Special Event Insurance</h1>
            <div className="hidden md:flex gap-8">
              <a href="#" className="text-slate-200 hover:text-special-pink-400">Features</a>
              <a href="#" className="text-slate-200 hover:text-special-pink-400">About</a>
              <a href="#" className="text-slate-200 hover:text-special-pink-400">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Special Event <span className="text-special-pink-400">Insurance</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Insurance for one-off events, exhibitions, trade shows, and temporary occasions. Get covered today.
            </p>
            <button className="bg-special-pink-500 hover:bg-special-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Coverage</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'One-Off Event Insurance', desc: 'Coverage for single, one-time events' },
              { title: 'Art Exhibition Insurance', desc: 'Protection for art shows and exhibitions' },
              { title: 'Trade Show Insurance', desc: 'Exhibitor and event coverage for trade shows' },
              { title: 'Outdoor Event Insurance', desc: 'Comprehensive outdoor event protection' },
              { title: 'Pop-Up Event Insurance', desc: 'Coverage for temporary pop-up events' },
              { title: 'Multi-Event Insurance', desc: 'Annual policies for multiple events' },
            ].map((item, i) => (
              <div key={i} className="bg-special-purple-800/50 border border-special-pink-500/30 rounded-lg p-6 hover:border-special-pink-400 transition-colors">
                <h4 className="text-xl font-bold text-special-pink-400 mb-3">{item.title}</h4>
                <p className="text-slate-300">{item.desc}</p>
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
              { title: 'Quick Quotes', desc: 'Get insured for your special occasion instantly' },
              { title: 'Expert Support', desc: 'Team of event insurance specialists' },
              { title: 'Flexible Options', desc: 'Coverage tailored to your specific event' },
              { title: 'Best Prices', desc: 'Competitive rates from multiple insurers' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-special-pink-500/20 flex items-center justify-center">
                  <span className="text-special-pink-400 text-xl">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-special-pink-600 to-special-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Make Your Event Memorable & Protected</h3>
          <p className="text-lg text-white/90 mb-8">Get one-off event insurance in minutes</p>
          <button className="bg-purple-900 hover:bg-purple-800 text-special-pink-400 font-bold py-3 px-8 rounded-lg transition-colors">
            Get Quote Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 border-t border-special-pink-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>&copy; 2025 Special Event Insurance UK. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
