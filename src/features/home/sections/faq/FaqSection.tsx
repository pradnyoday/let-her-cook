"use client"
import * as React from 'react'
import { Container } from '@/design-system/ui/container'
import { Heading } from '@/design-system/ui/heading'
import { Briefcase, GraduationCap, HeartHandshake, Users } from 'lucide-react'

const audience = [
  { title: 'Working Couples', desc: 'Save time and enjoy homely meals daily.', icon: Briefcase },
  { title: 'Students', desc: 'Nutritious and affordable home-cooked food.', icon: GraduationCap },
  { title: 'Families', desc: 'Healthy meals for your loved ones.', icon: Users },
  { title: 'Elderly People', desc: 'Hygienic, light and healthy home-cooked meals.', icon: HeartHandshake },
]

export const FaqSection: React.FC = () => {
  return (
    <section id="for-cooks" className="bg-[#fffdf7] py-16 md:py-20">
      <Container>
        <div className="text-center mb-10">
          <Heading size="md" className="text-primary">Perfect For</Heading>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audience.map((a) => {
            const Icon = a.icon
            return (
              <div key={a.title} className="rounded-2xl border border-[#ece7dc] bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-[#f8f3e9] flex items-center justify-center text-deep-green"><Icon size={26} /></div>
                <h3 className="text-lg font-semibold text-text-primary">{a.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{a.desc}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default FaqSection
