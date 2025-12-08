#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

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

function extractAppName(filePath) {
  const match = filePath.match(/apps\/([^/]+)\//);
  return match ? match[1] : 'unknown';
}

function hasOgImages(content) {
  return /openGraph:\s*{[\s\S]*?images:\s*\[/m.test(content);
}

function hasTwitterImage(content) {
  return /twitter:\s*{[\s\S]*?image:/m.test(content);
}

function extractOgImageUrl(content) {
  const match = content.match(/url:\s*['"`]([^'"`]+)['"`]/);
  return match ? match[1] : null;
}

function checkPhysicalFile(layoutPath, imageUrl) {
  const appDir = path.dirname(path.dirname(path.dirname(layoutPath)));
  const publicDir = path.join(appDir, 'public');
  const imagePath = path.join(publicDir, imageUrl.replace(/^\//, ''));

  return fs.existsSync(imagePath);
}

console.log('🔍 Verifying og:image and twitter:image metadata...\n');
console.log('='.repeat(70) + '\n');

const results = {
  withBothMetadata: [],
  missingOgImages: [],
  missingTwitterImage: [],
  missingBoth: [],
  missingPhysicalFile: [],
};

layoutFiles.forEach(filePath => {
  const appName = extractAppName(filePath);

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const hasOg = hasOgImages(content);
    const hasTwitter = hasTwitterImage(content);

    if (hasOg && hasTwitter) {
      const imageUrl = extractOgImageUrl(content);
      const fileExists = imageUrl ? checkPhysicalFile(filePath, imageUrl) : false;

      if (fileExists) {
        console.log(`✅ ${appName.padEnd(30)} - Has metadata & file exists`);
        results.withBothMetadata.push(appName);
      } else {
        console.log(`⚠️  ${appName.padEnd(30)} - Has metadata but file missing: ${imageUrl}`);
        results.missingPhysicalFile.push({ app: appName, url: imageUrl });
      }
    } else if (!hasOg && !hasTwitter) {
      console.log(`❌ ${appName.padEnd(30)} - Missing both og:images AND twitter:image`);
      results.missingBoth.push(appName);
    } else if (!hasOg) {
      console.log(`⚠️  ${appName.padEnd(30)} - Missing og:images`);
      results.missingOgImages.push(appName);
    } else if (!hasTwitter) {
      console.log(`⚠️  ${appName.padEnd(30)} - Missing twitter:image`);
      results.missingTwitterImage.push(appName);
    }
  } catch (error) {
    console.log(`❌ ${appName.padEnd(30)} - Error: ${error.message}`);
  }
});

console.log('\n' + '='.repeat(70));
console.log('📊 VERIFICATION SUMMARY');
console.log('='.repeat(70));
console.log(`\n✅ Apps with complete metadata: ${results.withBothMetadata.length}`);
console.log(`⚠️  Apps with metadata but missing file: ${results.missingPhysicalFile.length}`);
console.log(`❌ Apps missing og:images: ${results.missingOgImages.length}`);
console.log(`❌ Apps missing twitter:image: ${results.missingTwitterImage.length}`);
console.log(`❌ Apps missing both: ${results.missingBoth.length}`);

if (results.missingPhysicalFile.length > 0) {
  console.log('\n⚠️  Apps needing physical og-image.png file:');
  results.missingPhysicalFile.forEach(({ app, url }) => {
    console.log(`   - ${app} (${url})`);
  });
}

if (results.missingBoth.length > 0) {
  console.log('\n❌ Apps missing both metadata types:');
  results.missingBoth.forEach(app => console.log(`   - ${app}`));
}

console.log('\n' + '='.repeat(70));
console.log('📋 STATUS');
console.log('='.repeat(70));

const totalApps = layoutFiles.length;
const appsWithMetadata = results.withBothMetadata.length + results.missingPhysicalFile.length;

console.log(`\nMetadata Update: ${appsWithMetadata}/${totalApps} apps (${Math.round(appsWithMetadata/totalApps*100)}%)`);
console.log(`Physical Files: ${results.withBothMetadata.length}/${totalApps} apps (${Math.round(results.withBothMetadata.length/totalApps*100)}%)`);

console.log('\n' + '='.repeat(70) + '\n');
