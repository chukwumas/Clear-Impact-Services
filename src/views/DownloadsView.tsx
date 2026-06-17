/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Download, Lock, CheckCircle2, FileText, CalendarDays } from 'lucide-react';
import { DOWNLOADS_CATALOG } from '../data';
import { DownloadItem } from '../types';

export default function DownloadsView() {
  const [gateEmail, setGateEmail] = useState('');
  const [gateName, setGateName] = useState('');
  const [isGated, setIsGated] = useState(true);
  const [activeDownload, setActiveDownload] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleUnlockGated = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gateName.trim() || !gateEmail.trim() || !/\S+@\S+\.\S+/.test(gateEmail)) {
      setError('Please provide a valid name and active corporate email address');
      return;
    }
    
    // Log the lead as a specific "Download Interest" in our ledger
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
    setError('');
  };

  const triggerDownloadAction = (item: DownloadItem) => {
    setActiveDownload(item.title);
    // Open gate if not unlocked yet
    if (isGated) {
      // open gate dialog
    } else {
      // alert immediate mock trigger
      alert(`Initiating download for "${item.title}" successfully.`);
    }
  };

  return (
    <div className="animate-fade-in py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        
        {/* Header Block */}
        <div className="border-b border-gray-100 pb-6 text-center md:text-left">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
            Resource Center
          </span>
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-[#0B2545] tracking-tight">
            Corporate Files & Catalogs
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Download our verified corporate profiles, training guides, and academic syllabus catalogs to share with your board or administrative group.
          </p>
        </div>

        {isGated ? (
          /* Gatted Form block to capture interest before displaying catalog download links */
          <div className="max-w-lg mx-auto bg-[#F4F6F9] border border-gray-200 rounded-lg p-6 md:p-8 space-y-6 shadow-sm">
            <div className="text-center space-y-2">
              <Lock className="w-10 h-10 text-[#D4AF37] mx-auto animate-pulse" />
              <h2 className="font-sans font-bold text-lg text-[#0B2545] tracking-tight">
                Unlock Secure Library Access
              </h2>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Please enter your coordinator credentials to access high-value corporate portfolios instantly.
              </p>
            </div>

            <form onSubmit={handleUnlockGated} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-600 tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={gateName}
                  onChange={(e) => setGateName(e.target.value)}
                  placeholder="e.g. Engr. Chidi Amadi"
                  required
                  className="w-full text-xs border border-gray-300 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-600 tracking-wider mb-1.5">
                  Corporate / School Email
                </label>
                <input
                  type="email"
                  value={gateEmail}
                  onChange={(e) => setGateEmail(e.target.value)}
                  placeholder="name@organization.com"
                  required
                  className="w-full text-xs border border-gray-300 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                />
              </div>

              {error && <p className="text-xs text-red-500 font-medium">{error}</p>}

              <button
                type="submit"
                className="w-full bg-[#0B2545] hover:bg-[#134074] text-white text-xs font-bold py-3 px-4 rounded transition-colors uppercase tracking-wider"
              >
                Access Downloads
              </button>
            </form>
          </div>
        ) : (
          /* Unlocked Catalog Grid */
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 p-4 rounded text-xs text-green-800 flex items-center justify-between">
              <span className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Resource Library successfully Unlocked! You can download files now.</span>
              </span>
              <button 
                onClick={() => setIsGated(true)}
                className="text-gray-500 hover:text-gray-700 text-[10px] uppercase font-bold font-mono"
              >
                Lock Session
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DOWNLOADS_CATALOG.map((item) => (
                <div 
                  key={item.id}
                  className="bg-[#F4F6F9] border border-gray-200 rounded-lg p-6 flex flex-col justify-between hover:border-[#134074]/30 hover:shadow-lg transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-mono uppercase text-[#D4AF37]">
                      <span>Category: {item.category}</span>
                      <span className="text-gray-400">{item.fileSize}</span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-sans font-bold text-base text-[#0B2545] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed min-h-[50px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 mt-6 flex justify-between items-center text-xs">
                    <span className="text-green-600 font-bold font-mono">PDF FORMAT READY</span>
                    <button
                      onClick={() => triggerDownloadAction(item)}
                      className="bg-[#0B2545] hover:bg-[#134074] text-white font-bold p-2 rounded-full transition-colors flex items-center justify-center shrink-0"
                      aria-label="Download document file"
                    >
                      <Download className="w-4 h-4 text-[#D4AF37]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
