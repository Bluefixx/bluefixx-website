import React from "react";
import Image from "next/image";

const reasons = [
  {
    icon: "/icons/quality.svg",
    bgColor: "bg-[#001B40]",
    title: "Guaranteed Quality",
    description: "If you're not satisfied with the work, we'll make it right. Every project booked through us is protected by the BlueFixx Guarantee.",
    iconSize: 20
  },
  {
    icon: "/icons/secure.svg",
    bgColor: "bg-[#1563E3]",
    title: "Transparent Pricing",
    description: "No hidden fees or unexpected costs. You'll get detailed quotes upfront so you can make informed decisions for your home.",
    iconSize: 24
  },
  {
    icon: "/icons/efficient.svg",
    bgColor: "bg-[#F9B72C]",
    title: "Efficient Matching",
    description: "Our smart algorithm finds the best professional for your specific needs, location, and budget in minutes, not days.",
    iconSize: 24
  }
];

export default function BluefixxEdge() {
  return (
    <section className="w-full bg-[#F7F9FB] py-[64px] md:py-[96px] px-6 lg:px-[64px] relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between">
        
        {/* Left Column: Image with Overlay Tag (Wider) */}
        <div className="relative w-full lg:w-[54%] max-w-[500px] lg:max-w-none mx-auto pr-6 pb-6 flex-shrink-0">
          <div className="relative w-full aspect-[4/5] rounded-[8px] overflow-hidden shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.08)]">
            <Image
              src="/images/path4.png"
              alt="Professional hand shake"
              fill
              className="object-cover"
            />
          </div>

          {/* 100% Secure Tag */}
          <div className="absolute bottom-0 right-0 z-20 bg-white rounded-[8px] border border-[#C4C6CF33] p-4 md:p-6 shadow-[0px_8px_30px_rgba(0,0,0,0.08)] flex items-center gap-4">
            {/* Success Icon wrapper */}
            <div className="w-12 h-12 bg-[#EAFBF2] rounded-[12px] flex items-center justify-center flex-shrink-0">
              <Image
                src="/icons/verified-success.svg"
                alt="Verified success icon"
                width={22}
                height={21}
              />
            </div>
            {/* Text details */}
            <div className="flex flex-col">
              <span className="font-poppins font-semibold text-[16px] leading-[20px] text-[#191C1E] text-left">
                100% Secure
              </span>
              <span className="font-montserrat font-normal text-[12px] leading-[16px] text-[#44474E] text-left mt-0.5">
                Verified Transactions
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Text and Features List (Narrower) */}
        <div className="w-full lg:w-[40%] flex-shrink-0 flex flex-col justify-center text-left">
          {/* Tag */}
          <span className="font-montserrat font-medium text-[14px] leading-[20px] tracking-[0px] text-[#001B40] uppercase mb-2">
            THE BLUEFIXX EDGE
          </span>

          {/* Heading */}
          <h2 className="font-poppins font-semibold text-[28px] md:text-[32px] leading-[34px] md:leading-[38px] tracking-[0px] text-[#191C1E] mb-8">
            Why homeowners trust us more than anyone else
          </h2>

          {/* Reasons List */}
          <div className="flex flex-col gap-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4 md:gap-6">
                {/* Icon Wrapper */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-[12px] ${reason.bgColor} flex items-center justify-center`}>
                  <Image
                    src={reason.icon}
                    alt={reason.title}
                    width={reason.iconSize}
                    height={reason.iconSize}
                  />
                </div>
                {/* Text Area */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-poppins font-semibold text-[18px] leading-[28px] tracking-[0%] text-[#191C1E]">
                    {reason.title}
                  </h3>
                  <p className="font-montserrat font-medium text-[16px] leading-[24px] tracking-[0px] text-[#44474E]">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
