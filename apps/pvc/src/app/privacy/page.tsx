import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="PVC"
        brandAccent="Quest"
        brandGradient="from-indigo-400 to-purple-500"
        signInGradient="from-indigo-500 to-purple-500"
        navItems={[
          { href: '/private-equity-placement-agent-news', label: 'News' },
          { href: '/private-equity-placement-agents-list', label: 'Directory' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-6">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">Last updated: December 2025</p>

            <div className="prose prose-invert prose-indigo max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  PVC Quest ("we," "our," or "us") is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard
                  your information when you visit our website pvc.quest.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                    <p className="leading-relaxed">
                      We may collect personal information that you voluntarily provide when you:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                      <li>Create an account or sign in</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Contact us via email</li>
                      <li>Submit a listing request</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Automatically Collected Information</h3>
                    <p className="leading-relaxed">
                      When you visit our site, we automatically collect certain information including:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                      <li>IP address and browser type</li>
                      <li>Device information</li>
                      <li>Pages visited and time spent</li>
                      <li>Referring website</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand our services</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>Develop new products, services, and features</li>
                  <li>Communicate with you about updates and news</li>
                  <li>Send you marketing and promotional content (with consent)</li>
                  <li>Find and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our
                  website and store certain information. You can instruct your browser to
                  refuse all cookies or indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may use third-party services such as analytics providers (e.g., Vercel Analytics),
                  authentication services (e.g., Stack Auth), and payment processors. These third
                  parties have their own privacy policies addressing how they use your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational security measures to
                  protect your personal information. However, no method of transmission over
                  the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Depending on your location, you may have rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Right to access your personal data</li>
                  <li>Right to correct inaccurate data</li>
                  <li>Right to delete your data</li>
                  <li>Right to opt out of marketing communications</li>
                  <li>Right to data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@pvc.quest" className="text-indigo-400 hover:text-indigo-300">
                    privacy@pvc.quest
                  </a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="PVC"
        brandAccent="Quest"
        brandGradient="from-indigo-400 to-purple-500"
        brandDescription="The insider guide to venture capital"
        productLinks={[
          { label: 'VC Firms', href: '/private-equity-placement-agents-list' },
          { label: 'Network', href: '/ecosystem' },
          { label: 'Momentum', href: '/momentum' },
          { label: 'News', href: '/private-equity-placement-agent-news' },
        ]}
        companyLinks={[
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Privacy', href: '/privacy' },
          { label: 'Terms', href: '/terms' },
        ]}
      />
    </div>
  )
}
