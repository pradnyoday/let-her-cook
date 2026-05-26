"use client"
import * as React from 'react'
import { Container } from '@/design-system/ui/container'
import { Heading } from '@/design-system/ui/heading'
import { Star } from 'lucide-react'

const items = [
  { name: 'Neha S.', text: 'The cook is very polite and cooks amazing food. It feels just like homemade by family!' },
  { name: 'Rahul M.', text: 'Very professional service. They provide backup cook also which is very helpful.' },
  { name: 'Priya K.', text: 'Hygienic, tasty and on-time service. Highly recommended for working people.' },
]

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="text-center mb-10">
          <Heading size="md" className="text-primary">What Families Say</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border border-[#ece7dc] bg-white p-6 text-center shadow-sm">
              <p className="text-text-secondary text-base leading-relaxed">“{t.text}”</p>
              <div className="mt-4 flex justify-center gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} className="fill-orange-400 text-orange-400" />)}</div>
              <p className="mt-3 font-medium text-text-primary">- {t.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection
