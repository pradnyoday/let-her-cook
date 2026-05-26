import Container from "@/design-system/ui/container/Container";
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full bg-cream py-3 md:py-4">
      <Container>
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/branding/logo.png" alt="logo" width={128} height={68} className="h-11 w-auto md:h-14" />
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-[#24302b]">
            <a href="#" className="text-primary border-b-2 border-orange-400 pb-1">Home</a>
            <a href="#">How It Works</a>
            <a href="#">Pricing</a>
            <a href="#">Why Us</a>
            <a href="#">For Cooks</a>
            <a href="#">Areas We Serve</a>
            <a href="#">Contact</a>
          </nav>

          <button className="hidden md:flex h-10 items-center gap-2 rounded-xl bg-deep-green px-4 text-white text-sm font-medium">
            <MessageCircle size={18} /> Book on WhatsApp
          </button>
        </div>
      </Container>
    </header>
  )
}
