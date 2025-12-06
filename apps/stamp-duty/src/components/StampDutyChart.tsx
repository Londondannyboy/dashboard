'use client'

import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import type { StampDutyResult } from '../lib/stamp-duty'
import { formatCurrency } from '../lib/stamp-duty'

interface StampDutyChartProps {
  result: StampDutyResult
}

const COLORS = ['#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899']
const SURCHARGE_COLORS = {
  additional: '#f59e0b',
  nonUk: '#ef4444',
}

export function StampDutyPieChart({ result }: StampDutyChartProps) {
  // Build pie data from breakdown + surcharges
  const pieData = [
    ...result.breakdown
      .filter(b => b.tax > 0)
      .map(b => ({
        name: b.band,
        value: b.tax,
        rate: `${(b.rate * 100).toFixed(0)}%`,
      })),
  ]

  if (result.additionalSurcharge > 0) {
    pieData.push({
      name: 'Additional Property Surcharge',
      value: result.additionalSurcharge,
      rate: '5%',
    })
  }

  if (result.nonUkSurcharge > 0) {
    pieData.push({
      name: 'Non-UK Resident Surcharge',
      value: result.nonUkSurcharge,
      rate: '2%',
    })
  }

  if (pieData.length === 0) {
    return (
      <div className="flex items-center justify-center h-[250px] text-slate-400">
        No stamp duty payable
      </div>
    )
  }

  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {pieData.map((entry, index) => {
              let color = COLORS[index % COLORS.length]
              if (entry.name.includes('Additional')) color = SURCHARGE_COLORS.additional
              if (entry.name.includes('Non-UK')) color = SURCHARGE_COLORS.nonUk
              return <Cell key={`cell-${index}`} fill={color} />
            })}
          </Pie>
          <Tooltip
            formatter={(value: number) => formatCurrency(value)}
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Legend
            wrapperStyle={{ fontSize: '11px' }}
            formatter={(value) => <span className="text-slate-300">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export function StampDutyBarChart({ result }: StampDutyChartProps) {
  // Build bar data showing tax bands
  const barData = result.breakdown.map((b, i) => ({
    band: b.band.replace('£', '').replace(' to ', '-').replace('Up to ', '0-').replace('Above ', '>'),
    amount: b.taxableAmount,
    tax: b.tax,
    rate: b.rate,
  }))

  if (barData.length === 0) {
    return (
      <div className="flex items-center justify-center h-[250px] text-slate-400">
        No stamp duty payable
      </div>
    )
  }

  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barData} layout="vertical">
          <XAxis
            type="number"
            tickFormatter={(v) => `£${(v / 1000).toFixed(0)}k`}
            tick={{ fill: '#94a3b8', fontSize: 11 }}
          />
          <YAxis
            type="category"
            dataKey="band"
            width={100}
            tick={{ fill: '#94a3b8', fontSize: 10 }}
          />
          <Tooltip
            formatter={(value: number, name: string) => [
              formatCurrency(value),
              name === 'amount' ? 'Taxable Amount' : 'Tax Due',
            ]}
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Bar dataKey="amount" fill="#6366f1" name="Taxable Amount" radius={[0, 4, 4, 0]} />
          <Bar dataKey="tax" fill="#a855f7" name="Tax Due" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

interface ComparisonChartProps {
  comparisons: {
    type: string
    label: string
    tax: number
  }[]
}

export function ComparisonChart({ comparisons }: ComparisonChartProps) {
  return (
    <div className="w-full h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={comparisons}>
          <XAxis
            dataKey="label"
            tick={{ fill: '#94a3b8', fontSize: 11 }}
          />
          <YAxis
            tickFormatter={(v) => `£${(v / 1000).toFixed(0)}k`}
            tick={{ fill: '#94a3b8', fontSize: 11 }}
          />
          <Tooltip
            formatter={(value: number) => formatCurrency(value)}
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Bar dataKey="tax" fill="#6366f1" radius={[4, 4, 0, 0]}>
            {comparisons.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.type === 'first-time' ? '#10b981' :
                  entry.type === 'standard' ? '#6366f1' :
                  entry.type === 'additional' ? '#f59e0b' :
                  '#ef4444'
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
