-- Quest Database Schema
-- Run this against your Neon database to create the tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  stack_auth_id VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_stack_auth_id ON users(stack_auth_id);

-- User facts table (stores extracted information)
CREATE TABLE IF NOT EXISTS user_facts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL,
  value TEXT NOT NULL,
  confidence DECIMAL(3,2) DEFAULT 1.0,
  confirmed BOOLEAN DEFAULT FALSE,
  source VARCHAR(50) NOT NULL, -- 'voice', 'chat', 'form', 'manual'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_user_facts_user_id ON user_facts(user_id);
CREATE INDEX IF NOT EXISTS idx_user_facts_type ON user_facts(type);

-- Pending confirmations (HITL)
CREATE TABLE IF NOT EXISTS pending_confirmations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  fact_type VARCHAR(50) NOT NULL,
  old_value TEXT,
  new_value TEXT NOT NULL,
  confidence DECIMAL(3,2) NOT NULL,
  context TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  resolved_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_pending_confirmations_user_id ON pending_confirmations(user_id);
CREATE INDEX IF NOT EXISTS idx_pending_confirmations_status ON pending_confirmations(status);

-- Transcripts table (conversation history)
CREATE TABLE IF NOT EXISTS transcripts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  session_id VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL, -- 'user', 'assistant'
  content TEXT NOT NULL,
  emotion_scores JSONB, -- Hume emotion data
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_transcripts_user_id ON transcripts(user_id);
CREATE INDEX IF NOT EXISTS idx_transcripts_session_id ON transcripts(session_id);
CREATE INDEX IF NOT EXISTS idx_transcripts_created_at ON transcripts(created_at);

-- Onboarding data
CREATE TABLE IF NOT EXISTS onboarding_data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  current_location VARCHAR(255),
  destination_countries TEXT[] DEFAULT '{}',
  job_status VARCHAR(50), -- 'employed', 'seeking', 'remote', 'retired'
  has_partner BOOLEAN DEFAULT FALSE,
  has_children BOOLEAN DEFAULT FALSE,
  children_ages INTEGER[] DEFAULT '{}',
  timeline VARCHAR(255),
  budget_min INTEGER,
  budget_max INTEGER,
  budget_currency VARCHAR(10) DEFAULT 'USD',
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_onboarding_user_id ON onboarding_data(user_id);

-- Updated at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at triggers
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_facts_updated_at
  BEFORE UPDATE ON user_facts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_onboarding_data_updated_at
  BEFORE UPDATE ON onboarding_data
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
