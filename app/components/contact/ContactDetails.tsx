import React from "react";
import Image from "next/image";

const contactCards = [
  {
    title: "Phone Support",
    sub: "Available Mon-Fri, 9am - 6pm EST",
    contact: "+ (234) 555-0199",
    icon: "/icons/call.svg",
    mobileIcon: "/icons/call-mobile.svg",
    bgColor: "bg-[#DBE1FF]",
    mobileBgColor: "bg-[#2170E4]",
  },
  {
    title: "Email Us",
    sub: "We typically reply within 24 hours.",
    contact: "info@bluefixxllp.com",
    icon: "/icons/mail-black.svg",
    mobileIcon: "/icons/email-mobile.svg",
    bgColor: "bg-[#F9B72C]",
    mobileBgColor: "bg-[#2170E4]",
  },
  {
    title: "Office Location",
    sub: "123 Innovation Plaza, Suite 500 Lagos Nigeria.",
    contact: "",
    icon: "/icons/location.svg",
    mobileIcon: "/icons/location.svg",
    bgColor: "bg-[#316BF3]",
    mobileBgColor: "bg-[#2170E4]",
  },
];

export default function ContactDetails() {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-4">
      {/* Contact Cards */}
      {contactCards.map((card, idx) => (
        <div
          key={idx}
          className="w-full bg-[#F2F4F6] rounded-[8px] border border-[#C4C6CF33] p-6 flex items-start gap-4"
        >
          {/* Icon Container Desktop */}
          <div
            className={`hidden md:flex w-12 h-12 rounded-[12px] items-center justify-center flex-shrink-0 ${card.bgColor}`}
          >
            <Image
              src={card.icon}
              alt={card.title}
              width={20}
              height={16}
            />
          </div>

          {/* Icon Container Mobile */}
          <div
            className={`flex md:hidden w-12 h-12 rounded-[12px] items-center justify-center flex-shrink-0 ${card.mobileBgColor}`}
          >
            <Image
              src={card.mobileIcon}
              alt={card.title}
              width={18}
              height={18}
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-1">
            <h3 className="font-poppins font-semibold text-[20px] leading-[28px] text-[#191C1E]">
              {card.title}
            </h3>
            <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#44474E]">
              {card.sub}
            </p>
            {card.contact && (
              <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#0051D5]">
                {card.contact}
              </p>
            )}
          </div>
        </div>
      ))}

      {/* Map Card */}
      <div className="w-full bg-[#F2F4F6] rounded-[8px] border border-[#C4C6CF33] overflow-hidden flex flex-col">
        <div className="relative w-full aspect-[16/9] md:aspect-[4/3] bg-gray-200">
          {/* Placeholder for Map */}
          <Image
            src="/images/map-placeholder.png"
            alt="Map location"
            fill
            className="object-cover"
          />

          {/* Map Overlay Tag */}
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-[4px] p-2 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-[#0051D5] rounded-sm flex items-center justify-center">
                <Image src="/icons/location.svg" alt="Location" width={12} height={12} className="invert" />
              </div>
              <span className="font-poppins font-semibold text-[12px] text-[#191C1E]">Lagos HQ</span>
            </div>
            <a href="#" className="font-poppins font-semibold text-[12px] text-[#0051D5] flex items-center gap-1">
              Get Directions
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="#0051D5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
