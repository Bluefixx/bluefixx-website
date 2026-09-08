import React from "react";
import Image from "next/image";

export default function Excellence() {
  return (
    <section className="w-full bg-[#ECEEF0] md:bg-[#F2F2F2] py-[64px] md:py-[96px] px-6 lg:px-[64px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Images Layout */}
        <div className="relative flex flex-col items-center lg:items-start w-full max-w-[500px] lg:max-w-none">
          <div className="flex flex-col gap-4 md:gap-6 w-full">
            {/* Top Row: 2 square images side-by-side */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
              {/* Top Left: excel1.svg with #001B4000 gradient at the bottom */}
              <div className="relative w-full aspect-[260/256] rounded-[16px] md:rounded-[40px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                <Image
                  src="/images/excel1.svg"
                  alt="Verified professional"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, #001B4000 0%, #001B40 100%)",
                  }}
                />
              </div>

              {/* Top Right: excel2.svg with #D99A1600 gradient at the bottom */}
              <div className="relative w-full aspect-[260/256] rounded-[16px] md:rounded-[40px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                <Image
                  src="/images/excel2.svg"
                  alt="24/7 Customer Support"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, #D99A1600 0%, #D99A16 100%)",
                  }}
                />
              </div>
            </div>

            {/* Bottom Row: excel3.svg full width banner (no gradient) */}
            <div className="relative w-full aspect-[530/256] rounded-[16px] md:rounded-[40px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <Image
                src="/images/excel3.svg"
                alt="Secure transactions"
                fill
                className="object-cover"
              />
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
              <div className="flex-shrink-0 w-12 h-12 bg-[#001B40] rounded-[8px] md:rounded-[12px] flex items-center justify-center">
                <Image src="/icons/verified.svg" alt="Verified" width={24} height={24} className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1 md:gap-2">
                <h3 className="font-poppins font-semibold text-[16px] leading-[24px] text-[#191C1E] md:text-black">
                  Vetted Professionals
                </h3>
                <p className="font-montserrat font-normal text-[14px] leading-[20px] text-[#45464D] md:text-[#4C4546]">
                  Every worker undergoes a rigorous background check and skills verification process.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 md:gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1563E3] rounded-[8px] md:rounded-[12px] flex items-center justify-center">
                <Image src="/icons/secure.svg" alt="Secure" width={24} height={24} className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1 md:gap-2">
                <h3 className="font-poppins font-semibold text-[16px] leading-[24px] text-[#191C1E] md:text-black">
                  Secure Transactions
                </h3>
                <p className="font-montserrat font-normal text-[14px] leading-[20px] text-[#45464D] md:text-[#4C4546]">
                  Escrow-style payments ensure funds are only released when you are happy with the work.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 md:gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#D99A16] rounded-[8px] md:rounded-[12px] flex items-center justify-center">
                <Image src="/icons/support.svg" alt="Support" width={24} height={24} className="w-6 h-6 brightness-0 invert" />
              </div>
              <div className="flex flex-col gap-1 md:gap-2">
                <h3 className="font-poppins font-semibold text-[16px] leading-[24px] text-[#191C1E] md:text-black">
                  24/7 Support
                </h3>
                <p className="font-montserrat font-normal text-[14px] leading-[20px] text-[#45464D] md:text-[#4C4546]">
                  Our dedicated team is here to help mediate and assist with any project challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
