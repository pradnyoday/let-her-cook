import * as React from 'react'
import { Container } from '@/design-system/ui/container'

const INSTAGRAM_LINK = 'https://www.instagram.com/lethercook_official/'
const WHATSAPP_LINK = 'https://wa.me/message/NERRPQY2Y2IHI1'
const INSTAGRAM_ICON = 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png'
const WHATSAPP_ICON = 'https://cdn-icons-png.flaticon.com/512/733/733585.png'

export const FooterSection: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1c1b1b] text-white">
      <Container>
        <div id="areas-we-serve" className="py-5 border-b border-white/10 text-sm text-white/85 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div>Pune & Nearby Areas</div>
          <a href="tel:+917028219690">+91 70282 19690</a>
          <div>Mon - Sun: 7 AM - 9 PM</div>
        </div>
        <div className="py-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="font-heading text-2xl">Let Her Cook</div>
          <div className="text-sm text-white/80">© 2026 Let Her Cook. All rights reserved.</div>
          <div className="flex items-center gap-4 text-white/80">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition hover:opacity-90"
            >
              <img src={INSTAGRAM_ICON} alt="" className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition hover:opacity-90"
            >
              <img src={WHATSAPP_ICON} alt="" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default FooterSection
