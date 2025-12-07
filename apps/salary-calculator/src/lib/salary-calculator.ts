// UK Salary Calculator - 2025/26 Tax Year
// All rates effective from April 2025

export type Region = 'england' | 'scotland'
export type PayFrequency = 'yearly' | 'monthly' | 'weekly' | 'daily'
export type StudentLoanPlan = 'none' | 'plan1' | 'plan2' | 'plan4' | 'plan5' | 'postgraduate'

export interface SalaryInput {
  grossSalary: number
  region: Region
  pensionContribution: number // percentage
  pensionType: 'percentage' | 'fixed'
  studentLoan: StudentLoanPlan
  hasPostgraduateLoan: boolean
  noNI: boolean // over state pension age
  taxCode?: string
  blindPersonsAllowance: boolean
  marriageAllowance: 'none' | 'receiving' | 'transferring'
}

export interface TaxBandBreakdown {
  band: string
  rate: number
  taxableAmount: number
  tax: number
}

export interface SalaryResult {
  grossSalary: number
  taxableIncome: number
  personalAllowance: number
  incomeTax: number
  nationalInsurance: number
  studentLoanRepayment: number
  postgraduateLoanRepayment: number
  pensionContribution: number
  netSalary: number
  effectiveTaxRate: number
  marginalTaxRate: number
  taxBreakdown: TaxBandBreakdown[]
  niBreakdown: TaxBandBreakdown[]
  yearly: PeriodBreakdown
  monthly: PeriodBreakdown
  weekly: PeriodBreakdown
  daily: PeriodBreakdown
}

export interface PeriodBreakdown {
  gross: number
  tax: number
  ni: number
  studentLoan: number
  postgraduateLoan: number
  pension: number
  net: number
}

// 2025/26 Tax Bands - England, Wales & Northern Ireland
const ENGLAND_TAX_BANDS = [
  { min: 0, max: 12570, rate: 0, name: 'Personal Allowance' },
  { min: 12571, max: 50270, rate: 0.20, name: 'Basic Rate' },
  { min: 50271, max: 125140, rate: 0.40, name: 'Higher Rate' },
  { min: 125141, max: Infinity, rate: 0.45, name: 'Additional Rate' },
]

// 2025/26 Tax Bands - Scotland
const SCOTLAND_TAX_BANDS = [
  { min: 0, max: 12570, rate: 0, name: 'Personal Allowance' },
  { min: 12571, max: 15397, rate: 0.19, name: 'Starter Rate' },
  { min: 15398, max: 27491, rate: 0.20, name: 'Basic Rate' },
  { min: 27492, max: 43662, rate: 0.21, name: 'Intermediate Rate' },
  { min: 43663, max: 75000, rate: 0.42, name: 'Higher Rate' },
  { min: 75001, max: 125140, rate: 0.45, name: 'Advanced Rate' },
  { min: 125141, max: Infinity, rate: 0.48, name: 'Top Rate' },
]

// 2025/26 National Insurance Bands (Class 1)
const NI_BANDS = [
  { min: 0, max: 12570, rate: 0, name: 'Below Primary Threshold' },
  { min: 12571, max: 50270, rate: 0.08, name: 'Main Rate' },
  { min: 50271, max: Infinity, rate: 0.02, name: 'Upper Rate' },
]

// Student Loan Thresholds 2025/26
const STUDENT_LOAN_THRESHOLDS = {
  plan1: { threshold: 24990, rate: 0.09 },
  plan2: { threshold: 27295, rate: 0.09 },
  plan4: { threshold: 31395, rate: 0.09 }, // Scotland
  plan5: { threshold: 25000, rate: 0.09 },
  postgraduate: { threshold: 21000, rate: 0.06 },
}

const BASE_PERSONAL_ALLOWANCE = 12570
const PERSONAL_ALLOWANCE_TAPER_START = 100000
const BLIND_PERSONS_ALLOWANCE = 3070
const MARRIAGE_ALLOWANCE_AMOUNT = 1260

export function calculateSalary(input: SalaryInput): SalaryResult {
  const {
    grossSalary,
    region,
    pensionContribution,
    pensionType,
    studentLoan,
    hasPostgraduateLoan,
    noNI,
    blindPersonsAllowance,
    marriageAllowance,
  } = input

  // Calculate pension deduction
  const pensionDeduction = pensionType === 'percentage'
    ? grossSalary * (pensionContribution / 100)
    : pensionContribution

  // Taxable income after pension (salary sacrifice reduces taxable income)
  const taxableGross = grossSalary - pensionDeduction

  // Calculate personal allowance (tapers above £100k)
  let personalAllowance = BASE_PERSONAL_ALLOWANCE

  // Blind Person's Allowance
  if (blindPersonsAllowance) {
    personalAllowance += BLIND_PERSONS_ALLOWANCE
  }

  // Marriage Allowance
  if (marriageAllowance === 'receiving') {
    personalAllowance += MARRIAGE_ALLOWANCE_AMOUNT
  } else if (marriageAllowance === 'transferring') {
    personalAllowance -= MARRIAGE_ALLOWANCE_AMOUNT
  }

  // Personal allowance taper (reduces by £1 for every £2 over £100k)
  if (taxableGross > PERSONAL_ALLOWANCE_TAPER_START) {
    const reduction = Math.floor((taxableGross - PERSONAL_ALLOWANCE_TAPER_START) / 2)
    personalAllowance = Math.max(0, personalAllowance - reduction)
  }

  const taxableIncome = Math.max(0, taxableGross - personalAllowance)

  // Calculate Income Tax
  const taxBands = region === 'scotland' ? SCOTLAND_TAX_BANDS : ENGLAND_TAX_BANDS
  const { tax: incomeTax, breakdown: taxBreakdown } = calculateBandedTax(taxableGross, taxBands, personalAllowance)

  // Calculate National Insurance
  let nationalInsurance = 0
  let niBreakdown: TaxBandBreakdown[] = []

  if (!noNI) {
    const niResult = calculateBandedTax(grossSalary, NI_BANDS, 0)
    nationalInsurance = niResult.tax
    niBreakdown = niResult.breakdown
  }

  // Calculate Student Loan Repayment
  let studentLoanRepayment = 0
  if (studentLoan !== 'none') {
    const loanConfig = STUDENT_LOAN_THRESHOLDS[studentLoan]
    if (grossSalary > loanConfig.threshold) {
      studentLoanRepayment = (grossSalary - loanConfig.threshold) * loanConfig.rate
    }
  }

  // Calculate Postgraduate Loan Repayment
  let postgraduateLoanRepayment = 0
  if (hasPostgraduateLoan) {
    const pgConfig = STUDENT_LOAN_THRESHOLDS.postgraduate
    if (grossSalary > pgConfig.threshold) {
      postgraduateLoanRepayment = (grossSalary - pgConfig.threshold) * pgConfig.rate
    }
  }

  // Calculate Net Salary
  const totalDeductions = incomeTax + nationalInsurance + studentLoanRepayment + postgraduateLoanRepayment + pensionDeduction
  const netSalary = grossSalary - totalDeductions

  // Calculate effective and marginal tax rates
  const effectiveTaxRate = grossSalary > 0 ? ((incomeTax + nationalInsurance) / grossSalary) * 100 : 0
  const marginalTaxRate = calculateMarginalRate(grossSalary, region, noNI)

  // Period breakdowns
  const yearly: PeriodBreakdown = {
    gross: grossSalary,
    tax: incomeTax,
    ni: nationalInsurance,
    studentLoan: studentLoanRepayment,
    postgraduateLoan: postgraduateLoanRepayment,
    pension: pensionDeduction,
    net: netSalary,
  }

  const monthly: PeriodBreakdown = {
    gross: yearly.gross / 12,
    tax: yearly.tax / 12,
    ni: yearly.ni / 12,
    studentLoan: yearly.studentLoan / 12,
    postgraduateLoan: yearly.postgraduateLoan / 12,
    pension: yearly.pension / 12,
    net: yearly.net / 12,
  }

  const weekly: PeriodBreakdown = {
    gross: yearly.gross / 52,
    tax: yearly.tax / 52,
    ni: yearly.ni / 52,
    studentLoan: yearly.studentLoan / 52,
    postgraduateLoan: yearly.postgraduateLoan / 52,
    pension: yearly.pension / 52,
    net: yearly.net / 52,
  }

  const daily: PeriodBreakdown = {
    gross: yearly.gross / 260, // Working days
    tax: yearly.tax / 260,
    ni: yearly.ni / 260,
    studentLoan: yearly.studentLoan / 260,
    postgraduateLoan: yearly.postgraduateLoan / 260,
    pension: yearly.pension / 260,
    net: yearly.net / 260,
  }

  return {
    grossSalary,
    taxableIncome,
    personalAllowance,
    incomeTax,
    nationalInsurance,
    studentLoanRepayment,
    postgraduateLoanRepayment,
    pensionContribution: pensionDeduction,
    netSalary,
    effectiveTaxRate,
    marginalTaxRate,
    taxBreakdown,
    niBreakdown,
    yearly,
    monthly,
    weekly,
    daily,
  }
}

function calculateBandedTax(
  income: number,
  bands: typeof ENGLAND_TAX_BANDS,
  personalAllowance: number
): { tax: number; breakdown: TaxBandBreakdown[] } {
  let totalTax = 0
  const breakdown: TaxBandBreakdown[] = []
  let remainingIncome = income

  for (const band of bands) {
    if (remainingIncome <= 0) break

    // Adjust band limits for personal allowance
    let bandMin = band.min
    let bandMax = band.max

    // For tax calculation, we need to account for personal allowance
    if (band.rate === 0) {
      // Personal allowance band
      const taxableInBand = Math.min(remainingIncome, personalAllowance)
      if (taxableInBand > 0) {
        breakdown.push({
          band: band.name,
          rate: band.rate,
          taxableAmount: taxableInBand,
          tax: 0,
        })
        remainingIncome -= taxableInBand
      }
      continue
    }

    // For taxed bands, calculate the taxable amount in this band
    const bandSize = bandMax - bandMin + 1
    const taxableInBand = Math.min(remainingIncome, bandSize)

    if (taxableInBand > 0) {
      const taxForBand = taxableInBand * band.rate
      totalTax += taxForBand
      breakdown.push({
        band: band.name,
        rate: band.rate,
        taxableAmount: taxableInBand,
        tax: taxForBand,
      })
      remainingIncome -= taxableInBand
    }
  }

  return { tax: totalTax, breakdown }
}

function calculateMarginalRate(grossSalary: number, region: Region, noNI: boolean): number {
  const taxBands = region === 'scotland' ? SCOTLAND_TAX_BANDS : ENGLAND_TAX_BANDS

  // Find the current tax band
  let taxRate = 0
  for (const band of taxBands) {
    if (grossSalary >= band.min && grossSalary <= band.max) {
      taxRate = band.rate
      break
    }
  }

  // Add NI if applicable
  let niRate = 0
  if (!noNI) {
    for (const band of NI_BANDS) {
      if (grossSalary >= band.min && grossSalary <= band.max) {
        niRate = band.rate
        break
      }
    }
  }

  // 60% effective rate in the £100k-£125,140 band due to PA taper
  if (grossSalary > 100000 && grossSalary <= 125140) {
    // Personal allowance taper effectively adds 20% (or 19-48% for Scotland)
    const baseTaxRate = region === 'scotland' ? 0.45 : 0.40
    return (baseTaxRate * 1.5 + niRate) * 100 // 60% tax + NI
  }

  return (taxRate + niRate) * 100
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatCurrencyPrecise(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function getTaxBandInfo(region: Region) {
  if (region === 'scotland') {
    return {
      title: 'Scottish Income Tax Rates 2025/26',
      bands: [
        { range: 'Up to £12,570', rate: '0%' },
        { range: '£12,571 - £15,397', rate: '19%' },
        { range: '£15,398 - £27,491', rate: '20%' },
        { range: '£27,492 - £43,662', rate: '21%' },
        { range: '£43,663 - £75,000', rate: '42%' },
        { range: '£75,001 - £125,140', rate: '45%' },
        { range: 'Over £125,140', rate: '48%' },
      ],
    }
  }

  return {
    title: 'UK Income Tax Rates 2025/26',
    bands: [
      { range: 'Up to £12,570', rate: '0%' },
      { range: '£12,571 - £50,270', rate: '20%' },
      { range: '£50,271 - £125,140', rate: '40%' },
      { range: 'Over £125,140', rate: '45%' },
    ],
  }
}

export function getNIBandInfo() {
  return {
    title: 'National Insurance Rates 2025/26',
    bands: [
      { range: 'Up to £12,570', rate: '0%' },
      { range: '£12,571 - £50,270', rate: '8%' },
      { range: 'Over £50,270', rate: '2%' },
    ],
  }
}

export function getStudentLoanInfo() {
  return [
    { plan: 'Plan 1', threshold: '£24,990', rate: '9%', description: 'Started before Sept 2012 (England/Wales) or in Scotland/NI' },
    { plan: 'Plan 2', threshold: '£27,295', rate: '9%', description: 'Started Sept 2012 or later (England/Wales)' },
    { plan: 'Plan 4', threshold: '£31,395', rate: '9%', description: 'Scottish students' },
    { plan: 'Plan 5', threshold: '£25,000', rate: '9%', description: 'Started Aug 2023 or later (England)' },
    { plan: 'Postgraduate', threshold: '£21,000', rate: '6%', description: 'Postgraduate Loan' },
  ]
}
