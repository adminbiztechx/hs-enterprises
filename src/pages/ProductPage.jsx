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

export default function ProductPage({ 
  onNavigateHome, 
  onOpenDemoModal, 
  onOpenConsultModal,
  activeProduct = 'editlog'
}) {
  const [selectedCard, setSelectedCard] = useState(activeProduct || 'editlog');

  useEffect(() => {
    if (activeProduct) {
      setSelectedCard(activeProduct);
    }
  }, [activeProduct]);
  const heroFeatures = [
    { label: 'Accounting & Finance', icon: FileSpreadsheet, color: 'text-sky-600' },
    { label: 'Inventory & Operations', icon: Boxes, color: 'text-blue-600' },
    { label: 'GST & Compliance', icon: FileCheck2, color: 'text-indigo-600' },
    { label: 'Reporting & Insights', icon: BarChart3, color: 'text-cyan-600' },
    { label: 'Business Growth', icon: TrendingUp, color: 'text-emerald-600' },
  ];

  const trustStats = [
    {
      icon: ShieldCheck,
      title: 'Authorised',
      subtitle: 'Tally Partner',
      color: 'text-[#0052CC]',
      bg: 'bg-blue-50',
    },
    {
      icon: Users,
      title: '500+',
      subtitle: 'Happy Customers',
      color: 'text-[#0077B6]',
      bg: 'bg-sky-50',
    },
    {
      icon: Award,
      title: 'Certified',
      subtitle: 'Implementation Team',
      color: 'text-[#023E8A]',
      bg: 'bg-indigo-50',
    },
    {
      icon: Headphones,
      title: 'End-to-End',
      subtitle: 'Sales & Support',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
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
          <span className="text-white font-medium">Products</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#03234D] via-[#053775] to-[#0A4B96] text-white pt-8 pb-14 lg:pt-12 lg:pb-16 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-[11px] font-bold tracking-wider uppercase">
                TALLY PRODUCTS
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Tally Solutions for <br />
                <span className="text-[#00D4FF]">Every Business Need</span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Explore the complete range of Tally products — from TallyPrime to advanced tools, add-ons and business solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={onOpenDemoModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm shadow-lg shadow-green-900/30 hover:scale-105 active:scale-95 transition-all group"
                >
                  <span>Get TallyPrime Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenConsultModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/60 hover:border-white bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm transition-all backdrop-blur-sm"
                >
                  Talk to an Expert
                </button>
              </div>
            </div>

            {/* Right Visual with Laptop + Vertical Feature Pill Stack */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              
              {/* Laptop Graphic / Photo */}
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-800">
                <img
                  src="/images/product-hero-laptop.jpg"
                  alt="TallyPrime Software on Laptop"
                  className="w-full h-64 sm:h-72 object-cover object-top hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/blog-tally-guide.jpg";
                  }}
                />
                <div className="absolute top-3 left-3">
                  <TallyPrimeBadge className="shadow-lg scale-90" />
                </div>
              </div>

              {/* Floating Vertical 5-Card Stack */}
              <div className="flex flex-col gap-2.5 w-full sm:w-56">
                {heroFeatures.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.label}
                      className="bg-white rounded-xl py-2.5 px-3.5 shadow-md border border-slate-100 flex items-center gap-3 hover:translate-x-1 transition-transform"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Icon className={`w-4 h-4 ${feat.color}`} />
                      </div>
                      <span className="text-xs font-bold text-slate-800 leading-snug">
                        {feat.label}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Credibility / Partner Stats Bar (4 columns) */}
      <section className="bg-white border-y border-slate-200 py-6 sm:py-7 shadow-sm w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 items-center">
            {trustStats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3.5 px-2 ${
                    idx !== 0 ? 'md:border-l md:border-slate-200 md:pl-6' : ''
                  }`}
                >
                  <div className={`w-11 h-11 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 leading-tight mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. "Our Tally Product Range" (4 Cards) */}
      <section className="py-16 bg-white border-b border-slate-200/80 w-full">
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
                  onClick={() => setSelectedCard(product.id)}
                  className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer ${
                    isPopped
                      ? '-translate-y-3.5 shadow-2xl border-[#0052CC]/60 ring-2 ring-[#0052CC]/20'
                      : 'border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-3.5 hover:border-[#0052CC]/40'
                  }`}
                >
                  <div>
                    {/* Top Graphic */}
                    <div className={`p-4 ${product.accentBg} border-b border-slate-100 flex items-center justify-center transition-colors ${
                      isPopped ? 'bg-blue-100/40' : ''
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
