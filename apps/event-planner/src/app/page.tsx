export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-event-navy-900 via-event-navy-800 to-event-navy-900">
      {/* Navigation */}
      <nav className="border-b border-event-blue-500/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-event-blue-400">Event Planner Insurance</h1>
            <div className="hidden md:flex gap-8">
              <a href="#" className="text-event-navy-200 hover:text-event-blue-400">Features</a>
              <a href="#" className="text-event-navy-200 hover:text-event-blue-400">About</a>
              <a href="#" className="text-event-navy-200 hover:text-event-blue-400">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Event Planner <span className="text-event-blue-400">Insurance</span>
            </h2>
            <p className="text-xl text-event-navy-300 max-w-2xl mx-auto mb-8">
              Professional public liability insurance for event planners and organisers. Protect your events with comprehensive coverage.
            </p>
            <button className="bg-event-blue-500 hover:bg-event-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-event-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Insurance Coverage</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Public Liability Insurance', desc: 'Comprehensive liability cover up to £10M' },
              { title: 'Event Management Insurance', desc: 'All-in-one protection for event organisers' },
              { title: 'Charity Event Insurance', desc: 'Specialist cover for charity fundraising events' },
              { title: 'Corporate Event Insurance', desc: 'Professional corporate event coverage' },
              { title: 'Wedding Planner Insurance', desc: 'Dedicated wedding and celebration events cover' },
              { title: 'Festival Insurance', desc: 'Large-scale festival and outdoor event protection' },
            ].map((item, i) => (
              <div key={i} className="bg-event-navy-700 border border-event-blue-500/30 rounded-lg p-6 hover:border-event-blue-400 transition-colors">
                <h4 className="text-xl font-bold text-event-blue-400 mb-3">{item.title}</h4>
                <p className="text-event-navy-300">{item.desc}</p>
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
              { title: 'Expert Underwriters', desc: 'Specialists in event industry insurance' },
              { title: 'Fast Quotes', desc: 'Get covered in minutes, not weeks' },
              { title: 'Flexible Policies', desc: 'Customise your coverage to fit your events' },
              { title: 'Best Prices', desc: 'Competitive rates from leading UK insurers' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-event-blue-500/20 flex items-center justify-center">
                  <span className="text-event-blue-400 text-xl">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-event-navy-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-event-blue-600 to-event-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Protect Your Events Today</h3>
          <p className="text-lg text-event-blue-100 mb-8">Get a free, no-obligation insurance quote</p>
          <button className="bg-event-navy-900 hover:bg-event-navy-800 text-event-blue-400 font-bold py-3 px-8 rounded-lg transition-colors">
            Get Quote Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-event-navy-900 border-t border-event-blue-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-event-navy-400">
          <p>&copy; 2025 Event Planner Insurance UK. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
