/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Flag, HelpCircle, MapPin, CalendarDays, Award } from 'lucide-react';
import { PROJECTS_EVENTS } from '../data';
import { ProjectEvent } from '../types';

interface ProjectsViewProps {
  onOpenInquiry: (service?: string) => void;
}

type FilterCategory = 'all' | 'cultural' | 'sports' | 'youth' | 'academic' | 'corporate';

export default function ProjectsView({ onOpenInquiry }: ProjectsViewProps) {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS_EVENTS 
    : PROJECTS_EVENTS.filter((p) => p.category === filter);

  const categories: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'cultural', label: 'Cultural Festivals' },
    { id: 'youth', label: 'Youth Programs' },
    { id: 'sports', label: 'Sports Leagues' },
    { id: 'academic', label: 'Academic/STEM Challenges' },
    { id: 'corporate', label: 'Corporate Platforms' },
  ];

  return (
    <div className="animate-fade-in py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        
        {/* Title Section */}
        <div className="border-b border-gray-100 pb-6 text-center md:text-left">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
            Impact Chronicles
          </span>
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-[#0B2545] tracking-tight">
            Delivered Projects & Cultural Festivals
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
            A comprehensive look at our grassroots social engagements, academic STEM challenges, and national capacity-building operations across Nigeria.
          </p>
        </div>

        {/* Dynamic Category Filtering Buttons */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider border transition-all ${
                filter === cat.id
                  ? 'bg-[#0B2545] border-[#0B2545] text-white shadow'
                  : 'bg-white border-gray-200 text-[#0B2545] hover:border-[#0B2545]/40 hover:bg-[#F4F6F9]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Matrix Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div 
              key={p.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#D4AF37] bg-[#0B2545]/5 px-2 py-0.5 rounded border border-[#D4AF37]/25">
                    {p.category}
                  </span>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-gray-400">
                    <CalendarDays className="w-3.5 h-3.5 text-gray-400" />
                    <span>{p.year}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-lg text-[#0B2545] tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed min-h-[50px]">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Coordinates Indicator */}
              <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between text-xs text-gray-500 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{p.location}</span>
                </span>
                <span className="text-[#0B2545] font-semibold text-[11px] uppercase">
                  Verified Outcome
                </span>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-span-full border border-dashed text-center py-16 bg-[#F4F6F9] rounded-lg">
              <HelpCircle className="w-10 h-10 text-gray-300 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-500">No projects currently matching this category filter.</p>
              <button 
                onClick={() => setFilter('all')}
                className="text-xs text-[#0B2545] hover:underline font-bold mt-2"
              >
                Reset Filter Options
              </button>
            </div>
          )}
        </div>

        {/* Partnership & Sponsorship Info banner */}
        <div className="p-8 bg-[#0B2545] text-white border border-[#D4AF37]/10 rounded-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#134074] border border-[#D4AF37]/40 rounded text-[10px] font-semibold text-[#D4AF37] uppercase tracking-wider font-mono">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" /> Joint Alliance Collaboration
            </span>
            <h3 className="font-sans font-bold text-xl leading-tight text-white mb-1">
              Interested in Sponsoring or Co-hosting an Event?
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed max-w-xl">
              We frequently coordinate activities with government agencies, private sponsors, development organizations, and high schools across Nigeria. Connect with our municipal committee desk.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('Events & Youth Development')}
            className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0B2545] font-extrabold text-xs py-3 px-6 rounded shrink-0 transition-colors uppercase tracking-wider"
          >
            Sponsorship Prospectus Request
          </button>
        </div>

      </div>
    </div>
  );
}
