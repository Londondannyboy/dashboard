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
      'asia-pacific',
      'north-america',
      'latin-america',
      'middle-east',
      'africa',
      'singapore',
      // Note: 'europe' is not included because /top-private-equity-placement-agents-europe
      // is now a real article page in the database, not a redirect to /top-private-equity-placement-agents/europe
    ]

    const regionRedirects = regions.map((region) => ({
      source: `/top-private-equity-placement-agents-${region}`,
      destination: `/top-private-equity-placement-agents/${region}`,
      permanent: true,
    }))

    const legacyRedirects = [
      // ============================================
      // ZILCH SPAM - 350+ 404s with tracking params
      // ============================================
      {
        source: '/fintech-london/fintech-startups/fintech-startups-uk/zilch/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fintech-london/fintech-startups/fintech-startups-uk/zilch',
        destination: '/',
        permanent: true,
      },

      // ============================================
      // OLD REGIONAL PE URLs → NEW LONG SLUGS
      // ============================================
      {
        source: '/sweden-private-equity-news-sweden',
        destination: '/top-private-equity-firms-sweden-private-equity-sweden',
        permanent: true,
      },
      {
        source: '/liechtenstein-private-equity-news-liechtenstein',
        destination: '/top-private-equity-firms-liechtenstein-private-equity-liechtenstein',
        permanent: true,
      },
      {
        source: '/chile-private-equity-news-chile',
        destination: '/top-private-equity-firms-chile-private-equity-chile',
        permanent: true,
      },
      {
        source: '/africa-private-equity-africa',
        destination: '/top-private-equity-firms-africa-private-equity-africa',
        permanent: true,
      },
      {
        source: '/brazil-private-equity-news-brazil',
        destination: '/top-private-equity-firms-brazil-private-equity-brazil',
        permanent: true,
      },
      {
        source: '/canada-private-equity-news-canada',
        destination: '/top-private-equity-firms-canada-private-equity-canada',
        permanent: true,
      },
      {
        source: '/private-equity-news-portugal',
        destination: '/top-private-equity-firms-portugal-private-equity-portugal',
        permanent: true,
      },
      {
        source: '/scotland-private-equity-news-scotland',
        destination: '/top-private-equity-firms-scotland-private-equity-scotland',
        permanent: true,
      },
      {
        source: '/slovenia-private-equity-news-slovenia',
        destination: '/top-private-equity-firms-slovenia-private-equity-slovenia',
        permanent: true,
      },
      {
        source: '/wales-private-equity-news-wales',
        destination: '/top-private-equity-firms-wales-private-equity-wales',
        permanent: true,
      },
      {
        source: '/private-equity-news-bosnia',
        destination: '/top-private-equity-firms-bosnia-private-equity-bosnia',
        permanent: true,
      },
      {
        source: '/croatia-private-equity-news-croatia',
        destination: '/top-private-equity-firms-croatia-private-equity-croatia',
        permanent: true,
      },
      {
        source: '/indonesia-private-equity-news-indonesia',
        destination: '/top-private-equity-firms-indonesia-private-equity-indonesia',
        permanent: true,
      },
      {
        source: '/colombia-private-equity-news-colombia',
        destination: '/top-private-equity-firms-colombia-private-equity-colombia',
        permanent: true,
      },
      {
        source: '/greece-private-equity-news-greece',
        destination: '/top-private-equity-firms-greece-private-equity-greece',
        permanent: true,
      },
      {
        source: '/ukraine-private-equity-news-ukraine',
        destination: '/top-private-equity-firms-ukraine-private-equity-ukraine',
        permanent: true,
      },
      {
        source: '/private-equity-news-austria',
        destination: '/top-private-equity-firms-austria-private-equity-austria',
        permanent: true,
      },
      {
        source: '/belgium-private-equity-news-belgium',
        destination: '/top-private-equity-firms-belgium-private-equity-belgium',
        permanent: true,
      },
      {
        source: '/private-equity-news-kosovo',
        destination: '/top-private-equity-firms-kosovo-private-equity-kosovo',
        permanent: true,
      },
      {
        source: '/asia-private-equity-news-asia',
        destination: '/top-private-equity-firms-asia-private-equity-asia',
        permanent: true,
      },
      {
        source: '/north-america-private-equity-news-north-america',
        destination: '/top-private-equity-firms-north-america-private-equity-north-america',
        permanent: true,
      },
      {
        source: '/northern-ireland-private-equity-news-northern-ireland',
        destination: '/top-private-equity-firms-northern-ireland-private-equity-northern-ireland',
        permanent: true,
      },
      {
        source: '/south-europe-private-equity-news-southern-europe',
        destination: '/top-private-equity-firms-southern-europe-private-equity-southern-europe',
        permanent: true,
      },
      // VC Regional redirects
      {
        source: '/venture-capital-firms-indonesia',
        destination: '/top-venture-capital-firms-indonesia-venture-capital-indonesia',
        permanent: true,
      },
      {
        source: '/spanish-venture-capital-firms-spain-venture-capital-spain',
        destination: '/top-venture-capital-firms-spain-spanish-venture-capital',
        permanent: true,
      },
      {
        source: '/top-venture-capital-firms-thailand-venture-capital-thailand',
        destination: '/top-venture-capital-firms-thailand-venture-capital-thailand',
        permanent: true,
      },
      {
        source: '/venture-capital-firms-scandinavia-venture-capital-scandinavia',
        destination: '/top-venture-capital-firms-scandinavia-venture-capital-nordic',
        permanent: true,
      },
      // PE Industry redirects
      {
        source: '/top-private-equity-firms-mining-industry/:path*',
        destination: '/top-private-equity-firms-mining-industry-mining-private-equity',
        permanent: true,
      },
      {
        source: '/private-equity-news-technology',
        destination: '/top-private-equity-firms-technology-tech-private-equity',
        permanent: true,
      },
      {
        source: '/news-healthcare-private-equity-news',
        destination: '/top-private-equity-firms-healthcare-healthcare-private-equity',
        permanent: true,
      },
      {
        source: '/sports-private-equity-news-sport',
        destination: '/top-private-equity-firms-sports-sports-private-equity',
        permanent: true,
      },
      {
        source: '/top-private-equity-firms-energy-private-equity-energy',
        destination: '/top-private-equity-firms-energy-energy-private-equity',
        permanent: true,
      },
      {
        source: '/private-equity-esg-news-uk-esg-private-equity-news-uk',
        destination: '/top-private-equity-esg-firms-esg-private-equity-uk',
        permanent: true,
      },
      // Educational/Guide redirects
      {
        source: '/what-is-a-private-equity-fund-of-funds',
        destination: '/what-is-a-private-equity-fund-of-funds-guide',
        permanent: true,
      },
      {
        source: '/private-equity-associations-europe',
        destination: '/private-equity-associations-europe-pe-organisations',
        permanent: true,
      },
      {
        source: '/private-equity-placement-fees/:path*',
        destination: '/private-equity-placement-agent-fees-guide-2025',
        permanent: true,
      },
      {
        source: '/top-special-situations-private-equity-firms/:path*',
        destination: '/top-special-situations-private-equity-firms-distressed-debt',
        permanent: true,
      },
      {
        source: '/trends-private-equity-trends',
        destination: '/private-equity-trends-2025-pe-market-outlook',
        permanent: true,
      },
      {
        source: '/recent-private-equity-deals-europe',
        destination: '/recent-private-equity-deals-europe-pe-transactions',
        permanent: true,
      },
      // Recruitment redirects
      {
        source: '/private-equity-recruitment-firms-london/:path*',
        destination: '/private-equity-recruitment-firms-london-pe-recruiters-uk',
        permanent: true,
      },
      {
        source: '/non-executive-director-recruitment-agencies-ned/:path*',
        destination: '/non-executive-director-recruitment-agencies-ned-search-london',
        permanent: true,
      },
      {
        source: '/tech-executive-search-firms-technology',
        destination: '/tech-executive-search-firms-technology-headhunters',
        permanent: true,
      },
      {
        source: '/digital-marketing-recruitment-agencies-london/:path*',
        destination: '/digital-marketing-recruitment-agencies-london-marketing-recruiters',
        permanent: true,
      },
      {
        source: '/executive-search-firms-london-top-executive-search-firms-uk/:path*',
        destination: '/executive-search-firms-london-top-headhunters-uk',
        permanent: true,
      },
      {
        source: '/fintech-recruitment-agencies-london-fintech-recruitment/:path*',
        destination: '/fintech-recruitment-agencies-london-fintech-recruiters',
        permanent: true,
      },
      // Startup/Tech redirects
      {
        source: '/london-web3-startups-london-uk-web3/:path*',
        destination: '/web3-startups-london-uk-blockchain-companies',
        permanent: true,
      },
      {
        source: '/renewable-energy-startups-uk/:path*',
        destination: '/renewable-energy-startups-uk-cleantech-companies',
        permanent: true,
      },
      {
        source: '/top-agritech-startups-london/:path*',
        destination: '/agritech-startups-london-uk-agriculture-technology',
        permanent: true,
      },
      {
        source: '/fintech-companies-london-uk/:path*',
        destination: '/fintech-companies-london-uk-fintech-startups',
        permanent: true,
      },
      {
        source: '/fintech-startups-europe-best-fintech-companies-europe',
        destination: '/fintech-startups-europe-best-fintech-companies',
        permanent: true,
      },
      {
        source: '/blockchain-startups-london-uk-blockchain-companies-london',
        destination: '/blockchain-startups-london-uk-crypto-companies',
        permanent: true,
      },
      {
        source: '/ai-startups-europe-artificial-intelligence-startups-europe-guide',
        destination: '/ai-startups-europe-artificial-intelligence-companies',
        permanent: true,
      },
      {
        source: '/best-wealthtech-companies-london-top-wealthtech-companies-uk/:path*',
        destination: '/wealthtech-companies-london-uk-wealth-management-tech',
        permanent: true,
      },
      {
        source: '/top-private-equity-consultancies-private-equity-consulting-firms/:path*',
        destination: '/private-equity-consultancies-top-pe-consulting-firms',
        permanent: true,
      },
      {
        source: '/top-private-equity-firms-london-best',
        destination: '/top-private-equity-firms-london-best-private-equity-firms-uk',
        permanent: true,
      },
      // WordPress category archives - catch-all
      {
        source: '/category/:path*',
        destination: '/',
        permanent: true,
      },
      // Old home duplicate
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Old product pages
      {
        source: '/product/:path*',
        destination: '/',
        permanent: true,
      },

      // ============================================
      // EXISTING LEGACY REDIRECTS
      // ============================================
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

      // ============================================
      // ADDITIONAL REGIONAL PE/VC REDIRECTS (Dec 2025)
      // ============================================
      // India PE
      {
        source: '/private-equity-news-india',
        destination: '/top-private-equity-firms-india-private-equity-india',
        permanent: true,
      },
      // Finland PE
      {
        source: '/recent-private-equity-news-finland',
        destination: '/top-private-equity-firms-finland-private-equity-finland',
        permanent: true,
      },
      // Australia PE
      {
        source: '/australia-private-equity-news-australia',
        destination: '/top-private-equity-firms-australia-private-equity-australia',
        permanent: true,
      },
      // Portugal VC
      {
        source: '/top-venture-capital-firms-portugal',
        destination: '/top-venture-capital-firms-portugal-venture-capital-portugal',
        permanent: true,
      },
      // Australia VC
      {
        source: '/top-venture-capital-firms-australia',
        destination: '/top-venture-capital-firms-australia-venture-capital-australia',
        permanent: true,
      },
      // VC London
      {
        source: '/best-venture-capital-firms-london-venture-capital-london-guide',
        destination: '/top-venture-capital-firms-london-venture-capital-uk',
        permanent: true,
      },
      {
        source: '/best-venture-capital-firms-london/:path*',
        destination: '/top-venture-capital-firms-london-venture-capital-uk',
        permanent: true,
      },
      // Placement agents regional - no redirects needed, these are the canonical URLs
      // Low-value redirects to homepage/existing
      {
        source: '/faroe-islands-private-equity-news-faroe-islands',
        destination: '/',
        permanent: true,
      },
      {
        source: '/private-equity-content-marketing-guide',
        destination: '/complete-guide-private-equity-placement-agents-2025',
        permanent: true,
      },
      {
        source: '/dbl-partners',
        destination: '/private-equity-placement-agents-list',
        permanent: true,
      },
      // Privacy policy
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
    ]

    return [...regionRedirects, ...legacyRedirects]
  },
}

export default nextConfig

