/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ChevronRight, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { CONTACT_INFO, CORE_SERVICES } from '../data';

interface FooterProps {
  setActivePage: (page: PageId) => void;
  onOpenInquiry: () => void;
}

export default function Footer({ setActivePage, onOpenInquiry }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-[#0B2545] text-[#F4F6F9] border-t border-[#134074] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Introduction */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-xl tracking-tight text-white">
                CLEAR <span className="text-[#D4AF37]">IMPACT</span>
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#F4F6F9]/80 uppercase">
                SERVICES LIMITED
              </span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              Africa's leading impact-driven corporate, educational, and technology solutions provider. Delivering efficiency, robust security, and verified learning platforms.
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold text-[#D4AF37] block mb-1">Our Core Mandate:</span>
              <p className="text-[11px] text-gray-400 italic">
                \"Transforming Organizations Through Training, Technology & Innovation\"
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-sm tracking-wide text-white border-b border-[#134074] pb-2 uppercase">
              Corporate Site Map
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left py-1 text-gray-300 hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
              >
                <ChevronRight className="w-3 h-3 text-[#D4AF37]" /> Home
              </button>
              <button
                onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left py-1 text-gray-300 hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
              >
                <ChevronRight className="w-3 h-3 text-[#D4AF37]" /> About Us
              </button>
              <button
                onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left py-1 text-gray-300 hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
              >
                <ChevronRight className="w-3 h-3 text-[#D4AF37]" /> Services
              </button>
              <button
                onClick={() => { setActivePage('waec'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left py-1 text-gray-300 hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
              >
                <ChevronRight className="w-3 h-3 text-[#D4AF37]" /> WAEC E-Study
              </button>
              <button
                onClick={() => { setActivePage('training'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left py-1 text-gray-300 hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
              >
                <ChevronRight className="w-3 h-3 text-[#D4AF37]" /> Training
              </button>
              <button
                onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left py-1 text-gray-300 hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
              >
                <ChevronRight className="w-3 h-3 text-[#D4AF37]" /> Projects & Events
              </button>
              <button
                onClick={() => { setActivePage('partners'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left py-1 text-gray-300 hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
              >
                <ChevronRight className="w-3 h-3 text-[#D4AF37]" /> Partners
              </button>
              <button
                onClick={() => { setActivePage('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left py-1 text-gray-300 hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
              >
                <ChevronRight className="w-3 h-3 text-[#D4AF37]" /> Gallery
              </button>
              <button
                onClick={() => { setActivePage('blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left py-1 text-gray-300 hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
              >
                <ChevronRight className="w-3 h-3 text-[#D4AF37]" /> News / Blog
              </button>
              <button
                onClick={() => { setActivePage('downloads'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left py-1 text-gray-300 hover:text-[#D4AF37] flex items-center gap-1.5 transition-colors"
              >
                <ChevronRight className="w-3 h-3 text-[#D4AF37]" /> Downloads
              </button>
              <button
                onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-left col-span-2 py-1 text-[#D4AF37] hover:underline flex items-center gap-1.5 transition-colors"
              >
                <ChevronRight className="w-3 h-3 text-[#D4AF37]" /> Contact Desk
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-sm tracking-wide text-white border-b border-[#134074] pb-2 uppercase">
              Registered Location
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <p className="flex gap-2 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{CONTACT_INFO.phones.join(' or ')}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                className="text-xs bg-[#134074] hover:bg-[#134074]/80 text-[#D4AF37] font-semibold py-2 px-4 rounded w-full text-center border border-[#D4AF37]/30 flex items-center justify-center gap-1.5 transition-all"
              >
                Request Consultation <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bulletin & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-sm tracking-wide text-white border-b border-[#134074] pb-2 uppercase">
              Enterprise Updates
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Subscribe to the Clear Insights Journal. Receive briefings on Cybersecurity trends and Education systems.
            </p>
            {subscribed ? (
              <div className="bg-[#134074]/30 border border-green-500/30 p-3 rounded text-[11px] text-green-400">
                Email successfully subscribed! Expect corporate briefings soon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  required
                  className="w-full text-xs bg-[#0B2545] border border-gray-500 rounded p-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0B2545] text-xs font-bold py-2 px-4 rounded transition-colors"
                >
                  Join Strategic Circular
                </button>
              </form>
            )}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.socials.whatsapp}
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all flex items-center justify-center"
                aria-label="Direct WhatsApp Line"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <span className="text-[10px] text-gray-400 font-mono">
                WhatsApp Live Advisory Available
              </span>
            </div>
          </div>

        </div>

        {/* Auditor Portal, Admin Trigger, & Bottom Strip */}
        <div className="border-t border-[#134074]/60 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-4">
          <p>© {currentYear} {CONTACT_INFO.companyName}. All Rights Reserved.</p>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => { setActivePage('admin'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-[#D4AF37] font-semibold flex items-center gap-1 transition-colors"
            >
              🔐 Client Inquiry Ledger
            </button>
            <span className="text-[#134074]">•</span>
            <span className="text-gray-500">Corporate Registration Verification Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
