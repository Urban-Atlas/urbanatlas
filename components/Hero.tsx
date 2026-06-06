'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const MotionLink = motion(Link)

// Custom SVG Icons matching screenshot precisely
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.86-1.862-4.331-2.886-6.968-2.887-5.44 0-9.866 4.42-9.869 9.866-.001 1.77.461 3.5 1.338 5.031L1.993 21.848l6.196-1.625-1.542-.924zm11.536-7.14c-.302-.15-1.78-.88-2.057-.98-.277-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-1-.89-1.67-1.99-1.87-2.33-.2-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.59-.48-.51-.68-.52-.17-.01-.38-.01-.58-.01-.2 0-.53.07-.8.37-.28.3-1.07 1.05-1.07 2.56s1.09 2.97 1.24 3.17c.15.2 2.15 3.28 5.21 4.6 1.13.48 2.02.77 2.71.99.76.24 1.46.21 2.01.12.61-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
    </svg>
  )
}

function RedCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FF2D3F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white sm:pt-8 sm:pb-10">
      {/* Visual backdrop gradient to replicate the exact layout proportions */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-b from-[#FFFDFD] to-[#FFF8F8] opacity-60 pointer-events-none z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <div className="flex flex-col md:flex-row lg:grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-8 items-center">
          {/* LEFT SIDE CONTENT */}
          <div className="flex flex-col items-start w-full md:w-[55%] lg:w-full">
            {/* Typography Matched Heading */}
            <h1 className="text-[6.8vw] sm:text-[48px] md:text-[56px] font-extrabold leading-[1.08] text-[#111827] tracking-tight mb-3 whitespace-nowrap">
              Plots. <span className="text-[#FF2D3F]">Sold.</span> Faster.
            </h1>

            {/* Subheading */}
            <p className="text-[3.8vw] sm:text-[16px] text-[#4B5563] leading-[1.5] max-w-lg mb-6 font-medium whitespace-nowrap">
              Genuine buyers. Better deals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-[14px] w-full sm:w-auto mb-6">
              <MotionLink
                href="/submit-plot"
                className="inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-2.5 bg-[#FF2D3F] hover:bg-[#E81F34] text-white rounded-[14px] px-8 py-4 font-extrabold text-[15px] transition-all duration-200 premium-shadow"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Submit Your Plot
                <ArrowRight className="h-4 w-4 stroke-[3]" />
              </MotionLink>
              <MotionLink
                href="/buyer-circle"
                className="inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-2 border-2 border-gray-200 text-[#111827] bg-white rounded-[14px] px-8 py-4 font-bold text-[15px] hover:border-gray-300 transition-all duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366] mr-1" />
                Join Buyer Circle
              </MotionLink>
            </div>

            {/* Trust points with Red Checks */}
            {/* <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {[
                { text: 'Free Submission' },
                { text: 'Authority Plots Only' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-4 py-2 text-[13px] font-extrabold text-[#4B5563] shadow-[0px_2px_8px_rgba(0,0,0,0.01)] hover:border-gray-300 transition-all duration-200 whitespace-nowrap">
                  <RedCheckIcon className="h-4 w-4 text-[#FF2D3F] flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </div> */}

            {/* <div className="mt-5 flex w-full items-center justify-between gap-3 rounded-2xl border border-[#F3F4F6] bg-[#FFFDFD] p-4 lg:hidden">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-xs font-extrabold text-[#111827]">Lucknow Live</span>
              </div>
              <div className="flex flex-wrap justify-end items-center gap-2 text-[11px] font-bold text-[#6B7280]">
                <span><span className="text-[#FF2D3F]">6+</span> Localities</span>
                <span><span className="text-[#FF2D3F]">200+</span> Plots</span>
                <span><span className="text-[#FF2D3F]">500+</span> Buyers</span>
              </div>
            </div> */}
          </div>

          {/* RIGHT SIDE CONTENT - Image containing stats and illustration */}
          <div className="hidden md:flex w-full md:w-[45%] lg:w-full mt-8 md:mt-0 flex-shrink-0 relative z-10">
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[300px] lg:h-[400px] max-w-md lg:max-w-xl mx-auto">
              <Image
                src="/hero-left.png"
                alt="Urban Atlas Plot Stats"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
