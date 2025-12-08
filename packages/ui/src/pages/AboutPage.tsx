import Link from 'next/link'

export interface AboutPageProps {
  brandName?: string
  brandDescription?: string
  mission?: string
}

export function AboutPage({
  brandName = 'Quest',
  brandDescription = 'AI-powered tools for better decisions',
  mission = 'We build AI-powered tools that help people make informed decisions.',
}: AboutPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About {brandName}</h1>
        <p className="text-xl text-gray-600 mb-8">{brandDescription}</p>

        <div className="prose prose-gray max-w-none">
          <h2>Our Mission</h2>
          <p>{mission}</p>

          <h2>What We Do</h2>
          <p>
            We leverage artificial intelligence to provide accurate, up-to-date information
            and guidance. Our tools are designed to save you time and help you navigate
            complex decisions with confidence.
          </p>

          <h2>Our Approach</h2>
          <p>We believe in:</p>
          <ul>
            <li><strong>Accuracy:</strong> Information you can trust, backed by reliable sources</li>
            <li><strong>Clarity:</strong> Complex topics explained simply</li>
            <li><strong>Accessibility:</strong> Tools that work for everyone</li>
            <li><strong>Privacy:</strong> Your data is yours, always</li>
          </ul>

          <h2>Technology</h2>
          <p>
            Our platform is built using the latest AI technology, including large language
            models, to provide intelligent, context-aware assistance. We continuously
            improve our systems based on user feedback and the latest research.
          </p>

          <h2>Get in Touch</h2>
          <p>
            Have questions or feedback? We'd love to hear from you. Visit our{' '}
            <Link href="/contact" className="text-blue-600 hover:underline">
              contact page
            </Link>{' '}
            to get in touch.
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
