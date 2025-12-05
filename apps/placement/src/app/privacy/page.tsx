import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="Placement"
        brandAccent="Quest"
        brandGradient="from-emerald-400 to-teal-500"
        signInGradient="from-emerald-500 to-teal-500"
        navItems={[
          { href: '/news', label: 'News' },
          { href: '/directory', label: 'Directory' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-6">Privacy Policy</h1>
            <p className="text-gray-400 mb-12">Last updated: December 2024</p>

            <div className="prose prose-invert prose-emerald max-w-none">
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly to us when you use our service.</p>

              <h2>How We Use Your Information</h2>
              <p>We use the information to provide and improve our fund placement intelligence services.</p>

              <h2>Contact Us</h2>
              <p>For privacy inquiries, contact us at privacy@placement.quest.</p>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="Placement"
        brandAccent="Quest"
        brandGradient="from-emerald-400 to-teal-500"
        brandDescription="The insider guide to fund placements"
        productLinks={[
          { label: 'Mandates', href: '/directory' },
          { label: 'Network', href: '/ecosystem' },
          { label: 'News', href: '/news' },
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
