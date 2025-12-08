import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Fuel Cost Calculator UK',
  description: 'Contact Fuel Cost Calculator UK with questions or feedback',
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-slate-300 mb-8">
          Have questions or feedback about our fuel cost calculator? We'd love to hear from you.
        </p>

        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 mb-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <p className="text-slate-300">
                  For general inquiries, please reach out through our website contact form.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Feedback</h3>
                <p className="text-slate-300">
                  We're always working to improve our calculator. Your feedback helps us serve you better.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Response Time</h3>
                <p className="text-slate-300">
                  We aim to respond to all inquiries within 2-3 business days.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-8">
          <p className="text-slate-300">
            <strong>Note:</strong> This is a free public tool. We don't store any of your personal data or fuel calculations. All calculations happen in your browser.
          </p>
        </div>

        <a href="/" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
          Back to Calculator
        </a>
      </div>
    </div>
  )
}
