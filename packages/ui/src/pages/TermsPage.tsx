import Link from 'next/link'

export interface TermsPageProps {
  brandName?: string
  contactEmail?: string
  lastUpdated?: string
}

export function TermsPage({
  brandName = 'Quest',
  contactEmail = 'legal@quest.app',
  lastUpdated = 'December 2025',
}: TermsPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: {lastUpdated}</p>

        <div className="prose prose-gray max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using {brandName}, you agree to be bound by these Terms of
            Service. If you disagree with any part of these terms, you may not access the
            service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            {brandName} provides AI-powered tools and information services. We reserve the
            right to modify or discontinue the service at any time without notice.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            When you create an account, you must provide accurate information. You are
            responsible for:
          </p>
          <ul>
            <li>Maintaining the security of your account</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us of any unauthorized use</li>
          </ul>

          <h2>4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service for any illegal purpose</li>
            <li>Violate any laws in your jurisdiction</li>
            <li>Infringe on the rights of others</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Transmit malware or harmful code</li>
            <li>Harass, abuse, or harm others</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are owned by
            {brandName} and are protected by international copyright, trademark, and other
            intellectual property laws.
          </p>

          <h2>6. User Content</h2>
          <p>
            You retain ownership of content you submit. By submitting content, you grant us
            a license to use, modify, and display that content in connection with the
            service.
          </p>

          <h2>7. Disclaimer</h2>
          <p>
            The service is provided "as is" without warranties of any kind. We do not
            guarantee that the service will be uninterrupted, secure, or error-free.
            Information provided is for general purposes and should not be relied upon as
            professional advice.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, {brandName} shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages resulting
            from your use of the service.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may terminate or suspend your account at any time without prior notice for
            conduct that we believe violates these Terms or is harmful to other users,
            us, or third parties.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users
            of significant changes. Continued use of the service constitutes acceptance
            of the modified terms.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of
            the United Kingdom, without regard to conflict of law provisions.
          </p>

          <h2>12. Contact</h2>
          <p>
            For questions about these Terms, contact us at{' '}
            <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">
              {contactEmail}
            </a>
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
