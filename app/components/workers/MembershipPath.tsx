"use client";

import React, { useState, useEffect, useRef } from "react";

const steps = [
  {
    step: "STEP 01",
    title: "Complete Your Profile",
    description: "Showcase your skills, certifications, and previous work. A detailed profile increases your visibility to top-tier customers.",
  },
  {
    step: "STEP 02",
    title: "Pass the Quality Check",
    description: "Our team reviews your credentials to maintain the 'BlueFixx Gold Standard.' Once approved, you're ready to pick up jobs.",
  },
  {
    step: "STEP 03",
    title: "Start Fixing & Earning",
    description: "Bid on projects or get matched directly. Use the BlueFixx dashboard to manage your schedule and invoices.",
  },
];

const TOTAL_ITEMS = 15;
const START_INDEX = 2;
const RESET_INDEX = 7;
const items = Array.from({ length: TOTAL_ITEMS }, () => "Congratulations");

export default function MembershipPath() {
  const cardRef = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  const [itemHeight, setItemHeight] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(START_INDEX);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);

  const [step2InView, setStep2InView] = useState<boolean>(false);
  const [step2Scrolled, setStep2Scrolled] = useState<boolean>(false);
  const [step3InView, setStep3InView] = useState<boolean>(false);
  const [step3Animated, setStep3Animated] = useState<boolean>(false);

  // Measure card height to calibrate exactly 5 items on desktop/tablet, 3 items on mobile
  useEffect(() => {
    const updateHeight = () => {
      if (cardRef.current) {
        const h = cardRef.current.clientHeight;
        const desktop = window.innerWidth >= 768; // tablet & desktop (768px+) use 1024px style
        setIsDesktop(desktop);
        setItemHeight(h / (desktop ? 5 : 3));
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (currentIndex >= RESET_INDEX) {
      setIsTransitioning(false);
      setCurrentIndex(START_INDEX);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  };

  // Trigger animations for Step 2 and Step 3 when they enter the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === step2Ref.current && entry.isIntersecting) {
            setStep2InView(true);
          } else if (entry.target === step3Ref.current && entry.isIntersecting) {
            setStep3InView(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (step2Ref.current) observer.observe(step2Ref.current);
    if (step3Ref.current) observer.observe(step3Ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (step2InView) {
      const timer = setTimeout(() => {
        setStep2Scrolled(true);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [step2InView]);

  useEffect(() => {
    if (step3InView) {
      const timer = setTimeout(() => {
        setStep3Animated(true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [step3InView]);

  return (
    <section className="w-full py-[64px] md:py-[96px] px-6 lg:px-[64px] bg-white">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Section Heading */}
        <h2 className="font-montserrat md:font-poppins font-semibold text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] tracking-[1.4px] md:tracking-normal uppercase md:capitalize text-[#0058BE] md:text-black mb-10 md:mb-16">
          The Path to Membership
        </h2>

        {/* Steps List */}
        <div className="flex flex-col gap-[48px] md:gap-[72px]">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 md:gap-8 lg:gap-10 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 flex flex-col gap-2 w-full">
                <span className="font-montserrat font-medium md:font-bold text-[12px] leading-[12px] md:leading-[16px] tracking-[0.6px] uppercase text-[#45464D] md:text-black">
                  {item.step}
                </span>
                <h3 className="font-poppins font-semibold text-[16px] md:text-[24px] leading-[25.6px] md:leading-[32px] text-black">
                  {item.title}
                </h3>
                <p className="font-montserrat font-normal text-[16px] leading-[25.6px] md:leading-[24px] text-[#45464D] md:text-[#4C4546]">
                  {item.description}
                </p>
              </div>

              {/* Step Graphic */}
              {index === 0 && (
                <div
                  ref={cardRef}
                  className="flex-1 w-full aspect-video md:aspect-[1.8/1] bg-gradient-to-b from-[#001D44] to-[#0045A3] rounded-[20px] md:rounded-[40px] border-0 md:border md:border-[#D1D1D1] shadow-[0px_4px_20px_rgba(0,0,0,0.08)] md:shadow-none relative overflow-hidden flex items-center justify-center select-none px-4 sm:px-6 md:px-8"
                >
                  {/* Verification Completed Tag (Top Left) */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 bg-[#0EA5E9] rounded-[24px] p-[10px] flex items-center justify-center shadow-sm">
                    <span className="font-poppins font-bold text-[10px] md:text-[14px] leading-tight tracking-[0px] text-[#001B40] whitespace-nowrap">
                      Verification Completed
                    </span>
                  </div>

                  {/* You are now a verified artisan Tag (Bottom Right) */}
                  <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 bg-[#D2F7E2] rounded-[24px] p-[10px] flex items-center justify-center shadow-sm">
                    <span className="font-poppins font-bold text-[10px] md:text-[14px] leading-tight tracking-[0px] text-[#166534] whitespace-nowrap">
                      You are now a verified artisan
                    </span>
                  </div>

                  {/* Infinite Parallax Scrolling Congratulations Stack */}
                  <div className="absolute inset-0 flex flex-col items-center overflow-hidden pointer-events-none px-4 sm:px-6 md:px-8">
                    <div
                      onTransitionEnd={handleTransitionEnd}
                      className="flex flex-col items-center w-full"
                      style={{
                        transform: itemHeight
                          ? `translateY(-${(currentIndex - (isDesktop ? 2 : 1)) * itemHeight}px)`
                          : undefined,
                        transition: isTransitioning
                          ? "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)"
                          : "none",
                      }}
                    >
                      {items.map((text, idx) => {
                        const isActive = idx === currentIndex;
                        return (
                          <div
                            key={idx}
                            className="flex items-center justify-center w-full flex-shrink-0 h-[33.333%] md:h-[20%]"
                            style={{
                              height: itemHeight ? `${itemHeight}px` : undefined,
                            }}
                          >
                            <span
                              className={`font-poppins font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[46px] xl:text-[56px] 2xl:text-[60px] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-3.5px] lg:tracking-[-4.5px] xl:tracking-[-6px] leading-none transition-colors duration-500 whitespace-nowrap select-none ${isActive ? "text-[#FFFFFF]" : "text-[#FFFFFF66]"
                                }`}
                            >
                              {text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 02: Pass the Quality Check */}
              {index === 1 && (
                <div
                  ref={step2Ref}
                  className="flex-1 w-full aspect-video md:aspect-[1.8/1] bg-[#E6E8EA] md:bg-[#EEF0F6] rounded-[12px] md:rounded-[40px] relative overflow-hidden flex items-center justify-center select-none shadow-[0px_4px_20px_rgba(0,0,0,0.08)] md:shadow-none"
                >
                  {/* Phone Mockup Window */}
                  <div className="w-[260px] sm:w-[300px] md:w-[340px] h-full overflow-hidden relative flex justify-center items-start">
                    <img
                      src="/images/verification.svg"
                      alt="Verified Artisan - Success Page"
                      className="w-full h-auto object-contain pointer-events-none select-none shrink-0"
                      style={{
                        transform: step2Scrolled ? "translateY(-24.424%)" : "translateY(0%)",
                        transition: "transform 1800ms cubic-bezier(0.25, 1, 0.35, 1)",
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Step 03: Start Fixing & Earning */}
              {index === 2 && (
                <div
                  ref={step3Ref}
                  className="flex-1 w-full aspect-video md:aspect-[1.8/1] bg-[#E6E8EA] md:bg-[#B5D3FF] rounded-[40px] relative overflow-hidden flex items-end justify-center select-none shadow-[0px_4px_20px_rgba(0,0,0,0.08)] md:shadow-none"
                >
                  <div className="w-[88%] sm:w-[80%] md:w-[460px] lg:w-[496px] max-w-full flex items-end justify-center">
                    <img
                      src="/images/earn.svg"
                      alt="Start Fixing & Earning"
                      className="w-full h-auto object-contain object-bottom pointer-events-none select-none shrink-0"
                      style={{
                        transform: step3Animated ? "translateY(0%)" : "translateY(100%)",
                        transition: "transform 1000ms cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
