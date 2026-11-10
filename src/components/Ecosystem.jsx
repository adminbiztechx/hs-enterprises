import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

// Exact icons for Ecosystem diagram
function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.49 0-2.96-.4-4.24-1.16l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.18 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13l4-3 4 3 6-6" />
      <path d="M14 7h3v3" />
      <line x1="4" y1="21" x2="4" y2="18" strokeWidth="2.5" />
      <line x1="9" y1="21" x2="9" y2="15" strokeWidth="2.5" />
      <line x1="14" y1="21" x2="14" y2="12" strokeWidth="2.5" />
      <line x1="19" y1="21" x2="19" y2="9" strokeWidth="2.5" />
    </svg>
  );
}

function CrmIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3.2" />
      <path d="M2.5 19a6 6 0 0 1 12 0" />
      <circle cx="16.5" cy="8" r="2.8" />
      <path d="M15 16.5a4.8 4.8 0 0 1 5.5 3.5" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 22 7 12 2" />
      <line x1="5" y1="10" x2="5" y2="17" strokeWidth="2.2" />
      <line x1="10" y1="10" x2="10" y2="17" strokeWidth="2.2" />
      <line x1="14" y1="10" x2="14" y2="17" strokeWidth="2.2" />
      <line x1="19" y1="10" x2="19" y2="17" strokeWidth="2.2" />
      <rect x="2" y="17" width="20" height="4" rx="0.5" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="7 8 3 12 7 16" />
      <polyline points="17 8 21 12 17 16" />
      <line x1="14" y1="5" x2="10" y2="19" strokeWidth="2.2" />
    </svg>
  );
}

export default function Ecosystem({ onNavigateSolutions, onOpenConsultModal }) {
  return (
    <section id="ecosystem" className="py-12 lg:py-16 bg-white border-b border-slate-200/80 w-full relative overflow-hidden">
      {/* Subtle corner background glows matching the reference */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          
          {/* Left Diagram / Ecosystem Visual */}
          <div className="lg:col-span-6 xl:col-span-6.5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[560px] h-[340px] sm:h-[360px] flex items-center justify-center">
              
              {/* Curved Dashed Connector Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 560 360" fill="none">
                {/* Left 3 connectors */}
                <path d="M 130 65 C 190 65, 230 120, 250 155" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="4 4" />
                <path d="M 125 180 L 245 180" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="4 4" />
                <path d="M 130 295 C 190 295, 230 240, 250 205" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="4 4" />

                {/* Right 3 connectors */}
                <path d="M 430 65 C 370 65, 330 120, 310 155" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="4 4" />
                <path d="M 435 180 L 315 180" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="4 4" />
                <path d="M 430 295 C 370 295, 330 240, 310 205" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="4 4" />
              </svg>

              {/* Central Laptop Graphic */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Laptop Screen Body */}
                <div className="w-48 sm:w-52 h-32 sm:h-34 bg-[#1E293B] rounded-t-xl p-2.5 pb-2 shadow-2xl border-2 border-slate-700/80 flex flex-col items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mb-1" />
                  <div className="w-full h-full bg-white rounded-md flex items-center justify-center gap-2 px-3 shadow-inner">
                    {/* TallyPrime 4-tile logo mark */}
                    <div className="w-6 h-5 grid grid-cols-2 gap-0.5 shrink-0">
                      <div className="bg-[#0047AB] rounded-[1px]"></div>
                      <div className="bg-[#0066FF] rounded-[1px]"></div>
                      <div className="bg-[#FFB800] rounded-[1px]"></div>
                      <div className="bg-[#5B9DF5] rounded-[1px]"></div>
                    </div>
                    <span className="text-sm font-extrabold text-[#003B7A] tracking-tight">
                      TallyPrime
                    </span>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="w-60 sm:w-64 h-3 bg-slate-300 rounded-b-md shadow-md border-t border-slate-400 flex justify-center items-center">
                  <div className="w-12 h-1 bg-slate-400 rounded-full" />
                </div>
              </div>

              {/* Node 1: WhatsApp Automation (Top Left) */}
              <div className="absolute top-4 left-0 sm:left-4 z-20 flex items-center gap-2.5">
                <div className="text-right">
                  <p className="text-[11.5px] sm:text-[12.5px] font-bold text-[#0B1528] leading-tight">
                    WhatsApp<br />Automation
                  </p>
                </div>
                <div className="w-11 h-11 rounded-full bg-[#16A34A] flex items-center justify-center shadow-md ring-4 ring-white shrink-0 hover:scale-105 transition-transform">
                  <WhatsAppIcon />
                </div>
              </div>

              {/* Node 2: E-commerce Integration (Mid Left) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 flex items-center gap-2.5">
                <div className="text-right">
                  <p className="text-[11.5px] sm:text-[12.5px] font-bold text-[#0B1528] leading-tight">
                    E-commerce<br />Integration
                  </p>
                </div>
                <div className="w-11 h-11 rounded-full bg-[#0284C7] flex items-center justify-center shadow-md ring-4 ring-white shrink-0 hover:scale-105 transition-transform">
                  <CartIcon />
                </div>
              </div>

              {/* Node 3: MIS & Analytics (Bottom Left) */}
              <div className="absolute bottom-4 left-0 sm:left-4 z-20 flex items-center gap-2.5">
                <div className="text-right">
                  <p className="text-[11.5px] sm:text-[12.5px] font-bold text-[#0B1528] leading-tight">
                    MIS &<br />Analytics
                  </p>
                </div>
                <div className="w-11 h-11 rounded-full bg-[#0D9488] flex items-center justify-center shadow-md ring-4 ring-white shrink-0 hover:scale-105 transition-transform">
                  <AnalyticsIcon />
                </div>
              </div>

              {/* Node 4: CRM & Customer Management (Top Right) */}
              <div className="absolute top-4 right-0 sm:right-4 z-20 flex items-center gap-2.5">
                <div className="w-11 h-11 rounded-full bg-[#0066FF] flex items-center justify-center shadow-md ring-4 ring-white shrink-0 hover:scale-105 transition-transform">
                  <CrmIcon />
                </div>
                <div className="text-left">
                  <p className="text-[11.5px] sm:text-[12.5px] font-bold text-[#0B1528] leading-tight">
                    CRM & Customer<br />Management
                  </p>
                </div>
              </div>

              {/* Node 5: Banking & Payments (Mid Right) */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 flex items-center gap-2.5">
                <div className="w-11 h-11 rounded-full bg-[#0047AB] flex items-center justify-center shadow-md ring-4 ring-white shrink-0 hover:scale-105 transition-transform">
                  <BankIcon />
                </div>
                <div className="text-left">
                  <p className="text-[11.5px] sm:text-[12.5px] font-bold text-[#0B1528] leading-tight">
                    Banking &<br />Payments
                  </p>
                </div>
              </div>

              {/* Node 6: Custom Applications (Bottom Right) */}
              <div className="absolute bottom-4 right-0 sm:right-4 z-20 flex items-center gap-2.5">
                <div className="w-11 h-11 rounded-full bg-[#003882] flex items-center justify-center shadow-md ring-4 ring-white shrink-0 hover:scale-105 transition-transform">
                  <CodeIcon />
                </div>
                <div className="text-left">
                  <p className="text-[11.5px] sm:text-[12.5px] font-bold text-[#0B1528] leading-tight">
                    Custom<br />Applications
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Text & Checklist Column */}
          <div className="lg:col-span-6 xl:col-span-5.5 space-y-4 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
              Connect Your Business. Automate Your Workflows.
            </h2>

            <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
              Build a connected business <strong className="text-slate-900 font-semibold">ecosystem</strong> around <strong className="text-slate-900 font-semibold">TallyPrime</strong> with automation, integrations and custom solutions tailored to your needs.
            </p>

            {/* 4 Checklist Points */}
            <div className="space-y-2.5 pt-1">
              {[
                'Eliminate manual work and save time',
                'Keep your data connected across systems',
                'Get real-time business insights',
                'Improve customer service and collections'
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#16A34A] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[3.5]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-800">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={onNavigateSolutions || onOpenConsultModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-[13.5px] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
              >
                <span>Discuss Your Automation Requirements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
