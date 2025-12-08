#!/usr/bin/env node

/**
 * Script to generate sitemap.ts and robots.ts files for all apps in the monorepo
 *
 * This script:
 * 1. Scans all apps in /apps directory
 * 2. Reads metadataBase URL from each app's layout.tsx
 * 3. Detects routes by scanning the app directory structure
 * 4. Generates sitemap.ts using shared utilities from @quest/ui/sitemap
 * 5. Generates robots.ts using shared utilities
 */

const fs = require('fs');
const path = require('path');

const APPS_DIR = '/Users/dankeegan/dashboard/apps';
const APPS_TO_SKIP = ['api', 'dashboard', 'pre-dash-deploy', 'predeploy']; // Non-Next.js apps

// Predefined route constants from @quest/ui/sitemap
const ROUTE_CONSTANTS = {
  'pvc': 'PVC_STATIC_ROUTES',
  'placement': 'PLACEMENT_STATIC_ROUTES',
  'rainmakrr': 'RAINMAKRR_STATIC_ROUTES',
  'rainmakrr-agency': 'RAINMAKRR_STATIC_ROUTES',
  'stamp-duty': 'STAMP_DUTY_STATIC_ROUTES',
  'gtm': 'GTM_STATIC_ROUTES',
  'tractor-insurance': 'TRACTOR_INSURANCE_STATIC_ROUTES',
};

const stats = {
  total: 0,
  sitemapsCreated: 0,
  robotsCreated: 0,
  skipped: 0,
  errors: [],
};

/**
 * Extract metadataBase URL from layout.tsx
 */
function extractMetadataBase(layoutPath) {
  try {
    const content = fs.readFileSync(layoutPath, 'utf8');
    const match = content.match(/metadataBase:\s*new\s+URL\(['"]([^'"]+)['"]\)/);
    return match ? match[1] : null;
  } catch (error) {
    return null;
  }
}

/**
 * Scan app directory for routes (page.tsx files)
 */
function scanRoutes(appPath) {
  const routes = new Set();
  const srcAppPath = path.join(appPath, 'src', 'app');

  if (!fs.existsSync(srcAppPath)) {
    return routes;
  }

  function walkDir(dir, relativePath = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const newRelativePath = relativePath ? `${relativePath}/${entry.name}` : entry.name;

      if (entry.isDirectory()) {
        // Skip dynamic routes, private routes, and special Next.js folders
        if (!entry.name.startsWith('[') && !entry.name.startsWith('_') && !entry.name.startsWith('(')) {
          walkDir(fullPath, newRelativePath);
        }
      } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
        // Add the route (remove 'page.tsx' from path)
        const route = relativePath ? `/${relativePath}` : '';
        routes.add(route);
      }
    }
  }

  walkDir(srcAppPath);
  return routes;
}

/**
 * Check if app has dynamic routes that need data fetching
 */
function hasDynamicRoutes(appPath) {
  const srcAppPath = path.join(appPath, 'src', 'app');

  function checkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (entry.name.startsWith('[') && !entry.name.includes('...')) {
          return true;
        }
        const fullPath = path.join(dir, entry.name);
        if (checkDir(fullPath)) {
          return true;
        }
      }
    }
    return false;
  }

  return checkDir(srcAppPath);
}

/**
 * Generate sitemap.ts content
 */
function generateSitemapContent(appName, baseUrl, routes, useConstant = null) {
  const routesArray = Array.from(routes).sort();

  if (useConstant) {
    // Use predefined constant from @quest/ui/sitemap
    return `import { MetadataRoute } from 'next'
import { generateStaticSitemap, ${useConstant} } from '@quest/ui/sitemap'

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: '${baseUrl}',
    staticRoutes: ${useConstant},
  })
}
`;
  }

  // Generate custom route configuration
  const routeConfig = routesArray.map(route => {
    let priority = 1.0;
    let changeFrequency = 'weekly';

    if (route === '') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (route === '/about' || route === '/contact') {
      priority = 0.7;
      changeFrequency = 'monthly';
    } else if (route === '/privacy' || route === '/terms') {
      priority = 0.3;
      changeFrequency = 'yearly';
    } else if (route.includes('article') || route.includes('news') || route.includes('blog')) {
      priority = 0.8;
      changeFrequency = 'daily';
    } else {
      priority = 0.8;
      changeFrequency = 'weekly';
    }

    return `  { path: '${route}', changeFrequency: '${changeFrequency}' as const, priority: ${priority} }`;
  }).join(',\n');

  return `import { MetadataRoute } from 'next'
import { generateStaticSitemap } from '@quest/ui/sitemap'

const staticRoutes = [
${routeConfig}
]

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: '${baseUrl}',
    staticRoutes,
  })
}
`;
}

/**
 * Generate robots.ts content
 */
function generateRobotsContent(baseUrl) {
  return `import { generateRobots } from '@quest/ui/sitemap'

export default function robots() {
  return generateRobots('${baseUrl}')
}
`;
}

/**
 * Process a single app
 */
function processApp(appName, dryRun = false) {
  console.log(`\n📦 Processing: ${appName}`);

  const appPath = path.join(APPS_DIR, appName);
  const layoutPath = path.join(appPath, 'src', 'app', 'layout.tsx');
  const sitemapPath = path.join(appPath, 'src', 'app', 'sitemap.ts');
  const robotsPath = path.join(appPath, 'src', 'app', 'robots.ts');

  // Check if layout.tsx exists
  if (!fs.existsSync(layoutPath)) {
    console.log(`  ⚠️  No layout.tsx found - skipping`);
    stats.skipped++;
    return;
  }

  // Extract metadataBase
  const baseUrl = extractMetadataBase(layoutPath);
  if (!baseUrl) {
    console.log(`  ⚠️  Could not extract metadataBase URL - skipping`);
    stats.errors.push(`${appName}: No metadataBase found`);
    stats.skipped++;
    return;
  }

  console.log(`  🌐 Base URL: ${baseUrl}`);

  // Scan routes
  const routes = scanRoutes(appPath);
  console.log(`  📄 Found ${routes.size} routes:`, Array.from(routes).sort());

  // Check for dynamic routes
  const hasDynamic = hasDynamicRoutes(appPath);
  if (hasDynamic) {
    console.log(`  ⚡ Has dynamic routes - may need manual data fetching`);
  }

  // Determine if we should use a predefined constant
  const useConstant = ROUTE_CONSTANTS[appName] || null;
  if (useConstant) {
    console.log(`  🎯 Using predefined routes: ${useConstant}`);
  }

  // Generate sitemap.ts
  if (fs.existsSync(sitemapPath)) {
    console.log(`  ⏭️  sitemap.ts already exists - skipping`);
  } else {
    const sitemapContent = generateSitemapContent(appName, baseUrl, routes, useConstant);
    if (!dryRun) {
      fs.writeFileSync(sitemapPath, sitemapContent);
      console.log(`  ✅ Created sitemap.ts`);
      stats.sitemapsCreated++;
    } else {
      console.log(`  🔍 [DRY RUN] Would create sitemap.ts`);
    }
  }

  // Generate robots.ts
  if (fs.existsSync(robotsPath)) {
    console.log(`  ⏭️  robots.ts already exists - skipping`);
  } else {
    const robotsContent = generateRobotsContent(baseUrl);
    if (!dryRun) {
      fs.writeFileSync(robotsPath, robotsContent);
      console.log(`  ✅ Created robots.ts`);
      stats.robotsCreated++;
    } else {
      console.log(`  🔍 [DRY RUN] Would create robots.ts`);
    }
  }
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const testMode = args.includes('--test');

  console.log('🚀 Sitemap & Robots Generator for Quest Apps');
  console.log('='.repeat(50));

  if (dryRun) {
    console.log('🔍 DRY RUN MODE - No files will be created\n');
  }

  // Get all apps
  const allApps = fs.readdirSync(APPS_DIR)
    .filter(name => {
      const appPath = path.join(APPS_DIR, name);
      return fs.statSync(appPath).isDirectory() && !APPS_TO_SKIP.includes(name);
    })
    .sort();

  // Test mode: only process 5 specific apps
  const appsToProcess = testMode
    ? ['gas-rate-calculator', 'stamp-duty', 'mba', 'puppy-insurance', 'placement']
    : allApps;

  stats.total = appsToProcess.length;

  console.log(`📊 Total apps to process: ${stats.total}`);
  if (testMode) {
    console.log('🧪 TEST MODE - Processing 5 test apps only\n');
  }

  // Process each app
  for (const appName of appsToProcess) {
    try {
      processApp(appName, dryRun);
    } catch (error) {
      console.error(`  ❌ Error processing ${appName}:`, error.message);
      stats.errors.push(`${appName}: ${error.message}`);
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(50));
  console.log('📈 SUMMARY');
  console.log('='.repeat(50));
  console.log(`Total apps processed: ${stats.total}`);
  console.log(`Sitemaps created: ${stats.sitemapsCreated}`);
  console.log(`Robots.ts created: ${stats.robotsCreated}`);
  console.log(`Skipped: ${stats.skipped}`);
  console.log(`Errors: ${stats.errors.length}`);

  if (stats.errors.length > 0) {
    console.log('\n❌ Errors encountered:');
    stats.errors.forEach(err => console.log(`  - ${err}`));
  }

  console.log('\n✨ Done!');

  if (dryRun) {
    console.log('\nRun without --dry-run to create the files.');
  }

  if (testMode) {
    console.log('\n🧪 Test mode complete. Run without --test to process all apps.');
  }
}

main();
