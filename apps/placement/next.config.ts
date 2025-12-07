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
    return [
      // Old company page patterns -> new /directory/[slug] structure
      {
        source: '/private-equity-placement-agents-list/:slug',
        destination: '/directory/:slug',
        permanent: true,
      },
      {
        source: '/private-equity-placement-agents/:slug',
        destination: '/directory/:slug',
        permanent: true,
      },
      // Old listing pages -> /directory
      {
        source: '/private-equity-placement-agents-list',
        destination: '/directory',
        permanent: true,
      },
      {
        source: '/private-equity-placement-agents',
        destination: '/directory',
        permanent: true,
      },
      // Content/topic pages -> relevant destinations
      {
        source: '/venture-capital-placement-agents',
        destination: '/directory',
        permanent: true,
      },
      {
        source: '/top-private-equity-placement-agents-asia-pacific',
        destination: '/directory',
        permanent: true,
      },
      {
        source: '/top-private-equity-placement-agents-us',
        destination: '/directory',
        permanent: true,
      },
      {
        source: '/what-do-placement-agents-do',
        destination: '/',
        permanent: true,
      },
      {
        source: '/private-equity-placement-agents-boutique-firms-vs-giants',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/research-findings-about-private-equity-placement-agents-uk-europe-top-firms-and-trends-2025',
        destination: '/news',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
