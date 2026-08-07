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
                  <h3 className="font-poppins font-semibold lg:font-bold text-[24px] lg:text-[20px] xl:text-[24px] leading-[33.6px] lg:leading-[32px] text-[#191C1E] lg:text-[#121212]">
                    For Workers
                  </h3>
                  <p className="font-sans font-normal text-[16px] leading-[24px] tracking-[0px] text-[#45464D] lg:text-[#404040] mt-3 md:max-w-[280px] lg:max-w-none">
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
                  <h3 className="font-poppins font-semibold lg:font-bold text-[24px] lg:text-[20px] xl:text-[24px] leading-[33.6px] lg:leading-[32px] text-[#191C1E] lg:text-[#121212]">
                    For Customers
                  </h3>
                  <p className="font-sans font-normal text-[16px] leading-[24px] tracking-[0px] text-[#45464D] lg:text-[#404040] mt-3 md:max-w-[280px] lg:max-w-none">
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
                  <h3 className="font-poppins font-semibold lg:font-bold text-[24px] lg:text-[20px] xl:text-[24px] leading-[33.6px] lg:leading-[32px] text-[#191C1E] lg:text-[#121212]">
                    <span className="hidden lg:inline">For Talents</span>
                    <span className="inline lg:hidden">Talents</span>
                  </h3>
                  <p className="font-sans font-normal text-[16px] leading-[24px] tracking-[0px] text-[#45464D] lg:text-[#404040] mt-3 md:max-w-[280px] lg:max-w-none">
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

      {/* Excellence Section */}
      <section className="w-full bg-[#ECEEF0] md:bg-[#F2F2F2] py-[64px] md:py-[96px] px-6 lg:px-[64px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Staggered Image Placeholders */}
          <div className="relative flex flex-col items-center lg:items-start">
            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-[500px] lg:max-w-none">
              {/* Top Left */}
              <div className="bg-white/50 rounded-[20px] aspect-square flex items-center justify-center border border-black/5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-black rotate-45"></div>
                    <div className="w-full h-[1px] bg-black -rotate-45"></div>
                  </div>
                </div>
              </div>
              {/* Top Right */}
              <div className="bg-white rounded-[20px] aspect-square flex items-center justify-center border border-black/5 mt-8 lg:mt-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-black rotate-45"></div>
                    <div className="w-full h-[1px] bg-black -rotate-45"></div>
                  </div>
                </div>
              </div>
              {/* Bottom Left */}
              <div className="bg-white rounded-[20px] aspect-square flex items-center justify-center border border-black/5 -mt-8 lg:-mt-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-black rotate-45"></div>
                    <div className="w-full h-[1px] bg-black -rotate-45"></div>
                  </div>
                </div>
              </div>
              {/* Bottom Right */}
              <div className="bg-white/50 rounded-[20px] aspect-square flex items-center justify-center border border-black/5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-black rotate-45"></div>
                    <div className="w-full h-[1px] bg-black -rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8 md:gap-10">
            <h2 className="font-poppins font-semibold md:font-bold text-[24px] md:text-[36px] leading-[31.2px] md:leading-[40px] tracking-[0px] text-[#191C1E] md:text-black max-w-[320px] md:max-w-[450px]">
              The Marketplace Designed for Excellence
            </h2>

            <div className="flex flex-col gap-6 md:gap-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#001B40] rounded-[12px] md:rounded-[4px] flex items-center justify-center">
                  <Image src="/icons/verified.svg" alt="Verified" width={24} height={24} className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <h3 className="font-sans md:font-poppins font-semibold text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] tracking-[0.28px] md:tracking-normal text-[#191C1E] md:text-black">
                    Vetted Professionals
                  </h3>
                  <p className="font-sans font-normal text-[16px] md:text-[14px] leading-[24px] md:leading-[20px] text-[#45464D] md:text-[#4C4546]">
                    Every worker undergoes a rigorous background check and skills verification process before joining our network.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1563E3] rounded-[12px] md:rounded-[4px] flex items-center justify-center">
                  <Image src="/icons/secure.svg" alt="Secure" width={24} height={24} className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <h3 className="font-sans md:font-poppins font-semibold text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] tracking-[0.28px] md:tracking-normal text-[#191C1E] md:text-black">
                    Secure Transactions
                  </h3>
                  <p className="font-sans font-normal text-[16px] md:text-[14px] leading-[24px] md:leading-[20px] text-[#45464D] md:text-[#4C4546]">
                    Escrow-style payments ensure funds are only released when you are happy with the work. No hidden fees.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F9B72C] rounded-[12px] md:rounded-[4px] flex items-center justify-center">
                  <Image src="/icons/support.svg" alt="Support" width={24} height={24} className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <h3 className="font-sans md:font-poppins font-semibold text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] tracking-[0.28px] md:tracking-normal text-[#191C1E] md:text-black">
                    24/7 Support
                  </h3>
                  <p className="font-sans font-normal text-[16px] md:text-[14px] leading-[24px] md:leading-[20px] text-[#45464D] md:text-[#4C4546]">
                    Our dedicated team is here to help mediate and assist with any project challenges, ensuring peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
