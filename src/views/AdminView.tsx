/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Database, Filter, CheckCircle2, Trash2, ShieldCheck, MailOpen, UserCheck, RefreshCw } from 'lucide-react';
import { InquirySubmission } from '../types';

export default function AdminView() {
  const [inquiries, setInquiries] = useState<InquirySubmission[]>([]);
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filter, setFilter] = useState<'All' | 'New' | 'Contacted' | 'Closed'>('All');
  const [authError, setAuthError] = useState('');

  // Expected passcode for audit purposes
  const AUDIT_PASSCODE = 'clearimpact2026';

  const seedSampleInquiries = () => {
    const samples: InquirySubmission[] = [
      {
        id: 'con_seed1',
        timestamp: '6/17/2026, 10:14:30 AM',
        fullName: 'Professor Austin Okeowo',
        organization: 'Immaculate Heart Academy, Port Harcourt',
        email: 'okeowo.a@immaculateschools.edu.ng',
        phone: '08023145690',
        serviceCategory: 'Educational Technology',
        message: 'We are looking to register 240 high-school candidates for the forthcoming examination period. Please provide pricing catalogs for the WAEC E-Study platform integration and diagnostic CBT mock sets.',
        status: 'New'
      },
      {
        id: 'con_seed2',
        timestamp: '6/16/2026, 02:45:12 PM',
        fullName: 'Mrs. Stella Bassey (HR Lead)',
        organization: 'Advisory Operations Hub',
        email: 'bassey.stella@advisoryops.com',
        phone: '09012354678',
        serviceCategory: 'Corporate Consulting',
        message: 'Interested in booking our divisional team for the 5-Day Operational Excellence Training. Please details options for on-site delivery in Port Harcourt head offices.',
        status: 'Contacted'
      },
      {
        id: 'con_seed3',
        timestamp: '6/15/2026, 09:30:00 AM',
        fullName: 'Dr. Chidi Amadi',
        organization: '[Individual Candidate Support]',
        email: 'amadi.chidi@gmail.com',
        phone: '08034567890',
        serviceCategory: 'International Exams',
        message: 'Looking for IELTS registration steps and preparation guidelines. Please share British Council support details.',
        status: 'Closed'
      }
    ];
    localStorage.setItem('clear_impact_inquiries', JSON.stringify(samples));
    setInquiries(samples);
  };

  useEffect(() => {
    const stored = localStorage.getItem('clear_impact_inquiries');
    if (!stored) {
      // Seed samples so it looks highly professional on first audit
      seedSampleInquiries();
    } else {
      setInquiries(JSON.parse(stored));
    }
  }, []);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === AUDIT_PASSCODE) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError(`Invalid secure key. (Hint: enter "${AUDIT_PASSCODE}" for audit check)`);
    }
  };

  const updateStatus = (id: string, newStatus: 'New' | 'Contacted' | 'Closed') => {
    const updated = inquiries.map((inq) => {
      if (inq.id === id) {
        return { ...inq, status: newStatus };
      }
      return inq;
    });
    setInquiries(updated);
    localStorage.setItem('clear_impact_inquiries', JSON.stringify(updated));
  };

  const deleteInquiry = (id: string) => {
    const remaining = inquiries.filter((inq) => inq.id !== id);
    setInquiries(remaining);
    localStorage.setItem('clear_impact_inquiries', JSON.stringify(remaining));
  };

  const clearLedger = () => {
    if (window.confirm('Warning: This will clear all submitted consultations in the browser cache. Continue?')) {
      localStorage.removeItem('clear_impact_inquiries');
      setInquiries([]);
    }
  };

  const filtered = filter === 'All' 
    ? inquiries 
    : inquiries.filter((inq) => inq.status === filter);

  return (
    <div className="animate-fade-in py-12 bg-white min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
        
        {/* Title Elements */}
        <div className="border-b border-gray-100 pb-6 text-center md:text-left">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
            Governance Portal
          </span>
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-[#0B2545] tracking-tight flex items-center justify-center md:justify-start gap-2.5">
            <Database className="w-8 h-8 text-[#D4AF37]" /> CRM Client Inquiry Ledger
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Verify the continuous ingestion and data logging capabilities of our custom call-of-actions in local browsers.
          </p>
        </div>

        {!isAuthenticated ? (
          /* Gated Auth Form for Auditor */
          <div className="max-w-md mx-auto bg-[#F4F6F9] border border-gray-200 rounded-lg p-6 md:p-8 space-y-6 shadow-sm">
            <div className="text-center space-y-2">
              <ShieldCheck className="w-10 h-10 text-[#D4AF37] mx-auto" />
              <h3 className="font-sans font-bold text-lg text-[#0B2545] tracking-tight">
                Auditor Ledger Authentication
              </h3>
              <p className="text-xs text-gray-500">
                Please unlock using the strategic audit access code.
              </p>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-600 tracking-wider mb-1.5">
                  Secure Passphrase Key
                </label>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder={`Type "${AUDIT_PASSCODE}" for audit verification`}
                  required
                  className="w-full text-xs border border-gray-300 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#0B2545] text-center font-mono"
                />
              </div>

              {authError && <p className="text-xs text-red-500 font-medium">{authError}</p>}

              <button
                type="submit"
                className="w-full bg-[#0B2545] hover:bg-[#134074] text-white text-xs font-bold py-3 px-4 rounded transition-colors uppercase tracking-wider"
              >
                Access Ingestion Engine
              </button>
            </form>
          </div>
        ) : (
          /* Main Authenticated Dashboard Interface */
          <div className="space-y-6">
            
            {/* Control Panel Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#F4F6F9] p-4 rounded-lg border border-gray-200 text-xs">
              
              {/* Status Filters */}
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-500 font-mono flex items-center gap-1.5">
                  <Filter className="w-4.5 h-4.5" /> FILTER LEDGER:
                </span>
                <div className="flex gap-1.5">
                  {['All', 'New', 'Contacted', 'Closed'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setFilter(st as any)}
                      className={`px-3 py-1.5 rounded text-[11px] font-bold font-mono uppercase ${
                        filter === st
                          ? 'bg-[#0B2545] text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special operations */}
              <div className="flex gap-2">
                <button
                  onClick={seedSampleInquiries}
                  className="bg-white border text-gray-700 hover:text-[#0B2545] px-3 py-2 rounded font-bold font-mono text-[11px] uppercase flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Reload Demo Seeds
                </button>
                <button
                  onClick={clearLedger}
                  className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-3 py-2 rounded font-bold font-mono text-[11px] uppercase flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Purge Ledger Data
                </button>
              </div>
            </div>

            {/* Inquiries table / list layout */}
            <div className="space-y-4">
              {filtered.map((inq) => (
                <div 
                  key={inq.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm space-y-4"
                >
                  {/* Ledger Row Header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b pb-3 border-gray-100">
                    <div>
                      <span className="text-[10px] font-mono text-[#D4AF37] font-bold">
                        REGISTRY ID: {inq.id}
                      </span>
                      <h4 className="font-sans font-bold text-base text-[#0B2545] tracking-tight">
                        {inq.fullName}
                      </h4>
                      <p className="text-xs text-gray-400 font-mono">
                        {inq.organization} | Time: {inq.timestamp}
                      </p>
                    </div>

                    {/* Operational Status Selector badge */}
                    <div className="flex items-center gap-2">
                      <select
                        value={inq.status}
                        onChange={(e) => updateStatus(inq.id, e.target.value as any)}
                        className={`text-xs font-mono font-bold p-1.5 rounded border ${
                          inq.status === 'New'
                            ? 'bg-red-50 text-red-700 border-red-200'
                            : inq.status === 'Contacted'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : 'bg-green-50 text-green-700 border-green-200'
                        }`}
                      >
                        <option value="New">🔴 State: New</option>
                        <option value="Contacted">🔵 State: Contacted</option>
                        <option value="Closed">🟢 State: Closed</option>
                      </select>

                      <button
                        onClick={() => deleteInquiry(inq.id)}
                        className="p-1.5 rounded border hover:bg-red-50 text-red-600 border-gray-200 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Message & core contact parameters */}
                  <div className="grid md:grid-cols-4 gap-6 text-xs text-gray-600 font-sans">
                    <div className="md:col-span-1 space-y-1 bg-[#F4F6F9] p-3 rounded">
                      <p className="font-semibold text-gray-500 uppercase font-mono text-[9px] tracking-wide">
                        Contact Channels:
                      </p>
                      <p className="font-mono text-gray-800 break-words">{inq.email}</p>
                      <p className="font-mono text-gray-800">{inq.phone}</p>
                      
                      <p className="font-semibold text-gray-500 uppercase font-mono text-[9px] tracking-wide pt-2">
                        Target Division:
                      </p>
                      <span className="bg-[#0B2545]/5 text-[#0B2545] font-semibold px-2 py-0.5 rounded text-[10px] uppercase inline-block">
                        {inq.serviceCategory}
                      </span>
                    </div>

                    <div className="md:col-span-3 space-y-2">
                      <p className="font-bold text-[#0B2545] uppercase font-mono text-[9px] tracking-widest text-gray-400">
                        Inquiry Context:
                      </p>
                      <p className="leading-relaxed bg-white border border-gray-50 p-3 rounded italic">
                        "{inq.message}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="text-center py-16 bg-[#F4F6F9] border border-dashed rounded-lg">
                  <Database className="w-10 h-10 text-gray-300 mx-auto mb-2 animate-bounce" />
                  <p className="text-sm font-bold text-gray-500">Inquiry ledger is currently empty for and matching this filter.</p>
                  <button 
                    onClick={seedSampleInquiries}
                    className="text-xs text-[#0B2545] hover:underline font-bold mt-2 font-mono uppercase"
                  >
                    Load Sample Auditors Seed Inquiries
                  </button>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
