import React from "react";
import Image from "next/image";

export default function AboutFoundation() {
  return (
    <section className="bg-[#F7F9FB] py-[64px] md:py-[96px] px-6 lg:px-[64px] flex flex-col items-center">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Intro Tag */}
        <span className="font-montserrat font-medium text-[16px] leading-[24px] tracking-[0px] text-[#0051D5] uppercase mb-2">
          OUR FOUNDATION
        </span>

        {/* Heading */}
        <h2 className="font-poppins font-semibold text-[28px] md:text-[32px] leading-[34px] md:leading-[38px] tracking-[0px] text-[#191C1E] text-center mb-16">
          Values that drive us forward
        </h2>

        {/* Alternating Row Grid */}
        <div className="w-full flex flex-col gap-8">
          
          {/* Row 1: Mission (70%) and Vision (30%) */}
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Card 1: Our Mission */}
            <div className="w-full lg:w-[70%] bg-white rounded-[12px] p-8 border border-[#C4C6CF4D] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.01)] flex flex-col justify-between">
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-[8px] bg-[#001B40] flex items-center justify-center mb-6">
                  <Image 
                    src="/icons/flag.svg"
                    alt="Flag icon"
                    width={24}
                    height={24}
                  />
                </div>

                {/* Heading */}
                <h3 className="font-poppins font-semibold text-[24px] leading-[28px] tracking-[0px] text-[#191C1E] mb-4">
                  Our Mission
                </h3>

                {/* Subtext */}
                <p className="font-montserrat font-medium text-[16px] leading-[24px] tracking-[0px] text-[#44474E] mb-8">
                  To empower local economies by creating a seamless, high-trust marketplace where homeowners can find vetted professionals and service providers can grow sustainable businesses. We aim to modernize the home service industry through transparency and technology.
                </p>
              </div>

              {/* Image */}
              <div className="relative w-full h-[200px] md:h-[240px] overflow-hidden rounded-[8px] mt-2">
                <Image
                  src="/images/path2.png"
                  alt="Our Mission team working"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Card 2: Our Vision */}
            <div className="w-full lg:w-[30%] bg-[#0051D5] rounded-[12px] p-8 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.01)] flex flex-col text-white">
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-[8px] bg-[#D8E9FF] flex items-center justify-center mb-6">
                <Image 
                  src="/icons/eyes.svg"
                  alt="Eyes icon"
                  width={24}
                  height={24}
                />
              </div>

              {/* Heading */}
              <h3 className="font-poppins font-semibold text-[24px] leading-[28px] tracking-[0px] text-white mb-4">
                Our Vision
              </h3>

              {/* Subtext */}
              <p className="font-montserrat font-medium text-[16px] leading-[24px] tracking-[0px] text-[#FFFFFFE5]">
                To be the global standard for home services, where quality is guaranteed and trust is the default.
              </p>

              {/* Joining Badge Footer */}
              <div className="mt-auto pt-16 flex flex-col gap-3">
                <div className="flex items-center">
                  <Image
                    src="/icons/pics.svg"
                    alt="Professionals"
                    width={100}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <span className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0px] text-[#FFFFFFCC]">
                  Joining 5,000+ professionals
                </span>
              </div>
            </div>

          </div>

          {/* Row 2: Reliability First (30%) and Community Impact (70%) */}
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Card 1: Reliability First */}
            <div className="w-full lg:w-[30%] bg-[#F2F4F6] rounded-[12px] p-8 border border-[#C4C6CF4D] flex flex-col">
              {/* Heading */}
              <h3 className="font-poppins font-semibold text-[18px] leading-[28px] tracking-[0%] text-[#191C1E] mb-4">
                Reliability First
              </h3>

              {/* Subtext */}
              <p className="font-montserrat font-medium text-[16px] leading-[24px] tracking-[0px] text-[#44474E]">
                Every professional undergoes a rigorous 5-step background check and certification verification process.
              </p>
            </div>

            {/* Card 2: Community Impact */}
            <div className="w-full lg:w-[70%] bg-[#F2F4F6] rounded-[12px] p-8 border border-[#C4C6CF4D] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              {/* Text Area */}
              <div className="flex flex-col max-w-[480px]">
                {/* Heading */}
                <h3 className="font-poppins font-semibold text-[18px] leading-[28px] tracking-[0%] text-[#191C1E] mb-4">
                  Community Impact
                </h3>

                {/* Subtext */}
                <p className="font-montserrat font-medium text-[16px] leading-[24px] tracking-[0px] text-[#44474E]">
                  We've helped over 10,000 local businesses grow their revenue by connecting them with high-intent customers in their neighborhoods.
                </p>
              </div>

              {/* Stats Area */}
              <div className="flex flex-row items-center gap-8 pl-0 lg:pl-8 border-t lg:border-t-0 lg:border-none border-[#C4C6CF80] pt-6 lg:pt-0 w-full lg:w-auto justify-start lg:justify-center">
                {/* Stat 1 */}
                <div className="flex flex-col">
                  <span className="font-poppins font-semibold text-[32px] leading-[38px] tracking-[0px] text-[#191C1E] text-left">
                    98%
                  </span>
                  <span className="font-montserrat font-medium text-[12px] leading-[16px] tracking-[0px] text-[#44474E] text-left">
                    Satisfaction
                  </span>
                </div>

                {/* Stat Divider */}
                <div className="h-10 w-[1px] bg-[#C4C6CF80]" />

                {/* Stat 2 */}
                <div className="flex flex-col">
                  <span className="font-poppins font-semibold text-[32px] leading-[38px] tracking-[0px] text-[#191C1E] text-left">
                    24/7
                  </span>
                  <span className="font-montserrat font-medium text-[12px] leading-[16px] tracking-[0px] text-[#44474E] text-left">
                    Support
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
