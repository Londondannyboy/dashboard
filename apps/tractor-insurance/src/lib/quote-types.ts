export type CoverType = 'comprehensive' | 'third-party-fire-theft' | 'third-party-only'

export type VehicleUse =
  | 'smallholder'
  | 'farming-own-land'
  | 'agricultural-contractor'
  | 'construction-site'
  | 'plant-hire'
  | 'road-runs-rallies'
  | 'other'

export type VehicleType =
  | 'tractor'
  | 'combine-harvester'
  | 'telehandler'
  | 'quad-bike'
  | 'trailer'
  | 'other'

export interface QuoteFormData {
  // Vehicle Details
  vehicleType: VehicleType
  make: string
  model: string
  yearOfManufacture: string
  engineCapacity: string
  currentValue: string
  registrationNumber: string

  // Cover Options
  coverType: CoverType
  includeImplementCover: boolean
  lockedBuildingOvernight: boolean
  moreThan100RoadMiles: boolean

  // Usage
  primaryUse: VehicleUse

  // Personal Details
  postcode: string

  // Insurance Start
  coverStartDate: string
}

export const VEHICLE_TYPES: { value: VehicleType; label: string }[] = [
  { value: 'tractor', label: 'Tractor' },
  { value: 'combine-harvester', label: 'Combine Harvester' },
  { value: 'telehandler', label: 'Telehandler' },
  { value: 'quad-bike', label: 'Quad Bike / ATV' },
  { value: 'trailer', label: 'Agricultural Trailer' },
  { value: 'other', label: 'Other Agricultural Vehicle' },
]

export const COVER_TYPES: { value: CoverType; label: string; description: string }[] = [
  {
    value: 'comprehensive',
    label: 'Comprehensive',
    description: 'Full cover including accidental damage, theft, fire and third party'
  },
  {
    value: 'third-party-fire-theft',
    label: 'Third Party, Fire & Theft',
    description: 'Cover for fire, theft and third party liability'
  },
  {
    value: 'third-party-only',
    label: 'Third Party Only',
    description: 'Basic legal minimum cover for third party liability'
  },
]

export const VEHICLE_USES: { value: VehicleUse; label: string; description: string }[] = [
  { value: 'smallholder', label: 'Smallholder', description: 'Personal or hobby use on a small plot' },
  { value: 'farming-own-land', label: 'Farming (Own Land)', description: 'Agricultural work on your own farm' },
  { value: 'agricultural-contractor', label: 'Agricultural Contractor', description: 'Contract work on other farms' },
  { value: 'construction-site', label: 'Construction Site', description: 'Use on construction or building sites' },
  { value: 'plant-hire', label: 'Plant Hire', description: 'Hiring out to third parties' },
  { value: 'road-runs-rallies', label: 'Road Runs & Rallies', description: 'Shows, rallies and road runs' },
  { value: 'other', label: 'Other', description: 'Other agricultural use' },
]

export const POPULAR_TRACTOR_MAKES = [
  'John Deere',
  'Massey Ferguson',
  'New Holland',
  'Case IH',
  'Fendt',
  'Claas',
  'Kubota',
  'Valtra',
  'JCB',
  'Deutz-Fahr',
  'McCormick',
  'Zetor',
  'Landini',
  'Same',
  'Ford',
  'David Brown',
  'Ferguson',
  'International Harvester',
  'Other',
]

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Estimate indicative premium based on form data
export function estimatePremium(data: Partial<QuoteFormData>): {
  low: number
  high: number
  average: number
} {
  let baseLow = 150
  let baseHigh = 400

  // Adjust based on vehicle value
  const value = parseInt(data.currentValue?.replace(/[^0-9]/g, '') || '0')
  if (value > 50000) {
    baseLow += 200
    baseHigh += 400
  } else if (value > 25000) {
    baseLow += 100
    baseHigh += 200
  } else if (value > 10000) {
    baseLow += 50
    baseHigh += 100
  }

  // Adjust based on cover type
  if (data.coverType === 'comprehensive') {
    baseLow *= 1.3
    baseHigh *= 1.3
  } else if (data.coverType === 'third-party-only') {
    baseLow *= 0.7
    baseHigh *= 0.7
  }

  // Adjust based on use
  if (data.primaryUse === 'agricultural-contractor') {
    baseLow *= 1.4
    baseHigh *= 1.4
  } else if (data.primaryUse === 'plant-hire') {
    baseLow *= 1.5
    baseHigh *= 1.5
  } else if (data.primaryUse === 'construction-site') {
    baseLow *= 1.3
    baseHigh *= 1.3
  }

  // Adjust for road miles
  if (data.moreThan100RoadMiles) {
    baseLow *= 1.2
    baseHigh *= 1.2
  }

  // Discount for locked building
  if (data.lockedBuildingOvernight) {
    baseLow *= 0.9
    baseHigh *= 0.9
  }

  // Add implement cover
  if (data.includeImplementCover) {
    baseLow += 50
    baseHigh += 150
  }

  baseLow = Math.round(baseLow)
  baseHigh = Math.round(baseHigh)

  return {
    low: baseLow,
    high: baseHigh,
    average: Math.round((baseLow + baseHigh) / 2),
  }
}
