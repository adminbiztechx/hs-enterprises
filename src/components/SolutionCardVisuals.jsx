import React from 'react';
import { Building2, Network, MessageCircle, ShoppingCart, Cloud, Database, ArrowRightLeft, Cpu, Cog } from 'lucide-react';

// Card 5: Multi-Branch / Multi-Location
export function MultiBranchVisual() {
  return (
    <div className="w-full h-44 bg-gradient-to-br from-slate-50 to-blue-50/60 flex items-center justify-center p-3 relative overflow-hidden">
      {/* Central Hub with radiating dotted lines to 3 branches */}
      <div className="flex items-center justify-center gap-6 relative z-10">
        {/* Branch 1 */}
        <div className="flex flex-col items-center">
          <div className="w-9 h-9 rounded-lg bg-white shadow-md border border-slate-200 flex items-center justify-center text-blue-600">
            <Building2 className="w-5 h-5" />
          </div>
          <span className="text-[9px] font-bold text-slate-600 mt-1">Branch A</span>
        </div>

        {/* Central Hub */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-[#0052CC] text-white shadow-lg flex items-center justify-center ring-4 ring-blue-100 animate-pulse">
            <Network className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold text-[#0052CC] mt-1">Head Office</span>
        </div>

        {/* Branch 2 */}
        <div className="flex flex-col items-center">
          <div className="w-9 h-9 rounded-lg bg-white shadow-md border border-slate-200 flex items-center justify-center text-blue-600">
            <Building2 className="w-5 h-5" />
          </div>
          <span className="text-[9px] font-bold text-slate-600 mt-1">Warehouse</span>
        </div>
      </div>

      {/* Dotted connector line */}
      <div className="absolute top-1/2 left-10 right-10 h-0.5 border-b-2 border-dashed border-blue-300 -translate-y-2 z-0" />
    </div>
  );
}

// Card 6: Business Process Automation Laptop
export function ProcessAutomationVisual() {
  return (
    <div className="w-full h-44 bg-gradient-to-br from-slate-50 to-sky-50/60 flex items-center justify-center p-3 relative overflow-hidden">
      <div className="flex flex-col items-center">
        {/* Laptop frame */}
        <div className="w-44 h-28 bg-slate-900 rounded-t-lg p-1.5 shadow-md border-2 border-slate-700 flex flex-col items-center justify-between">
          <div className="w-1 h-1 rounded-full bg-slate-600" />
          <div className="w-full flex-1 bg-sky-950/90 rounded flex flex-col items-center justify-center p-2 text-white">
            <div className="relative">
              <Cog className="w-8 h-8 text-sky-400 animate-[spin_10s_linear_infinite]" />
              <div className="w-3 h-3 rounded-full bg-cyan-400 absolute top-2.5 left-2.5" />
            </div>
            <span className="text-[9px] font-bold text-sky-300 mt-1 uppercase tracking-wider">
              Auto Workflow Engine
            </span>
          </div>
        </div>
        <div className="w-52 h-1.5 bg-slate-300 rounded-b-md border-t border-slate-400" />
      </div>
    </div>
  );
}

// Card 7: System Integration Laptop with WhatsApp, Cart, Cloud
export function SystemIntegrationVisual() {
  return (
    <div className="w-full h-44 bg-gradient-to-br from-slate-50 to-emerald-50/60 flex items-center justify-center p-3 relative overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="w-44 h-28 bg-slate-900 rounded-t-lg p-1.5 shadow-md border-2 border-slate-700 flex flex-col items-center justify-between">
          <div className="w-1 h-1 rounded-full bg-slate-600" />
          <div className="w-full flex-1 bg-white rounded flex items-center justify-around p-2">
            <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm">
              <MessageCircle className="w-4 h-4 fill-current" />
            </div>
            <ArrowRightLeft className="w-4 h-4 text-slate-400 animate-pulse" />
            <div className="w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-sm">
              <ShoppingCart className="w-4 h-4" />
            </div>
            <ArrowRightLeft className="w-4 h-4 text-slate-400 animate-pulse" />
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm">
              <Cloud className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="w-52 h-1.5 bg-slate-300 rounded-b-md border-t border-slate-400" />
      </div>
    </div>
  );
}

// Card 8: Data Migration Laptop with Database Stack
export function DataMigrationVisual() {
  return (
    <div className="w-full h-44 bg-gradient-to-br from-slate-50 to-indigo-50/60 flex items-center justify-center p-3 relative overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="w-44 h-28 bg-slate-900 rounded-t-lg p-1.5 shadow-md border-2 border-slate-700 flex flex-col items-center justify-between">
          <div className="w-1 h-1 rounded-full bg-slate-600" />
          <div className="w-full flex-1 bg-indigo-950/90 rounded flex items-center justify-around p-2 text-white">
            <div className="flex flex-col items-center gap-1">
              <Database className="w-6 h-6 text-indigo-400" />
              <span className="text-[8px] text-slate-300">Legacy DB</span>
            </div>
            <ArrowRightLeft className="w-4 h-4 text-emerald-400 animate-pulse" />
            <div className="flex flex-col items-center gap-1">
              <Database className="w-6 h-6 text-emerald-400" />
              <span className="text-[8px] text-emerald-300">TallyPrime</span>
            </div>
          </div>
        </div>
        <div className="w-52 h-1.5 bg-slate-300 rounded-b-md border-t border-slate-400" />
      </div>
    </div>
  );
}
