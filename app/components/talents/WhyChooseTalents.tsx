import React from "react";
import Image from "next/image";

const talentReasons = [
  {
    title: "Structured learning",
    description: "Follow a rigorous curriculum designed by industry experts to ensure you master every essential skill in your chosen trade.",
    icon: "/icons/structure.svg",
    bgColor: "bg-[#001B40]",
    borderColor: "border-[#D1D1D1]",
  },
  {
    title: "Hands-on Experience",
    description: "Move beyond theory with practical projects on real work sites, guided by experienced professionals who know the craft.",
    icon: "/icons/experience.svg",
    bgColor: "bg-[#1563E3]",
    borderColor: "border-[#D1D1D1]",
  },
  {
    title: "Earn While You Learn",
    description: "Get paid a competitive wage from day one, with structured pay increases as you achieve milestones and certifications.",
    icon: "/icons/earn.svg",
    bgColor: "bg-[#8C8C8C]",
    borderColor: "border-[#D1D1D1]",
  },
];

export default function WhyChooseTalents() {
  return (
    <section className="w-full py-[64px] md:py-[96px] px-4 md:px-6 lg:px-[64px] bg-[#F2F4F6] md:bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-3 md:gap-4 mb-12 md:mb-16">
          <h2 className="font-poppins font-normal md:font-semibold text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] tracking-[0px] text-black text-center">
            Why Choose a BlueFixx Apprenticeship?
          </h2>
          <div className="h-[4px] w-[48px] md:w-[96px] bg-[#0058BE] md:bg-black" />
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {talentReasons.map((reason, index) => (
            <div
              key={index}
              className={`flex flex-col p-8 rounded-[12px] md:rounded-[4px] ${reason.bgColor} border-0 md:border ${reason.borderColor} shadow-[0px_4px_12px_rgba(0,0,0,0.05)] md:shadow-none gap-2 md:gap-4`}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 relative mb-2">
                <Image
                  src={reason.icon}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-poppins font-semibold text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] tracking-[0px] text-white">
                {reason.title}
              </h3>
              <p className="font-montserrat font-normal text-[16px] leading-[24px] tracking-[0px] text-[#7C839B] md:text-[#E5E5E5]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
