// UK Stamp Duty Land Tax (SDLT) Rates - December 2025
// Source: https://www.gov.uk/stamp-duty-land-tax/residential-property-rates
// Scotland LBTT: https://www.revenue.scot/land-buildings-transaction-tax
// Wales LTT: https://www.gov.wales/land-transaction-tax-rates

export type BuyerType = 'standard' | 'first-time' | 'additional' | 'non-uk-resident'
export type PropertyType = 'residential' | 'commercial' | 'mixed'
export type TaxRegion = 'england' | 'scotland' | 'wales'

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

// ============================================
// SCOTLAND - Land and Buildings Transaction Tax (LBTT)
// ============================================
const SCOTLAND_STANDARD_BANDS: StampDutyBand[] = [
  { threshold: 145000, rate: 0, label: 'Up to £145,000' },
  { threshold: 250000, rate: 0.02, label: '£145,001 to £250,000' },
  { threshold: 325000, rate: 0.05, label: '£250,001 to £325,000' },
  { threshold: 750000, rate: 0.10, label: '£325,001 to £750,000' },
  { threshold: Infinity, rate: 0.12, label: 'Above £750,000' },
]

const SCOTLAND_FIRST_TIME_BUYER_BANDS: StampDutyBand[] = [
  { threshold: 175000, rate: 0, label: 'Up to £175,000' },
  { threshold: 250000, rate: 0.02, label: '£175,001 to £250,000' },
  { threshold: 325000, rate: 0.05, label: '£250,001 to £325,000' },
  { threshold: 750000, rate: 0.10, label: '£325,001 to £750,000' },
  { threshold: Infinity, rate: 0.12, label: 'Above £750,000' },
]

const SCOTLAND_FIRST_TIME_BUYER_MAX = 175000 // Relief on first £175k

// Scotland Additional Dwelling Supplement (ADS) - 6%
const SCOTLAND_ADS_RATE = 0.06

// ============================================
// WALES - Land Transaction Tax (LTT)
// ============================================
const WALES_STANDARD_BANDS: StampDutyBand[] = [
  { threshold: 225000, rate: 0, label: 'Up to £225,000' },
  { threshold: 400000, rate: 0.06, label: '£225,001 to £400,000' },
  { threshold: 750000, rate: 0.075, label: '£400,001 to £750,000' },
  { threshold: 1500000, rate: 0.10, label: '£750,001 to £1.5 million' },
  { threshold: Infinity, rate: 0.12, label: 'Above £1.5 million' },
]

// Wales higher rates (additional properties) - different bands
const WALES_HIGHER_BANDS: StampDutyBand[] = [
  { threshold: 180000, rate: 0.04, label: 'Up to £180,000' },
  { threshold: 250000, rate: 0.075, label: '£180,001 to £250,000' },
  { threshold: 400000, rate: 0.09, label: '£250,001 to £400,000' },
  { threshold: 750000, rate: 0.115, label: '£400,001 to £750,000' },
  { threshold: 1500000, rate: 0.14, label: '£750,001 to £1.5 million' },
  { threshold: Infinity, rate: 0.16, label: 'Above £1.5 million' },
]

// ============================================
// COMMERCIAL PROPERTY (SDLT)
// ============================================
const COMMERCIAL_BANDS: StampDutyBand[] = [
  { threshold: 150000, rate: 0, label: 'Up to £150,000' },
  { threshold: 250000, rate: 0.02, label: '£150,001 to £250,000' },
  { threshold: Infinity, rate: 0.05, label: 'Above £250,000' },
]

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

// ============================================
// SCOTLAND LBTT Calculator
// ============================================
export interface ScotlandResult {
  totalTax: number
  effectiveRate: number
  breakdown: StampDutyResult['breakdown']
  propertyPrice: number
  buyerType: BuyerType
  adsAmount: number
}

export function calculateScotlandLBTT(
  propertyPrice: number,
  buyerType: BuyerType
): ScotlandResult {
  let baseTax = 0
  let breakdown: StampDutyResult['breakdown'] = []
  let adsAmount = 0

  // Determine which bands to use
  if (buyerType === 'first-time') {
    const result = calculateBandedTax(propertyPrice, SCOTLAND_FIRST_TIME_BUYER_BANDS)
    baseTax = result.tax
    breakdown = result.breakdown
  } else {
    const result = calculateBandedTax(propertyPrice, SCOTLAND_STANDARD_BANDS)
    baseTax = result.tax
    breakdown = result.breakdown
  }

  // Add Additional Dwelling Supplement (6%) for additional properties
  if (buyerType === 'additional') {
    adsAmount = propertyPrice * SCOTLAND_ADS_RATE
  }

  const totalTax = baseTax + adsAmount
  const effectiveRate = propertyPrice > 0 ? (totalTax / propertyPrice) * 100 : 0

  return {
    totalTax,
    effectiveRate,
    breakdown,
    propertyPrice,
    buyerType,
    adsAmount,
  }
}

export function getScotlandRateInfo(buyerType: BuyerType): {
  title: string
  description: string
  bands: { range: string, rate: string }[]
} {
  switch (buyerType) {
    case 'first-time':
      return {
        title: 'First-Time Buyer LBTT Rates',
        description: 'Relief increases nil-rate threshold to £175,000',
        bands: [
          { range: 'Up to £175,000', rate: '0%' },
          { range: '£175,001 to £250,000', rate: '2%' },
          { range: '£250,001 to £325,000', rate: '5%' },
          { range: '£325,001 to £750,000', rate: '10%' },
          { range: 'Above £750,000', rate: '12%' },
        ],
      }
    case 'additional':
      return {
        title: 'Additional Property LBTT Rates',
        description: '6% Additional Dwelling Supplement (ADS) applies',
        bands: [
          { range: 'Up to £145,000', rate: '6% (ADS only)' },
          { range: '£145,001 to £250,000', rate: '8% (2% + 6%)' },
          { range: '£250,001 to £325,000', rate: '11% (5% + 6%)' },
          { range: '£325,001 to £750,000', rate: '16% (10% + 6%)' },
          { range: 'Above £750,000', rate: '18% (12% + 6%)' },
        ],
      }
    default:
      return {
        title: 'Standard LBTT Rates',
        description: 'Scotland Land and Buildings Transaction Tax',
        bands: [
          { range: 'Up to £145,000', rate: '0%' },
          { range: '£145,001 to £250,000', rate: '2%' },
          { range: '£250,001 to £325,000', rate: '5%' },
          { range: '£325,001 to £750,000', rate: '10%' },
          { range: 'Above £750,000', rate: '12%' },
        ],
      }
  }
}

// ============================================
// WALES LTT Calculator
// ============================================
export interface WalesResult {
  totalTax: number
  effectiveRate: number
  breakdown: StampDutyResult['breakdown']
  propertyPrice: number
  buyerType: BuyerType
}

export function calculateWalesLTT(
  propertyPrice: number,
  buyerType: BuyerType
): WalesResult {
  let baseTax = 0
  let breakdown: StampDutyResult['breakdown'] = []

  // Wales uses different bands for additional properties
  if (buyerType === 'additional') {
    const result = calculateBandedTax(propertyPrice, WALES_HIGHER_BANDS)
    baseTax = result.tax
    breakdown = result.breakdown
  } else {
    const result = calculateBandedTax(propertyPrice, WALES_STANDARD_BANDS)
    baseTax = result.tax
    breakdown = result.breakdown
  }

  const effectiveRate = propertyPrice > 0 ? (baseTax / propertyPrice) * 100 : 0

  return {
    totalTax: baseTax,
    effectiveRate,
    breakdown,
    propertyPrice,
    buyerType,
  }
}

export function getWalesRateInfo(buyerType: BuyerType): {
  title: string
  description: string
  bands: { range: string, rate: string }[]
} {
  switch (buyerType) {
    case 'additional':
      return {
        title: 'Higher Rate LTT',
        description: 'For additional residential properties',
        bands: [
          { range: 'Up to £180,000', rate: '4%' },
          { range: '£180,001 to £250,000', rate: '7.5%' },
          { range: '£250,001 to £400,000', rate: '9%' },
          { range: '£400,001 to £750,000', rate: '11.5%' },
          { range: '£750,001 to £1.5m', rate: '14%' },
          { range: 'Above £1.5 million', rate: '16%' },
        ],
      }
    default:
      return {
        title: 'Standard LTT Rates',
        description: 'Wales Land Transaction Tax',
        bands: [
          { range: 'Up to £225,000', rate: '0%' },
          { range: '£225,001 to £400,000', rate: '6%' },
          { range: '£400,001 to £750,000', rate: '7.5%' },
          { range: '£750,001 to £1.5m', rate: '10%' },
          { range: 'Above £1.5 million', rate: '12%' },
        ],
      }
  }
}

// ============================================
// COMMERCIAL PROPERTY Calculator
// ============================================
export interface CommercialResult {
  totalTax: number
  effectiveRate: number
  breakdown: StampDutyResult['breakdown']
  propertyPrice: number
}

export function calculateCommercialSDLT(propertyPrice: number): CommercialResult {
  const result = calculateBandedTax(propertyPrice, COMMERCIAL_BANDS)
  const effectiveRate = propertyPrice > 0 ? (result.tax / propertyPrice) * 100 : 0

  return {
    totalTax: result.tax,
    effectiveRate,
    breakdown: result.breakdown,
    propertyPrice,
  }
}

export function getCommercialRateInfo(): {
  title: string
  description: string
  bands: { range: string, rate: string }[]
} {
  return {
    title: 'Commercial SDLT Rates',
    description: 'For non-residential and mixed-use properties',
    bands: [
      { range: 'Up to £150,000', rate: '0%' },
      { range: '£150,001 to £250,000', rate: '2%' },
      { range: 'Above £250,000', rate: '5%' },
    ],
  }
}

// ============================================
// JERSEY - Land Transaction Tax
// Jersey is a Crown Dependency with its own rates
// ============================================
const JERSEY_BANDS: StampDutyBand[] = [
  { threshold: 50000, rate: 0, label: 'Up to £50,000' },
  { threshold: 150000, rate: 0.02, label: '£50,001 to £150,000' },
  { threshold: 250000, rate: 0.03, label: '£150,001 to £250,000' },
  { threshold: 400000, rate: 0.04, label: '£250,001 to £400,000' },
  { threshold: 500000, rate: 0.05, label: '£400,001 to £500,000' },
  { threshold: 700000, rate: 0.06, label: '£500,001 to £700,000' },
  { threshold: 1000000, rate: 0.07, label: '£700,001 to £1 million' },
  { threshold: 1500000, rate: 0.08, label: '£1m to £1.5 million' },
  { threshold: 2000000, rate: 0.09, label: '£1.5m to £2 million' },
  { threshold: Infinity, rate: 0.10, label: 'Above £2 million' },
]

// Jersey first-time buyer has £0-£500k at 0%
const JERSEY_FIRST_TIME_BUYER_BANDS: StampDutyBand[] = [
  { threshold: 500000, rate: 0, label: 'Up to £500,000' },
  { threshold: 700000, rate: 0.06, label: '£500,001 to £700,000' },
  { threshold: 1000000, rate: 0.07, label: '£700,001 to £1 million' },
  { threshold: 1500000, rate: 0.08, label: '£1m to £1.5 million' },
  { threshold: 2000000, rate: 0.09, label: '£1.5m to £2 million' },
  { threshold: Infinity, rate: 0.10, label: 'Above £2 million' },
]

export interface JerseyResult {
  totalTax: number
  effectiveRate: number
  breakdown: StampDutyResult['breakdown']
  propertyPrice: number
  isFirstTimeBuyer: boolean
}

export function calculateJerseyLTT(
  propertyPrice: number,
  isFirstTimeBuyer: boolean = false
): JerseyResult {
  const bands = isFirstTimeBuyer ? JERSEY_FIRST_TIME_BUYER_BANDS : JERSEY_BANDS
  const result = calculateBandedTax(propertyPrice, bands)
  const effectiveRate = propertyPrice > 0 ? (result.tax / propertyPrice) * 100 : 0

  return {
    totalTax: result.tax,
    effectiveRate,
    breakdown: result.breakdown,
    propertyPrice,
    isFirstTimeBuyer,
  }
}

export function getJerseyRateInfo(isFirstTimeBuyer: boolean): {
  title: string
  description: string
  bands: { range: string, rate: string }[]
} {
  if (isFirstTimeBuyer) {
    return {
      title: 'Jersey First-Time Buyer Rates',
      description: 'No stamp duty up to £500,000 for first-time buyers',
      bands: [
        { range: 'Up to £500,000', rate: '0%' },
        { range: '£500,001 to £700,000', rate: '6%' },
        { range: '£700,001 to £1 million', rate: '7%' },
        { range: '£1m to £1.5 million', rate: '8%' },
        { range: '£1.5m to £2 million', rate: '9%' },
        { range: 'Above £2 million', rate: '10%' },
      ],
    }
  }

  return {
    title: 'Jersey Standard Rates',
    description: 'Land Transaction Tax rates for Jersey',
    bands: [
      { range: 'Up to £50,000', rate: '0%' },
      { range: '£50,001 to £150,000', rate: '2%' },
      { range: '£150,001 to £250,000', rate: '3%' },
      { range: '£250,001 to £400,000', rate: '4%' },
      { range: '£400,001 to £500,000', rate: '5%' },
      { range: '£500,001 to £700,000', rate: '6%' },
      { range: '£700,001 to £1 million', rate: '7%' },
      { range: '£1m to £1.5 million', rate: '8%' },
      { range: '£1.5m to £2 million', rate: '9%' },
      { range: 'Above £2 million', rate: '10%' },
    ],
  }
}
