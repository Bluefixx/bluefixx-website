import React from "react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section 
      className="relative w-full min-h-[480px] md:min-h-[580px] flex items-center justify-start px-6 lg:px-[64px] py-[64px] md:py-[96px]"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark Blue to Black Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #001B3DB2, #000000E5)"
        }}
      />

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col text-left">
        {/* Heading */}
        <h1 className="font-poppins font-semibold text-[32px] md:text-[48px] leading-[40px] md:leading-[58px] tracking-[0px] text-white max-w-[750px]">
          Bridging the gap in professional home services.
        </h1>

        {/* Subheading */}
        <p className="font-montserrat font-normal text-[16px] leading-[24px] tracking-[0px] text-[#FFFFFFE5] max-w-[620px] mt-6">
          We connect homeowners with trusted local experts to ensure every home gets the professional care it deserves.
        </p>

        {/* Download App Subtext */}
        <span className="font-montserrat font-medium text-[12px] leading-[16px] tracking-[0%] text-[#FAFAFA] uppercase mt-12">
          DOWNLOAD APP
        </span>

        {/* Store Badges */}
        <div className="flex flex-row items-center gap-4 mt-4">
          <a href="#" className="hover:opacity-90 transition-opacity">
            <Image
              src="/icons/playstore.svg"
              alt="Get it on Google Play"
              width={135}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>
          <a href="#" className="hover:opacity-90 transition-opacity">
            <Image
              src="/icons/appstore.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>
        </div>
      </div>
    </section>
  );
}
