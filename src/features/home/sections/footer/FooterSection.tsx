import * as React from 'react'
import { Container } from '@/design-system/ui/container'

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#1c1b1b] text-white">
      <Container>
        <div className="py-5 border-b border-white/10 text-sm text-white/85 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>Pune & Nearby Areas</div>
          <div>+91 70282 19690</div>
          <div>Mon - Sun: 7 AM - 9 PM</div>
        </div>
        <div className="py-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="font-heading text-2xl">Let Her Cook</div>
          <div className="text-sm text-white/80">© 2026 Let Her Cook. All rights reserved.</div>
          <div className="text-white/80 text-sm">Facebook • Instagram • WhatsApp</div>
        </div>
      </Container>
    </footer>
  )
}

export default FooterSection
