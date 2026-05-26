import './globals.css'
import type { ReactNode } from 'react'
import Navbar from '../shared/navbar/Navbar'
import FloatingWhatsapp from '../shared/floating-whatsapp/FloatingWhatsapp'

export const metadata = {
  title: 'Let Her Cook',
  description: 'Warm home-cooked meals by verified cooks',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto w-full space-y-8 md:space-y-10 pb-8 md:pb-12">{children}</main>
        <FloatingWhatsapp />
      </body>
    </html>
  )
}
