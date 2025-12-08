# Sitemap & Robots.ts Generation Report

## Summary

Successfully upgraded **27 apps** in the Quest monorepo to use shared sitemap utilities from `@quest/ui/sitemap`.

## Statistics

- **Total apps processed:** 27
- **Sitemaps upgraded:** 27 ✅
- **Robots.ts upgraded:** 27 ✅
- **Apps using predefined route constants:** 7
- **Errors:** 0

## Apps Using Predefined Route Constants

The following apps leverage shared route configuration from `@quest/ui/sitemap`:

1. **gtm** - Uses `GTM_STATIC_ROUTES`
2. **placement** - Uses `PLACEMENT_STATIC_ROUTES`
3. **pvc** - Uses `PVC_STATIC_ROUTES`
4. **rainmakrr** - Uses `RAINMAKRR_STATIC_ROUTES`
5. **rainmakrr-agency** - Uses `RAINMAKRR_STATIC_ROUTES`
6. **stamp-duty** - Uses `STAMP_DUTY_STATIC_ROUTES`
7. **tractor-insurance** - Uses `TRACTOR_INSURANCE_STATIC_ROUTES`

## Apps with Dynamic Routes

The following apps have dynamic routes (`[slug]` patterns) that may benefit from manual sitemap enhancement:

- chief-of-staff
- fractional-jobs
- mba
- placement
- pvc
- rainmakrr
- rainmakrr-agency
- relocation
- tractor-insurance

**Note:** These apps can add dynamic sitemap generation by fetching data and using `generateDynamicSitemap()` from `@quest/ui/sitemap`.

## What Was Changed

### Before (Example: gas-rate-calculator)

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gasratecalculator.quest'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/gas-bill-calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gas-cost-calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
```

### After (Using Shared Utilities)

```typescript
import { MetadataRoute } from 'next'
import { generateStaticSitemap } from '@quest/ui/sitemap'

const staticRoutes = [
  { path: '', changeFrequency: 'daily' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/gas-bill-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/gas-cost-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://gasratecalculator.quest',
    staticRoutes,
  })
}
```

### Robots.ts (Before)

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://gasratecalculator.quest/sitemap.xml',
  }
}
```

### Robots.ts (After)

```typescript
import { generateRobots } from '@quest/ui/sitemap'

export default function robots() {
  return generateRobots('https://gasratecalculator.quest')
}
```

## Benefits

1. **DRY Principle:** All apps now share common sitemap logic
2. **Consistency:** Standard approach across all apps
3. **Maintainability:** Updates to sitemap logic can be made in one place
4. **Completeness:** Script detected all routes by scanning the file system
5. **Intelligent Defaults:** Proper `changeFrequency` and `priority` based on route type

## Route Detection Logic

The script automatically assigns appropriate SEO values:

- **Homepage** (`/`): `daily` frequency, priority `1.0`
- **Privacy/Terms** (`/privacy`, `/terms`): `yearly` frequency, priority `0.3`
- **About/Contact** (`/about`, `/contact`): `monthly` frequency, priority `0.7`
- **News/Articles/Blog**: `daily` frequency, priority `0.8`
- **Other pages**: `weekly` frequency, priority `0.8`

## Script Features

The `generate-sitemaps.js` script supports:

- `--audit` - Check existing files for quality and completeness
- `--upgrade` - Replace existing files with new shared utilities version
- `--dry-run` - Preview changes without writing files
- `--test` - Process only 5 test apps for validation

## Next Steps (Optional)

For apps with dynamic routes, consider:

1. Fetch data for dynamic pages (e.g., articles, companies, programs)
2. Use `generateDynamicSitemap()` to include them in the sitemap
3. Combine with `combineSitemaps()` utility

Example:
```typescript
import { MetadataRoute } from 'next'
import { generateStaticSitemap, generateDynamicSitemap, combineSitemaps } from '@quest/ui/sitemap'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mba.quest'
  
  // Static routes
  const staticSitemap = generateStaticSitemap({
    baseUrl,
    staticRoutes: [/* ... */]
  })
  
  // Fetch dynamic data
  const programs = await getPrograms()
  
  // Generate dynamic sitemap
  const dynamicSitemap = generateDynamicSitemap(
    baseUrl,
    '/programs',
    programs.map(p => ({ slug: p.slug, updatedAt: p.updatedAt }))
  )
  
  // Combine
  return combineSitemaps(staticSitemap, dynamicSitemap)
}
```

## Verification

All 27 apps now have:
- ✅ Working `sitemap.ts` files
- ✅ Working `robots.ts` files
- ✅ Using shared utilities from `@quest/ui/sitemap`
- ✅ Proper route coverage based on file system scan
- ✅ SEO-optimized `changeFrequency` and `priority` values
