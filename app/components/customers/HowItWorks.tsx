'use client'
import React from "react";

const steps = [
  {
    id: 1,
    title: "Post a Job",
    description: "Describe what you need, from plumbing to electrical work.",
  },
  {
    id: 2,
    title: "Get Quotes",
    description: "Review profiles and competitive bids from local pros.",
  },
  {
    id: 3,
    title: "Hire Your Pro",
    description: "Check reviews and previous work before making a choice.",
  },
  {
    id: 4,
    title: "Pay Securely",
    description: "Release payment only when the job is completed to your satisfaction.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-[64px] md:py-[96px] px-4 md:px-6 lg:px-[64px] bg-[#001B40]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="font-poppins font-semibold text-[24px] md:text-[28px] leading-[31.2px] md:leading-[34px] tracking-[0px] text-white md:text-[#FAFAFA] mb-16 md:mb-20 text-center">
          How It Works
        </h2>

        <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-4">
          {/* Desktop Connector Line (1px) */}
          <div className="hidden md:block absolute top-[50px] left-0 w-full h-[1px] bg-[#CFC4C5] z-0" />

          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="relative z-10 flex flex-col items-center text-center flex-1 group">
                {/* Step Number Circle (Reduced Size) */}
                <div 
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-105"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, #00D2FF 0%, #001B40 80%, #001B40 100%)",
                    backgroundImage: "var(--circle-bg)"
                  }}
                >
                  {/* CSS Variables for responsive gradients */}
                  <style jsx>{`
                    div {
                      --circle-bg: radial-gradient(circle at 50% 0%, #00D2FF 0%, #001B40 80%, #001B40 100%);
                    }
                    @media (max-width: 768px) {
                      div {
                        --circle-bg: radial-gradient(circle at center, #001128 0%, #0092D0 100%);
                      }
                    }
                  `}</style>
                  <span className="font-montserrat md:font-poppins font-bold md:font-semibold text-[24px] md:text-[28px] leading-[33.6px] md:leading-[34px] text-white md:text-[#FAFAFA]">
                    {step.id}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-2 md:gap-3 max-w-[240px]">
                  <h3 className="font-poppins font-semibold md:font-normal text-[24px] md:text-[16px] leading-[33.6px] md:leading-[24px] text-white md:text-[#FAFAFA]">
                    {step.title}
                  </h3>
                  <p className="font-montserrat font-normal text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-white md:text-[#A3A3A3]">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Mobile Connector Line (1px, between steps) */}
              {index < steps.length - 1 && (
                <div className="md:hidden w-[1px] h-[80px] bg-[#CFC4C5] -mt-10 -mb-12 relative z-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
