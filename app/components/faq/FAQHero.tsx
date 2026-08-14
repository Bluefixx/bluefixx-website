import React from "react";
import Image from "next/image";

export default function FAQHero() {
  return (
    <section className="w-full bg-[#001B40] py-[64px] md:py-[96px] px-6 lg:px-[64px]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1 className="font-poppins font-semibold text-[32px] md:text-[48px] leading-[38px] md:leading-[58px] tracking-[0px] text-white md:text-[#D6E8FF] mb-4 md:mb-6">
          Help Center & FAQ
        </h1>
        
        <p className="font-montserrat font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[28.8px] tracking-[0px] text-[#ECEEF0] md:text-[#FFFFFFCC] mb-8 md:mb-12 max-w-2xl">
          Everything you need to know about the BlueFixx marketplace. Whether you're a worker, a customer, or a talent in training, we've got you covered.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl relative">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
            <Image
              src="/icons/search.svg"
              alt="Search icon"
              width={20}
              height={20}
              className="opacity-50"
            />
          </div>
          <input
            type="text"
            placeholder="Search for questions (e.g. 'Verification', 'Payments')"
            className="w-full bg-white rounded-[8px] py-[18px] pl-[60px] pr-[24px] text-[16px] md:text-[14px] font-montserrat text-[#141B2B] placeholder-[#ECEEF0] md:placeholder-[#C2C7D1] leading-[100%] tracking-[0px] shadow-none md:shadow-[0px_4px_20px_rgba(0,0,0,0.05)] focus:outline-none transition-shadow"
          />
        </div>
      </div>
    </section>
  );
}
