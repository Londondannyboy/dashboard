// UK Childcare Cost Calculator 2025
// Data sources: Coram Family and Childcare Survey 2024, gov.uk

export type ChildcareType = 'nursery' | 'childminder' | 'nanny' | 'au-pair' | 'after-school' | 'breakfast-club' | 'holiday-club'

export type AgeGroup = 'under-2' | '2-years' | '3-4-years' | '5-11-years' | '12-plus'

export type Region =
  | 'london-inner'
  | 'london-outer'
  | 'south-east'
  | 'south-west'
  | 'east-of-england'
  | 'east-midlands'
  | 'west-midlands'
  | 'yorkshire'
  | 'north-west'
  | 'north-east'
  | 'wales'
  | 'scotland'
  | 'northern-ireland'

export interface Child {
  id: string
  ageGroup: AgeGroup
  hoursPerWeek: number
  weeksPerYear: number
  childcareType: ChildcareType
}

export interface ChildcareInput {
  children: Child[]
  region: Region
  householdIncome: number
  bothParentsWorking: boolean
  singleParent: boolean
  receiveUniversalCredit: boolean
}

export interface GovernmentSupport {
  taxFreeChildcare: number
  freeHours15: number
  freeHours30: number
  universalCreditSupport: number
  totalSupport: number
}

export interface ChildcareResult {
  grossCostWeekly: number
  grossCostMonthly: number
  grossCostYearly: number
  governmentSupport: GovernmentSupport
  netCostWeekly: number
  netCostMonthly: number
  netCostYearly: number
  breakdown: ChildCostBreakdown[]
}

export interface ChildCostBreakdown {
  childId: string
  ageGroup: AgeGroup
  childcareType: ChildcareType
  hoursPerWeek: number
  hourlyRate: number
  weeklyCost: number
  yearlyCost: number
  freeHoursEntitlement: number
  taxFreeChildcareContribution: number
}

// Average hourly rates by childcare type, age group and region (2024/25)
// Data from Coram Childcare Survey 2024
const baseHourlyRates: Record<ChildcareType, Record<AgeGroup, number>> = {
  'nursery': {
    'under-2': 7.50,      // Higher staff ratios needed
    '2-years': 7.00,
    '3-4-years': 6.50,
    '5-11-years': 5.50,   // Typically wraparound care
    '12-plus': 5.00,
  },
  'childminder': {
    'under-2': 6.00,
    '2-years': 5.75,
    '3-4-years': 5.50,
    '5-11-years': 5.25,
    '12-plus': 5.00,
  },
  'nanny': {
    'under-2': 12.00,     // Typically net hourly rate
    '2-years': 12.00,
    '3-4-years': 11.50,
    '5-11-years': 11.00,
    '12-plus': 10.50,
  },
  'au-pair': {
    'under-2': 5.00,      // Pocket money equivalent
    '2-years': 5.00,
    '3-4-years': 5.00,
    '5-11-years': 5.00,
    '12-plus': 5.00,
  },
  'after-school': {
    'under-2': 0,         // Not applicable
    '2-years': 0,
    '3-4-years': 5.50,
    '5-11-years': 5.00,
    '12-plus': 4.50,
  },
  'breakfast-club': {
    'under-2': 0,
    '2-years': 0,
    '3-4-years': 5.00,
    '5-11-years': 4.50,
    '12-plus': 4.00,
  },
  'holiday-club': {
    'under-2': 0,
    '2-years': 6.00,
    '3-4-years': 5.50,
    '5-11-years': 5.00,
    '12-plus': 4.50,
  },
}

// Regional cost multipliers (London = highest baseline)
const regionalMultipliers: Record<Region, number> = {
  'london-inner': 1.40,
  'london-outer': 1.25,
  'south-east': 1.15,
  'east-of-england': 1.05,
  'south-west': 1.00,
  'east-midlands': 0.95,
  'west-midlands': 0.95,
  'yorkshire': 0.92,
  'north-west': 0.90,
  'north-east': 0.88,
  'wales': 0.90,
  'scotland': 0.95,
  'northern-ireland': 0.88,
}

// Government support thresholds and limits (2024/25)
const GOVERNMENT_SUPPORT = {
  // Tax-Free Childcare
  taxFreeChildcare: {
    maxContributionPerQuarter: 500,    // Government pays up to £500 per quarter per child
    maxContributionPerYear: 2000,      // £2,000 per child per year
    maxContributionDisabled: 4000,     // £4,000 for disabled children
    parentMinIncome: 2379,             // Minimum £152.10/week (National Living Wage for 16+ hours)
    parentMaxIncome: 100000,           // Per parent
  },

  // Free childcare hours
  freeHours: {
    universal15: {
      ageStart: 3,                     // From term after 3rd birthday
      hoursPerWeek: 15,
      weeksPerYear: 38,                // Term-time only
    },
    extended30: {
      ageStart: 3,
      hoursPerWeek: 30,
      weeksPerYear: 38,
      minParentHours: 16,              // Each parent must work 16+ hours
      maxParentIncome: 100000,
    },
    twoYearOld15: {
      ageStart: 2,
      hoursPerWeek: 15,
      weeksPerYear: 38,
      eligibilityType: 'means-tested', // Based on benefits/income
    },
    // New entitlements from April 2024/September 2024
    underTwo15: {
      ageStart: 0,
      hoursPerWeek: 15,
      weeksPerYear: 38,
      minParentHours: 16,
      maxParentIncome: 100000,
      rolloutDate: 'September 2024',   // 9 months+
    },
  },

  // Universal Credit childcare element
  universalCredit: {
    maxChildcarePerWeek1Child: 1014.63,   // Max monthly for 1 child
    maxChildcarePerWeekMultiple: 1739.37, // Max monthly for 2+ children
    percentageCovered: 0.85,               // 85% of costs covered
  },
}

export function getRegionLabel(region: Region): string {
  const labels: Record<Region, string> = {
    'london-inner': 'Inner London',
    'london-outer': 'Outer London',
    'south-east': 'South East',
    'south-west': 'South West',
    'east-of-england': 'East of England',
    'east-midlands': 'East Midlands',
    'west-midlands': 'West Midlands',
    'yorkshire': 'Yorkshire & Humber',
    'north-west': 'North West',
    'north-east': 'North East',
    'wales': 'Wales',
    'scotland': 'Scotland',
    'northern-ireland': 'Northern Ireland',
  }
  return labels[region]
}

export function getChildcareTypeLabel(type: ChildcareType): string {
  const labels: Record<ChildcareType, string> = {
    'nursery': 'Nursery / Day Nursery',
    'childminder': 'Childminder',
    'nanny': 'Nanny (Private)',
    'au-pair': 'Au Pair',
    'after-school': 'After-School Club',
    'breakfast-club': 'Breakfast Club',
    'holiday-club': 'Holiday Club',
  }
  return labels[type]
}

export function getAgeGroupLabel(ageGroup: AgeGroup): string {
  const labels: Record<AgeGroup, string> = {
    'under-2': 'Under 2 years',
    '2-years': '2 years old',
    '3-4-years': '3-4 years old',
    '5-11-years': '5-11 years old',
    '12-plus': '12+ years old',
  }
  return labels[ageGroup]
}

export function getHourlyRate(childcareType: ChildcareType, ageGroup: AgeGroup, region: Region): number {
  const baseRate = baseHourlyRates[childcareType][ageGroup]
  const multiplier = regionalMultipliers[region]
  return Math.round(baseRate * multiplier * 100) / 100
}

export function getFreeHoursEntitlement(ageGroup: AgeGroup, input: ChildcareInput): number {
  const { bothParentsWorking, singleParent, householdIncome } = input
  const isWorkingParent = bothParentsWorking || singleParent
  const belowIncomeThreshold = householdIncome <= 100000

  // 3-4 year olds - all get 15 hours, working parents get 30
  if (ageGroup === '3-4-years') {
    if (isWorkingParent && belowIncomeThreshold) {
      return 30 // Extended entitlement
    }
    return 15 // Universal entitlement
  }

  // 2 year olds - working parents get 15 hours (from April 2024)
  if (ageGroup === '2-years') {
    if (isWorkingParent && belowIncomeThreshold) {
      return 15
    }
    return 0
  }

  // Under 2s - working parents with children 9 months+ get 15 hours (from September 2024)
  if (ageGroup === 'under-2') {
    if (isWorkingParent && belowIncomeThreshold) {
      return 15
    }
    return 0
  }

  return 0
}

export function calculateTaxFreeChildcareEntitlement(
  grossYearlyCost: number,
  householdIncome: number,
  bothParentsWorking: boolean,
  singleParent: boolean
): number {
  // Check eligibility
  const isWorkingParent = bothParentsWorking || singleParent
  const { parentMinIncome, parentMaxIncome, maxContributionPerYear } = GOVERNMENT_SUPPORT.taxFreeChildcare

  if (!isWorkingParent) return 0
  if (householdIncome < parentMinIncome) return 0
  if (householdIncome > parentMaxIncome * 2) return 0 // Both parents under £100k

  // Government pays £2 for every £8 you pay (20% top-up)
  const potentialContribution = grossYearlyCost * 0.2
  return Math.min(potentialContribution, maxContributionPerYear)
}

export function calculateUniversalCreditSupport(
  grossWeeklyCost: number,
  numberOfChildren: number,
  receiveUniversalCredit: boolean
): number {
  if (!receiveUniversalCredit) return 0

  const { maxChildcarePerWeek1Child, maxChildcarePerWeekMultiple, percentageCovered } = GOVERNMENT_SUPPORT.universalCredit
  const maxMonthly = numberOfChildren === 1 ? maxChildcarePerWeek1Child : maxChildcarePerWeekMultiple

  // Convert weekly to monthly (52/12)
  const monthlyCost = grossWeeklyCost * (52 / 12)
  const coveredAmount = Math.min(monthlyCost, maxMonthly) * percentageCovered

  // Return yearly amount
  return coveredAmount * 12
}

export function calculateChildcareCosts(input: ChildcareInput): ChildcareResult {
  const breakdown: ChildCostBreakdown[] = []
  let totalGrossWeekly = 0
  let totalGrossYearly = 0
  let totalFreeHoursValue = 0
  let totalTaxFreeChildcare = 0

  for (const child of input.children) {
    const hourlyRate = getHourlyRate(child.childcareType, child.ageGroup, input.region)
    const freeHours = getFreeHoursEntitlement(child.ageGroup, input)

    // Calculate billable hours (after free hours)
    const billableHoursPerWeek = Math.max(0, child.hoursPerWeek - freeHours)
    const weeklyCost = billableHoursPerWeek * hourlyRate
    const yearlyCost = weeklyCost * child.weeksPerYear

    // Calculate full cost for reference
    const fullWeeklyCost = child.hoursPerWeek * hourlyRate
    const fullYearlyCost = fullWeeklyCost * child.weeksPerYear

    // Value of free hours
    const freeHoursValue = Math.min(freeHours, child.hoursPerWeek) * hourlyRate * 38 // 38 term weeks

    // Tax-Free Childcare contribution (on remaining costs after free hours)
    const taxFreeContribution = calculateTaxFreeChildcareEntitlement(
      yearlyCost,
      input.householdIncome,
      input.bothParentsWorking,
      input.singleParent
    )

    breakdown.push({
      childId: child.id,
      ageGroup: child.ageGroup,
      childcareType: child.childcareType,
      hoursPerWeek: child.hoursPerWeek,
      hourlyRate,
      weeklyCost: fullWeeklyCost, // Show full cost for transparency
      yearlyCost: fullYearlyCost,
      freeHoursEntitlement: freeHours,
      taxFreeChildcareContribution: taxFreeContribution,
    })

    totalGrossWeekly += fullWeeklyCost
    totalGrossYearly += fullYearlyCost
    totalFreeHoursValue += freeHoursValue
    totalTaxFreeChildcare += taxFreeContribution
  }

  // Calculate Universal Credit support if applicable
  const universalCreditSupport = calculateUniversalCreditSupport(
    totalGrossWeekly,
    input.children.length,
    input.receiveUniversalCredit
  )

  const governmentSupport: GovernmentSupport = {
    taxFreeChildcare: totalTaxFreeChildcare,
    freeHours15: totalFreeHoursValue, // Combined free hours value
    freeHours30: 0, // Already included in freeHours15 calculation
    universalCreditSupport,
    totalSupport: totalFreeHoursValue + totalTaxFreeChildcare + universalCreditSupport,
  }

  const netCostYearly = Math.max(0, totalGrossYearly - governmentSupport.totalSupport)
  const netCostMonthly = netCostYearly / 12
  const netCostWeekly = netCostYearly / 52

  return {
    grossCostWeekly: totalGrossWeekly,
    grossCostMonthly: totalGrossYearly / 12,
    grossCostYearly: totalGrossYearly,
    governmentSupport,
    netCostWeekly,
    netCostMonthly,
    netCostYearly,
    breakdown,
  }
}

// Average costs for display (before calculating individual cases)
export const averageCostsByType: Record<ChildcareType, { weeklyRange: string; description: string }> = {
  'nursery': {
    weeklyRange: '£200 - £400',
    description: 'Full-time nursery (50 hours/week) varies significantly by region, with London being most expensive.',
  },
  'childminder': {
    weeklyRange: '£180 - £320',
    description: 'Registered childminders offer flexible home-based care, often with more personalized attention.',
  },
  'nanny': {
    weeklyRange: '£400 - £700',
    description: 'Private nannies provide one-to-one care in your home. Costs are typically net of tax.',
  },
  'au-pair': {
    weeklyRange: '£85 - £150',
    description: 'Au pairs provide childcare in exchange for accommodation, food, and pocket money.',
  },
  'after-school': {
    weeklyRange: '£50 - £100',
    description: 'After-school clubs typically run 3-6pm during term time.',
  },
  'breakfast-club': {
    weeklyRange: '£20 - £50',
    description: 'Breakfast clubs typically run 7:30-9am during term time.',
  },
  'holiday-club': {
    weeklyRange: '£150 - £300',
    description: 'Holiday clubs provide full-day care during school holidays.',
  },
}

export const regions: { value: Region; label: string }[] = [
  { value: 'london-inner', label: 'Inner London' },
  { value: 'london-outer', label: 'Outer London' },
  { value: 'south-east', label: 'South East' },
  { value: 'south-west', label: 'South West' },
  { value: 'east-of-england', label: 'East of England' },
  { value: 'east-midlands', label: 'East Midlands' },
  { value: 'west-midlands', label: 'West Midlands' },
  { value: 'yorkshire', label: 'Yorkshire & Humber' },
  { value: 'north-west', label: 'North West' },
  { value: 'north-east', label: 'North East' },
  { value: 'wales', label: 'Wales' },
  { value: 'scotland', label: 'Scotland' },
  { value: 'northern-ireland', label: 'Northern Ireland' },
]

export const childcareTypes: { value: ChildcareType; label: string }[] = [
  { value: 'nursery', label: 'Nursery / Day Nursery' },
  { value: 'childminder', label: 'Childminder' },
  { value: 'nanny', label: 'Nanny (Private)' },
  { value: 'au-pair', label: 'Au Pair' },
  { value: 'after-school', label: 'After-School Club' },
  { value: 'breakfast-club', label: 'Breakfast Club' },
  { value: 'holiday-club', label: 'Holiday Club' },
]

export const ageGroups: { value: AgeGroup; label: string }[] = [
  { value: 'under-2', label: 'Under 2 years' },
  { value: '2-years', label: '2 years old' },
  { value: '3-4-years', label: '3-4 years old' },
  { value: '5-11-years', label: '5-11 years old' },
  { value: '12-plus', label: '12+ years old' },
]
