"use client"
import * as React from 'react'
import { Card } from '@/design-system/ui/card'
import { cn } from '@/design-system/utils/cn'

type Props = {
  title: string
  description: string
  icon?: React.ReactNode
}

export const FeatureCard: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <Card className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-lg bg-soft-amber flex items-center justify-center text-deep-green">{icon}</div>
      <div>
        <h3 className="font-heading text-lg md:text-xl text-text-primary">{title}</h3>
        <p className="text-text-secondary mt-1 text-sm md:text-base">{description}</p>
      </div>
    </Card>
  )
}

export default FeatureCard
