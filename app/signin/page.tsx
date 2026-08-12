"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat px-4 py-8 md:p-6 relative">
      {/* Semi-transparent dark overlay */}
      <div className="absolute inset-0 bg-[#000D1D]/20 pointer-events-none" />

      {/* Main Form Card */}
      <div className="relative z-10 w-full max-w-[500px] bg-white rounded-[12px] md:rounded-[32px] p-[32px] md:p-[56px] border-none md:border md:border-[#C3C6D74D] shadow-[0px_4px_20px_0px_rgba(15,23,42,0.05)] md:shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)] overflow-hidden">

        {/* Top-right bubble shape on desktop only */}
        <div className="hidden md:block absolute -top-[80px] -right-[80px] w-[240px] h-[240px] bg-[#004AC60D] rounded-full pointer-events-none z-0" />

        {/* Card Content Wrapper */}
        <div className="relative z-10 flex flex-col">
          {/* Header Section */}
          <div className="flex flex-col">
            <h1 className="font-poppins font-semibold text-[24px] leading-[31.2px] md:leading-[28px] tracking-[0px] text-[#191C1E] md:text-[#131B2E]">
              Create your account
            </h1>
            <div className="border-b border-[#D4D4D4] mt-[8px] mb-[8px] hidden md:block" />
            <p className="font-montserrat font-normal text-[16px] leading-[25.6px] md:leading-[24px] tracking-[0px] text-[#45464D] md:text-[#434655] mt-4 md:mt-0">
              Build, hire, or grow with Africa's skilled workforce.
            </p>
          </div>

          {/* Divider after heading (Desktop only) */}

          {/* Form Section */}
          <form className="flex flex-col mt-6 md:mt-0" onSubmit={(e) => e.preventDefault()}>
            <label
              htmlFor="email"
              className="block font-montserrat font-semibold md:font-normal text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] tracking-[0.28px] md:tracking-[0px] text-[#45464D] md:text-[#434655] mb-2"
            >
              Email
            </label>
            <div className="relative w-full">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                <Image
                  src="/icons/email.svg"
                  alt="Email icon"
                  width={20}
                  height={20}
                  className="opacity-50"
                />
              </span>
              <input
                id="email"
                type="email"
                placeholder="jane.doe@company.com"
                required
                className="w-full bg-[#FAFAFA] border border-[#C3C6D7] rounded-[8px] py-[22px] pl-[60px] pr-[24px] text-[16px] font-montserrat text-[#131B2E] placeholder-[#73768680] leading-[100%] tracking-[0px] focus:outline-none focus:border-[#001B40] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-[#001B40] hover:bg-[#001B40]/90 text-white rounded-[8px] py-[22px] px-[24px] font-sans font-semibold text-[16px] leading-[24px] flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              Download App
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </form>

          {/* Divider right after button (Desktop only) */}
          <div className="border-b border-[#C3C6D74D] my-6 hidden md:block" />

          {/* Sign Up Row */}
          <div className="text-center mt-6 md:mt-0">
            <span className="font-montserrat font-normal text-[16px] leading-[25.6px] md:leading-[24px] tracking-[0px] text-[#45464D] md:text-[#434655]">
              Already part of Bluefixx?{" "}
            </span>
            <Link
              href="/signup"
              className="font-montserrat font-semibold md:font-bold text-[16px] leading-[25.6px] md:leading-[24px] tracking-[0px] text-[#001B40] hover:underline"
            >
              Log in
            </Link>
          </div>

          {/* Badges Footer Section */}
          <div className="flex items-center justify-center gap-8 md:gap-[32px] mt-6">
            {/* Enterprise Secure Badge - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Image
                src="/icons/verified-grey.svg"
                alt="Secure icon"
                width={12}
                height={15}
              />
              <span className="font-montserrat font-normal text-[11px] leading-[16.5px] tracking-[0.55px] uppercase text-[#43465599]">
                Enterprise Secure
              </span>
            </div>

            {/* Enterprise Secure Badge - Mobile */}
            <div className="flex md:hidden items-center gap-2">
              <Image
                src="/icons/verified-main.svg"
                alt="Secure icon"
                width={12}
                height={15}
              />
              <span className="font-montserrat font-medium text-[12px] leading-[12px] tracking-[-0.3px] uppercase text-[#191C1E]">
                Enterprise Secure
              </span>
            </div>

            {/* Verified Workers Badge - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Image
                src="/icons/verified-grey.svg"
                alt="Verified icon"
                width={12}
                height={15}
              />
              <span className="font-montserrat font-normal text-[11px] leading-[16.5px] tracking-[0.55px] uppercase text-[#43465599]">
                Verified Workers Only
              </span>
            </div>

            {/* Verified Workers Badge - Mobile */}
            <div className="flex md:hidden items-center gap-2">
              <Image
                src="/icons/mark.svg"
                alt="Verified icon"
                width={14}
                height={14}
              />
              <span className="font-montserrat font-medium text-[12px] leading-[12px] tracking-[-0.3px] uppercase text-[#191C1E]">
                Verified Workers
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
