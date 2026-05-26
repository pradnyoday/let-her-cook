"use client"
import * as React from 'react'
import { Card } from '@/design-system/ui/card'
import { Button } from '@/design-system/ui/button'

type Props = {
  title: string
  price: string
  features: string[]
  popular?: boolean
}

export const PricingCard: React.FC<Props> = ({ title, price, features }) => {
  return (
    <Card className="p-6 flex flex-col gap-6 relative">
      {/* Popular badge if used via parent */}
      {/* Styling will be applied by parent when needed */}
      <div>
        <h4 className="font-heading text-2xl md:text-3xl text-text-primary">{title}</h4>
        <p className="text-text-secondary mt-1 text-lg md:text-xl">{price}</p>
      </div>
      <ul className="flex-1 space-y-2 mt-2">
        {features.map((f) => (
          <li key={f} className="text-text-secondary text-sm md:text-base">• {f}</li>
        ))}
      </ul>
      <Button variant="primary" className="h-12 px-6 bg-deep-green hover:bg-deep-green-700">Book now</Button>
    </Card>
  )
}

export default PricingCard
