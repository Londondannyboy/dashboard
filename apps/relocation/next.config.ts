import type { NextConfig } from 'next'

// Force fresh build after monorepo flattening
const nextConfig: NextConfig = {
  // Enable React strict mode
  reactStrictMode: true,

  // Environment variables exposed to the browser
  env: {
    NEXT_PUBLIC_GATEWAY_URL: process.env.NEXT_PUBLIC_GATEWAY_URL,
    NEXT_PUBLIC_HUME_CONFIG_ID: process.env.NEXT_PUBLIC_HUME_CONFIG_ID,
  },

  // External image domains for articles
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Redirects for old URL patterns that rank in Google
  async redirects() {
    return [
      // /relocation/guide/* -> /articles/*
      {
        source: '/relocation/guide/:slug*',
        destination: '/articles/:slug*',
        permanent: true,
      },
      // /posts/* -> /articles/* (with trailing slash handling)
      {
        source: '/posts/:slug*',
        destination: '/articles/:slug*',
        permanent: true,
      },
      // Root-level visa pages -> /articles/*
      {
        source: '/cyprus-requirements-visa',
        destination: '/articles/cyprus-requirements-visa',
        permanent: true,
      },
      // Generic pattern for other root-level pages that should be articles
      // Excludes pillar pages like /digital-nomad-visa
      {
        source: '/:slug((?!articles|chat|voice|dashboard|handler|api|_next|digital-nomad-visa|guides|move-to-europe|calculator|jobs|moving-abroad|relocation-assistance).*-visa.*)',
        destination: '/articles/:slug',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
