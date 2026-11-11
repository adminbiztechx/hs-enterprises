import React from 'react';
import { ArrowRight } from 'lucide-react';

// Exact outlined colored icons matching the user's reference image
function CalculatorIcon() {
  return (
    <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Outer body */}
      <rect x="4" y="2.5" width="16" height="19" rx="3" stroke="#FF7A00" strokeWidth="2.2" fill="none" />
      {/* Top screen window (hollow) */}
      <rect x="6.8" y="5.5" width="10.4" height="3" rx="0.8" stroke="#FF7A00" strokeWidth="1.8" fill="none" />
      {/* Keypad - Row 1 */}
      <rect x="6.8" y="10.8" width="2.6" height="2.2" rx="0.5" stroke="#FF7A00" strokeWidth="1.8" fill="none" />
      <rect x="10.7" y="10.8" width="2.6" height="2.2" rx="0.5" stroke="#FF7A00" strokeWidth="1.8" fill="none" />
      <rect x="14.6" y="10.8" width="2.6" height="2.2" rx="0.5" stroke="#FF7A00" strokeWidth="1.8" fill="none" />
      {/* Keypad - Row 2 & 3 */}
      <rect x="6.8" y="14.2" width="2.6" height="2.2" rx="0.5" stroke="#FF7A00" strokeWidth="1.8" fill="none" />
      <rect x="10.7" y="14.2" width="2.6" height="2.2" rx="0.5" stroke="#FF7A00" strokeWidth="1.8" fill="none" />
      <rect x="14.6" y="14.2" width="2.6" height="5.6" rx="0.5" stroke="#FF7A00" strokeWidth="1.8" fill="none" />
      <rect x="6.8" y="17.6" width="2.6" height="2.2" rx="0.5" stroke="#FF7A00" strokeWidth="1.8" fill="none" />
      <rect x="10.7" y="17.6" width="2.6" height="2.2" rx="0.5" stroke="#FF7A00" strokeWidth="1.8" fill="none" />
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Outer isometric cube */}
      <path d="M21 7.5L12 2.5L3 7.5V16.5L12 21.5L21 16.5V7.5Z" stroke="#0066FF" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
      {/* Inner Y axis */}
      <path d="M12 21.5V12L21 7.5" stroke="#0066FF" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
      <path d="M12 12L3 7.5" stroke="#0066FF" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
      {/* Handle notch on right face */}
      <line x1="16.5" y1="13.5" x2="16.5" y2="15.5" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Foreground Person */}
      <circle cx="8" cy="7.5" r="3.3" stroke="#16A34A" strokeWidth="2.2" fill="none" />
      <path d="M2.5 19.5a5.5 5.5 0 0 1 11 0" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* Background Person */}
      <circle cx="16.5" cy="8" r="3" stroke="#16A34A" strokeWidth="2.2" fill="none" />
      <path d="M15 16.2a5 5 0 0 1 5.5 3.3" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function VisibilityIcon() {
  return (
    <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Trendline with arrowhead */}
      <path d="M3 14l4.5-4 4 3 6.5-6.5" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M14 6.5h4v4" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* 4 vertical bars */}
      <line x1="4" y1="21" x2="4" y2="18.5" stroke="#7C3AED" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="9" y1="21" x2="9" y2="15" stroke="#7C3AED" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="14" y1="21" x2="14" y2="12" stroke="#7C3AED" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="19" y1="21" x2="19" y2="9" stroke="#7C3AED" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function SyncIcon() {
  return (
    <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Top curved arrow */}
      <path d="M20 11.5A8.5 8.5 0 0 0 5.5 7L3 9.5" stroke="#0066FF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M3 5v4.5h4.5" stroke="#0066FF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Bottom curved arrow */}
      <path d="M4 12.5A8.5 8.5 0 0 0 18.5 17l2.5-2.5" stroke="#0066FF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M21 19v-4.5h-4.5" stroke="#0066FF" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Headband arch */}
      <path d="M4.5 12a7.5 7.5 0 0 1 15 0" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* Left ear pad */}
      <rect x="2.5" y="11" width="3.5" height="6.5" rx="1.5" stroke="#16A34A" strokeWidth="2" fill="#16A34A" />
      {/* Right ear pad */}
      <rect x="18" y="11" width="3.5" height="6.5" rx="1.5" stroke="#16A34A" strokeWidth="2" fill="#16A34A" />
      {/* Microphone boom */}
      <path d="M19 17.5v0.5a3.5 3.5 0 0 1-3.5 3.5h-2.5" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="21.5" r="1.3" fill="#16A34A" stroke="none" />
    </svg>
  );
}

export default function Challenges({ onOpenConsultModal }) {
  const challenges = [
    {
      title: 'Manual Accounting',
      desc: 'Too much time spent on manual entries and reports.',
      icon: CalculatorIcon,
      // Icon color: Orange (#FF7A00)
      gradientBg: 'bg-gradient-to-br from-orange-50/95 via-amber-50/75 to-yellow-50/85 hover:from-orange-100/95 hover:via-amber-100/85 hover:to-yellow-100/95',
      borderStyle: 'border-orange-200/90 hover:border-orange-400 hover:ring-2 hover:ring-orange-400/25',
      topBar: 'from-[#EA580C] via-[#FF7A00] to-[#FBBF24]',
      leftBar: 'bg-[#FF7A00]',
      shadowStyle: 'hover:shadow-[0_16px_32px_-8px_rgba(255,122,0,0.22)]',
      iconGlow: 'bg-gradient-to-tr from-orange-100/90 to-amber-100/80 text-[#FF7A00]',
      hoverText: 'group-hover:text-[#EA580C]',
    },
    {
      title: 'Inventory Issues',
      desc: 'Difficulty tracking stock and multiple locations.',
      icon: CubeIcon,
      // Icon color: Royal Blue (#0066FF)
      gradientBg: 'bg-gradient-to-br from-blue-50/95 via-sky-50/75 to-indigo-50/85 hover:from-blue-100/95 hover:via-sky-100/85 hover:to-indigo-100/95',
      borderStyle: 'border-blue-200/90 hover:border-blue-400 hover:ring-2 hover:ring-blue-400/25',
      topBar: 'from-[#0047AB] via-[#0066FF] to-[#00D4FF]',
      leftBar: 'bg-[#0066FF]',
      shadowStyle: 'hover:shadow-[0_16px_32px_-8px_rgba(0,102,255,0.22)]',
      iconGlow: 'bg-gradient-to-tr from-blue-100/90 to-sky-100/80 text-[#0066FF]',
      hoverText: 'group-hover:text-[#0052CC]',
    },
    {
      title: 'Disconnected Operations',
      desc: 'Different teams using disconnected systems.',
      icon: UsersIcon,
      // Icon color: Vibrant Green (#16A34A)
      gradientBg: 'bg-gradient-to-br from-emerald-50/95 via-green-50/75 to-teal-50/85 hover:from-emerald-100/95 hover:via-green-100/85 hover:to-teal-100/95',
      borderStyle: 'border-emerald-200/90 hover:border-emerald-400 hover:ring-2 hover:ring-emerald-400/25',
      topBar: 'from-[#15803D] via-[#16A34A] to-[#22C55E]',
      leftBar: 'bg-[#16A34A]',
      shadowStyle: 'hover:shadow-[0_16px_32px_-8px_rgba(22,163,74,0.22)]',
      iconGlow: 'bg-gradient-to-tr from-emerald-100/90 to-green-100/80 text-[#16A34A]',
      hoverText: 'group-hover:text-[#15803D]',
    },
    {
      title: 'Poor Business Visibility',
      desc: 'Lack of real-time business reports and insights.',
      icon: VisibilityIcon,
      // Icon color: Royal Purple (#7C3AED)
      gradientBg: 'bg-gradient-to-br from-purple-50/95 via-violet-50/75 to-fuchsia-50/85 hover:from-purple-100/95 hover:via-violet-100/85 hover:to-fuchsia-100/95',
      borderStyle: 'border-purple-200/90 hover:border-purple-400 hover:ring-2 hover:ring-purple-400/25',
      topBar: 'from-[#6D28D9] via-[#7C3AED] to-[#C084FC]',
      leftBar: 'bg-[#7C3AED]',
      shadowStyle: 'hover:shadow-[0_16px_32px_-8px_rgba(124,58,237,0.22)]',
      iconGlow: 'bg-gradient-to-tr from-purple-100/90 to-fuchsia-100/80 text-[#7C3AED]',
      hoverText: 'group-hover:text-[#7C3AED]',
    },
    {
      title: 'Repetitive Work',
      desc: 'Too many repetitive tasks and processes.',
      icon: SyncIcon,
      // Icon color: Blue (#0066FF)
      gradientBg: 'bg-gradient-to-br from-sky-50/95 via-blue-50/75 to-cyan-50/85 hover:from-sky-100/95 hover:via-blue-100/85 hover:to-cyan-100/95',
      borderStyle: 'border-sky-200/90 hover:border-sky-400 hover:ring-2 hover:ring-sky-400/25',
      topBar: 'from-[#0047AB] via-[#0284C7] to-[#06B6D4]',
      leftBar: 'bg-[#0284C7]',
      shadowStyle: 'hover:shadow-[0_16px_32px_-8px_rgba(2,132,199,0.22)]',
      iconGlow: 'bg-gradient-to-tr from-sky-100/90 to-blue-100/80 text-[#0066FF]',
      hoverText: 'group-hover:text-[#0052CC]',
    },
    {
      title: 'Technical Support',
      desc: 'Lack of timely software support and assistance.',
      icon: SupportIcon,
      // Icon color: Green (#16A34A)
      gradientBg: 'bg-gradient-to-br from-green-50/95 via-emerald-50/75 to-teal-50/85 hover:from-green-100/95 hover:via-emerald-100/85 hover:to-teal-100/95',
      borderStyle: 'border-green-200/90 hover:border-green-400 hover:ring-2 hover:ring-green-400/25',
      topBar: 'from-[#15803D] via-[#16A34A] to-[#34D399]',
      leftBar: 'bg-[#16A34A]',
      shadowStyle: 'hover:shadow-[0_16px_32px_-8px_rgba(22,163,74,0.22)]',
      iconGlow: 'bg-gradient-to-tr from-green-100/90 to-emerald-100/80 text-[#16A34A]',
      hoverText: 'group-hover:text-[#15803D]',
    },
  ];

  return (
    <section id="challenges" className="py-12 lg:py-14 bg-[#F8FAFC]/80 border-b border-slate-200/80 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-12">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-[320px] xl:w-[350px] shrink-0 space-y-4 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-extrabold text-[#0B1528] tracking-tight leading-[1.25]">
              <span className="block whitespace-nowrap">Is Your Business Facing</span>
              <span className="block">
                These <span className="text-[#0052CC]">Challenges?</span>
              </span>
            </h2>

            <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed max-w-[340px]">
              We help you overcome operational, accounting and technology challenges with practical and scalable solutions.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenConsultModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-[13px] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all group"
              >
                <span>Let's Solve Your Business Challenges</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="flex-1 min-w-0 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {challenges.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    onClick={onOpenConsultModal}
                    className={`relative overflow-hidden rounded-2xl p-4 sm:p-5 border ${item.borderStyle} ${item.gradientBg} shadow-sm ${item.shadowStyle} hover:-translate-y-2 hover:scale-[1.015] active:scale-[0.98] transition-all duration-300 ease-out flex items-center gap-3.5 sm:gap-4 group cursor-pointer`}
                  >
                    {/* Top Gradient Accent Bar matching exact logo/icon colors */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.topBar} rounded-t-2xl`} />

                    {/* Left Accent Bar on Hover */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${item.leftBar} scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-r`} />

                    {/* Animated Shimmer / Sheen Sweep Effect on Hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

                    {/* Icon with Squircle Backdrop & Hover Animation */}
                    <div className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-xl ${item.iconGlow} shadow-xs group-hover:scale-115 group-hover:-rotate-6 transition-all duration-300 ease-out relative z-10`}>
                      <IconComponent />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1 relative z-10">
                      <h3 className={`text-[15px] sm:text-[15.5px] font-bold text-[#0B1528] ${item.hoverText} tracking-tight leading-snug transition-colors duration-200`}>
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[12.5px] text-slate-600 leading-snug sm:leading-relaxed mt-0.5 font-normal">
                        {item.desc}
                      </p>
                    </div>

                    {/* Hover Slide-in Action Arrow */}
                    <div className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${item.hoverText} shrink-0 relative z-10`}>
                      <ArrowRight className="w-4 h-4" />
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
