"use client"
import * as React from 'react'
import { Container } from '@/design-system/ui/container'
import { Heading } from '@/design-system/ui/heading'
import { CheckCircle2, Gift } from 'lucide-react'

const plans = [
  { title: '1 Time Cooking', subtitle: 'Perfect for trying our service', price: '₹1,200', cta: 'Get Started', features: ['Breakfast / Lunch / Dinner', 'For 2+ Family Members', 'Cook Provided', 'Hygienic Home Cooking'] },
  { title: '2 Times Cooking', subtitle: 'Breakfast + Lunch or Lunch + Dinner', price: '₹2,200', cta: 'Get Started', popular: true, features: ['2 Times Cooking Daily', 'For 2+ Family Members', 'Cook Provided', 'Backup Support'] },
  { title: 'Custom Plan', subtitle: 'Tailored to your family needs', price: 'Custom Pricing', cta: 'Talk to Us', features: ['Flexible Meal Plan', 'Custom Family Size', 'Cook Provided', 'Backup Support'] },
]

export const PricingSection: React.FC = () => {
  return (
    <section className="bg-[#fffdf7] py-16 md:py-20">
      <Container>
        <div className="text-center mb-10">
          <Heading size="md" className="text-primary">Simple & Affordable Plans</Heading>
          <p className="mt-2 text-text-secondary">Choose a plan that fits your family&apos;s needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.title} className="relative rounded-2xl border border-[#e9e1d1] bg-white p-6 shadow-sm">
              {p.popular ? <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-orange-500 px-4 py-1 text-xs font-semibold text-white">MOST POPULAR</div> : null}
              <h3 className="text-3xl font-heading text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{p.subtitle}</p>
              <p className="mt-5 text-4xl font-bold text-primary">{p.price}<span className="ml-1 text-base font-medium text-text-secondary">/month</span></p>
              <button className={`mt-5 h-11 w-full rounded-xl font-medium text-white ${p.popular ? 'bg-orange-500' : 'bg-deep-green'}`}>{p.cta}</button>
              <ul className="mt-5 space-y-2">
                {p.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-text-secondary"><CheckCircle2 size={16} className="text-deep-green" />{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-[#f2dfb9] bg-[#fff5dd] px-5 py-4 md:px-8 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3 text-orange-600 font-semibold text-xl"><Gift size={24} /> First 30 Bookings Get 2 Days Free Service!</div>
          <button className="h-11 rounded-xl bg-orange-500 px-6 text-white font-medium">Book on WhatsApp</button>
        </div>
      </Container>
    </section>
  )
}

export default PricingSection
