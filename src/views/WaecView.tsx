/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, CheckSquare, BarChart3, Lock, Award, ShieldCheck, Mail, Send } from 'lucide-react';

interface WaecViewProps {
  onOpenInquiry: (service?: string) => void;
}

export default function WaecView({ onOpenInquiry }: WaecViewProps) {
  const [activeTab, setActiveTab] = useState<'study' | 'verify'>('study');

  const plans = [
    {
      title: "Individual Students",
      desc: "Instant revision diagnostics, standard mocks, and answers for active candidates.",
      price: "Enquire for rates",
      features: [
        "Full WAEC Syllabus coverage",
        "Diagnostic feedback on weaknesses",
        "Step-by-step resolution logic",
        "Time management tracker"
      ]
    },
    {
      title: "Private & Public Schools",
      desc: "Complete academic infrastructure for classrooms, mock planning, and comparative scoring dashboards.",
      price: "Custom Institutional Plans",
      features: [
        "Teacher-monitored dashboard",
        "Bulk students key deployment",
        "Configurable CBT mocks",
        "Comparative diagnostics maps",
        "TKT support integration for teachers"
      ]
    },
    {
      title: "Government & Sponsors",
      desc: "District-wide deployment for municipal secondary school groups and developmental sponsors.",
      price: "Corporate SLA terms",
      features: [
        "District-level administration logs",
        "Secure verification capabilities",
        "Bulk system provisioning",
        "Gold Partner technical integration"
      ]
    }
  ];

  return (
    <div className="animate-fade-in py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16">
        
        {/* Flagship Header Banner */}
        <div className="bg-[#0B2545] text-white p-8 md:p-12 rounded-lg relative overflow-hidden border border-[#D4AF37]/20 shadow-xl">
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#134074]/40 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#134074] border border-[#D4AF37]/30 rounded text-xs font-semibold text-[#D4AF37] uppercase tracking-wider font-mono">
              <Award className="w-4 h-4 text-[#D4AF37]" /> Sidmach Gold Partner Collaboration
            </span>
            <h1 className="font-sans font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight text-white mb-2">
              WAEC E-Study & <br />
              Verification Platforms
            </h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
              Elevating academic preparation through diagnostic mock modules, standardized CBT tests, and secure, instant educational credential verification.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenInquiry('Educational Technology')}
                className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0B2545] font-extrabold text-sm py-3 px-6 rounded shadow transition-colors"
              >
                Request Deployment Framework
              </button>
            </div>
          </div>
        </div>

        {/* Feature Division Tabs (E-Study vs Verification) */}
        <div className="space-y-6">
          <div className="flex justify-center border-b border-gray-200">
            <button
              onClick={() => setActiveTab('study')}
              className={`pb-4 px-6 font-sans font-bold text-sm tracking-wide border-b-2 transition-colors ${
                activeTab === 'study'
                  ? 'border-[#0B2545] text-[#0B2545]'
                  : 'border-transparent text-gray-400 hover:text-[#0B2545]'
              }`}
            >
              1. WAEC E-Study Diagnostic Suite
            </button>
            <button
              onClick={() => setActiveTab('verify')}
              className={`pb-4 px-6 font-sans font-bold text-sm tracking-wide border-b-2 transition-colors ${
                activeTab === 'verify'
                  ? 'border-[#0B2545] text-[#0B2545]'
                  : 'border-transparent text-gray-400 hover:text-[#0B2545]'
              }`}
            >
              2. WAEC Verification Solutions
            </button>
          </div>

          {activeTab === 'study' ? (
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <span className="font-mono text-xs text-[#D4AF37] font-bold block uppercase tracking-wider">
                  Diagnostic Prep Metrics
                </span>
                <h3 className="font-sans font-extrabold text-2xl text-[#0B2545] tracking-tight">
                  High-Impact Digital Exam Revision
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The WAEC E-Study platform provides interactive, digital prep books designed to match actual national examination requirements. Students receive real-time, comparative metrics indicating weakness hotspots across curriculum sectors before exam dates.
                </p>

                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex gap-3">
                    <BookOpen className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#0B2545]">Interactive Revision Library</p>
                      <p className="text-xs">Access structural study books, detailed resolution patterns, and actual historical exam records.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckSquare className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#0B2545]">Standardized CBT Mocks</p>
                      <p className="text-xs">Practice inside timed computer layouts modeled after real-world examination centers.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <BarChart3 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#0B2545]">Administrative Progress Dashboards</p>
                      <p className="text-xs">Principals and school sponsors track continuous analytics on classrooms and individuals instantly.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphical visual representation card */}
              <div className="bg-[#F4F6F9] border border-gray-200 rounded-lg p-6 space-y-4">
                <div className="border-b border-gray-200 pb-2 text-xs font-mono text-gray-500 flex justify-between">
                  <span>MOCK SYSTEM DEMO INSTANCE</span>
                  <span className="text-[#0B2545] font-bold">ACTIVE REGISTRY</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded shadow-sm border text-xs">
                    <div className="flex justify-between font-bold mb-1">
                      <span>Mathematics Mock – Set A</span>
                      <span className="text-green-600">82% Completed</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
                      <div className="bg-green-500 h-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm border text-xs">
                    <div className="flex justify-between font-bold mb-1">
                      <span>English Syntax Evaluation</span>
                      <span className="text-[#D4AF37]">Review Weaknesses</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
                      <div className="bg-[#D4AF37] h-full" style={{ width: '48%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="p-3.5 bg-yellow-50 border border-yellow-200 rounded text-xs text-gray-600 leading-relaxed">
                  <strong>Gold Partnership Notice:</strong> Integrated utilizing Sidmach Technologies core infrastructure, providing seamless digital stability matching high-capacity national education standards.
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="bg-[#F4F6F9] border border-gray-200 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-500">
                  <Lock className="w-4 h-4 text-[#D4AF37]" />
                  <span>WAEC VERIFICATION INTERFACE</span>
                </div>
                <div className="bg-white rounded p-4 border space-y-3">
                  <div className="space-y-1.5 text-xs">
                    <label className="block text-gray-600 font-bold uppercase tracking-wide">Candidate Examination Number</label>
                    <input type="text" placeholder="e.g. 4251023450" disabled className="text-sm bg-gray-50 border w-full p-2 rounded cursor-not-allowed" />
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <label className="block text-gray-600 font-bold uppercase tracking-wide">Examination Period</label>
                    <select disabled className="text-sm bg-gray-50 border w-full p-2 rounded cursor-not-allowed text-gray-400">
                      <option>2025 WASSCE School Candidate</option>
                    </select>
                  </div>
                  <button type="button" disabled className="w-full bg-[#0B2545]/40 text-white font-bold text-xs py-2 px-4 rounded cursor-not-allowed">
                    Fetch Verification Records
                  </button>
                </div>
                <p className="text-[11px] text-gray-500 text-center font-mono">
                  Secured utilizing standard system cryptography for institutional audits.
                </p>
              </div>

              <div className="space-y-6">
                <span className="font-mono text-xs text-[#D4AF37] font-bold block uppercase tracking-wider">
                  Compliance & Verification Integration
                </span>
                <h3 className="font-sans font-extrabold text-2xl text-[#0B2545] tracking-tight">
                  Seamless Educational Verification Setup
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We deploy automated result verification setups allowing corporate employers, recruitment systems, secondary school registrations administrative offices, and foreign embassy portals to cross-confirm WAEC certification status instantly.
                </p>

                <div className="space-y-3.5 text-xs text-gray-600 leading-relaxed font-sans">
                  <p className="flex gap-2">
                    <ShieldCheck className="w-4.5 h-4.5 text-[#D4AF37] shrink-0" />
                    <span>Eliminate physical paper verification timelines, cutting institutional costs by over 70%.</span>
                  </p>
                  <p className="flex gap-2">
                    <ShieldCheck className="w-4.5 h-4.5 text-[#D4AF37] shrink-0" />
                    <span>Integrate verification APIs securely into school registries and employer HR frameworks.</span>
                  </p>
                  <p className="flex gap-2">
                    <ShieldCheck className="w-4.5 h-4.5 text-[#D4AF37] shrink-0" />
                    <span>Complete security architecture backed by USA cybersecurity compliance parameters.</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Pricing Strategy & Framework Columns */}
        <div className="space-y-8 pt-8 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-sans font-extrabold text-2xl text-[#0B2545] tracking-tight">
              Flexible Deployment Subscriptions
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Our structures adapt to matching public systems, private institutions, and bulk municipal budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((pl, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-6 bg-white hover:border-[#134074]/30 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h4 className="font-sans font-bold text-lg text-[#0B2545] tracking-tight border-b pb-2">
                    {pl.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {pl.desc}
                  </p>
                  <p className="text-sm font-bold text-[#D4AF37] font-mono">
                    {pl.price}
                  </p>
                  <div className="pt-2">
                    <p className="text-[10px] font-bold font-mono uppercase text-gray-400 tracking-wide mb-1.5">
                      Included Capabilities:
                    </p>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {pl.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex gap-1.5">
                          <span className="text-green-500 font-bold shrink-0">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onOpenInquiry('Educational Technology')}
                    className="w-full bg-[#0B2545] hover:bg-[#134074] text-white text-xs font-bold py-2.5 rounded transition-colors uppercase tracking-wider"
                  >
                    Send Licensing Request
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
