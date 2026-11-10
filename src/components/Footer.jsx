import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { BizTechLogo, TallyPartnerBadge } from './Logos';

export default function Footer({ onNavigateHome, onNavigateProducts, onNavigateServices, onNavigateIndustries, onNavigateSolutions, onNavigateResources, onNavigateAbout, onOpenConsultModal, onOpenDemoModal }) {
  return (
    <footer className="bg-[#02152C] text-slate-300 pt-16 pb-8 border-t border-slate-800 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Main 6 Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio (4 cols on lg) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 space-y-4">
            <div 
              onClick={onNavigateHome}
              className="flex flex-col sm:flex-row sm:items-center gap-3 cursor-pointer"
            >
              <BizTechLogo light={true} className="h-9" />
              <div className="hidden sm:block">
                <TallyPartnerBadge light={true} />
              </div>
            </div>
            <div className="sm:hidden">
              <TallyPartnerBadge light={true} />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Your complete business technology partner for TallyPrime, automation, customization and ongoing business support.
            </p>
          </div>

          {/* Col 2: Products */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <h4 
              onClick={onNavigateProducts}
              className="text-xs font-bold text-white uppercase tracking-wider cursor-pointer hover:text-sky-400"
            >
              Products
            </h4>
            <ul className="space-y-2 text-xs">
              {['TallyPrime', 'TallyPrime Server', 'Tally Add-ons', 'Business Software', 'Custom Applications'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={onNavigateProducts}
                    className="hover:text-sky-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <h4 
              onClick={onNavigateServices}
              className="text-xs font-bold text-white uppercase tracking-wider cursor-pointer hover:text-sky-400"
            >
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {['Implementation', 'Customization', 'Business Automation', 'Support & AMC', 'Training', 'Consulting'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={onNavigateServices}
                    className="hover:text-sky-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <h4 
              onClick={onNavigateIndustries}
              className="text-xs font-bold text-white uppercase tracking-wider cursor-pointer hover:text-sky-400"
            >
              Industries
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Retail & Supermarkets',
                'Wholesale & Distribution',
                'Manufacturing',
                'Healthcare',
                'Construction',
                'Professional Services',
              ].map((item) => (
                <li key={item}>
                  <button 
                    onClick={onNavigateIndustries}
                    className="hover:text-sky-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Resources & Company */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <h4 
                onClick={onNavigateResources}
                className="text-xs font-bold text-white uppercase tracking-wider cursor-pointer hover:text-sky-400"
              >
                Resources
              </h4>
              <ul className="space-y-2 text-xs">
                {['Blogs', 'Case Studies', 'FAQs', 'Videos'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={onNavigateResources}
                      className="hover:text-sky-400 transition-colors text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 
                onClick={onNavigateAbout}
                className="text-xs font-bold text-white uppercase tracking-wider cursor-pointer hover:text-sky-400"
              >
                Company
              </h4>
              <ul className="space-y-2 text-xs">
                {['About Us', 'Our Team', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={item === 'Contact Us' ? onOpenConsultModal : onNavigateAbout}
                      className="hover:text-sky-400 transition-colors text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          
          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:enquiry@biztechsolutions.in" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>enquiry@biztechsolutions.in</span>
            </a>
          </div>

          {/* Social Icons & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Social Icons with brand SVG */}
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-7 h-7 rounded-full bg-slate-800 hover:bg-[#0A66C2] flex items-center justify-center text-slate-300 hover:text-white transition-all">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-7 h-7 rounded-full bg-slate-800 hover:bg-[#FF0000] flex items-center justify-center text-slate-300 hover:text-white transition-all">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-7 h-7 rounded-full bg-slate-800 hover:bg-[#1877F2] flex items-center justify-center text-slate-300 hover:text-white transition-all">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-7 h-7 rounded-full bg-slate-800 hover:bg-[#E4405F] flex items-center justify-center text-slate-300 hover:text-white transition-all">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Legal */}
            <div className="flex items-center gap-3 text-[11px] text-slate-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Terms of Use</a>
              <span>|</span>
              <span>© 2025 BizTech Solutions. All Rights Reserved.</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
