import { neon, NeonQueryFunction } from '@neondatabase/serverless'

let sql: NeonQueryFunction<false, false>

export function getDb() {
  if (!sql) {
    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) {
      throw new Error('DATABASE_URL environment variable is not set')
    }
    sql = neon(databaseUrl)
  }
  return sql
}

export { sql }
