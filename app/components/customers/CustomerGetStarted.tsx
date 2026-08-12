import React from "react";
import Button from "../Button";
import Link from "next/link";

export default function CustomerGetStarted() {
  return (
    <section className="relative w-full py-[80px] md:py-[120px] px-4 md:px-6 lg:px-[64px] min-h-[420px] md:min-h-[480px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/images/getstarted-cust.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />
      
      {/* Subtle overlay for contrast */}
      <div className="absolute inset-0 bg-black/10 md:bg-black/5" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-poppins font-semibold text-[24px] md:text-[40px] leading-[31.2px] md:leading-[48px] tracking-[0px] text-white md:text-[#FAFAFA] mb-4 md:mb-6">
          Ready to get started?
        </h2>
        
        <p className="font-montserrat font-normal text-[16px] leading-[25.6px] md:leading-[24px] tracking-[0px] text-[#E0E3E5] md:text-[#F5F5F5] mb-8 md:mb-10 max-w-[280px] md:max-w-2xl">
          Join thousands of happy customers who trust BlueFixx for their home and business needs.
        </p>

        <Link href="/post-job">
          <Button
            variant="solid"
            size="large"
            className="min-w-[180px] md:min-w-[200px]"
          >
            Post a job now
          </Button>
        </Link>
      </div>
    </section>
  );
}
