-- Enhanced Schema for Company Intelligence Over Time

-- ============================================
-- COMPANY KNOWLEDGE BASE
-- ============================================

CREATE TABLE IF NOT EXISTS companies (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  domain TEXT UNIQUE, -- e.g., "vercel.com"
  industry TEXT,
  description TEXT,

  -- Metadata
  first_seen_at TIMESTAMP DEFAULT NOW(),
  last_updated_at TIMESTAMP DEFAULT NOW(),
  total_jobs_scraped INTEGER DEFAULT 0,

  -- Intelligence summary (updated over time)
  summary JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX IF NOT EXISTS idx_companies_domain ON companies(domain);
CREATE INDEX IF NOT EXISTS idx_companies_name ON companies(name);

-- ============================================
-- COMPANY URLS (from Serper.dev)
-- ============================================

CREATE TABLE IF NOT EXISTS company_urls (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id TEXT REFERENCES companies(id),
  url TEXT NOT NULL,
  title TEXT,
  snippet TEXT,

  -- Classification
  source_type TEXT, -- 'homepage', 'blog', 'careers', 'social', 'wiki', 'news'

  -- Scraping status
  scraped BOOLEAN DEFAULT false,
  scraped_at TIMESTAMP,
  scrape_content TEXT, -- Full scraped content

  -- Timestamps
  discovered_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(company_id, url)
);

CREATE INDEX IF NOT EXISTS idx_company_urls_company ON company_urls(company_id);
CREATE INDEX IF NOT EXISTS idx_company_urls_type ON company_urls(source_type);
CREATE INDEX IF NOT EXISTS idx_company_urls_scraped ON company_urls(scraped);

-- ============================================
-- COMPANY HIRING PATTERNS
-- ============================================

CREATE TABLE IF NOT EXISTS company_hiring_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id TEXT REFERENCES companies(id),

  -- Time period
  period_start DATE,
  period_end DATE,

  -- Metrics
  total_jobs INTEGER DEFAULT 0,
  by_role_type JSONB DEFAULT '{}'::jsonb, -- {"cfo": 2, "cto": 1}
  by_department JSONB DEFAULT '{}'::jsonb, -- {"engineering": 5, "sales": 3}
  by_location JSONB DEFAULT '{}'::jsonb, -- {"london": 3, "remote": 7}

  -- Analysis
  trend TEXT, -- 'accelerating', 'stable', 'declining'
  velocity_change NUMERIC, -- % change vs previous period

  created_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(company_id, period_start, period_end)
);

CREATE INDEX IF NOT EXISTS idx_hiring_stats_company ON company_hiring_stats(company_id);
CREATE INDEX IF NOT EXISTS idx_hiring_stats_period ON company_hiring_stats(period_start, period_end);

-- ============================================
-- COMPANY NEWS & EVENTS
-- ============================================

CREATE TABLE IF NOT EXISTS company_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id TEXT REFERENCES companies(id),

  -- Event details
  event_type TEXT, -- 'funding', 'product_launch', 'acquisition', 'expansion', 'news'
  title TEXT NOT NULL,
  description TEXT,
  source_url TEXT,

  -- Date
  event_date DATE,
  discovered_at TIMESTAMP DEFAULT NOW(),

  -- Relevance to hiring
  hiring_signal BOOLEAN DEFAULT false, -- Does this correlate with hiring?

  UNIQUE(company_id, source_url)
);

CREATE INDEX IF NOT EXISTS idx_company_events_company ON company_events(company_id);
CREATE INDEX IF NOT EXISTS idx_company_events_date ON company_events(event_date DESC);
CREATE INDEX IF NOT EXISTS idx_company_events_hiring ON company_events(hiring_signal);

-- ============================================
-- ENHANCED JOBS TABLE (link to companies)
-- ============================================

ALTER TABLE jobs
  ADD COLUMN IF NOT EXISTS company_id TEXT REFERENCES companies(id);

CREATE INDEX IF NOT EXISTS idx_jobs_company ON jobs(company_id);

-- ============================================
-- VIEWS FOR ANALYSIS
-- ============================================

-- View: Company intelligence summary
CREATE OR REPLACE VIEW company_intelligence AS
SELECT
  c.id,
  c.name,
  c.domain,
  c.total_jobs_scraped,

  -- Recent hiring activity
  (
    SELECT COUNT(*)
    FROM jobs j
    WHERE j.company_id = c.id
    AND j.created_at > NOW() - INTERVAL '30 days'
  ) as jobs_last_30_days,

  (
    SELECT COUNT(*)
    FROM jobs j
    WHERE j.company_id = c.id
    AND j.created_at > NOW() - INTERVAL '7 days'
  ) as jobs_last_7_days,

  -- URLs available
  (
    SELECT COUNT(*)
    FROM company_urls cu
    WHERE cu.company_id = c.id
  ) as total_urls,

  (
    SELECT COUNT(*)
    FROM company_urls cu
    WHERE cu.company_id = c.id
    AND cu.scraped = true
  ) as scraped_urls,

  -- Recent news
  (
    SELECT COUNT(*)
    FROM company_events ce
    WHERE ce.company_id = c.id
    AND ce.event_date > NOW() - INTERVAL '30 days'
  ) as news_last_30_days,

  c.last_updated_at
FROM companies c;

-- View: Hiring velocity by company
CREATE OR REPLACE VIEW company_hiring_velocity AS
SELECT
  c.name as company_name,
  c.domain,

  -- Current month
  COUNT(*) FILTER (
    WHERE j.created_at >= date_trunc('month', CURRENT_DATE)
  ) as this_month,

  -- Last month
  COUNT(*) FILTER (
    WHERE j.created_at >= date_trunc('month', CURRENT_DATE - INTERVAL '1 month')
    AND j.created_at < date_trunc('month', CURRENT_DATE)
  ) as last_month,

  -- Trend
  CASE
    WHEN COUNT(*) FILTER (WHERE j.created_at >= date_trunc('month', CURRENT_DATE)) >
         COUNT(*) FILTER (WHERE j.created_at >= date_trunc('month', CURRENT_DATE - INTERVAL '1 month')
                               AND j.created_at < date_trunc('month', CURRENT_DATE))
    THEN 'accelerating'
    WHEN COUNT(*) FILTER (WHERE j.created_at >= date_trunc('month', CURRENT_DATE)) <
         COUNT(*) FILTER (WHERE j.created_at >= date_trunc('month', CURRENT_DATE - INTERVAL '1 month')
                               AND j.created_at < date_trunc('month', CURRENT_DATE))
    THEN 'declining'
    ELSE 'stable'
  END as trend

FROM companies c
LEFT JOIN jobs j ON j.company_id = c.id
WHERE j.created_at > CURRENT_DATE - INTERVAL '60 days'
GROUP BY c.id, c.name, c.domain
HAVING COUNT(*) > 0
ORDER BY this_month DESC;

-- ============================================
-- HELPER FUNCTIONS
-- ============================================

-- Function: Get or create company
CREATE OR REPLACE FUNCTION get_or_create_company(
  p_name TEXT,
  p_domain TEXT DEFAULT NULL
) RETURNS TEXT AS $$
DECLARE
  v_company_id TEXT;
BEGIN
  -- Try to find by domain first
  IF p_domain IS NOT NULL THEN
    SELECT id INTO v_company_id
    FROM companies
    WHERE domain = p_domain;

    IF FOUND THEN
      RETURN v_company_id;
    END IF;
  END IF;

  -- Try to find by name
  SELECT id INTO v_company_id
  FROM companies
  WHERE LOWER(name) = LOWER(p_name);

  IF FOUND THEN
    RETURN v_company_id;
  END IF;

  -- Create new company
  v_company_id := 'company-' || gen_random_uuid();

  INSERT INTO companies (id, name, domain)
  VALUES (v_company_id, p_name, p_domain);

  RETURN v_company_id;
END;
$$ LANGUAGE plpgsql;

-- Function: Update hiring stats for a company
CREATE OR REPLACE FUNCTION update_company_hiring_stats(
  p_company_id TEXT
) RETURNS VOID AS $$
DECLARE
  v_period_start DATE := date_trunc('month', CURRENT_DATE);
  v_period_end DATE := date_trunc('month', CURRENT_DATE + INTERVAL '1 month') - INTERVAL '1 day';
BEGIN
  INSERT INTO company_hiring_stats (
    company_id,
    period_start,
    period_end,
    total_jobs,
    by_role_type,
    by_department,
    by_location
  )
  SELECT
    p_company_id,
    v_period_start,
    v_period_end,
    COUNT(*),
    jsonb_object_agg(COALESCE(role_type, 'unknown'), role_count),
    '{}'::jsonb, -- TODO: extract from job titles
    jsonb_object_agg(COALESCE(location, 'unknown'), loc_count)
  FROM (
    SELECT
      role_type,
      location,
      COUNT(*) OVER (PARTITION BY role_type) as role_count,
      COUNT(*) OVER (PARTITION BY location) as loc_count
    FROM jobs
    WHERE company_id = p_company_id
    AND created_at >= v_period_start
    AND created_at <= v_period_end
  ) stats
  ON CONFLICT (company_id, period_start, period_end) DO UPDATE
  SET
    total_jobs = EXCLUDED.total_jobs,
    by_role_type = EXCLUDED.by_role_type,
    by_department = EXCLUDED.by_department,
    by_location = EXCLUDED.by_location;
END;
$$ LANGUAGE plpgsql;
