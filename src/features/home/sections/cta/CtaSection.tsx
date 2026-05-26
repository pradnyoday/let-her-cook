"use client"
import * as React from 'react'
import { Container } from '@/design-system/ui/container'

export const CtaSection: React.FC = () => {
  return (
    <section className="bg-white pb-12 md:pb-16">
      <Container>
        <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-r from-[#0f612f] via-[#1f7b3f] to-[#0a4f25] text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="font-heading text-4xl md:text-5xl leading-tight">Good Food. Happy Family.<br /><span className="text-orange-400">Start Your Journey Today!</span></h3>
            <p className="mt-3 text-white/90 text-sm md:text-base">Verified Cooks • Hygienic Cooking • On-Time Service • Backup Support</p>
          </div>
          <div className="rounded-xl bg-white/10 border border-white/20 px-6 py-5 text-center">
            <p className="text-sm text-white/90">Scan to Book on WhatsApp</p>
            <div className="mt-3 h-24 w-24 bg-white rounded-md mx-auto" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CtaSection
