# 🚀 Fractional Job News Generator - Setup Guide

## Super Simple, Super Cheap Content Machine

Generates **1 article per hour** for **$0.05 each** = **$0.50/day** for 10 hours!

---

## 📋 Quick Setup (5 Minutes)

### 1. Install Dependencies

```bash
cd /Users/dankeegan/dashboard/apps/fractional-jobs

# Install Node packages
pnpm add @google/generative-ai node-cron chalk commander

# Install Python packages for dashboard
pip3 install streamlit psycopg2-binary
```

### 2. Set Environment Variables

Add to `.env.local`:

```bash
# SerpaAPI (for job scraping)
SERPA_API_KEY="your-serpa-api-key"

# Google AI (for article generation - CHEAP!)
GOOGLE_AI_API_KEY="your-google-ai-key"

# Unsplash (for hero images - FREE!)
UNSPLASH_ACCESS_KEY="your-unsplash-key"

# Neon Database (already set)
DATABASE_URL="your-neon-connection-string"
```

### 3. Get API Keys

**SerpaAPI** (Job Scraping):
- Sign up: https://serpa.dev
- Get API key
- Cost: ~$5 per 100 searches

**Google AI** (Gemini - Article Generation):
- Sign up: https://ai.google.dev
- Get API key
- Cost: **$0.0007 per article** (super cheap!)

**Unsplash** (Images):
- Sign up: https://unsplash.com/developers
- Create app
- Get access key
- Cost: **FREE** (50 requests/hour)

---

## 🎮 How to Use

### Option 1: Visual Dashboard (RECOMMENDED)

```bash
cd /Users/dankeegan/dashboard/apps/fractional-jobs

# Start the dashboard
pnpm dashboard
```

Opens at: **http://localhost:8501**

**You'll see:**
- ✅ Running/Stopped status (can't miss it!)
- 💰 Real-time cost tracker
- 📊 Articles published today/week/month
- ▶️ Start/Stop/Pause buttons
- 🧪 Test generation button
- 📰 Recent articles list
- 📜 Live logs

**Just click "Start" and watch it run!**

### Option 2: Command Line

```bash
# Generate ONE article (test it first!)
pnpm generate:test  # Dry run - doesn't save
pnpm generate       # Real run - saves to database

# Start hourly scheduler
pnpm scheduler

# Check status
pnpm control:status

# Check costs
pnpm control:cost
```

---

## ⏱️ Timeout Handling

**SerpaAPI can be slow (30-120 seconds)**:
- ✅ Built-in 2-minute timeout
- ✅ Progress logging
- ✅ Auto-retry on failure
- ✅ Detailed error messages

**Gemini is fast (2-5 seconds)**:
- ✅ Instant article generation
- ✅ Costs pennies

---

## 🛡️ Safety Features

### Can't Forget It's Running!
- ✅ **Streamlit dashboard** - Visual interface you'll see
- ✅ **PID file** - Tracks if scheduler is running
- ✅ **Pause file** - Easy pause/resume
- ✅ **Logs** - Everything tracked

### Cost Protection
- ✅ **$0.05 per article** - Can't blow budget
- ✅ **Cost tracker** - See spending in dashboard
- ✅ **Test mode** - Practice without paying

### Quality Control
- ✅ **Test generation** - Review before publishing
- ✅ **Manual approval** - Generate one-by-one if preferred
- ✅ **Delete function** - Remove bad articles

---

## 🎯 Typical Workflow

### Morning (9am):
```bash
# Open dashboard
pnpm dashboard

# Click "Start"
# Dashboard shows: ✅ RUNNING
```

### During Day:
- Check dashboard occasionally
- See new articles appearing
- Monitor costs (should be ~$0.05/hour)

### Evening (7pm):
```bash
# Click "Stop" in dashboard
# Or just close your Mac - it stops automatically
```

### Result:
- **10 articles published** (one per hour)
- **Cost: $0.50 for the day**
- **SEO boost: 10 new indexed pages**

---

## 📊 Economics

### Per Hour:
```
1 article × $0.05 = $0.05
```

### Per Day (10 hours):
```
10 articles × $0.05 = $0.50
```

### Per Month (20 working days):
```
200 articles × $0.05 = $10.00
```

**200 SEO-optimized articles for $10/month!**

---

## 🐛 Debugging

### Dashboard won't start?
```bash
# Check Python installed
python3 --version

# Install streamlit
pip3 install streamlit psycopg2-binary

# Try again
pnpm dashboard
```

### Generator fails?
```bash
# Test mode to see errors
pnpm generate:test

# Check logs
cat scripts/generator.log
```

### SerpaAPI timeout?
```
⏱️ This is normal - it can take 2 minutes
✅ Script will wait and retry
```

### No articles appearing?
```bash
# Check database
psql $DATABASE_URL -c "SELECT COUNT(*) FROM articles WHERE app = 'fractional-jobs';"

# Check logs
tail -f scripts/generator.log
```

---

## 💡 Pro Tips

### Run While You Work
- Start scheduler in morning
- Keep dashboard open in browser tab
- Glance at it occasionally
- Stop when you finish work

### Test First!
```bash
# Always test before scheduling
pnpm generate:test

# Review output, then:
pnpm generate

# If good, start scheduler:
pnpm scheduler
```

### Monitor Costs
```bash
# Quick cost check
pnpm control:cost

# Should show:
# Today: $0.50 (10 articles)
# This month: $10.00 (200 articles)
```

### Pause for Lunch
- Click "Pause" in dashboard
- Go eat
- Click "Resume" when back
- No wasted generations!

---

## 🚀 Next Level

### Want More Frequency?
Edit `scripts/scheduler.ts`:
```typescript
// Every 30 minutes instead of hourly
cron.schedule('*/30 * * * *', async () => {
  await generateArticle()
})
```

### Want Different Topics?
Edit search terms in `scripts/generate-article.ts`:
```typescript
const searchTerms = [
  'your custom search',
  'another topic',
  // ...
]
```

### Want to Review Before Publishing?
1. Use `pnpm generate` manually
2. Check article in database
3. Delete if bad: `pnpm control delete <slug>`

---

## ✅ Checklist

Before starting:
- [ ] API keys added to `.env.local`
- [ ] Dependencies installed (`pnpm install`)
- [ ] Python packages installed (`pip3 install streamlit psycopg2-binary`)
- [ ] Test run successful (`pnpm generate:test`)
- [ ] One real article generated (`pnpm generate`)
- [ ] Dashboard opens (`pnpm dashboard`)

Ready to generate:
- [ ] Dashboard shows correct stats
- [ ] Can see recent articles
- [ ] Cost tracker shows correct amount
- [ ] Start/Stop buttons work

---

## 🆘 Help

### Dashboard not showing articles?
Check DATABASE_URL is set correctly in `.env.local`

### SerpaAPI errors?
Check SERPA_API_KEY is valid and has credits

### Gemini errors?
Check GOOGLE_AI_API_KEY is valid

### Still stuck?
Check logs: `cat scripts/generator.log`

---

**You're ready! Open the dashboard and hit Start!** 🚀

```bash
pnpm dashboard
```

Then visit: **http://localhost:8501**
