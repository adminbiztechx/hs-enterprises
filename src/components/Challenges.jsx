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
    },
    {
      title: 'Inventory Issues',
      desc: 'Difficulty tracking stock and multiple locations.',
      icon: CubeIcon,
    },
    {
      title: 'Disconnected Operations',
      desc: 'Different teams using disconnected systems.',
      icon: UsersIcon,
    },
    {
      title: 'Poor Business Visibility',
      desc: 'Lack of real-time business reports and insights.',
      icon: VisibilityIcon,
    },
    {
      title: 'Repetitive Work',
      desc: 'Too many repetitive tasks and processes.',
      icon: SyncIcon,
    },
    {
      title: 'Technical Support',
      desc: 'Lack of timely software support and assistance.',
      icon: SupportIcon,
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
                    className="relative overflow-hidden bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_30px_-6px_rgba(0,82,204,0.16),0_6px_12px_-4px_rgba(0,82,204,0.08)] hover:border-[#0052CC] hover:ring-2 hover:ring-[#0052CC]/15 hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 ease-out flex items-center gap-3.5 sm:gap-4 group cursor-pointer"
                  >
                    {/* Left Accent Bar on Hover */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0052CC] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-r" />

                    {/* Icon with Hover Animation */}
                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-blue-50/80 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 ease-out">
                      <IconComponent />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[15px] sm:text-[15.5px] font-bold text-[#0B1528] group-hover:text-[#0052CC] tracking-tight leading-snug transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[12.5px] text-slate-500 leading-snug sm:leading-relaxed mt-0.5 font-normal">
                        {item.desc}
                      </p>
                    </div>

                    {/* Hover Slide-in Action Arrow */}
                    <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#0052CC] shrink-0">
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
