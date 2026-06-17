/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, ShieldAlert, CheckCircle, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { PARTNERSHIPS } from '../data';
import { PageId } from '../types';

interface PartnersViewProps {
  setActivePage: (page: PageId) => void;
  onOpenInquiry: (service?: string) => void;
}

export default function PartnersView({ setActivePage, onOpenInquiry }: PartnersViewProps) {
  return (
    <div className="animate-fade-in py-12 bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16">
        
        {/* Page Title Header */}
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center md:text-left">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
            Institutional Standards Accord
          </span>
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-[#0B2545] tracking-tight">
            Strategic Alliances & Affiliations
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
            By aligning our services with verified global technology, security, and international testing institutions, we deliver robust, reliable operational guarantees.
          </p>
        </div>

        {/* Partnerships Directory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PARTNERSHIPS.map((partner) => (
            <div 
              key={partner.id}
              className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm flex flex-col justify-between hover:border-[#134074]/30 hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                <div className="flex gap-4 items-center border-b pb-4">
                  <div className="w-12 h-12 bg-[#0B2545] text-[#D4AF37] font-mono font-bold text-xs rounded-lg flex items-center justify-center shrink-0 uppercase tracking-widest border border-[#D4AF37]/35">
                    {partner.logoPlaceholder}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-base md:text-lg text-[#0B2545] tracking-tight leading-tight">
                      {partner.name}
                    </h3>
                    <p className="text-[10px] font-mono text-gray-400 uppercase font-semibold">
                      {partner.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed min-h-[50px]">
                  {partner.description}
                </p>

                <div className="space-y-1 text-xs text-gray-500 font-sans">
                  <p className="flex gap-1.5 items-center">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Active registration status verified</span>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t mt-6 flex justify-between items-center text-xs font-semibold text-[#0B2545]">
                <span className="text-[10px] text-gray-400 font-mono">Standard compliance assured</span>
                {partner.id === 'sidmach' && (
                  <button 
                    onClick={() => { setActivePage('waec'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-[#D4AF37] hover:underline flex items-center gap-1.5"
                  >
                    WAEC Setup Portal <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
                {partner.id === 'british-council' && (
                  <button 
                    onClick={() => { setActivePage('training'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-[#D4AF37] hover:underline flex items-center gap-1.5"
                  >
                    TKT Support Info <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership verification note */}
        <div className="p-6 bg-yellow-50 border border-yellow-250 rounded text-xs text-gray-700 max-w-2xl mx-auto flex gap-3.5 leading-relaxed">
          <ShieldAlert className="w-8 h-8 text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <strong>Authenticity & Regulatory Notice:</strong> Clear Impact Services Limited operates physical headquarters in Rivers State and is duly corporate registered. Our alliances with international support networks are fully functional. No fictitious memberships are claimed.
          </div>
        </div>

      </div>
    </div>
  );
}
