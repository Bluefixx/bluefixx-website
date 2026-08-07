import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex-grow flex flex-col bg-[#000D1D]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[650px] md:min-h-[750px] flex-grow flex items-center justify-center overflow-hidden">
        {/* Background Image (Centers and scales cover, clipping sides on mobile) */}
        <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat" />

        {/* Gradient Overlay using #000D1D as requested */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000D1D]/40 via-[#000D1D]/75 to-[#000D1D]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center justify-center">
          {/* Main Heading */}
          <h1 className="font-poppins font-normal md:font-bold text-[36px] md:text-[48px] leading-[54px] md:leading-[60px] tracking-[0px] text-white max-w-3xl">
            Bridging the gap in <br className="hidden md:block" /> professional home <br className="hidden md:block" /> services.
          </h1>

          {/* Subtext */}
          <p className="font-sans font-normal text-[16px] md:text-[20px] leading-[25.6px] md:leading-[28px] tracking-[0px] text-[#D4D4D4] max-w-2xl mt-6 md:mt-8">
            BlueFixx connects verified professionals, eager <br className="hidden md:block" /> customers, and the next generation of apprentices <br className="hidden md:block" /> in one unified marketplace.
          </p>

          {/* Download App Sub-label (hidden on mobile) */}
          <span className="hidden md:block font-sans font-medium text-[12px] leading-[16px] tracking-[0em] text-[#FAFAFA] mt-16">
            DOWNLOAD APP
          </span>

          {/* Store Badges (stacked on mobile, inline on desktop) */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-8 md:mt-3">
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
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full bg-[#F2F4F6] md:bg-[#F2F2F2] border-y-0 md:border-y border-[#D1D1D1] py-[48px] overflow-hidden flex flex-col items-center gap-8">
        {/* Title */}
        <h2 className="font-sans font-medium text-[12px] leading-[12px] md:leading-[16px] tracking-[1.2px] text-[#76777D] md:text-[#000000] uppercase text-center">
          Trusted by leading businesses in Africa
        </h2>

        {/* Sliding Track container */}
        <div className="relative w-full overflow-hidden flex">
          {/* Inner track */}
          <div className="flex animate-scroll whitespace-nowrap">
            {/* Group A (First Half) */}
            <div className="flex gap-16 md:gap-24 pr-16 md:pr-24 items-center">
              {[...Array(6)].flatMap((_, i) => [
                <div key={`p1-${i}`} className="flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/icons/partner1.png"
                    alt="Nexora"
                    width={140}
                    height={40}
                    className="h-7 md:h-9 w-auto object-contain"
                  />
                </div>,
                <div key={`p2-${i}`} className="flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/icons/partner2.png"
                    alt="Africell"
                    width={140}
                    height={40}
                    className="h-7 md:h-9 w-auto object-contain"
                  />
                </div>,
                <div key={`p3-${i}`} className="flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/icons/partner3.png"
                    alt="Mavora"
                    width={140}
                    height={40}
                    className="h-7 md:h-9 w-auto object-contain"
                  />
                </div>
              ])}
            </div>
            {/* Group B (Second Half - exact copy of Group A) */}
            <div className="flex gap-16 md:gap-24 pr-16 md:pr-24 items-center">
              {[...Array(6)].flatMap((_, i) => [
                <div key={`p1-dup-${i}`} className="flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/icons/partner1.png"
                    alt="Nexora"
                    width={140}
                    height={40}
                    className="h-7 md:h-9 w-auto object-contain"
                  />
                </div>,
                <div key={`p2-dup-${i}`} className="flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/icons/partner2.png"
                    alt="Africell"
                    width={140}
                    height={40}
                    className="h-7 md:h-9 w-auto object-contain"
                  />
                </div>,
                <div key={`p3-dup-${i}`} className="flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/icons/partner3.png"
                    alt="Mavora"
                    width={140}
                    height={40}
                    className="h-7 md:h-9 w-auto object-contain"
                  />
                </div>
              ])}
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="w-full bg-[#FFFFFF] py-[80px] px-6 lg:px-[64px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
          {/* Card 1: For Workers */}
          <div className="flex flex-col bg-[#FAFAFA] overflow-hidden transition-all h-full border-b-[12px] border-[#3A75C0] max-lg:border-b-0 rounded-[12px] lg:rounded-none card-shadow-mobile lg:shadow-none">
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] z-0">
              <Image
                src="/images/workers.png"
                alt="For Workers"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay Inset padding wrapper */}
            <div className="px-4 pb-4 lg:px-6 lg:pb-12 flex-grow flex flex-col gap-3">
              <div className="relative z-10 bg-white pt-5 pb-8 px-8 flex flex-col items-center text-center details-shadow -mt-8 lg:-mt-12 flex-grow rounded-[4px] lg:rounded-none">
                <div className="flex flex-col items-center">
                  <h3 className="font-poppins font-semibold lg:font-bold text-[24px] leading-[33.6px] lg:leading-[32px] text-[#191C1E] lg:text-[#121212]">
                    For Workers
                  </h3>
                  <p className="font-sans font-normal text-[16px] leading-[24px] tracking-[0px] text-[#45464D] lg:text-[#404040] mt-3">
                    <span className="hidden lg:inline">Find consistent work, manage your schedule</span>
                    <span className="inline lg:hidden">Find consistent work, manage your schedule, and grow your local business.</span>
                  </p>
                </div>
              </div>
              <Link href="/workers" className="w-full cursor-pointer">
                <button className="w-full py-3 px-4 rounded-[2px] font-sans font-medium text-[14px] leading-5 text-center transition-all bg-[#001B40] text-white hover:bg-[#001B40]/90 active:scale-[0.98] cursor-pointer">
                  Join as a Pro
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2: For Customers */}
          <div className="flex flex-col bg-[#FAFAFA] overflow-hidden transition-all h-full border-b-[12px] border-[#3A75C0] rounded-[12px] lg:rounded-none card-shadow-mobile lg:shadow-none">
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] z-0">
              <Image
                src="/images/customers.png"
                alt="For Customers"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay Inset padding wrapper */}
            <div className="px-4 pb-4 lg:px-6 lg:pb-12 flex-grow flex flex-col gap-3">
              <div className="relative z-10 bg-white pt-5 pb-8 px-8 flex flex-col items-center text-center details-shadow -mt-8 lg:-mt-12 flex-grow rounded-[4px] lg:rounded-none">
                <div className="flex flex-col items-center">
                  <h3 className="font-poppins font-semibold lg:font-bold text-[24px] leading-[33.6px] lg:leading-[32px] text-[#191C1E] lg:text-[#121212]">
                    For Customers
                  </h3>
                  <p className="font-sans font-normal text-[16px] leading-[24px] tracking-[0px] text-[#45464D] lg:text-[#404040] mt-3">
                    Access thousands of verified pros for any home project, large or small.
                  </p>
                </div>
              </div>
              <Link href="/customers" className="w-full cursor-pointer">
                <button className="w-full py-3 px-4 rounded-[2px] font-sans font-medium text-[14px] leading-5 text-center transition-all bg-[#1563E3] text-white hover:bg-[#1563E3]/90 active:scale-[0.98] cursor-pointer">
                  Find a specialist
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3: For Talents */}
          <div className="flex flex-col bg-[#FAFAFA] overflow-hidden transition-all h-full border-b-[12px] border-[#3A75C0] max-lg:border-b-0 rounded-[12px] lg:rounded-none card-shadow-mobile lg:shadow-none">
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] z-0">
              <Image
                src="/images/talents.png"
                alt="For Talents"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay Inset padding wrapper */}
            <div className="px-4 pb-4 lg:px-6 lg:pb-12 flex-grow flex flex-col gap-3">
              <div className="relative z-10 bg-white pt-5 pb-8 px-8 flex flex-col items-center text-center details-shadow -mt-8 lg:-mt-12 flex-grow rounded-[4px] lg:rounded-none">
                <div className="flex flex-col items-center">
                  <h3 className="font-poppins font-semibold lg:font-bold text-[24px] leading-[33.6px] lg:leading-[32px] text-[#191C1E] lg:text-[#121212]">
                    <span className="hidden lg:inline">For Talents</span>
                    <span className="inline lg:hidden">Talents</span>
                  </h3>
                  <p className="font-sans font-normal text-[16px] leading-[24px] tracking-[0px] text-[#45464D] lg:text-[#404040] mt-3">
                    <span className="hidden lg:inline">Find consistent work, manage your schedule</span>
                    <span className="inline lg:hidden">Start your career with apprenticeships under certified masters in your area.</span>
                  </p>
                </div>
              </div>
              <Link href="/talents" className="w-full cursor-pointer">
                <button className="w-full py-3 px-4 rounded-[2px] font-sans font-medium text-[14px] leading-5 text-center transition-all bg-[#F9B72C] text-[#001B40] hover:bg-[#F9B72C]/90 active:scale-[0.98] cursor-pointer">
                  Start Learning
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
