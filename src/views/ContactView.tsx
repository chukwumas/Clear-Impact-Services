/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Watch, MessageSquare, ShieldAlert, CheckCircle2, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { InquirySubmission } from '../types';

export default function ContactView() {
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceCategory, setServiceCategory] = useState('Corporate Consulting');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

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
    <div className="animate-fade-in py-12 bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        
        {/* Title elements */}
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center md:text-left">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
            Contact Gateway
          </span>
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-[#0B2545] tracking-tight">
            Connect With Our Advisory Office
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Reach out via phone, direct WhatsApp, secure inbox, or visit our permanent registered headquarters in Port Harcourt, Rivers State.
          </p>
        </div>

        {/* Info Grid Split */}
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct coordinates & Simulated interactive map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Coordinates widget */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4">
              <h3 className="font-sans font-bold text-lg text-[#0B2545] tracking-tight border-b pb-2">
                Corporate Coordinates
              </h3>

              <div className="space-y-4 font-sans text-xs text-gray-600">
                <div className="flex gap-3 leading-relaxed">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="font-bold text-[#0B2545]">Physical Registered Address:</p>
                    <p>{CONTACT_INFO.address}</p>
                    <span className="text-[10px] text-gray-400 font-mono italic">Near Airport Road Intersection, Rumuosi</span>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="font-bold text-[#0B2545]">Active Phone Contacts:</p>
                    <p>{CONTACT_INFO.phones.join(' OR ')}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="font-bold text-[#0B2545]">Official Inbox Portal:</p>
                    <p className="truncate">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <Watch className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="font-bold text-[#0B2545]">Operational Hours:</p>
                    <p>Monday - Friday: 08:00 AM - 05:00 PM (GMT +1)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* High level visual custom simulated map */}
            <div className="bg-[#0B2545] text-white p-6 rounded-lg border border-[#D4AF37]/15 relative overflow-hidden h-72 flex flex-col justify-between shadow">
              {/* Subtle map lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#134074_1.5px,transparent_1.5px),linear-gradient(to_bottom,#134074_1.5px,transparent_1.5px)] bg-[size:2rem_2rem] opacity-25"></div>
              
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
                <span className="text-white font-bold bg-[#134074] px-1.5 py-0.5 rounded">Rimuosi State Registry</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inline Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-sm">
            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
                <h3 className="font-sans font-bold text-xl text-[#0B2545] tracking-tight">Inquiry Logged</h3>
                <p className="text-xs text-gray-500 max-w-md mx-auto">
                  Thank you Dr./Mr./Mrs. Your consultation agenda is securely posted. A senior advisor will call or email back within 2 hours.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button 
                    onClick={resetForm}
                    className="bg-[#0B2545] hover:bg-[#134074] text-white text-xs font-bold py-2.5 px-6 rounded uppercase tracking-wider"
                  >
                    Submit New Message
                  </button>
                  <a
                    href={CONTACT_INFO.socials.whatsapp}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2.5 px-6 rounded flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                  >
                    WhatsApp Advisory Check-In
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInlineSubmit} className="space-y-4">
                <h3 className="font-sans font-bold text-lg text-[#0B2545] tracking-tight border-b pb-2 mb-4">
                  Enterprise Consultation Intake
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-600 tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Joy Obasanjo"
                      required
                      className="w-full text-xs border border-gray-300 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-600 tracking-wider mb-1.5">
                      Organization / School Name
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Apex High-School"
                      className="w-full text-xs border border-gray-300 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-600 tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@organization.com"
                      required
                      className="w-full text-xs border border-gray-300 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-600 tracking-wider mb-1.5">
                      Active Phone *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0803 776 2620"
                      required
                      className="w-full text-xs border border-gray-300 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-600 tracking-wider mb-1.5">
                    Service Pillar of Interest *
                  </label>
                  <select
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className="w-full text-xs border border-gray-300 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#0B2545] bg-white text-gray-800"
                  >
                    <option value="Corporate Consulting">Corporate Consulting & Professional Training</option>
                    <option value="Educational Technology">Educational & Digital Learning Services (WAEC E-Study)</option>
                    <option value="International Exams">International Examination Support (IELTS / TKT)</option>
                    <option value="Cybersecurity">Cybersecurity & Tech Services</option>
                    <option value="Media & Branding">Media, Branding & Creative Services</option>
                    <option value="Events & Youth Development">Events, Project & Youth Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-600 tracking-wider mb-1.5">
                    Support Requirements Details *
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your training size, school, CBT requirements or event management inquiries..."
                    rows={4}
                    required
                    className="w-full text-xs border border-gray-300 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                  />
                </div>

                {error && <p className="text-xs text-red-500 font-semibold">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0B2545] hover:bg-[#134074] text-white font-bold text-xs tracking-wider uppercase py-3 rounded shadow transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Posting secure data...' : 'Submit Advisory Consultation'} <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Physical coordinates verify alert */}
        <div className="p-4 bg-yellow-50 border border-yellow-200 text-xs text-gray-600 rounded flex gap-3 leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
          <span>Need help finding us? Plot 114 is located along the primary Rumuosi/Rumuagholu link-way just off the Airport Road intersection. Call our local logistics helpdesk at 08037762620 if lost!</span>
        </div>

      </div>
    </div>
  );
}
