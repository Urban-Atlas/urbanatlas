'use client'

import React from 'react'
import Image from 'next/image'

export function Logo({ className = '', showTagline = true }: { className?: string; showTagline?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex-shrink-0 h-11 w-11 overflow-hidden rounded-full bg-[#FF2D3F] ring-2 ring-white shadow-sm">
        <Image
          src="/urban-atlas-logo.png"
          alt="Urban Atlas"
          fill
          sizes="44px"
          className="object-cover"
          priority
        />
      </div>

      {/* Brand Text Stack */}
      <div className="flex flex-col justify-center leading-none">
        <span className="font-extrabold text-[19px] text-[#111827] tracking-tight">
          Urban Atlas
        </span>
        {showTagline && (
          <span className="text-[9px] font-medium text-[#6B7280] tracking-wider mt-0.5 uppercase">
            Lucknow Real Estate Intelligence
          </span>
        )}
      </div>
    </div>
  )
}
