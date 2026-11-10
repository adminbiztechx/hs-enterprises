import React from 'react';

// Reusable Tally Screen Brand Mark matching user reference (media_1794293020543_2232a8a1.png)
export function TallyScreenBrand({ subBadge, isAddons = false }) {
  return (
    <div className="flex flex-col items-center justify-center select-none">
      {/* Dual pill emblem + Brand Name */}
      <div className="inline-flex items-center gap-1.5">
        <div className="flex gap-0.5 items-center">
          {/* Golden Yellow / Amber Pill */}
          <div className="w-[7px] h-[15px] bg-[#FFB703] rounded-full shadow-xs" />
          {/* Deep Navy Blue Pill */}
          <div className="w-[7px] h-[15px] bg-[#023E8A] rounded-full shadow-xs" />
        </div>
        <div className="font-extrabold text-[13px] tracking-tight text-[#002D62] leading-none">
          Tally
          {isAddons ? (
            <span className="text-[#0077B6] font-bold ml-1">Add-ons</span>
          ) : (
            <span className="text-[#0077B6] font-bold">Prime</span>
          )}
        </div>
      </div>

      {/* Optional product sub-badge */}
      {subBadge && (
        <span className="text-[8px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full mt-1 bg-[#002D62] text-white shadow-xs">
          {subBadge}
        </span>
      )}

      {/* 5 rounded pill bars underneath (Exact heights and colors from user reference) */}
      <div className="flex gap-1 items-end mt-1.5 h-4.5">
        <div className="w-2 h-2 bg-[#BFDBFE] rounded-full" />
        <div className="w-2 h-3 bg-[#60A5FA] rounded-full" />
        <div className="w-2 h-4.5 bg-[#2563EB] rounded-full" />
        <div className="w-2 h-2.5 bg-[#93C5FD] rounded-full" />
        <div className="w-2 h-3.5 bg-[#3B82F6] rounded-full" />
      </div>
    </div>
  );
}

// 1. TallyPrime Laptop (Card 1)
export function TallyPrimeIllustration() {
  return (
    <div className="relative w-full h-36 flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Screen */}
        <div className="w-48 h-28 bg-slate-900 rounded-t-lg p-1.5 shadow-md border-2 border-slate-700 flex flex-col items-center justify-between">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-0.5" />
          <div className="w-full flex-1 bg-white rounded flex flex-col items-center justify-center p-2 shadow-inner">
            <TallyScreenBrand />
          </div>
        </div>
        {/* Base */}
        <div className="w-56 h-2 bg-slate-300 rounded-b-md shadow-sm border-t border-slate-400 flex justify-center">
          <div className="w-10 h-0.5 bg-slate-400 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// 2. TallyPrime Server Laptop with Server Rack (Card 2)
export function TallyPrimeServerIllustration() {
  return (
    <div className="relative w-full h-36 flex items-center justify-center gap-2.5">
      {/* Laptop */}
      <div className="relative flex flex-col items-center">
        <div className="w-40 h-28 bg-slate-900 rounded-t-lg p-1.5 shadow-md border-2 border-slate-700 flex flex-col items-center justify-between">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-0.5" />
          <div className="w-full flex-1 bg-white rounded flex flex-col items-center justify-center p-1.5 shadow-inner">
            <TallyScreenBrand subBadge="SERVER" />
          </div>
        </div>
        <div className="w-46 h-2 bg-slate-300 rounded-b-md border-t border-slate-400 flex justify-center">
          <div className="w-8 h-0.5 bg-slate-400 rounded-full" />
        </div>
      </div>

      {/* 3 Server Racks Stack in Tally Blue Theme */}
      <div className="flex flex-col gap-1 z-10">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-12 h-6 bg-slate-800 rounded border border-slate-600 shadow-sm flex items-center justify-between px-1.5"
          >
            <div className="flex gap-1 items-center">
              <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
              <span className="w-1 h-1 rounded-full bg-[#FFB703]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="w-5 h-0.5 bg-blue-300/80 rounded" />
              <div className="w-3.5 h-0.5 bg-slate-500 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. TallyPrime Edit Log Laptop (Card 3)
export function TallyPrimeEditLogIllustration() {
  return (
    <div className="relative w-full h-36 flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Screen */}
        <div className="w-48 h-28 bg-slate-900 rounded-t-lg p-1.5 shadow-md border-2 border-slate-700 flex flex-col items-center justify-between">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-0.5" />
          <div className="w-full flex-1 bg-white rounded flex flex-col items-center justify-center p-2 shadow-inner">
            <TallyScreenBrand subBadge="EDIT LOG" />
          </div>
        </div>
        {/* Base */}
        <div className="w-56 h-2 bg-slate-300 rounded-b-md shadow-sm border-t border-slate-400 flex justify-center">
          <div className="w-10 h-0.5 bg-slate-400 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// 4. Tally Add-ons Laptop (Card 4)
export function TallyAddonsIllustration() {
  return (
    <div className="relative w-full h-36 flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Screen */}
        <div className="w-48 h-28 bg-slate-900 rounded-t-lg p-1.5 shadow-md border-2 border-slate-700 flex flex-col items-center justify-between">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-0.5" />
          <div className="w-full flex-1 bg-white rounded flex flex-col items-center justify-center p-2 shadow-inner">
            <TallyScreenBrand isAddons subBadge="CUSTOM MODULES" />
          </div>
        </div>
        {/* Base */}
        <div className="w-56 h-2 bg-slate-300 rounded-b-md shadow-sm border-t border-slate-400 flex justify-center">
          <div className="w-10 h-0.5 bg-slate-400 rounded-full" />
        </div>
      </div>
    </div>
  );
}
