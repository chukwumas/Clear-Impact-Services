/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, User, Calendar, Tag, ChevronRight, ArrowLeft } from 'lucide-react';
import { BLOG_ARTICLES } from '../data';
import { BlogArticle } from '../types';

export default function BlogView() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const selectedArticle = BLOG_ARTICLES.find(a => a.id === selectedArticleId);

  return (
    <div className="animate-fade-in py-12 bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {selectedArticle ? (
          /* Detailed Single Article View */
          <article className="max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 p-6 md:p-10 space-y-6 shadow-sm">
            <button
              onClick={() => setSelectedArticleId(null)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2545] hover:underline"
            >
              <ArrowLeft className="w-4 h-4 text-[#D4AF37]" /> Back to Articles List
            </button>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2.5 items-center text-xs text-gray-500 font-mono">
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

              <h1 className="font-sans font-extrabold text-2xl md:text-4xl text-[#0B2545] tracking-tight leading-tight">
                {selectedArticle.title}
              </h1>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed font-sans font-medium bg-[#F4F6F9] border-l-4 border-[#D4AF37] p-4 italic">
              {selectedArticle.summary}
            </p>

            <div className="text-xs text-gray-600 leading-relaxed font-sans space-y-4 pt-4 border-t border-gray-100">
              {selectedArticle.content.split('\n\n').map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-100 flex justify-between items-center text-xs font-mono text-gray-400">
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
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center md:text-left">
              <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest block mb-1">
                Analytical Insights
              </span>
              <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-[#0B2545] tracking-tight">
                The Clear Insights Journal
              </h1>
              <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
                Expert views exploring modern CBT school tech, cybersecurity awareness frameworks, and continuous leadership training structures targeting Africa.
              </p>
            </div>

            {/* Articles Index Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_ARTICLES.map((art) => (
                <div 
                  key={art.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-[#134074]/30 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]">
                      <span>{art.category}</span>
                      <span className="text-gray-400">{art.date}</span>
                    </div>

                    <h3 className="font-sans font-bold text-base md:text-lg text-[#0B2545] tracking-tight hover:text-[#134074] cursor-pointer transition-colors"
                      onClick={() => setSelectedArticleId(art.id)}
                    >
                      {art.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed min-h-[60px]">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between">
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
