/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Users, 
  BookOpen, 
  MessageSquare, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Building2, 
  Compass, 
  Terminal, 
  ArrowUpRight 
} from 'lucide-react';
import { PageId } from '../types';
import { CONTACT_INFO } from '../data';
import { 
  SidmachLogo, 
  BritishCouncilLogo, 
  SmartHostLogo, 
  NUSAEmblem, 
  WaecEmblemLogo,
  WaecEStudyLogo,
  WaecVerifyLogo
} from '../components/PartnerLogos';

interface HomeViewProps {
  setActivePage: (page: PageId) => void;
  onOpenInquiry: (service?: string) => void;
  theme?: 'light' | 'dark';
}

export default function HomeView({ setActivePage, onOpenInquiry, theme = 'light' }: HomeViewProps) {
  const [[slide, direction], setSlide] = useState([0, 1]);

  const testimonials = [
    {
      author: "Mrs. Florence Alaba",
      role: "WASSCE & Academic Administration Lead",
      org: "Royal Academy, Port Harcourt",
      quote: "Integrating the WAEC E-Study platform transformed WASSCE mock outcomes in our center. Over 94% of our secondary school candidates cleared their core curriculum on their first trial thanks to the direct mock CBT diagnostics. Tracking student progress has never been more standard.",
      verify: "Educational Partner Outcome Verified"
    },
    {
      author: "Dr. Charles Ibe",
      role: "Director of Capacity Development",
      org: "Ministry of Public Service Reform Office",
      quote: "The Operational Excellence Training delivered by Clear Impact redefined command workflows across our department heads. Administrative bottlenecks and metrics logging lag times were cut by over 45% inside 30 days. An absolute benchmark consulting partner.",
      verify: "Operational Scale Audit Verified"
    },
    {
      author: "Chief Emeka Nze",
      role: "General Committee Chairman & Cultural Patron",
      org: "Imo State Heritage Congress",
      quote: "Co-organizing the Owerri Bongo Cultural Festival alongside Clear Impact Services displayed their elite production values and coordination. They brought corporate integrity, safety, and transparent sponsorship management to an event with over 10,000 visitors.",
      verify: "Cultural Event Direct Log Verified"
    },
    {
      author: "Engr. Chidi Amadi",
      role: "Chief Information Architect & Gold Channel Expert",
      org: "Sidmach Technologies Joint Alliance",
      quote: "As Sidmach's digital deployment liaison, our strategic alliance with Clear Impact to provision computerized school systems and WAEC study software across Rivers State is a massive success. Their technical consulting and cybersecurity readiness are peerless.",
      verify: "Gold Partner Tech Alignment Verified"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(([prevSlide]) => [(prevSlide + 1) % testimonials.length, 1]);
    }, 8500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrevSlide = () => {
    setSlide(([prevSlide]) => [
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1,
      -1
    ]);
  };

  const handleNextSlide = () => {
    setSlide(([prevSlide]) => [(prevSlide + 1) % testimonials.length, 1]);
  };

  // Modern corporate color palette (blending Sidmach green (#116936) & navy (#1C2E52))
  const isDark = theme === 'dark';

  // Slider animation variants for exact horizontal sliding (right to left)
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '120%' : '-120%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '120%' : '-120%',
      opacity: 0
    })
  };

  return (
    <div className="animate-fade-in font-sans selection:bg-[#116936]/10 selection:text-[#116936]">
      
      {/* SECTION 1: HERO CONTAINER (Re-crafted into elegant consistent light corporate aesthetic) */}
      <section 
        id="hero-section"
        className={`relative overflow-hidden py-16 sm:py-24 lg:py-28 transition-colors duration-300 ${
          isDark 
            ? 'bg-[#0F172A] text-white border-b border-slate-800' 
            : 'bg-gradient-to-b from-[#F2F8F4] via-white to-white text-[#1C2E52] border-b border-slate-105'
        }`}
      >
        {/* Subtle decorative mesh screen & dotted vector matrix to convey technological alignment */}
        <div className="absolute inset-0 bg-[radial-gradient(#116936_1px,transparent_1px)] [background-size:2rem_2rem] opacity-[0.06] pointer-events-none"></div>
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#116936]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-24 bottom-12 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left - Text block */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase font-mono border ${
              isDark 
                ? 'bg-[#1E293B]/80 text-[#D4AF37] border-[#D4AF37]/35' 
                : 'bg-[#116936]/10 text-[#116936] border-[#116936]/20'
            }`}>
              <Award className="w-4 h-4 shrink-0 text-[#116936]" /> MULTI-SECTOR SOLUTIONS MATRIX
            </div>
            
            <h1 className="font-sans font-extrabold text-3.5xl sm:text-5xl tracking-tight leading-tight">
              Professional Solutions <br />
              <span className="text-[#116936] font-extrabold relative inline-block">
                With Lasting Impact
                <span className="absolute left-0 bottom-1.5 w-full h-1 bg-[#D4AF37]/45 -z-10"></span>
              </span>
            </h1>
            
            <p className={`text-sm sm:text-base leading-relaxed max-w-xl ${
              isDark ? 'text-slate-350 text-slate-300' : 'text-slate-600 font-medium'
            }`}>
              We coordinate robust corporate capacity programs, deploy the premium WAEC e-Study computerized CBT platform, deliver United States-aligned cybersecurity controls, and orchestrate prestige local cultural and teenage development projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onOpenInquiry()}
                className="bg-[#116936] hover:bg-[#116936]/90 text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded shadow-md transition-all hover:translate-y-[-1px] flex items-center justify-center gap-2 group cursor-pointer"
              >
                Partner with Us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`border font-bold text-xs uppercase tracking-wider py-4 px-8 rounded transition-all cursor-pointer ${
                  isDark 
                    ? 'border-slate-700 hover:border-white text-white bg-slate-800/40' 
                    : 'border-slate-200 hover:border-[#116936] text-slate-700 bg-white shadow-sm hover:bg-slate-50'
                }`}
              >
                Explore Services
              </button>
            </div>

            {/* Direct Micro-Trust Corporate Alignment Badges */}
            <div className="pt-6 border-t border-slate-200/75 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[10px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#116936]" />
                <span>Cybersecurity Audit Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#116936]" />
                <span>Teacher Training Support</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#116936]" />
                <span>WAEC E-Study Channel</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold bg-[#1C2E52] px-1.5 py-0.5 rounded text-[8px]">ALLIANCE</span>
                <span>Port Harcourt</span>
              </div>
            </div>
          </div>

          {/* Hero Right - Branded Panel with Integrated Gold Sponsor Logo (Sidmach) */}
          <div className={`lg:col-span-5 rounded-2xl border p-6 flex flex-col justify-between relative shadow-xl overflow-hidden min-h-[380px] transition-all ${
            isDark 
              ? 'bg-[#1E293B] border-slate-800' 
              : 'bg-white border-slate-200/80 shadow-slate-100'
          }`}>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#116936]/5 rounded-full blur-2xl pointer-events-none"></div>
            
            {/* Alliance Callout Banner */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-150 pb-3 text-[9px] text-[#116936] font-mono font-bold uppercase">
                <span>Direct Strategic Alliance</span>
                <span className="text-green-600 font-bold">• Active Partnership</span>
              </div>
              
              <div className="space-y-3">
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Primary Technology Partner:</p>
                <div className={`p-4 rounded-xl border flex items-center justify-center ${
                  isDark ? 'bg-slate-900/50 border-slate-700' : 'bg-slate-50 border-slate-205'
                }`}>
                  <SidmachLogo className="scale-105" />
                </div>
              </div>
            </div>

            {/* Verification and SLA notes */}
            <div className={`p-4 rounded-xl text-xs leading-relaxed space-y-2 mt-4 border ${
              isDark ? 'bg-slate-900/20 border-slate-800 text-slate-300' : 'bg-[#F2F8F4]/80 border-[#116936]/10 text-slate-700'
            }`}>
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#116936] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#116936] inline-block animate-pulse"></span>
                Official Channel Authorization:
              </div>
              <p className="font-sans text-[11px] font-medium leading-snug">
                Clear Impact Services Limited is the recognized territorial partner deploying Sidmach's robust WAEC study suites and digital exams systems across the South-South region.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-150 text-[9px] font-mono text-slate-400">
              <span>Rumuosi Center Headquarters</span>
              <button 
                onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-[#116936] hover:underline font-bold flex items-center gap-1"
              >
                Route Map <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: TRUST ALLIANCE LOGO RIBBON (Fulfilling: Find their logo and put them in) */}
      <section 
        id="partner-ribbon"
        className={`py-8 border-b ${
          isDark ? 'bg-[#1E293B] border-slate-800' : 'bg-[#FAFBFD] border-slate-200/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-center text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-6 font-mono">
            Directly Aligned With Premium Institutional & Examination Bodies
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Partnership I: Sidmach */}
            <div 
              onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`p-4.5 rounded-xl border cursor-pointer transition-all flex flex-col items-center justify-center gap-2.5 group ${
                isDark 
                  ? 'bg-slate-900/50 border-slate-800 hover:border-[#116936]' 
                  : 'bg-white border-slate-205 shadow-sm hover:border-[#116936] hover:shadow-md'
              }`}
            >
              <div className="opacity-90 group-hover:opacity-100 transition-opacity">
                <SidmachLogo />
              </div>
              <span className="text-[8.5px] font-mono text-slate-400 font-bold uppercase tracking-wider block mt-1">
                Gold Channel Ally
              </span>
            </div>

            {/* Partnership II: British Council */}
            <div 
              onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`p-4.5 rounded-xl border cursor-pointer transition-all flex flex-col items-center justify-center gap-2.5 group ${
                isDark 
                  ? 'bg-slate-900/50 border-slate-800 hover:border-blue-505' 
                  : 'bg-white border-slate-205 shadow-sm hover:border-[#002F6C] hover:shadow-md'
              }`}
            >
              <div className="opacity-95 group-hover:opacity-100 transition-opacity">
                <BritishCouncilLogo />
              </div>
              <span className="text-[8.5px] font-mono text-slate-400 font-bold uppercase tracking-wider block mt-1">
                International Exam Affiliate
              </span>
            </div>

            {/* Partnership III: Smart-Host Security */}
            <div 
              onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`p-4.5 rounded-xl border cursor-pointer transition-all flex flex-col items-center justify-center gap-2.5 group ${
                isDark 
                  ? 'bg-slate-900/50 border-slate-800 hover:border-red-505' 
                  : 'bg-white border-slate-205 shadow-sm hover:border-[#0A1128] hover:shadow-md'
              }`}
            >
              <div className="opacity-95 group-hover:opacity-100 transition-opacity">
                <SmartHostLogo />
              </div>
              <span className="text-[8.5px] font-mono text-slate-400 font-bold uppercase tracking-wider block mt-1">
                Cyber Security Alliance
              </span>
            </div>

            {/* Partnership IV: Network USA */}
            <div 
              onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`p-4.5 rounded-xl border cursor-pointer transition-all flex flex-col items-center justify-center gap-2.5 group ${
                isDark 
                  ? 'bg-slate-900/50 border-slate-800 hover:border-[#D4AF37]' 
                  : 'bg-white border-slate-205 shadow-sm hover:border-[#0B1A30] hover:shadow-md'
              }`}
            >
              <div className="opacity-95 group-hover:opacity-100 transition-opacity">
                <NUSAEmblem />
              </div>
              <span className="text-[8.5px] font-mono text-slate-400 font-bold uppercase tracking-wider block mt-1">
                Strategic Global Register
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THE STREAMLINED SOLUTIONS MATRIX (Aesthetic white backgrounds, Sidmach inspired) */}
      <section 
        id="solutions-section" 
        className={`py-16 sm:py-24 transition-colors duration-305 ${
          isDark ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className={`text-xs font-bold font-mono tracking-widest uppercase px-4 py-1.5 rounded-full border ${
              isDark 
                ? 'bg-slate-800 text-slate-300 border-slate-700' 
                : 'bg-[#116936]/10 text-[#116936] border-[#116936]/15'
            }`}>
              OPERATIONAL MATRIX
            </span>
            <h2 className={`font-sans font-extrabold text-2xl md:text-3.5xl tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-[#1C2E52]'
            }`}>
              Grouped Sectors & Deliverables
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              We consolidated redundant divisions into three core fields. Discover our collaborative technological frameworks, regional education platforms, and custom capacities.
            </p>
          </div>

          {/* Grouped Sector Cards - Three Solid Columns with Internal Subheadings */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* COLUMN I: FLAGSHIP EDUCATIONAL TECHNOLOGY (Featuring Sidmach + WAEC placement) */}
            <div className={`p-8 rounded-2xl border flex flex-col justify-between shadow-sm hover:shadow-md transition-all ${
              isDark ? 'bg-[#1E293B] border-slate-800' : 'bg-white border-slate-205'
            }`}>
              <div className="space-y-6">
                
                {/* Sector Header */}
                <div className="flex items-center gap-3.5 border-b border-slate-105 pb-4">
                  <div className="w-12 h-12 bg-[#116936]/10 rounded-xl flex items-center justify-center shrink-0 border border-[#116936]/20">
                    <BookOpen className="w-5.5 h-5.5 text-[#116936]" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-[#116936] font-bold uppercase tracking-widest">Division I</span>
                    <h3 className={`font-sans font-extrabold text-base sm:text-lg tracking-tight leading-tight ${
                      isDark ? 'text-white' : 'text-[#1C2E52]'
                    }`}>
                      Educational Technology
                    </h3>
                  </div>
                </div>

                {/* Subheadings and descriptive text */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <WaecEStudyLogo className="h-10" />
                    </div>
                    <h4 className="text-[11px] font-mono tracking-wider font-extrabold text-[#116936] uppercase mt-1">
                      WAEC Prep E-Study Suite
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Deploying state-of-the-art diagnostic mock examinations and comprehensive syllabus guidelines to optimize learner outcomes across centers.
                    </p>
                  </div>

                  <div className="space-y-1 pt-2">
                    <div className="flex items-center">
                      <WaecVerifyLogo className="h-10" />
                    </div>
                    <h4 className="text-[11px] font-mono tracking-wider font-extrabold text-[#116936] uppercase mt-1">
                      CBT Verification Hubs
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Securing secondary computerized examination setups with high-integrity candidate credential-checking networks.
                    </p>
                  </div>
                </div>

                {/* Strategic Sponsor branding alignment */}
                <div className={`p-4 rounded-xl border font-mono text-[10px] space-y-2 ${
                  isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200/60'
                }`}>
                  <span className="text-[8.5px] text-slate-450 text-[#116936] font-bold block uppercase tracking-wider">
                    Alliance CBT Infrastructure Engine:
                  </span>
                  <div className="flex items-center justify-between gap-2 bg-white p-2 rounded border border-slate-150">
                    <SidmachLogo className="scale-85" />
                    <span className="text-[7.5px] bg-green-100 text-green-800 px-1 rounded font-bold uppercase">Gold Authorized</span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-150 mt-6">
                <button
                  onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-full bg-[#116936] hover:bg-[#116936]/95 text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all uppercase tracking-wider font-mono flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  View WAEC Licensing Suite <ChevronRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>

            {/* COLUMN II: CORPORATE TRAINING & PUBLIC REFORMS */}
            <div className={`p-8 rounded-2xl border flex flex-col justify-between shadow-sm hover:shadow-md transition-all ${
              isDark ? 'bg-[#1E293B] border-slate-800' : 'bg-white border-slate-205'
            }`}>
              <div className="space-y-6">
                
                {/* Sector Header */}
                <div className="flex items-center gap-3.5 border-b border-slate-105 pb-4">
                  <div className="w-12 h-12 bg-[#0B2545]/10 rounded-xl flex items-center justify-center shrink-0 border border-[#0B2545]/20">
                    <Building2 className="w-5.5 h-5.5 text-[#0B2545]" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-[#0B2545] font-bold uppercase tracking-widest">Division II</span>
                    <h3 className={`font-sans font-extrabold text-base sm:text-lg tracking-tight leading-tight ${
                      isDark ? 'text-white' : 'text-[#1C2E52]'
                    }`}>
                      Corporate & Public Capacity
                    </h3>
                  </div>
                </div>

                {/* Subheadings and descriptive text */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-[11px] font-mono tracking-wider font-extrabold text-[#0B2545] uppercase">
                      • Operational Excellence Training
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Rigid training workshops on Lean workflow principles, bottleneck clearance, and capacity development for departmental heads.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-[11px] font-mono tracking-wider font-extrabold text-[#0B2545] uppercase">
                      • TKT Prep support
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Comprehensive, structured study programs assisting regional teachers in attaining world-recognized credentials.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 opacity-80 mb-1">
                      <SmartHostLogo className="scale-75" />
                    </div>
                    <h4 className="text-[11px] font-mono tracking-wider font-extrabold text-[#0B2545] uppercase">
                      • USA-Aligned Security Training
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Custom cybersecurity defensive drills protecting school databases and corporate accounts from advanced compromise vectors.
                    </p>
                  </div>
                </div>

                {/* Audit confirmation note */}
                <div className={`p-4 rounded-xl text-xs flex gap-2 ${
                  isDark ? 'bg-slate-900/50 text-slate-350' : 'bg-blue-50/50 text-[#092B5C] border border-blue-100/50'
                }`}>
                  <Terminal className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-relaxed">
                    "Capacity workshops trimmed logging delays and administrative bottlenecks by 45% inside 30 days."
                  </span>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-150 mt-6">
                <button
                  onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-full bg-[#0C2D48] hover:bg-[#143E64] text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all uppercase tracking-wider font-mono flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Retrieve training logs <ChevronRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>

            {/* COLUMN III: SOCIO-CULTURAL & YOUTH SPONSORSHIPS */}
            <div className={`p-8 rounded-2xl border flex flex-col justify-between shadow-sm hover:shadow-md transition-all ${
              isDark ? 'bg-[#1E293B] border-slate-800' : 'bg-white border-slate-205'
            }`}>
              <div className="space-y-6">
                
                {/* Sector Header */}
                <div className="flex items-center gap-3.5 border-b border-slate-105 pb-4">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0 border border-amber-500/20">
                    <Compass className="w-5.5 h-5.5 text-amber-600" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-amber-700 font-bold uppercase tracking-widest">Division III</span>
                    <h3 className={`font-sans font-extrabold text-base sm:text-lg tracking-tight leading-tight ${
                      isDark ? 'text-white' : 'text-[#1C2E52]'
                    }`}>
                      Socio-Cultural & Youth
                    </h3>
                  </div>
                </div>

                {/* Subheadings and descriptive text */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-[11px] font-mono tracking-wider font-extrabold text-amber-700 uppercase">
                      • Owerri Bongo Musical Festival
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Direct regional coordination, managing secure scheduling pipelines and transparent corporate sponsor mapping lists.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-[11px] font-mono tracking-wider font-extrabold text-amber-700 uppercase">
                      • High School Football leagues
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Sponsoring regional youth matches to promote character development, athletic discipline, and community safety.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-[11px] font-mono tracking-wider font-extrabold text-amber-700 uppercase">
                      • Secondary STEM challenges
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Fostering next-generation capabilities, challenging school organizations on custom software design and robotic systems.
                    </p>
                  </div>
                </div>

                {/* Evidence badge */}
                <div className="p-3.5 rounded-xl text-center text-xs font-mono border border-dashed border-amber-500/30 bg-amber-50/40">
                  <span className="text-amber-800 font-bold text-[10.5px]">★ Media Archives Documented</span>
                  <p className="text-[9px] text-slate-400 mt-1">
                    Authentic visual sessions are cataloged inside the About & Resources section.
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-150 mt-6">
                <button
                  onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold py-3.5 px-4 rounded-xl transition-all uppercase tracking-wider font-mono flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  View Chronological Galleries <ChevronRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>

          </div>

          {/* Quick Technical Callback */}
          <div className={`p-6 rounded-2xl border max-w-2xl mx-auto flex gap-4 text-xs leading-relaxed ${
            isDark ? 'bg-[#1E293B] border-slate-850' : 'bg-[#FAFBFD] border-slate-200 shadow-sm'
          }`}>
            <ShieldCheck className="w-8 h-8 text-[#116936] shrink-0 mt-0.5" />
            <div>
              <strong className={isDark ? 'text-white' : 'text-[#1C2E52]'}>Consolidated Contract Structuring:</strong> Regional ministries, examinations departments, or school organizations can easily integrate solutions across divisions under a single territorial Service Level Agreement (SLA). Speak with our Port Harcourt solutions desks.
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: THE SPECIAL TESTIMONIAL SLIDER ("Proof Registry" - Functional Slide Layout) */}
      <section 
        id="proof-section" 
        className={`py-16 sm:py-24 border-t transition-colors ${
          isDark ? 'bg-[#1E293B] border-slate-800' : 'bg-gradient-to-b from-[#F9FAFC] to-[#FFFFFF] border-slate-200'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className={`text-xs font-bold font-mono tracking-widest uppercase px-4 py-1.5 rounded-full border ${
              isDark 
                ? 'bg-slate-800 text-slate-300 border-slate-700' 
                : 'bg-[#116936]/10 text-[#116936] border-[#116936]/15'
            }`}>
              VERIFIED PORTFOLIO EVIDENCE
            </span>
            <h2 className={`font-sans font-extrabold text-2xl md:text-3.5xl tracking-tight ${
              isDark ? 'text-white' : 'text-[#1C2E52]'
            }`}>
              Strategic Trust & Results
            </h2>
            <p className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider">
              Documented Client Logs and Strategic Alliance Milestones
            </p>
          </div>

          {/* Testimonial Active Slide Container using elegant Overflow-Hidden Viewport */}
          <div className="relative">
            
            {/* Viewport wrapper with relative height limits */}
            <div id="testimonial-slider-viewport" className="overflow-hidden relative w-full min-h-[360px] sm:min-h-[280px] md:min-h-[230px] lg:min-h-[200px] px-1 py-2">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={slide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 220, damping: 25 },
                    opacity: { duration: 0.25 }
                  }}
                  className={`w-full p-6 sm:p-8 md:p-12 rounded-2xl border relative flex flex-col justify-between ${
                    isDark 
                      ? 'bg-slate-900 border-slate-800 text-white shadow-2xl' 
                      : 'bg-white border-slate-200/80 shadow-lg shadow-slate-100 text-slate-800'
                  }`}
                >
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-[#116936]/10 transform -rotate-12 pointer-events-none" />
                  
                  <div className="space-y-6 relative z-10">
                    <p className={`text-sm sm:text-base italic font-sans font-medium leading-relaxed ${
                      isDark ? 'text-slate-200' : 'text-slate-650'
                    }`}>
                      "{testimonials[slide].quote}"
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-dashed border-slate-150 gap-4">
                      <div>
                        <h4 className="font-sans font-bold text-base text-[#116936]">
                          {testimonials[slide].author}
                        </h4>
                        <p className={`text-xs font-semibold ${
                          isDark ? 'text-slate-400' : 'text-[#1C2E52]'
                        }`}>
                          {testimonials[slide].role}, <span className="text-slate-400 font-mono text-[10px]">{testimonials[slide].org}</span>
                        </p>
                      </div>
                      
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-550/30 rounded-lg text-[9.5px] font-mono font-bold text-green-600 uppercase shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-550 block animate-pulse bg-green-600"></span>
                        {testimonials[slide].verify}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Manual Slide Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-6 md:-left-12 z-20">
              <button
                onClick={handlePrevSlide}
                className="p-2 sm:p-3 rounded-full bg-[#1C2E52] hover:bg-[#116936] text-white transition-all cursor-pointer shadow-md border border-slate-700/30"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-6 md:-right-12 z-20">
              <button
                onClick={handleNextSlide}
                className="p-2 sm:p-3 rounded-full bg-[#1C2E52] hover:bg-[#116936] text-white transition-all cursor-pointer shadow-md border border-slate-700/30"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Testimonial Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide([idx, idx > slide ? 1 : -1])}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === slide 
                    ? 'w-7 bg-[#116936]' 
                    : 'w-2 bg-slate-205 hover:bg-slate-300'
                }`}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION (Blended to white flow layout with subtle green accents) */}
      <section 
        id="cta-section" 
        className={`py-16 sm:py-20 border-t ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-gradient-to-b from-white to-[#F2F8F4] border-slate-205'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className={`font-sans font-extrabold text-2xl md:text-3.5xl tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-[#1C2E52]'
          }`}>
            Ready to Drive Real Impact in Your Organization?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl mx-auto font-medium">
            Contact our Port Harcourt headquarters to schedule custom CBT software demo keys, Operational Excellence trainings, civil service workshops, or youth sponsorships alignment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenInquiry()}
              className="bg-[#116936] hover:bg-[#116936]/90 text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg hover:scale-[1.01] transition-all cursor-pointer"
            >
              Send Secure Inquiry Now
            </button>
            <a
              href={CONTACT_INFO.socials.whatsapp}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-all text-center"
            >
              <MessageSquare className="w-4.5 h-4.5 shrink-0" /> Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
