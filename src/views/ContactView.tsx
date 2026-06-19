/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Watch, MessageSquare, ShieldAlert, CheckCircle2, Send, User, Building, HelpCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { InquirySubmission } from '../types';

interface ContactViewProps {
  theme?: 'light' | 'dark';
}

export default function ContactView({ theme = 'light' }: ContactViewProps) {
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceCategory, setServiceCategory] = useState('Corporate Consulting');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const isDark = theme === 'dark';
  const mainBgClass = isDark ? 'bg-[#11151F] text-[#E2E8F0]' : 'bg-[#FAF8F5] text-[#1D242E]';
  const cardBgClass = isDark ? 'bg-[#191F2D] border-white/5' : 'bg-white border-gray-200';
  const subBgClass = isDark ? 'bg-[#21293B]' : 'bg-[#F4F6F9]';
  const textPrimaryClass = isDark ? 'text-white' : 'text-[#0B2545]';

  const mailtoLink = `mailto:info@cisl.africa?subject=${encodeURIComponent(`Clear Impact Inquiry: ${serviceCategory}`)}&body=${encodeURIComponent(
    `Hello Clear Impact Advisory Office,

I would like to submit an official inquiry with details below:

- Full Name: ${fullName}
- Organization/School: ${organization || '[Individual]'}
- Email Address: ${email}
- Phone Number: ${phone}
- Service Area: ${serviceCategory}

Inquiry Details:
${message}

Best regards,
${fullName}`
  )}`;

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setError('Please fill in all required fields indicated with an asterisk (*).');
      return;
    }

    setIsSubmitting(true);
    setError('');

    setTimeout(() => {
      const submission: InquirySubmission = {
        id: 'con_' + Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toLocaleString(),
        fullName,
        organization: organization || '[Individual]',
        email,
        phone,
        serviceCategory,
        message,
        status: 'New'
      };

      const existingStr = localStorage.getItem('clear_impact_inquiries');
      const existing = existingStr ? JSON.parse(existingStr) : [];
      existing.unshift(submission);
      localStorage.setItem('clear_impact_inquiries', JSON.stringify(existing));

      setIsSubmitting(false);
      setIsSuccess(true);
      setError('');

      // Attempt automatic redirect to mail client
      try {
        window.location.href = mailtoLink;
      } catch (err) {
        console.warn('Mail client automatic launch prevented by browser context.', err);
      }
    }, 1200);
  };

  const resetForm = () => {
    setFullName('');
    setOrganization('');
    setEmail('');
    setPhone('');
    setServiceCategory('Corporate Consulting');
    setMessage('');
    setIsSuccess(false);
  };

  return (
    <div className={`animate-fade-in py-12 transition-colors duration-300 ${mainBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        
        {/* Title elements */}
        <div className={`p-8 rounded-lg border shadow-sm text-center md:text-left ${cardBgClass}`}>
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
            Contact Gateway
          </span>
          <h1 className={`font-sans font-extrabold text-3xl md:text-4xl tracking-tight ${textPrimaryClass}`}>
            Connect With Our Advisory Office
          </h1>
          <p className="text-sm text-gray-400 mt-2 max-w-2xl leading-relaxed">
            Reach out via phone, direct WhatsApp, secure inbox, or visit our permanent registered headquarters in Port Harcourt, Rivers State. All forms route automatically to our central registry.
          </p>
        </div>

        {/* Info Grid Split */}
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct coordinates & Simulated interactive map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Coordinates widget */}
            <div className={`p-6 rounded-lg border shadow-sm space-y-4 ${cardBgClass}`}>
              <h3 className={`font-sans font-bold text-lg tracking-tight border-b pb-2 ${textPrimaryClass} ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                Corporate Coordinates
              </h3>

              <div className="space-y-4 font-sans text-xs text-gray-400">
                <div className="flex gap-3 leading-relaxed">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className={`font-bold ${textPrimaryClass}`}>Physical Registered Address:</p>
                    <p>{CONTACT_INFO.address}</p>
                    <span className="text-[10px] text-slate-500 font-mono italic">Near Airport Road Intersection, Rumuosi</span>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className={`font-bold ${textPrimaryClass}`}>Active Phone Contacts:</p>
                    <p>{CONTACT_INFO.phones.join(' OR ')}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className={`font-bold ${textPrimaryClass}`}>Official Inbox Portal:</p>
                    <p className="truncate">info@cisl.africa</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <Watch className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className={`font-bold ${textPrimaryClass}`}>Operational Hours:</p>
                    <p>Monday - Friday: 08:00 AM - 05:00 PM (GMT +1)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* High level visual custom simulated map */}
            <div className={`text-white p-6 rounded-lg border relative overflow-hidden h-72 flex flex-col justify-between shadow ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-[#0B2545] border-[#D4AF37]/15'}`}>
              {/* Subtle map lines */}
              <div className={`absolute inset-0 bg-[linear-gradient(to_right,#134074_1.5px,transparent_1.5px),linear-gradient(to_bottom,#134074_1.5px,transparent_1.5px)] bg-[size:2rem_2rem] opacity-25`}></div>
              
              <div className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37]">
                Port Harcourt Geographic Pointer
              </div>

              {/* Visual simulated coordinates dot */}
              <div className="relative text-center self-center py-6">
                <div className="absolute top-1/2 left-1/2 -mt-4 -ml-4 w-8 h-8 rounded-full bg-[#D4AF37]/35 animate-ping"></div>
                <MapPin className="w-12 h-12 text-[#D4AF37] relative z-10 mx-auto" />
                <p className="text-white font-sans font-bold text-sm tracking-tight mt-2">Plot 114 Rumuosi Road</p>
                <p className="text-[10px] text-gray-300 font-mono font-semibold">Near Airport Road Intersection</p>
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono border-t border-[#134074] pt-2 text-gray-400">
                <span>Coordinates: 4.887° N, 6.974° E</span>
                <span className="text-white font-bold bg-[#134074] px-1.5 py-0.5 rounded">Rumuosi State Registry</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inline Inquiry Form */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-lg border shadow-sm ${cardBgClass}`}>
            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
                <h3 className={`font-sans font-bold text-xl tracking-tight ${textPrimaryClass}`}>Inquiry Logged</h3>
                <p className="text-xs text-shared-gray max-w-md mx-auto text-gray-400">
                  Thank you! Your consultation details are registered in our local system. The form has been packaged to routes directly to <strong className="text-[#D4AF37]">info@cisl.africa</strong>.
                </p>
                <p className="text-[11px] text-[#D4AF37] max-w-xs mx-auto italic">
                  Note: If your local email client did not open the draft automatically, utilize the dispatch button below:
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={mailtoLink}
                    className="bg-[#116936] hover:bg-[#116936]/90 text-white text-xs font-bold py-3 px-6 rounded uppercase tracking-wider block text-center border border-transparent transition-all"
                  >
                    Dispatch copy to info@cisl.africa
                  </a>
                  <button 
                    onClick={resetForm}
                    className={`text-xs font-bold py-3 px-6 rounded uppercase tracking-wider border ${isDark ? 'border-slate-800 text-white bg-slate-800/40 hover:bg-slate-850' : 'border-gray-250 text-gray-700 bg-gray-50 hover:bg-gray-100'}`}
                  >
                    Submit New Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInlineSubmit} className="space-y-5">
                <div>
                  <h3 className={`font-sans font-extrabold text-xl tracking-tight border-b pb-2 mb-2 ${textPrimaryClass} ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                    Enterprise Consultation Intake
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Fill the brief inquiry template below for immediate corporate planning assistance.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className={`block text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Joy Obasanjo"
                        required
                        className={`w-full text-xs border pl-9 p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                          isDark 
                            ? 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus:border-[#D4AF37]' 
                            : 'bg-white border-gray-300 text-[#0B2545] placeholder:text-slate-400 focus:border-[#0B2545]'
                        }`}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className={`block text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      Organization / School Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Apex High-School"
                        className={`w-full text-xs border pl-9 p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                          isDark 
                            ? 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus:border-[#D4AF37]' 
                            : 'bg-white border-gray-300 text-[#0B2545] placeholder:text-slate-400 focus:border-[#0B2545]'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className={`block text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@organization.com"
                        required
                        className={`w-full text-xs border pl-9 p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                          isDark 
                            ? 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus:border-[#D4AF37]' 
                            : 'bg-white border-gray-300 text-[#0B2545] placeholder:text-slate-400 focus:border-[#0B2545]'
                        }`}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className={`block text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      Active Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0803 776 2620"
                        required
                        className={`w-full text-xs border pl-9 p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                          isDark 
                            ? 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus:border-[#D4AF37]' 
                            : 'bg-white border-gray-300 text-[#0B2545] placeholder:text-slate-400 focus:border-[#0B2545]'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className={`block text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Service Pillar of Interest <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <HelpCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      value={serviceCategory}
                      onChange={(e) => setServiceCategory(e.target.value)}
                      className={`w-full text-xs border pl-9 p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all appearance-none ${
                        isDark 
                          ? 'bg-slate-900 border-slate-800 text-white focus:border-[#D4AF37]' 
                          : 'bg-white border-gray-300 text-gray-800 focus:border-[#0B2545]'
                      }`}
                    >
                      <option value="Corporate Consulting">Corporate Consulting & Professional Training</option>
                      <option value="Educational Technology">Educational & Digital Learning Services (WAEC E-Study / Verify)</option>
                      <option value="International Exams">International Examination Support (IELTS / TKT)</option>
                      <option value="Cybersecurity">Cybersecurity & Tech Services</option>
                      <option value="Media & Branding">Media, Branding & Creative Services</option>
                      <option value="Events & Youth Development">Events, Project & Youth Development</option>
                    </select>
                    {/* Retrofitted chevron indicator */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className={`block text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Support Requirements Details <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your training size, school, CBT requirements or event management inquiries..."
                      rows={5}
                      required
                      className={`w-full text-xs border pl-9 p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                        isDark 
                          ? 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus:border-[#D4AF37]' 
                          : 'bg-white border-gray-300 text-[#0B2545] placeholder:text-slate-400 focus:border-[#0B2545]'
                      }`}
                    />
                  </div>
                </div>

                {error && <p className="text-xs text-red-500 font-semibold">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#116936] hover:bg-[#116936]/90 text-white font-bold text-xs tracking-wider uppercase py-4 rounded shadow hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {isSubmitting ? 'Posting secure data...' : 'Submit Advisory Consultation'} <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Physical coordinates verify alert */}
        <div className={`p-4 border text-xs rounded flex gap-3 leading-relaxed ${isDark ? 'bg-amber-950/20 border-amber-900/40 text-amber-200' : 'bg-yellow-50 border-yellow-250 text-gray-700'}`}>
          <ShieldAlert className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
          <span>Need help finding us? Plot 114 is located along the primary Rumuosi/Rumuagholu link-way just off the Airport Road intersection. Call our local logistics helpdesk at 08037762620 if lost!</span>
        </div>

      </div>
    </div>
  );
}
