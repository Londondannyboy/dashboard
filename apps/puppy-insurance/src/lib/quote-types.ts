export type CoverType = 'lifetime' | 'maximum-benefit' | 'time-limited' | 'accident-only'

export type DogSize = 'toy' | 'small' | 'medium' | 'large' | 'giant'

export type BreedCategory =
  | 'mixed-breed'
  | 'pedigree-low-risk'
  | 'pedigree-moderate-risk'
  | 'pedigree-high-risk'
  | 'brachycephalic'

export interface QuoteFormData {
  // Dog Details
  dogName: string
  breed: string
  breedCategory: BreedCategory
  dogSize: DogSize
  dateOfBirth: string
  ageMonths: number
  gender: 'male' | 'female'
  neutered: boolean

  // Cover Options
  coverType: CoverType
  annualLimit: string
  vetFeeLimit: string
  includeThirdParty: boolean
  includeDentalCover: boolean
  includeBehaviouralCover: boolean

  // Owner Details
  postcode: string
  hasOtherPets: boolean
  firstTimeOwner: boolean

  // Insurance Start
  coverStartDate: string
}

export const DOG_SIZES: { value: DogSize; label: string; examples: string }[] = [
  { value: 'toy', label: 'Toy', examples: 'Chihuahua, Pomeranian, Yorkshire Terrier' },
  { value: 'small', label: 'Small', examples: 'French Bulldog, Cavalier, Pug, Jack Russell' },
  { value: 'medium', label: 'Medium', examples: 'Cocker Spaniel, Beagle, Border Collie' },
  { value: 'large', label: 'Large', examples: 'Labrador, Golden Retriever, German Shepherd' },
  { value: 'giant', label: 'Giant', examples: 'Great Dane, St Bernard, Newfoundland' },
]

export const COVER_TYPES: { value: CoverType; label: string; description: string; popular?: boolean }[] = [
  {
    value: 'lifetime',
    label: 'Lifetime Cover',
    description: 'Most comprehensive - vet fees limit renews each year for ongoing conditions',
    popular: true,
  },
  {
    value: 'maximum-benefit',
    label: 'Maximum Benefit',
    description: 'Fixed amount per condition with no time limit for treatment',
  },
  {
    value: 'time-limited',
    label: 'Time Limited (12 months)',
    description: 'Cover for each condition lasts 12 months from first treatment',
  },
  {
    value: 'accident-only',
    label: 'Accident Only',
    description: 'Budget-friendly cover for accidents only - no illness cover',
  },
]

export const VET_FEE_LIMITS = [
  { value: '1000', label: '£1,000' },
  { value: '2000', label: '£2,000' },
  { value: '3000', label: '£3,000' },
  { value: '5000', label: '£5,000' },
  { value: '7500', label: '£7,500' },
  { value: '10000', label: '£10,000' },
  { value: '15000', label: '£15,000' },
  { value: 'unlimited', label: 'Unlimited' },
]

export const POPULAR_BREEDS = [
  // Mixed breeds
  'Mixed Breed / Crossbreed',
  'Labradoodle',
  'Cockapoo',
  'Goldendoodle',
  'Cavapoo',
  'Sprocker Spaniel',
  // Pedigree - Low Risk
  'Labrador Retriever',
  'Golden Retriever',
  'Border Collie',
  'Cocker Spaniel',
  'Springer Spaniel',
  'Beagle',
  'Whippet',
  'Greyhound',
  // Pedigree - Moderate Risk
  'German Shepherd',
  'Staffordshire Bull Terrier',
  'Rottweiler',
  'Boxer',
  'Dobermann',
  'Husky',
  'Dalmatian',
  // Pedigree - High Risk / Large
  'Great Dane',
  'St Bernard',
  'Newfoundland',
  'Bernese Mountain Dog',
  'Irish Wolfhound',
  // Brachycephalic (Flat-faced)
  'French Bulldog',
  'English Bulldog',
  'Pug',
  'Boston Terrier',
  'Cavalier King Charles Spaniel',
  'Shih Tzu',
  // Small breeds
  'Chihuahua',
  'Yorkshire Terrier',
  'Pomeranian',
  'Maltese',
  'Jack Russell Terrier',
  'Miniature Dachshund',
  'Miniature Schnauzer',
  'West Highland Terrier',
  // Other
  'Other Breed',
]

export const BREED_CATEGORIES: { [key: string]: BreedCategory } = {
  'Mixed Breed / Crossbreed': 'mixed-breed',
  'Labradoodle': 'mixed-breed',
  'Cockapoo': 'mixed-breed',
  'Goldendoodle': 'mixed-breed',
  'Cavapoo': 'mixed-breed',
  'Sprocker Spaniel': 'mixed-breed',
  'Labrador Retriever': 'pedigree-low-risk',
  'Golden Retriever': 'pedigree-low-risk',
  'Border Collie': 'pedigree-low-risk',
  'Cocker Spaniel': 'pedigree-low-risk',
  'Springer Spaniel': 'pedigree-low-risk',
  'Beagle': 'pedigree-low-risk',
  'Whippet': 'pedigree-low-risk',
  'Greyhound': 'pedigree-low-risk',
  'German Shepherd': 'pedigree-moderate-risk',
  'Staffordshire Bull Terrier': 'pedigree-moderate-risk',
  'Rottweiler': 'pedigree-moderate-risk',
  'Boxer': 'pedigree-moderate-risk',
  'Dobermann': 'pedigree-moderate-risk',
  'Husky': 'pedigree-moderate-risk',
  'Dalmatian': 'pedigree-moderate-risk',
  'Great Dane': 'pedigree-high-risk',
  'St Bernard': 'pedigree-high-risk',
  'Newfoundland': 'pedigree-high-risk',
  'Bernese Mountain Dog': 'pedigree-high-risk',
  'Irish Wolfhound': 'pedigree-high-risk',
  'French Bulldog': 'brachycephalic',
  'English Bulldog': 'brachycephalic',
  'Pug': 'brachycephalic',
  'Boston Terrier': 'brachycephalic',
  'Cavalier King Charles Spaniel': 'brachycephalic',
  'Shih Tzu': 'brachycephalic',
  'Chihuahua': 'pedigree-low-risk',
  'Yorkshire Terrier': 'pedigree-low-risk',
  'Pomeranian': 'pedigree-low-risk',
  'Maltese': 'pedigree-low-risk',
  'Jack Russell Terrier': 'pedigree-low-risk',
  'Miniature Dachshund': 'pedigree-moderate-risk',
  'Miniature Schnauzer': 'pedigree-low-risk',
  'West Highland Terrier': 'pedigree-low-risk',
  'Other Breed': 'pedigree-moderate-risk',
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatCurrencyWithPence(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

// Estimate indicative premium based on form data
export function estimatePremium(data: Partial<QuoteFormData>): {
  monthly: { low: number; high: number; average: number }
  annual: { low: number; high: number; average: number }
} {
  // Base monthly premium
  let baseLow = 15
  let baseHigh = 35

  // Adjust based on breed category
  switch (data.breedCategory) {
    case 'brachycephalic':
      baseLow *= 1.5
      baseHigh *= 1.6
      break
    case 'pedigree-high-risk':
      baseLow *= 1.4
      baseHigh *= 1.5
      break
    case 'pedigree-moderate-risk':
      baseLow *= 1.2
      baseHigh *= 1.3
      break
    case 'mixed-breed':
      baseLow *= 0.9
      baseHigh *= 0.95
      break
  }

  // Adjust based on dog size
  switch (data.dogSize) {
    case 'giant':
      baseLow *= 1.5
      baseHigh *= 1.6
      break
    case 'large':
      baseLow *= 1.2
      baseHigh *= 1.3
      break
    case 'toy':
      baseLow *= 0.9
      baseHigh *= 0.95
      break
  }

  // Adjust based on age (puppies cost more due to higher claim rates)
  const ageMonths = data.ageMonths || 8
  if (ageMonths < 6) {
    baseLow *= 1.2
    baseHigh *= 1.3
  } else if (ageMonths > 36) {
    baseLow *= 1.1
    baseHigh *= 1.15
  }

  // Adjust based on cover type
  switch (data.coverType) {
    case 'lifetime':
      baseLow *= 1.4
      baseHigh *= 1.5
      break
    case 'maximum-benefit':
      baseLow *= 1.2
      baseHigh *= 1.25
      break
    case 'accident-only':
      baseLow *= 0.5
      baseHigh *= 0.55
      break
  }

  // Adjust based on vet fee limit
  const vetLimit = parseInt(data.vetFeeLimit || '3000')
  if (vetLimit >= 10000 || data.vetFeeLimit === 'unlimited') {
    baseLow *= 1.4
    baseHigh *= 1.5
  } else if (vetLimit >= 7500) {
    baseLow *= 1.25
    baseHigh *= 1.3
  } else if (vetLimit >= 5000) {
    baseLow *= 1.15
    baseHigh *= 1.2
  } else if (vetLimit <= 1000) {
    baseLow *= 0.8
    baseHigh *= 0.85
  }

  // Add extras
  if (data.includeDentalCover) {
    baseLow += 3
    baseHigh += 5
  }
  if (data.includeBehaviouralCover) {
    baseLow += 2
    baseHigh += 4
  }

  // Discount for neutered
  if (data.neutered) {
    baseLow *= 0.95
    baseHigh *= 0.95
  }

  // Round to 2 decimal places
  baseLow = Math.round(baseLow * 100) / 100
  baseHigh = Math.round(baseHigh * 100) / 100

  const monthlyAverage = Math.round(((baseLow + baseHigh) / 2) * 100) / 100

  return {
    monthly: {
      low: baseLow,
      high: baseHigh,
      average: monthlyAverage,
    },
    annual: {
      low: Math.round(baseLow * 12),
      high: Math.round(baseHigh * 12),
      average: Math.round(monthlyAverage * 12),
    },
  }
}

// Calculate estimated annual costs of pet ownership
export function calculateAnnualCosts(data: {
  dogSize: DogSize
  breed?: string
}): {
  food: { low: number; high: number }
  insurance: { low: number; high: number }
  vetCheckups: { low: number; high: number }
  vaccinations: { low: number; high: number }
  fleaAndWorming: { low: number; high: number }
  grooming: { low: number; high: number }
  accessories: { low: number; high: number }
  training: { low: number; high: number }
  total: { low: number; high: number }
} {
  const multiplier = {
    toy: 0.6,
    small: 0.8,
    medium: 1,
    large: 1.3,
    giant: 1.7,
  }[data.dogSize] || 1

  const food = { low: Math.round(300 * multiplier), high: Math.round(700 * multiplier) }
  const insurance = { low: 180, high: 600 }
  const vetCheckups = { low: 50, high: 100 }
  const vaccinations = { low: 50, high: 80 }
  const fleaAndWorming = { low: 100, high: 200 }
  const grooming = { low: Math.round(100 * multiplier), high: Math.round(400 * multiplier) }
  const accessories = { low: 100, high: 300 }
  const training = { low: 0, high: 300 }

  return {
    food,
    insurance,
    vetCheckups,
    vaccinations,
    fleaAndWorming,
    grooming,
    accessories,
    training,
    total: {
      low: food.low + insurance.low + vetCheckups.low + vaccinations.low + fleaAndWorming.low + grooming.low + accessories.low + training.low,
      high: food.high + insurance.high + vetCheckups.high + vaccinations.high + fleaAndWorming.high + grooming.high + accessories.high + training.high,
    },
  }
}
