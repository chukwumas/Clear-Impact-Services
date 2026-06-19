/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Target, 
  Flag, 
  ShieldAlert, 
  Award, 
  Image, 
  MapPin, 
  Eye, 
  HelpCircle, 
  Download, 
  Lock, 
  CheckCircle2, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Building2,
  LockKeyhole
} from 'lucide-react';
import { CONTACT_INFO, PARTNERSHIPS, GALLERY_ITEMS, DOWNLOADS_CATALOG } from '../data';
import { DownloadItem } from '../types';

type AboutTab = 'profile' | 'partners' | 'gallery' | 'downloads';
type GalleryFilter = 'all' | 'training' | 'festivals' | 'youth' | 'school';

interface AboutViewProps {
  theme?: 'light' | 'dark';
}

export default function AboutView({ theme = 'light' }: AboutViewProps) {
  const [activeTab, setActiveTab] = useState<AboutTab>('profile');
  
  // Gallery states
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>('all');
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  // Downloads states
  const [gateEmail, setGateEmail] = useState('');
  const [gateName, setGateName] = useState('');
  const [isGated, setIsGated] = useState(true);
  const [activeDownload, setActiveDownload] = useState<string | null>(null);
  const [downloadsError, setDownloadsError] = useState('');

  const coreValues = [
    { name: "Excellence", desc: "Setting high-quality standards in capacity building and technological setup." },
    { name: "Integrity", desc: "Maintaining transparent and compliant corporate partnerships with national and international bodies." },
    { name: "Innovation", desc: "Developing state-of-the-art answers like CBT tools and modern digital study platforms." },
    { name: "Professionalism", desc: "Employing expert methodologies to handle critical consulting tasks." },
    { name: "Accountability", desc: "Ensuring verifiable results and strict metrics reporting in public sector projects." },
    { name: "Impact", desc: "Generating tangible growth, educational improvements, and youth empowerment." },
    { name: "Collaboration", desc: "Working in robust cohesion with global allies like the British Council and Sidmach." }
  ];

  // Gallery calculations
  const filteredGallery = galleryFilter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === galleryFilter);

  const galleryTabs: { id: GalleryFilter; label: string }[] = [
    { id: 'all', label: 'All Photos' },
    { id: 'training', label: 'Corporate Cohorts' },
    { id: 'festivals', label: 'Cultural Festivals' },
    { id: 'youth', label: 'Youth Programs' },
    { id: 'school', label: 'School Deployments' }
  ];

  const getCategoryImage = (category: string) => {
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

  // Downloads submit handler
  const handleUnlockDownloads = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gateName.trim() || !gateEmail.trim() || !/\S+@\S+\.\S+/.test(gateEmail)) {
      setDownloadsError('Please provide a valid name and active corporate email address');
      return;
    }
    
    // Track interest in local ledger
    const submission = {
      id: 'dwn_' + Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleString(),
      fullName: gateName,
      organization: '[Resource Download Lead]',
      email: gateEmail,
      phone: '[Not Provided]',
      serviceCategory: 'Resource Downloads',
      message: `Requested corporate materials downloaded: ${activeDownload || 'Corporate Profile'}`,
      status: 'New' as const
    };

    const existingStr = localStorage.getItem('clear_impact_inquiries');
    const existing = existingStr ? JSON.parse(existingStr) : [];
    existing.unshift(submission);
    localStorage.setItem('clear_impact_inquiries', JSON.stringify(existing));

    setIsGated(false);
    setDownloadsError('');
  };

  const triggerDownloadFile = (item: DownloadItem) => {
    setActiveDownload(item.title);
    if (!isGated) {
      alert(`Download complete: Initiating saved stream for "${item.title}" successfully.`);
    }
  };

  // Tab config
  const tabsConfig: { id: AboutTab; label: string }[] = [
    { id: 'profile', label: 'Corporate Profile' },
    { id: 'partners', label: 'Strategic Alliances' },
    { id: 'gallery', label: 'Media Portfolio' },
    { id: 'downloads', label: 'Gated Resources' }
  ];

  const mainBgClass = theme === 'dark' ? 'bg-[#11151F] text-[#E2E8F0]' : 'bg-[#FAF8F5] text-[#1D242E]';
  const cardBgClass = theme === 'dark' ? 'bg-[#191F2D] border-white/5' : 'bg-white border-[#E2E8F0]';
  const subBgClass = theme === 'dark' ? 'bg-[#21293B]' : 'bg-[#F4F6F9]';

  return (
    <div className={`animate-fade-in py-10 transition-colors duration-300 min-h-screen ${mainBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        
        {/* Page title header */}
        <div className={`border-b border-gray-300/20 pb-6 text-center md:text-left`}>
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
            Impact & Transparency
          </span>
          <h1 className={`font-sans font-extrabold text-3xl md:text-5xl tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
            About Clear Impact Services
          </h1>
          <p className="text-xs text-gray-400 mt-2 max-w-2xl font-mono uppercase tracking-wider">
            RC registered provider delivering capacity, education software & technology setups across Nigeria.
          </p>
        </div>

        {/* Sub page Tab Selector bar */}
        <div className={`flex flex-wrap p-1.5 rounded-xl border max-w-3xl mx-auto ${
          theme === 'dark' ? 'bg-[#191F2D] border-white/10' : 'bg-white border-gray-300/50 shadow-sm'
        }`}>
          {tabsConfig.map((tb) => (
            <button
              key={tb.id}
              onClick={() => setActiveTab(tb.id)}
              className={`flex-1 text-center py-3 px-4 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer ${
                activeTab === tb.id
                  ? 'bg-[#0B2545] text-white shadow'
                  : theme === 'dark' 
                    ? 'text-gray-400 hover:text-[#D4AF37]' 
                    : 'text-gray-500 hover:text-[#0B2545]'
              }`}
            >
              {tb.label}
            </button>
          ))}
        </div>

        {/* Dynamic sub tab rendering */}
        <div className="mt-8">
          
          {/* TAB 1: PROFILE */}
          {activeTab === 'profile' && (
            <div className="space-y-16 animate-fade-in">
              {/* Vision & Mission Split */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className={`${cardBgClass} border p-8 rounded-xl flex gap-5 shadow-sm`}>
                  <Target className="w-12 h-12 text-[#D4AF37] shrink-0" />
                  <div>
                    <h3 className={`font-sans font-bold text-xl tracking-tight mb-2 ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#0B2545]'}`}>Our Vision</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      To become Africa's leading impact-driven corporate, educational, and technology solutions provider, renowned for driving structural transformations across sectors.
                    </p>
                  </div>
                </div>

                <div className={`${cardBgClass} border p-8 rounded-xl flex gap-5 shadow-sm`}>
                  <Flag className="w-12 h-12 text-[#D4AF37] shrink-0" />
                  <div>
                    <h3 className={`font-sans font-bold text-xl tracking-tight mb-2 ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#0B2545]'}`}>Our Mission</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      To deliver innovative, sustainable, and result-oriented solutions that transform organizations, schools, businesses, and communities through professionalism, state-of-the-art tech, and strategic global alliances.
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Values Attribute Grid */}
              <div className="space-y-6">
                <div className="border-l-4 border-[#D4AF37] pl-4">
                  <h2 className={`font-sans font-extrabold text-2xl tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
                    Core Attributes & Values
                  </h2>
                  <p className="text-xs text-gray-400 font-mono tracking-wider uppercase mt-1">
                    Guiding how we design systems and deliver programs.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {coreValues.map((val, idx) => (
                    <div 
                      key={idx}
                      className={`${cardBgClass} border hover:border-[#134074]/30 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-350`}
                    >
                      <div className={`w-8 h-8 rounded shrink-0 flex items-center justify-center font-bold text-xs font-mono mb-3 ${
                        theme === 'dark' ? 'bg-[#21293B] text-[#D4AF37]' : 'bg-gray-100 text-[#0B2545]'
                      }`}>
                        0{idx + 1}
                      </div>
                      <h4 className={`font-sans font-bold text-base tracking-tight mb-1.5 ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>{val.name}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Executive Directorate Placeholders */}
              <div className="space-y-6">
                <div className="border-l-4 border-[#D4AF37] pl-4">
                  <h2 className={`font-sans font-extrabold text-xl tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
                    Executive Directorate & Advisors
                  </h2>
                  <p className="text-xs text-gray-400 font-mono tracking-wider uppercase mt-1">
                    Highly qualified team coordinating public capacity, technology, and international testing tracks.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className={`${cardBgClass} border border-dashed rounded-lg p-6 flex flex-col justify-between min-h-[200px]`}>
                    <div>
                      <span className="text-[9px] bg-[#134074] text-white font-mono rounded px-1.5 py-0.5 uppercase">
                        Management Directorate
                      </span>
                      <p className={`text-sm font-bold mt-4 font-sans ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#0B2545]'}`}>
                        `[CONFIRM EXECUTIVE DIRECTOR NAME]`
                      </p>
                      <p className="text-xs text-shared-gray text-gray-400 mt-2 font-mono">
                        Directs public-sector collaboration frameworks, school key audits, and legal oversight at the central Rivers State board of directors registry.
                      </p>
                    </div>
                  </div>

                  <div className={`${cardBgClass} border border-dashed rounded-lg p-6 flex flex-col justify-between min-h-[200px]`}>
                    <div>
                      <span className="text-[9px] bg-[#134074] text-white font-mono rounded px-1.5 py-0.5 uppercase">
                        Information Technology
                      </span>
                      <p className={`text-sm font-bold mt-4 font-sans ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#0B2545]'}`}>
                        `[CONFIRM CHIEF TECHNOLOGY OFFICER]`
                      </p>
                      <p className="text-xs text-shared-gray text-gray-400 mt-2 font-mono">
                        Drives CBT exam implementations, school subscription databases, security keys encryption, and smart-host audits alignment.
                      </p>
                    </div>
                  </div>

                  <div className={`${cardBgClass} border border-dashed rounded-lg p-6 flex flex-col justify-between min-h-[200px]`}>
                    <div>
                      <span className="text-[9px] bg-[#134074] text-white font-mono rounded px-1.5 py-0.5 uppercase">
                        Educational Coordinator
                      </span>
                      <p className={`text-sm font-bold mt-4 font-sans ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#0B2545]'}`}>
                        `[CONFIRM INT. EXAMS SPECIALIST]`
                      </p>
                      <p className="text-xs text-shared-gray text-gray-400 mt-2 font-mono">
                        Facilitates Cambridge Assessors modules integration, IELTS test prep registration, and community-guided athletic program calendars.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PARTNERS */}
          {activeTab === 'partners' && (
            <div className="space-y-12 animate-fade-in mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PARTNERSHIPS.map((partner) => (
                  <div 
                    key={partner.id}
                    className={`${cardBgClass} border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col justify-between hover:border-[#134074]/30 hover:shadow-md transition-all duration-300`}
                  >
                    <div className="space-y-4">
                      <div className="flex gap-4 items-center border-b border-gray-300/10 pb-4">
                        <div className="w-12 h-12 bg-[#0B2545] text-[#D4AF37] font-mono font-bold text-xs rounded-lg flex items-center justify-center shrink-0 uppercase tracking-widest border border-[#D4AF37]/35">
                          {partner.logoPlaceholder}
                        </div>
                        <div>
                          <h3 className={`font-sans font-bold text-base md:text-lg tracking-tight leading-tight ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
                            {partner.name}
                          </h3>
                          <p className="text-[10px] font-mono text-gray-400 uppercase font-bold tracking-wider">
                            {partner.role}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-gray-400 leading-relaxed min-h-[50px]">
                        {partner.description}
                      </p>

                      <div className="space-y-1 text-xs text-gray-500 font-sans">
                        <p className="flex gap-1.5 items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                          <span>Strategic regulatory accord active</span>
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-300/10 mt-6 flex justify-between items-center text-xs">
                      <span className="text-[10px] font-mono text-gray-400">Institutional Accord Aligned</span>
                      <span className="text-[#D4AF37] font-bold">Standard Confirmed</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Regulatory caution note */}
              <div className={`p-6 rounded-lg text-xs leading-relaxed max-w-2xl mx-auto flex gap-4 ${
                theme === 'dark' ? 'bg-[#191F2D] border border-white/10 text-gray-300' : 'bg-yellow-50 border border-yellow-250 text-gray-700'
              }`}>
                <ShieldAlert className="w-8 h-8 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <strong>Institutional Affiliation Notice:</strong> Clear Impact Services Limited operates coordinates of partnerships with national and international channels physically. No secondary or fictitious affiliations are declared.
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-10 animate-fade-in mb-10">
              
              {/* Category selector */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {galleryTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setGalleryFilter(tab.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                      galleryFilter === tab.id
                        ? 'bg-[#0B2545] border-[#0B2545] text-white shadow'
                        : theme === 'dark'
                          ? 'bg-[#191F2D] border-white/10 text-gray-300 hover:border-[#D4AF37]'
                          : 'bg-white border-gray-200 text-[#0B2545] hover:border-[#0B2545]/40 hover:bg-gray-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Grid output */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGallery.map((item) => (
                  <div 
                    key={item.id}
                    className={`${cardBgClass} border rounded-xl overflow-hidden group hover:shadow-lg transition-all`}
                  >
                    <div 
                      className={`h-56 relative ${getCategoryImage(item.category)} p-6 flex flex-col justify-between text-white cursor-pointer`}
                      onClick={() => setActivePhoto(item.id)}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                      
                      <div className="flex justify-between items-center relative z-10 text-[9px] uppercase font-mono tracking-widest bg-black/45 px-2 py-0.5 rounded backdrop-blur-sm">
                        <span>Archive ID: {item.id}</span>
                        <span className="text-[#D4AF37] font-bold">• APPROVED</span>
                      </div>

                      <div className="flex flex-col items-center justify-center h-full relative z-10 text-center select-none opacity-80 group-hover:opacity-100 transition-opacity">
                        <Image className="w-10 h-10 text-[#D4AF37] mb-2" />
                        <p className="font-sans font-bold text-sm tracking-tight text-white mb-1">{item.title}</p>
                        <span className="text-[10px] font-mono text-gray-300">Port Harcourt & Owerri Chronology</span>
                      </div>

                      <div className="flex justify-between items-center relative z-10 pt-2 border-t border-white/20 text-[9px] font-mono">
                        <span className="flex items-center gap-1 text-gray-300">
                          <MapPin className="w-3 h-3 text-[#D4AF37]" /> {item.location}
                        </span>
                        <span className="flex items-center gap-1 hover:underline text-[#D4AF37]">
                          <Eye className="w-3.5 h-3.5" /> View Photo
                        </span>
                      </div>
                    </div>

                    <div className="p-4 space-y-1.5 bg-black/5">
                      <p className="text-[10px] font-mono font-bold uppercase text-[#D4AF37]">
                        {item.category}
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lightbox */}
              {activePhoto && (
                <div className="fixed inset-0 bg-[#0B2545]/95 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
                  {(() => {
                    const item = GALLERY_ITEMS.find(p => p.id === activePhoto);
                    if (!item) return null;
                    return (
                      <div className="max-w-2xl w-full bg-[#191F2D] border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-scale-up">
                        <div className={`h-80 ${getCategoryImage(item.category)} relative p-8 flex flex-col justify-between text-white`}>
                          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                          <div className="flex font-mono text-xs items-center justify-between relative z-10">
                            <span className="text-gray-200">VERIFIED CORPORATE PHOTO ARCHIVE</span>
                            <button 
                              onClick={() => setActivePhoto(null)}
                              className="bg-black/30 hover:bg-black/50 px-2 py-1 transition-all rounded text-xs uppercase"
                            >
                              Close [X]
                            </button>
                          </div>
                          <div className="text-center py-6 relative z-10 flex flex-col items-center">
                            <Image className="w-12 h-12 text-[#D4AF37] mb-2" />
                            <h4 className="font-sans font-bold text-lg text-white tracking-wide">{item.title}</h4>
                            <p className="text-xs text-gray-300 font-mono mt-1">Unaltered Session Output Artifact</p>
                          </div>
                          <div className="flex justify-between items-center relative z-10 text-xs font-mono border-t border-white/20 pt-2 text-[#D4AF37]">
                            <span>Location: {item.location}</span>
                            <span>Outcome Documented</span>
                          </div>
                        </div>
                        <div className="p-6 space-y-4">
                          <p className="text-xs text-gray-300 leading-relaxed font-sans font-medium">
                            {item.description}
                          </p>
                          <div className="text-right">
                            <button 
                              onClick={() => setActivePhoto(null)}
                              className="bg-[#0B2545] hover:bg-[#134074] text-white font-bold text-xs py-2 px-6 rounded transition-colors uppercase tracking-wider cursor-pointer"
                            >
                              Close Portal view
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: DOWNLOADS */}
          {activeTab === 'downloads' && (
            <div className="space-y-12 animate-fade-in mb-10">
              {isGated ? (
                <div className={`${cardBgClass} border rounded-xl p-8 max-w-lg mx-auto shadow-md space-y-6`}>
                  <div className="text-center space-y-2">
                    <LockKeyhole className="w-12 h-12 text-[#D4AF37] mx-auto animate-pulse" />
                    <h2 className={`font-sans font-bold text-lg tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
                      Unlock Secured Corporate Library
                    </h2>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto">
                      Please enter your name and organizational email to unlock our corporate dossier, calendars, and licensing manuals instantly.
                    </p>
                  </div>

                  <form onSubmit={handleUnlockDownloads} className="space-y-4 text-xs">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase text-gray-400 tracking-wider mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        value={gateName}
                        onChange={(e) => setGateName(e.target.value)}
                        placeholder="e.g. Dr. Florence Alaba"
                        required
                        className={`w-full p-2.5 rounded border focus:outline-none ${
                          theme === 'dark' 
                            ? 'bg-black/20 border-white/10 text-white focus:border-[#D4AF37]' 
                            : 'bg-gray-100 border-gray-300 text-gray-800 focus:border-[#0B2545]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold uppercase text-gray-400 tracking-wider mb-1.5">
                        Corporate / Institutional Email
                      </label>
                      <input
                        type="email"
                        value={gateEmail}
                        onChange={(e) => setGateEmail(e.target.value)}
                        placeholder="name@organization.com"
                        required
                        className={`w-full p-2.5 rounded border focus:outline-none ${
                          theme === 'dark' 
                            ? 'bg-black/20 border-white/10 text-white focus:border-[#D4AF37]' 
                            : 'bg-gray-100 border-gray-300 text-gray-800 focus:border-[#0B2545]'
                        }`}
                      />
                    </div>

                    {downloadsError && <p className="text-xs text-red-500 font-bold font-mono">{downloadsError}</p>}

                    <button
                      type="submit"
                      className="w-full bg-[#0B2545] hover:bg-[#134074] text-white text-xs font-bold py-3 rounded transition-all uppercase tracking-wider cursor-pointer"
                    >
                      Authenticate Access
                    </button>
                  </form>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg text-xs text-green-500 flex items-center justify-between">
                    <span className="flex items-center gap-2 font-semibold">
                      <CheckCircle2 className="w-4.5 h-4.5 text-green-500 shrink-0" />
                      <span>Library unlocked successfully! You may stream corporate resources.</span>
                    </span>
                    <button 
                      onClick={() => setIsGated(true)}
                      className="text-[#D4AF37] hover:underline text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Lock Library
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DOWNLOADS_CATALOG.map((item) => (
                      <div 
                        key={item.id}
                        className={`${cardBgClass} border rounded-xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-[#134074]/30 transition-all duration-300`}
                      >
                        <div className="space-y-4">
                          <div className="flex justify-between items-center text-[10px] font-mono uppercase text-[#D4AF37] border-b border-gray-300/10 pb-2">
                            <span>Category: {item.category}</span>
                            <span className="text-gray-500">{item.fileSize}</span>
                          </div>

                          <div className="space-y-1.5">
                            <h3 className={`font-sans font-bold text-base tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
                              {item.title}
                            </h3>
                            <p className="text-xs text-gray-400 leading-relaxed min-h-[50px]">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <div className="pt-6 border-t border-gray-300/10 mt-6 flex justify-between items-center text-xs">
                          <span className="text-green-500 font-bold font-mono">Dossier Available</span>
                          <button
                            onClick={() => triggerDownloadFile(item)}
                            className="bg-[#0B2545] hover:bg-[#D4AF37] hover:text-[#0B2545] text-[#D4AF37] p-2.5 rounded-full transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                            aria-label="Download corporate catalog file"
                          >
                            <Download className="w-4.5 h-4.5 shrink-0" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
