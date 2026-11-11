import React from 'react';
import { ArrowLeft, Home, Layers, Phone } from 'lucide-react';

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.64 7.89 8 8.49 8 9.72C8 10.95 8.89 12.14 9.01 12.3C9.14 12.46 10.77 14.96 13.25 16.03C13.84 16.29 14.3 16.44 14.66 16.55C15.26 16.74 15.79 16.71 16.23 16.65C16.71 16.57 17.72 16.03 17.93 15.45C18.14 14.86 18.14 14.36 18.08 14.25C18.02 14.15 17.85 14.09 17.6 13.96C17.35 13.84 16.12 13.23 15.89 13.15C15.66 13.06 15.5 13.02 15.33 13.26C15.17 13.51 14.69 14.09 14.54 14.25C14.4 14.42 14.25 14.44 14 14.32C13.75 14.2 12.69 13.85 11.44 12.73C10.46 11.86 9.8 10.78 9.61 10.45C9.42 10.12 9.59 9.94 9.71 9.82C9.82 9.71 9.96 9.53 10.09 9.38C10.21 9.24 10.25 9.13 10.33 8.97C10.42 8.8 10.37 8.66 10.31 8.53C10.25 8.41 9.77 7.22 9.53 7.34Z" />
    </svg>
  );
}

export default function MobileBottomNav({
  currentPage,
  onNavigateHome,
  onNavigateProducts,
  onOpenConsultModal,
}) {
  const isHome = currentPage === 'home' || !currentPage;
  const isProducts = currentPage === 'products';

  const handleBack = () => {
    if (currentPage && currentPage !== 'home') {
      onNavigateHome();
    } else if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]"
    >
      <div className="flex items-center justify-around h-15 px-2 max-w-md mx-auto">
        
        {/* 1. Back / Previous */}
        <button
          onClick={handleBack}
          className="flex flex-col items-center justify-center flex-1 py-1 text-slate-500 hover:text-slate-800 active:scale-95 transition-all cursor-pointer"
          aria-label="Go Back"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Back</span>
        </button>

        {/* 2. Home */}
        <button
          onClick={onNavigateHome}
          className={`flex flex-col items-center justify-center flex-1 py-1 active:scale-95 transition-all cursor-pointer ${
            isHome ? 'text-[#0052CC]' : 'text-slate-500 hover:text-slate-800'
          }`}
          aria-label="Go to Home"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isHome ? 'bg-blue-50 text-[#0052CC]' : 'hover:bg-slate-100'
          }`}>
            <Home className="w-5 h-5" />
          </div>
          <span className={`text-[10px] tracking-tight mt-0.5 ${isHome ? 'font-bold text-[#0052CC]' : 'font-semibold'}`}>
            Home
          </span>
        </button>

        {/* 3. Products */}
        <button
          onClick={onNavigateProducts}
          className={`flex flex-col items-center justify-center flex-1 py-1 active:scale-95 transition-all cursor-pointer ${
            isProducts ? 'text-[#0052CC]' : 'text-slate-500 hover:text-slate-800'
          }`}
          aria-label="View Products"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isProducts ? 'bg-blue-50 text-[#0052CC]' : 'hover:bg-slate-100'
          }`}>
            <Layers className="w-5 h-5" />
          </div>
          <span className={`text-[10px] tracking-tight mt-0.5 ${isProducts ? 'font-bold text-[#0052CC]' : 'font-semibold'}`}>
            Products
          </span>
        </button>

        {/* 4. Call (Compulsory business action) */}
        <a
          href="tel:+919876543210"
          className="flex flex-col items-center justify-center flex-1 py-1 text-slate-500 hover:text-blue-600 active:scale-95 transition-all cursor-pointer"
          aria-label="Direct Phone Call"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-50 text-[#0052CC] hover:bg-blue-100 transition-colors shadow-xs">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold tracking-tight mt-0.5 text-slate-600">Call</span>
        </a>

        {/* 5. WhatsApp (Compulsory chat action) */}
        <a
          href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20H%20S%20ENTERPRISES%20and%20TallyPrime."
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex flex-col items-center justify-center flex-1 py-1 text-slate-500 hover:text-green-600 active:scale-95 transition-all cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative w-8 h-8 rounded-full flex items-center justify-center bg-emerald-50 text-[#25D366] hover:bg-emerald-100 transition-colors shadow-xs">
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">
              1
            </span>
            <WhatsAppIcon className="w-4.5 h-4.5" />
          </div>
          <span className="text-[10px] font-semibold tracking-tight mt-0.5 text-slate-600">WhatsApp</span>
        </a>

      </div>
    </nav>
  );
}
