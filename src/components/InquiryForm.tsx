/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { InquirySubmission } from '../types';

interface InquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function InquiryForm({ isOpen, onClose, initialService = '' }: InquiryFormProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceCategory, setServiceCategory] = useState(initialService || 'Corporate Consulting');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = 'Valid email is required';
    if (!phone.trim()) errs.phone = 'Phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setErrors({ ...errors, message: 'Please provide brief details about your inquiry' });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Build a submission object
      const submission: InquirySubmission = {
        id: 'inq_' + Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toLocaleString(),
        fullName,
        organization: organization || '[Individual]',
        email,
        phone,
        serviceCategory,
        message,
        status: 'New'
      };

      // Add to localStorage so it persists real-time
      const existingStr = localStorage.getItem('clear_impact_inquiries');
      const existing: InquirySubmission[] = existingStr ? JSON.parse(existingStr) : [];
      existing.unshift(submission);
      localStorage.setItem('clear_impact_inquiries', JSON.stringify(existing));

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setStep(1);
    setFullName('');
    setOrganization('');
    setEmail('');
    setPhone('');
    setServiceCategory(initialService || 'Corporate Consulting');
    setMessage('');
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2545]/80 backdrop-blur-sm animate-fade-in animate-duration-200">
      <div 
        id="inquiry-modal-container"
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden border border-[#E2E8F0] animate-scale-up"
      >
        {/* Modal Header */}
        <div className="bg-[#0B2545] text-white p-5 flex items-center justify-between">
          <div>
            <h3 className="font-sans font-bold text-lg tracking-tight text-white">
              Launch Operational Advisory Consultation
            </h3>
            <p className="text-xs text-[#F4F6F9]/80 h-4 uppercase">
              {isSuccess ? 'Inquiry Logged' : `Step ${step} of 2 – Consultation Intake`}
            </p>
          </div>
          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="text-white/80 hover:text-white hover:bg-[#134074] p-1.5 rounded transition-transform duration-200 hover:rotate-90"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-10">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
              </div>
              <h4 className="font-sans font-bold text-xl text-[#0B2545] tracking-tight mb-2">
                Inquiry Logged successfully!
              </h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                Thank you for contacting Clear Impact Services Limited. Your registration details have been securely captured. A senior consultant will reach out via email or phone within 2 hours.
              </p>
              <div className="p-4 bg-[#F4F6F9] rounded-lg border border-[#E2E8F0] text-left max-w-md mx-auto mb-8">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Logged Parameters:</p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <span className="font-semibold text-gray-600">Client:</span>
                  <span className="col-span-2 text-gray-900">{fullName}</span>

                  <span className="font-semibold text-gray-600">Context:</span>
                  <span className="col-span-2 text-gray-900">{serviceCategory}</span>

                  <span className="font-semibold text-gray-600">Channel:</span>
                  <span className="col-span-2 text-gray-900">{email} / {phone}</span>
                </div>
              </div>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    resetForm();
                    onClose();
                  }}
                  className="bg-[#0B2545] hover:bg-[#134074] text-white font-semibold text-sm py-2.5 px-6 rounded transition-colors"
                >
                  Done
                </button>
                <a
                  href={`https://wa.me/2348037762620?text=Hello,%20I%20just%20submitted%20a%20website%20consultation%20form%20for%20${encodeURIComponent(fullName)}.%20Looking%20forward%20to%20your%20response.`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-2.5 px-6 rounded flex items-center gap-1.5 transition-colors"
                >
                  Follow up on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-5 gap-8">
              {/* Left Column - Form fields */}
              <div className="md:col-span-3">
                {step === 1 ? (
                  <form onSubmit={handleNextStep} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        Full Name / Lead Administrator <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Dr. Jude Okafor"
                        className={`w-full text-sm border p-2.5 rounded focus:outline-none focus:ring-1 ${
                          errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#0B2545]'
                        }`}
                      />
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        Institution / Organization Name <span className="text-gray-400">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Greenwood Secondary Hall"
                        className="w-full text-sm border border-gray-300 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. address@inbox.com"
                          className={`w-full text-sm border p-2.5 rounded focus:outline-none focus:ring-1 ${
                            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#0B2545]'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                          Mobile Contact <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 0803 776 2620"
                          className={`w-full text-sm border p-2.5 rounded focus:outline-none focus:ring-1 ${
                            errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#0B2545]'
                          }`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-[#0B2545] hover:bg-[#134074] text-white font-bold text-sm py-3 px-4 rounded transition-all flex items-center justify-center gap-2"
                      >
                        Proceed to Details <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        Selected Service Division <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={serviceCategory}
                        onChange={(e) => setServiceCategory(e.target.value)}
                        className="w-full text-sm border border-gray-300 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#0B2545] bg-white text-gray-800"
                      >
                        <option value="Corporate Consulting">Corporate Consulting & Training</option>
                        <option value="Educational Technology">Educational & Digital Learning Services (WAEC E-Study)</option>
                        <option value="International Exams">International Examination Support (IELTS / TKT)</option>
                        <option value="Cybersecurity">Cybersecurity & Tech Services</option>
                        <option value="Media & Branding">Media, Branding & Creative Services</option>
                        <option value="Events & Youth Development">Events, Project & Youth Development</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                        Briefly Outline Your Requirements <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please describe how Clear Impact Services can support your institutional needs..."
                        rows={4}
                        className={`w-full text-sm border p-2.5 rounded focus:outline-none focus:ring-1 ${
                          errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#0B2545]'
                        }`}
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <div className="pt-4 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-1/3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold text-sm py-3 px-4 rounded transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-2/3 bg-[#0B2545] hover:bg-[#134074] text-white font-bold text-sm py-3 px-4 rounded transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? 'Verifying Integrity...' : 'Submit Inquiry'}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column - Brand info sidebar */}
              <div className="md:col-span-2 space-y-6 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-6 text-gray-600">
                <div>
                  <h4 className="font-sans font-bold text-[#0B2545] text-sm tracking-wide mb-1">
                    Clear Impact Office
                  </h4>
                  <p className="font-mono text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold mb-3">
                    Corporate Coordinates
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 flex gap-2">
                    <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    <span>{CONTACT_INFO.address}</span>
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>{CONTACT_INFO.phones.join(', ')}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                    <span className="truncate">{CONTACT_INFO.email}</span>
                  </p>
                </div>

                <div className="p-3 bg-[#F4F6F9] rounded border border-[#E2E8F0] space-y-1 text-[11px] leading-relaxed">
                  <p className="font-semibold text-[#0B2545]">Verification Partners:</p>
                  <p className="text-gray-500">• British Council Support Affiliate</p>
                  <p className="text-gray-500">• Sidmach Technologies Limited</p>
                  <p className="text-gray-500">• Smart-Host Cybersecurity USA</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
