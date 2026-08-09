import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

export default function WorkersPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Hero Section */}
      <section className="w-full py-[48px] px-6 md:px-6 lg:px-[64px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

          {/* Right: Placeholder Image */}
          <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-video bg-[#F2F4F6] rounded-[20px] overflow-hidden border border-black/5">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-full h-[1px] bg-black rotate-45"></div>
              <div className="w-full h-[1px] bg-black -rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-[64px] md:py-[96px] px-6 md:px-6 lg:px-[64px] bg-[#F2F4F6] md:bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center gap-2 mb-12 md:mb-16">
            <h2 className="font-poppins font-semibold text-[24px] leading-[24px] text-[#121212] text-center">
              Built for Professionals
            </h2>
            <div className="w-[80px] h-[4px] bg-black"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {/* Consistent Jobs Card */}
            <div className="bg-[#001B40] border border-[#D1D1D1] rounded-[4px] p-8 flex flex-col gap-4">
              <div className="w-8 h-8 relative">
                <Image
                  src="/icons/jobs.svg"
                  alt="Jobs Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-poppins font-semibold text-[16px] leading-[24px] text-white">
                  Consistent Jobs
                </h3>
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#E5E5E5] md:w-1/2">
                  Access a steady stream of verified leads in your area. No more cold calling or chasing dead ends.
                </p>
              </div>
            </div>

            {/* Verified Customers Card */}
            <div className="bg-[#1563E3] border border-[#D1D1D1] rounded-[4px] p-8 flex flex-col gap-4">
              <div className="w-8 h-8 relative">
                <Image
                  src="/icons/verified.svg"
                  alt="Verified Icon"
                  fill
                  className="hidden md:block object-contain"
                />
                <Image
                  src="/icons/verified-mobile.svg"
                  alt="Verified Icon"
                  fill
                  className="md:hidden object-contain"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-poppins font-semibold text-[16px] leading-[24px] text-white">
                  Verified Customers
                </h3>
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#E5E5E5] md:w-1/2">
                  We vet every customer and project request, ensuring you only work with serious clients.
                </p>
              </div>
            </div>

            {/* Secure Payments Card */}
            <div className="bg-[#8C8C8C] border border-[#D1D1D1] rounded-[4px] p-8 flex flex-col gap-4">
              <div className="w-8 h-8 relative">
                <Image
                  src="/icons/secure.svg"
                  alt="Secure Icon"
                  fill
                  className="hidden md:block object-contain"
                />
                <Image
                  src="/icons/payment-mobile.svg"
                  alt="Payment Icon"
                  fill
                  className="md:hidden object-contain"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-poppins font-semibold text-[16px] leading-[24px] text-white">
                  Secure Payments
                </h3>
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#E5E5E5]">
                  Get paid on time, every time. Our automated escrow system protects your hard-earned wages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
