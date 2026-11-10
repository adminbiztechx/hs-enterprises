import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function BottomCTA({ onOpenConsultModal, onOpenDemoModal }) {
  return (
    <section className="py-12 bg-white w-full">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="bg-gradient-to-r from-[#03234D] via-[#083872] to-[#042857] text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-blue-900/40">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            {/* Title & Description */}
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
                Let's Make Your Business Smarter.
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                Whether you need TallyPrime, business automation, customization or ongoing support, our team is ready to help.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-shrink-0">
              <button
                onClick={onOpenConsultModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all group"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-white/40 hover:border-white bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-sky-400" />
                <span>Talk to Our Expert</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
