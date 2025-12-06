import { neon } from '@neondatabase/serverless'

// Lazy initialization to avoid build-time errors
function getSql() {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set')
  }
  return neon(databaseUrl)
}

// Create sql as a tagged template function that initializes lazily
export const sql = (strings: TemplateStringsArray, ...values: unknown[]) => {
  return getSql()(strings, ...values)
}
