import React from "react";
import Image from "next/image";
import Link from "next/link";

const offerCards = [
  {
    title: "For Workers",
    desktopDescription: "Find consistent work, manage your schedule",
    mobileDescription: "Find consistent work, manage your schedule, and grow your local business.",
    image: "/images/workers.png",
    link: "/workers",
    buttonText: "Join as a Pro",
    buttonColor: "bg-[#001B40]",
    borderColor: "border-[#3A75C0]",
  },
  {
    title: "For Customers",
    desktopDescription: "Access thousands of verified pros for any home project, large or small.",
    mobileDescription: "Access thousands of verified pros for any home project, large or small.",
    image: "/images/customers.png",
    link: "/customers",
    buttonText: "Find a specialist",
    buttonColor: "bg-[#1563E3]",
    borderColor: "border-[#3A75C0]",
  },
  {
    title: "For Talents",
    desktopTitle: "For Talents",
    mobileTitle: "Talents",
    desktopDescription: "Find consistent work, manage your schedule",
    mobileDescription: "Start your career with apprenticeships under certified masters in your area.",
    image: "/images/talents.png",
    link: "/talents",
    buttonText: "Start Learning",
    buttonColor: "bg-[#F9B72C]",
    buttonTextColor: "text-[#001B40]",
    borderColor: "border-[#3A75C0]",
  },
];

export default function Offers() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[80px] px-6 lg:px-[64px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
        {offerCards.map((card, index) => (
          <div key={index} className={`flex flex-col bg-[#FAFAFA] overflow-hidden transition-all h-full border-b-[12px] ${card.borderColor} ${index === 0 || index === 2 ? 'max-lg:border-b-0' : ''} rounded-[12px] lg:rounded-none card-shadow-mobile lg:shadow-none`}>
            <div className="relative w-full aspect-[4/3] md:aspect-[3/2] z-0">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay Inset padding wrapper */}
            <div className="px-4 pb-4 lg:px-6 lg:pb-12 flex-grow flex flex-col gap-3">
              <div className="relative z-10 bg-white pt-5 pb-8 px-8 flex flex-col items-center text-center details-shadow -mt-8 lg:-mt-12 flex-grow rounded-[4px] lg:rounded-none">
                <div className="flex flex-col items-center">
                  <h3 className="font-poppins font-semibold lg:font-bold text-[24px] lg:text-[20px] xl:text-[24px] leading-[33.6px] lg:leading-[32px] text-[#191C1E] lg:text-[#121212]">
                    {card.desktopTitle ? (
                      <>
                        <span className="hidden lg:inline">{card.desktopTitle}</span>
                        <span className="inline lg:hidden">{card.mobileTitle}</span>
                      </>
                    ) : card.title}
                  </h3>
                  <p className="font-sans font-normal text-[16px] leading-[24px] tracking-[0px] text-[#45464D] lg:text-[#404040] mt-3 md:max-w-[280px] lg:max-w-none">
                    <span className="hidden lg:inline">{card.desktopDescription}</span>
                    <span className="inline lg:hidden">{card.mobileDescription}</span>
                  </p>
                </div>
              </div>
              <Link href={card.link} className="w-full cursor-pointer">
                <button className={`w-full py-3 px-4 rounded-[2px] font-sans font-medium text-[14px] leading-5 text-center transition-all ${card.buttonColor} ${card.buttonTextColor || 'text-white'} hover:opacity-90 active:scale-[0.98] cursor-pointer`}>
                  {card.buttonText}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
