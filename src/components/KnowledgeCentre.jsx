import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export default function KnowledgeCentre({ onNavigateResources }) {
  const articles = [
    {
      title: 'TallyPrime Complete Guide for Business Owners',
      date: 'Jan 15, 2025',
      readTime: '5 min read',
      img: '/images/blog-tally-guide.jpg',
      category: 'Guide',
    },
    {
      title: 'How to Manage Inventory Efficiently with TallyPrime',
      date: 'Jan 10, 2025',
      readTime: '4 min read',
      img: '/images/blog-inventory-warehouse.jpg',
      category: 'Inventory',
    },
    {
      title: 'GST Compliance Tips for MSMEs',
      date: 'Jan 5, 2025',
      readTime: '6 min read',
      img: '/images/blog-gst-coins.jpg',
      category: 'Compliance',
    },
  ];

  return (
    <section id="knowledge-centre" className="py-16 bg-white border-b border-slate-200/80 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Latest from Our Knowledge Centre
            </h2>
          </div>
          <button
            onClick={onNavigateResources}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0052CC] hover:text-[#003D99] transition-colors group cursor-pointer"
          >
            <span>View All Blogs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item, index) => (
            <article
              key={index}
              onClick={onNavigateResources}
              className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-[#0052CC]">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-[#0052CC] transition-colors line-clamp-2 mb-3">
                    {item.title}
                  </h3>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
