import { Metadata } from 'next'
import Link from 'next/link'
import { RefundCalculator } from '../../components/RefundCalculator'

export const metadata: Metadata = {
  title: 'Stamp Duty Refund Calculator 2025 | Claim Back 5% Surcharge',
  description: 'Stamp Duty Refund Calculator - Calculate how much stamp duty you can claim back. Sold your previous home within 36 months? Claim a refund on the 5% additional property surcharge.',
  keywords: 'stamp duty refund calculator, stamp duty refund, claim stamp duty back, sdlt refund, additional property surcharge refund, stamp duty reclaim',
  openGraph: {
    title: 'Stamp Duty Refund Calculator 2025',
    description: 'Calculate how much stamp duty you can claim back when selling your previous home.',
  },
  alternates: {
    canonical: 'https://stampdutycalculator.quest/refund',
  },
}

export default function RefundPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Stamp Duty <span className="text-green-400">Refund</span>
                </span>
                <p className="text-xs text-slate-400">Claim Back Calculator</p>
              </div>
            </Link>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">Calculator</Link>
              <Link href="/refund" className="text-green-400 font-medium">Refund</Link>
              <Link href="/penalty" className="text-slate-300 hover:text-white transition-colors">Penalties</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Stamp Duty Refund
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Calculator</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate how much <strong>stamp duty you can claim back</strong> if you've sold your previous main residence. Our stamp duty refund calculator shows you the 5% surcharge you can reclaim.
          </p>
          <div className="inline-block bg-green-500/20 border border-green-500/30 rounded-lg px-4 py-2 mt-4">
            <span className="text-green-400 font-semibold">Up to 5% refund</span>
            <span className="text-slate-400 ml-2">on the additional property surcharge</span>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 px-4">
        <RefundCalculator />
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            How Stamp Duty Refunds Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Buy New Home</h3>
              <p className="text-sm text-slate-400">
                You buy a new home before selling your old one, paying the 5% additional property surcharge on top of standard stamp duty.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sell Within 36 Months</h3>
              <p className="text-sm text-slate-400">
                You sell your previous main residence within 36 months of buying the new property.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Claim Refund</h3>
              <p className="text-sm text-slate-400">
                Apply to HMRC within 12 months of the sale to reclaim the 5% surcharge you paid.
              </p>
            </div>
          </div>

          <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/30">
            <h3 className="text-lg font-semibold text-white mb-4">Important Deadlines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-green-400 font-medium mb-1">36 months to sell</div>
                <p className="text-slate-400">You must sell your previous main residence within 36 months of completing on your new property.</p>
              </div>
              <div>
                <div className="text-green-400 font-medium mb-1">12 months to claim</div>
                <p className="text-slate-400">You must submit your refund claim within 12 months of selling your previous home, or 12 months after the SDLT return filing date - whichever is later.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Stamp Duty Refund FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                How much stamp duty refund can I claim?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                You can claim back the 5% additional property surcharge you paid. For example, if you bought a £400,000 property and paid £20,000 extra as the surcharge, you can reclaim the full £20,000. Use our stamp duty refund calculator above to see your exact refund amount.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                What counts as my "previous main residence"?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Your previous main residence is the property where you lived as your main home. It doesn't need to be the last property you owned - it needs to be the property you lived in as your main residence. Holiday homes and buy-to-let properties don't count.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                How do I apply for a stamp duty refund?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                You can apply online through HMRC's website or by post. You'll need your SDLT return reference number, details of both properties, and evidence of the sale. Most refunds are processed within 15 working days if submitted online.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                What if I miss the 36-month deadline?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                If you don't sell your previous main residence within 36 months of buying the new property, you cannot claim the refund. There are very limited exceptions, such as if the sale was delayed due to circumstances outside your control (you'd need to apply for exceptional circumstances).
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Do I get interest on my stamp duty refund?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, HMRC will pay interest on your refund from the date you paid the original stamp duty. The interest rate is set by HMRC and changes periodically. The interest is calculated automatically and added to your refund.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-4 text-sm">
            <Link href="/" className="text-slate-400 hover:text-white">Main Calculator</Link>
            <Link href="/refund" className="text-green-400">Refund Calculator</Link>
            <Link href="/penalty" className="text-slate-400 hover:text-white">Penalty Calculator</Link>
          </div>
          <p className="text-xs text-slate-500">
            Stamp duty refund information updated 2025. For official guidance, visit{' '}
            <a href="https://www.gov.uk/government/publications/stamp-duty-land-tax-apply-for-a-repayment" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
              GOV.UK
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
