/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Shield, 
  Palette, 
  Calendar, 
  ArrowUpRight, 
  HelpCircle,
  Award,
  BookOpen,
  CheckSquare,
  BarChart3,
  Lock,
  ShieldCheck,
  ChevronRight,
  Clock,
  Users,
  Target
} from 'lucide-react';
import { CORE_SERVICES, TRAINING_PROGRAMS, PROJECTS_EVENTS } from '../data';
import { WaecEStudyLogo, WaecVerifyLogo } from '../components/PartnerLogos';

type ServicesTab = 'pillars' | 'waec' | 'training' | 'projects';
type ProjectCategory = 'all' | 'cultural' | 'sports' | 'youth' | 'academic' | 'corporate';

interface ServicesViewProps {
  onOpenInquiry: (service: string) => void;
  theme?: 'light' | 'dark';
}

export default function ServicesView({ onOpenInquiry, theme = 'light' }: ServicesViewProps) {
  const [activeTab, setActiveTab] = useState<ServicesTab>('pillars');
  const [waecMode, setWaecMode] = useState<'study' | 'verify'>('study');
  const [projectCat, setProjectCat] = useState<ProjectCategory>('all');

  const mainBgClass = theme === 'dark' ? 'bg-[#11151F] text-[#E2E8F0]' : 'bg-[#FAF8F5] text-[#1D242E]';
  const cardBgClass = theme === 'dark' ? 'bg-[#191F2D] border-white/5' : 'bg-white border-[#E2E8F0]';
  const subBgClass = theme === 'dark' ? 'bg-[#21293B]' : 'bg-[#F4F6F9]';

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

  const waecPlans = [
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

  // Projects calculations 
  const filteredProjects = projectCat === 'all'
    ? PROJECTS_EVENTS
    : PROJECTS_EVENTS.filter(p => p.category === projectCat);

  const categoryLabels: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'cultural', label: 'Cultural Festivals' },
    { id: 'sports', label: 'Sports Leagues' },
    { id: 'youth', label: 'Youth Programs' },
    { id: 'academic', label: 'Academic Challenges' },
    { id: 'corporate', label: 'Civil Capacity' }
  ];

  const tabsConfig: { id: ServicesTab; label: string }[] = [
    { id: 'pillars', label: 'Operational Divisions' },
    { id: 'waec', label: 'WAEC E-Study Suite' },
    { id: 'training', label: 'Training Registry' },
    { id: 'projects', label: 'Impact & Delivered Events' }
  ];

  return (
    <div className={`animate-fade-in py-10 transition-colors duration-300 min-h-screen ${mainBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        
        {/* Page Title Block */}
        <div className="border-b border-gray-300/20 pb-6 text-center md:text-left">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
            Solutions Matrix
          </span>
          <h1 className={`font-sans font-extrabold text-3xl md:text-5xl tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
            Our Services & delivered Outcomes
          </h1>
          <p className="text-xs text-gray-400 mt-2 max-w-2xl font-mono uppercase tracking-wider">
            Delivering modern corporate learning, tech consulting, and athletic/cultural project coordination.
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
              className={`flex-1 text-center py-3 px-2 rounded-lg text-[10px] sm:text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer ${
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

        {/* TAB Content Rendering */}
        <div className="mt-8">
          
          {/* TAB 1: OPERATIONAL DIVISIONS */}
          {activeTab === 'pillars' && (
            <div className="space-y-12 animate-fade-in mb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {CORE_SERVICES.map((service) => (
                  <div 
                    key={service.id}
                    className={`${cardBgClass} border rounded-xl p-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-lg hover:border-[#134074]/30`}
                  >
                    <div className="space-y-6">
                      {/* Card Title & Icon */}
                      <div className="flex items-center gap-4 border-b border-gray-300/10 pb-4">
                        <div className="w-14 h-14 bg-[#0B2545] rounded-xl flex items-center justify-center shrink-0 border border-[#D4AF37]/35">
                          {getIcon(service.id)}
                        </div>
                        <div>
                          <h3 className={`font-sans font-extrabold text-base md:text-lg tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
                            {service.title}
                          </h3>
                          <p className="font-mono text-[9px] tracking-widest text-gray-400 uppercase">
                            Division Capabilities
                          </p>
                        </div>
                      </div>

                      {/* Subheading Short Description */}
                      <p className={`text-xs sm:text-sm leading-relaxed font-sans font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {service.shortDescription}
                      </p>

                      {/* Detailed Service List */}
                      <div className="space-y-2.5">
                        <p className="text-[10px] font-bold font-mono uppercase text-gray-400 tracking-wider">
                          Core Operational Tasks:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400">
                          {service.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-1.5 text-xs text-gray-500">
                              <span className="text-[#D4AF37] font-bold shrink-0">✓</span>
                              <span className="leading-tight">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Trigger */}
                    <div className="pt-6 border-t border-gray-300/10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-[10px] text-gray-500 font-mono">
                        Standard regulatory compliance assured
                      </span>
                      <button
                        onClick={() => onOpenInquiry(service.title)}
                        className="bg-[#0B2545] hover:bg-[#134074] border border-[#D4AF37]/20 text-white font-bold text-xs py-2.5 px-5 rounded flex items-center gap-1.5 transition-all shadow cursor-pointer uppercase tracking-wider"
                      >
                        Request Consultation <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Multi-sector request box */}
              <div className={`${cardBgClass} border p-8 rounded-xl text-center space-y-4 max-w-2xl mx-auto`}>
                <HelpCircle className="w-10 h-10 text-[#D4AF37] mx-auto animate-pulse" />
                <h4 className={`font-sans font-bold text-lg tracking-tight ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#0B2545]'}`}>
                  Need a Joint Multi-Sector Corporate Setup?
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed max-w-lg mx-auto">
                  Many government capacity workshops and secondary high-school initiatives require a combined SLA of technology, sports logistics, and curriculum provisioning. We configure custom team operations under one contract.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenInquiry('General Inquiry')}
                    className="text-white hover:text-[#D4AF37] bg-[#0B2545] hover:bg-[#134074] border border-[#D4AF37]/35 text-[10px] font-bold py-2.5 px-6 rounded transition-colors inline-block font-mono uppercase tracking-wider cursor-pointer"
                  >
                    Contact Solutions Desk
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: WAEC SPOTLIGHT */}
          {activeTab === 'waec' && (
            <div className="space-y-12 animate-fade-in mb-10">
              
              {/* Flagship Header Banner */}
              <div className="bg-[#0B2545] text-white p-8 md:p-12 rounded-xl relative overflow-hidden border border-[#D4AF37]/20 shadow-xl">
                <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#134074]/40 rounded-full blur-3xl"></div>
                <div className="relative z-10 max-w-3xl space-y-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#134074] border border-[#D4AF37]/30 rounded text-xs font-semibold text-[#D4AF37] uppercase tracking-wider font-mono">
                    <Award className="w-4 h-4 text-[#D4AF37]" /> Sidmach Gold Partner Strategic Collaboration
                  </span>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-4xl tracking-tight leading-tight text-white mb-2">
                    WAEC E-Study & Verification Systems
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                    Deploy standard educational diagnostic utilities, practice mocks, and automated credential check setup. In official alliance to uplift secondary high-schools outcomes across Rivers State.
                  </p>
                </div>
              </div>

              {/* Study vs Verify vs PortalAcademy inside WAEC Solutions Grid */}
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row justify-center border-b border-gray-300/10 gap-2 sm:gap-0">
                  <button
                    onClick={() => setWaecMode('verify')}
                    className={`pb-4 px-6 font-sans font-bold text-xs tracking-wide border-b-2 transition-colors cursor-pointer ${
                      waecMode === 'verify'
                        ? 'border-[#D4AF37] text-[#D4AF37]'
                        : 'border-transparent text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    1. WAEC VERIFY GATEWAY (FLAGSHIP)
                  </button>
                  <button
                    onClick={() => setWaecMode('study')}
                    className={`pb-4 px-6 font-sans font-bold text-xs tracking-wide border-b-2 transition-colors cursor-pointer ${
                      waecMode === 'study'
                        ? 'border-[#D4AF37] text-[#D4AF37]'
                        : 'border-transparent text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    2. WAEC E-STUDY EXAM PREP
                  </button>
                  <button
                    onClick={() => setWaecMode('portalacademy' as any)}
                    className={`pb-4 px-6 font-sans font-bold text-xs tracking-wide border-b-2 transition-colors cursor-pointer ${
                      (waecMode as string) === 'portalacademy'
                        ? 'border-[#D4AF37] text-[#D4AF37]'
                        : 'border-transparent text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    3. PORTALACADEMY SCHOOL PORTAL
                  </button>
                </div>

                {waecMode === 'verify' && (
                  <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                      <div className="flex flex-col gap-3">
                        <div className="inline-flex self-start">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-mono font-bold tracking-wider uppercase">
                            ★ FLAGSHIP ADVISORY SOLUTION
                          </span>
                        </div>
                        <WaecVerifyLogo className="h-16 self-start" />
                      </div>
                      <h3 className={`font-sans font-extrabold text-xl tracking-tight mt-2 ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
                        WAEC Verify Result Confirmation Gateway
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        Authorized digital verification gateway allowing universities, government recruitment commissions, and international credential evaluation boards to confirm WASSCE outcomes instantly.
                      </p>

                      <div className="space-y-4 text-xs text-gray-500">
                        <div className="flex gap-3">
                          <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <div>
                            <p className={`font-bold ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#0B2545]'}`}>Eliminate Forgery Risk</p>
                            <p className="text-[11px] text-gray-450">Secure, encrypted direct link-way straight to the West African Examinations Council core archives.</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <div>
                            <p className={`font-bold ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#0B2545]'}`}>Instant Processing Speed</p>
                            <p className="text-[11px] text-gray-450">Bypasses long processing queues and postage delays. Confirms results online inside 5 seconds.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${cardBgClass} border rounded-xl p-8 text-center space-y-6 shadow-sm flex flex-col items-center justify-center`}>
                      <WaecVerifyLogo className="h-16 shadow-inner p-2 bg-white/5 rounded-lg border border-[rgba(212,175,55,0.15)]" />
                      <div className="space-y-2">
                        <h4 className={`font-sans font-bold text-base ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
                          Activate Verification Service
                        </h4>
                        <p className="text-xs text-gray-400 max-w-sm mx-auto">
                          Authorize your school or agency department list to confirm candidate credentials online securely.
                        </p>
                      </div>
                      <button 
                        onClick={() => onOpenInquiry('WAEC Verify Gateway setup')}
                        className="bg-[#0B2545] hover:bg-[#134074] border border-[#D4AF37]/35 text-white font-bold text-xs py-3.5 px-6 rounded uppercase tracking-wider font-mono cursor-pointer transition-colors"
                      >
                        Request Setup Terms
                      </button>
                    </div>
                  </div>
                )}

                {waecMode === 'study' && (
                  <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                      <div className="flex flex-col gap-3">
                        <WaecEStudyLogo className="h-16 self-start" />
                      </div>
                      <h3 className={`font-sans font-extrabold text-xl tracking-tight mt-2 ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
                        High-School Diagnostic Prep & e-Study Suite
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        The fully computerized revision software by Sidmach provides exhaustive syllabus mappings, thousands of exam practice simulations, and instant continuous diagnostic feedback matrices.
                      </p>

                      <div className="space-y-4 text-xs text-gray-500">
                        <div className="flex gap-3">
                          <BookOpen className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <div>
                            <p className={`font-bold ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#0B2545]'}`}>Syllabus Revision books</p>
                            <p className="text-[11px] text-gray-450">Interactive flashcards and lessons aligned exactly with final authorized curricula guidelines.</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <CheckSquare className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <div>
                            <p className={`font-bold ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#0B2545]'}`}>Mock CBT Simulation</p>
                            <p className="text-[11px] text-gray-450">Familiarizes students with computer-based layouts aligned with authentic final examinations centers setup.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${cardBgClass} border rounded-xl p-6 space-y-4 shadow-sm`}>
                      <span className="font-mono text-[9px] bg-[#0B2545] border border-[#D4AF37]/20 text-white rounded px-2 py-0.5 uppercase tracking-wider block w-max">
                        CBT Evaluation Grid Instance
                      </span>
                      <div className="space-y-3 font-mono text-xs text-gray-400">
                        <div className={`p-4 rounded border ${theme === 'dark' ? 'bg-[#21293B] border-white/5' : 'bg-gray-50 border-gray-150'}`}>
                          <div className="flex justify-between items-center mb-1 font-sans">
                            <span className="font-bold">General Mathematics Mock</span>
                            <span className="text-green-500 font-bold">85% Correct</span>
                          </div>
                          <div className="w-full bg-gray-300/30 h-1.5 rounded overflow-hidden">
                            <div className="bg-green-500 h-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                        
                        <div className={`p-4 rounded border ${theme === 'dark' ? 'bg-[#21293B] border-white/5' : 'bg-gray-50 border-gray-150'}`}>
                          <div className="flex justify-between items-center mb-1 font-sans">
                            <span className="font-bold">English Language Section B</span>
                            <span className="text-[#D4AF37] font-bold">Weak Sector: Lexis Structure</span>
                          </div>
                          <p className="text-[10px] text-red-400 mt-1">Recommended Action: Review Chapter 4 of Sidmach E-Study.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {((waecMode as string) === 'portalacademy') && (
                  <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                      <h3 className={`font-sans font-extrabold text-xl tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
                        PortalAcademy School Management Portal
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        Sidmach's premium cloud-native School Management System (SMS) built to completely automate student records databases, tuition billing rosters, grading matrices, and stakeholder text notification lists.
                      </p>

                      <div className="space-y-4 text-xs text-gray-500">
                        <div className="flex gap-3">
                          <Users className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <div>
                            <p className={`font-bold ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#0B2545]'}`}>Unified School Records</p>
                            <p className="text-[11px] text-gray-450">Paperless student folders, centralized attendance lists, grading sheets, and automatic report cards.</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Briefcase className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <div>
                            <p className={`font-bold ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#0B2545]'}`}>Automated Tuition Collection</p>
                            <p className="text-[11px] text-gray-450">Secured digital invoicing pipelines. Allows parents to settle fees online with real-time financial logs for school bursars.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${cardBgClass} border rounded-xl p-6 text-center space-y-4 shadow-sm`}>
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto border border-[#D4AF37]/20">
                        <GraduationCap className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <h4 className={`font-sans font-bold text-base ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
                        Activate School Portal Demo
                      </h4>
                      <p className="text-xs text-gray-400">
                        Deploy PortalAcademy cloud dashboard key to reorganize your institution's records.
                      </p>
                      <button 
                        onClick={() => onOpenInquiry('PortalAcademy cloud SMS deployment')}
                        className="bg-[#0B2545] hover:bg-[#134074] border border-[#D4AF37]/35 text-white font-bold text-xs py-3 px-6 rounded uppercase tracking-wider font-mono cursor-pointer transition-colors"
                      >
                        Request Demo Installation
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing Cards Grid */}
              <div className="space-y-6 pt-6 border-t border-gray-300/10">
                <h3 className={`text-center font-sans font-extrabold text-xl ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
                  Deployment Licensing Plans
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {waecPlans.map((plan, i) => (
                    <div 
                      key={i}
                      className={`${cardBgClass} border rounded-xl p-6 flex flex-col justify-between shadow-sm hover:border-[#D4AF37]/45 transition-all`}
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className={`font-sans font-bold text-base ${theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#0B2545]'}`}>
                            {plan.title}
                          </h4>
                          <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block mt-0.5">
                            {plan.price}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed min-h-[50px]">
                          {plan.desc}
                        </p>
                        <ul className="space-y-2 text-xs text-gray-500">
                          {plan.features.map((feat, k) => (
                            <li key={k} className="flex gap-2 items-start text-xs text-gray-500">
                              <span className="text-green-500 font-bold shrink-0">✓</span>
                              <span className="leading-tight">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-6 border-t border-gray-300/10 mt-6">
                        <button
                          onClick={() => onOpenInquiry(`WAEC Licensing: ${plan.title}`)}
                          className="w-full bg-[#0B2545] hover:bg-[#134074] text-white font-bold text-xs py-2.5 rounded transition-all uppercase tracking-wider font-mono cursor-pointer"
                        >
                          Request Setup Terms
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TRAINING REGISTRY */}
          {activeTab === 'training' && (
            <div className="space-y-12 animate-fade-in mb-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TRAINING_PROGRAMS.map((prog) => (
                  <div 
                    key={prog.id}
                    className={`${cardBgClass} border rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300`}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-[10px] uppercase font-mono text-[#D4AF37] border-b border-gray-300/10 pb-2">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {prog.duration}</span>
                        <span>OFFICIAL CERTIFICATE</span>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className={`font-sans font-bold text-sm md:text-base tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
                          {prog.title}
                        </h3>
                        <p className="text-xs text-gray-400 leading-relaxed min-h-[60px]">
                          {prog.description}
                        </p>
                      </div>

                      <div className="p-3 bg-[#E5E2D9]/10 rounded border border-gray-500/10 text-[11px] text-gray-400 space-y-1">
                        <span className="font-extrabold uppercase text-[9px] tracking-wider block text-gray-400">
                          Target Core Curriculum:
                        </span>
                        {prog.curriculum.map((curr, idx) => (
                          <div key={idx} className="flex gap-2 items-start">
                            <span className="text-[#D4AF37] font-mono shrink-0">•</span>
                            <span className="leading-tight text-gray-500">{curr}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-300/10 mt-6 flex flex-col gap-3">
                      <div className="flex justify-between text-[11px] font-mono text-gray-500">
                        <span>Audiences:</span>
                        <span className="text-right truncate max-w-[130px]">{prog.targetAudience}</span>
                      </div>
                      <button
                        onClick={() => onOpenInquiry(`Training Cohort: ${prog.title}`)}
                        className="w-full bg-[#0B2545] hover:bg-[#134074] text-white text-xs font-bold py-2.5 rounded transition-all uppercase tracking-wider font-mono cursor-pointer"
                      >
                        Register Group Spot
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: DELIVERED PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-10 animate-fade-in mb-10">
              
              {/* Category selector */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {categoryLabels.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setProjectCat(tab.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                      projectCat === tab.id
                        ? 'bg-[#0B2545] border-[#0B2545] text-white shadow'
                        : theme === 'dark'
                          ? 'bg-[#191F2D] border-white/10 text-gray-300 hover:border-[#D4AF37]'
                          : 'bg-white border-gray-200 text-[#0B2545] hover:border-gray-300/70 hover:bg-gray-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Grid content output */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((proj) => (
                  <div 
                    key={proj.id}
                    className={`${cardBgClass} border rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-all`}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-[10px] font-mono uppercase text-[#D4AF37] border-b border-gray-300/10 pb-2">
                        <span>Category: {proj.category}</span>
                        <span>YEAR {proj.year}</span>
                      </div>

                      <div className="space-y-1.5">
                        <h4 className={`font-sans font-bold text-base tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#0B2545]'}`}>
                          {proj.title}
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed min-h-[50px]">
                          {proj.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-300/10 mt-6 flex justify-between items-center text-xs font-mono">
                      <span className="text-gray-500">Location: {proj.location}</span>
                      <span className="text-green-500 font-bold">OUTCOME ACHIEVED</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
