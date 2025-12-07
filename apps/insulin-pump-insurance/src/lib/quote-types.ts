export type CoverType = 'comprehensive' | 'standard' | 'basic'

export type DeviceType = 'insulin-pump' | 'cgm' | 'pump-and-cgm' | 'pdm'

export type PumpBrand =
  | 'medtronic'
  | 'omnipod'
  | 'tandem'
  | 'ypsomed'
  | 'roche'
  | 'other'

export type CGMBrand =
  | 'dexcom'
  | 'freestyle-libre'
  | 'medtronic-guardian'
  | 'other'

export interface QuoteFormData {
  // Device Details
  deviceType: DeviceType
  pumpBrand: PumpBrand
  cgmBrand: CGMBrand
  deviceValue: string
  purchaseDate: string
  deviceAge: number
  serialNumber: string

  // Coverage Options
  coverType: CoverType
  coverageAmount: string
  includeAccessories: boolean
  includeLoanEquipment: boolean
  includeWorldwideCover: boolean
  excessAmount: string

  // Owner Details
  ownerName: string
  postcode: string
  hasExistingInsurance: boolean
  nhsOrPrivate: 'nhs' | 'private' | 'self-funded'

  // Insurance Start
  coverStartDate: string
}

export const DEVICE_TYPES: { value: DeviceType; label: string; description: string }[] = [
  { value: 'insulin-pump', label: 'Insulin Pump Only', description: 'Standard insulin pump device' },
  { value: 'cgm', label: 'CGM Only', description: 'Continuous Glucose Monitor only' },
  { value: 'pump-and-cgm', label: 'Pump + CGM', description: 'Both insulin pump and CGM system' },
  { value: 'pdm', label: 'PDM / Controller', description: 'Personal Diabetes Manager or handset' },
]

export const PUMP_BRANDS: { value: PumpBrand; label: string; avgValue: number }[] = [
  { value: 'medtronic', label: 'Medtronic', avgValue: 4000 },
  { value: 'omnipod', label: 'Omnipod (Insulet)', avgValue: 2500 },
  { value: 'tandem', label: 'Tandem t:slim', avgValue: 4500 },
  { value: 'ypsomed', label: 'Ypsomed mylife', avgValue: 3500 },
  { value: 'roche', label: 'Roche Accu-Chek', avgValue: 3000 },
  { value: 'other', label: 'Other Brand', avgValue: 3000 },
]

export const CGM_BRANDS: { value: CGMBrand; label: string; avgValue: number }[] = [
  { value: 'dexcom', label: 'Dexcom G6/G7', avgValue: 1500 },
  { value: 'freestyle-libre', label: 'FreeStyle Libre', avgValue: 800 },
  { value: 'medtronic-guardian', label: 'Medtronic Guardian', avgValue: 1200 },
  { value: 'other', label: 'Other CGM', avgValue: 1000 },
]

export const COVER_TYPES: { value: CoverType; label: string; description: string; popular?: boolean }[] = [
  {
    value: 'comprehensive',
    label: 'Comprehensive Cover',
    description: 'Full protection: accidental damage, theft, loss, liquid damage, and worldwide cover',
    popular: true,
  },
  {
    value: 'standard',
    label: 'Standard Cover',
    description: 'Covers accidental damage, theft and loss in the UK',
  },
  {
    value: 'basic',
    label: 'Basic Cover',
    description: 'Accidental damage and theft only - most affordable option',
  },
]

export const COVERAGE_AMOUNTS = [
  { value: '2000', label: '£2,000' },
  { value: '3000', label: '£3,000' },
  { value: '4000', label: '£4,000' },
  { value: '5000', label: '£5,000' },
  { value: '6000', label: '£6,000' },
  { value: '7500', label: '£7,500' },
  { value: '10000', label: '£10,000' },
]

export const EXCESS_OPTIONS = [
  { value: '0', label: '£0 (No excess)' },
  { value: '25', label: '£25' },
  { value: '50', label: '£50' },
  { value: '100', label: '£100' },
]

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
  // Base monthly premium (based on market rates of ~£6.95/month)
  let baseLow = 5.95
  let baseHigh = 8.95

  // Adjust based on device type
  switch (data.deviceType) {
    case 'pump-and-cgm':
      baseLow *= 1.4
      baseHigh *= 1.5
      break
    case 'cgm':
      baseLow *= 0.7
      baseHigh *= 0.8
      break
    case 'pdm':
      baseLow *= 0.6
      baseHigh *= 0.7
      break
  }

  // Adjust based on coverage amount
  const coverageAmount = parseInt(data.coverageAmount || '5000')
  if (coverageAmount >= 7500) {
    baseLow *= 1.3
    baseHigh *= 1.4
  } else if (coverageAmount >= 6000) {
    baseLow *= 1.2
    baseHigh *= 1.25
  } else if (coverageAmount <= 2000) {
    baseLow *= 0.75
    baseHigh *= 0.8
  } else if (coverageAmount <= 3000) {
    baseLow *= 0.85
    baseHigh *= 0.9
  }

  // Adjust based on cover type
  switch (data.coverType) {
    case 'comprehensive':
      baseLow *= 1.2
      baseHigh *= 1.25
      break
    case 'basic':
      baseLow *= 0.75
      baseHigh *= 0.8
      break
  }

  // Adjust based on excess
  const excess = parseInt(data.excessAmount || '0')
  if (excess >= 100) {
    baseLow *= 0.85
    baseHigh *= 0.88
  } else if (excess >= 50) {
    baseLow *= 0.9
    baseHigh *= 0.92
  } else if (excess >= 25) {
    baseLow *= 0.95
    baseHigh *= 0.96
  }

  // Add extras
  if (data.includeAccessories) {
    baseLow += 1.5
    baseHigh += 2.5
  }
  if (data.includeLoanEquipment) {
    baseLow += 0.5
    baseHigh += 1
  }
  if (data.includeWorldwideCover) {
    baseLow += 1
    baseHigh += 2
  }

  // Device age adjustment (older devices slightly higher risk)
  const deviceAge = data.deviceAge || 0
  if (deviceAge > 3) {
    baseLow *= 1.1
    baseHigh *= 1.15
  } else if (deviceAge > 2) {
    baseLow *= 1.05
    baseHigh *= 1.08
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
      low: Math.round(baseLow * 12 * 100) / 100,
      high: Math.round(baseHigh * 12 * 100) / 100,
      average: Math.round(monthlyAverage * 12 * 100) / 100,
    },
  }
}
