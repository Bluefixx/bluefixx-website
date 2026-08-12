import React from "react";
import Button from "../Button";
import Link from "next/link";

export default function TalentHero() {
  return (
    <section className="w-full py-[48px] md:py-[80px] px-6 lg:px-[64px] bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="flex flex-col gap-6 md:gap-8">
          <h1 className="font-poppins font-semibold md:font-bold text-[36px] md:text-[32px] leading-[39.6px] md:leading-[40px] tracking-[0px] md:tracking-[-0.64px] text-black">
            Become an Apprentice and Build Your Future
          </h1>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] tracking-[0px] text-[#45464D] md:text-[#4C4546] max-w-[540px]">
            Master a trade with hands-on training, expert mentorship, and a clear path to certification on the BlueFixx platform.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link href="/signup" className="w-full md:w-auto">
              <Button variant="solid" size="large" className="w-full md:min-w-[180px]">
                Apply Now
              </Button>
            </Link>
            <Link href="/programs" className="w-full md:w-auto">
              <Button variant="outlined" size="large" className="w-full md:min-w-[180px]">
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Square Placeholder Image */}
        <div className="relative w-full aspect-square bg-[#F2F4F6] rounded-[20px] overflow-hidden border border-black/5">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-full h-[1px] bg-black rotate-45"></div>
            <div className="w-full h-[1px] bg-black -rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
