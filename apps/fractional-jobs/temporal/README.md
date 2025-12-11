# 📰 Fractional Jobs - Article Generation with Temporal

## Simple, Debuggable Architecture

```
Jobs in Neon (from your scraper)
    ↓
Temporal Workflow (runs hourly/daily)
    ↓
For each job without article:
    1. Check ZEP for company info
    2. If missing → Research → Save to ZEP
    3. Generate article with Gemini
    4. Save to Neon
    ✅ Done!
```

**No images, no complexity, just content generation using your existing infrastructure.**

---

## 🏗️ Structure

```
temporal/
├── workflows/
│   └── generate-articles.ts    # Main workflow
├── activities/
│   └── index.ts                 # 5 simple activities
├── trigger-article-generation.ts # Manual trigger script
└── README.md                    # This file
```

---

## 🚀 How It Works

### Workflow: `generateArticlesWorkflow`

**Input:**
```typescript
{
  limit: 10,              // Max articles to generate per run
  skipCompanyResearch: false  // Set true to skip company research
}
```

**Steps:**
1. `getJobsWithoutArticles()` - SQL query to find jobs missing articles
2. For each job:
   - `checkCompanyInZEP()` - Search ZEP for company info
   - `researchCompany()` - If missing, research and save to ZEP
   - `generateArticleFromJob()` - Use Gemini + ZEP context
   - `saveArticleToNeon()` - Save to articles table

**Output:**
```typescript
{
  processed: 10,
  generated: 8,
  skipped: 2,
  errors: ["Job X failed: timeout"]
}
```

---

## 🎯 Activities (Simple & Debuggable)

### 1. `getJobsWithoutArticles(limit)`
```sql
SELECT j.* FROM jobs j
LEFT JOIN articles a ON a.payload->>'jobId' = j.id
WHERE a.id IS NULL
ORDER BY j.created_at DESC
LIMIT 10
```

### 2. `checkCompanyInZEP(company)`
```typescript
// Search ZEP graph for company info
const results = await searchKnowledgeGraph(`company ${company}`)
return results.edges.length > 0
```

### 3. `researchCompany(company)`
```typescript
// Use Gemini to research company
// Save facts to ZEP graph
await fetch('https://api.getzep.com/api/v2/graph/add', {
  body: { data: companyInfo, type: 'company_info' }
})
```

### 4. `generateArticleFromJob(jobId)`
```typescript
// Get job from Neon
// Get company context from ZEP
// Generate article with Gemini
// Return { title, slug, content, excerpt }
```

### 5. `saveArticleToNeon(article)`
```sql
INSERT INTO articles (title, slug, content, ...)
VALUES (...)
```

---

## 🔧 Setup

### 1. Your Temporal Worker Already Running?
If yes, just add this workflow to it!

### 2. Environment Variables
Already set in your Temporal worker:
```bash
DATABASE_URL="your-neon-url"
GOOGLE_AI_API_KEY="your-gemini-key"
ZEP_API_KEY="your-zep-key"
TEMPORAL_API_KEY="your-temporal-key"
SERPER_API_KEY="your-serper-key"  # NEW - Get from serper.dev
```

**Get Serper.dev API Key:**
- Sign up: https://serper.dev
- Cost: $0.001 per search (super cheap!)
- 2,500 free searches to start

### 3. Deploy Workflow
```bash
# Add to your existing Temporal worker
# The worker will automatically pick up new workflows
```

---

## 🎮 Usage

### Option 1: Manual Trigger
```bash
cd /Users/dankeegan/dashboard/apps/fractional-jobs/temporal

# Generate 5 articles
tsx trigger-article-generation.ts
```

### Option 2: Schedule (Temporal Cloud)
```typescript
// In your Temporal Cloud UI, create a schedule:
{
  "workflowType": "generateArticlesWorkflow",
  "schedule": "0 * * * *",  // Every hour
  "args": [{ "limit": 5, "skipCompanyResearch": false }]
}
```

### Option 3: Cron on Your Server
```bash
# Add to crontab
0 * * * * cd /path/to/fractional-jobs/temporal && tsx trigger-article-generation.ts

# Runs every hour
```

---

## 💰 Cost Per Run (With Serper.dev News!)

```
Per article:
- Company news (Serper.dev): $0.001
- Company summary (Gemini):  $0.0007
- Article generation (Gemini): $0.0007
──────────────────────────────────────────
Total per article: ~$0.0024

5 articles per run:  $0.012
100 articles/day:    $0.24/day
3,000 articles/month: $7.20/month
```

**3,000 articles with REAL news for $7/month!** 🚀

Compare to:
- ❌ Crawl4AI + proxies: $50+/month
- ❌ LinkedIn scraping: Not possible
- ✅ Serper.dev: $0.001 per search = insanely cheap!

---

## 🐛 Debugging

### Test Single Activity
```typescript
import { getJobsWithoutArticles } from './activities'

// Test locally
const jobs = await getJobsWithoutArticles(5)
console.log(jobs)
```

### Test Workflow Locally
```typescript
import { Worker } from '@temporalio/worker'

// Run worker locally
const worker = await Worker.create({
  workflowsPath: require.resolve('./workflows'),
  activities: require('./activities'),
  taskQueue: 'fractional-jobs'
})

await worker.run()
```

### View in Temporal UI
```
https://cloud.temporal.io/namespaces/quickstart-quest.zivkb
```

---

## 🎯 Why This Works

### Separation of Concerns ✅
- **Scraping** → Already handled separately
- **Article generation** → This workflow
- **Each activity** → Single responsibility
- **Easy to debug** → Test each activity independently

### Uses Existing Infrastructure ✅
- **Jobs in Neon** → Already scraped
- **ZEP graph** → Already has job data
- **Temporal** → Already set up
- **Gemini** → Cheap and fast

### No Complexity ✅
- ❌ No Streamlit dashboard needed
- ❌ No cron jobs on your Mac
- ❌ No images/video (for now)
- ❌ No can't-forget-it's-running issues
- ✅ Just a simple workflow that runs when triggered

---

## 📊 Monitoring

### Check Recent Articles
```sql
SELECT title, published_at, payload->>'company' as company
FROM articles
WHERE app = 'fractional-jobs'
ORDER BY published_at DESC
LIMIT 10;
```

### Check Jobs Without Articles
```sql
SELECT COUNT(*) FROM jobs j
LEFT JOIN articles a ON a.payload->>'jobId' = j.id
WHERE a.id IS NULL;
```

### Temporal UI
```
View workflow history, errors, retries all in Temporal Cloud UI
```

---

## 🚀 Next Steps

1. **Test locally**: Run `tsx trigger-article-generation.ts`
2. **Review output**: Check articles table in Neon
3. **Deploy to Temporal**: Add workflow to your worker
4. **Schedule it**: Set up hourly/daily schedule in Temporal Cloud
5. **Monitor**: Check Temporal UI for execution history

---

**Simple, debuggable, uses what you already have!** 🎯
