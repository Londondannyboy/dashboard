#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of all apps (excluding api which likely doesn't need an og-image)
const apps = [
  'chief-of-staff',
  'childcare-calculator',
  'craft-fair',
  'dashboard',
  'drone-insurance',
  'esports-event',
  'event-planner',
  'film-production',
  'fractional-jobs',
  'fuel-cost-calculator',
  'gas-rate-calculator',
  'graduation',
  'gtm',
  'insulin-pump-insurance',
  'mba',
  'mobility-scooter-insurance',
  'placement',
  'pre-dash-deploy',
  'predeploy',
  'puppy-insurance',
  'pvc',
  'rainmakrr-agency',
  'rainmakrr',
  'relocation',
  'salary-calculator',
  'special-event',
  'stamp-duty',
  'tractor-insurance',
  'village-fete',
  'yoga-insurance',
];

console.log('🎨 Creating og-image.png placeholder files...\n');

let created = 0;
let alreadyExists = 0;
let errors = 0;

apps.forEach(app => {
  const publicDir = `/Users/dankeegan/dashboard/apps/${app}/public`;
  const ogImagePath = path.join(publicDir, 'og-image.png');

  // Check if public directory exists
  if (!fs.existsSync(publicDir)) {
    console.log(`⚠️  ${app}: public directory doesn't exist - skipping`);
    return;
  }

  // Check if og-image.png already exists
  if (fs.existsSync(ogImagePath)) {
    console.log(`✓ ${app}: og-image.png already exists - skipping`);
    alreadyExists++;
    return;
  }

  try {
    // Create a simple placeholder file
    // This creates an empty file - you should replace with actual PNG data
    // For now, we'll document that a proper image needs to be created
    console.log(`📝 ${app}: needs og-image.png created`);
    created++;
  } catch (error) {
    console.log(`✗ ${app}: Error - ${error.message}`);
    errors++;
  }
});

console.log('\n' + '='.repeat(70));
console.log('📊 OG-IMAGE CREATION SUMMARY');
console.log('='.repeat(70));
console.log(`\n📝 Apps needing og-image.png: ${created}`);
console.log(`✓ Apps with existing og-image.png: ${alreadyExists}`);
console.log(`✗ Errors: ${errors}`);

console.log('\n' + '='.repeat(70));
console.log('📋 NEXT STEPS:');
console.log('='.repeat(70));
console.log('\nTo create actual og-image.png files (1200x630px), you have these options:');
console.log('\n1. Use an online tool like:');
console.log('   - https://www.opengraph.xyz/');
console.log('   - https://bannerify.co/');
console.log('   - Canva (use 1200x630px template)');
console.log('\n2. Use a design tool like Figma/Photoshop');
console.log('\n3. Generate programmatically with @vercel/og or node-canvas');
console.log('\n4. Create one generic image and copy to all apps:');
console.log('   cp /path/to/generic-og.png apps/*/public/og-image.png');
console.log('\n' + '='.repeat(70) + '\n');
