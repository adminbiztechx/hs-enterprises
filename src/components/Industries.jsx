import React from 'react';
import { ArrowRight, ShoppingCart, Box, Factory, HeartHandshake } from 'lucide-react';

// Custom icons matching the reference design
function HealthcareShieldIcon() {
  return (
    <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="14" />
      <line x1="9" y1="11" x2="15" y2="11" />
    </svg>
  );
}

function TowerCraneIcon() {
  return (
    <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M7 21V5" />
      <path d="M7 5l14-2v3L7 9" />
      <path d="M7 5L3 8v2l4-1" />
      <line x1="18" y1="3.5" x2="18" y2="12" />
      <rect x="17" y="12" width="2" height="2" fill="currentColor" />
    </svg>
  );
}

function MeetingUsersIcon() {
  return (
    <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3.5" />
      <path d="M2.5 19a6.5 6.5 0 0 1 13 0" />
      <circle cx="16.5" cy="8" r="3" />
      <path d="M15 16.5a5 5 0 0 1 5.5 3.5" />
    </svg>
  );
}

export default function Industries({ onNavigateIndustries, onOpenConsultModal }) {
  const industries = [
    {
      title: 'Retail & Supermarkets',
      icon: ShoppingCart,
      img: '/images/industry-retail.jpg',
      fallback: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Wholesale & Distribution',
      icon: Box,
      img: '/images/industry-wholesale.jpg',
      fallback: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Manufacturing',
      icon: Factory,
      img: '/images/industry-manufacturing.jpg',
      fallback: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Healthcare',
      customIcon: HealthcareShieldIcon,
      img: '/images/industry-healthcare.jpg',
      fallback: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Construction & Real Estate',
      customIcon: TowerCraneIcon,
      img: '/images/industry-construction.jpg',
      fallback: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Professional Services',
      customIcon: MeetingUsersIcon,
      img: '/images/industry-services.jpg',
      fallback: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const handleIndustryClick = () => {
    if (onNavigateIndustries) {
      onNavigateIndustries();
    } else if (onOpenConsultModal) {
      onOpenConsultModal();
    }
  };

  return (
    <section id="industries" className="py-12 lg:py-14 bg-white border-b border-slate-200/80 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-6 xl:gap-8">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-[260px] xl:w-[290px] shrink-0 text-left space-y-2.5">
            <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
              Technology Solutions <br className="hidden sm:block" />
              for Every Industry.
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              Industry-specific solutions that address your unique business requirements and help you grow.
            </p>
            <div className="pt-1">
              <button
                onClick={handleIndustryClick}
                className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0052CC] hover:text-[#003D99] transition-colors whitespace-nowrap group cursor-pointer"
              >
                <span>Explore Industry Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Cards Grid (6 in one row) */}
          <div className="flex-1 min-w-0 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
              {industries.map((item, index) => {
                const Icon = item.icon;
                const CustomIcon = item.customIcon;
                return (
                  <div
                    key={index}
                    onClick={handleIndustryClick}
                    className="group relative h-32 sm:h-36 rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-all duration-300"
                  >
                    {/* Background image */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = item.fallback;
                      }}
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent group-hover:from-slate-950/95 transition-all" />

                    {/* Bottom Title and Icon Horizontal Align */}
                    <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3 flex items-center gap-2">
                      <div className="shrink-0 flex items-center justify-center">
                        {CustomIcon ? (
                          <CustomIcon />
                        ) : (
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0 stroke-[2.2]" />
                        )}
                      </div>
                      <span className="text-[11.5px] sm:text-[12px] font-bold text-white leading-tight">
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
