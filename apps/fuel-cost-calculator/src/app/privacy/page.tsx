import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Fuel Cost Calculator UK',
  description: 'Privacy policy for Fuel Cost Calculator UK',
}

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p>
              Fuel Cost Calculator UK ("we", "us", or "our") operates the fuelcostcalculator.quest website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information Collection and Use</h2>
            <p>
              We collect limited information about your use of our website. This may include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>IP address and location data</li>
              <li>Referring website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Calculator Data</h2>
            <p>
              The fuel cost calculations you perform are not stored on our servers. All calculations are performed locally in your browser. We do not collect or store any of your personal fuel consumption data, journey information, or fuel costs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Use of Data</h2>
            <p>
              We use the collected data for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Improving our service</li>
              <li>Analytics and understanding user behavior</li>
              <li>Maintaining security</li>
              <li>Responding to user inquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our contact page.
            </p>
          </section>
        </div>
        <a href="/" className="inline-block mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
          Back to Home
        </a>
      </div>
    </div>
  )
}
