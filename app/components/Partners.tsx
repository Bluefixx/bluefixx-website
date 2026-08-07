import React from "react";
import Image from "next/image";

export default function Partners() {
  return (
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
  );
}
