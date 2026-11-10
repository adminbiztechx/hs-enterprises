import React, { useState } from 'react';
import { 
  Home, 
  ArrowRight, 
  FileText, 
  PlayCircle, 
  BookOpen, 
  Download, 
  GraduationCap, 
  HelpCircle, 
  Calendar, 
  Clock, 
  ChevronRight, 
  FileSpreadsheet, 
  FileCode, 
  FileCheck, 
  Calculator, 
  CircleDollarSign, 
  Boxes, 
  TrendingUp, 
  Mail, 
  CheckCircle2, 
  Play 
} from 'lucide-react';
import { TallyPrimeBadge } from '../components/Logos';

export default function ResourcesPage({ onNavigateHome, onOpenDemoModal, onOpenConsultModal }) {
  const [activeCategory, setActiveCategory] = useState('blogs');
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    { id: 'blogs', name: 'Blogs', subtitle: 'Articles & Insights', icon: FileText },
    { id: 'videos', name: 'Videos', subtitle: 'Tutorials & Demos', icon: PlayCircle },
    { id: 'guides', name: 'Guides', subtitle: 'Step-by-Step Knowledge', icon: BookOpen },
    { id: 'downloads', name: 'Downloads', subtitle: 'Templates & Resources', icon: Download },
    { id: 'casestudies', name: 'Case Studies', subtitle: 'Real Business Stories', icon: GraduationCap },
    { id: 'faqs', name: 'FAQs', subtitle: 'Common Questions', icon: HelpCircle },
  ];

  const videoList = [
    { title: 'TallyPrime Basics for Beginners', duration: '08:12' },
    { title: 'Inventory Management in TallyPrime', duration: '12:30' },
    { title: 'GST Reporting in TallyPrime', duration: '09:18' },
    { title: 'How to Generate Business Reports', duration: '07:45' },
  ];

  const caseStudies = [
    {
      title: 'How a Supermarket Chain Improved Inventory Control with TallyPrime',
      category: 'Retail & Supermarket',
      img: '/images/industry-retail.jpg',
    },
    {
      title: 'Streamlining Production & Costing for a Manufacturing Company',
      category: 'Manufacturing',
      img: '/images/industry-manufacturing.jpg',
    },
  ];

  const downloadableTemplates = [
    {
      title: 'TallyPrime Feature Guide',
      type: 'PDF',
      color: 'bg-red-50 text-red-600 border-red-200',
      badgeColor: 'bg-red-600 text-white',
    },
    {
      title: 'GST Compliance Checklist',
      type: 'XLS',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      badgeColor: 'bg-emerald-600 text-white',
    },
    {
      title: 'Stock Management Best Practices',
      type: 'PDF',
      color: 'bg-red-50 text-red-600 border-red-200',
      badgeColor: 'bg-red-600 text-white',
    },
    {
      title: 'Business Process Evaluation Template',
      type: 'DOC',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      badgeColor: 'bg-blue-600 text-white',
    },
    {
      title: 'TallyPrime Implementation Guide',
      type: 'PDF',
      color: 'bg-red-50 text-red-600 border-red-200',
      badgeColor: 'bg-red-600 text-white',
    },
    {
      title: 'MIS Report Templates',
      type: 'XLS',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      badgeColor: 'bg-emerald-600 text-white',
    },
  ];

  const toolsAndCalculators = [
    {
      title: 'GST Calculator',
      desc: 'Calculate GST quickly and accurately.',
      icon: Calculator,
      color: 'text-[#0052CC]',
      bg: 'bg-blue-50',
    },
    {
      title: 'ROI Calculator',
      desc: 'Estimate the return on your software investment.',
      icon: CircleDollarSign,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Inventory Planner',
      desc: 'Plan optimal stock levels for your business.',
      icon: Boxes,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
    },
    {
      title: 'Business Health Check',
      desc: 'Assess your business processes and efficiency.',
      icon: TrendingUp,
      color: 'text-teal-600',
      bg: 'bg-teal-50',
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmailInput('');
      }, 4000);
    }
  };

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
          <span className="text-white font-medium">Resources</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#03234D] via-[#053775] to-[#0A4B96] text-white pt-8 pb-14 lg:pt-12 lg:pb-16 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-[11px] font-bold tracking-wider uppercase">
                RESOURCE CENTRE
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Learn. Implement. <span className="text-[#00D4FF]">Grow.</span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Expert guides, tutorials, industry insights and practical resources to help you get the most from TallyPrime and business automation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#featured-articles"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm shadow-lg shadow-green-900/30 hover:scale-105 active:scale-95 transition-all group"
                >
                  <span>Explore All Resources</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={onOpenConsultModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/60 hover:border-white bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm transition-all backdrop-blur-sm"
                >
                  Subscribe for Updates
                </button>
              </div>
            </div>

            {/* Right Visual: Laptop showing Learning & Resources + Coffee Mug */}
            <div className="lg:col-span-6 flex items-center justify-center gap-4">
              <div className="relative w-full max-w-[460px] bg-slate-900 rounded-t-xl p-2 sm:p-3 shadow-2xl border-4 border-slate-700/80">
                <div className="w-2 h-2 rounded-full bg-slate-600 mb-1.5 mx-auto" />
                <div className="w-full bg-[#002D62] rounded-lg py-8 px-6 flex flex-col items-center justify-center text-center shadow-inner">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-0.5">
                      <div className="w-2 h-4 bg-[#FFB703] rounded-xs" />
                      <div className="w-2 h-4 bg-white rounded-xs" />
                    </div>
                    <span className="font-extrabold text-base text-white tracking-tight">TallyPrime</span>
                  </div>

                  <h3 className="text-sm font-bold text-sky-200 mb-4">
                    Learning & Resources
                  </h3>

                  {/* 3 Circular Learning Badges */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/30 border border-blue-400/50 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-500/30 border border-blue-400/50 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-500/30 border border-blue-400/50 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                      <BookOpen className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Laptop base */}
                <div className="w-full h-3 bg-slate-300 rounded-b-md mt-2 flex justify-center">
                  <div className="w-16 h-1 bg-slate-400 rounded-full" />
                </div>
              </div>

              {/* White Coffee Mug Graphic */}
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-12 h-14 bg-white rounded-b-xl border-2 border-slate-200 shadow-md relative">
                  <div className="absolute top-2 -right-3 w-4 h-7 border-2 border-slate-300 rounded-r-full" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Category Strip (6 categories) */}
      <section className="bg-white border-y border-slate-200 py-4 shadow-sm w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all ${
                    isActive 
                      ? 'bg-blue-50/80 border-[#0052CC] shadow-xs' 
                      : 'bg-white border-slate-200/80 hover:border-blue-300 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isActive ? 'bg-[#0052CC] text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {cat.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-tight mt-0.5">
                      {cat.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Section: Featured Articles */}
      <section id="featured-articles" className="py-14 bg-white border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Featured Articles
            </h2>
            <button
              onClick={onOpenConsultModal}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052CC] hover:text-[#003D99] transition-colors"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Big Featured Card (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer" onClick={onOpenConsultModal}>
              <div>
                <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-100">
                  <img
                    src="/images/blog-tally-guide.jpg"
                    alt="TallyPrime Complete Guide"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-sky-600 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow">
                    GUIDE
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#0052CC] transition-colors leading-snug">
                    TallyPrime Complete Guide for Business Owners
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-4">
                    A practical guide to understand features, benefits and how to get started with TallyPrime.
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Oct 28, 2026</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>8 min read</span>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#0052CC] group-hover:text-white flex items-center justify-center text-slate-600 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 3 Horizontal Cards (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              
              {/* Card 1: GST Compliance */}
              <div 
                onClick={onOpenConsultModal}
                className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                  <img
                    src="/images/blog-gst-coins.jpg"
                    alt="GST Compliance Checklist"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0052CC] transition-colors leading-snug mb-2">
                    GST Compliance Checklist for MSMEs in 2026
                  </h4>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Oct 24, 2026</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 6 min read</span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0052CC] group-hover:text-white flex items-center justify-center text-slate-500 transition-colors flex-shrink-0">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 2: Inventory Management */}
              <div 
                onClick={onOpenConsultModal}
                className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                  <img
                    src="/images/blog-inventory-warehouse.jpg"
                    alt="Inventory Efficiently"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0052CC] transition-colors leading-snug mb-2">
                    How to Manage Inventory Efficiently with TallyPrime
                  </h4>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Oct 20, 2026</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 7 min read</span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0052CC] group-hover:text-white flex items-center justify-center text-slate-500 transition-colors flex-shrink-0">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 3: Business Automation Ideas */}
              <div 
                onClick={onOpenConsultModal}
                className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                  <img
                    src="/images/blog-automation-growth.jpg"
                    alt="5 Business Automation Ideas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0052CC] transition-colors leading-snug mb-2">
                    5 Business Automation Ideas to Save Time and Increase Profitability
                  </h4>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Oct 15, 2026</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 5 min read</span>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0052CC] group-hover:text-white flex items-center justify-center text-slate-500 transition-colors flex-shrink-0">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. Split Section: Video Tutorials & Case Studies */}
      <section className="py-14 bg-[#F8FAFC] border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Video Tutorials (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Video Tutorials
                </h3>
                <button
                  onClick={onOpenDemoModal}
                  className="text-xs font-bold text-[#0052CC] hover:text-[#003D99]"
                >
                  View All Videos ➔
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                {/* Big Featured Video Card */}
                <div className="sm:col-span-7 bg-[#002D62] text-white rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between shadow-md min-h-[220px]">
                  <div className="relative z-10">
                    <span className="text-[10px] uppercase font-bold text-sky-300">Featured Video</span>
                    <h4 className="text-base font-extrabold mt-1">TallyPrime in 10 Minutes</h4>
                  </div>

                  <div className="flex items-center justify-center my-4 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white ring-4 ring-white/30 hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-300 relative z-10">
                    <span>Quick Overview</span>
                    <span className="bg-black/40 px-2 py-0.5 rounded">10:25</span>
                  </div>

                  {/* Ambient background glow */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500/20 rounded-full blur-2xl" />
                </div>

                {/* Right 4 Playlist Items */}
                <div className="sm:col-span-5 space-y-2">
                  {videoList.map((vid, idx) => (
                    <div
                      key={idx}
                      onClick={onOpenDemoModal}
                      className="bg-white rounded-xl p-3 border border-slate-200/90 shadow-2xs hover:shadow-sm flex items-center justify-between gap-2 group cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <PlayCircle className="w-4 h-4 text-[#0052CC] flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-bold text-slate-800 leading-tight">
                          {vid.title}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono flex-shrink-0">
                        {vid.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Case Studies (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Case Studies
                </h3>
                <button
                  onClick={onOpenConsultModal}
                  className="text-xs font-bold text-[#0052CC] hover:text-[#003D99]"
                >
                  View All Case Studies ➔
                </button>
              </div>

              <div className="space-y-3.5">
                {caseStudies.map((cs, idx) => (
                  <div
                    key={idx}
                    onClick={onOpenConsultModal}
                    className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                      <img
                        src={cs.img}
                        alt={cs.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0052CC] transition-colors leading-snug mb-2">
                        {cs.title}
                      </h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {cs.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Downloadable Resources */}
      <section className="py-14 bg-white border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Downloadable Resources
            </h2>
            <button
              onClick={onOpenConsultModal}
              className="text-xs font-bold text-[#0052CC] hover:text-[#003D99]"
            >
              View All Downloads ➔
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {downloadableTemplates.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${item.badgeColor}`}>
                      {item.type}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 leading-snug mb-4 group-hover:text-[#0052CC] transition-colors">
                    {item.title}
                  </h4>
                </div>

                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-1.5 px-3 rounded-lg border border-slate-200 text-slate-700 hover:border-[#0052CC] hover:text-[#0052CC] text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Tools & Calculators */}
      <section className="py-14 bg-[#F8FAFC] border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Tools & Calculators
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Simple tools to help you make better business decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {toolsAndCalculators.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div
                  key={idx}
                  onClick={onOpenConsultModal}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className={`w-11 h-11 rounded-xl ${tool.bg} flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-5 h-5 ${tool.color}`} />
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-[#0052CC] transition-colors">
                      {tool.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {tool.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 flex justify-end">
                    <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0052CC] group-hover:text-white flex items-center justify-center text-slate-600 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. Newsletter Subscription Banner */}
      <section className="py-8 bg-white border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-sky-200 flex items-center justify-center text-[#0052CC] flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                  Stay Updated with Business & Technology Insights
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Get the latest articles, tips, product updates and industry insights in your inbox.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-2.5">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full sm:w-80 px-4 py-2.5 rounded-full border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0052CC] bg-white"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold shadow transition-all flex items-center justify-center gap-1.5"
              >
                <span>{subscribed ? 'Subscribed!' : 'Subscribe'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* 9. Bottom Banner: "Need Help or Have a Specific Query?" */}
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
                  Need Help or Have a Specific Query?
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                  Our experts are here to guide you with the right resources and solutions.
                </p>
              </div>

              {/* Green CTA Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={onOpenConsultModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all group"
                >
                  <span>Talk to Our Expert</span>
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
