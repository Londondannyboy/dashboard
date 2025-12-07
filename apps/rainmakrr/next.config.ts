import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  async redirects() {
    const regions = [
      'us',
      'uk',
      'europe',
      'asia-pacific',
      'north-america',
      'latin-america',
      'middle-east',
      'africa',
      'singapore',
    ]

    const regionRedirects = regions.map((region) => ({
      source: `/top-private-equity-placement-agents-${region}`,
      destination: `/top-private-equity-placement-agents/${region}`,
      permanent: true,
    }))

    const legacyRedirects = [
      // High-value PE London content consolidation (1000+ impressions combined)
      {
        source: '/blog/top-private-equity-firms-london-the-complete-2025-guide-for-entrepreneurs-and-investors',
        destination: '/top-private-equity-placement-agents/uk',
        permanent: true,
      },
      {
        source: '/news/top-private-equity-firms-london-the-complete-2025-guide-for-entrepreneurs-and-investors',
        destination: '/top-private-equity-placement-agents/uk',
        permanent: true,
      },
      {
        source: '/news/guide/top-private-equity-firms-london-the-complete-2025-guide-for-entrepreneurs-and-investors',
        destination: '/top-private-equity-placement-agents/uk',
        permanent: true,
      },
      {
        source: '/blog/rainmaker/guide/top-private-equity-firms-london-the-complete-2025-guide-for-entrepreneurs-and-investors',
        destination: '/top-private-equity-placement-agents/uk',
        permanent: true,
      },
      // Legacy news/blog catch-all patterns
      {
        source: '/blog/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/news/:path*',
        destination: '/',
        permanent: true,
      },
      // Old PE news sections
      {
        source: '/private-equity-news-pe/:path*',
        destination: '/',
        permanent: true,
      },
      // Out-of-scope legacy content
      {
        source: '/venture-capital-2/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hedge-funds-london/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/private-credit/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/executive-search-london/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/esports-production-agencies/:path*',
        destination: '/',
        permanent: true,
      },
      // Feature page renames
      {
        source: '/visualizations/:path*',
        destination: '/ecosystem',
        permanent: true,
      },
      {
        source: '/deal-flow',
        destination: '/momentum',
        permanent: true,
      },
      // Missing slug prefixes
      {
        source: '/picton',
        destination: '/private-equity-placement-agents-list/picton',
        permanent: true,
      },
      {
        source: '/goldman-sachs',
        destination: '/private-equity-placement-agents-list/goldmansachs',
        permanent: true,
      },
      // Old Toshiba news article
      {
        source: '/toshiba-takeover-offer-delayed',
        destination: '/',
        permanent: true,
      },
      // ESG recruitment (off-topic for current focus)
      {
        source: '/esg-recruitment-agencies',
        destination: '/',
        permanent: true,
      },
      // International PE firms
      {
        source: '/international-private-equity-firms',
        destination: '/private-equity-placement-agents-list',
        permanent: true,
      },
    ]

    return [...regionRedirects, ...legacyRedirects]
  },
}

export default nextConfig

