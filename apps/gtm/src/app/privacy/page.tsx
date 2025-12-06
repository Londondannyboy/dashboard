import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="GTM"
        brandAccent="Quest"
        brandGradient="from-orange-400 to-amber-500"
        signInGradient="from-orange-500 to-amber-500"
        navItems={[
          { href: '/news', label: 'News' },
          { href: '/directory', label: 'Providers' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-6">Privacy Policy</h1>
            <p className="text-gray-400 mb-12">Last updated: December 2024</p>

            <div className="prose prose-invert prose-orange max-w-none">
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly to us when you use our GTM planning services, browse our provider directory, or contact us.</p>

              <h2>How We Use Your Information</h2>
              <p>We use the information to provide and improve our go-to-market strategy services, including generating personalized GTM plans and recommendations.</p>

              <h2>AI-Generated Content</h2>
              <p>Our GTM Planner uses artificial intelligence to generate go-to-market strategies. The data you provide is processed to create tailored recommendations but is not stored permanently or shared with third parties.</p>

              <h2>Cookies and Tracking</h2>
              <p>We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver relevant content.</p>

              <h2>Third-Party Services</h2>
              <p>We may use third-party services for analytics, authentication, and payment processing. These services have their own privacy policies.</p>

              <h2>Data Security</h2>
              <p>We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure.</p>

              <h2>Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. Contact us at privacy@gtm.quest to exercise these rights.</p>

              <h2>Contact Us</h2>
              <p>For privacy inquiries, contact us at privacy@gtm.quest.</p>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="GTM"
        brandAccent="Quest"
        brandGradient="from-orange-400 to-amber-500"
        brandDescription="Your expert GTM agency partner"
        productLinks={[
          { label: 'GTM Planner', href: '/' },
          { label: 'Providers', href: '/directory' },
          { label: 'News', href: '/news' },
          { label: 'Network', href: '/ecosystem' },
        ]}
        companyLinks={[
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Privacy', href: '/privacy' },
        ]}
      />
    </div>
  )
}
