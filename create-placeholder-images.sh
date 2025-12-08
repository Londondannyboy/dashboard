#!/bin/bash

# Create a 1200x630 placeholder PNG using ImageMagick (if available)
# This creates a simple gradient background with "Quest" text

PLACEHOLDER_FILE="/tmp/og-image-placeholder.png"

# Check if ImageMagick is installed
if command -v convert &> /dev/null; then
    echo "Creating placeholder og-image.png using ImageMagick..."
    convert -size 1200x630 \
        gradient:'#667eea'-'#764ba2' \
        -gravity center \
        -pointsize 120 \
        -fill white \
        -font Arial-Bold \
        -annotate +0+0 'Quest' \
        "$PLACEHOLDER_FILE"
else
    # Create a minimal valid PNG (1x1 transparent pixel)
    echo "ImageMagick not found. Creating minimal placeholder..."
    # This is a base64 encoded 1x1 transparent PNG
    echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" | base64 -d > "$PLACEHOLDER_FILE"
fi

# Copy to all app public directories
apps=(
    "chief-of-staff"
    "childcare-calculator"
    "craft-fair"
    "dashboard"
    "drone-insurance"
    "esports-event"
    "event-planner"
    "film-production"
    "fractional-jobs"
    "fuel-cost-calculator"
    "gas-rate-calculator"
    "graduation"
    "gtm"
    "insulin-pump-insurance"
    "mba"
    "mobility-scooter-insurance"
    "placement"
    "pre-dash-deploy"
    "predeploy"
    "puppy-insurance"
    "pvc"
    "rainmakrr-agency"
    "rainmakrr"
    "relocation"
    "salary-calculator"
    "special-event"
    "stamp-duty"
    "tractor-insurance"
    "village-fete"
    "yoga-insurance"
)

echo ""
echo "Copying placeholder to all apps..."
echo ""

copied=0
skipped=0

for app in "${apps[@]}"; do
    public_dir="/Users/dankeegan/dashboard/apps/${app}/public"
    og_image="${public_dir}/og-image.png"

    if [ ! -d "$public_dir" ]; then
        echo "⚠️  ${app}: public directory doesn't exist - skipping"
        continue
    fi

    if [ -f "$og_image" ]; then
        echo "✓ ${app}: og-image.png already exists - skipping"
        ((skipped++))
    else
        cp "$PLACEHOLDER_FILE" "$og_image"
        echo "✅ ${app}: og-image.png created"
        ((copied++))
    fi
done

echo ""
echo "======================================================================"
echo "Summary:"
echo "  Created: $copied"
echo "  Skipped: $skipped"
echo "======================================================================"
echo ""
echo "NOTE: These are placeholder images. You should replace them with"
echo "proper branded images (1200x630px) for each app."
echo ""
