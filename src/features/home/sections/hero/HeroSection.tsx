"use client";

import Container from "@/design-system/ui/container/Container";
import Button from "@/design-system/ui/button/Button";
import { withBasePath } from '@/shared/utils/withBasePath'

const WHATSAPP_LINK = 'https://wa.me/message/NERRPQY2Y2IHI1'
const PHONE_LINK = 'tel:+917028219690'

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-20 lg:py-28">
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-8">

            <div className="inline-flex items-center gap-2 rounded-full bg-[#fff0e5] px-5 py-2 text-sm font-medium text-[#ff6b00]">
              Pune’s Most Trusted Home Cook Service
            </div>

            <div className="space-y-4">

              <h1
                className="
                text-5xl
                md:text-6xl
                lg:text-7xl
                leading-[1.05]
                font-bold
                tracking-tight
                text-[#1f1f1f]
                "
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                Homely Food,
                <br />

                <span className="text-[#ff6b00]">
                  Made with Love.
                </span>

                <br />

                Every Single Day.
              </h1>

              <p className="max-w-[580px] text-lg leading-relaxed text-[#5f5f5f]">
                Verified & trained home cooks • Hygienic cooking • On-time
                service • Backup support
              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <Button className="px-8" onClick={() => window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer')}>
                Book on WhatsApp
              </Button>

              <a
                href={PHONE_LINK}
                className="inline-flex h-12 items-center rounded-full border border-[#1f5c3f] px-8 text-sm font-medium text-[#1f5c3f] transition-all duration-300 hover:bg-[#1f5c3f] hover:text-white md:text-base"
              >
                Call Now
              </a>

            </div>

            <div className="flex flex-wrap gap-8 pt-4 text-sm">

              <div className="flex items-center gap-2">
                ✓ Hygienic kitchens
              </div>

              <div className="flex items-center gap-2">
                ✓ Trusted cooks
              </div>

              <div className="flex items-center gap-2">
                ✓ Flexible timings
              </div>

              <div className="flex items-center gap-2">
                ✓ Punctual service
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div
              className="
              relative
              mx-auto
              max-w-[520px]
              overflow-hidden
              rounded-[36px]
              border
              border-[#ebe3d9]
              bg-white
              p-4
              shadow-2xl
              "
            >

              <img
                src={withBasePath('/hero/home-cook.png')}
                alt="Home Cook"
                className="
                aspect-[4/5]
                w-full
                rounded-[28px]
                object-cover
                "
              />

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
