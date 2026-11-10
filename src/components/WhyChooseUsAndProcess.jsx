import React from 'react';
import { Check } from 'lucide-react';

export default function WhyChooseUsAndProcess() {
  const whyChoosePoints = [
    'Experienced implementation team',
    'Industry-specific understanding',
    'End-to-end technology solutions',
    'Dedicated customer support',
    'Customized and scalable solutions',
    'Long-term technology partnership',
  ];

  const steps = [
    {
      num: 1,
      title: 'Understand Your Business',
      desc: 'Assess processes, challenges and needs.',
    },
    {
      num: 2,
      title: 'Recommend the Right Solution',
      desc: 'Suggest the right products and integrations.',
    },
    {
      num: 3,
      title: 'Implementation & Configuration',
      desc: 'Deploy and configure the solution.',
    },
    {
      num: 4,
      title: 'Training & Go Live',
      desc: 'Train your team and ensure smooth adoption.',
    },
    {
      num: 5,
      title: 'Continuous Support',
      desc: 'Ongoing support, maintenance and optimization.',
    },
  ];

  return (
    <section id="why-us" className="py-10 lg:py-12 bg-white border-b border-slate-200/80 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Why Choose Us? */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-[24px] font-extrabold text-[#0B1528] tracking-tight text-left">
              Why Choose Us?
            </h2>

            {/* Desktop / Tablet layout: photo left, points right */}
            <div className="hidden sm:flex items-center gap-4 sm:gap-5">
              {/* Team Photo */}
              <div className="w-44 sm:w-48 h-40 sm:h-44 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 shrink-0 bg-slate-100">
                <img
                  src="/images/team-exact.jpg"
                  alt="BizTech Implementation Team"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/team-professionals.jpg";
                  }}
                />
              </div>

              {/* 6 Checklist Points */}
              <div className="space-y-2">
                {whyChoosePoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#16A34A] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-xs sm:text-[12.5px] font-medium text-slate-800 leading-tight">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Layout: Photo banner with side-by-side or stacked checklist */}
            <div className="block sm:hidden space-y-3.5">
              <div className="flex items-center gap-3.5 bg-slate-50/70 p-3 rounded-2xl border border-slate-100">
                <div className="w-24 h-28 rounded-xl overflow-hidden shadow-xs border border-slate-200/80 shrink-0 bg-slate-100">
                  <img
                    src="/images/team-exact.jpg"
                    alt="BizTech Implementation Team"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/team-professionals.jpg";
                    }}
                  />
                </div>
                <div className="space-y-1.5 flex-1 min-w-0">
                  {whyChoosePoints.slice(0, 3).map((point, index) => (
                    <div key={index} className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#16A34A] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[11.5px] font-medium text-slate-800 leading-tight">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Remaining 3 points in clean row */}
              <div className="space-y-1.5 pl-1">
                {whyChoosePoints.slice(3).map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#16A34A] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-xs font-medium text-slate-800 leading-tight">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Our Implementation Process */}
          <div className="lg:col-span-7 space-y-4 lg:border-l lg:border-slate-200/80 lg:pl-8 xl:pl-10">
            <h2 className="text-xl sm:text-2xl lg:text-[24px] font-extrabold text-[#0B1528] tracking-tight text-left">
              Our Implementation Process
            </h2>

            {/* Desktop 5-Step Process Timeline (hidden on mobile) */}
            <div className="hidden md:block relative pt-2">
              <div className="grid grid-cols-5 gap-1 sm:gap-2 relative">
                
                {/* Connecting Arrow Lines between the circles */}
                <div className="hidden sm:flex absolute top-4 left-6 right-6 items-center justify-between pointer-events-none -z-0">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex-1 flex items-center justify-end px-2">
                      <div className="w-full h-[1.5px] bg-[#93C5FD]" />
                      <div className="w-0 h-0 border-y-[3.5px] border-y-transparent border-l-[6px] border-l-[#93C5FD] -ml-0.5" />
                    </div>
                  ))}
                </div>

                {steps.map((step) => (
                  <div key={step.num} className="relative z-10 flex flex-col items-center text-center group">
                    {/* Circle Number */}
                    <div className="w-8 h-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm ring-4 ring-white mb-2.5">
                      {step.num}
                    </div>

                    {/* Step Title */}
                    <h3 className="text-[12px] sm:text-[12.5px] font-bold text-[#0B1528] leading-tight mb-1">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug font-normal max-w-[120px]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Vertical Stepped Timeline in clean container */}
            <div className="block md:hidden bg-slate-50/70 rounded-2xl p-4 border border-slate-100">
              <div className="space-y-0.5">
                {steps.map((step, idx) => (
                  <div key={step.num} className="relative flex items-start gap-3 pb-3.5 last:pb-0">
                    {/* Step Circle */}
                    <div className="relative z-10 w-7 h-7 rounded-full bg-[#0066FF] text-white flex items-center justify-center font-bold text-xs shadow-xs ring-4 ring-white shrink-0 mt-0.5">
                      {step.num}
                    </div>

                    {/* Connecting Vertical Line */}
                    {idx < steps.length - 1 && (
                      <div className="absolute left-[13px] top-7 bottom-0 w-[2px] bg-[#93C5FD]" />
                    )}

                    {/* Step Content */}
                    <div className="text-left flex-1 min-w-0">
                      <h3 className="text-[13px] font-bold text-[#0B1528] leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-normal mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
