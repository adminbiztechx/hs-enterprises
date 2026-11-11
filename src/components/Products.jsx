import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Exact logos matching the reference design
function TallyPrimeLogo() {
  return (
    <svg className="w-8 h-7 shrink-0" viewBox="0 0 32 28" fill="none">
      <rect x="2" y="2" width="13.5" height="11.5" rx="1.5" fill="#0047AB" />
      <rect x="16.5" y="2" width="13.5" height="11.5" rx="1.5" fill="#0066FF" />
      <rect x="2" y="14.5" width="13.5" height="11.5" rx="1.5" fill="#FFB800" />
      <rect x="16.5" y="14.5" width="13.5" height="11.5" rx="1.5" fill="#5B9DF5" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="5" rx="2" />
      <circle cx="18" cy="5.5" r="0.8" fill="#0066FF" stroke="none" />
      <circle cx="15" cy="5.5" r="0.8" fill="#0066FF" stroke="none" />
      <rect x="2" y="9.5" width="20" height="5" rx="2" />
      <circle cx="18" cy="12" r="0.8" fill="#0066FF" stroke="none" />
      <circle cx="15" cy="12" r="0.8" fill="#0066FF" stroke="none" />
      <rect x="2" y="16" width="20" height="5" rx="2" />
      <circle cx="18" cy="18.5" r="0.8" fill="#0066FF" stroke="none" />
      <circle cx="15" cy="18.5" r="0.8" fill="#0066FF" stroke="none" />
    </svg>
  );
}

function PuzzleIcon() {
  return (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="#8B5CF6">
      <path d="M19.5 12c0-.8-.4-1.5-1-1.9V8c0-1.1-.9-2-2-2h-2.1c-.4-.6-1.1-1-1.9-1s-1.5.4-1.9 1H8.5c-1.1 0-2 .9-2 2v2.1c-.6.4-1 1.1-1 1.9s.4 1.5 1 1.9V18c0 1.1.9 2 2 2h2.1c.4.6 1.1 1 1.9 1s1.5-.4 1.9-1H16.5c1.1 0 2-.9 2-2v-2.1c.6-.4 1-1.1 1-1.9z" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 12 12 17 22 12" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="7 8 3 12 7 16" />
      <polyline points="17 8 21 12 17 16" />
      <line x1="14" y1="5" x2="10" y2="19" strokeWidth="2.2" />
    </svg>
  );
}

export default function Products({ onNavigateProducts, onOpenDemoModal, onOpenConsultModal }) {
  const products = [
    {
      title: 'TallyPrime',
      desc: 'Complete business management with accounting, inventory, GST and more.',
      linkText: 'Explore',
      action: onNavigateProducts || onOpenDemoModal,
      icon: TallyPrimeLogo,
      // Exact logo colors: Royal Blue (#0047AB/#0066FF) + Golden Yellow (#FFB800) + Sky Blue (#5B9DF5)
      gradientBg: 'bg-gradient-to-br from-blue-50/95 via-amber-50/80 to-sky-50/90 hover:from-blue-100/95 hover:via-amber-100/85 hover:to-sky-100/95',
      borderStyle: 'border-blue-200/90 hover:border-amber-400 hover:ring-2 hover:ring-amber-300/30',
      topBar: 'from-[#0047AB] via-[#FFB800] to-[#5B9DF5]',
      shadowStyle: 'hover:shadow-[0_18px_36px_-8px_rgba(0,82,204,0.18),0_8px_16px_-4px_rgba(255,184,0,0.16)]',
      iconGlow: 'bg-gradient-to-tr from-blue-100/80 to-amber-100/80',
      tagColor: 'bg-amber-100/90 text-amber-800 border-amber-200',
    },
    {
      title: 'TallyPrime Server',
      desc: 'High performance, secure and reliable multi-user environment.',
      linkText: 'Explore',
      action: onNavigateProducts || onOpenDemoModal,
      icon: ServerIcon,
      // Server Logo colors: Deep Navy (#003366) + Royal Blue (#0066FF) + Electric Cyan (#00D4FF)
      gradientBg: 'bg-gradient-to-br from-blue-50/95 via-sky-50/70 to-indigo-50/80 hover:from-blue-100/95 hover:via-sky-100/85 hover:to-indigo-100/95',
      borderStyle: 'border-blue-200/90 hover:border-blue-400 hover:ring-2 hover:ring-blue-400/25',
      topBar: 'from-[#003366] via-[#0066FF] to-[#00D4FF]',
      shadowStyle: 'hover:shadow-[0_18px_36px_-8px_rgba(0,102,255,0.22)]',
      iconGlow: 'bg-gradient-to-tr from-blue-100/80 to-cyan-100/80',
      tagColor: 'bg-blue-100/90 text-blue-800 border-blue-200',
    },
    {
      title: 'Tally Add-ons',
      desc: 'Extended capabilities and industry-specific functionalities for TallyPrime.',
      linkText: 'Explore',
      action: onNavigateProducts || onOpenDemoModal,
      icon: PuzzleIcon,
      // Add-ons Logo colors: Royal Violet (#7C3AED) + Lavender (#8B5CF6) + Fuchsia (#C084FC)
      gradientBg: 'bg-gradient-to-br from-purple-50/95 via-fuchsia-50/60 to-violet-50/80 hover:from-purple-100/95 hover:via-fuchsia-100/85 hover:to-violet-100/95',
      borderStyle: 'border-purple-200/90 hover:border-purple-400 hover:ring-2 hover:ring-purple-400/25',
      topBar: 'from-[#7C3AED] via-[#8B5CF6] to-[#C084FC]',
      shadowStyle: 'hover:shadow-[0_18px_36px_-8px_rgba(139,92,246,0.22)]',
      iconGlow: 'bg-gradient-to-tr from-purple-100/80 to-fuchsia-100/80',
      tagColor: 'bg-purple-100/90 text-purple-800 border-purple-200',
    },
    {
      title: 'Business Software',
      desc: 'Complementary software for sales, CRM, operations and more.',
      linkText: 'Explore',
      action: onNavigateProducts || onOpenDemoModal,
      icon: LayersIcon,
      // Business Software colors: Sapphire (#0284C7) + Ocean Blue (#0066FF) + Indigo (#4F46E5)
      gradientBg: 'bg-gradient-to-br from-sky-50/95 via-blue-50/70 to-indigo-50/80 hover:from-sky-100/95 hover:via-blue-100/85 hover:to-indigo-100/95',
      borderStyle: 'border-sky-200/90 hover:border-sky-400 hover:ring-2 hover:ring-sky-400/25',
      topBar: 'from-[#0284C7] via-[#0066FF] to-[#4F46E5]',
      shadowStyle: 'hover:shadow-[0_18px_36px_-8px_rgba(2,132,199,0.22)]',
      iconGlow: 'bg-gradient-to-tr from-sky-100/80 to-indigo-100/80',
      tagColor: 'bg-sky-100/90 text-sky-800 border-sky-200',
    },
    {
      title: 'Custom Applications',
      desc: 'Tailor-made applications built around your business requirements.',
      linkText: 'Enquire Now',
      action: onOpenConsultModal,
      icon: CodeIcon,
      // Tech Code colors: Emerald (#059669) + Teal (#0D9488) + Cyan (#06B6D4)
      gradientBg: 'bg-gradient-to-br from-emerald-50/90 via-teal-50/70 to-cyan-50/80 hover:from-emerald-100/95 hover:via-teal-100/85 hover:to-cyan-100/95',
      borderStyle: 'border-emerald-200/90 hover:border-emerald-400 hover:ring-2 hover:ring-emerald-400/25',
      topBar: 'from-[#059669] via-[#0D9488] to-[#06B6D4]',
      shadowStyle: 'hover:shadow-[0_18px_36px_-8px_rgba(5,150,105,0.22)]',
      iconGlow: 'bg-gradient-to-tr from-emerald-100/80 to-teal-100/80',
      tagColor: 'bg-emerald-100/90 text-emerald-800 border-emerald-200',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  // Subtle auto-advance every 5 seconds (paused when touched or hovered)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    if (distance > 40) {
      nextSlide();
    } else if (distance < -40) {
      prevSlide();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section id="products" className="py-12 lg:py-14 bg-white border-b border-slate-200/80 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#0B1528] tracking-tight">
              Powerful Technology. Practical Business Solutions.
            </h2>
          </div>
          <button
            onClick={onNavigateProducts}
            className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0052CC] hover:text-[#003D99] transition-colors group text-left cursor-pointer"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 1. Mobile & Tablet Single-Slide Slider (< lg) */}
        <div 
          className="block lg:hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider track container */}
          <div 
            className="relative overflow-hidden rounded-2xl touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="w-full shrink-0 px-0.5">
                    <div
                      onClick={item.action}
                      className={`relative overflow-hidden rounded-2xl p-5 sm:p-6 border ${item.borderStyle} ${item.gradientBg} shadow-sm ${item.shadowStyle} hover:-translate-y-1.5 active:scale-[0.99] transition-all duration-300 ease-out flex flex-col justify-between min-h-[185px] group cursor-pointer`}
                    >
                      {/* Top Gradient Accent Bar matching exact logo colors */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.topBar} rounded-t-2xl`} />

                      {/* Animated Shimmer / Sheen Sweep Effect on Hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2.5">
                          <div className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-xl ${item.iconGlow} shadow-xs group-hover:scale-115 group-hover:-rotate-3 transition-all duration-300`}>
                            <Icon />
                          </div>
                          <h3 className="text-[16px] font-bold text-[#0B1528] tracking-tight leading-snug group-hover:text-[#0052CC] transition-colors">
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-[13px] text-slate-600 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-4 flex items-center justify-between border-t border-slate-200/60 mt-2 relative z-10">
                        <span className="text-xs sm:text-[13px] font-bold text-[#0052CC] group-hover:text-[#003D99] inline-flex items-center gap-1.5 transition-colors">
                          <span>{item.linkText}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                        </span>
                        <span className={`text-[11px] font-bold border px-2.5 py-0.5 rounded-full ${item.tagColor}`}>
                          {index + 1} / {products.length}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slider Controls: Arrows + Dots */}
          <div className="flex items-center justify-between pt-4 px-1">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous product"
              className="w-9 h-9 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-600 hover:text-[#0052CC] hover:border-[#0052CC] active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-1.5">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to product ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index ? 'w-6 bg-[#0052CC]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Next product"
              className="w-9 h-9 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-600 hover:text-[#0052CC] hover:border-[#0052CC] active:scale-95 transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. Desktop 5-Column Grid (>= lg) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-3.5 sm:gap-4">
          {products.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onClick={item.action}
                className={`relative overflow-hidden rounded-2xl p-4 sm:p-5 border ${item.borderStyle} ${item.gradientBg} shadow-sm ${item.shadowStyle} hover:-translate-y-2 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer`}
              >
                {/* Top Gradient Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.topBar} rounded-t-2xl`} />

                {/* Animated Shimmer / Sheen Sweep Effect on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={`shrink-0 flex items-center justify-center w-11 h-11 rounded-xl ${item.iconGlow} shadow-xs group-hover:scale-115 group-hover:-rotate-3 transition-all duration-300`}>
                      <Icon />
                    </div>
                    <h3 className="text-[15px] sm:text-[15.5px] font-bold text-[#0B1528] tracking-tight leading-snug group-hover:text-[#0052CC] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-[12.5px] text-slate-600 leading-snug sm:leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 relative z-10">
                  <span className="text-xs sm:text-[13px] font-bold text-[#0052CC] group-hover:text-[#003D99] inline-flex items-center gap-1.5 transition-colors">
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
