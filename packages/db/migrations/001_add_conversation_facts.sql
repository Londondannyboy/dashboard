-- Migration: Add conversation facts support for Hume EVI tools
-- Run this against your Neon database

-- Option 1: Add stack_user_id column to existing user_facts table
-- (Use this if you want to keep using the same table)

-- ALTER TABLE user_facts ADD COLUMN IF NOT EXISTS stack_user_id VARCHAR(255);
-- ALTER TABLE user_facts ADD COLUMN IF NOT EXISTS category VARCHAR(50);
-- ALTER TABLE user_facts ADD COLUMN IF NOT EXISTS fact TEXT;
-- ALTER TABLE user_facts ADD COLUMN IF NOT EXISTS source_session_id VARCHAR(255);
-- CREATE INDEX IF NOT EXISTS idx_user_facts_stack_user_id ON user_facts(stack_user_id);

-- Option 2: Create a separate conversation_facts table (recommended)
-- This keeps the existing user_facts table structure intact

CREATE TABLE IF NOT EXISTS conversation_facts (
  id SERIAL PRIMARY KEY,
  stack_user_id VARCHAR(255) NOT NULL,
  fact TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  source_session_id VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_conversation_facts_stack_user_id ON conversation_facts(stack_user_id);
CREATE INDEX IF NOT EXISTS idx_conversation_facts_category ON conversation_facts(category);

-- NOTE: Update the queries.ts file to use 'conversation_facts' instead of 'user_facts'
-- OR create a view that aliases the table:

-- CREATE OR REPLACE VIEW user_facts_view AS
-- SELECT
--   id,
--   stack_user_id,
--   fact,
--   category,
--   source_session_id,
--   created_at
-- FROM conversation_facts;
