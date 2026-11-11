import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick WhatsApp Contact" className="hidden md:flex fixed bottom-6 right-6 z-40 items-center group">
      {/* Tooltip badge on hover */}
      <div className="hidden md:flex items-center mr-3 bg-white px-3 py-1.5 rounded-full shadow-lg border border-slate-200/80 text-xs font-bold text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span>Chat with Tally Expert</span>
      </div>

      <a
        href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20H%20S%20ENTERPRISES%20and%20TallyPrime."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 group-hover:shadow-green-500/50"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </aside>
  );
}
