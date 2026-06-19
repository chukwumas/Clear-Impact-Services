/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

// STYLIZED HIGH-FIDELITY VECTOR CORE COMPANY LOGOS

export function SidmachLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 transition-opacity ${className}`}>
      <svg 
        className="h-[20px] md:h-[24px] w-auto max-w-full shrink-0" 
        viewBox="0 0 390 78" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        aria-label="Sidmach Technologies"
      >
        <defs>
          <mask id="sidmach-logo-globe-mask-unique">
            {/* Base white background - everything white inside the mask is opaque */}
            <rect x="300" y="0" width="100" height="78" fill="#FFFFFF" />
            {/* The black shapes inside the mask carve out transparent hollow gaps */}
            
            {/* 1. Horizontal notch on the left side of the sphere */}
            <rect x="304" y="32" width="46" height="14" fill="#000000" rx="1.5" />
            
            {/* 2. Delicate orbital slicing gap on the right */}
            <path d="M 353 10 A 28 28 0 0 1 353 68" fill="none" stroke="#000000" strokeWidth="5.5" strokeLinecap="round" />
          </mask>
        </defs>
        
        {/* Core wordmark in official Sidmach Deep Green */}
        <g fill="#116936">
          {/* S */}
          <path d="M5 56.4c8 10 20.4 11.6 28.5 7.1C41.6 57.1 43 47.9 33.6 44.2C24.3 40.5 8 39.5 2 34.6C-4 29.7 -4.4 19.3 5 11.4c9.4-7.9 26.3-8.4 36-2C45.2 12.3 47.2 16.4 47.7 20H38.5c-.5-1.5-1.8-3.5-3.3-4.5c-4.4-2.8-12.7-2.3-16.7.7c-4 3-3.6 7.8 0 9.8c3.6 2 13 3 19 5.8c6 2.8 11.8 7.3 12.4 15.6c.7 8.3-4.4 16.8-14 20.4C26.3 71.4 12 70.3 5 63.8v-7.4z" />
          {/* I */}
          <path d="M54.5 12h8.5v56.5h-8.5V12z" />
          {/* D */}
          <path d="M72 12h20c15 0 26 8.5 26 28.2c0 19.5-11 28.3-26 28.3H72V12zm20 48.5c10 0 17.5-5 17.5-20.3c0-15-7.5-20.2-17.5-20.2H80.5v40.5H92z" />
          {/* M */}
          <path d="M125 12h11.5l14 24.5l14-24.5H176v56.5h-8.5V28.5l-16.5 29H150l-16.5-29V68.5H125V12z" />
          {/* A */}
          <path d="M185 12h12l18.5 56.5h-9L202 52.5h-18l-4.5 16h-9L185 12zm2.5 32h12l-6-20.5l-6 20.5z" />
          {/* C */}
          <path d="M255 40.5c0-18.5-10.5-29-25-29c-14.5 0-25 10.5-25 29c0 18.5 10.5 29 25 29c10 0 17.5-4 22.5-9.5l-6-5.5c-4 4.5-10 7-16.5 7c-11 0-16.5-7.5-16.5-21c0-13.5 5.5-21 16.5-21c6.5 0 12.5 2.5 16.5 7l6-5.5z" />
          {/* H */}
          <path d="M265.5 12H274v24h18.5v-24H301v56.5h-8.5V44.5H274v24h-8.5V12z" />
        </g>
        
        {/* Core dynamic orb/globe in deep corporate Navy Blue, with transparent cuts matching official design */}
        <circle cx="348" cy="39" r="32" fill="#1C2E52" mask="url(#sidmach-logo-globe-mask-unique)" />
      </svg>
    </div>
  );
}

export function BritishCouncilLogo({ className = "h-7" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="grid grid-cols-2 gap-0.5 bg-[#002F6C] p-2 rounded">
        <div className="w-1.5 h-1.5 rounded-full bg-[#00C5FF]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#00C5FF]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#00C5FF]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#00C5FF]" />
      </div>
      <div className="flex flex-col text-left">
        <span className="font-sans font-extrabold text-[10.5px] tracking-wider leading-none text-[#002F6C] uppercase">
          BRITISH
        </span>
        <span className="font-sans font-extrabold text-[10.5px] tracking-wider leading-none text-[#002F6C] uppercase">
          COUNCIL
        </span>
        <span className="text-[6px] font-mono text-gray-500 tracking-wider leading-none uppercase">
          SUPPORT AFFILIATE
        </span>
      </div>
    </div>
  );
}

export function SmartHostLogo({ className = "h-7" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg className="h-[26px] w-auto shrink-0 max-w-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#0A1128" />
        <path d="M24 10l12 4.5v11.5c0 7.3-5.1 14.1-12 16c-6.9-1.9-12-8.7-12-16V14.5L24 10z" fill="#1E3A8A" />
        <path d="M24 10l-12 4.5v11.5c0 7.3 5.1 14.1 12 16h0.5V10h-0.5z" fill="#DC2626" opacity="0.85" />
        <circle cx="24" cy="22" r="5" fill="#FFF" />
        <path d="M24 19v4M22 22h4" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="font-sans font-extrabold text-[11px] tracking-tight leading-none text-[#0A1128] uppercase">
          SMART-HOST
        </span>
        <span className="text-[6.5px] font-mono text-red-600 tracking-wider leading-none uppercase mt-0.5">
          CYBER SECURITY (USA)
        </span>
      </div>
    </div>
  );
}

export function NUSAEmblem({ className = "h-7" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg className="h-[26px] w-auto shrink-0 max-w-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#0B1A30" />
        <circle cx="24" cy="24" r="18" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M12 24h24M12 28h24M12 32h24" stroke="#EF4444" strokeWidth="1.5" />
        <rect x="12" y="15" width="12" height="11" fill="#1E3A8A" />
        <circle cx="15" cy="18" r="1" fill="#FFF" />
        <circle cx="21" cy="18" r="1" fill="#FFF" />
        <circle cx="15" cy="23" r="1" fill="#FFF" />
        <circle cx="21" cy="23" r="1" fill="#FFF" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="font-sans font-extrabold text-[11px] tracking-wider leading-none text-[#0B1A30] uppercase">
          NETWORK USA
        </span>
        <span className="text-[6.5px] font-mono text-[#D4AF37] tracking-wider leading-none uppercase mt-0.5">
          AFFILIATE REGISTRY
        </span>
      </div>
    </div>
  );
}

// Helper variable for generating the official WAEC starry seal background points (32 spikes)
const generateWaecStarburstPoints = () => {
  const spikeLengths = [
    25.5, 20.5, 26.5, 19.5, 24.5, 18.5, 23.5, 20.5, 
    26.5, 17.5, 25.5, 19.5, 24.5, 18.5, 22.5, 20.5, 
    26.5, 17.5, 24.5, 19.5, 25.5, 21.5, 23.5, 18.5, 
    26.5, 20.5, 24.5, 19.5, 21.5, 18.5, 23.5, 20.5
  ];
  const points: string[] = [];
  const numPoints = 64; // 32 outer, 32 inner
  for (let i = 0; i < numPoints; i++) {
    const angle = (i * Math.PI) / 32;
    let r = 16.0; // base inner radius
    if (i % 2 === 0) {
      r = spikeLengths[(i / 2) % spikeLengths.length];
    }
    const x = 27 + r * Math.cos(angle);
    const y = 27 + r * Math.sin(angle);
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return points.join(" ");
};

const WAEC_STARBURST_POINTS = generateWaecStarburstPoints();

export function WaecEmblemLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg className="h-[28px] w-auto shrink-0 max-w-full" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Starburst yellow/gold backdrop */}
        <polygon points={WAEC_STARBURST_POINTS} fill="#F9D413" stroke="#D4AF37" strokeWidth="0.5" />
        {/* Inner Purple solid circle */}
        <circle cx="27" cy="27" r="18" fill="#3B156B" />
        {/* Gold double line ring */}
        <circle cx="27" cy="27" r="14" fill="none" stroke="#F9D413" strokeWidth="1" />
        <circle cx="27" cy="27" r="11" fill="none" stroke="#F9D413" strokeWidth="0.8" opacity="0.8" />
        {/* WA EC central stacked letters */}
        <text x="27" y="24" fill="#F9D413" fontSize="8" fontWeight="bold" fontFamily="Georgia, serif" textAnchor="middle">wa</text>
        <text x="27" y="34" fill="#F9D413" fontSize="8" fontWeight="bold" fontFamily="Georgia, serif" textAnchor="middle">ec</text>
      </svg>
      <div className="flex flex-col text-left">
        <span className="font-sans font-extrabold text-[9.5px] tracking-normal leading-none text-[#3B156B] uppercase">
          WEST AFRICAN
        </span>
        <span className="font-sans font-bold text-[8px] tracking-normal leading-tight text-gray-500 uppercase">
          EXAMINATIONS COUNCIL
        </span>
      </div>
    </div>
  );
}

export function WaecEStudyLogo({ className = "h-11" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg className="h-full w-auto shrink-0 max-w-full" viewBox="0 0 156 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 1. WAEC Starburst Seal */}
        <g transform="translate(0, 0)">
          <polygon points={WAEC_STARBURST_POINTS} fill="#F9D413" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="27" cy="27" r="18" fill="#3B156B" />
          <circle cx="27" cy="27" r="14" fill="none" stroke="#F9D413" strokeWidth="1" />
          <circle cx="27" cy="27" r="11" fill="none" stroke="#F9D413" strokeWidth="0.8" opacity="0.8" />
          <text x="27" y="24" fill="#F9D413" fontSize="8" fontWeight="bold" fontFamily="Georgia, serif" textAnchor="middle">wa</text>
          <text x="27" y="34" fill="#F9D413" fontSize="8" fontWeight="bold" fontFamily="Georgia, serif" textAnchor="middle">ec</text>
        </g>

        {/* 2. eStudy branded elements exactly matching official attached image style */}
        <g transform="translate(4, 0)">
          {/* Delicate blue swoop arching over the lowercase 'e' */}
          <path d="M 54,16 C 59,12 67,12 73,17" stroke="#1D4ED8" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          
          {/* Lowercase circular 'e' in bold eStudy orange */}
          <text x="63" y="38" fill="#FF5500" fontSize="29" fontWeight="900" fontFamily='"Inter", "Helvetica Neue", sans-serif' textAnchor="middle">e</text>
          
          {/* The term 'study' with current theme color adaptive support */}
          <text x="76" y="36.5" className="fill-current text-[#0B2545] dark:fill-white" fontSize="22.5" fontWeight="900" fontFamily='"Inter", "Helvetica Neue", sans-serif'>study</text>
        </g>
      </svg>
    </div>
  );
}

export function WaecVerifyLogo({ className = "h-11" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg className="h-full w-auto shrink-0 max-w-full" viewBox="0 0 156 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 1. WAEC Starburst Seal */}
        <g transform="translate(0, 0)">
          <polygon points={WAEC_STARBURST_POINTS} fill="#F9D413" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="27" cy="27" r="18" fill="#3B156B" />
          <circle cx="27" cy="27" r="14" fill="none" stroke="#F9D413" strokeWidth="1" />
          <circle cx="27" cy="27" r="11" fill="none" stroke="#F9D413" strokeWidth="0.8" opacity="0.8" />
          <text x="27" y="24" fill="#F9D413" fontSize="8" fontWeight="bold" fontFamily="Georgia, serif" textAnchor="middle">wa</text>
          <text x="27" y="34" fill="#F9D413" fontSize="8" fontWeight="bold" fontFamily="Georgia, serif" textAnchor="middle">ec</text>
        </g>

        {/* 2. Verify branded elements with purple V-check, sky-blue 'erify' and gold dot on the 'i' */}
        <g transform="translate(4, 0)">
          {/* Purple Check Checkmark V */}
          <path d="M 52,24 L 59,34 L 71,15" stroke="#3B156B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          
          {/* 'er' text in sky-blue */}
          <text x="74" y="36.5" fill="#38BDF8" fontSize="22.5" fontWeight="900" fontFamily='"Inter", "Helvetica Neue", sans-serif'>er</text>
          
          {/* Custom 'i' stem to perfectly align the yellow dot exactly like official logo */}
          <rect x="94.5" y="24" width="3" height="12.5" fill="#38BDF8" rx="0.5" />
          
          {/* Bright yellow dot for the 'i' */}
          <circle cx="96" cy="18.5" r="2.5" fill="#F9D413" />
          
          {/* 'fy' text in sky-blue */}
          <text x="99.5" y="36.5" fill="#38BDF8" fontSize="22.5" fontWeight="900" fontFamily='"Inter", "Helvetica Neue", sans-serif'>fy</text>
        </g>
      </svg>
    </div>
  );
}

export function CislLogo({ className = "h-12", darkForce = false }: { className?: string, darkForce?: boolean }) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg className="h-full w-auto shrink-0" viewBox="0 0 160 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top Horizontal line */}
        {/* Left black line: black on light background, white/currentColor otherwise */}
        <rect x="5" y="8" width="60" height="4" rx="1.5" className={darkForce ? "fill-white" : "fill-slate-900 dark:fill-white"} />
        
        {/* Middle Orange/Coral Dot */}
        <circle cx="75" cy="10" r="7.5" fill="#EF5A3F" />
        
        {/* Right grey line */}
        <rect x="85" y="8" width="70" height="4" rx="1.5" fill="#A3A3A3" />
        
        {/* Lowercase wordmark "cisl" */}
        <text 
          x="80" 
          y="44" 
          className={darkForce ? "fill-white" : "fill-slate-900 dark:fill-white"}
          fontSize="34" 
          fontWeight="900" 
          fontFamily='"Inter", "Arial Black", "Helvetica Neue", sans-serif' 
          textAnchor="middle" 
          letterSpacing="2.5"
        >
          cisl
        </text>
      </svg>
    </div>
  );
}

