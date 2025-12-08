# Sitemap Generation Script - Usage Guide

## Overview

The `generate-sitemaps.js` script automates the creation and maintenance of `sitemap.ts` and `robots.ts` files for all apps in the Quest monorepo. It leverages shared utilities from `@quest/ui/sitemap` to ensure consistency and maintainability.

## Quick Start

```bash
# Audit existing files
node generate-sitemaps.js --audit

# Test on 5 apps first
node generate-sitemaps.js --test --dry-run

# Upgrade all apps
node generate-sitemaps.js --upgrade

# Upgrade with dry-run (preview only)
node generate-sitemaps.js --upgrade --dry-run
```

## Command Line Options

| Option | Description |
|--------|-------------|
| `--audit` | Check existing sitemap.ts and robots.ts files for quality and completeness |
| `--upgrade` | Replace existing files with new versions using shared utilities |
| `--dry-run` | Preview changes without actually writing files |
| `--test` | Process only 5 test apps (gas-rate-calculator, stamp-duty, mba, puppy-insurance, placement) |

## Features

### 1. Automatic Route Detection

The script scans the `src/app` directory to find all `page.tsx` files and automatically generates sitemap entries for them.

**Example:**
```
src/app/
  ├── page.tsx                    → /
  ├── about/page.tsx              → /about
  ├── contact/page.tsx            → /contact
  └── blog/[slug]/page.tsx        → Detected as dynamic route
```

### 2. Intelligent SEO Values

Routes are automatically assigned appropriate SEO values:

| Route Type | Change Frequency | Priority |
|------------|-----------------|----------|
| Homepage (`/`) | daily | 1.0 |
| Privacy/Terms | yearly | 0.3 |
| About/Contact | monthly | 0.7 |
| News/Articles/Blog | daily | 0.8 |
| Other pages | weekly | 0.8 |

### 3. Shared Utilities

All generated files use utilities from `@quest/ui/sitemap`:

- `generateStaticSitemap()` - Generate sitemap from static routes
- `generateDynamicSitemap()` - Generate sitemap from dynamic data
- `generateRobots()` - Generate robots.txt configuration
- `combineSitemaps()` - Combine multiple sitemaps

### 4. Predefined Route Constants

For apps with many specialized routes, predefined constants are used:

- `GTM_STATIC_ROUTES` - GTM Quest routes
- `PLACEMENT_STATIC_ROUTES` - Placement Quest routes
- `PVC_STATIC_ROUTES` - PVC Quest routes
- `RAINMAKRR_STATIC_ROUTES` - Rainmakrr routes
- `STAMP_DUTY_STATIC_ROUTES` - Stamp Duty Calculator routes
- `TRACTOR_INSURANCE_STATIC_ROUTES` - Tractor Insurance routes

## Generated File Examples

### sitemap.ts (Simple App)

```typescript
import { MetadataRoute } from 'next'
import { generateStaticSitemap } from '@quest/ui/sitemap'

const staticRoutes = [
  { path: '', changeFrequency: 'daily' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://example.quest',
    staticRoutes,
  })
}
```

### sitemap.ts (App with Predefined Routes)

```typescript
import { MetadataRoute } from 'next'
import { generateStaticSitemap, STAMP_DUTY_STATIC_ROUTES } from '@quest/ui/sitemap'

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://stampdutycalculator.quest',
    staticRoutes: STAMP_DUTY_STATIC_ROUTES,
  })
}
```

### robots.ts

```typescript
import { generateRobots } from '@quest/ui/sitemap'

export default function robots() {
  return generateRobots('https://example.quest')
}
```

## Adding Dynamic Routes

For apps with dynamic routes (e.g., `/articles/[slug]`), you can enhance the sitemap:

```typescript
import { MetadataRoute } from 'next'
import {
  generateStaticSitemap,
  generateDynamicSitemap,
  combineSitemaps
} from '@quest/ui/sitemap'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mba.quest'

  // Static routes
  const staticSitemap = generateStaticSitemap({
    baseUrl,
    staticRoutes: [
      { path: '', changeFrequency: 'daily' as const, priority: 1 },
      { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
      // ... other static routes
    ]
  })

  // Fetch dynamic data (example)
  const programs = await fetch('/api/programs').then(r => r.json())

  // Generate dynamic sitemap
  const dynamicSitemap = generateDynamicSitemap(
    baseUrl,
    '/programs',
    programs.map(p => ({
      slug: p.slug,
      updatedAt: p.updatedAt
    })),
    {
      changeFrequency: 'weekly',
      priority: 0.8
    }
  )

  // Combine both
  return combineSitemaps(staticSitemap, dynamicSitemap)
}
```

## Troubleshooting

### Issue: Routes not detected

**Solution:** Ensure page files are named `page.tsx` or `page.ts` and are in the `src/app` directory.

### Issue: Missing routes in sitemap

**Solution:** The script only detects static routes. Dynamic routes (`[slug]`) need manual enhancement using `generateDynamicSitemap()`.

### Issue: Incorrect base URL

**Solution:** Check that `metadataBase` is set correctly in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  // ...
  metadataBase: new URL('https://yourapp.quest'),
  // ...
}
```

## Maintenance

### Adding New Routes

When you add new pages to an app:

1. Create the `page.tsx` file in the appropriate directory
2. Run `node generate-sitemaps.js --upgrade` to regenerate sitemaps
3. Or manually add the route to the `staticRoutes` array in `sitemap.ts`

### Adding Predefined Route Constants

To add route constants for a new app:

1. Edit `/Users/dankeegan/dashboard/packages/ui/src/sitemap/index.ts`
2. Add your constant (e.g., `export const MY_APP_STATIC_ROUTES = [...]`)
3. Update the `ROUTE_CONSTANTS` object in `generate-sitemaps.js`
4. Run `node generate-sitemaps.js --upgrade`

## Best Practices

1. **Run audits regularly** to ensure sitemaps are up to date
2. **Use predefined constants** for apps with many specialized routes
3. **Add dynamic routes** for content-heavy apps (blogs, directories, etc.)
4. **Test locally** using `--test --dry-run` before running on all apps
5. **Commit generated files** to version control

## Files Created

- `/Users/dankeegan/dashboard/generate-sitemaps.js` - Main script
- `/Users/dankeegan/dashboard/sitemap-generation-report.md` - Detailed report
- `/Users/dankeegan/dashboard/SITEMAP_GENERATION_GUIDE.md` - This guide

## Support

For issues or questions:
- Check the audit output: `node generate-sitemaps.js --audit`
- Review the shared utilities: `/Users/dankeegan/dashboard/packages/ui/src/sitemap/index.ts`
- Test on a single app first: `node generate-sitemaps.js --test --dry-run`
