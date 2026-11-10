import React, { useState } from 'react';
import { 
  Home, 
  ArrowRight, 
  Check, 
  Target, 
  Layers, 
  Zap, 
  BarChart3, 
  Headphones, 
  Calculator, 
  Box, 
  FileCheck2, 
  TrendingUp, 
  Network, 
  Settings, 
  Puzzle, 
  Database, 
  Search, 
  ClipboardCheck, 
  Users2, 
  MessageSquare, 
  ShoppingBag, 
  Landmark, 
  Terminal 
} from 'lucide-react';
import { 
  MultiBranchVisual, 
  ProcessAutomationVisual, 
  SystemIntegrationVisual, 
  DataMigrationVisual 
} from '../components/SolutionCardVisuals';
import { TallyPrimeBadge } from '../components/Logos';

export default function SolutionsPage({ onNavigateHome, onOpenDemoModal, onOpenConsultModal }) {
  const [activeNode, setActiveNode] = useState(null);

  const heroChecklist = [
    'Automate Operations',
    'Ensure Compliance',
    'Improve Visibility',
    'Reduce Manual Work',
    'Drive Business Growth',
  ];

  const topStats = [
    { title: 'Solve Real', subtitle: 'Business Problems', icon: Target, color: 'text-[#0052CC]', bg: 'bg-blue-50' },
    { title: 'Tailor-Made', subtitle: 'Implementation', icon: Layers, color: 'text-[#0077B6]', bg: 'bg-sky-50' },
    { title: 'Faster', subtitle: 'Automation', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: 'Better', subtitle: 'Business Insights', icon: BarChart3, color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { title: 'Ongoing', subtitle: 'Expert Support', icon: Headphones, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  const businessSolutions = [
    {
      id: 'accounting',
      title: 'Accounting & Finance Management',
      desc: 'Simplify accounting, manage receivables & payables and get accurate financial reports.',
      icon: Calculator,
      iconColor: 'bg-[#0052CC] text-white',
      img: '/images/solution-accounting.jpg',
      fallback: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'inventory',
      title: 'Inventory Management',
      desc: 'Track stock, batches, expiry and multiple locations with real-time visibility.',
      icon: Box,
      iconColor: 'bg-emerald-600 text-white',
      img: '/images/blog-inventory-warehouse.jpg',
      fallback: '/images/industry-wholesale.jpg',
    },
    {
      id: 'gst',
      title: 'GST & Compliance',
      desc: 'Stay compliant with GST, e-Invoicing, e-Way Bill and other statutory requirements.',
      icon: FileCheck2,
      iconColor: 'bg-purple-600 text-white',
      img: '/images/blog-tally-guide.jpg',
      fallback: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'reporting',
      title: 'MIS & Business Reporting',
      desc: 'Get real-time reports, dashboards and business insights for better decision-making.',
      icon: BarChart3,
      iconColor: 'bg-emerald-600 text-white',
      img: '/images/product-hero-laptop.jpg',
      fallback: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'multibranch',
      title: 'Multi-Branch / Multi-Location',
      desc: 'Manage multiple branches, warehouses and business locations in a single, integrated system.',
      icon: Network,
      iconColor: 'bg-purple-600 text-white',
      customVisual: <MultiBranchVisual />,
    },
    {
      id: 'automation',
      title: 'Business Process Automation',
      desc: 'Automate repetitive tasks, approvals and business workflows to save time and reduce errors.',
      icon: Settings,
      iconColor: 'bg-[#0052CC] text-white',
      customVisual: <ProcessAutomationVisual />,
    },
    {
      id: 'integration',
      title: 'System Integration',
      desc: 'Connect TallyPrime with WhatsApp, CRM, e-commerce, banking and other business applications.',
      icon: Puzzle,
      iconColor: 'bg-emerald-600 text-white',
      customVisual: <SystemIntegrationVisual />,
    },
    {
      id: 'migration',
      title: 'Data Migration',
      desc: 'Migrate your data from old systems to TallyPrime safely, accurately and with minimal disruption.',
      icon: Database,
      iconColor: 'bg-purple-600 text-white',
      customVisual: <DataMigrationVisual />,
    },
  ];

  const ecosystemNodes = [
    {
      id: 'whatsapp',
      name: 'WhatsApp Automation',
      desc: 'Auto-send invoices, ledgers, and payment reminders directly from Tally.',
      icon: MessageSquare,
      color: 'bg-[#25D366] text-white',
      position: 'top-2 sm:top-4 left-4 sm:left-12',
    },
    {
      id: 'banking',
      name: 'Banking & Payments',
      desc: 'Direct auto-reconciliation, e-payments and instant payment link generation.',
      icon: Landmark,
      color: 'bg-[#003B7A] text-white',
      position: 'top-2 sm:top-4 right-4 sm:right-12',
    },
    {
      id: 'crm',
      name: 'CRM & Customer Management',
      desc: 'Sync sales leads, customer interactions and orders directly with accounts.',
      icon: Users2,
      color: 'bg-blue-600 text-white',
      position: 'top-1/2 -translate-y-1/2 left-0 sm:left-4',
    },
    {
      id: 'analytics',
      name: 'MIS & Analytics',
      desc: 'Executive real-time dashboards on mobile & web with instant alerts.',
      icon: BarChart3,
      color: 'bg-cyan-600 text-white',
      position: 'top-1/2 -translate-y-1/2 right-0 sm:right-4',
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Integration',
      desc: 'Seamless 2-way sync with Shopify, Amazon, Flipkart & WooCommerce.',
      icon: ShoppingBag,
      color: 'bg-sky-500 text-white',
      position: 'bottom-2 sm:bottom-4 left-6 sm:left-14',
    },
    {
      id: 'custom',
      name: 'Custom Applications',
      desc: 'Tailored mobile apps, field sales tracking, and barcode warehouse solutions.',
      icon: Terminal,
      color: 'bg-indigo-600 text-white',
      position: 'bottom-2 sm:bottom-4 right-6 sm:right-14',
    },
  ];

  const solutionProcessSteps = [
    {
      step: 1,
      title: 'Understand Your Needs',
      desc: 'Discuss your business challenges and goals.',
      icon: Search,
      isGreen: false,
    },
    {
      step: 2,
      title: 'Recommend the Right Solution',
      desc: 'Propose the best-fit solution and implementation plan.',
      icon: ClipboardCheck,
      isGreen: false,
    },
    {
      step: 3,
      title: 'Configure & Integrate',
      desc: 'Set up, customize and integrate with your existing systems.',
      icon: Settings,
      isGreen: false,
    },
    {
      step: 4,
      title: 'Train & Go Live',
      desc: 'Train your team and ensure smooth adoption.',
      icon: Users2,
      isGreen: false,
    },
    {
      step: 5,
      title: 'Ongoing Support',
      desc: 'Provide continuous support, maintenance and optimization.',
      icon: Headphones,
      isGreen: true,
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
          <span className="text-white font-medium">Solutions</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#03234D] via-[#053775] to-[#0A4B96] text-white pt-8 pb-14 lg:pt-12 lg:pb-16 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-[11px] font-bold tracking-wider uppercase">
                BUSINESS SOLUTIONS
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Practical Solutions for <br />
                Real <span className="text-[#00D4FF]">Business Challenges</span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Industry-focused, result-driven solutions using TallyPrime and business automation to simplify operations, ensure compliance and drive business growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={onOpenConsultModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm shadow-lg shadow-green-900/30 hover:scale-105 active:scale-95 transition-all group"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenDemoModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/60 hover:border-white bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm transition-all backdrop-blur-sm"
                >
                  Get a Free Consultation
                </button>
              </div>
            </div>

            {/* Right Visual with Businessman Photo + Vertical 5 Checklist Stack */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              
              {/* Photo Container */}
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-800">
                <img
                  src="/images/hero-businessman.jpg"
                  alt="Business Solutions Consultant"
                  className="w-full h-64 sm:h-72 object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Vertical 5-Pill Checklist Stack */}
              <div className="flex flex-col gap-2.5 w-full sm:w-56">
                {heroChecklist.map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-xl py-2.5 px-3.5 shadow-md border border-slate-100 flex items-center gap-2.5 hover:translate-x-1 transition-transform"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
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

      {/* 4. Main "Our Business Solutions" Section (8 Cards in 4x2 Grid) */}
      <section className="py-16 bg-white border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Business Solutions
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-normal">
              A comprehensive range of solutions to help you manage accounting, operations, compliance and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessSolutions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={onOpenConsultModal}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 cursor-pointer"
                >
                  <div>
                    {/* Top Visual with Icon Badge */}
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      {item.customVisual ? (
                        item.customVisual
                      ) : (
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = item.fallback;
                          }}
                        />
                      )}
                      {/* Floating round icon badge */}
                      <div className={`absolute top-3 left-3 w-8 h-8 rounded-full ${item.iconColor} flex items-center justify-center shadow-lg ring-2 ring-white`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-2 group-hover:text-[#0052CC] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Link */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenConsultModal();
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052CC] hover:text-[#003D99] transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. "Build a Connected & Automated Business Ecosystem" */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Build a Connected & Automated <br />
                <span className="text-[#0052CC]">Business Ecosystem</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Go beyond accounting. Integrate TallyPrime with customer engagement, sales, inventory, finance and other business tools to create a seamless and efficient business ecosystem.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <span>Explore Automation Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Ecosystem Hub Visual */}
            <div className="lg:col-span-7 relative">
              <div className="relative w-full max-w-[560px] mx-auto h-[440px] sm:h-[480px] flex items-center justify-center p-4">
                
                {/* Orbit Circles */}
                <div className="absolute inset-8 rounded-full border border-dashed border-slate-300/80 animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-20 rounded-full border border-slate-200/70" />

                {/* Central Laptop / Hub */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-48 sm:w-56 bg-slate-900 rounded-t-xl p-2.5 pb-3 shadow-2xl border-4 border-slate-700/80 flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-slate-600 mb-1.5" />
                    <div className="w-full bg-[#002D62] rounded-md py-4 sm:py-5 px-3 flex flex-col items-center justify-center shadow-inner">
                      <TallyPrimeBadge className="shadow-lg transform scale-90" />
                      <span className="text-[10px] text-sky-200 mt-2 font-medium tracking-wide">
                        Core Business Engine
                      </span>
                    </div>
                  </div>
                  <div className="w-60 sm:w-72 h-3.5 bg-slate-300 rounded-b-lg shadow-md border-t border-slate-400 flex justify-center">
                    <div className="w-16 h-1 bg-slate-400 rounded-full" />
                  </div>
                </div>

                {/* Orbiting Nodes */}
                {ecosystemNodes.map((node) => {
                  const Icon = node.icon;
                  const isHovered = activeNode === node.id;
                  return (
                    <div
                      key={node.id}
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                      className={`absolute ${node.position} z-20 transition-all duration-300 transform ${
                        isHovered ? 'scale-110 z-30' : 'hover:scale-105'
                      }`}
                    >
                      <div className="flex flex-col items-center cursor-pointer group">
                        <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${node.color} flex items-center justify-center shadow-lg ring-4 ring-white transition-all`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-[11px] sm:text-xs font-bold text-slate-800 text-center mt-1.5 max-w-[110px] leading-tight group-hover:text-[#0052CC]">
                          {node.name}
                        </span>
                      </div>

                      {isHovered && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-slate-900 text-white text-[11px] p-2 rounded-lg shadow-xl text-center z-40 pointer-events-none animate-in fade-in duration-150">
                          {node.desc}
                        </div>
                      )}
                    </div>
                  );
                })}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. "Our Solution Process" (5 Stepper Stages) */}
      <section className="py-16 bg-white border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Solution Process
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-normal">
              A simple and structured approach to deliver the right solution for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4">
            {solutionProcessSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="flex flex-col items-center text-center group">
                  <div className="relative mb-4">
                    <span className={`absolute -top-1 -left-1 w-6 h-6 rounded-full ${step.isGreen ? 'bg-[#16A34A]' : 'bg-[#0052CC]'} text-white text-[11px] font-bold flex items-center justify-center shadow z-10`}>
                      {step.step}
                    </span>

                    <div className={`w-16 h-16 rounded-full ${step.isGreen ? 'bg-emerald-50 text-[#16A34A]' : 'bg-blue-50 text-[#0052CC]'} border-2 border-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight mb-1.5 group-hover:text-[#0052CC] transition-colors">
                    {step.title}
                  </h4>

                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. Bottom Banner: "Let's Find the Right Solution for Your Business." */}
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
                  Let's Find the Right Solution for Your Business.
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                  Talk to our experts to discuss your requirements and get a customized solution for your specific requirements.
                </p>
              </div>

              {/* Green CTA Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={onOpenConsultModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all group"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
