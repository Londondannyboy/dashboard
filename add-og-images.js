#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// All layout.tsx files to update
const layoutFiles = [
  '/Users/dankeegan/dashboard/apps/chief-of-staff/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/childcare-calculator/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/craft-fair/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/dashboard/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/drone-insurance/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/esports-event/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/event-planner/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/film-production/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/fractional-jobs/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/fuel-cost-calculator/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/gas-rate-calculator/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/graduation/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/gtm/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/insulin-pump-insurance/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/mba/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/mobility-scooter-insurance/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/placement/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/pre-dash-deploy/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/predeploy/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/puppy-insurance/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/pvc/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/rainmakrr-agency/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/rainmakrr/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/relocation/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/salary-calculator/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/special-event/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/stamp-duty/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/tractor-insurance/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/village-fete/src/app/layout.tsx',
  '/Users/dankeegan/dashboard/apps/yoga-insurance/src/app/layout.tsx',
];

const results = {
  updated: [],
  alreadyHasImages: [],
  errors: [],
  withExistingOgImage: [],
  usingSharedDefault: [],
};

function extractAppName(filePath) {
  const match = filePath.match(/apps\/([^/]+)\//);
  return match ? match[1] : 'unknown';
}

function extractTitle(content) {
  // Try to extract the OpenGraph title or default title
  const ogTitleMatch = content.match(/openGraph:\s*{[^}]*title:\s*['"`]([^'"`]+)['"`]/s);
  if (ogTitleMatch) return ogTitleMatch[1];

  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (titleMatch) return titleMatch[1];

  const defaultTitleMatch = content.match(/default:\s*['"`]([^'"`]+)['"`]/);
  if (defaultTitleMatch) return defaultTitleMatch[1];

  return 'App';
}

function hasOgImages(content) {
  return content.includes('images:') &&
         (content.includes('openGraph:') || content.includes('og-image') || content.includes('opengraph'));
}

function hasTwitterImage(content) {
  return /twitter:\s*{[^}]*image:/s.test(content);
}

function checkForExistingOgImage(layoutPath) {
  const appDir = path.dirname(path.dirname(path.dirname(layoutPath)));
  const publicDir = path.join(appDir, 'public');

  const possibleImages = [
    'og.png',
    'og-image.png',
    'opengraph-image.png',
    'og.jpg',
    'og-image.jpg',
  ];

  for (const img of possibleImages) {
    if (fs.existsSync(path.join(publicDir, img))) {
      return img;
    }
  }

  return null;
}

function updateLayout(filePath) {
  const appName = extractAppName(filePath);
  console.log(`\n📝 Processing: ${appName}`);

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Check for existing og-image file
    const existingImage = checkForExistingOgImage(filePath);
    const imageUrl = existingImage || '/og-image.png';

    if (existingImage) {
      console.log(`   ✓ Found existing image: ${existingImage}`);
      results.withExistingOgImage.push(appName);
    } else {
      console.log(`   → Using shared default: /og-image.png`);
      results.usingSharedDefault.push(appName);
    }

    // Extract title for alt text
    const title = extractTitle(content);

    // Check if already has images
    if (hasOgImages(content) && hasTwitterImage(content)) {
      console.log(`   ⚠ Already has og:images and twitter:image - skipping`);
      results.alreadyHasImages.push(appName);
      return;
    }

    // Find the openGraph object
    const ogMatch = content.match(/(openGraph:\s*{)([\s\S]*?)(^  },)/m);

    if (!ogMatch) {
      console.log(`   ✗ Could not find openGraph object`);
      results.errors.push({ app: appName, error: 'No openGraph object found' });
      return;
    }

    const ogContent = ogMatch[2];

    // Add images to openGraph if not present
    if (!hasOgImages(content)) {
      const imagesBlock = `
    images: [
      {
        url: '${imageUrl}',
        width: 1200,
        height: 630,
        alt: '${title}',
        type: 'image/png',
      },
    ],`;

      // Insert images before the closing brace of openGraph
      content = content.replace(
        /(openGraph:\s*{[\s\S]*?)(^  },)/m,
        `$1${imagesBlock}\n$2`
      );
      console.log(`   ✓ Added openGraph.images`);
    }

    // Find the twitter object
    const twitterMatch = content.match(/(twitter:\s*{)([\s\S]*?)(^  },)/m);

    if (!twitterMatch) {
      console.log(`   ✗ Could not find twitter object`);
      results.errors.push({ app: appName, error: 'No twitter object found' });
      return;
    }

    // Add image to twitter if not present
    if (!hasTwitterImage(content)) {
      const twitterContent = twitterMatch[2];

      // Add image property to twitter object
      content = content.replace(
        /(twitter:\s*{[\s\S]*?description:\s*['"`][^'"`]*['"`],)/,
        `$1\n    image: '${imageUrl}',`
      );
      console.log(`   ✓ Added twitter.image`);
    }

    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`   ✅ Updated successfully`);
      results.updated.push(appName);
    } else {
      console.log(`   ⚠ No changes needed`);
      results.alreadyHasImages.push(appName);
    }

  } catch (error) {
    console.log(`   ✗ Error: ${error.message}`);
    results.errors.push({ app: appName, error: error.message });
  }
}

// Main execution
console.log('🚀 Starting og:image and twitter:image update for all apps...\n');
console.log(`Found ${layoutFiles.length} layout files to process\n`);

layoutFiles.forEach(updateLayout);

// Print summary
console.log('\n' + '='.repeat(70));
console.log('📊 SUMMARY REPORT');
console.log('='.repeat(70));
console.log(`\n✅ Total apps updated: ${results.updated.length}`);
console.log(`⚠️  Apps already had images: ${results.alreadyHasImages.length}`);
console.log(`📁 Apps with existing og-image file: ${results.withExistingOgImage.length}`);
console.log(`🔗 Apps using shared default: ${results.usingSharedDefault.length}`);
console.log(`❌ Errors: ${results.errors.length}`);

if (results.updated.length > 0) {
  console.log('\n✅ Updated apps:');
  results.updated.forEach(app => console.log(`   - ${app}`));
}

if (results.alreadyHasImages.length > 0) {
  console.log('\n⚠️  Already had images:');
  results.alreadyHasImages.forEach(app => console.log(`   - ${app}`));
}

if (results.withExistingOgImage.length > 0) {
  console.log('\n📁 Apps with existing og-image files:');
  results.withExistingOgImage.forEach(app => console.log(`   - ${app}`));
}

if (results.usingSharedDefault.length > 0) {
  console.log('\n🔗 Apps using shared default (/og-image.png):');
  results.usingSharedDefault.forEach(app => console.log(`   - ${app}`));
}

if (results.errors.length > 0) {
  console.log('\n❌ Errors:');
  results.errors.forEach(({ app, error }) => console.log(`   - ${app}: ${error}`));
}

console.log('\n' + '='.repeat(70));
console.log('✨ Done!');
console.log('='.repeat(70) + '\n');
