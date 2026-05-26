"use client"
import * as React from 'react'
import { Container } from '@/design-system/ui/container'
import { Heading } from '@/design-system/ui/heading'
import { ChefHat, Clock3, ShieldCheck, Users } from 'lucide-react'

const items = [
  { title: 'Verified & Trained Cooks', description: 'Police verified & experienced cooks for your peace of mind.', icon: ChefHat },
  { title: 'Hygienic Cooking', description: 'Clean, safe & healthy meals cooked in your kitchen.', icon: ShieldCheck },
  { title: 'On-Time, Every Time', description: 'Punctual & reliable service you can count on.', icon: Clock3 },
  { title: 'Backup Cook Support', description: 'Replacement guarantee in case of any emergency.', icon: Users },
]

export const TrustSection: React.FC = () => {
  return (
    <section className="bg-white py-14 md:py-16 border-y border-[#eee8dd]">
      <Container>
        <div className="text-center mb-10">
          <Heading size="md" className="text-primary text-4xl md:text-5xl">Why Families Trust Us</Heading>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => {
            const Icon = it.icon
            return (
              <div key={it.title} className={`px-6 py-4 text-center ${idx !== items.length - 1 ? 'lg:border-r lg:border-[#ece6d9]' : ''}`}>
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#f7f1e2] flex items-center justify-center text-deep-green">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl md:text-[32px] leading-tight font-semibold text-primary">{it.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{it.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default TrustSection
