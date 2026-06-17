/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { PageId } from '../types';
import { CONTACT_INFO } from '../data';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  onOpenInquiry: () => void;
}

export default function Header({ activePage, setActivePage, onOpenInquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'waec', label: 'WAEC E-Study' },
    { id: 'training', label: 'Training' },
    { id: 'projects', label: 'Projects & Events' },
    { id: 'partners', label: 'Partners' },
    { id: 'gallery', label: 'Media Gallery' },
    { id: 'blog', label: 'News & Blog' },
    { id: 'downloads', label: 'Downloads' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B2545]/95 backdrop-blur-md shadow-lg py-3 text-white border-b border-[#134074]'
            : 'bg-[#0B2545] text-white py-5 border-b border-[#0B2545]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo Brand Area */}
          <div
            className="flex flex-col cursor-pointer select-none"
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="font-sans font-bold text-lg md:text-xl tracking-tight text-white flex items-center gap-1.5">
              CLEAR <span className="text-[#D4AF37]">IMPACT</span>
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#F4F6F9]/80 uppercase uppercase">
              SERVICES LIMITED
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => {
                  setActivePage(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded text-xs font-medium tracking-wide transition-colors ${
                  activePage === item.id
                    ? 'text-[#D4AF37] font-semibold bg-[#134074]/50'
                    : 'text-[#F4F6F9] hover:text-[#D4AF37] hover:bg-[#134074]/30'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0B2545] font-semibold text-xs tracking-wide py-2 px-4 rounded shadow-md transition-all flex items-center gap-1.5"
            >
              Get in Touch <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Buttons Left of Menu */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href={CONTACT_INFO.socials.whatsapp}
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-1.5 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
              aria-label="Direct WhatsApp Support"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenInquiry}
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0B2545] p-1.5 rounded-full transition-colors"
              aria-label="Inquiry Portal"
            >
              <Phone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded hover:bg-[#134074] transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-[calc(100%)] left-0 w-full bg-[#0B2545] border-b border-[#134074] shadow-2xl z-50 animate-fade-in">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium transition-colors flex items-center justify-between ${
                    activePage === item.id
                      ? 'bg-[#134074] text-[#D4AF37] font-semibold'
                      : 'text-[#F4F6F9] hover:bg-[#134074]/50 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {activePage === item.id && <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
                </button>
              ))}
              <div className="pt-2 border-t border-[#134074] flex flex-col gap-2 pb-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full text-center bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0B2545] font-bold text-sm py-2.5 rounded shadow transition-all"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Spacer to push content down when header is absolute/fixed */}
      <div className="h-[68px] md:h-[76px] lg:h-[84px] bg-[#0B2545]"></div>
    </>
  );
}
