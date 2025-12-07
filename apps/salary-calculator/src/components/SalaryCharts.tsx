'use client'

import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { SalaryResult, formatCurrency } from '../lib/salary-calculator'

const COLORS = {
  net: '#22c55e',
  tax: '#ef4444',
  ni: '#f59e0b',
  pension: '#8b5cf6',
  studentLoan: '#3b82f6',
  postgraduate: '#06b6d4',
}

interface ChartProps {
  result: SalaryResult
}

export function SalaryPieChart({ result }: ChartProps) {
  const data = [
    { name: 'Take Home', value: result.netSalary, color: COLORS.net },
    { name: 'Income Tax', value: result.incomeTax, color: COLORS.tax },
    { name: 'National Insurance', value: result.nationalInsurance, color: COLORS.ni },
    { name: 'Pension', value: result.pensionContribution, color: COLORS.pension },
    { name: 'Student Loan', value: result.studentLoanRepayment, color: COLORS.studentLoan },
    { name: 'Postgraduate Loan', value: result.postgraduateLoanRepayment, color: COLORS.postgraduate },
  ].filter(item => item.value > 0)

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number) => formatCurrency(value)}
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#fff',
          }}
        />
        <Legend
          formatter={(value) => <span style={{ color: '#94a3b8' }}>{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export function TaxBreakdownChart({ result }: ChartProps) {
  const data = result.taxBreakdown
    .filter(band => band.tax > 0)
    .map(band => ({
      name: band.band,
      amount: band.tax,
      rate: `${(band.rate * 100).toFixed(0)}%`,
    }))

  if (data.length === 0) {
    return (
      <div className="text-center text-slate-400 py-8">
        No income tax to pay
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} layout="vertical">
        <XAxis
          type="number"
          tickFormatter={(value) => `£${(value / 1000).toFixed(0)}k`}
          stroke="#64748b"
        />
        <YAxis
          type="category"
          dataKey="name"
          width={100}
          stroke="#64748b"
          tick={{ fill: '#94a3b8', fontSize: 12 }}
        />
        <Tooltip
          formatter={(value: number) => formatCurrency(value)}
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#fff',
          }}
        />
        <Bar dataKey="amount" fill="#ef4444" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function DeductionsBarChart({ result }: ChartProps) {
  const data = [
    { name: 'Income Tax', amount: result.incomeTax, color: COLORS.tax },
    { name: 'NI', amount: result.nationalInsurance, color: COLORS.ni },
    { name: 'Pension', amount: result.pensionContribution, color: COLORS.pension },
    { name: 'Student Loan', amount: result.studentLoanRepayment, color: COLORS.studentLoan },
    { name: 'PG Loan', amount: result.postgraduateLoanRepayment, color: COLORS.postgraduate },
  ].filter(item => item.amount > 0)

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#64748b"
          tick={{ fill: '#94a3b8', fontSize: 11 }}
        />
        <YAxis
          tickFormatter={(value) => `£${(value / 1000).toFixed(0)}k`}
          stroke="#64748b"
        />
        <Tooltip
          formatter={(value: number) => formatCurrency(value)}
          contentStyle={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#fff',
          }}
        />
        <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
