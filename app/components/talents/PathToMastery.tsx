import React from "react";
import Image from "next/image";

const masterySteps = [
  {
    step: "STEP 01",
    title: "Application & Matching",
    description: "Submit your credentials and get matched with a master tradesperson in your area who fits your career goals.",
    image: "/images/path1.png",
    // dark at bottom (from-), fading to transparent at top (to-)
    gradientClasses:
      "from-[#000000E5] via-[#00000066] to-transparent lg:from-[#000A19] lg:via-transparent lg:to-[#001B4000]",
  },
  {
    step: "STEP 02",
    title: "Foundational Training",
    description: "First 6 months focused on safety, tool mastery, and core concepts.",
    image: "/images/path2.png",
    gradientClasses:
      "from-[#000000E5] via-[#00000066] to-transparent lg:from-black lg:via-transparent lg:to-transparent",
  },
  {
    step: "STEP 03",
    title: "Field Work",
    description: "Last 6 months focused on hands-on experience.",
    image: "/images/path3.png",
    gradientClasses:
      "from-[#000000E5] via-[#00000066] to-transparent lg:from-[#010B19] lg:via-transparent lg:to-transparent",
  },
  {
    step: "STEP 03",
    title: "Certification",
    description: "Get certified.",
    image: "/images/path4.png",
    gradientClasses:
      "from-[#000000E5] via-[#00000066] to-transparent lg:from-[#010B19] lg:via-transparent lg:to-transparent",
  },
];

export default function PathToMastery() {
  return (
    <section className="w-full py-[64px] md:py-[96px] px-4 md:px-6 lg:px-[64px] bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-poppins font-normal md:font-semibold text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] tracking-[0px] text-black mb-2 md:mb-4">
            Path to Mastery
          </h2>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] tracking-[0px] text-[#45464D] md:text-[#4C4546]">
            Your journey from beginner to certified expert.
          </p>
        </div>

        {/* Complex Grid Desktop / Stacked Mobile + Tablet */}
        <div className="w-full flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-8">

          {/* Column 1: Step 1 (Full Height on Desktop) */}
          <div className="h-full">
            <MasteryCard step={masterySteps[0]} isMain={true} />
          </div>

          {/* Column 2: Steps 2, 3, 4 */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Step 2 (Full Width of Column) */}
            <MasteryCard step={masterySteps[1]} />

            {/* Row with Step 3 & 4 (50-50 on Desktop only) */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="flex-1">
                <MasteryCard step={masterySteps[2]} />
              </div>
              <div className="flex-1">
                <MasteryCard step={masterySteps[3]} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Placeholder */}
        <div className="w-full mt-12 md:mt-16 aspect-video md:aspect-[3/1] bg-[#ECEEF0] md:bg-[#F2F2F2] rounded-[12px] md:rounded-[4px] border-[2px] md:border border-[#C6C6CD] md:border-[#D1D1D1] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-full h-[1px] bg-black rotate-[10deg]"></div>
            <div className="w-full h-[1px] bg-black -rotate-[10deg]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MasteryCard({ step, isMain = false }: { step: typeof masterySteps[0]; isMain?: boolean }) {
  return (
    <div
      className={`relative w-full rounded-[12px] lg:rounded-[4px] overflow-hidden ${
        isMain ? "lg:bg-[#001B40] lg:border lg:border-[#D1D1D1] lg:p-8" : ""
      } group h-full`}
    >
      <div
        className={`relative aspect-square lg:aspect-auto w-full h-full ${
          isMain ? "border lg:border-[#D1D1D1]" : ""
        } overflow-hidden rounded-[12px] lg:rounded-none min-h-[300px]`}
      >
        {/* Background Image */}
        <Image src={step.image} alt={step.title} fill className="object-cover" />

        {/* Top Tint (mobile + tablet only) */}
        <div className="lg:hidden absolute inset-0 bg-[#131B2E]/30 z-[5]" />

        {/* Bottom Gradient — dark at bottom (from-), fading to transparent at top (to-) */}
        <div className={`absolute inset-0 bg-gradient-to-t ${step.gradientClasses} z-10`} />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 lg:p-8">
          <span className="font-montserrat font-normal text-[16px] leading-[24px] tracking-[1.6px] lg:tracking-[0px] text-[#ADC6FF] lg:text-[#E5E5E5] mb-1">
            {step.step}
          </span>
          <h3 className="font-poppins font-semibold text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] tracking-[0px] text-white lg:text-[#FAFAFA] mb-2">
            {step.title}
          </h3>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] tracking-[0px] text-white lg:text-[#E5E5E5] opacity-80 lg:opacity-100">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}