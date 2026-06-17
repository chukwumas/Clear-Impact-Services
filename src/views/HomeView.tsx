/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, ShieldCheck, Award, Users, BookOpen, MessageSquare, ExternalLink } from 'lucide-react';
import { PageId } from '../types';
import { CONTACT_INFO, CORE_SERVICES, PROJECTS_EVENTS, PARTNERSHIPS } from '../data';

interface HomeViewProps {
  setActivePage: (page: PageId) => void;
  onOpenInquiry: (service?: string) => void;
}

export default function HomeView({ setActivePage, onOpenInquiry }: HomeViewProps) {
  return (
    <div className="animate-fade-in">
      
      {/* SECTION 1: HERO CONTAINER */}
      <section 
        id="hero-section"
        className="relative bg-[#0B2545] text-white overflow-hidden py-20 lg:py-28"
      >
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#134074_1px,transparent_1px),linear-gradient(to_bottom,#134074_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left - Text block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#134074]/80 border border-[#D4AF37]/40 rounded-full text-xs font-semibold text-[#D4AF37] tracking-wider uppercase font-mono animate-fade-in">
              <Award className="w-4 h-4 text-[#D4AF37]" /> Multi-Sector Solutions Provider
            </div>
            
            <h1 className="font-sans font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight text-white">
              Professional Solutions <br />
              <span className="text-[#D4AF37]">With Lasting Impact</span>
            </h1>
            
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
              Transforming organizations, schools, and communities across Africa through state-of-the-art Web & CBT platforms, customized executive capacity workshops, robust cybersecurity integration, and elite project management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onOpenInquiry()}
                className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0B2545] font-extrabold text-sm py-3 px-6 rounded shadow-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                Partner with Us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="border-2 border-[#134074] hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-bold text-sm py-3 px-6 rounded transition-all flex items-center justify-center bg-[#134074]/25"
              >
                Explore Services
              </button>
            </div>

            {/* Direct Trust badging */}
            <div className="pt-6 border-t border-[#134074] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-[#D4AF37]" />
                <span>USA Cybersecurity Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4.5 h-4.5 text-[#D4AF37]" />
                <span>TKT Prep Support</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4.5 h-4.5 text-[#D4AF37]" />
                <span>Gold Ed-Tech Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold bg-[#134074] px-1.5 py-0.5 rounded">Rimuosi HQ</span>
                <span>Port Harcourt</span>
              </div>
            </div>
          </div>

          {/* Hero Right - Graphic placeholder */}
          <div className="lg:col-span-5 h-[340px] md:h-[400px] bg-gradient-to-br from-[#134074] to-[#011627] rounded-lg border border-[#D4AF37]/10 p-6 flex flex-col justify-between relative shadow-2xl overflow-hidden">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
            
            {/* Mock Dashboard Representation */}
            <div className="bg-[#0B2545]/90 border border-[#134074] rounded p-4 space-y-4">
              <div className="flex items-center justify-between border-b border-[#134074] pb-2 text-[10px] text-gray-400 font-mono">
                <span>SYSTEM DIAGNOSTIC ACTIVE</span>
                <span className="text-[#25D366]">● VERIFIED BY SIDMACH</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#134074]/30 p-2.5 rounded border border-[#134074]/50">
                  <span className="block text-[10px] text-gray-400 uppercase font-mono">WAEC E-Study</span>
                  <span className="text-lg font-bold text-[#D4AF37]">Active Setup</span>
                  <span className="block text-[8px] text-green-400">Diag-Testing Suite</span>
                </div>
                <div className="bg-[#134074]/30 p-2.5 rounded border border-[#134074]/50">
                  <span className="block text-[10px] text-gray-400 uppercase font-mono">Cybersecurity</span>
                  <span className="text-lg font-bold text-white">Smart-Host</span>
                  <span className="block text-[8px] text-blue-300">USA Certified Audit</span>
                </div>
              </div>
            </div>

            <div className="bg-[#134074]/30 border border-[#134074]/60 p-4 rounded text-xs leading-relaxed space-y-2 mt-4">
              <p className="font-semibold text-white">Latest Corporate Milestones:</p>
              <p className="text-gray-300 font-mono text-[11px]">• Joint deployment of school technology frameworks.</p>
              <p className="text-gray-300 font-mono text-[11px]">• British Council IELTS registration validation support.</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#134074] text-xs">
              <span className="text-gray-400 font-mono">Plot 114 Rumuosi / Rumuagholu Road</span>
              <button 
                onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-[#D4AF37] hover:underline font-bold flex items-center gap-1"
              >
                Directions Map <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PARTNER VERIFICATION RIBBON */}
      <section 
        id="partner-ribbon"
        className="bg-white border-y border-gray-200 py-6"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-center text-xs font-semibold text-gray-400 tracking-wider uppercase mb-5 font-mono">
            Partnering With Global Authorities to Deliver Excellence
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            {PARTNERSHIPS.map((partner) => (
              <div 
                key={partner.id}
                onClick={() => { setActivePage('partners'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-[#F4F6F9] border border-gray-200 p-4 rounded-lg cursor-pointer hover:border-[#0B2545]/40 transition-all flex flex-col items-center justify-center group"
              >
                <span className="font-mono text-xs font-bold text-[#0B2545] block group-hover:text-[#D4AF37] transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-gray-500 font-semibold">{partner.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE DO OVERVIEW */}
      <section id="solutions-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D4AF37] tracking-wider uppercase font-mono bg-[#0B2545] text-white px-3 py-1 rounded-full">
              Enterprise Domains
            </span>
            <h2 className="font-sans font-extrabold text-2xl md:text-4xl tracking-tight text-[#0B2545] mt-4 mb-4">
              Our Core Divisions
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We deploy systematic frameworks that address critical organizational and capacity needs. Click any card to explore detailed solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((pillar) => (
              <div
                key={pillar.id}
                onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-xl hover:border-[#134074]/30 transition-all cursor-pointer flex flex-col justify-between group h-full"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#F4F6F9] group-hover:bg-[#0B2545] rounded-lg border border-gray-100 flex items-center justify-center text-[#0B2545] group-hover:text-[#D4AF37] transition-all">
                    {/* Render different icons dynamically */}
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-[#0B2545] tracking-tight group-hover:text-[#134074] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      {pillar.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between text-xs font-semibold text-[#0B2545] group-hover:text-[#D4AF37] transition-colors">
                  <span>Show Capability Matrix</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FLAGSHIP SPOTLIGHT (WAEC E-STUDY) */}
      <section id="flagship-spotlight" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 h-[340px] md:h-[400px] bg-[#0B2545] text-[#F4F6F9] rounded-lg p-8 flex flex-col justify-between border-l-4 border-[#D4AF37] shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl"></div>
            <div>
              <span className="font-mono text-[10px] text-[#D4AF37] tracking-wider uppercase font-bold">
                E-Learning deployment
              </span>
              <h3 className="font-sans font-bold text-2xl text-white tracking-tight mt-1 mb-3">
                WAEC E-Study Suite
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Deploy state-of-the-art prep setups with built-in diagnostic mock systems and direct progress dashboards for administrators.
              </p>
              <div className="space-y-2 text-xs font-mono text-gray-400">
                <p>• Gold Sidmach Technologies Partnership</p>
                <p>• Standard CBT Exam simulation</p>
                <p>• Verified educational outcome metrics</p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-[#134074] flex justify-between items-center">
              <span className="text-[10px] text-gray-400 font-mono">Available Nationwide</span>
              <button
                onClick={() => { setActivePage('waec'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-[#D4AF37] hover:underline font-bold text-xs flex items-center gap-1"
              >
                Access Platform Portal <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-[#D4AF37] tracking-wider uppercase font-mono block">
              Flagship Ed-Tech Deployment
            </span>
            <h2 className="font-sans font-extrabold text-2xl md:text-4xl tracking-tight text-[#0B2545]">
              Scale Academic Outcomes via WAEC E-Study
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Elevate student preparation through our verified digital examination study systems. Designed in collaborative partnership with <strong>Sidmach Technologies (Gold Partner)</strong>, the WAEC E-Study platform equips schools, teachers, and individual students with diagnostic mock tests, detailed evaluation profiles, and step-by-step revision modules.
            </p>
            <div className="p-4 bg-[#F4F6F9] rounded border border-gray-200">
              <h4 className="font-bold text-xs text-[#0B2545] uppercase tracking-wider mb-2">School & Institutional Deployments:</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Provide custom administrative controls to track class performance, coordinate diagnostic CBT mocks, and review outcomes from a dashboard synced directly to national standard platforms.
              </p>
            </div>
            <div className="pt-2 flex gap-4">
              <button
                onClick={() => { setActivePage('waec'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-[#0B2545] hover:bg-[#134074] text-white font-bold text-xs tracking-wider uppercase py-3 px-6 rounded transition-all shadow"
              >
                View Licensing Options
              </button>
              <button
                onClick={() => onOpenInquiry('Educational Technology')}
                className="border border-[#0B2545] hover:bg-[#F4F6F9] text-[#0B2545] font-bold text-xs py-3 px-6 rounded transition-all"
              >
                Request Demo Setup
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LOCAL EVENT & YOUTH IMPACT SPOTLIGHT */}
      <section id="community-spotlight" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-[#D4AF37] tracking-wider uppercase font-mono">
                Cultural & Youth Impact
              </span>
              <h2 className="font-sans font-extrabold text-2xl md:text-4xl tracking-tight text-[#0B2545]">
                Rooted in Community Excellence
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our operations go beyond enterprise consulting. We design, host, and execute highly structured cultural festivals, sports events, and academic championships that celebrate Nigerian identity, uncover youth talents, and secure local social harmony.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded border border-gray-200 shadow-sm">
                  <span className="text-[#D4AF37] font-extrabold text-lg block">Cultural Festivals</span>
                  <span className="text-xs font-bold text-gray-700 block mt-2">Owerri Bongo Festival</span>
                  <p className="text-[11px] text-gray-500 mt-1">Hosting landmark gatherings that promote native musical heritage.</p>
                </div>
                <div className="p-4 bg-white rounded border border-gray-200 shadow-sm">
                  <span className="text-[#D4AF37] font-extrabold text-lg block">Sports & Talent</span>
                  <span className="text-xs font-bold text-gray-700 block mt-2">Teen Talent Arena</span>
                  <p className="text-[11px] text-gray-500 mt-1">Nurturing creative, academic, and athletic youth potential.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-[#0B2545] hover:bg-[#134074] text-white font-bold text-xs tracking-wider uppercase py-3 px-6 rounded shadow transition-all flex items-center gap-2"
                >
                  View Event Chronicles <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Visual Portfolio Collage */}
            <div className="h-[360px] md:h-[420px] bg-white border border-gray-200 rounded-lg p-6 relative shadow-md flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-gray-400 tracking-widest block uppercase font-bold mb-1">
                  Active Project Spotlight
                </span>
                <h4 className="font-sans font-bold text-base text-[#0B2545] tracking-tight border-b pb-2 mb-4">
                  Community Development Portfolio
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] mt-1 shrink-0"></div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Owerri Bongo & Igbo Cultural Festivals</p>
                      <p className="text-[11px] text-gray-500 leading-relaxed">Strengthening traditional languages, arts, and tourism across local zones.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] mt-1 shrink-0"></div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Secondary High-School Football leagues</p>
                      <p className="text-[11px] text-gray-500 leading-relaxed">Leveraging structured athletic tournaments to promote health, focus, and peer values.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] mt-1 shrink-0"></div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">STEM Enterprise Challenge</p>
                      <p className="text-[11px] text-gray-500 leading-relaxed">Inspiring kids to invent smart hardware controllers and digital coding components.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#F4F6F9] rounded border border-gray-200 text-xs text-gray-600 text-center font-mono">
                Physical evidence cataloged in the <button onClick={() => setActivePage('gallery')} className="text-[#0B2545] hover:underline font-bold">Media Showcase</button>.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: SOCIAL PROOF / TRUST ZONE */}
      <section id="proof-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D4AF37] tracking-wider uppercase font-mono bg-[#0B2545] text-white px-3 py-1 rounded-full">
              Verification & Praise
            </span>
            <h2 className="font-sans font-extrabold text-2xl md:text-4xl tracking-tight text-[#0B2545] mt-4">
              Institutional Credibility
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F4F6F9] border border-gray-200 rounded-lg p-8 relative flex flex-col justify-between">
              <span className="absolute -top-3 -left-3 font-serif text-6xl text-[#D4AF37]/20 select-none">“</span>
              <div className="space-y-4 relative z-10">
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  `[ADD TESTIMONIAL - Suggested Content: Feedback from school principal or district coordinator verifying the academic scale and diagnostic value of our customized WAEC E-Study deployment]`
                </p>
                <div className="border-t border-gray-200 pt-4 text-xs font-mono">
                  <p className="font-bold text-[#0B2545] uppercase">Validated Secondary School Partner</p>
                  <p className="text-gray-500">Academic Administration Advisory</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F4F6F9] border border-gray-200 rounded-lg p-8 relative flex flex-col justify-between">
              <span className="absolute -top-3 -left-3 font-serif text-6xl text-[#D4AF37]/20 select-none">“</span>
              <div className="space-y-4 relative z-10">
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  `[ADD TESTIMONIAL - Suggested Content: Corporate human resources testimony validating the workspace efficiency outcomes from our Operational Excellence Training program]`
                </p>
                <div className="border-t border-gray-200 pt-4 text-xs font-mono">
                  <p className="font-bold text-[#0B2545] uppercase">Validated Enterprise Client</p>
                  <p className="text-gray-500">Operational Excellence Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CALL TO ACTION */}
      <section id="cta-section" className="bg-[#0B2545] text-white py-16 border-t border-[#134074]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="font-sans font-extrabold text-2xl md:text-4xl tracking-tight text-white leading-tight">
            Ready to Drive Real Impact in Your Organization?
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed max-w-xl mx-auto">
            Get in touch with our Port Harcourt headquarters to discuss corporate training programs, school registrations, secure digital defenses, or custom project blueprints.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenInquiry()}
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0B2545] font-extrabold text-sm py-3 px-8 rounded shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Send Live Inquiry Now
            </button>
            <a
              href={CONTACT_INFO.socials.whatsapp}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-sm py-3 px-8 rounded flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all text-center"
            >
              <MessageSquare className="w-4 h-4 shrink-0" /> Chat with an Advisor via WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
