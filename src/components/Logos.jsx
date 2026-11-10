import React from 'react';

export const BizTechLogo = ({ className = "h-8", light = false }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
      <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
        {/* Top green wings */}
        <path d="M11 6.5C14 4.5 18 5 18 8C18 11.5 13.5 13.5 11 13.5C8.8 13.5 8 11.8 8.8 9.2C9.4 7.5 10.2 6.8 11 6.5Z" fill="#16A34A" />
        <path d="M17 4C20.5 3 24 5 24 8C24 11 20.5 12.8 17 12.8C15 12.8 14.2 11 15 9C15.5 7.2 16 5 17 4Z" fill="#22C55E" />
        {/* Lower blue swooshes */}
        <path d="M6 25C4 28 6.5 30.5 10.5 29.5C15 28 22.5 17.5 23.5 13C23.5 11 21.5 10.5 19.5 12C15.5 15 8.5 22 6 25Z" fill="#0047AB" />
        <path d="M18.5 17.5C22.5 15.5 28 19 28 22.5C28 26.5 21.5 27.5 17.5 27.5C14.5 27.5 14.5 25.5 15.5 23.5C16.5 20.5 17 18.5 18.5 17.5Z" fill="#0052CC" />
      </svg>
    </div>
    <div className="flex flex-col text-left">
      <div className="flex items-baseline">
        <span className={`font-extrabold text-[17px] sm:text-[18px] tracking-tight leading-none ${light ? 'text-white' : 'text-[#0B1528]'}`}>
          BizTech Solutions
        </span>
        <span className="text-[10px] font-bold text-slate-400 ml-0.5">®</span>
      </div>
      <span className={`text-[10px] sm:text-[10.5px] font-medium tracking-tight mt-0.5 leading-none ${light ? 'text-slate-300' : 'text-[#334155]'}`}>
        Business Technology Partner
      </span>
    </div>
  </div>
);

export const HSEnterprisesLogo = ({ className = "h-8", light = false }) => (
  <BizTechLogo className={className} light={light} />
);

export const TallyPartnerBadge = ({ light = false }) => (
  <div className={`flex items-center gap-2 pl-3.5 border-l ${light ? 'border-slate-700' : 'border-slate-200/90'}`}>
    <div className="flex items-center shrink-0">
      <img
        src="/images/tally-script-logo.png"
        alt="Tally"
        className="h-6 sm:h-7 object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
    <div className="flex flex-col text-left">
      <span className={`text-[10.5px] font-bold leading-tight ${light ? 'text-slate-200' : 'text-[#0B1528]'}`}>
        Authorized
      </span>
      <span className={`text-[10.5px] font-bold leading-tight ${light ? 'text-slate-300' : 'text-[#0B1528]'}`}>
        Tally Partner
      </span>
    </div>
  </div>
);

export const TallyPrimeBadge = ({ className = "h-8" }) => (
  <div className={`inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-lg shadow-md border border-slate-100 ${className}`}>
    <div className="flex gap-0.5 items-center">
      <div className="w-2.5 h-4 bg-[#FFB703] rounded-sm"></div>
      <div className="w-2.5 h-4 bg-[#023E8A] rounded-sm"></div>
    </div>
    <span className="font-extrabold text-sm tracking-tight text-[#002D62]">
      Tally<span className="text-[#0077B6] font-bold">Prime</span>
    </span>
  </div>
);
