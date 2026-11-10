import React from 'react';
import { 
  Home, 
  ArrowRight, 
  Calendar, 
  Users, 
  Award, 
  Headphones, 
  Target, 
  Rocket, 
  Gem, 
  Check, 
  Calculator, 
  Settings, 
  Code, 
  GitFork, 
  GraduationCap, 
  BarChart3 
} from 'lucide-react';
import { HSEnterprisesLogo, TallyPrimeBadge } from '../components/Logos';

export default function AboutUsPage({ onNavigateHome, onNavigateServices, onOpenDemoModal, onOpenConsultModal }) {
  const stats = [
    { value: '10+', label: 'Years of Experience', icon: Calendar, color: 'text-[#0052CC]', bg: 'bg-blue-50' },
    { value: '500+', label: 'Businesses Served', icon: Users, color: 'text-[#0077B6]', bg: 'bg-sky-50' },
    { value: 'Certified', label: 'Tally Professionals', icon: Award, color: 'text-[#023E8A]', bg: 'bg-indigo-50' },
    { value: 'Dedicated', label: 'Support Team', icon: Headphones, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  const whatWeDoItems = [
    { title: 'TallyPrime Solutions', icon: Calculator, color: 'text-[#0052CC]', bg: 'bg-blue-50' },
    { title: 'Implementation & Setup', icon: Settings, color: 'text-[#0077B6]', bg: 'bg-sky-50' },
    { title: 'Customization & Development', icon: Code, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { title: 'Business Automation', icon: GitFork, color: 'text-[#10B981]', bg: 'bg-emerald-50' },
    { title: 'Support & AMC', icon: Headphones, color: 'text-[#023E8A]', bg: 'bg-blue-50' },
    { title: 'Training & Education', icon: GraduationCap, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Business Consulting', icon: BarChart3, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  ];

  const trustPoints = [
    'Authorised Tally Partner with experienced team',
    'Industry-specific implementation expertise',
    'End-to-end support from setup to scale',
    'Customisation and integration capabilities',
    'Responsive and reliable customer service',
    'Focus on business outcomes and ROI',
  ];

  const milestones = [
    { year: '2014', desc: 'H S Enterprises was established with a focus on Tally solutions.' },
    { year: '2017', desc: 'Expanded our services to implementation and customisation.' },
    { year: '2020', desc: 'Started business automation and integration solutions for MSMEs.' },
    { year: '2023', desc: 'Crossed 500+ satisfied customers and continue to grow.' },
  ];

  const teamMembers = [
    {
      name: 'Sanjay Kumar',
      role: 'Founder & Director',
      img: '/images/team-sanjay.jpg',
    },
    {
      name: 'Ritika Sinha',
      role: 'Operations Head',
      img: '/images/team-ritika.jpg',
    },
    {
      name: 'Amit Verma',
      role: 'Implementation Lead',
      img: '/images/team-amit.jpg',
    },
    {
      name: 'Vivek Prasad',
      role: 'Support & Service Head',
      img: '/images/team-vivek.jpg',
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
          <span className="text-white font-medium">About Us</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#03234D] via-[#053775] to-[#0A4B96] text-white pt-8 pb-14 lg:pt-12 lg:pb-16 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-[11px] font-bold tracking-wider uppercase">
                ABOUT H S ENTERPRISES
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Your Trusted <br />
                <span className="text-[#00D4FF]">Business Technology Partner</span>
              </h1>

              <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Empowering businesses with TallyPrime, business automation and technology solutions to simplify operations, ensure compliance and drive growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={onOpenConsultModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm shadow-lg shadow-green-900/30 hover:scale-105 active:scale-95 transition-all group"
                >
                  <span>Talk to Our Team</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onNavigateServices}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/60 hover:border-white bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm transition-all backdrop-blur-sm"
                >
                  Our Services
                </button>
              </div>
            </div>

            {/* Right Visual: Reception Office Mockup with 3D Backlit Logo */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-[500px] h-64 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-br from-slate-100 to-amber-50/50 flex flex-col justify-between p-6">
                
                {/* Wall sign background with 3D Logo */}
                <div className="flex flex-col items-center justify-center flex-1">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-slate-200/80 flex flex-col items-center">
                    <HSEnterprisesLogo className="h-10" />
                  </div>
                </div>

                {/* Desk front with potted plant */}
                <div className="h-10 bg-amber-900/20 backdrop-blur-sm rounded-lg flex items-center justify-between px-4 border-t border-amber-800/30">
                  <div className="w-4 h-4 rounded-full bg-emerald-600/80" />
                  <span className="text-[10px] font-bold text-slate-700 tracking-wider uppercase">
                    Welcome to H S Enterprises
                  </span>
                  <div className="w-4 h-4 rounded-full bg-emerald-600/80" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Stats / Credibility Bar (4 items) */}
      <section className="bg-white border-y border-slate-200 py-6 sm:py-7 shadow-sm w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 items-center">
            {stats.map((item, idx) => {
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
                    <h4 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                      {item.value}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 leading-tight mt-0.5">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Section: About H S Enterprises (2 Columns) */}
      <section className="py-16 bg-white border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Team Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 aspect-[4/3] bg-slate-100">
                <img
                  src="/images/team-professionals.jpg"
                  alt="H S Enterprises Core Team"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column: Narrative Bio */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                About <span className="text-[#0052CC]">H S Enterprises</span>
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                <strong className="text-slate-900 font-bold">H S Enterprises</strong> is a leading business technology solutions provider and authorised Tally Partner, helping MSMEs and growing businesses streamline their accounting, inventory, compliance and operations through TallyPrime and customised automation solutions.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                With a strong focus on implementation, support and long-term partnership, we combine technology, domain expertise and personalised service to create real business value for our customers.
              </p>

              {/* 3 Pillars Grid: Vision, Mission, Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                
                {/* Vision */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-[#0052CC] mb-2.5">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">Our Vision</h4>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    To be the most trusted business technology partner for MSMEs in the region.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center text-[#0077B6] mb-2.5">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">Our Mission</h4>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    To empower businesses with simple, reliable and effective technology solutions.
                  </p>
                </div>

                {/* Values */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2.5">
                    <Gem className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1.5">Our Values</h4>
                  <div className="space-y-1 text-[10px] text-slate-600 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                      <span>Customer Success First</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                      <span>Integrity & Transparency</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                      <span>Continuous Improvement</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                      <span>Long-term Partnerships</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. Section: What We Do (7 Cards) */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What We Do
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-normal">
              End-to-end solutions to manage, automate and grow your business.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3.5">
            {whatWeDoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={onNavigateServices}
                  className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all text-center flex flex-col items-center justify-center cursor-pointer group hover:-translate-y-1"
                >
                  <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight group-hover:text-[#0052CC] transition-colors">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Section: Why Businesses Trust Us? (Left) & Our Journey (Right) */}
      <section className="py-16 bg-white border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Why Businesses Trust Us? */}
            <div className="lg:col-span-6 space-y-5">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Why Businesses Trust Us?
              </h3>

              <div className="space-y-3 pt-2">
                {trustPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Our Journey (Timeline) */}
            <div className="lg:col-span-6 space-y-5 lg:pl-6">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Our Journey
              </h3>

              <div className="relative space-y-4 pt-2">
                {milestones.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                    <span className="text-xs font-extrabold text-white bg-[#0052CC] px-3 py-1 rounded-md shadow-xs flex-shrink-0">
                      {m.year}
                    </span>
                    <p className="text-xs font-medium text-slate-700 leading-snug">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Section: Our Team */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/80 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Team
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-normal">
              A team of certified professionals committed to your business success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-200 mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/team-sanjay.jpg";
                    }}
                  />
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-0.5 group-hover:text-[#0052CC] transition-colors">
                  {member.name}
                </h4>

                <p className="text-xs text-slate-500 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Bottom Banner: "Let's Build a Smarter Business Together" */}
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
                  Let's Build a Smarter Business Together
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                  Discuss your requirements with our team and find the right solution for your business.
                </p>
              </div>

              {/* Green CTA Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={onOpenConsultModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all group"
                >
                  <span>Get in Touch</span>
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
