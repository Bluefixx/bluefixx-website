import React from "react";

export default function CookieHero() {
  return (
    <section className="w-full bg-[#001B40] py-[64px] md:py-[96px] px-6 lg:px-[64px]">
      <div className="max-w-6xl mx-auto flex flex-col items-start gap-4 md:gap-[23px]">
        {/* Last Updated Tag */}
        <div className="bg-[#1563E3] md:bg-[#4F8AF5] rounded-[2px] md:rounded-[12px] p-[6px_16px]">
          <span className="font-montserrat font-medium md:font-bold text-[12px] md:text-[14px] leading-[12px] md:leading-[16.8px] tracking-[0px] text-[#FEFCFF] md:text-[#FAFAFA]">
            Last Updated: October 2026
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-poppins font-semibold md:font-extrabold text-[32px] leading-[38px] md:leading-[38.4px] tracking-[0px] md:tracking-[-0.64px] text-white md:text-[#FAFAFA]">
          Cookie Policy & Settings
        </h1>

        {/* Subtext */}
        <p className="font-montserrat font-normal text-[16px] md:text-[18px] leading-[25.6px] md:leading-[28.8px] tracking-[0px] text-[#7C839B] md:text-white max-w-2xl">
          We use cookies to improve your marketplace browsing experience, authenticate sessions, analyze platform traffic, and tailor personal features.
        </p>
      </div>
    </section>
  );
}
