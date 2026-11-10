import React from 'react';
import { 
  Home, 
  ArrowRight, 
  Check, 
  Settings, 
  Code, 
  GitFork, 
  Headphones, 
  GraduationCap, 
  BarChart3, 
  Rocket, 
  Database, 
  Sliders, 
  ArrowLeftRight, 
  Users2, 
  ShieldCheck, 
  MessageSquare, 
  TrendingUp, 
  Search, 
  ClipboardCheck, 
  ShoppingCart, 
  Box, 
  Factory, 
  HeartPulse, 
  HardHat, 
  Briefcase, 
  MoreHorizontal
} from 'lucide-react';
import { TallyPrimeBadge } from '../components/Logos';

export default function ServicesPage({ onNavigateHome, onOpenDemoModal, onOpenConsultModal }) {
  const heroChecklist = [
    'Plan & Implement',
    'Customize & Integrate',
    'Train Your Team',
    'Provide Ongoing Support',
  ];

  const mainServices = [
    {
      id: 'implementation',
      title: 'Tally Implementation',
      desc: 'Complete setup, configuration and deployment of TallyPrime for your business.',
      icon: Settings,
      iconColor: 'text-[#0052CC]',
      iconBg: 'bg-blue-50',
      image: '/images/service-implementation.jpg',
      fallback: '/images/product-hero-laptop.jpg',
    },
    {
      id: 'customization',
      title: 'Customization & Development',
      desc: 'TDL, custom reports and business-specific workflows tailored to your needs.',
      icon: Code,
      iconColor: 'text-[#0077B6]',
      iconBg: 'bg-sky-50',
      image: '/images/service-coding-monitor.jpg',
      fallback: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'automation',
      title: 'Business Automation',
      desc: 'Connect TallyPrime with WhatsApp, CRM, e-commerce and other business applications.',
      icon: GitFork,
      iconColor: 'text-[#10B981]',
      iconBg: 'bg-emerald-50',
      image: '/images/service-automation-tablet.jpg',
      fallback: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'support',
      title: 'Support & AMC',
      desc: 'Reliable remote and on-site support, software maintenance and annual renewal services.',
      icon: Headphones,
      iconColor: 'text-[#16A34A]',
      iconBg: 'bg-green-50',
      image: '/images/service-support-headset.jpg',
      fallback: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'training',
      title: 'Training & Education',
      desc: 'Practical training for business owners, finance teams and end users.',
      icon: GraduationCap,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-50',
      image: '/images/service-training-presentation.jpg',
      fallback: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'consulting',
      title: 'Business Consulting',
      desc: 'MIS, reporting, process improvement and technology advisory for business growth.',
      icon: BarChart3,
      iconColor: 'text-[#0052CC]',
      iconBg: 'bg-blue-50',
      image: '/images/service-consulting-clipboard.jpg',
      fallback: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const offeringsAtAGlance = [
    { title: 'New Implementation', icon: Rocket },
    { title: 'Data Migration & Setup', icon: Database },
    { title: 'TDL & Report Customization', icon: Sliders },
    { title: 'System Integration', icon: ArrowLeftRight },
    { title: 'User Training', icon: Users2 },
    { title: 'AMC & Renewals', icon: ShieldCheck },
    { title: 'Remote & On-site Support', icon: MessageSquare },
    { title: 'Process & Business Consulting', icon: TrendingUp },
  ];

  const serviceProcessSteps = [
    {
      step: 1,
      title: 'Understand Your Business',
      desc: 'Discuss your needs, challenges and business goals.',
      icon: Search,
      isGreen: false,
    },
    {
      step: 2,
      title: 'Plan & Recommend',
      desc: 'Suggest the right solution and service roadmap for your business.',
      icon: ClipboardCheck,
      isGreen: false,
    },
    {
      step: 3,
      title: 'Implement & Configure',
      desc: 'Setup, customization and integration as per your requirements.',
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
      desc: 'Continuous support, AMC and solution optimization.',
      icon: Headphones,
      isGreen: true,
    },
  ];

  const industrySolutions = [
    {
      title: 'Retail & Supermarkets',
      img: '/images/industry-retail.jpg',
      icon: ShoppingCart,
    },
    {
      title: 'Wholesale & Distribution',
      img: '/images/industry-wholesale.jpg',
      icon: Box,
    },
    {
      title: 'Manufacturing',
      img: '/images/industry-manufacturing.jpg',
      icon: Factory,
    },
    {
      title: 'Healthcare',
      img: '/images/industry-healthcare.jpg',
      icon: HeartPulse,
    },
    {
      title: 'Construction & Real Estate',
      img: '/images/industry-construction.jpg',
      icon: HardHat,
    },
    {
      title: 'Professional Services',
      img: '/images/industry-services.jpg',
      icon: Briefcase,
    },
    {
      title: 'Education',
      icon: GraduationCap,
      isEducation: true,
    },
    {
      title: 'View All Industries',
      isViewAll: true,
      icon: MoreHorizontal,
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
          <span className="text-white font-medium">Services</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#03234D] via-[#053775] to-[#0A4B96] text-white pt-8 pb-14 lg:pt-12 lg:pb-16 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-[11px] font-bold tracking-wider uppercase">
                OUR SERVICES
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                End-to-End Business <br />
                <span className="text-[#00D4FF]">Technology Services</span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                From TallyPrime implementation to business automation, customization and ongoing support, we provide complete technology services to help your business run smarter and grow faster.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={onOpenConsultModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm shadow-lg shadow-green-900/30 hover:scale-105 active:scale-95 transition-all group"
                >
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenDemoModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/60 hover:border-white bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm transition-all backdrop-blur-sm"
                >
                  Get a Service Quote
                </button>
              </div>
            </div>

            {/* Right Visual with Consultants Photo + Vertical 4 Checklist Stack */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              
              {/* Photo Container */}
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-800">
                <img
                  src="/images/service-hero-consultants.jpg"
                  alt="Business Technology Consultants"
                  className="w-full h-64 sm:h-72 object-cover object-top hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/team-professionals.jpg";
                  }}
                />
              </div>

              {/* Floating Vertical 4-Pill Checklist Stack */}
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

      {/* 3. Main "Our Services" Section (6 Detailed Split Cards) */}
      <section className="py-16 bg-white border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Services
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-normal">
              A comprehensive range of services to get the maximum value from TallyPrime and other business technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mainServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={onOpenConsultModal}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row overflow-hidden group hover:-translate-y-1 cursor-pointer"
                >
                  {/* Left Text */}
                  <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className={`w-10 h-10 rounded-lg ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-5 h-5 ${service.iconColor}`} />
                      </div>

                      <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#0052CC] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenConsultModal();
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052CC] hover:text-[#003D99] transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                      >
                        <span>Know More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Image Visual */}
                  <div className="sm:w-2/5 h-44 sm:h-auto relative overflow-hidden bg-slate-100 flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = service.fallback;
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. "Our Service Offerings at a Glance" (8 Icons Strip) */}
      <section className="py-12 bg-white border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight text-center mb-6">
              Our Service Offerings at a Glance
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-2">
              {offeringsAtAGlance.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-2 group cursor-pointer" onClick={onOpenConsultModal}>
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#0052CC] mb-2.5 group-hover:scale-110 group-hover:bg-[#0052CC] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 leading-tight">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. "Our Service Process" (5 Stepper Cards) */}
      <section className="py-16 bg-white border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Service Process
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-normal">
              A simple, structured and proven approach to deliver the right solution for your business.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 relative">
              {serviceProcessSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="flex flex-col items-center text-center group">
                    {/* Circle Container with Step Number Badge */}
                    <div className="relative mb-4">
                      {/* Step Number Badge */}
                      <span className={`absolute -top-1 -left-1 w-6 h-6 rounded-full ${step.isGreen ? 'bg-[#16A34A]' : 'bg-[#0052CC]'} text-white text-[11px] font-bold flex items-center justify-center shadow z-10`}>
                        {step.step}
                      </span>

                      {/* Icon Circle */}
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

        </div>
      </section>

      {/* 6. "Industry-Focused Service Solutions" (8 Cards) */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Industry-Focused Service Solutions
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-normal">
              We understand that every industry has unique needs. Our services are designed to help businesses across sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5">
            {industrySolutions.map((item, idx) => {
              const Icon = item.icon;
              if (item.isEducation) {
                return (
                  <div
                    key={idx}
                    onClick={onOpenConsultModal}
                    className="h-44 rounded-xl bg-gradient-to-br from-purple-700 to-indigo-800 p-3 text-white flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg cursor-pointer transition-all hover:-translate-y-1"
                  >
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-2">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold">{item.title}</span>
                  </div>
                );
              }
              if (item.isViewAll) {
                return (
                  <div
                    key={idx}
                    onClick={onOpenConsultModal}
                    className="h-44 rounded-xl bg-white border border-slate-200 p-3 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg cursor-pointer transition-all hover:-translate-y-1"
                  >
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center mb-2 text-slate-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">{item.title}</span>
                  </div>
                );
              }
              return (
                <div
                  key={idx}
                  onClick={onOpenConsultModal}
                  className="group relative h-44 rounded-xl overflow-hidden shadow-sm hover:shadow-lg cursor-pointer transition-all hover:-translate-y-1"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-black/20" />
                  <div className="absolute inset-x-0 bottom-0 p-2.5 text-center flex flex-col items-center justify-end">
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-1 text-white">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold text-white leading-tight">
                      {item.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. Bottom Banner: "Let's Build the Right Solution for Your Business" */}
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
                  Let's Build the Right Solution for Your Business
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                  Talk to our experts to discuss your requirements and get a customized service plan.
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
