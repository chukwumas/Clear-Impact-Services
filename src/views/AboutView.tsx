/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Flag, ShieldAlert, Award, Sparkles, Building, Briefcase } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function AboutView() {
  const coreValues = [
    { name: "Excellence", desc: "Setting high-quality standards in capacity building and technological setup." },
    { name: "Integrity", desc: "Maintaining transparent and compliant corporate partnerships with national and international bodies." },
    { name: "Innovation", desc: "Developing state-of-the-art answers like CBT tools and modern digital study platforms." },
    { name: "Professionalism", desc: "Employing expert methodologies to handle critical consulting tasks." },
    { name: "Accountability", desc: "Ensuring verifiable results and strict metrics reporting in public sector projects." },
    { name: "Impact", desc: "Generating tangible growth, educational improvements, and youth empowerment." },
    { name: "Collaboration", desc: "Working in robust cohesion with global allies like the British Council and Sidmach." }
  ];

  return (
    <div className="animate-fade-in py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16">
        
        {/* Page title header */}
        <div className="border-b border-gray-100 pb-8 text-center md:text-left">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest block mb-2">
            Who We Are
          </span>
          <h1 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tight text-[#0B2545]">
            About Clear Impact Services
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl font-mono">
            Africa’s leading impact-driven corporate, educational, and technology solutions provider.
          </p>
        </div>

        {/* Vision & Mission Split */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#F4F6F9] border border-gray-200 p-8 rounded-lg flex gap-4">
            <Target className="w-12 h-12 text-[#D4AF37] shrink-0" />
            <div>
              <h3 className="font-sans font-bold text-xl text-[#0B2545] tracking-tight mb-2">Our Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To become Africa's leading impact-driven corporate, educational, and technology solutions provider, known for driving structural transformation across sectors.
              </p>
            </div>
          </div>

          <div className="bg-[#F4F6F9] border border-gray-200 p-8 rounded-lg flex gap-4">
            <Flag className="w-12 h-12 text-[#D4AF37] shrink-0" />
            <div>
              <h3 className="font-sans font-bold text-xl text-[#0B2545] tracking-tight mb-2">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To deliver innovative, sustainable, and result-oriented solutions that transform organizations, institutions, businesses, and communities through professionalism, technology, and strategic partnerships.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Interactive Grid (7 Values) */}
        <div className="space-y-6">
          <div className="text-center md:text-left border-l-4 border-[#D4AF37] pl-4">
            <h2 className="font-sans font-extrabold text-2xl tracking-tight text-[#0B2545]">
              Core Brand Attributes & Values
            </h2>
            <p className="text-xs text-gray-400 font-mono tracking-wider uppercase mt-1">
              Guiding how we design systems and deliver programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="border border-[#E2E8F0] hover:border-[#134074]/30 rounded p-5 bg-white shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-8 h-8 rounded bg-[#F4F6F9] text-[#0B2545] flex items-center justify-center font-bold text-xs font-mono mb-3">
                  0{idx + 1}
                </div>
                <h4 className="font-sans font-bold text-base text-[#0B2545] tracking-tight mb-1.5">{val.name}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Focus / Positioning Statement */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#0B2545] text-white p-8 rounded-lg">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs text-[#D4AF37] font-bold">EXECUTIVE FOCUS</span>
            <h3 className="font-sans font-bold text-2xl text-white tracking-tight">
              A Dynamic, Innovation-Driven Organization
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Clear Impact Services Limited specializes in driving performance in the real world. We assist public sector agencies, schools, and private sectors in upgrading standard operations, safeguarding databases, securing Cambridge IELTS, and delivering high-value cultural activities.
            </p>
          </div>
          <div className="lg:col-span-4 bg-[#134074] p-5 rounded border border-white/10 space-y-2 text-xs font-mono">
            <p className="font-semibold text-[#D4AF37]">Business Coordinates:</p>
            <p className="text-gray-200">Phone: {CONTACT_INFO.phones.join(', ')}</p>
            <p className="text-gray-200">Email: {CONTACT_INFO.email}</p>
            <p className="text-yellow-400">RC Registered Provider in Nigeria</p>
          </div>
        </div>

        {/* Corporate Leadership Placeholders */}
        <div className="space-y-6">
          <div className="text-center md:text-left border-l-4 border-[#D4AF37] pl-4">
            <h2 className="font-sans font-bold text-xl tracking-tight text-[#0B2545]">
              Executive Directorate & Specialists
            </h2>
            <p className="text-xs text-gray-400 font-mono tracking-wider uppercase mt-1">
              Qualified team guiding corporate growth and digital systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Executive placeholder 1 */}
            <div className="border border-dashed border-gray-300 rounded p-6 bg-gray-50 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-[10px] bg-[#134074] text-white font-mono rounded px-1.5 py-0.5 uppercase">
                  Management Structure
                </span>
                <p className="text-sm font-bold text-[#0B2545] mt-4 font-sans">
                  `[CONFIRM EXECUTIVE DIRECTOR NAME & DESIGNATION]`
                </p>
                <p className="text-xs text-gray-500 mt-2 font-mono">
                  Coordinates corporate training pathways, public sector relations, and board of directors governance across Port Harcourt advisory offices.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="font-mono text-[10px] text-gray-400">`[ADD TEAM PHOTO PLACEHOLDER]`</span>
              </div>
            </div>

            {/* Executive placeholder 2 */}
            <div className="border border-dashed border-gray-300 rounded p-6 bg-gray-50 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-[10px] bg-[#134074] text-white font-mono rounded px-1.5 py-0.5 uppercase">
                  Technology Division
                </span>
                <p className="text-sm font-bold text-[#0B2545] mt-4 font-sans">
                  `[CONFIRM CHIEF TECHNOLOGY OFFICER DESIGNATION]`
                </p>
                <p className="text-xs text-gray-500 mt-2 font-mono">
                  Drives CBT setups, WAEC E-Study configurations, Sidmach partnerships, and Smart-Host cybersecurity compliance.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="font-mono text-[10px] text-gray-400">`[ADD TECH DIRECTOR PHOTO]`</span>
              </div>
            </div>

            {/* Support Coordinator place holder */}
            <div className="border border-dashed border-gray-300 rounded p-6 bg-gray-50 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-[10px] bg-[#134074] text-white font-mono rounded px-1.5 py-0.5 uppercase">
                  Community & Education support
                </span>
                <p className="text-sm font-bold text-[#0B2545] mt-4 font-sans">
                  `[CONFIRM INT. EXAMS COORDINATOR DETAILS]`
                </p>
                <p className="text-xs text-gray-500 mt-2 font-mono">
                  Facilitates IELTS registration, Cambridge teachers support, and Teen Talent sports festival programs across Nigeria.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="font-mono text-[10px] text-gray-400">`[ADD SUPPORT STAFF PHOTO]`</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
