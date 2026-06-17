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
import WaecView from './views/WaecView';
import TrainingView from './views/TrainingView';
import ProjectsView from './views/ProjectsView';
import PartnersView from './views/PartnersView';
import GalleryView from './views/GalleryView';
import BlogView from './views/BlogView';
import DownloadsView from './views/DownloadsView';
import ContactView from './views/ContactView';
import AdminView from './views/AdminView';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

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
        return <HomeView setActivePage={setActivePage} onOpenInquiry={openInquiryPortal} />;
      case 'about':
        return <AboutView />;
      case 'services':
        return <ServicesView onOpenInquiry={openInquiryPortal} />;
      case 'waec':
        return <WaecView onOpenInquiry={openInquiryPortal} />;
      case 'training':
        return <TrainingView onOpenInquiry={openInquiryPortal} />;
      case 'projects':
        return <ProjectsView onOpenInquiry={openInquiryPortal} />;
      case 'partners':
        return <PartnersView setActivePage={setActivePage} onOpenInquiry={openInquiryPortal} />;
      case 'gallery':
        return <GalleryView />;
      case 'blog':
        return <BlogView />;
      case 'downloads':
        return <DownloadsView />;
      case 'contact':
        return <ContactView />;
      case 'admin':
        return <AdminView />;
      default:
        return <HomeView setActivePage={setActivePage} onOpenInquiry={openInquiryPortal} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-[#1D242E] flex flex-col justify-between font-sans selection:bg-[#D4AF37] selection:text-[#0B2545]">
      
      {/* Sticky Header Navigation Component */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenInquiry={() => openInquiryPortal('')} 
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
