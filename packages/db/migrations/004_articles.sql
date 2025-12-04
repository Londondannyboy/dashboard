-- Migration: Articles table for recommended content
-- Stores articles, guides, and resources about relocation

CREATE TABLE IF NOT EXISTS articles (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(500) NOT NULL,
  excerpt TEXT,
  content TEXT,
  url TEXT, -- External URL for hyperlinks
  type VARCHAR(50) NOT NULL DEFAULT 'article',
  country_code VARCHAR(10), -- ISO country code if specific to one country
  countries TEXT[], -- Array of countries this article covers
  tags TEXT[],
  author VARCHAR(255),
  is_published BOOLEAN DEFAULT TRUE,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_type ON articles(type);
CREATE INDEX IF NOT EXISTS idx_articles_countries ON articles USING GIN(countries);
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(is_published, published_at DESC) WHERE is_published = true;

-- Article types:
-- country_guide: Comprehensive country guides
-- article: General informational articles
-- deal: Special offers or deals
-- job: Job opportunities
-- visa_info: Visa-specific information
-- cost_of_living: Cost comparison articles

-- Example insert:
-- INSERT INTO articles (slug, title, excerpt, url, type, countries)
-- VALUES (
--   'portugal-digital-nomad-visa-2024',
--   'Portugal Digital Nomad Visa Guide 2024',
--   'Everything you need to know about the Portuguese D7 and Digital Nomad visas',
--   'https://example.com/portugal-visa-guide',
--   'country_guide',
--   ARRAY['Portugal']
-- );
