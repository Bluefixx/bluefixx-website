import React from "react";
import Image from "next/image";
import Partners from "./components/Partners";
import Offers from "./components/Offers";
import Excellence from "./components/Excellence";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import GetStarted from "./components/GetStarted";

export default function Home() {
  return (
    <div className="w-full flex-grow flex flex-col bg-[#000D1D]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[650px] md:min-h-[750px] flex-grow flex items-center justify-center overflow-hidden">
        {/* Background Image (Centers and scales cover, clipping sides on mobile) */}
        <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat" />

        {/* Gradient Overlay*/}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000D1D]/40 via-[#000D1D]/75 to-[#000D1D]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center justify-center">
          {/* Main Heading */}
          <h1 className="font-poppins font-normal md:font-bold text-[36px] md:text-[48px] leading-[54px] md:leading-[60px] tracking-[0px] text-white max-w-3xl">
            Bridging the gap in <br className="hidden md:block" /> professional home <br className="hidden md:block" /> services.
          </h1>

          {/* Subtext */}
          <p className="font-sans font-normal text-[16px] md:text-[20px] leading-[25.6px] md:leading-[28px] tracking-[0px] text-[#D4D4D4] max-w-2xl mt-6 md:mt-8">
            BlueFixx connects verified professionals, eager <br className="hidden md:block" /> customers, and the next generation of apprentices <br className="hidden md:block" /> in one unified marketplace.
          </p>

          {/* Download App Sub-label (hidden on mobile) */}
          <span className="hidden md:block font-sans font-medium text-[12px] leading-[16px] tracking-[0em] text-[#FAFAFA] mt-16">
            DOWNLOAD APP
          </span>

          {/* Store Badges (stacked on mobile, inline on desktop) */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-8 md:mt-3">
            <a href="#" className="hover:opacity-90 transition-opacity">
              <Image
                src="/icons/appstore.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </a>
            <a href="#" className="hover:opacity-90 transition-opacity">
              <Image
                src="/icons/playstore.svg"
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Offers Section */}
      <Offers />

      {/* Excellence Section */}
      <Excellence />

      {/* Why Choose Section */}
      <WhyChoose />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Get Started Section */}
      <GetStarted />
    </div>
  );
}
