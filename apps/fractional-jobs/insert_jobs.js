const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

const jobs = [
  { title: 'Fractional CFO - SaaS Startup', company: 'TechCorp Ltd', location: 'London, UK', is_remote: false, role_category: 'CFO' },
  { title: 'Fractional CMO - E-commerce', company: 'ShopBest Ltd', location: 'Remote, UK', is_remote: true, role_category: 'CMO' },
  { title: 'Fractional CTO - FinTech', company: 'FinanceFlow Ltd', location: 'London, UK', is_remote: false, role_category: 'CTO' },
  { title: 'Fractional COO - HealthTech', company: 'HealthAI Ltd', location: 'Manchester, UK', is_remote: false, role_category: 'COO' },
  { title: 'Fractional HR Director', company: 'DevStudio Ltd', location: 'Remote, UK', is_remote: true, role_category: 'HR' },
  { title: 'Fractional Sales Director', company: 'GrowthCo Ltd', location: 'London, UK', is_remote: false, role_category: 'Sales' },
];

(async () => {
  try {
    let created = 0;
    for (const job of jobs) {
      const slug = job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const external_id = `frac-${job.role_category.toLowerCase()}-${Date.now()}`;
      const url = `https://fractional.quest/jobs/${slug}`;
      const result = await sql`
        INSERT INTO jobs (
          title, company_name, location, is_remote, is_fractional,
          is_active, role_category, posted_date, slug, external_id,
          board_id, employment_type, workplace_type, url
        ) VALUES (
          ${job.title},
          ${job.company},
          ${job.location},
          ${job.is_remote},
          true,
          true,
          ${job.role_category},
          CURRENT_DATE,
          ${slug},
          ${external_id},
          'a73968b5-9456-444b-b9fc-e12dd0c7319a',
          'PartTime',
          ${job.is_remote ? 'Remote' : 'Hybrid'},
          ${url}
        ) ON CONFLICT DO NOTHING
        RETURNING id
      `;
      if (result.length > 0) {
        console.log(`✓ Created: ${job.title}`);
        created++;
      } else {
        console.log(`- Exists: ${job.title}`);
      }
    }

    console.log(`\nCreated ${created} new jobs`);
    const [{ count }] = await sql`SELECT COUNT(*) as count FROM jobs WHERE is_fractional = true`;
    console.log(`Total fractional jobs in database: ${count}`);
  } catch (err) {
    console.error('Error:', err.message);
    console.error(err);
    process.exit(1);
  }
})();
