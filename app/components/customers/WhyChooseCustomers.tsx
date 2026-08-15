import React from "react";
import Image from "next/image";

export default function WhyChooseCustomers() {
  return (
    <section className="w-full py-[64px] md:py-[96px] px-4 md:px-6 lg:px-[64px] bg-[#F2F4F6] md:bg-[#EEEEEE]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 md:gap-6">
        <h2 className="font-poppins font-semibold md:font-normal text-[24px] md:text-[16px] leading-[33.6px] md:leading-[24px] tracking-[0px] text-black md:text-[#1B1B1B] text-center">
          Why Customers Choose BlueFixx
        </h2>

        {/* Desktop Grid Layout */}
        <div className="flex flex-col gap-6">
          {/* Row 1 70/30 split */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
            {/* Card 1: Verified Professionals (70% on desktop) */}
            <div className="lg:col-span-7 bg-white md:bg-[#F9F9F9] rounded-[2px] md:rounded-[4px] border-0 md:border border-[#D1D1D1] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] md:shadow-none overflow-hidden flex flex-col md:flex-row">
              <div className="flex flex-col gap-4 p-6 md:p-8 flex-1 z-10">
                <div className="w-6 h-6 relative">
                  <Image src="/icons/verified-blue.svg" alt="" width={33} height={27} className="object-contain text-[#001B40]" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-poppins font-semibold text-[24px] md:text-[16px] leading-[33.6px] md:leading-[24px] text-black md:text-[#001B40]">
                    Verified Professionals
                  </h3>
                  <p className="font-montserrat font-normal text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-[#45464D] md:text-[#4C4546]">
                    Every worker on our platform undergoes a rigorous background check and skill verification process to ensure quality and safety.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#854D0E] text-[#FFF9E6] px-3 py-1 rounded-[2px] font-montserrat text-[12px] leading-[12px]">
                      Background Checked
                    </span>
                    <span className="bg-[#0F3B21] text-[#D2F7E2] px-3 py-1 rounded-[2px] font-montserrat text-[12px] leading-[12px]">
                      Insured
                    </span>
                  </div>
                </div>
              </div>
              {/* Desktop Image part */}
              <div
                className="hidden md:block w-full md:w-[45%] h-[240px] md:h-auto relative overflow-hidden"
              >
                {/* Desktop Slant Overlay */}
                <div
                  className="absolute inset-0 bg-white md:bg-[#F9F9F9] z-10"
                  style={{ clipPath: 'polygon(0 0, 20% 0, 0 100%, 0 100%)' }}
                />
                <Image
                  src="/images/man.svg"
                  alt="Professional"
                  fill
                  className="object-cover md:scale-110 md:translate-x-4"
                />
              </div>
            </div>

            {/* Mobile Image part for Card 1 (Standalone) */}
            <div className="md:hidden w-full h-[240px] relative rounded-[12px] overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/man.svg"
                alt="Professional"
                fill
                className="object-cover"
              />
            </div>

            {/* Card 2: Transparent Pricing (30% on desktop) */}
            <div className="lg:col-span-3 bg-white md:bg-[#F9F9F9] rounded-[2px] md:rounded-[4px] p-6 md:p-8 flex flex-col gap-4 border-0 md:border border-[#D1D1D1] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] md:shadow-none">
              <div className="w-6 h-6 relative">
                <Image src="/icons/pricing-blue.svg" alt="" width={33} height={27} className="object-contain text-[#001B40]" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-poppins font-semibold text-[24px] md:text-[16px] leading-[33.6px] md:leading-[24px] text-black md:text-[#001B40]">
                  Transparent Pricing
                </h3>
                <p className="font-montserrat font-normal text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-[#45464D] md:text-[#4C4546]">
                  No hidden fees. Get multiple quotes and choose the one that fits your budget.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: 30/70 split */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
            {/* Card 3: Easy Scheduling (30% on desktop) */}
            <div className="lg:col-span-3 bg-white md:bg-[#F9F9F9] rounded-[2px] md:rounded-[4px] p-6 md:p-8 flex flex-col gap-4 border-0 md:border border-[#D1D1D1] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] md:shadow-none">
              <div className="w-6 h-6 relative">
                <Image src="/icons/schedule-blue.svg" alt="" width={33} height={27} className="object-contain text-[#001B40]" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-poppins font-semibold text-[24px] md:text-[16px] leading-[33.6px] md:leading-[24px] text-black md:text-[#001B40]">
                  Easy Scheduling
                </h3>
                <p className="font-montserrat font-normal text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-[#45464D] md:text-[#4C4546]">
                  Book visits that work for you with our integrated calendar system.
                </p>
              </div>
            </div>

            {/* Card 4: Support Local Talent (70% on desktop) */}
            <div className="lg:col-span-7 bg-white md:bg-[#F9F9F9] rounded-[12px] md:rounded-[4px] p-6 md:p-8 flex flex-col gap-4 border-l-[4px] border-[#0058BE] md:border-l md:border-[#D1D1D1] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] md:shadow-none relative overflow-hidden min-h-[280px]">
              <div className="z-10 flex flex-col gap-4 max-w-full md:max-w-[70%]">
                <div className="w-6 h-6 relative">
                  <Image src="/icons/grad-blue.svg" alt="" width={33} height={27} className="object-contain text-[#001B40]" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-poppins font-semibold text-[24px] md:text-[16px] leading-[33.6px] md:leading-[24px] text-black md:text-[#001B40]">
                    Support Local Talent
                  </h3>
                  <p className="font-montserrat font-normal text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-[#45464D] md:text-[#4C4546]">
                    By hiring through BlueFixx, you're providing vital on-site experience for apprentices, helping build the next generation of skilled workers.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-full h-full md:w-[60%] z-0">
                {/*Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:from-[#F9F9F9] md:via-[#F9F9F9]/80 md:to-transparent z-10" />
                <Image src="/images/man1.png" alt="Local Talent" fill className="object-cover opacity-60 md:opacity-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
