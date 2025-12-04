-- Migration: Pending Confirmations for Human-in-the-Loop (HITL) system
-- When AI detects preference changes, they are stored here for user approval

CREATE TABLE IF NOT EXISTS pending_confirmations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id VARCHAR(255) NOT NULL,
  fact_type VARCHAR(100) NOT NULL,
  old_value TEXT,
  new_value TEXT NOT NULL,
  context TEXT, -- AI reasoning for the suggestion
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_pending_confirmations_user_id ON pending_confirmations(user_id);
CREATE INDEX IF NOT EXISTS idx_pending_confirmations_status ON pending_confirmations(status);
CREATE INDEX IF NOT EXISTS idx_pending_confirmations_user_pending ON pending_confirmations(user_id, status) WHERE status = 'pending';

-- Status values:
-- pending: Awaiting user decision
-- accepted: User confirmed the change
-- rejected: User rejected the change
-- expired: Timed out without decision
