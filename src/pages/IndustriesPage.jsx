import React from 'react';
import { 
  Home, 
  ArrowRight, 
  Check, 
  BarChart3, 
  Layers, 
  Settings, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Headphones, 
  ShoppingCart, 
  Box, 
  Factory, 
  HeartPulse, 
  HardHat, 
  Pill, 
  Car, 
  Briefcase, 
  ShoppingBag, 
  GraduationCap, 
  Hotel, 
  Handshake, 
  Target, 
  Rocket 
} from 'lucide-react';
import { TallyPrimeBadge } from '../components/Logos';

export default function IndustriesPage({ onNavigateHome, onOpenDemoModal, onOpenConsultModal }) {
  const heroPills = [
    { label: 'Streamline Operations', icon: BarChart3, color: 'text-sky-600' },
    { label: 'Industry-Specific Setup', icon: Layers, color: 'text-blue-600' },
    { label: 'Process Automation', icon: Settings, color: 'text-cyan-600' },
    { label: 'Better Business Visibility', icon: TrendingUp, color: 'text-emerald-600' },
  ];

  const topStats = [
    { title: 'TallyPrime', subtitle: 'Experts', icon: ShieldCheck, color: 'text-[#0052CC]', bg: 'bg-blue-50' },
    { title: 'Domain', subtitle: 'Knowledge', icon: Users, color: 'text-[#10B981]', bg: 'bg-emerald-50' },
    { title: 'Tailored', subtitle: 'Implementation', icon: Layers, color: 'text-[#0077B6]', bg: 'bg-sky-50' },
    { title: 'Training &', subtitle: 'Support', icon: Headphones, color: 'text-[#023E8A]', bg: 'bg-indigo-50' },
    { title: 'Business', subtitle: 'Growth Focus', icon: BarChart3, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  ];

  const industriesList = [
    {
      id: 'retail',
      title: 'Retail & Supermarkets',
      img: '/images/industry-retail.jpg',
      icon: ShoppingCart,
      iconColor: 'bg-emerald-600 text-white',
      bullets: [
        'POS & billing integration',
        'Multi-store inventory',
        'Purchase & vendor management',
      ],
    },
    {
      id: 'wholesale',
      title: 'Wholesale & Distribution',
      img: '/images/industry-wholesale.jpg',
      icon: Box,
      iconColor: 'bg-blue-600 text-white',
      bullets: [
        'Stock & batch management',
        'Order & supply chain',
        'Receivables & payables control',
      ],
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      img: '/images/industry-manufacturing.jpg',
      icon: Factory,
      iconColor: 'bg-teal-600 text-white',
      bullets: [
        'BOM & production management',
        'Raw material & stock control',
        'Costing & MIS reports',
      ],
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      img: '/images/industry-healthcare.jpg',
      icon: HeartPulse,
      iconColor: 'bg-emerald-600 text-white',
      bullets: [
        'Patient billing & accounting',
        'Pharmacy & inventory',
        'Multi-department reporting',
      ],
    },
    {
      id: 'construction',
      title: 'Construction & Real Estate',
      img: '/images/industry-construction.jpg',
      icon: HardHat,
      iconColor: 'bg-blue-600 text-white',
      bullets: [
        'Project-wise accounting',
        'Cost & expense tracking',
        'Contractor & vendor management',
      ],
    },
    {
      id: 'pharma',
      title: 'Pharmaceuticals',
      img: '/images/industry-pharma.jpg',
      icon: Pill,
      iconColor: 'bg-emerald-600 text-white',
      bullets: [
        'Batch & expiry management',
        'Stock & compliance tracking',
        'Distributor & sales management',
      ],
    },
    {
      id: 'automobile',
      title: 'Automobile',
      img: '/images/industry-automobile.jpg',
      icon: Car,
      iconColor: 'bg-sky-600 text-white',
      bullets: [
        'Vehicle sales & service accounting',
        'Spare parts & inventory control',
        'Warranty & AMC management',
      ],
    },
    {
      id: 'professional-services',
      title: 'Professional Services',
      img: '/images/industry-services.jpg',
      icon: Briefcase,
      iconColor: 'bg-blue-600 text-white',
      bullets: [
        'Project & service accounting',
        'Time & cost tracking',
        'Client-wise reporting',
      ],
    },
    {
      id: 'fmcg',
      title: 'FMCG & Trading',
      img: '/images/industry-fmcg.jpg',
      icon: ShoppingBag,
      iconColor: 'bg-cyan-600 text-white',
      bullets: [
        'High-volume inventory control',
        'Scheme & discount management',
        'Sales, purchase & distribution',
      ],
    },
    {
      id: 'education',
      title: 'Education',
      img: '/images/industry-education.jpg',
      icon: GraduationCap,
      iconColor: 'bg-indigo-600 text-white',
      bullets: [
        'Fee management & accounting',
        'Expense & budget control',
        'Academic & financial reporting',
      ],
    },
    {
      id: 'hospitality',
      title: 'Hotels & Hospitality',
      img: '/images/industry-hospitality.jpg',
      icon: Hotel,
      iconColor: 'bg-teal-600 text-white',
      bullets: [
        'Room, billing & revenue management',
        'Inventory & F&B accounting',
        'Multi-location reporting',
      ],
    },
    {
      id: 'services-business',
      title: 'Service Businesses',
      img: '/images/industry-services-team.jpg',
      icon: Handshake,
      iconColor: 'bg-blue-600 text-white',
      bullets: [
        'Client & project billing',
        'Expense & profitability tracking',
        'Custom reports & MIS',
      ],
    },
  ];

  const bottomStats = [
    { title: 'Industry Best Practices', icon: Target, color: 'text-sky-600', bg: 'bg-sky-50' },
    { title: 'Customized Setup', icon: Settings, color: 'text-[#0052CC]', bg: 'bg-blue-50' },
    { title: 'Faster Implementation', icon: Rocket, color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { title: 'Ongoing Support', icon: Headphones, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  return (
    <div className="w-full bg-[#F8FAFC]">
      
      {/* 1. Breadcrumb Bar */}
      <div className="bg-[#032149] text-slate-300 py-3 border-b border-white/10 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 flex items-center gap-2 text-xs">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span className="text-slate-500">›</span>
          <span className="text-white font-medium">Industries</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#03234D] via-[#053775] to-[#0A4B96] text-white pt-8 pb-14 lg:pt-12 lg:pb-16 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-[11px] font-bold tracking-wider uppercase">
                INDUSTRY SOLUTIONS
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Industry-Specific <br />
                <span className="text-[#00D4FF]">Business Solutions</span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                TallyPrime and business automation solutions tailored to the unique needs of different industries.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={onOpenConsultModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm shadow-lg shadow-green-900/30 hover:scale-105 active:scale-95 transition-all group"
                >
                  <span>Discuss Your Industry Requirement</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenDemoModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/60 hover:border-white bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm transition-all backdrop-blur-sm"
                >
                  Get a Consultation
                </button>
              </div>
            </div>

            {/* Right Visual with Warehouse Manager Photo + Vertical 4 Pills Stack */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              
              {/* Photo Container */}
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-800">
                <img
                  src="/images/industry-hero-manager.jpg"
                  alt="Operations Manager in Warehouse"
                  className="w-full h-64 sm:h-72 object-cover object-top hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/hero-businessman.jpg";
                  }}
                />
              </div>

              {/* Floating Vertical 4-Pill Stack */}
              <div className="flex flex-col gap-2.5 w-full sm:w-56">
                {heroPills.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="bg-white rounded-xl py-2.5 px-3.5 shadow-md border border-slate-100 flex items-center gap-2.5 hover:translate-x-1 transition-transform"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <span className="text-xs font-bold text-slate-800 leading-snug">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Top Value / Credibility Strip (5 items) */}
      <section className="bg-white border-y border-slate-200 py-5 sm:py-6 shadow-sm w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-2 items-center">
            {topStats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 px-2 ${
                    idx !== 0 ? 'md:border-l md:border-slate-200 md:pl-5' : ''
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] font-medium text-slate-500 leading-tight">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Main "Solutions for Every Industry" Section (12 Cards Grid) */}
      <section className="py-16 bg-white border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Solutions for Every Industry
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-normal">
              Proven technology solutions to manage accounting, inventory, operations and compliance for your business segment.
            </p>
          </div>

          {/* 12 Cards Grid (4 cols x 3 rows on lg) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesList.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={onOpenConsultModal}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 cursor-pointer"
                >
                  <div>
                    {/* Top Photo with overlapping Icon badge */}
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/images/industry-retail.jpg";
                        }}
                      />
                      {/* Floating round icon badge */}
                      <div className={`absolute bottom-3 left-4 w-9 h-9 rounded-full ${item.iconColor} flex items-center justify-center shadow-lg ring-2 ring-white`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 pt-4">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-3 group-hover:text-[#0052CC] transition-colors">
                        {item.title}
                      </h3>

                      {/* 3 Green Bullet points */}
                      <div className="space-y-2">
                        {item.bullets.map((bullet, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                            </div>
                            <span className="text-xs font-semibold text-slate-700 leading-snug">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Link */}
                  <div className="p-5 pt-0 mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenConsultModal();
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052CC] hover:text-[#003D99] transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                    >
                      <span>View Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Banner: "Don't See Your Industry?" */}
      <section className="py-12 bg-white w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="bg-gradient-to-r from-[#03234D] via-[#083872] to-[#042857] text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-blue-900/40">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Laptop Graphic */}
              <div className="flex items-end gap-3 flex-shrink-0">
                <div className="w-40 sm:w-48 bg-slate-900 rounded-t-lg p-1.5 shadow-md border-2 border-slate-700 flex flex-col items-center">
                  <div className="w-full h-20 sm:h-24 bg-[#002D62] rounded flex flex-col items-center justify-center p-2">
                    <TallyPrimeBadge className="scale-75 shadow-none" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/80 blur-xs" />
                  <div className="w-4 h-5 bg-amber-800 rounded-b-md" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5 text-center lg:text-left max-w-xl">
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  Don't See Your Industry?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                  We also provide customized solutions for other business segments. Let's discuss your specific requirements.
                </p>
              </div>

              {/* Green CTA Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={onOpenConsultModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all group"
                >
                  <span>Talk to Our Industry Expert</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom Value Proposition Bar (4 items) */}
      <section className="bg-white border-t border-slate-200 py-6 sm:py-7 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 items-center">
            {bottomStats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center justify-center gap-3 text-center sm:text-left">
                  <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
