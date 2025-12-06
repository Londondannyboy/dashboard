// UK Stamp Duty Land Tax (SDLT) Rates - December 2025
// Source: https://www.gov.uk/stamp-duty-land-tax/residential-property-rates

export type BuyerType = 'standard' | 'first-time' | 'additional' | 'non-uk-resident'

export interface StampDutyBand {
  threshold: number
  rate: number
  label: string
}

export interface StampDutyResult {
  totalTax: number
  effectiveRate: number
  breakdown: {
    band: string
    taxableAmount: number
    rate: number
    tax: number
  }[]
  propertyPrice: number
  buyerType: BuyerType
  additionalSurcharge: number
  nonUkSurcharge: number
}

// Standard SDLT rates (single property purchase)
const STANDARD_BANDS: StampDutyBand[] = [
  { threshold: 125000, rate: 0, label: 'Up to £125,000' },
  { threshold: 250000, rate: 0.02, label: '£125,001 to £250,000' },
  { threshold: 925000, rate: 0.05, label: '£250,001 to £925,000' },
  { threshold: 1500000, rate: 0.10, label: '£925,001 to £1.5 million' },
  { threshold: Infinity, rate: 0.12, label: 'Above £1.5 million' },
]

// First-time buyer rates
const FIRST_TIME_BUYER_BANDS: StampDutyBand[] = [
  { threshold: 300000, rate: 0, label: 'Up to £300,000' },
  { threshold: 500000, rate: 0.05, label: '£300,001 to £500,000' },
]

// First-time buyer relief threshold
const FIRST_TIME_BUYER_MAX = 500000

// Additional property surcharge (5% on top of standard rates)
const ADDITIONAL_PROPERTY_SURCHARGE = 0.05

// Non-UK resident surcharge (2% on top of other rates)
const NON_UK_RESIDENT_SURCHARGE = 0.02

function calculateBandedTax(price: number, bands: StampDutyBand[]): { tax: number, breakdown: StampDutyResult['breakdown'] } {
  let remainingPrice = price
  let previousThreshold = 0
  const breakdown: StampDutyResult['breakdown'] = []
  let totalTax = 0

  for (const band of bands) {
    if (remainingPrice <= 0) break

    const bandSize = band.threshold === Infinity
      ? remainingPrice
      : Math.min(band.threshold - previousThreshold, remainingPrice)

    if (bandSize > 0) {
      const tax = bandSize * band.rate
      totalTax += tax

      breakdown.push({
        band: band.label,
        taxableAmount: bandSize,
        rate: band.rate,
        tax,
      })

      remainingPrice -= bandSize
    }

    previousThreshold = band.threshold
  }

  return { tax: totalTax, breakdown }
}

export function calculateStampDuty(
  propertyPrice: number,
  buyerType: BuyerType,
  isNonUkResident: boolean = false
): StampDutyResult {
  let baseTax = 0
  let breakdown: StampDutyResult['breakdown'] = []
  let additionalSurcharge = 0
  let nonUkSurcharge = 0

  // Determine which bands to use
  if (buyerType === 'first-time' && propertyPrice <= FIRST_TIME_BUYER_MAX) {
    // First-time buyer relief applies
    const result = calculateBandedTax(propertyPrice, FIRST_TIME_BUYER_BANDS)
    baseTax = result.tax
    breakdown = result.breakdown
  } else {
    // Standard rates (first-time buyers over £500k lose relief)
    const result = calculateBandedTax(propertyPrice, STANDARD_BANDS)
    baseTax = result.tax
    breakdown = result.breakdown
  }

  // Add additional property surcharge (5%)
  if (buyerType === 'additional') {
    additionalSurcharge = propertyPrice * ADDITIONAL_PROPERTY_SURCHARGE
  }

  // Add non-UK resident surcharge (2%)
  if (isNonUkResident || buyerType === 'non-uk-resident') {
    nonUkSurcharge = propertyPrice * NON_UK_RESIDENT_SURCHARGE
  }

  const totalTax = baseTax + additionalSurcharge + nonUkSurcharge
  const effectiveRate = propertyPrice > 0 ? (totalTax / propertyPrice) * 100 : 0

  return {
    totalTax,
    effectiveRate,
    breakdown,
    propertyPrice,
    buyerType,
    additionalSurcharge,
    nonUkSurcharge,
  }
}

// Format currency for display
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Format percentage for display
export function formatPercentage(rate: number): string {
  return `${(rate * 100).toFixed(0)}%`
}

// Get rate information for display
export function getRateInfo(buyerType: BuyerType): {
  title: string
  description: string
  bands: { range: string, rate: string }[]
} {
  switch (buyerType) {
    case 'first-time':
      return {
        title: 'First-Time Buyer Rates',
        description: 'Relief available for properties up to £500,000',
        bands: [
          { range: 'Up to £300,000', rate: '0%' },
          { range: '£300,001 to £500,000', rate: '5%' },
        ],
      }
    case 'additional':
      return {
        title: 'Additional Property Rates',
        description: '5% surcharge on top of standard rates',
        bands: [
          { range: 'Up to £125,000', rate: '5%' },
          { range: '£125,001 to £250,000', rate: '7%' },
          { range: '£250,001 to £925,000', rate: '10%' },
          { range: '£925,001 to £1.5m', rate: '15%' },
          { range: 'Above £1.5 million', rate: '17%' },
        ],
      }
    case 'non-uk-resident':
      return {
        title: 'Non-UK Resident Rates',
        description: '2% surcharge on top of standard rates',
        bands: [
          { range: 'Up to £125,000', rate: '2%' },
          { range: '£125,001 to £250,000', rate: '4%' },
          { range: '£250,001 to £925,000', rate: '7%' },
          { range: '£925,001 to £1.5m', rate: '12%' },
          { range: 'Above £1.5 million', rate: '14%' },
        ],
      }
    default:
      return {
        title: 'Standard Rates',
        description: 'Rates for single property purchases',
        bands: [
          { range: 'Up to £125,000', rate: '0%' },
          { range: '£125,001 to £250,000', rate: '2%' },
          { range: '£250,001 to £925,000', rate: '5%' },
          { range: '£925,001 to £1.5m', rate: '10%' },
          { range: 'Above £1.5 million', rate: '12%' },
        ],
      }
  }
}
