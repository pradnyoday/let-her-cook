import * as React from 'react'
import { Card } from '@/design-system/ui/card'

type Props = {
  value: string
  label: string
}

export const StatCard: React.FC<Props> = ({ value, label }) => {
  return (
    <Card className="p-4 text-center">
      <div className="text-2xl font-heading text-deep-green">{value}</div>
      <div className="text-text-secondary text-sm mt-1">{label}</div>
    </Card>
  )
}

export default StatCard
