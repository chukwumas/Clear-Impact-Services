/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Calendar, Users, Award, BookMarked, ArrowUpRight } from 'lucide-react';
import { TRAINING_PROGRAMS } from '../data';

interface TrainingViewProps {
  onOpenInquiry: (service?: string) => void;
}

export default function TrainingView({ onOpenInquiry }: TrainingViewProps) {
  return (
    <div className="animate-fade-in py-12 bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16">
        
        {/* Banner Block */}
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center md:text-left">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
            Capacity Building Catalogs
          </span>
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-[#0B2545] tracking-tight">
            Professional Program Calendars
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Strengthening public departments, private schools, and corporate workforces through certified skill paths and evaluation metrics.
          </p>
        </div>

        {/* Detailed Program Options mapping */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TRAINING_PROGRAMS.map((prog) => (
            <div 
              key={prog.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b pb-3 border-gray-100">
                  <h3 className="font-sans font-bold text-base md:text-lg text-[#0B2545] tracking-tight">
                    {prog.title}
                  </h3>
                  <span className="text-[10px] bg-[#134074] text-white font-mono rounded px-1.5 py-0.5 tracking-wider uppercase shrink-0">
                    {prog.duration}
                  </span>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {prog.description}
                </p>

                <div className="space-y-1 font-mono text-[11px] text-gray-500 bg-[#F4F6F9] p-3 rounded border border-gray-100">
                  <span className="text-xs font-bold text-gray-600 uppercase block mb-1">Audience Scope:</span>
                  <p>{prog.targetAudience}</p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide block">
                    Focus Curriculum Modules:
                  </span>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {prog.curriculum.map((mod, index) => (
                      <li key={index} className="flex gap-2 items-start">
                        <span className="text-[#D4AF37] font-bold shrink-0">•</span>
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <button
                  onClick={() => onOpenInquiry('Corporate Consulting')}
                  className="w-full bg-[#0B2545] hover:bg-[#134074] text-white text-xs font-bold py-2.5 rounded transition-colors uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  Register Team <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Pathway */}
        <div className="bg-[#0B2545] text-white p-8 rounded-lg space-y-8">
          <div className="text-center md:text-left border-l-4 border-[#D4AF37] pl-4">
            <h3 className="font-sans font-bold text-lg text-white">Our Strategic Delivery System</h3>
            <p className="text-[10px] text-gray-300 font-mono uppercase tracking-wider">How we drive sustainable outcomes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {/* Step 1 */}
            <div className="space-y-2">
              <span className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] font-bold flex items-center justify-center mx-auto mb-2 text-sm">
                01
              </span>
              <p className="text-sm font-bold">Needs Assessment</p>
              <p className="text-xs text-gray-300">We analyze organizational structural roadblocks and performance deficits beforehand.</p>
            </div>
            {/* Step 2 */}
            <div className="space-y-2">
              <span className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] font-bold flex items-center justify-center mx-auto mb-2 text-sm">
                02
              </span>
              <p className="text-sm font-bold">Custom Curriculum</p>
              <p className="text-xs text-gray-300">Materials are shaped directly around client policies, regulatory frameworks, or CBT formats.</p>
            </div>
            {/* Step 3 */}
            <div className="space-y-2">
              <span className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] font-bold flex items-center justify-center mx-auto mb-2 text-sm">
                03
              </span>
              <p className="text-sm font-bold">Expert Delivery</p>
              <p className="text-xs text-gray-300">Hands-on workshops led by certified operational, digital, and cybersecurity educators.</p>
            </div>
            {/* Step 4 */}
            <div className="space-y-2">
              <span className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] font-bold flex items-center justify-center mx-auto mb-2 text-sm">
                04
              </span>
              <p className="text-sm font-bold">Evaluation Metrics</p>
              <p className="text-xs text-gray-300">We deliver full reporting dashboards detailing team gains and operational readiness metrics.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
