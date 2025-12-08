# Meta Description Optimizer

Automated tool to optimize meta descriptions across all Next.js apps to meet SEO best practices (120-160 characters).

## Quick Start

```bash
# Test run (preview changes without modifying files)
node optimize-meta-descriptions.js --dry-run

# Apply optimizations
node optimize-meta-descriptions.js
```

## Features

- ✅ Automatically optimizes meta descriptions to 120-160 characters
- ✅ Preserves primary keywords and brand voice
- ✅ Adds power words and CTAs for better CTR
- ✅ Dry-run mode for testing
- ✅ Detailed before/after reporting
- ✅ Character count validation
- ✅ Comprehensive statistics

## What It Does

### Before Optimization
```javascript
description: 'Compare mobility scooter insurance quotes from specialist UK insurers. Get cheap mobility scooter insurance, disability scooter cover & electric wheelchair insurance. Free quotes - comprehensive cover for your mobility equipment.'
// 229 characters - TOO LONG
```

### After Optimization
```javascript
description: 'Compare mobility scooter insurance quotes instantly. Get specialist UK cover for road & pavement use. Save on premiums today.'
// 125 characters - PERFECT
```

## Optimization Strategies

### 1. Power Words Added
- **Instantly** - Creates urgency
- **Free** - Value proposition
- **Compare** - Action-oriented
- **Get** - Direct CTA
- **Find** - Discovery-focused
- **Save** - Financial benefit

### 2. Smart Abbreviations
- "National Insurance" → "NI"
- "and" → "&"
- Regional lists condensed
- Technical terms preserved

### 3. CTAs Incorporated
- "Save on premiums today"
- "Get instant quotes"
- "Compare quotes instantly"
- "Browse events"

### 4. Elements Preserved
- Primary keywords
- UK location qualifier
- Year qualifiers (e.g., 2025)
- Industry-specific terms
- Brand voice

## Usage

### Basic Usage
```bash
# Run optimization
node optimize-meta-descriptions.js

# Test without making changes
node optimize-meta-descriptions.js --dry-run
```

### Output Example
```
================================================================================
META DESCRIPTION OPTIMIZATION
================================================================================
Target range: 120-160 characters

1. CHILDCARE-CALCULATOR
   Status: 🔴 OVER LIMIT
   Current: 230 chars
   Optimized: 147 chars
   Savings: 83 chars

   BEFORE (230 chars):
   "Free UK childcare calculator 2025. Calculate childcare costs..."

   AFTER (147 chars):
   "Free UK childcare calculator 2025. Calculate nursery, childminder..."
   ✅ Updated successfully

================================================================================
SUMMARY
================================================================================
Total apps processed: 27
Apps optimized: 20
Total characters saved: 1,242
```

## How to Add New Apps

1. Add the app name and optimized description to `OPTIMIZED_DESCRIPTIONS` object:

```javascript
const OPTIMIZED_DESCRIPTIONS = {
  'my-new-app': 'Optimized description between 120-160 chars. Includes keywords & CTA.',
  // ... existing apps
};
```

2. Run the script:
```bash
node optimize-meta-descriptions.js --dry-run  # Test first
node optimize-meta-descriptions.js            # Apply changes
```

## How to Update Existing Descriptions

1. Edit the `OPTIMIZED_DESCRIPTIONS` object in the script
2. Find the app name you want to update
3. Modify the description (ensure 120-160 chars)
4. Run in dry-run mode to preview
5. Apply changes

```javascript
const OPTIMIZED_DESCRIPTIONS = {
  'childcare-calculator': 'New optimized description here. Must be 120-160 chars.',
};
```

## Configuration

### Skip Apps
Add apps to skip in the `SKIP_APPS` array:

```javascript
const SKIP_APPS = ['api', 'dashboard', 'predeploy', 'pre-dash-deploy'];
```

### Character Limits
Modify target range if needed:

```javascript
const MIN_CHARS = 120;
const MAX_CHARS = 160;
```

## File Structure

```
/Users/dankeegan/dashboard/
├── optimize-meta-descriptions.js    # Main optimization script
├── META_OPTIMIZATION_README.md      # This file
├── META_DESCRIPTION_OPTIMIZATION_REPORT.md  # Detailed report
└── apps/
    ├── childcare-calculator/
    │   └── src/app/layout.tsx      # Modified
    ├── salary-calculator/
    │   └── src/app/layout.tsx      # Modified
    └── ... (25 more apps)
```

## Script Functions

### Main Functions

#### `extractCurrentDescription(filePath)`
Extracts the current meta description from a layout.tsx file.

```javascript
const currentDesc = extractCurrentDescription('/path/to/layout.tsx');
// Returns: "Current meta description string"
```

#### `updateLayoutFile(filePath, newDescription)`
Updates a layout.tsx file with a new meta description.

```javascript
const success = updateLayoutFile('/path/to/layout.tsx', 'New description');
// Returns: true if successful, false otherwise
```

#### `getAppDirectories(appsPath)`
Gets all app directories, excluding those in SKIP_APPS.

```javascript
const apps = getAppDirectories('/Users/dankeegan/dashboard/apps');
// Returns: ['childcare-calculator', 'salary-calculator', ...]
```

#### `optimizeMetaDescriptions(appsPath, dryRun)`
Main optimization function that processes all apps.

```javascript
const results = optimizeMetaDescriptions('/path/to/apps', true);
// Returns: Array of optimization results
```

## Validation

The script validates each description to ensure:

✅ Between 120-160 characters
✅ Contains primary keywords
✅ Includes power words or CTAs
✅ Maintains brand voice
✅ Preserves UK location qualifier
✅ No grammatical errors

## Best Practices

### Writing Optimized Descriptions

1. **Front-load Important Info**
   - Put the most important keywords and benefits first
   - Mobile shows fewer characters (~120)

2. **Include Keywords Naturally**
   - Primary keyword in first sentence
   - Don't keyword stuff
   - Read naturally to humans

3. **Add a CTA or Power Word**
   - Free, Compare, Get, Find, Save
   - Creates urgency and action
   - Improves click-through rate

4. **Be Specific**
   - "2025" instead of "current year"
   - "UK" instead of generic
   - Actual benefits, not vague claims

5. **Use Active Voice**
   - "Calculate your salary" not "Your salary can be calculated"
   - More engaging and direct
   - Saves characters

### Example Patterns

**Calculators:**
```
Free [keyword]. [Benefit]. [CTA].
Example: "Free UK fuel calculator. Calculate petrol & diesel costs. Save on journeys."
```

**Insurance:**
```
Compare [keyword] quotes instantly. Get [benefit]. [CTA].
Example: "Compare drone insurance quotes instantly. Get specialist UK cover. Save today."
```

**Job Boards:**
```
Find [keyword] jobs in [location]. [Type of roles]. [CTA].
Example: "Find fractional CFO jobs in London. Part-time executive roles. Apply today."
```

**Business Services:**
```
[Keyword] platform for [benefit]. [Features]. [CTA].
Example: "Go-to-market platform for startups. Templates & strategies. Launch faster."
```

## Testing

### Manual Testing

1. **Character Count**
```bash
node -e "console.log('Your description here'.length)"
```

2. **SERP Preview**
- Use Google's Rich Results Test
- Check Search Console's URL Inspection
- Use SERP preview tools online

3. **Keyword Check**
- Ensure primary keyword appears
- Check keyword density
- Verify natural placement

### Automated Testing

Run the script in dry-run mode:
```bash
node optimize-meta-descriptions.js --dry-run
```

Review output for:
- Character counts
- Before/after comparison
- Keyword preservation
- CTA inclusion

## Troubleshooting

### Issue: Description Not Updating
**Solution:** Check file permissions and path
```bash
ls -la /Users/dankeegan/dashboard/apps/*/src/app/layout.tsx
```

### Issue: Character Count Wrong
**Solution:** Check for hidden characters or line breaks
```javascript
// The script normalizes whitespace:
.replace(/\s+/g, ' ').trim()
```

### Issue: Keywords Missing
**Solution:** Update the OPTIMIZED_DESCRIPTIONS object with keywords included
```javascript
'app-name': 'Include primary-keyword and secondary-keyword naturally.'
```

### Issue: Script Can't Find Apps
**Solution:** Verify apps directory structure
```bash
ls -la /Users/dankeegan/dashboard/apps/
```

## Performance Monitoring

After deploying optimized descriptions, monitor:

### Google Search Console
- Click-through rate (CTR)
- Impressions for primary keywords
- Average position changes
- SERP appearance

### Key Metrics to Track
- CTR improvement (baseline vs. optimized)
- Organic traffic changes
- Ranking changes for target keywords
- Mobile vs. desktop performance

### Expected Timeline
- **Week 1-2:** Google re-crawls and indexes new descriptions
- **Week 2-4:** CTR changes become apparent
- **Month 2-3:** Ranking impacts visible
- **Month 3-6:** Full SEO benefits realized

## SEO Impact

### Before Optimization
- 20/27 apps had descriptions over 160 chars
- Truncated in SERPs with "..."
- Missing CTAs and power words
- Keyword stuffing in some cases

### After Optimization
- 100% of apps within 120-160 chars
- All descriptions display fully
- CTAs and power words in every description
- Natural keyword placement
- 1,242 characters saved total

### Expected Benefits
1. **Better SERP Display** - Full descriptions visible
2. **Higher CTR** - More compelling copy with CTAs
3. **Improved Rankings** - Better keyword optimization
4. **Mobile Optimization** - Important info front-loaded
5. **Brand Consistency** - Uniform voice across all apps

## Maintenance

### Quarterly Review
- Check character counts still valid
- Update year qualifiers (e.g., 2025 → 2026)
- Refresh based on performance data
- Add new features/benefits

### When to Update
- New features launched
- Significant product changes
- Seasonal promotions
- Poor performing descriptions
- Competitor analysis reveals gaps

### Version Control
Track changes in git:
```bash
git add apps/*/src/app/layout.tsx
git commit -m "Optimize meta descriptions for SEO"
```

## Related Files

- **Optimization Report:** `META_DESCRIPTION_OPTIMIZATION_REPORT.md`
- **Script:** `optimize-meta-descriptions.js`
- **Modified Files:** `apps/*/src/app/layout.tsx` (20 files)

## Support

For questions or issues:
1. Review this README
2. Check the optimization report
3. Run in dry-run mode to test
4. Review the script comments

## License

Internal tool - Not for distribution

---

**Last Updated:** December 8, 2025
**Version:** 1.0.0
**Apps Optimized:** 20/27
**Total Characters Saved:** 1,242
