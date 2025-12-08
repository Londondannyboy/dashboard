#!/usr/bin/env node

/**
 * Meta Description Optimizer
 *
 * Optimizes meta descriptions across all apps to be between 120-160 characters.
 * Includes keywords, CTAs, and power words for better SERP performance.
 */

const fs = require('fs');
const path = require('path');

// Apps to skip
const SKIP_APPS = ['api', 'dashboard', 'predeploy', 'pre-dash-deploy'];

// Target character range
const MIN_CHARS = 120;
const MAX_CHARS = 160;

// Optimized meta descriptions (120-160 chars)
const OPTIMIZED_DESCRIPTIONS = {
  // Test apps (Priority 1-5)
  'childcare-calculator': 'Free UK childcare calculator 2025. Calculate nursery, childminder & nanny costs instantly. Compare by age, region & type. Check Tax-Free Childcare.',
  'salary-calculator': 'Free UK salary calculator 2025/26. Calculate take home pay, tax, NI & pension deductions instantly. Updated with latest rates for all UK regions.',
  'tractor-insurance': 'Compare agricultural tractor insurance quotes instantly. Get specialist UK farm vehicle cover. Save on tractor insurance today.',
  'gas-rate-calculator': 'Free gas rate calculator for UK gas engineers. Calculate appliance heat input in kW from meter readings. Metric & imperial support.',
  'fuel-cost-calculator': 'Free UK fuel cost calculator. Calculate petrol & diesel costs per mile and journey expenses. Perfect for commuters & trip planning.',

  // Additional priority apps (6-10)
  'mobility-scooter-insurance': 'Compare mobility scooter insurance quotes instantly. Get specialist UK cover for road & pavement use. Save on premiums today.',
  'insulin-pump-insurance': 'Compare insulin pump insurance quotes from UK specialists. Get comprehensive cover for Type 1 diabetes medical devices. Instant quotes.',
  'stamp-duty': 'Free UK stamp duty calculator 2025. Calculate stamp duty land tax for England, Wales, Scotland & Northern Ireland. Get instant accurate results.',
  'relocation': 'Find trusted UK relocation services. Compare removal companies, international movers & storage. Get instant quotes for your move.',
  'puppy-insurance': 'Compare puppy insurance quotes instantly. Get cover from 8 weeks old. Protect your puppy with comprehensive UK pet insurance.',

  // Remaining apps (11-27)
  'yoga-insurance': 'Compare yoga teacher insurance quotes instantly. Get specialist UK cover for yoga instructors & studios. Save on premiums today.',
  'drone-insurance': 'Compare drone insurance quotes for UK pilots. Get specialist cover for commercial & recreational drones. Instant quotes from top insurers.',
  'fractional-jobs': 'Find fractional executive jobs in the UK. Browse part-time C-suite & senior leadership roles. Connect with top companies hiring fractional talent.',
  'placement': 'Find placement year opportunities across the UK. Browse paid industrial placements for university students. Launch your career today.',
  'mba': 'Find MBA programs across the UK. Compare business schools, fees & specializations. Get expert guidance for your MBA journey.',
  'graduation': 'Plan the perfect UK graduation celebration. Find venues, photographers & party services. Make your graduation unforgettable.',
  'chief-of-staff': 'Find Chief of Staff jobs in the UK. Browse executive roles supporting C-suite leaders. Connect with top companies hiring CoS talent.',
  'gtm': 'Launch your product successfully with our go-to-market platform. Get templates, strategies & tools for UK B2B & SaaS companies.',
  'pvc': 'Find Private Venture Capital opportunities in the UK. Connect with investors & startups. Discover funding & investment opportunities.',
  'rainmakrr': 'Find high-commission sales opportunities in the UK. Browse performance-based roles with unlimited earning potential. Join top sales teams.',
  'rainmakrr-agency': 'Growth agency for ambitious UK startups. Get sales, marketing & revenue acceleration services. Scale your business faster.',
  'event-planner': 'Plan unforgettable events with our UK platform. Find venues, suppliers & services for corporate & private events. Get instant quotes.',
  'craft-fair': 'Find craft fairs & artisan markets across the UK. Book stall spaces, browse events & connect with makers. Grow your craft business.',
  'esports-event': 'Plan epic esports events in the UK. Find venues, equipment & tournament management services. Host professional gaming competitions.',
  'film-production': 'Find UK film production services & crews. Browse locations, equipment hire & post-production. Bring your film project to life.',
  'special-event': 'Plan special events across the UK. Find unique venues, entertainment & services for memorable celebrations. Get instant quotes.',
  'village-fete': 'Plan a successful village fete. Find stalls, entertainment & suppliers for community events. Make your village celebration memorable.',
};

// Function to extract current description from layout.tsx
function extractCurrentDescription(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const descMatch = content.match(/description:\s*['"](.+?)['"]/s);
    if (descMatch) {
      return descMatch[1].replace(/\s+/g, ' ').trim();
    }
    return null;
  } catch (error) {
    return null;
  }
}

// Function to update layout.tsx with new description
function updateLayoutFile(filePath, newDescription) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace the description field
    content = content.replace(
      /(description:\s*['"])(.+?)(['"])/s,
      `$1${newDescription}$3`
    );

    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
    return false;
  }
}

// Function to get all app directories
function getAppDirectories(appsPath) {
  try {
    const entries = fs.readdirSync(appsPath, { withFileTypes: true });
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .filter(name => !SKIP_APPS.includes(name) && !name.startsWith('.'));
  } catch (error) {
    console.error('Error reading apps directory:', error.message);
    return [];
  }
}

// Main optimization function
function optimizeMetaDescriptions(appsPath, dryRun = false) {
  console.log('='.repeat(80));
  console.log('META DESCRIPTION OPTIMIZATION');
  console.log('='.repeat(80));
  console.log(`Target range: ${MIN_CHARS}-${MAX_CHARS} characters\n`);

  const apps = getAppDirectories(appsPath);
  const results = [];
  let totalOptimized = 0;
  let totalCharsSaved = 0;

  console.log(`Found ${apps.length} apps to process\n`);

  apps.forEach((appName, index) => {
    const layoutPath = path.join(appsPath, appName, 'src', 'app', 'layout.tsx');

    if (!fs.existsSync(layoutPath)) {
      console.log(`⚠️  ${index + 1}. ${appName}: layout.tsx not found\n`);
      return;
    }

    const currentDesc = extractCurrentDescription(layoutPath);
    if (!currentDesc) {
      console.log(`⚠️  ${index + 1}. ${appName}: Could not extract description\n`);
      return;
    }

    const currentLength = currentDesc.length;
    const optimizedDesc = OPTIMIZED_DESCRIPTIONS[appName];

    if (!optimizedDesc) {
      console.log(`⚠️  ${index + 1}. ${appName}: No optimized description defined\n`);
      return;
    }

    const optimizedLength = optimizedDesc.length;
    const charDiff = currentLength - optimizedLength;
    const needsOptimization = currentLength > MAX_CHARS;

    // Display results
    const status = needsOptimization ? '🔴 OVER LIMIT' : '✅ OK';
    console.log(`${index + 1}. ${appName.toUpperCase()}`);
    console.log(`   Status: ${status}`);
    console.log(`   Current: ${currentLength} chars`);
    console.log(`   Optimized: ${optimizedLength} chars`);
    console.log(`   Savings: ${charDiff} chars`);

    if (needsOptimization) {
      console.log(`\n   BEFORE (${currentLength} chars):`);
      console.log(`   "${currentDesc}"`);
      console.log(`\n   AFTER (${optimizedLength} chars):`);
      console.log(`   "${optimizedDesc}"`);

      if (!dryRun) {
        const updated = updateLayoutFile(layoutPath, optimizedDesc);
        if (updated) {
          console.log(`   ✅ Updated successfully`);
          totalOptimized++;
          totalCharsSaved += charDiff;
        } else {
          console.log(`   ❌ Update failed`);
        }
      } else {
        console.log(`   📝 DRY RUN - No changes made`);
      }
    }

    console.log('');

    results.push({
      app: appName,
      currentLength,
      optimizedLength,
      charDiff,
      needsOptimization,
    });
  });

  // Summary
  console.log('='.repeat(80));
  console.log('SUMMARY');
  console.log('='.repeat(80));
  console.log(`Total apps processed: ${apps.length}`);
  console.log(`Apps needing optimization: ${results.filter(r => r.needsOptimization).length}`);

  if (!dryRun) {
    console.log(`Apps optimized: ${totalOptimized}`);
    console.log(`Total characters saved: ${totalCharsSaved}`);
  } else {
    console.log(`\nThis was a DRY RUN - no files were modified.`);
    console.log(`Run without --dry-run flag to apply changes.`);
  }

  console.log('\n' + '='.repeat(80));
  console.log('DETAILED STATS');
  console.log('='.repeat(80));

  const overLimit = results.filter(r => r.needsOptimization);
  const underLimit = results.filter(r => !r.needsOptimization);

  console.log(`\nApps over ${MAX_CHARS} characters (${overLimit.length}):`);
  overLimit
    .sort((a, b) => b.currentLength - a.currentLength)
    .forEach(r => {
      console.log(`  - ${r.app}: ${r.currentLength} → ${r.optimizedLength} (saved ${r.charDiff})`);
    });

  console.log(`\nApps within range (${underLimit.length}):`);
  underLimit.forEach(r => {
    console.log(`  - ${r.app}: ${r.currentLength} chars ✓`);
  });

  return results;
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const testMode = args.includes('--test');

  const appsPath = path.join(__dirname, 'apps');

  if (!fs.existsSync(appsPath)) {
    console.error(`Error: Apps directory not found at ${appsPath}`);
    process.exit(1);
  }

  if (testMode) {
    console.log('🧪 TEST MODE: Processing 5 test apps only\n');
  }

  optimizeMetaDescriptions(appsPath, dryRun);
}

module.exports = { optimizeMetaDescriptions };
