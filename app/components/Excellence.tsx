import React from "react";
import Image from "next/image";

export default function Excellence() {
  return (
    <section className="w-full bg-[#ECEEF0] md:bg-[#F2F2F2] py-[64px] md:py-[96px] px-6 lg:px-[64px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
            {/*Top Right*/}
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
          <h2 className="font-poppins font-semibold md:font-bold text-[24px] md:text-[36px] leading-[31.2px] md:leading-[40px] tracking-[0px] text-[#191C1E] md:text-black">
            The Marketplace Designed <br /> for Excellence
          </h2>

          <div className="flex flex-col gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-4 md:gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#001B40] rounded-[12px] md:rounded-none flex items-center justify-center">
                <Image src="/icons/verified.svg" alt="Verified" width={24} height={24} className="hidden md:block w-6 h-6 lg:w-6 lg:h-6" />
                <Image src="/icons/verified-mobile.svg" alt="Verified" width={24} height={24} className="block md:hidden w-6 h-6" />
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
              <div className="flex-shrink-0 w-12 h-12 bg-[#1563E3] rounded-[12px] md:rounded-none flex items-center justify-center">
                <Image src="/icons/secure.svg" alt="Secure" width={24} height={24} className="hidden md:block w-6 h-6 lg:w-6 lg:h-6" />
                <Image src="/icons/secure-mobile.svg" alt="Secure" width={24} height={24} className="block md:hidden w-6 h-6" />
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
              <div className="flex-shrink-0 w-12 h-12 bg-[#F9B72C] rounded-[12px] md:rounded-none flex items-center justify-center">
                <Image src="/icons/support.svg" alt="Support" width={24} height={24} className="w-6 h-6 lg:w-6 lg:h-6" />
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
  );
}
