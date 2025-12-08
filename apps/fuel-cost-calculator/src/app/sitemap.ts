import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fuelcostcalculator.quest'

  const staticRoutes = [
    { path: '', changeFrequency: 'daily' as const, priority: 1 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/blog', changeFrequency: 'daily' as const, priority: 0.8 },
    { path: '/blog/ev-charging-guide', changeFrequency: 'daily' as const, priority: 0.8 },
    { path: '/blog/fuel-economy-tips', changeFrequency: 'daily' as const, priority: 0.8 },
    { path: '/blog/how-to-reduce-fuel-costs', changeFrequency: 'daily' as const, priority: 0.8 },
    { path: '/blog/uk-mileage-rates', changeFrequency: 'daily' as const, priority: 0.8 },
    { path: '/comparison/diesel-vs-petrol', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/comparison/hybrid-vs-ev', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/diesel-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/europe-fuel-calculator', changeFrequency: 'weekly' as const, priority: 0.85 },
    { path: '/ev-charging-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/fuel-cost-calculator-uk', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/fuel-economy-calculator', changeFrequency: 'weekly' as const, priority: 0.85 },
    { path: '/fuel-price-estimate', changeFrequency: 'weekly' as const, priority: 0.85 },
    { path: '/hybrid-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/journey-cost-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/london-fuel-prices', changeFrequency: 'weekly' as const, priority: 0.75 },
    { path: '/mileage-calculator', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/northern-ireland-fuel-prices', changeFrequency: 'weekly' as const, priority: 0.75 },
    { path: '/petrol-expense-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/scotland-fuel-prices', changeFrequency: 'weekly' as const, priority: 0.75 },
    { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/wales-fuel-prices', changeFrequency: 'weekly' as const, priority: 0.75 }
  ]

  return staticRoutes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  })) as MetadataRoute.Sitemap
}
