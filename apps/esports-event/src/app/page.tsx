export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950">
      {/* Navigation */}
      <nav className="border-b border-esports-cyan-500/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-esports-cyan-400">Esports Event Insurance</h1>
            <div className="hidden md:flex gap-8">
              <a href="#" className="text-slate-200 hover:text-esports-cyan-400">Features</a>
              <a href="#" className="text-slate-200 hover:text-esports-cyan-400">About</a>
              <a href="#" className="text-slate-200 hover:text-esports-cyan-400">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Esports Event <span className="text-esports-cyan-400">Insurance</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Professional insurance for gaming tournaments, LAN parties, and esports venues. Protect your gaming event.
            </p>
            <button className="bg-esports-cyan-500 hover:bg-esports-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-indigo-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Coverage Types</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Gaming Tournament Insurance', desc: 'Comprehensive liability cover for esports competitions' },
              { title: 'LAN Party Insurance', desc: 'Protection for LAN events and gaming gatherings' },
              { title: 'Venue Insurance', desc: 'Liability cover for esports arenas and venues' },
              { title: 'Streaming Event Insurance', desc: 'Cover for gaming streams and broadcast events' },
              { title: 'Gaming Convention Insurance', desc: 'Protection for gaming conventions and expos' },
              { title: 'Equipment Insurance', desc: 'Protect your gaming PCs, servers, and equipment' },
            ].map((item, i) => (
              <div key={i} className="bg-purple-800/50 border border-esports-cyan-500/30 rounded-lg p-6 hover:border-esports-cyan-400 transition-colors">
                <h4 className="text-xl font-bold text-esports-cyan-400 mb-3">{item.title}</h4>
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
              { title: 'Gaming Industry Experts', desc: 'Specialists in esports and gaming event insurance' },
              { title: 'Fast Quotes', desc: 'Get covered in minutes' },
              { title: 'Flexible Coverage', desc: 'Customise your policy for your event' },
              { title: 'Best Rates', desc: 'Competitive pricing from leading insurers' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-esports-cyan-500/20 flex items-center justify-center">
                  <span className="text-esports-cyan-400 text-xl">✓</span>
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
      <section className="py-20 bg-gradient-to-r from-esports-cyan-600 to-esports-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Level Up Your Event Protection</h3>
          <p className="text-lg text-white/90 mb-8">Get esports event insurance in minutes</p>
          <button className="bg-indigo-950 hover:bg-indigo-900 text-esports-cyan-400 font-bold py-3 px-8 rounded-lg transition-colors">
            Get Quote Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-950 border-t border-esports-cyan-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>&copy; 2025 Esports Event Insurance UK. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
