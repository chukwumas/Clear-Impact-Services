/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Briefcase, GraduationCap, Globe, Shield, Palette, Calendar, ArrowUpRight, HelpCircle } from 'lucide-react';
import { CORE_SERVICES } from '../data';

interface ServicesViewProps {
  onOpenInquiry: (service: string) => void;
}

export default function ServicesView({ onOpenInquiry }: ServicesViewProps) {
  
  // Icon selector helper
  const getIcon = (id: string) => {
    switch (id) {
      case 'consulting':
        return <Briefcase className="w-8 h-8 text-[#D4AF37]" />;
      case 'digital-learning':
        return <GraduationCap className="w-8 h-8 text-[#D4AF37]" />;
      case 'international-exams':
        return <Globe className="w-8 h-8 text-[#D4AF37]" />;
      case 'cybersecurity':
        return <Shield className="w-8 h-8 text-[#D4AF37]" />;
      case 'branding':
        return <Palette className="w-8 h-8 text-[#D4AF37]" />;
      case 'events-youth':
        return <Calendar className="w-8 h-8 text-[#D4AF37]" />;
      default:
        return <HelpCircle className="w-8 h-8 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="animate-fade-in py-12 bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16">
        
        {/* Page Title Block */}
        <div className="bg-white p-8 rounded-lg border border-[#E2E8F0] shadow-sm text-center md:text-left">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
            Institutional Matrix
          </span>
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-[#0B2545] tracking-tight">
            Our Core Service Divisions
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Delivering modern corporate, digital learning, technological risk-management, and high-impact sporting and cultural productions with lasting value.
          </p>
        </div>

        {/* Six Main Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {CORE_SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-lg hover:border-[#134074]/30"
            >
              <div className="space-y-6">
                {/* Card Title & Icon */}
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="w-14 h-14 bg-[#0B2545] rounded-lg flex items-center justify-center shrink-0">
                    {getIcon(service.id)}
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-lg md:text-xl text-[#0B2545] tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-mono text-[9px] tracking-widest text-gray-400 uppercase">
                      Division Capabilities
                    </p>
                  </div>
                </div>

                {/* Subheading Short Description */}
                <p className="text-sm text-gray-600 leading-relaxed font-sans font-medium">
                  {service.shortDescription}
                </p>

                {/* Detailed Service List */}
                <div className="space-y-2.5">
                  <p className="text-xs font-bold font-mono uppercase text-gray-400 tracking-wider">
                    Core Operational Tasks:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#D4AF37] font-bold shrink-0">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-8 border-t border-gray-100 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[10px] text-gray-400 font-mono">
                  Standard compliance assured
                </span>
                <button
                  onClick={() => onOpenInquiry(service.title)}
                  className="bg-[#0B2545] hover:bg-[#134074] text-white font-bold text-xs py-2.5 px-5 rounded flex items-center gap-1.5 transition-colors shadow"
                >
                  Request Consultation <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Framework Statement */}
        <div className="p-8 bg-white border border-gray-200 rounded-lg text-center space-y-4 max-w-3xl mx-auto">
          <HelpCircle className="w-10 h-10 text-[#D4AF37] mx-auto" />
          <h4 className="font-sans font-bold text-[#0B2545] text-lg tracking-tight">
            Need a Joint/Customized Multi-Sector Solution?
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed max-w-xl mx-auto">
            Many government capacity building. school deployments, and cultural festival initiatives require a collaborative blend of different divisions. We specialize in configuring multi-disciplinary solution teams under a single unified SLA.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenInquiry('General Inquiry')}
              className="text-[#D4AF37] hover:text-[#D4AF37]/90 bg-[#0B2545] text-xs font-bold py-2.5 px-6 rounded transition-colors inline-block font-mono uppercase tracking-wider"
            >
              Contact Corporate Solutions Desk
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
