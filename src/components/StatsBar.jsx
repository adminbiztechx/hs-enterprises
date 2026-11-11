import React from 'react';

// Exact icons matching the reference image
function AwardRibbonIcon() {
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="6" />
      <circle cx="12" cy="9" r="2.2" />
      <path d="M8.2 14.2L6.8 21.5l5.2-2.2 5.2 2.2-1.4-7.3" />
    </svg>
  );
}

function UsersGroupIcon() {
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 text-[#0066FF]" viewBox="0 0 24 24" fill="currentColor">
      {/* Center Person */}
      <circle cx="12" cy="7" r="3" />
      <path d="M6 18c0-3.3 2.7-6 6-6s6 2.7 6 6v1H6v-1z" />
      {/* Left Person */}
      <circle cx="5" cy="8.5" r="2.2" />
      <path d="M1 18c0-2.8 2-5 4.5-5 .4 0 .9.1 1.3.2-.8 1.2-1.3 2.7-1.3 4.3v1.5H1V18z" />
      {/* Right Person */}
      <circle cx="19" cy="8.5" r="2.2" />
      <path d="M23 18c0-2.8-2-5-4.5-5-.4 0-.9.1-1.3.2.8 1.2 1.3 2.7 1.3 4.3v1.5H23V18z" />
    </svg>
  );
}

function CalendarStatIcon() {
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2.5" />
      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2.5" />
      <line x1="3" y1="9" x2="21" y2="9" strokeWidth="2" />
      <circle cx="7.5" cy="13" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12" cy="13" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="13" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="17" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="17" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function HeadsetSupportIcon() {
  return (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12a8 8 0 0 1 16 0" />
      <rect x="2" y="10.5" width="3.5" height="7" rx="1.5" fill="currentColor" stroke="none" />
      <rect x="18.5" y="10.5" width="3.5" height="7" rx="1.5" fill="currentColor" stroke="none" />
      <path d="M19 17.5v0.5a3.5 3.5 0 0 1-3.5 3.5h-2.5" />
      <circle cx="12" cy="21.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function StatsBar() {
  const stats = [
    {
      icon: AwardRibbonIcon,
      value: 'Authorized',
      label: 'Tally Partner',
    },
    {
      icon: UsersGroupIcon,
      value: '500+',
      label: 'Businesses Served',
    },
    {
      icon: CalendarStatIcon,
      value: '10+',
      label: 'Years of Experience',
    },
    {
      icon: UsersGroupIcon,
      value: 'Certified',
      label: 'Professionals',
    },
    {
      icon: HeadsetSupportIcon,
      value: '24/7',
      label: 'Customer Support',
    },
  ];

  return (
    <section className="relative z-20 w-full -mt-4 sm:-mt-9 mb-6 sm:mb-8 px-3.5 sm:px-6 lg:px-10 xl:px-12">
      <div className="w-full max-w-[1720px] mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.08)] px-5 sm:px-8 py-5 sm:py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 sm:gap-x-6 gap-y-5 sm:gap-y-4 lg:gap-0 lg:divide-x lg:divide-slate-200/90 items-center">
          {stats.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === stats.length - 1;
            return (
              <div
                key={index}
                className={`flex items-center gap-3 sm:gap-3.5 px-1 sm:px-4 lg:px-6 py-1 ${
                  isLast
                    ? 'col-span-2 md:col-span-1 justify-center lg:justify-start pt-1 sm:pt-0'
                    : 'justify-start'
                }`}
              >
                <div className="shrink-0 flex items-center justify-center">
                  <Icon />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14.5px] sm:text-[15.5px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
                    {item.value}
                  </span>
                  <span className="text-[11.5px] sm:text-[12px] font-medium text-[#475569] leading-tight mt-0.5">
                    {item.label}
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
