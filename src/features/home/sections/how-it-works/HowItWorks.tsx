"use client"
import * as React from 'react'
import { Container } from '@/design-system/ui/container'
import { Heading } from '@/design-system/ui/heading'
import { ArrowRight, ChefHat, ClipboardList, MessageCircleMore, Soup } from 'lucide-react'

const steps = [
  { title: '1. Enquire', desc: 'Share your requirements on WhatsApp or call us.', icon: MessageCircleMore },
  { title: '2. We Understand', desc: 'We understand your needs and suggest the best plan.', icon: ClipboardList },
  { title: '3. Cook Assigned', desc: 'A verified cook is assigned as per your preference.', icon: ChefHat },
  { title: '4. Enjoy Homemade Food', desc: 'Relish healthy, homely meals every single day!', icon: Soup },
]

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-20">
      <Container>
        <div className="text-center mb-10">
          <Heading size="md" className="text-primary">How It Works</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          {steps.map((s, idx) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="text-center relative">
                <div className="mx-auto h-20 w-20 rounded-full bg-[#f8f3e9] border border-[#ece2cf] flex items-center justify-center text-deep-green"><Icon size={32} /></div>
                {idx < steps.length - 1 ? <ArrowRight className="hidden md:block absolute -right-4 top-8 text-[#d8c39e]" size={18} /> : null}
                <h3 className="mt-4 text-xl font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
