"use client"
import * as React from 'react'
import Container from "@/design-system/ui/container/Container";
import Image from 'next/image'
import { Menu, MessageCircle, X } from 'lucide-react'
import { withBasePath } from '@/shared/utils/withBasePath'

const WHATSAPP_LINK = 'https://wa.me/message/NERRPQY2Y2IHI1'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    { label: 'Home', href: withBasePath('/#home') },
    { label: 'How It Works', href: withBasePath('/#how-it-works') },
    { label: 'Pricing', href: withBasePath('/#pricing') },
    { label: 'Why Us', href: withBasePath('/#why-us') },
    { label: 'Contact', href: withBasePath('/#contact') },
  ]

  return (
    <header className="w-full bg-cream pt-10 pb-3 md:py-4">
      <Container>
        <div className="relative flex items-center justify-end lg:justify-between">
          <a href={withBasePath('/')} className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 lg:static lg:left-auto lg:translate-x-0">
            <Image src={withBasePath('/branding/logo.svg')} alt="logo" className="h-32 w-auto sm:h-48 md:h-36" />
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-[#24302b]">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={item.label === 'Home' ? 'text-primary border-b-2 border-orange-400 pb-1' : ''}>
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex h-10 items-center gap-2 rounded-xl bg-deep-green px-4 text-white text-sm font-medium"
          >
            <MessageCircle size={18} /> Book on WhatsApp
          </a>

          <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#d4c8b8] bg-white text-[#24302b]"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen ? (
          <div className="lg:hidden mt-3 rounded-xl border border-[#e2d8ca] bg-white p-4 shadow-lg">
            <nav className="flex flex-col gap-3 text-[15px] font-medium text-[#24302b]">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-deep-green px-4 text-white text-sm font-medium"
            >
              <MessageCircle size={18} /> Book on WhatsApp
            </a>
          </div>
        ) : null}
      </Container>
    </header>
  )
}
