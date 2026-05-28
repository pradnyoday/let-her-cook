"use client"
import * as React from 'react'
import { MessageSquare } from 'lucide-react'

const WHATSAPP_LINK = 'https://wa.me/message/NERRPQY2Y2IHI1'

export const FloatingWhatsapp: React.FC = () => {
  const [isFooterVisible, setIsFooterVisible] = React.useState(false)

  React.useEffect(() => {
    const footer = document.getElementById('contact')
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      aria-label="WhatsApp"
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-[70] bg-deep-green p-3 rounded-full text-white shadow-lg transition-opacity duration-200 ${
        isFooterVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <MessageSquare />
    </a>
  )
}

export default FloatingWhatsapp
