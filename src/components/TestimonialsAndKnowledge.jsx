import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, Clock, Star } from 'lucide-react';

export default function TestimonialsAndKnowledge({ onNavigateResources }) {
  const testimonials = [
    {
      quote: "The implementation of TallyPrime and automation solutions has brought complete visibility to our operations and saved us significant time.",
      name: "Rajesh Mehta",
      role: "Director, Mehta Distributors",
      avatar: "/images/rajesh-mehta.jpg",
      rating: 5,
    },
    {
      quote: "BizTech Solutions transformed our multi-branch inventory tracking. Their custom Tally integration with WhatsApp cut our payment cycle by 12 days.",
      name: "Suresh Agarwal",
      role: "Managing Director, Agarwal Retail Mart",
      avatar: "/images/team-amit.jpg",
      rating: 5,
    },
    {
      quote: "Exceptional support and deep technical knowledge. Their TallyPrime Server deployment allowed 45+ accountants to work concurrently without lags.",
      name: "Pooja Sharma",
      role: "CFO, Vertex Manufacturing Pvt Ltd",
      avatar: "/images/team-ritika.jpg",
      rating: 5,
    },
    {
      quote: "Prompt AMC response and top-notch customization. They built an automated e-invoice and e-way bill generation workflow that saves our billing team hours every day.",
      name: "Vikram Singhania",
      role: "Operations Head, Singhania Logistics",
      avatar: "/images/team-vivek.jpg",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  const articles = [
    {
      title: 'TallyPrime Complete Guide for Business Owners',
      date: 'Jan 15, 2025',
      readTime: '5 min read',
      img: '/images/blog-exact-1.jpg',
      fallback: '/images/blog-tally-guide.jpg',
    },
    {
      title: 'How to Manage Inventory Efficiently with TallyPrime',
      date: 'Jan 10, 2025',
      readTime: '4 min read',
      img: '/images/blog-exact-2.jpg',
      fallback: '/images/blog-inventory-warehouse.jpg',
    },
    {
      title: 'GST Compliance Tips for MSMEs',
      date: 'Jan 5, 2025',
      readTime: '6 min read',
      img: '/images/blog-exact-3.jpg',
      fallback: '/images/blog-gst-coins.jpg',
    },
  ];

  return (
    <section id="reviews-blogs" className="py-10 lg:py-12 bg-white border-b border-slate-200/80 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: What Our Customers Say */}
          <div className="lg:col-span-5 space-y-3.5">
            <h2 className="text-xl sm:text-2xl lg:text-[24px] font-extrabold text-[#0B1528] tracking-tight">
              What Our Customers Say
            </h2>

            {/* Testimonial Box with side arrows */}
            <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5">
              {/* Prev Button */}
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all shrink-0 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
              </button>

              {/* Card */}
              <div className="flex-1 bg-white rounded-2xl p-3 xs:p-4 sm:p-5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center gap-2.5 xs:gap-3 sm:gap-4 min-h-[135px]">
                {/* Avatar */}
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-18 sm:h-18 rounded-full overflow-hidden shrink-0 border border-slate-200/80 bg-slate-100">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-[11.5px] xs:text-xs sm:text-[12.5px] text-slate-700 font-medium leading-relaxed mb-2.5">
                    "{current.quote}"
                  </p>

                  <div className="flex items-center justify-between gap-1.5 flex-wrap">
                    <div>
                      <h4 className="text-[11.5px] xs:text-xs sm:text-[13px] font-bold text-[#0B1528] leading-tight">
                        {current.name}
                      </h4>
                      <p className="text-[9.5px] xs:text-[10.5px] sm:text-[11px] text-slate-500 font-normal mt-0.5">
                        {current.role}
                      </p>
                    </div>

                    {/* 5 Stars */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 xs:w-3.5 xs:h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all shrink-0 cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-1.5 pt-1">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === i ? 'bg-[#0052CC] w-3' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Latest from Our Knowledge Centre */}
          <div className="lg:col-span-7 space-y-3.5 lg:border-l lg:border-slate-200/80 lg:pl-8 xl:pl-10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl lg:text-[24px] font-extrabold text-[#0B1528] tracking-tight">
                Latest from Our Knowledge Centre
              </h2>
              <button
                onClick={onNavigateResources}
                className="inline-flex items-center gap-1 text-xs sm:text-[13px] font-bold text-[#0052CC] hover:text-[#003D99] transition-colors cursor-pointer group"
              >
                <span>View All Blogs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 3 Blog Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
              {articles.map((item, index) => (
                <article
                  key={index}
                  onClick={onNavigateResources}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative h-28 sm:h-30 overflow-hidden bg-slate-100">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = item.fallback;
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-3.5">
                      <h3 className="text-xs sm:text-[12.5px] font-bold text-[#0B1528] leading-snug group-hover:text-[#0052CC] transition-colors line-clamp-2 mb-2.5">
                        {item.title}
                      </h3>

                      {/* Metadata */}
                      <div className="flex items-center gap-3 text-[10.5px] sm:text-[11px] text-slate-500 font-medium">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
