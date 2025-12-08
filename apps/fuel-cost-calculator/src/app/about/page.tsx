import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Fuel Cost Calculator UK',
  description: 'Learn about Fuel Cost Calculator UK - your free tool for calculating fuel costs and expenses.',
}

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">About Fuel Cost Calculator</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-slate-300 mb-4">
            Fuel Cost Calculator UK is a free online tool designed to help UK drivers calculate their fuel expenses accurately and easily.
          </p>
          <p className="text-slate-300 mb-4">
            Whether you're a commuter tracking daily costs, a business owner calculating mileage expenses, or simply planning a road trip budget, our calculator provides instant, accurate estimates based on your actual driving data.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Mission</h2>
          <p className="text-slate-300 mb-4">
            To provide UK drivers with free, accurate tools to understand and manage their fuel expenses.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Features</h2>
          <ul className="text-slate-300 space-y-2 mb-4">
            <li>✓ Calculate cost per mile instantly</li>
            <li>✓ Plan journey costs before you travel</li>
            <li>✓ Compare petrol and diesel options</li>
            <li>✓ Track fuel efficiency (MPG)</li>
            <li>✓ Support for business mileage claims</li>
            <li>✓ 100% free - no registration required</li>
          </ul>
        </div>
        <a href="/" className="inline-block mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
          Back to Calculator
        </a>
      </div>
    </div>
  )
}
