import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { TallyPrimeBadge } from './Logos';

export default function Hero({ onOpenConsultModal, onNavigateProducts }) {
  const highlights = [
    'Accounting & Finance',
    'Inventory Management',
    'GST & Compliance',
    'Business Reports',
    'Automation & Integration',
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#032552] via-[#053775] to-[#0A4B96] text-white pt-8 pb-14 lg:pt-14 lg:pb-20 w-full">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-400/40 bg-sky-950/40 text-sky-300 text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              COMPLETE BUSINESS TECHNOLOGY PARTNER
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12]">
              Run Your Business <span className="text-[#00D4FF]">Smarter.</span>
              <br />
              Grow <span className="text-[#22C55E]">Faster.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Empowering businesses with <strong className="text-white font-semibold">TallyPrime</strong>, business automation and technology solutions that <span className="text-white font-medium">simplify operations</span>, ensure compliance and drive growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenConsultModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm shadow-lg shadow-green-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 group"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onNavigateProducts}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/60 hover:border-white bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-150 backdrop-blur-sm cursor-pointer"
              >
                Explore Our Solutions
              </button>
            </div>

            {/* Micro-trust indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs font-medium text-slate-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Tally Experts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>End-to-End Solutions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Ongoing Support</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual & Floating Cards */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-[540px] xl:max-w-[600px]">
              
              {/* Background circular wave glow shape */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 to-blue-600/30 rounded-[38%_62%_63%_37%/41%_44%_56%_59%] blur-xl transform scale-105" />

              {/* Main Image container with smooth organic curve cutout matching design */}
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/20 bg-slate-800">
                <img
                  src="/images/hero-businessman.jpg"
                  alt="Indian Businessman working on laptop with TallyPrime"
                  className="w-full h-[360px] sm:h-[420px] md:h-[460px] object-cover object-top hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to high quality curated Unsplash photo matching prompt
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=85";
                  }}
                />
                
                {/* Subtle dark gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#032552]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card 1: Top Center TallyPrime Logo Badge */}
              <div className="absolute -top-3 left-4 sm:left-10 z-20 animate-float">
                <TallyPrimeBadge className="shadow-xl ring-2 ring-white/50" />
              </div>

              {/* Floating Card 2: Top Right "Business Overview" with Mini Growth Chart */}
              <div className="absolute -top-4 right-1 sm:-right-4 z-20 bg-white text-slate-800 rounded-xl p-3 shadow-xl border border-slate-100 animate-float-delayed hidden xs:block">
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <span className="text-[11px] font-bold text-slate-700">Business Overview</span>
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                
                {/* Mini Bar Chart */}
                <div className="flex items-end gap-1.5 h-10 pt-1">
                  <div className="w-2.5 bg-emerald-200 rounded-t h-[30%]"></div>
                  <div className="w-2.5 bg-emerald-300 rounded-t h-[45%]"></div>
                  <div className="w-2.5 bg-emerald-400 rounded-t h-[65%]"></div>
                  <div className="w-2.5 bg-emerald-500 rounded-t h-[80%]"></div>
                  <div className="w-2.5 bg-emerald-600 rounded-t h-[100%]"></div>
                </div>
                <div className="flex justify-between items-center mt-1 text-[9px] text-slate-500 font-medium">
                  <span>Growth</span>
                  <span className="text-emerald-600 font-bold">+48%</span>
                </div>
              </div>

              {/* Floating Card 3: Right Side Vertical Features Pill List */}
              <div className="absolute -bottom-4 right-2 sm:right-0 sm:bottom-6 z-20 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-3.5 shadow-2xl border border-slate-100 max-w-[210px] space-y-2 animate-float">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-800 leading-tight">
                      {item}
                    </span>
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
