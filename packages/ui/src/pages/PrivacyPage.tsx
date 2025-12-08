import Link from 'next/link'

export interface PrivacyPageProps {
  brandName?: string
  contactEmail?: string
  lastUpdated?: string
}

export function PrivacyPage({
  brandName = 'Quest',
  contactEmail = 'privacy@quest.app',
  lastUpdated = 'December 2025',
}: PrivacyPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: {lastUpdated}</p>

        <div className="prose prose-gray max-w-none">
          <h2>1. Introduction</h2>
          <p>
            {brandName} ("we", "our", or "us") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you use our service.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect information about you in various ways:</p>
          <ul>
            <li><strong>Personal Data:</strong> Name, email address, and contact information you provide when creating an account or contacting us.</li>
            <li><strong>Usage Data:</strong> Information about how you use our service, including pages visited and features used.</li>
            <li><strong>Device Data:</strong> Information about your device, browser type, and IP address.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Communicate with you about updates and changes</li>
            <li>Respond to your inquiries and provide support</li>
            <li>Monitor and analyze usage patterns</li>
            <li>Protect against fraudulent or unauthorized activity</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist in operating our service</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your
            personal information. However, no method of transmission over the Internet is
            100% secure.
          </p>

          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Delete your data</li>
            <li>Object to processing</li>
            <li>Data portability</li>
          </ul>

          <h2>7. Cookies</h2>
          <p>
            We use cookies and similar technologies to enhance your experience. You can
            control cookies through your browser settings.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            changes by posting the new policy on this page.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{' '}
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
