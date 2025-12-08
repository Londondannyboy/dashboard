export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-900">
      {/* Navigation */}
      <nav className="border-b border-village-green-500/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-village-green-400">Village Fete Insurance</h1>
            <div className="hidden md:flex gap-8">
              <a href="#" className="text-village-cream-100 hover:text-village-green-400">Features</a>
              <a href="#" className="text-village-cream-100 hover:text-village-green-400">About</a>
              <a href="#" className="text-village-cream-100 hover:text-village-green-400">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Village Fete <span className="text-village-green-400">Insurance</span>
            </h2>
            <p className="text-xl text-village-cream-100 max-w-2xl mx-auto mb-8">
              Community and village event insurance for churches, parish councils, and charity fundraisers. Protect your community event.
            </p>
            <button className="bg-village-green-500 hover:bg-village-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-green-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Community Event Coverage</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Community Event Insurance', desc: 'Public liability cover for community gatherings' },
              { title: 'Church Event Insurance', desc: 'Insurance for church fetes and events' },
              { title: 'Parish Council Insurance', desc: 'Coverage for parish council organised events' },
              { title: 'Charity Fundraiser Insurance', desc: 'Protection for fundraising events' },
              { title: 'Village Hall Insurance', desc: 'Village hall event liability cover' },
              { title: 'Fete Stall Insurance', desc: 'Insurance for individual fete stall holders' },
            ].map((item, i) => (
              <div key={i} className="bg-green-800/50 border border-village-green-500/30 rounded-lg p-6 hover:border-village-green-400 transition-colors">
                <h4 className="text-xl font-bold text-village-green-400 mb-3">{item.title}</h4>
                <p className="text-village-cream-100">{item.desc}</p>
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
              { title: 'Community Focused', desc: 'Understanding of village and community events' },
              { title: 'Instant Quotes', desc: 'Get covered for your fete in minutes' },
              { title: 'Affordable Rates', desc: 'Best prices for community organisations' },
              { title: 'Easy Process', desc: 'Simple, straightforward insurance' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-village-green-500/20 flex items-center justify-center">
                  <span className="text-village-green-400 text-xl">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-village-cream-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-village-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Make Your Village Event Safe</h3>
          <p className="text-lg text-green-50 mb-8">Get community event insurance for your fete or fundraiser</p>
          <button className="bg-green-900 hover:bg-green-800 text-village-green-400 font-bold py-3 px-8 rounded-lg transition-colors">
            Get Quote Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 border-t border-village-green-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-village-cream-200">
          <p>&copy; 2025 Village Fete Insurance UK. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
