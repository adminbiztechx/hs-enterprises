import React from 'react';
import { ArrowRight } from 'lucide-react';

// Exact service icons matching the reference design
function ImplementationGearIcon() {
  return (
    <svg className="w-9 h-9 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CustomizationCodeIcon() {
  return (
    <svg className="w-9 h-9 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="7 8 3 12 7 16" />
      <polyline points="17 8 21 12 17 16" />
      <line x1="14" y1="5" x2="10" y2="19" strokeWidth="2.2" />
    </svg>
  );
}

function AutomationTreeIcon() {
  return (
    <svg className="w-9 h-9 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Top node */}
      <rect x="9.5" y="2.5" width="5" height="5" rx="1" />
      {/* Vertical trunk */}
      <line x1="12" y1="7.5" x2="12" y2="12.5" />
      {/* Horizontal branch */}
      <path d="M5.5 16.5V13.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v3" />
      {/* Bottom left node */}
      <rect x="3" y="16.5" width="5" height="5" rx="1" />
      {/* Bottom right node */}
      <rect x="16" y="16.5" width="5" height="5" rx="1" />
    </svg>
  );
}

function SupportHeadsetIcon() {
  return (
    <svg className="w-9 h-9 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 12a7.5 7.5 0 0 1 15 0" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <rect x="2.5" y="11" width="3.5" height="6.5" rx="1.5" stroke="#16A34A" strokeWidth="2" fill="#16A34A" />
      <rect x="18" y="11" width="3.5" height="6.5" rx="1.5" stroke="#16A34A" strokeWidth="2" fill="#16A34A" />
      <path d="M19 17.5v0.5a3.5 3.5 0 0 1-3.5 3.5h-2.5" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="21.5" r="1.3" fill="#16A34A" stroke="none" />
    </svg>
  );
}

function TrainingCapIcon() {
  return (
    <svg className="w-9 h-9 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 3 2 8 12 13 22 8 12 3" />
      <path d="M6 10.5v5a6 6 0 0 0 12 0v-5" />
      <path d="M22 8v8" />
      <circle cx="22" cy="16.5" r="0.8" fill="#7C3AED" stroke="none" />
    </svg>
  );
}

function ConsultingBarsIcon() {
  return (
    <svg className="w-9 h-9 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="14" width="3.5" height="7" rx="1" />
      <rect x="9.5" y="9" width="3.5" height="12" rx="1" />
      <rect x="16" y="4" width="3.5" height="17" rx="1" />
    </svg>
  );
}

export default function Services({ onNavigateServices, onOpenConsultModal }) {
  const services = [
    {
      title: 'Implementation',
      desc: 'Installation, configuration and go-live support.',
      icon: ImplementationGearIcon,
    },
    {
      title: 'Customization',
      desc: 'TDL, customized reports and business workflows.',
      icon: CustomizationCodeIcon,
    },
    {
      title: 'Business Automation',
      desc: 'WhatsApp, CRM and third-party integrations.',
      icon: AutomationTreeIcon,
    },
    {
      title: 'Support & AMC',
      desc: 'Remote support, maintenance and renewals.',
      icon: SupportHeadsetIcon,
    },
    {
      title: 'Training',
      desc: 'Tally and process training for your team.',
      icon: TrainingCapIcon,
    },
    {
      title: 'Business Consulting',
      desc: 'MIS, reporting and technology advisory.',
      icon: ConsultingBarsIcon,
    },
  ];

  const handleServiceClick = () => {
    if (onNavigateServices) {
      onNavigateServices();
    } else if (onOpenConsultModal) {
      onOpenConsultModal();
    }
  };

  return (
    <section id="services" className="py-12 lg:py-14 bg-[#F8FAFC]/80 border-b border-slate-200/80 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-6 xl:gap-8">
          
          {/* Left Text */}
          <div className="w-full lg:w-[260px] xl:w-[290px] shrink-0 text-left space-y-2.5">
            <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-extrabold text-[#0B1528] tracking-tight leading-tight">
              Our Services
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
              From implementation to ongoing support, we provide end-to-end services to help you get the maximum value from your business software.
            </p>
            <div className="pt-1">
              <button
                onClick={handleServiceClick}
                className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#0052CC] hover:text-[#003D99] transition-colors group cursor-pointer"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="flex-1 min-w-0 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    onClick={handleServiceClick}
                    className="bg-white rounded-2xl p-4 sm:p-4.5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col items-center text-center justify-start group cursor-pointer"
                  >
                    <div className="mb-3 shrink-0 flex items-center justify-center w-10 h-10 group-hover:scale-105 transition-transform">
                      <Icon />
                    </div>
                    <h3 className="text-[14px] sm:text-[14.5px] font-bold text-[#0B1528] tracking-tight leading-snug mb-1.5 group-hover:text-[#0052CC] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[11.5px] sm:text-[12px] text-slate-500 leading-snug font-normal">
                      {service.desc}
                    </p>
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
