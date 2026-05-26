"use client"
import * as React from 'react'
import { MessageSquare } from 'lucide-react'

export const FloatingWhatsapp: React.FC = () => {
  return (
    <a aria-label="WhatsApp" href="#" className="fixed bottom-6 right-6 bg-deep-green p-3 rounded-full text-white shadow-lg">
      <MessageSquare />
    </a>
  )
}

export default FloatingWhatsapp
