import React from "react";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

export default function WorkerHero() {
  return (
    <section className="w-full py-[48px] px-6 lg:px-[64px] bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="flex flex-col gap-6 md:gap-8">
          <h1 className="font-poppins font-semibold text-[40px] md:text-[48px] leading-[50px] md:leading-[58px] text-black">
            Become a BlueFixxer. <br /> Grow Your Trade.
          </h1>
          <p className="font-montserrat font-normal text-[16px] leading-[25.6px] md:leading-[24px] text-[#45464D] md:text-[#4C4546] max-w-[540px]">
            Join the marketplace where quality craft meets consistent opportunity. We handle the paperwork; you handle the tools.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link href="/signup" className="w-full md:w-auto">
              <Button variant="solid" size="large" className="w-full md:min-w-[180px]">
                Apply to Join
              </Button>
            </Link>
            <Link href="/how-it-works" className="w-full md:w-auto">
              <Button variant="outlined" size="large" className="w-full md:min-w-[180px]">
                How it Works
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Worker Hero Image */}
        <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-video rounded-[20px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-black/5">
          <Image
            src="/images/workers.png"
            alt="BlueFixx Workers"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
