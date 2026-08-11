import React from "react";
import Button from "../Button";
import Link from "next/link";

export default function CustomerHero() {
  return (
    <section className="w-full py-[40px] md:py-[80px] px-4 md:px-6 lg:px-[64px] bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="flex flex-col gap-6 md:gap-8">
          <h1 className="font-poppins font-semibold text-[24px] md:text-[48px] leading-[31.2px] md:leading-[58px] tracking-[0px] text-black md:text-[#1B1B1B]">
            Hire a BlueFixxer for <br className="hidden md:block" /> Your Next Project
          </h1>
          <p className="font-montserrat font-normal text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] tracking-[0px] text-[#525252] md:text-[#4C4546] max-w-[540px]">
            Access a network of verified skilled tradespeople and apprentices. From minor repairs to major renovations, we connect you with the right expertise.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link href="/post-job" className="w-full md:w-auto">
              <Button variant="solid" size="large" className="w-full md:min-w-[200px]">
                Post Your Job Now
              </Button>
            </Link>
            <Link href="/workers" className="w-full md:w-auto">
              <Button variant="outlined" size="large" className="w-full md:min-w-[200px]">
                Browse Workers
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Placeholder Image */}
        <div className="relative w-full aspect-video bg-[#F2F4F6] rounded-[20px] overflow-hidden border border-black/5 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] md:shadow-none">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-full h-[1px] bg-black rotate-[26deg]"></div>
            <div className="w-full h-[1px] bg-black -rotate-[26deg]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
