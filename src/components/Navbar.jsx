import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { BizTechLogo, TallyPartnerBadge } from './Logos';

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.49 0-2.96-.4-4.24-1.16l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.18 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31z" />
    </svg>
  );
}

export default function Navbar({
  currentPage = 'home',
  onNavigateHome,
  onNavigateProducts,
  onNavigateServices,
  onNavigateIndustries,
  onNavigateSolutions,
  onNavigateResources,
  onNavigateAbout,
  onOpenDemoModal,
  onOpenConsultModal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);

  const navItems = [
    {
      name: 'Home',
      onClick: onNavigateHome,
      isActive: currentPage === 'home',
      dropdown: null
    },
    {
      name: 'Products',
      onClick: onNavigateProducts,
      isActive: currentPage === 'products',
      dropdown: [
        { name: 'TallyPrime', desc: 'Complete business management with accounting & GST', id: 'tallyprime' },
        { name: 'TallyPrime Server', desc: 'Enterprise multi-user concurrency & speed', id: 'server' },
        { name: 'TallyPrime Edit Log', desc: 'Audit trail & regulatory compliance', id: 'editlog' },
        { name: 'Tally Add-ons', desc: 'Custom modules and industry extensions', id: 'addons' },
        { name: 'Business Software', desc: 'Complementary software for sales & CRM', id: 'addons' },
        { name: 'Custom Applications', desc: 'Tailor-made software built for your business', id: 'addons' }
      ]
    },
    {
      name: 'Services',
      onClick: onNavigateServices,
      isActive: currentPage === 'services',
      dropdown: [
        { name: 'Implementation', desc: 'Installation, configuration and go-live support' },
        { name: 'Customization', desc: 'TDL, customized reports and business workflows' },
        { name: 'Business Automation', desc: 'WhatsApp, CRM and third-party integrations' },
        { name: 'Support & AMC', desc: 'Remote support, maintenance and renewals' },
        { name: 'Training', desc: 'Tally and process training for your team' },
        { name: 'Business Consulting', desc: 'MIS, reporting and technology advisory' }
      ]
    },
    {
      name: 'Industries',
      onClick: onNavigateIndustries,
      isActive: currentPage === 'industries',
      dropdown: [
        { name: 'Retail & Supermarkets', desc: 'POS, barcode & fast billing' },
        { name: 'Wholesale & Distribution', desc: 'Batch, expiry & multi-godown stock' },
        { name: 'Manufacturing', desc: 'BOM, job work & production planning' },
        { name: 'Healthcare', desc: 'Pharmacy batches & hospital billing' },
        { name: 'Construction & Real Estate', desc: 'Project-wise costing & contractor bills' },
        { name: 'Professional Services', desc: 'Consulting, legal & service billing' }
      ]
    },
    {
      name: 'Solutions',
      onClick: onNavigateSolutions,
      isActive: currentPage === 'solutions',
      dropdown: [
        { name: 'Accounting & Finance Management', desc: 'Automate receivables & payables' },
        { name: 'Business Process Automation', desc: 'Workflows, approvals and integrations' },
        { name: 'Multi-Branch Operations', desc: 'Centralized multi-company management' },
        { name: 'WhatsApp & Banking Integration', desc: 'Instant banking and payment links' },
        { name: 'Custom Applications', desc: 'Tailored enterprise software solutions' }
      ]
    },
    {
      name: 'Resources',
      onClick: onNavigateResources,
      isActive: currentPage === 'resources',
      dropdown: [
        { name: 'Knowledge Centre & Blogs', desc: 'Latest guides & Tally tips' },
        { name: 'Video Tutorials', desc: 'TallyPrime video masterclasses' },
        { name: 'Downloadable Resources', desc: 'Free guides, templates & checklists' },
        { name: 'Tools & Calculators', desc: 'GST calculator and ROI planner' },
        { name: 'Customer Success Stories', desc: 'Real MSME case studies' }
      ]
    },
    {
      name: 'About Us',
      onClick: onNavigateAbout,
      isActive: currentPage === 'about',
      dropdown: [
        { name: 'Our Story & Vision', desc: 'Leading Tally 3-Star Certified Partner' },
        { name: 'Leadership & Team', desc: 'Experienced professionals and consultants' },
        { name: 'Why Choose H S Enterprises', desc: '10+ years of enterprise excellence' },
        { name: 'Contact & Support', desc: 'Reach our pan-India support desk' }
      ]
    }
  ];

  const handleNavClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all duration-200 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-2.5 xs:px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 sm:h-[68px]">
          
          {/* Left Brand: H S ENTERPRISES + Authorized Tally Partner */}
          <div className="flex items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 shrink-0 min-w-0">
            <button 
              onClick={onNavigateHome}
              className="flex items-center group text-left focus:outline-none cursor-pointer shrink-0"
              aria-label="H S ENTERPRISES Home"
            >
              <BizTechLogo />
            </button>
            <TallyPartnerBadge />
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-6">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group py-2"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center gap-0.5 xl:gap-1 text-[12.5px] xl:text-[13.5px] 2xl:text-[14px] font-bold transition-colors cursor-pointer ${
                    item.isActive 
                      ? 'text-[#0052CC]' 
                      : 'text-[#0B1528] hover:text-[#0052CC]'
                  }`}
                >
                  <span className="whitespace-nowrap">{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-slate-500 group-hover:text-[#0052CC] transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 px-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => {
                          if (item.name === 'Products') {
                            if (onNavigateProducts) onNavigateProducts(subItem.id);
                          } else {
                            handleNavClick(item);
                          }
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left block px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <p className="text-xs font-bold text-slate-900 hover:text-blue-600">
                          {subItem.name}
                        </p>
                        {subItem.desc && (
                          <p className="text-[11px] text-slate-500 leading-snug mt-0.5 font-normal">
                            {subItem.desc}
                          </p>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right Action: Phone + WhatsApp + Get a Demo Button */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 2xl:gap-3.5 shrink-0">
            {/* Phone link (shown on xl+) */}
            <a
              href="tel:+919876543210"
              className="hidden xl:flex items-center gap-1.5 2xl:gap-2 text-[12px] xl:text-[13px] 2xl:text-[13.5px] font-bold text-[#0B1528] hover:text-[#0052CC] transition-colors"
            >
              <div className="w-6 h-6 2xl:w-7 2xl:h-7 rounded-full bg-slate-100 flex items-center justify-center text-[#0B1528] shrink-0">
                <Phone className="w-3 h-3 2xl:w-3.5 2xl:h-3.5 fill-current" />
              </div>
              <span className="tracking-tight whitespace-nowrap">+91 98765 43210</span>
            </a>

            {/* WhatsApp Icon Button */}
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20TallyPrime%20and%20H%20S%20ENTERPRISES."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="w-7 h-7 xl:w-7.5 xl:h-7.5 2xl:w-8 2xl:h-8 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xs hover:scale-105 transition-all shrink-0"
            >
              <WhatsAppIcon />
            </a>

            {/* Get a Demo CTA Button (Pill Button) */}
            <button
              onClick={onOpenDemoModal}
              className="bg-[#0052CC] hover:bg-[#003D99] text-white text-[11px] xl:text-xs 2xl:text-[13px] font-bold px-3 xl:px-4 2xl:px-5 py-1.5 xl:py-2 rounded-full shadow-xs hover:shadow transition-all duration-150 flex items-center justify-center tracking-wide cursor-pointer whitespace-nowrap"
            >
              Get a Demo
            </button>
          </div>

          {/* Mobile Right Action Bar: Call + WhatsApp + Hamburger */}
          <div className="flex lg:hidden items-center gap-1.5 xs:gap-2 shrink-0">
            {/* Quick Call Icon Button on mobile */}
            <a
              href="tel:+919876543210"
              aria-label="Call H S ENTERPRISES"
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B1528] flex items-center justify-center transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
            </a>

            {/* WhatsApp Icon Button on mobile */}
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20TallyPrime%20and%20H%20S%20ENTERPRISES."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xs transition-transform active:scale-95 shrink-0"
            >
              <WhatsAppIcon />
            </a>

            {/* Hamburger / Close Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center focus:outline-none transition-colors ml-0.5 shrink-0 cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isExpanded = expandedMobileItem === item.name;
              return (
                <div key={item.name} className="py-0.5 border-b border-slate-100/80 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`flex-1 text-left py-2.5 px-3 text-[14px] font-bold rounded-lg transition-colors ${
                        item.isActive 
                          ? 'text-[#0052CC] bg-blue-50/70' 
                          : 'text-[#0B1528] hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                    </button>
                    {item.dropdown && (
                      <button
                        onClick={() => setExpandedMobileItem(isExpanded ? null : item.name)}
                        className="p-2 text-slate-500 hover:text-[#0052CC] rounded-lg hover:bg-slate-50 transition-colors"
                        aria-label={`Toggle ${item.name} submenu`}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#0052CC]' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Submenu accordion for mobile */}
                  {item.dropdown && isExpanded && (
                    <div className="pl-4 pr-2 pb-2 pt-1 space-y-1 bg-slate-50/80 rounded-lg mt-1 border border-slate-100">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => {
                            if (item.name === 'Products') {
                              if (onNavigateProducts) onNavigateProducts(subItem.id);
                            } else {
                              handleNavClick(item);
                            }
                            setMobileMenuOpen(false);
                          }}
                          className="w-full text-left py-2 px-2.5 rounded-md hover:bg-white text-xs font-semibold text-slate-700 hover:text-[#0052CC] transition-colors block"
                        >
                          <p className="font-bold text-slate-900">{subItem.name}</p>
                          {subItem.desc && (
                            <p className="text-[11px] text-slate-500 font-normal leading-snug">{subItem.desc}</p>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action buttons at bottom of mobile menu */}
          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full bg-[#0052CC] hover:bg-[#003D99] text-white text-xs sm:text-sm font-bold py-3 rounded-full shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Get a Free Demo</span>
            </button>

            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call: +91 98765 43210</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
