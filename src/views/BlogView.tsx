/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, User, Calendar, Tag, ChevronRight, ArrowLeft } from 'lucide-react';
import { BLOG_ARTICLES } from '../data';
import { BlogArticle } from '../types';

interface BlogViewProps {
  theme?: 'light' | 'dark';
}

export default function BlogView({ theme = 'light' }: BlogViewProps) {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const selectedArticle = BLOG_ARTICLES.find(a => a.id === selectedArticleId);

  const isDark = theme === 'dark';
  const mainBgClass = isDark ? 'bg-[#11151F] text-[#E2E8F0]' : 'bg-[#FAF8F5] text-[#1D242E]';
  const cardBgClass = isDark ? 'bg-[#191F2D] border-white/5' : 'bg-white border-gray-200';
  const textPrimaryClass = isDark ? 'text-white' : 'text-[#0B2545]';
  const textSecondaryClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderClass = isDark ? 'border-white/10' : 'border-gray-100';
  const inlineQuoteBg = isDark ? 'bg-[#21293B]' : 'bg-[#F4F6F9]';

  return (
    <div className={`animate-fade-in py-12 transition-colors duration-300 min-h-screen ${mainBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {selectedArticle ? (
          /* Detailed Single Article View */
          <article className={`max-w-4xl mx-auto rounded-lg border p-6 md:p-10 space-y-6 shadow-sm ${cardBgClass}`}>
            <button
              onClick={() => setSelectedArticleId(null)}
              className={`inline-flex items-center gap-1.5 text-xs font-bold hover:underline ${isDark ? 'text-[#D4AF37]' : 'text-[#0B2545]'}`}
            >
              <ArrowLeft className="w-4 h-4 text-[#D4AF37]" /> Back to Articles List
            </button>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2.5 items-center text-xs text-shared-gray font-mono">
                <span className="text-[#D4AF37] font-bold uppercase tracking-wider">{selectedArticle.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5" /> {selectedArticle.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {selectedArticle.date}
                </span>
              </div>

              <h1 className={`font-sans font-extrabold text-2xl md:text-4xl tracking-tight leading-tight ${textPrimaryClass}`}>
                {selectedArticle.title}
              </h1>
            </div>

            <p className={`text-sm leading-relaxed font-sans font-medium border-l-4 border-[#D4AF37] p-4 italic ${inlineQuoteBg} ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              {selectedArticle.summary}
            </p>

            <div className={`text-xs leading-relaxed font-sans space-y-4 pt-4 border-t ${borderClass} ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {selectedArticle.content.split('\n\n').map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            <div className={`pt-8 border-t flex justify-between items-center text-xs font-mono text-gray-400 ${borderClass}`}>
              <span>Authority Briefing Active</span>
              <button
                onClick={() => setSelectedArticleId(null)}
                className="text-[#D4AF37] hover:underline font-bold"
              >
                Close Article
              </button>
            </div>
          </article>
        ) : (
          /* Main Blog Dashboard Index View */
          <div className="space-y-12">
            {/* Title Banner */}
            <div className={`p-8 rounded-lg border shadow-sm text-center md:text-left ${cardBgClass}`}>
              <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
                Analytical Insights
              </span>
              <h1 className={`font-sans font-extrabold text-3xl md:text-4xl tracking-tight ${textPrimaryClass}`}>
                The Clear Insights Journal
              </h1>
              <p className="text-sm text-gray-400 mt-2 max-w-2xl leading-relaxed">
                Expert views exploring modern CBT school tech, cybersecurity awareness frameworks, and continuous leadership training structures targeting Africa.
              </p>
            </div>

            {/* Articles Index Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_ARTICLES.map((art) => (
                <div 
                  key={art.id}
                  className={`border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-[#134074]/30 transition-all flex flex-col justify-between ${cardBgClass}`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]">
                      <span>{art.category}</span>
                      <span className="text-gray-400">{art.date}</span>
                    </div>

                    <h3 className={`font-sans font-bold text-base md:text-lg tracking-tight hover:text-[#134074] cursor-pointer transition-colors ${textPrimaryClass}`}
                      onClick={() => setSelectedArticleId(art.id)}
                    >
                      {art.title}
                    </h3>

                    <p className="text-xs text-gray-455 leading-relaxed min-h-[60px] text-gray-400">
                      {art.summary}
                    </p>
                  </div>

                  <div className={`pt-6 border-t mt-6 flex items-center justify-between ${borderClass}`}>
                    <span className="text-[10px] text-gray-400 font-mono">Author: {art.author}</span>
                    <button
                      onClick={() => setSelectedArticleId(art.id)}
                      className="text-[#D4AF37] text-xs font-bold hover:underline flex items-center gap-1"
                    >
                      Read Study <ChevronRight className="w-3.5 h-3.5" />
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
