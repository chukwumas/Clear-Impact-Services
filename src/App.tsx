/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import InquiryForm from './components/InquiryForm';
import LiveChat from './components/LiveChat';
import { PageId } from './types';

// Importing all modular Views
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ServicesView from './views/ServicesView';
import BlogView from './views/BlogView';
import ContactView from './views/ContactView';
import AdminView from './views/AdminView';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('clear_impact_theme') as 'light' | 'dark') || 'light';
  });

  // Track and synchronize class list for nested components representation
  useEffect(() => {
    localStorage.setItem('clear_impact_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Scroll to top on page switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activePage]);

  const openInquiryPortal = (service: string = '') => {
    setPreselectedService(service);
    setIsInquiryOpen(true);
  };

  const renderActiveView = () => {
    switch (activePage) {
      case 'home':
        return <HomeView setActivePage={setActivePage} onOpenInquiry={openInquiryPortal} theme={theme} />;
      case 'about':
      case 'partners':
      case 'gallery':
      case 'downloads':
        return <AboutView theme={theme} />;
      case 'services':
      case 'waec':
      case 'training':
      case 'projects':
        return <ServicesView onOpenInquiry={openInquiryPortal} theme={theme} />;
      case 'blog':
        return <BlogView theme={theme} />;
      case 'contact':
        return <ContactView theme={theme} />;
      case 'admin':
        return <AdminView theme={theme} />;
      default:
        return <HomeView setActivePage={setActivePage} onOpenInquiry={openInquiryPortal} theme={theme} />;
    }
  };

  const bgClass = theme === 'dark' 
    ? 'bg-[#11151F] text-[#E2E8F0]' 
    : 'bg-[#FAF8F5] text-[#1D242E]';

  return (
    <div className={`min-h-screen ${bgClass} flex flex-col justify-between font-sans selection:bg-[#D4AF37] selection:text-[#0B2545] transition-colors duration-300`}>
      
      {/* Sticky Header Navigation Component */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenInquiry={() => openInquiryPortal('')} 
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Main Stage Area */}
      <main id="app-main-stage" className="flex-grow overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Footnote Section */}
      <Footer 
        setActivePage={setActivePage} 
        onOpenInquiry={() => openInquiryPortal('')} 
      />

      {/* Modal Intake Component */}
      <InquiryForm 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
        initialService={preselectedService}
      />

      {/* Global Interactive Live Support Advisor Desk */}
      <LiveChat />

    </div>
  );
}
