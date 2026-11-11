import React from 'react';

export default function Hero({ onOpenConsultModal, onNavigateProducts }) {
  return (
    <section className="relative w-full bg-[#032552] overflow-hidden">
      {/* Max width container */}
      <div className="w-full max-w-[1720px] mx-auto px-2 sm:px-4 lg:px-8 py-2 sm:py-5 lg:py-6">
        
        {/* HD Hero Banner Container */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-sky-900/50 bg-[#032552]">
          
          {/* 2.5K Ultra HD Banner Image */}
          <picture>
            <source srcSet="/images/hero-banner-hd.webp" type="image/webp" />
            <img
              src="/images/hero-banner-hd.png"
              alt="H S ENTERPRISES - Run Your Business Smarter. Grow Faster. Complete Business Technology Partner"
              className="w-full h-auto block select-none pointer-events-none"
              loading="eager"
            />
          </picture>

          {/* Interactive Click Hotspot: "Get a Free Consultation" */}
          <button
            onClick={onOpenConsultModal}
            aria-label="Get a Free Consultation"
            title="Get a Free Consultation"
            className="absolute left-[3.5%] top-[62%] w-[19%] h-[12.5%] rounded-full cursor-pointer hover:ring-2 hover:ring-emerald-400 hover:bg-emerald-400/15 active:scale-95 transition-all focus:outline-none"
          />

          {/* Interactive Click Hotspot: "Explore Our Solutions" */}
          <button
            onClick={onNavigateProducts}
            aria-label="Explore Our Solutions"
            title="Explore Our Solutions"
            className="absolute left-[23.5%] top-[62%] w-[16%] h-[12.5%] rounded-full cursor-pointer hover:ring-2 hover:ring-sky-300 hover:bg-sky-300/15 active:scale-95 transition-all focus:outline-none"
          />

        </div>

      </div>
    </section>
  );
}
