import React from "react";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="w-full bg-[#F7F9FB] py-[64px] md:py-[96px] px-6 lg:px-[64px] relative overflow-hidden">
      {/* Top Right Subtle Gradient Fade */}
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[64px] pointer-events-none"
        style={{
          backgroundColor: "#0051D5",
          opacity: 0.12
        }}
      />

      {/* Main Container Card */}
      <div className="max-w-6xl mx-auto w-full bg-[#001B3D] rounded-[12px] p-[32px] md:p-[96px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left Column: Story Text and CEO Info */}
          <div className="flex flex-col text-left">
            {/* Heading */}
            <h2 className="font-poppins font-semibold text-[28px] md:text-[32px] leading-[34px] md:leading-[38px] text-white mb-6">
              Our Story
            </h2>

            {/* Description */}
            <p className="font-montserrat font-medium text-[16px] leading-[24px] text-[#6F84AC] mb-12">
              BlueFixx was founded in 2026 by a group of entrepreneurs and contractors who saw firsthand the frustration of finding reliable home services. What started as a small project in a garage has grown into a nationwide platform that prioritizes human connection and professional integrity above all else.
            </p>

            {/* CEO Profile info */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-[12px] overflow-hidden flex-shrink-0">
                <Image
                  src="/images/ceo.jpg"
                  alt="Ebuka Alumona"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-semibold text-[18px] leading-[28px] text-white">
                  Ebuka Alumona
                </span>
                <span className="font-montserrat font-normal text-[14px] leading-[20px] text-[#6F84AC]">
                  Founder & CEO, BlueFixx
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Masonry Image Layout */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Column 1 (man1.png smaller height, apprentice.png longer height) */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-[140px] md:h-[160px] rounded-[8px] overflow-hidden shadow-sm">
                <Image
                  src="/images/man1.png"
                  alt="Team member portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[200px] md:h-[220px] rounded-[8px] overflow-hidden shadow-sm">
                <Image
                  src="/images/apprentice.png"
                  alt="Apprentice electrician working"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Column 2 (path2.png longer height, path1.png smaller height) */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-[200px] md:h-[220px] rounded-[8px] overflow-hidden shadow-sm">
                <Image
                  src="/images/path2.png"
                  alt="Onsite home repairs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[140px] md:h-[160px] rounded-[8px] overflow-hidden shadow-sm">
                <Image
                  src="/images/path1.png"
                  alt="Service verification handshake"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
