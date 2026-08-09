"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "David S.",
    role: "PROFESSIONAL PLUMBER",
    image: "/images/david.jpg",
    text: '"BlueFixx changed how I run my plumbing business. The leads are high quality and the payment system is seamless."',
    stars: 5,
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "HOMEOWNER",
    image: "/images/sarah.jpg",
    text: '"Finding a reliable electrician used to be a nightmare. On BlueFixx, I found someone verified and ready to work in 10 minutes."',
    stars: 5,
  },
  {
    id: 3,
    name: "James L.",
    role: "APPRENTICE ELECTRICIAN",
    image: "/images/james.jpg",
    text: '"As an apprentice, the platform gave me my first real break. Working under verified masters has accelerated my learning 2x."',
    stars: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section className="w-full bg-white md:bg-white py-[64px] md:py-[96px] px-6 lg:px-[64px] relative">
      <div className="md:hidden absolute inset-0 bg-[#F7F9FB] -z-10" />
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="flex flex-col gap-3 md:gap-4 max-w-2xl">
            <h2 className="font-poppins font-semibold md:font-bold text-[24px] md:text-[30px] leading-[28px] md:leading-[36px] tracking-[0px] text-[#191C1E] md:text-black">
              Don't just take our word for it.
            </h2>
            <p className="font-montserrat font-normal text-[16px] leading-[24px] tracking-[0px] text-[#45464D] md:text-[#4C4546]">
              Thousands of successful jobs completed every month across the <br className="hidden lg:block" /> country.
            </p>
          </div>

          {/* Desktop Nav Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-[12px] border border-[#D1D1D1] flex items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <Image src="/icons/prev.svg" alt="" width={7} height={12} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-[12px] border border-[#D1D1D1] flex items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <Image src="/icons/next.svg" alt="" width={7} height={12} />
            </button>
          </div>
        </div>

        {/* Desktop View (Grid) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} isMobile={false} />
          ))}
        </div>

        {/* Mobile View (Carousel) */}
        <div className="md:hidden flex flex-col gap-8">
          <div className="relative overflow-hidden min-h-[300px]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <TestimonialCard testimonial={testimonial} isMobile={true} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Nav Buttons */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-[#D1D1D1] flex items-center justify-center bg-white shadow-sm active:scale-95 transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <Image src="/icons/prev.svg" alt="" width={7} height={12} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-[#D1D1D1] flex items-center justify-center bg-white shadow-sm active:scale-95 transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <Image src="/icons/next.svg" alt="" width={7} height={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, isMobile }: { testimonial: typeof testimonials[0], isMobile: boolean }) {
  return (
    <div className={`flex flex-col h-full bg-white p-8 border ${isMobile ? 'border-[#C6C6CD80] rounded-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.04)]' : 'border-[#D1D1D1]'} flex-grow`}>
      {/* Stars */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Image
            key={i}
            src={isMobile ? "/icons/star-mobile.svg" : "/icons/star.svg"}
            alt=""
            width={16}
            height={16}
            className="w-4 h-4"
          />
        ))}
      </div>

      {/* Text */}
      <p className={`font-montserrat font-normal italic text-[16px] leading-[24px] tracking-[0px] ${isMobile ? 'text-[#191C1E]' : 'text-black'} mb-8 flex-grow`}>
        {testimonial.text}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-[12px] border border-[#D1D1D1] overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h4 className={`font-montserrat leading-[24px] md:leading-[24px] tracking-[0px] md:tracking-normal ${isMobile ? 'font-semibold text-[14px] text-[#191C1E] tracking-[0.28px]' : 'font-bold text-[16px] text-black'}`}>
            {testimonial.name}
          </h4>
          <span className={`font-montserrat uppercase tracking-[0.6px] ${isMobile ? 'font-medium text-[12px] leading-[12px] text-[#76777D]' : 'font-normal text-[12px] leading-[16px] text-[#4C4546]'}`}>
            {testimonial.role}
          </span>
        </div>
      </div>
    </div>
  );
}
