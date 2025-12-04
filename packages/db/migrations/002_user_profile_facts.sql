-- Migration: User Profile Facts table for storing verified user information
-- This table stores structured facts about users extracted from conversations

CREATE TABLE IF NOT EXISTS user_profile_facts (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  fact_type VARCHAR(100) NOT NULL,
  fact_value JSONB NOT NULL,
  confidence DECIMAL(3,2) DEFAULT 0.5,
  source VARCHAR(100) DEFAULT 'conversation',
  is_user_verified BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_user_profile_facts_user_id ON user_profile_facts(user_id);
CREATE INDEX IF NOT EXISTS idx_user_profile_facts_fact_type ON user_profile_facts(fact_type);
CREATE INDEX IF NOT EXISTS idx_user_profile_facts_verified ON user_profile_facts(user_id, is_user_verified) WHERE is_active = true;
CREATE UNIQUE INDEX IF NOT EXISTS idx_user_profile_facts_user_type ON user_profile_facts(user_id, fact_type) WHERE is_active = true;

-- Common fact types:
-- destination: Target country/countries for relocation
-- origin: Current country of residence
-- nationality: User's nationality/passport
-- family_status: Single, married, with children, etc.
-- profession: Job title or industry
-- budget: Monthly budget range
-- timeline: When they want to move
-- work_type: Remote, hybrid, on-site
-- visa_interest: Types of visas interested in
-- lifestyle: Preferred lifestyle (urban, beach, mountain)
-- priorities: What matters most (cost, healthcare, weather, etc.)
