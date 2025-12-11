import { Job } from './jobs'

export interface DisplayJob {
  id: string
  title: string
  company: string
  location: string
  type: string
  commitment: string
  rate: string
  currency: string
  period: string
  badges: string[]
  description: string
  postedDays: number
}

/**
 * Convert Neon Job to DisplayJob format for UI rendering
 */
export function jobToDisplayJob(job: Job): DisplayJob {
  const daysAgo = Math.floor(
    (Date.now() - new Date(job.posted_date).getTime()) / (1000 * 60 * 60 * 24)
  )

  // Extract rate from compensation (e.g., "£800 - 1,000/day")
  const rateMatch = job.compensation?.match(/[£$]?\s*(\d+)\s*-\s*(\d+)/) || []
  const rate = rateMatch.length > 0 ? `${rateMatch[1]} - ${rateMatch[2]}` : 'Competitive'

  return {
    id: job.id,
    title: job.title,
    company: job.company_name,
    location: job.location,
    type: job.is_remote ? 'Remote' : 'Hybrid',
    commitment: '2-3 days/week', // Default - can be enhanced if stored in DB
    rate: rate,
    currency: 'GBP',
    period: 'day',
    badges: [
      job.is_remote ? 'Remote' : 'Hybrid',
      job.seniority_level || '',
    ].filter(Boolean),
    description: job.full_description || '',
    postedDays: daysAgo,
  }
}

/**
 * Convert array of Neon jobs to DisplayJob format
 */
export function jobsToDisplayJobs(jobs: Job[]): DisplayJob[] {
  return jobs.map(jobToDisplayJob)
}
