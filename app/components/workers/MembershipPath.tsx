import React from "react";

const steps = [
  {
    step: "STEP 01",
    title: "Complete Your Profile",
    description: "Showcase your skills, certifications, and previous work. A detailed profile increases your visibility to top-tier customers.",
  },
  {
    step: "STEP 02",
    title: "Pass the Quality Check",
    description: "Our team reviews your credentials to maintain the 'BlueFixx Gold Standard.' Once approved, you're ready to pick up jobs.",
  },
  {
    step: "STEP 03",
    title: "Start Fixing & Earning",
    description: "Bid on projects or get matched directly. Use the BlueFixx dashboard to manage your schedule and invoices.",
  },
];

export default function MembershipPath() {
  return (
    <section className="w-full py-[64px] md:py-[96px] px-6 lg:px-[64px] bg-white">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Section Heading */}
        <h2 className="font-montserrat md:font-poppins font-semibold text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] tracking-[1.4px] md:tracking-normal uppercase md:capitalize text-[#0058BE] md:text-black mb-12 md:mb-16">
          The Path to Membership
        </h2>

        {/* Steps List */}
        <div className="flex flex-col gap-[64px] md:gap-[96px]">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-16 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 flex flex-col gap-2">
                <span className="font-montserrat font-medium md:font-bold text-[12px] leading-[12px] md:leading-[16px] tracking-[0.6px] uppercase md:uppercase text-[#45464D] md:text-black">
                  {item.step}
                </span>
                <h3 className="font-poppins font-semibold text-[16px] leading-[25.6px] md:leading-[24px] text-black">
                  {item.title}
                </h3>
                <p className="font-montserrat font-normal text-[16px] leading-[25.6px] md:leading-[24px] text-[#45464D] md:text-[#4C4546]">
                  {item.description}
                </p>
              </div>

              {/* Image Placeholder */}
              <div className="flex-1 w-full aspect-video bg-[#F2F4F6] rounded-[20px] overflow-hidden border border-black/5 relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="w-full h-[1px] bg-black rotate-[26deg]"></div>
                  <div className="w-full h-[1px] bg-black -rotate-[26deg]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
