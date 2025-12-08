import { MetadataRoute } from 'next'
import { generateRobots } from '@quest/ui'

export default function robots(): MetadataRoute.Robots {
  return generateRobots('https://agency.rainmakrr.com')
}
