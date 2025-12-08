# OG:IMAGE and Twitter:Image Implementation

## 🎉 Implementation Complete!

All 30 apps in the monorepo now have `og:image` and `twitter:image` metadata configured.

## ✅ What Was Done

### 1. Metadata Updates (100% Complete)
All 30 app `layout.tsx` files have been updated with:

**OpenGraph metadata:**
```typescript
openGraph: {
  title: '...',
  description: '...',
  type: 'website',
  locale: 'en_GB',
  siteName: '...',
  images: [
    {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'App Title',
      type: 'image/png',
    }
  ]
}
```

**Twitter metadata:**
```typescript
twitter: {
  card: 'summary_large_image',
  title: '...',
  description: '...',
  image: '/og-image.png',
}
```

### 2. Image Files (100% Complete)
All 30 apps now have placeholder `og-image.png` files:
- **Location:** `apps/*/public/og-image.png`
- **Current Status:** 1x1 transparent PNG placeholder (70 bytes)
- **Required Size:** 1200x630px
- **Format:** PNG

## 📊 Apps Updated (30/30)

✅ All apps complete with metadata + placeholder images:

1. chief-of-staff
2. childcare-calculator
3. craft-fair
4. dashboard
5. drone-insurance
6. esports-event
7. event-planner
8. film-production
9. fractional-jobs
10. fuel-cost-calculator
11. gas-rate-calculator
12. graduation
13. gtm
14. insulin-pump-insurance
15. mba
16. mobility-scooter-insurance
17. placement
18. pre-dash-deploy
19. predeploy
20. puppy-insurance
21. pvc
22. rainmakrr-agency
23. rainmakrr
24. relocation
25. salary-calculator
26. special-event
27. stamp-duty
28. tractor-insurance
29. village-fete
30. yoga-insurance

## 📋 Next Steps

### 1. Create Proper OG Images (1200x630px)

The current placeholder images need to be replaced with proper branded designs.

**Design Tools:**
- **Canva:** Use 1200x630px template ([Canva OG Image Template](https://www.canva.com/create/og-images/))
- **Figma:** Create 1200x630px frame
- **Online Tools:**
  - https://www.opengraph.xyz/
  - https://bannerify.co/
  - https://og-image.vercel.app/

**Design Guidelines:**
- Size: 1200x630px (2:1 aspect ratio)
- Format: PNG or JPG
- Keep important text/logos in the center
- Avoid text near edges (may be cropped)
- Use brand colors and fonts
- Include app name and key value proposition
- Keep file size under 8MB (ideally under 300KB)

### 2. Replace Placeholder Images

**Option A: Unique image per app**
```bash
# Create individual images for each app
cp /path/to/chief-of-staff-og.png apps/chief-of-staff/public/og-image.png
cp /path/to/mba-og.png apps/mba/public/og-image.png
# ... repeat for all apps
```

**Option B: Template-based approach**
```bash
# Create one template and customize programmatically
# Use tools like @vercel/og or node-canvas to generate images
```

**Option C: Use one generic image**
```bash
# Create one branded "Quest" image for all apps
cp /path/to/quest-generic-og.png apps/*/public/og-image.png
```

### 3. Test Social Media Previews

After replacing placeholder images, test how they appear:

- **Facebook:** https://developers.facebook.com/tools/debug/
- **Twitter:** https://cards-dev.twitter.com/validator
- **LinkedIn:** https://www.linkedin.com/post-inspector/

### 4. Optional: Dynamic OG Images

Consider generating dynamic OG images using:
- **@vercel/og:** Generate images at build time or on-demand
- **Next.js ImageResponse:** Built-in dynamic OG image generation
- **Cloudinary or Imgix:** URL-based image generation

## 🛠 Utility Scripts

The following scripts are available in the root directory:

### `add-og-images.js`
Main script that added og:image metadata to all 30 apps.
```bash
node add-og-images.js
```

### `verify-og-images.js`
Verification script to check metadata and files.
```bash
node verify-og-images.js
```

### `final-report.js`
Comprehensive report of implementation status.
```bash
node final-report.js
```

### `create-placeholder-images.sh`
Creates placeholder og-image.png files (already run).
```bash
./create-placeholder-images.sh
```

## 📝 Example Implementation

Here's an example from `/Users/dankeegan/dashboard/apps/drone-insurance/src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'Drone Insurance UK 2025 | UAV & Quadcopter Insurance Quotes',
    template: '%s | Drone Insurance UK',
  },
  description: 'Compare drone insurance quotes...',
  metadataBase: new URL('https://droneinsurance.quest'),
  openGraph: {
    title: 'Drone Insurance UK 2025 | UAV & Quadcopter Insurance Quotes',
    description: 'Compare drone insurance quotes from specialist UK insurers...',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Drone Insurance UK',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Drone Insurance UK 2025 | UAV & Quadcopter Insurance Quotes',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Insurance UK 2025',
    description: 'Compare drone insurance quotes from UK specialist insurers.',
    image: '/og-image.png',
  },
  // ... other metadata
}
```

## 🎨 Image Design Tips

**Content to Include:**
- App name/brand
- Key value proposition
- Visual elements (icons, illustrations)
- Brand colors
- Minimal text (will be small in previews)

**What to Avoid:**
- Too much text
- Small fonts (< 48px)
- Important content near edges
- Complex designs that don't scale
- Generic stock photos without context

## 📚 Resources

- [OpenGraph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [OG Image Best Practices](https://www.opengraph.xyz/best-practices)

## ✨ Summary

- **Metadata:** ✅ 30/30 apps (100%)
- **Placeholder Files:** ✅ 30/30 apps (100%)
- **Production Images:** ⏳ Need to be created (0%)

**Next action:** Create and replace placeholder images with proper 1200x630px branded designs.
