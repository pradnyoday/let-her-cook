"use client"
import * as React from 'react'
import { Card } from '@/design-system/ui/card'

type Props = {
  name: string
  text: string
  relation?: string
}

export const TestimonialCard: React.FC<Props> = ({ name, text, relation }) => {
  return (
    <Card className="p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#f3efe7] flex items-center justify-center text-deep-green font-semibold">{name.split(' ')[0][0]}</div>
        <div className="text-sm text-text-secondary">{relation}</div>
      </div>
      <p className="text-text-secondary text-base md:text-lg">“{text}”</p>
      <div className="mt-1 text-sm text-deep-green font-medium">— {name}</div>
    </Card>
  )
}

export default TestimonialCard
