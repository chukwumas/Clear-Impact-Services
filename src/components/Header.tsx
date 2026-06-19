/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ChevronRight, Sun, Moon } from 'lucide-react';
import { PageId } from '../types';
import { CONTACT_INFO } from '../data';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  onOpenInquiry: () => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export default function Header({ activePage, setActivePage, onOpenInquiry, theme, setTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'services', label: 'Solutions Matrix' },
    { id: 'about', label: 'About & Resources' },
    { id: 'blog', label: 'News & Insights' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
          theme === 'light'
            ? isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 text-[#0B2545] border-b border-slate-200'
              : 'bg-[#0B2545]/96 backdrop-blur-md text-white py-3.5 border-b border-[#134074]/30'
            : isScrolled
              ? 'bg-[#0B2545]/92 backdrop-blur-md shadow-md py-2.5 text-white border-b border-[#134074]'
              : 'bg-[#0B2545]/96 backdrop-blur-md text-white py-3.5 border-b border-[#134074]/30'
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
            <span className={`font-sans font-bold text-base md:text-lg tracking-tight flex items-center gap-1 ${
              theme === 'light' && isScrolled ? 'text-[#0B2545]' : 'text-white'
            }`}>
              CLEAR <span className="text-[#D4AF37]">IMPACT</span>
            </span>
            <span className={`font-mono text-[8px] tracking-widest uppercase ${
              theme === 'light' && isScrolled ? 'text-[#0B2545]/65' : 'text-[#F4F6F9]/70'
            }`}>
              SERVICES LIMITED
            </span>
          </div>

          {/* Desktop Navigation (lg and up) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => {
                  setActivePage(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                  activePage === item.id
                    ? 'text-[#D4AF37] bg-[#134074]/60 shadow-sm'
                    : theme === 'light' && isScrolled
                      ? 'text-slate-800 hover:text-[#D4AF37] hover:bg-slate-100'
                      : 'text-[#F4F6F9] hover:text-[#D4AF37] hover:bg-[#134074]/30'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action Conversions (lg and up) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`p-2 rounded-lg border transition-all cursor-pointer flex items-center justify-center h-9 w-9 ${
                theme === 'light' && isScrolled
                  ? 'bg-slate-100 border-slate-200 text-[#0B2545] hover:bg-slate-200'
                  : 'bg-[#134074]/50 border border-[#D4AF37]/20 hover:border-[#D4AF37]/65 text-white'
              }`}
              title={theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
              aria-label="Toggle Theme Mode"
            >
              {theme === 'light' ? <Moon className="w-4 h-4 text-[#D4AF37]" /> : <Sun className="w-4 h-4 text-[#D4AF37]" />}
            </button>
            
            <button
              onClick={onOpenInquiry}
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0B2545] font-bold text-[10px] uppercase tracking-wider py-2.5 px-4.5 rounded shadow transition-all cursor-pointer flex items-center gap-1.5 h-9"
            >
              Get in Touch <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Buttons (below lg) */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`p-2 rounded transition-colors cursor-pointer ${
                theme === 'light' && isScrolled
                  ? 'bg-slate-100 text-[#0B2545]'
                  : 'bg-[#134074]/60 text-white'
              }`}
              aria-label="Toggle Theme Mode"
            >
              {theme === 'light' ? <Moon className="w-4 h-4 text-[#D4AF37]" /> : <Sun className="w-4 h-4 text-[#D4AF37]" />}
            </button>
            
            <button
              onClick={onOpenInquiry}
              className="bg-[#D4AF37] text-[#0B2545] font-bold text-[10px] py-2 px-3 rounded uppercase tracking-wider transition-colors cursor-pointer"
              aria-label="Inquiry Portal"
            >
              Inquire
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded transition-colors focus:outline-none cursor-pointer ${
                theme === 'light' && isScrolled
                  ? 'text-[#0B2545] hover:bg-slate-100'
                  : 'text-white hover:bg-[#134074]'
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden absolute top-[calc(100%)] left-0 w-full border-b shadow-2xl z-50 animate-fade-in ${
            theme === 'light' ? 'bg-white border-slate-205 text-slate-900' : 'bg-[#0B2545] border-[#134074] text-white'
          }`}>
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-between cursor-pointer ${
                    activePage === item.id
                      ? 'bg-[#134074] text-[#D4AF37] font-bold'
                      : theme === 'light'
                        ? 'text-slate-800 hover:bg-slate-100 hover:text-[#D1A41D]'
                        : 'text-[#F4F6F9] hover:bg-[#134074]/50 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {activePage === item.id && <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
                </button>
              ))}
              
              {/* Organized Contacts inside Mobile drawer to avoid header bulkiness */}
              <div className="pt-3 border-t border-[#134074] flex flex-col gap-2.5">
                <a
                  href={CONTACT_INFO.socials.whatsapp}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full text-center bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-[10.5px] uppercase tracking-wider py-3 rounded shadow transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp Support Desk
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Condensed spacer to push content down cleanly */}
      <div className="h-[58px] md:h-[62px] lg:h-[66px] bg-[#0B2545]"></div>
    </>
  );
}
