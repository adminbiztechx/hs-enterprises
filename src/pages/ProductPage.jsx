import React, { useState, useEffect } from 'react';
import { 
  Home, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Users, 
  Award, 
  Headphones, 
  Cloud, 
  Landmark, 
  ShoppingCart, 
  MessageSquare, 
  Code2, 
  Store, 
  Layers, 
  Settings, 
  FileCheck2, 
  Shield, 
  MousePointerClick, 
  BarChart3, 
  BadgePercent,
  CheckCircle2,
  TrendingUp,
  FileSpreadsheet,
  Boxes
} from 'lucide-react';
import {
  TallyPrimeIllustration,
  TallyPrimeServerIllustration,
  TallyPrimeEditLogIllustration,
  TallyAddonsIllustration
} from '../components/ProductCardIllustrations';
import { TallyPrimeBadge } from '../components/Logos';
import StatsBar from '../components/StatsBar';

export default function ProductPage({ 
  onNavigateHome, 
  onOpenDemoModal, 
  onOpenConsultModal,
  activeProduct = 'tallyprime',
  shouldScrollToCard = false
}) {
  const [selectedCard, setSelectedCard] = useState(activeProduct || 'tallyprime');

  useEffect(() => {
    if (activeProduct) {
      setSelectedCard(activeProduct);
    }
    // Only smooth scroll down to the card if specifically requested via dropdown item click
    if (shouldScrollToCard && activeProduct) {
      const timer = setTimeout(() => {
        const targetEl = document.getElementById(`product-card-${activeProduct}`) || document.getElementById('product-range');
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [activeProduct, shouldScrollToCard]);
  const heroFeatures = [
    { label: 'Accounting & Finance', icon: FileSpreadsheet, color: 'text-sky-600' },
    { label: 'Inventory & Operations', icon: Boxes, color: 'text-blue-600' },
    { label: 'GST & Compliance', icon: FileCheck2, color: 'text-indigo-600' },
    { label: 'Reporting & Insights', icon: BarChart3, color: 'text-cyan-600' },
    { label: 'Business Growth', icon: TrendingUp, color: 'text-emerald-600' },
  ];

  const productRange = [
    {
      id: 'tallyprime',
      title: 'TallyPrime',
      desc: 'The complete business management software for MSMEs.',
      illustration: <TallyPrimeIllustration />,
      features: [
        'Accounting & financial management',
        'Inventory & stock control',
        'GST, e-Invoicing & e-Way Bill',
        'Powerful reports & business insights',
      ],
      btnText: 'Explore TallyPrime',
      btnBg: 'bg-[#0052CC] hover:bg-[#003D99]',
      btnBorder: 'border-[#0052CC]',
      accentBg: 'bg-blue-50/50',
    },
    {
      id: 'server',
      title: 'TallyPrime Server',
      desc: 'A high-performance, secure and reliable server edition for growing businesses.',
      illustration: <TallyPrimeServerIllustration />,
      features: [
        'Concurrent and high-speed access',
        'Data security & centralized control',
        'Ideal for multi-user environments',
        'Scalable for future growth',
      ],
      btnText: 'Explore Server',
      btnBg: 'bg-[#0052CC] hover:bg-[#003D99]',
      btnBorder: 'border-[#0052CC]',
      accentBg: 'bg-blue-50/50',
    },
    {
      id: 'editlog',
      title: 'TallyPrime Edit Log',
      desc: 'Track, monitor and control changes to your business data.',
      illustration: <TallyPrimeEditLogIllustration />,
      features: [
        'Complete audit trail of data changes',
        'Maintain data integrity & transparency',
        'User-wise and time-wise tracking',
        'Supports compliance & internal control',
      ],
      btnText: 'Explore Edit Log',
      btnBg: 'bg-[#0052CC] hover:bg-[#003D99]',
      btnBorder: 'border-[#0052CC]',
      accentBg: 'bg-blue-50/50',
    },
    {
      id: 'addons',
      title: 'Tally Add-ons',
      desc: 'Increase the power of TallyPrime with industry and business specific add-ons.',
      illustration: <TallyAddonsIllustration />,
      features: [
        'Ready-to-use business extensions',
        'Industry-specific functionalities',
        'Custom reports & workflows',
        'Enhance productivity & control',
      ],
      btnText: 'Explore Add-ons',
      btnBg: 'bg-[#0052CC] hover:bg-[#003D99]',
      btnBorder: 'border-[#0052CC]',
      accentBg: 'bg-blue-50/50',
    },
  ];

  const featureBadges = [
    { label: 'GST Ready', icon: FileCheck2 },
    { label: 'Scalable & Flexible', icon: Layers },
    { label: 'Secure & Reliable', icon: Shield },
    { label: 'Easy to Use', icon: MousePointerClick },
    { label: 'Powerful Reporting', icon: BarChart3 },
    { label: 'Compliant & Up to Date', icon: BadgePercent },
  ];

  const integrations = [
    {
      title: 'TallyPrime on Cloud',
      desc: 'Access TallyPrime securely anytime, anywhere.',
      icon: Cloud,
      color: 'text-sky-500',
      bg: 'bg-sky-50',
    },
    {
      title: 'Banking Integration',
      desc: 'Automate bank transactions and reconciliation.',
      icon: Landmark,
      color: 'text-[#0052CC]',
      bg: 'bg-blue-50',
    },
    {
      title: 'E-commerce Integration',
      desc: 'Connect your online store with TallyPrime.',
      icon: ShoppingCart,
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
    },
    {
      title: 'WhatsApp for Business',
      desc: 'Automate billing, alerts and customer communication.',
      icon: MessageSquare,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Custom Solutions (TDL)',
      desc: 'Tailor TallyPrime to your unique business needs.',
      icon: Code2,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
  ];

  const selectorSolutions = [
    {
      title: 'Small Business',
      desc: 'Manage accounting, inventory and GST with TallyPrime.',
      btnLabel: 'TallyPrime',
      icon: Store,
    },
    {
      title: 'Growing Business',
      desc: 'Need higher performance and multi-user access?',
      btnLabel: 'TallyPrime Server',
      icon: Users,
    },
    {
      title: 'Compliance Focused',
      desc: 'Want to track and audit data changes?',
      btnLabel: 'TallyPrime Edit Log',
      icon: ShieldCheck,
    },
    {
      title: 'Industry-Specific Needs',
      desc: 'Require additional features for your business?',
      btnLabel: 'Tally Add-ons',
      icon: Settings,
    },
  ];

  return (
    <div className="w-full bg-[#F8FAFC]">
      
      {/* 1 & 2. Hero Section with 2.5K Ultra HD Banner & Full Interactive Animations */}
      <section className="relative w-full bg-[#032149] overflow-hidden py-3 sm:py-5 lg:py-6">
        
        {/* Ambient Animated Glow Lights */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl pointer-events-none animate-banner-glow" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-banner-glow" />

        {/* Max width container matching site layout */}
        <div className="w-full max-w-[1720px] mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
          
          {/* Main HD Banner Card with Smooth Shadow and Glowing Border */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-sky-800/60 bg-[#03234D] group transition-all duration-500 hover:shadow-sky-500/10">
            
            {/* 2.5K Ultra HD Banner Image */}
            <picture>
              <source srcSet="/images/product-hero-banner-hd.webp" type="image/webp" />
              <img
                src="/images/product-hero-banner-hd.png"
                alt="Tally Solutions for Every Business Need - Explore the complete range of Tally products"
                className="w-full h-auto block select-none pointer-events-none"
                loading="eager"
              />
            </picture>

            {/* Continuous Diagonal Glass Shimmer Sweep Animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 animate-banner-shimmer" />
            </div>

            {/* Interactive Hotspot: "Home" Breadcrumb */}
            <button
              onClick={onNavigateHome}
              aria-label="Back to Home"
              title="Go to Home"
              className="absolute left-[3.8%] top-[9.5%] w-[6.8%] h-[8%] rounded cursor-pointer hover:bg-white/15 active:scale-95 transition-all focus:outline-none"
            />

            {/* Interactive Hotspot: "Get TallyPrime Demo" (Green Button) */}
            <button
              onClick={onOpenDemoModal}
              aria-label="Get TallyPrime Demo"
              title="Get TallyPrime Demo"
              className="absolute left-[3.8%] top-[66.5%] w-[19.2%] h-[13.5%] rounded-full cursor-pointer hover:ring-4 hover:ring-emerald-400/80 hover:bg-emerald-400/20 active:scale-95 transition-all duration-200 focus:outline-none shadow-lg group/btn"
            >
              {/* Pulsing Beacon Dot on button corner */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-white"></span>
              </span>
            </button>

            {/* Interactive Hotspot: "Talk to an Expert" (Outline Button) */}
            <button
              onClick={onOpenConsultModal}
              aria-label="Talk to an Expert"
              title="Talk to an Expert"
              className="absolute left-[23.8%] top-[66.5%] w-[15.2%] h-[13.5%] rounded-full cursor-pointer hover:ring-4 hover:ring-cyan-300/80 hover:bg-cyan-400/20 active:scale-95 transition-all duration-200 focus:outline-none"
            />

            {/* Interactive Feature Pills Hotspots (Right Stack) */}
            {/* Pill 1: Accounting & Finance -> TallyPrime */}
            <button
              onClick={() => {
                setSelectedCard('tallyprime');
                document.getElementById('product-card-tallyprime')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              aria-label="Accounting & Finance"
              title="View TallyPrime Accounting & Finance"
              className="absolute left-[78.2%] top-[14%] w-[19.6%] h-[12%] rounded-xl cursor-pointer hover:ring-2 hover:ring-sky-400 hover:shadow-lg hover:shadow-sky-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-200 focus:outline-none bg-transparent hover:bg-sky-500/10"
            />

            {/* Pill 2: Inventory & Operations -> TallyPrime */}
            <button
              onClick={() => {
                setSelectedCard('tallyprime');
                document.getElementById('product-card-tallyprime')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              aria-label="Inventory & Operations"
              title="View Inventory & Operations"
              className="absolute left-[78.2%] top-[27.3%] w-[19.6%] h-[12%] rounded-xl cursor-pointer hover:ring-2 hover:ring-blue-400 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-200 focus:outline-none bg-transparent hover:bg-blue-500/10"
            />

            {/* Pill 3: GST & Compliance -> Edit Log */}
            <button
              onClick={() => {
                setSelectedCard('editlog');
                document.getElementById('product-card-editlog')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              aria-label="GST & Compliance"
              title="View TallyPrime Edit Log (GST & Compliance)"
              className="absolute left-[78.2%] top-[40.6%] w-[19.6%] h-[12%] rounded-xl cursor-pointer hover:ring-2 hover:ring-indigo-400 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-200 focus:outline-none bg-transparent hover:bg-indigo-500/10"
            />

            {/* Pill 4: Reporting & Insights -> Server */}
            <button
              onClick={() => {
                setSelectedCard('server');
                document.getElementById('product-card-server')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              aria-label="Reporting & Insights"
              title="View TallyPrime Server (High-Speed Reporting)"
              className="absolute left-[78.2%] top-[54%] w-[19.6%] h-[12%] rounded-xl cursor-pointer hover:ring-2 hover:ring-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-200 focus:outline-none bg-transparent hover:bg-cyan-500/10"
            />

            {/* Pill 5: Business Growth -> Add-ons */}
            <button
              onClick={() => {
                setSelectedCard('addons');
                document.getElementById('product-card-addons')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              aria-label="Business Growth"
              title="View Tally Add-ons & Custom Solutions"
              className="absolute left-[78.2%] top-[67.3%] w-[19.6%] h-[12%] rounded-xl cursor-pointer hover:ring-2 hover:ring-emerald-400 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-200 focus:outline-none bg-transparent hover:bg-emerald-500/10"
            />

          </div>

        </div>
      </section>

      {/* 3. Credibility / Partner Stats Bar (Exact match to reference design) */}
      <StatsBar />

      {/* 4. "Our Tally Product Range" (4 Cards) */}
      <section id="product-range" className="py-16 bg-white border-b border-slate-200/80 w-full scroll-mt-24">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our <span className="text-[#0052CC]">Tally Product Range</span>
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-normal">
              Powerful, reliable and scalable solutions to manage accounting, inventory, compliance and business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-5 pb-7">
            {productRange.map((product) => {
              const isPopped = selectedCard === product.id;
              return (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  onClick={() => setSelectedCard(product.id)}
                  className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer ${
                    isPopped
                      ? '-translate-y-4 shadow-2xl shadow-blue-500/20 border-2 border-[#0052CC] ring-4 ring-[#0052CC]/25 scale-[1.02]'
                      : 'border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-3.5 hover:border-[#0052CC]/40'
                  }`}
                >
                  <div>
                    {/* Top Graphic */}
                    <div className={`p-4 ${product.accentBg} border-b border-slate-100 flex items-center justify-center transition-colors ${
                      isPopped ? 'bg-blue-100/60' : ''
                    }`}>
                      {product.illustration}
                    </div>

                    {/* Body Content */}
                    <div className="p-6">
                      <h3 className={`text-base sm:text-lg font-extrabold mb-2 transition-colors ${
                        isPopped ? 'text-[#0052CC]' : 'text-slate-900 group-hover:text-[#0052CC]'
                      }`}>
                        {product.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-5">
                        {product.desc}
                      </p>

                      {/* Checkmark List */}
                      <div className="space-y-2.5">
                        {product.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                            </div>
                            <span className="text-xs font-semibold text-slate-700 leading-snug">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Buttons */}
                  <div className="p-6 pt-0 flex items-center justify-between gap-3 mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDemoModal();
                      }}
                      className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg ${product.btnBg} text-white font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer`}
                    >
                      <span>{product.btnText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenConsultModal();
                      }}
                      className="text-xs font-bold text-slate-600 hover:text-[#0052CC] transition-colors cursor-pointer"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Horizontal Feature Badges Strip (6 items) */}
      <section className="bg-slate-50 py-5 border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {featureBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={idx} 
                  onClick={onOpenConsultModal}
                  className="flex items-center justify-center gap-2 text-center p-2 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. "Other Products, Solutions & Integrations" (5 cards) */}
      <section className="py-16 bg-white border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Other Products, Solutions & Integrations
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-normal">
              Go beyond accounting with complementary solutions to automate, connect and grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {integrations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  onClick={onOpenConsultModal}
                  className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-[#0052CC] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenConsultModal();
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0052CC] hover:text-[#003D99] transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                    >
                      <span>Know More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. Banner: "Not Sure Which Tally Product is Right for You?" */}
      <section className="py-12 bg-white w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="bg-gradient-to-r from-[#03234D] via-[#083872] to-[#042857] text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-blue-900/40">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Devices Illustration (Desktop + Mobile + Plant) */}
              <div className="flex items-end gap-3 flex-shrink-0">
                {/* Desktop Screen */}
                <div className="w-36 sm:w-44 bg-slate-900 rounded-t-lg p-1.5 shadow-md border-2 border-slate-700 flex flex-col items-center">
                  <div className="w-full h-20 sm:h-24 bg-[#002D62] rounded flex flex-col items-center justify-center p-2">
                    <TallyPrimeBadge className="scale-75 shadow-none" />
                  </div>
                </div>
                {/* Mobile Phone */}
                <div className="w-14 sm:w-16 h-24 sm:h-28 bg-slate-900 rounded-xl p-1 shadow-md border-2 border-slate-700 flex flex-col items-center justify-between">
                  <div className="w-3 h-0.5 bg-slate-600 rounded-full mt-0.5" />
                  <div className="w-full flex-1 bg-white rounded-lg flex flex-col items-center justify-center p-1">
                    <div className="w-2 h-2 rounded bg-amber-400 mb-0.5" />
                    <span className="text-[7px] font-bold text-slate-800">Tally</span>
                  </div>
                  <div className="w-2 h-2 rounded-full border border-slate-600 mb-0.5" />
                </div>
                {/* Green potted plant */}
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/80 blur-xs" />
                  <div className="w-4 h-5 bg-amber-800 rounded-b-md" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5 text-center lg:text-left max-w-xl">
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  Not Sure Which Tally Product is Right for You?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                  Get expert advice based on your business size, industry and requirements.
                </p>
              </div>

              {/* Green CTA Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={onOpenConsultModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all group"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. "Choose the Right Tally Solution for Your Business" (4 cards) */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-center mb-10">
            Choose the Right Tally Solution for Your Business
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectorSolutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center justify-between group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0052CC] mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    onClick={onOpenDemoModal}
                    className="w-full py-2.5 px-4 rounded-full border border-[#0052CC] text-[#0052CC] hover:bg-[#0052CC] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs"
                  >
                    <span>{item.btnLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
