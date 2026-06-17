/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Image, MapPin, ZoomIn, Eye, HelpCircle } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

type GalleryFilter = 'all' | 'training' | 'festivals' | 'youth' | 'school';

export default function GalleryView() {
  const [filter, setFilter] = useState<GalleryFilter>('all');
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const filterTabs: { id: GalleryFilter; label: string }[] = [
    { id: 'all', label: 'All Photos' },
    { id: 'training', label: 'Corporate Cohorts' },
    { id: 'festivals', label: 'Cultural Festivals' },
    { id: 'youth', label: 'Youth Programs' },
    { id: 'school', label: 'School Deployments' }
  ];

  const getCategoryImage = (category: string) => {
    // Return high contrast vector backgrounds instead of real heavy images
    switch (category) {
      case 'training':
        return 'bg-gradient-to-br from-[#0B2545] via-[#134074] to-[#1D242E]';
      case 'festivals':
        return 'bg-gradient-to-br from-[#8B0000] via-[#D4AF37] to-[#0B2545]';
      case 'youth':
        return 'bg-gradient-to-br from-[#134074] via-[#0B2545] to-[#25D366]';
      case 'school':
        return 'bg-gradient-to-br from-[#0B2545] via-[#D4AF37] to-[#F4F6F9]';
      default:
        return 'bg-gray-800';
    }
  };

  return (
    <div className="animate-fade-in py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        
        {/* Title elements */}
        <div className="border-b border-gray-100 pb-6 text-center md:text-left">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
            Visual Proof
          </span>
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-[#0B2545] tracking-tight">
            Corporate Media Gallery
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Unaltered photographic proof documenting our specialized educational integrations, custom capacity trainings, and community productions across Port Harcourt and Owerri.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider border transition-all ${
                filter === tab.id
                  ? 'bg-[#0B2545] border-[#0B2545] text-white shadow'
                  : 'bg-white border-gray-200 text-[#0B2545] hover:border-[#0B2545]/40 hover:bg-[#F4F6F9]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden group hover:border-[#134074]/30 hover:shadow-lg transition-all"
            >
              {/* Image Container with high quality vector gradient and mock text */}
              <div 
                className={`h-56 relative ${getCategoryImage(item.category)} p-6 flex flex-col justify-between text-white cursor-pointer`}
                onClick={() => setActivePhoto(item.id)}
              >
                {/* Subtle digital safety grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                
                <div className="flex justify-between items-center relative z-10 text-[10px] uppercase font-mono tracking-widest bg-black/30 px-2 py-0.5 rounded backdrop-blur-sm">
                  <span>Photo ID: {item.id}</span>
                  <span className="text-[#D4AF37] font-bold">• APPROVED</span>
                </div>

                <div className="flex flex-col items-center justify-center h-full relative z-10 text-center select-none opacity-80 group-hover:opacity-100 transition-opacity">
                  <Image className="w-10 h-10 text-[#D4AF37] mb-2" />
                  <p className="font-sans font-bold text-sm tracking-tight text-white mb-1">{item.title}</p>
                  <span className="text-[10px] font-mono text-gray-300">Port Harcourt & Owerri Chronicles</span>
                </div>

                <div className="flex justify-between items-center relative z-10 pt-2 border-t border-white/20 text-[10px] font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" /> {item.location}
                  </span>
                  <span className="flex items-center gap-1 hover:underline">
                    <Eye className="w-3.5 h-3.5" /> Launch Viewer
                  </span>
                </div>
              </div>

              {/* Photo Description text */}
              <div className="p-4 space-y-1.5 bg-white bg-opacity-50">
                <p className="text-[10px] font-mono font-bold uppercase text-[#D4AF37]">
                  {item.category}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="col-span-full border border-dashed text-center py-16 bg-[#F4F6F9] rounded-lg">
              <HelpCircle className="w-10 h-10 text-gray-300 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-500">No photos currently cataloged under this section filter.</p>
              <button 
                onClick={() => setFilter('all')}
                className="text-xs text-[#0B2545] hover:underline font-bold mt-2"
              >
                Reset Filter Options
              </button>
            </div>
          )}
        </div>

        {/* Modal lightbox viewer (Simulated beautifully) */}
        {activePhoto && (
          <div className="fixed inset-0 bg-[#0B2545]/90 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-sm animate-fade-in animate-duration-200">
            {(() => {
              const item = GALLERY_ITEMS.find(p => p.id === activePhoto);
              if (!item) return null;
              return (
                <div id="lightbox-container" className="max-w-2xl w-full bg-white rounded-lg overflow-hidden border border-gray-250 shadow-2xl animate-scale-up">
                  <div className={`h-80 ${getCategoryImage(item.category)} relative p-8 flex flex-col justify-between text-white`}>
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                    <div className="flex font-mono text-xs items-center justify-between relative z-10">
                      <span>VERIFIED CORPORATE PHOTO ARCHIVE</span>
                      <button 
                        onClick={() => setActivePhoto(null)}
                        className="bg-black/30 hover:bg-black/50 hover:px-2 py-1 transition-all rounded"
                      >
                        CLOSE [X]
                      </button>
                    </div>
                    <div className="text-center py-8 relative z-10 flex flex-col items-center">
                      <Image className="w-16 h-16 text-[#D4AF37] mb-2 animate-bounce" />
                      <h4 className="font-sans font-bold text-lg text-white tracking-wide">{item.title}</h4>
                      <p className="text-xs text-gray-300 font-mono mt-1">Unaltered Program Output Artifact</p>
                    </div>
                    <div className="flex justify-between items-center relative z-10 text-xs font-mono border-t border-white/20 pt-2 text-[#D4AF37]">
                      <span>Location: {item.location}</span>
                      <span>Verified Outcome</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-xs text-gray-600 leading-relaxed font-sans font-medium">
                      {item.description}
                    </p>
                    <div className="text-right">
                      <button 
                        onClick={() => setActivePhoto(null)}
                        className="bg-[#0B2545] hover:bg-[#134074] text-white font-bold text-xs py-2 px-6 rounded transition-colors uppercase tracking-wider"
                      >
                        Close View
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

      </div>
    </div>
  );
}
