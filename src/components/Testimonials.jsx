import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The implementation of TallyPrime and automation solutions has brought complete visibility to our operations and saved us significant time.",
      name: "Rajesh Mehta",
      role: "Director, Mehta Distributors",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "H S ENTERPRISES transformed our multi-branch inventory tracking. Their custom Tally integration with WhatsApp cut our payment cycle by 12 days.",
      name: "Suresh Agarwal",
      role: "Managing Director, Agarwal Retail Mart",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "Exceptional support and deep technical knowledge. Their TallyPrime Server deployment allowed 45+ accountants to work concurrently without lags.",
      name: "Pooja Sharma",
      role: "CFO, Vertex Manufacturing Pvt Ltd",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "Prompt AMC response and top-notch customization. They built an automated e-invoice and e-way bill generation workflow that saves our billing team hours every day.",
      name: "Vikram Singhania",
      role: "Operations Head, Singhania Logistics",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
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

  return (
    <section id="testimonials" className="py-16 bg-[#F8FAFC] border-b border-slate-200/80 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
          What Our Customers Say
        </h2>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center gap-3 sm:gap-6">
            
            {/* Left Prev Arrow */}
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all flex-shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Testimonial Card */}
            <div className="flex-1 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                
                {/* Circular Avatar */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-slate-200 flex-shrink-0 shadow-inner bg-slate-100">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left space-y-3">
                  <p className="text-sm sm:text-base text-slate-700 italic font-medium leading-relaxed">
                    "{current.quote}"
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 border-t border-slate-100">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {current.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {current.role}
                      </p>
                    </div>

                    {/* 5 Stars */}
                    <div className="flex items-center justify-center sm:justify-end gap-1">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Next Arrow */}
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all flex-shrink-0"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-[#0052CC]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
