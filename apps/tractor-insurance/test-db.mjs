import { neon } from '@neondatabase/serverless';

async function test() {
  try {
    const url = process.env.DATABASE_URL;
    if (!url) {
      console.log('No DATABASE_URL env var');
      process.exit(1);
    }
    console.log('Connecting to:', url.split('@')[1]);
    const sql = neon(url);
    
    const result = await sql`
      SELECT id, slug, title FROM articles 
      WHERE app = 'tractor-insurance' AND slug = 'tractor-insurance-quote' 
      LIMIT 1
    `;
    
    console.log('Query result:', result);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

test();
