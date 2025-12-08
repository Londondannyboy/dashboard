import Link from 'next/link'

export interface ContactPageProps {
  brandName?: string
  contactEmail?: string
  supportEmail?: string
}

export function ContactPage({
  brandName = 'Quest',
  contactEmail = 'hello@quest.app',
  supportEmail = 'support@quest.app',
}: ContactPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-8">
          We'd love to hear from you. Get in touch with the {brandName} team.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">General Inquiries</h2>
            <p className="text-gray-600 mb-4">
              Questions about our service or partnership opportunities.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="text-blue-600 hover:underline font-medium"
            >
              {contactEmail}
            </a>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Support</h2>
            <p className="text-gray-600 mb-4">
              Need help with your account or experiencing issues?
            </p>
            <a
              href={`mailto:${supportEmail}`}
              className="text-blue-600 hover:underline font-medium"
            >
              {supportEmail}
            </a>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2>Frequently Asked Questions</h2>

          <h3>How quickly do you respond?</h3>
          <p>
            We aim to respond to all inquiries within 24-48 hours during business days.
          </p>

          <h3>Do you offer phone support?</h3>
          <p>
            Currently, we provide support via email. This allows us to give thorough,
            considered responses to your questions.
          </p>

          <h3>I found a bug. How do I report it?</h3>
          <p>
            Please email our support team with as much detail as possible, including
            what you were trying to do, what happened, and any error messages you saw.
          </p>

          <h3>Can I request a feature?</h3>
          <p>
            Absolutely! We love hearing from users about what would make the service
            more useful. Send your ideas to our general inquiries email.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  )
}
