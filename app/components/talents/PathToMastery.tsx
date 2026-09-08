"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const masterySteps = [
  {
    step: "STEP 01",
    title: "Application & Matching",
    description: "Submit your credentials and get matched with a master tradesperson in your area who fits your career goals.",
    image: "/images/path1.png",
    // dark at bottom (from-), fading to transparent at top (to-)
    gradientClasses:
      "from-[#000000E5] via-[#00000066] to-transparent lg:from-[#000A19] lg:via-transparent lg:to-[#001B4000]",
  },
  {
    step: "STEP 02",
    title: "Foundational Training",
    description: "First 6 months focused on safety, tool mastery, and core concepts.",
    image: "/images/path2.png",
    gradientClasses:
      "from-[#000000E5] via-[#00000066] to-transparent lg:from-black lg:via-transparent lg:to-transparent",
  },
  {
    step: "STEP 03",
    title: "Field Work",
    description: "Last 6 months focused on hands-on experience.",
    image: "/images/path3.png",
    gradientClasses:
      "from-[#000000E5] via-[#00000066] to-transparent lg:from-[#010B19] lg:via-transparent lg:to-transparent",
  },
  {
    step: "STEP 03",
    title: "Certification",
    description: "Get certified.",
    image: "/images/path4.png",
    gradientClasses:
      "from-[#000000E5] via-[#00000066] to-transparent lg:from-[#010B19] lg:via-transparent lg:to-transparent",
  },
];

export default function PathToMastery() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [bannerInView, setBannerInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === bannerRef.current && entry.isIntersecting) {
            setBannerInView(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-[64px] md:py-[96px] px-4 md:px-6 lg:px-[64px] bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-poppins font-normal md:font-semibold text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] tracking-[0px] text-black mb-2 md:mb-4">
            Path to Mastery
          </h2>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] tracking-[0px] text-[#45464D] md:text-[#4C4546]">
            Your journey from beginner to certified expert.
          </p>
        </div>

        {/* Complex Grid Desktop / Stacked Mobile + Tablet */}
        <div className="w-full flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-8">

          {/* Column 1: Step 1 (Full Height on Desktop) */}
          <div className="h-full">
            <MasteryCard step={masterySteps[0]} isMain={true} />
          </div>

          {/* Column 2: Steps 2, 3, 4 */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Step 2 (Full Width of Column) */}
            <MasteryCard step={masterySteps[1]} />

            {/* Row with Step 3 & 4 (50-50 on Desktop only) */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="flex-1">
                <MasteryCard step={masterySteps[2]} />
              </div>
              <div className="flex-1">
                <MasteryCard step={masterySteps[3]} />
              </div>
            </div>
          </div>
        </div>

        {/* Learn Today, Earn Tomorrow Banner */}
        <div
          ref={bannerRef}
          className="w-full mt-12 md:mt-16 bg-[#0EA5E9] rounded-[16px] md:rounded-[4px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16 pt-8 md:pt-0 min-h-[360px] md:min-h-[300px] lg:min-h-[360px] xl:min-h-[400px]"
        >
          {/* Text Content */}
          <div className="flex flex-col text-center md:text-left z-10 py-2 md:py-6 lg:py-8 shrink-0">
            <h3 className="font-poppins font-bold text-[36px] sm:text-[40px] md:text-[50px] lg:text-[76px] xl:text-[110px] leading-[127%] md:leading-[1] xl:leading-[114px] tracking-[-2px] sm:tracking-[-4px] md:tracking-[-3px] lg:tracking-[-4px] xl:tracking-[-6px] text-white select-none">
              <span className="block">Learn Today<span className="hidden md:inline">,</span></span>
              <span className="block">Earn Tomorrow</span>
            </h3>
          </div>

          {/* Apprentice Screen Image */}
          <div className="w-[260px] sm:w-[280px] md:w-[320px] lg:w-[380px] xl:w-[440px] flex items-end justify-center self-end mt-4 md:mt-0 shrink-0">
            <img
              src="/images/apprentice-screen.png"
              alt="My Apprenticeship Screen"
              className="w-full h-auto object-contain object-bottom pointer-events-none select-none"
              style={{
                transform: bannerInView ? "translateY(0%)" : "translateY(24%)",
                opacity: bannerInView ? 1 : 0.6,
                transition: "transform 1000ms cubic-bezier(0.16, 1, 0.3, 1), opacity 800ms ease-out",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MasteryCard({ step, isMain = false }: { step: typeof masterySteps[0]; isMain?: boolean }) {
  return (
    <div
      className={`relative w-full rounded-[12px] lg:rounded-[4px] overflow-hidden ${
        isMain ? "lg:bg-[#001B40] lg:border lg:border-[#D1D1D1] lg:p-8" : ""
      } group h-full`}
    >
      <div
        className={`relative aspect-square lg:aspect-auto w-full h-full ${
          isMain ? "border lg:border-[#D1D1D1]" : ""
        } overflow-hidden rounded-[12px] lg:rounded-none min-h-[300px]`}
      >
        {/* Background Image */}
        <Image src={step.image} alt={step.title} fill className="object-cover" />

        {/* Top Tint (mobile + tablet only) */}
        <div className="lg:hidden absolute inset-0 bg-[#131B2E]/30 z-[5]" />

        {/* Bottom Gradient — dark at bottom (from-), fading to transparent at top (to-) */}
        <div className={`absolute inset-0 bg-gradient-to-t ${step.gradientClasses} z-10`} />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 lg:p-8">
          <span className="font-montserrat font-normal text-[16px] leading-[24px] tracking-[1.6px] lg:tracking-[0px] text-[#ADC6FF] lg:text-[#E5E5E5] mb-1">
            {step.step}
          </span>
          <h3 className="font-poppins font-semibold text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0px] text-white lg:text-[#FAFAFA] mb-2">
            {step.title}
          </h3>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] tracking-[0px] text-white lg:text-[#E5E5E5] opacity-80 lg:opacity-100">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}