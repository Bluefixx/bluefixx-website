import React from "react";
import Image from "next/image";

interface BenefitCardProps {
  icon: string;
  mobileIcon?: string;
  title: string;
  description: string;
  bgColor: string;
}

const BenefitCard = ({ icon, mobileIcon, title, description, bgColor }: BenefitCardProps) => (
  <div className={`${bgColor} border border-[#D1D1D1] rounded-[4px] p-8 flex flex-col gap-4`}>
    <div className="w-8 h-8 relative">
      <Image
        src={icon}
        alt={`${title} Icon`}
        fill
        className={`${mobileIcon ? "hidden md:block" : ""} object-contain`}
      />
      {mobileIcon && (
        <Image
          src={mobileIcon}
          alt={`${title} Icon Mobile`}
          fill
          className="md:hidden object-contain"
        />
      )}
    </div>
    <div className="flex flex-col gap-4">
      <h3 className="font-poppins font-semibold text-[16px] leading-[24px] text-white">
        {title}
      </h3>
      <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#E5E5E5]">
        {description}
      </p>
    </div>
  </div>
);

export default function WorkerBenefits() {
  const benefits = [
    {
      icon: "/icons/jobs.svg",
      title: "Consistent Jobs",
      description: "Access a steady stream of verified leads in your area. No more cold calling or chasing dead ends.",
      bgColor: "bg-[#001B40]",
    },
    {
      icon: "/icons/verified.svg",
      mobileIcon: "/icons/verified-mobile.svg",
      title: "Verified Customers",
      description: "We vet every customer and project request, ensuring you only work with serious clients.",
      bgColor: "bg-[#1563E3]",
    },
    {
      icon: "/icons/secure.svg",
      mobileIcon: "/icons/payment-mobile.svg",
      title: "Secure Payments",
      description: "Get paid on time, every time. Our automated escrow system protects your hard-earned wages.",
      bgColor: "bg-[#8C8C8C]",
    },
  ];

  return (
    <section className="w-full py-[64px] md:py-[96px] px-6 lg:px-[64px] bg-[#F2F4F6] md:bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center gap-2 mb-12 md:mb-16">
          <h2 className="font-poppins font-semibold text-[24px] leading-[24px] text-[#121212] text-center">
            Built for Professionals
          </h2>
          <div className="w-[80px] h-[4px] bg-black"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
