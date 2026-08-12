import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="w-full bg-[#001B40] py-[96px] md:py-[80px] px-4 md:px-6 lg:px-[64px]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="font-poppins font-semibold md:font-bold text-[24px] md:text-[36px] leading-[31.2px] md:leading-[40px] tracking-[0px] text-white mb-6">
          Ready to get started?
        </h2>
        
        <p className="font-montserrat font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-[0px] text-[#7C839B] md:text-white/60 mb-10 md:mb-12 max-w-2xl">
          Join the future of professional services today. Sign up as a worker, customer, or apprentice.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <Link href="/signup" className="w-full md:w-auto">
            <Button
              variant="white"
              size="large"
              className="w-full md:min-w-[200px]"
            >
              Create Account
            </Button>
          </Link>
          <Link href="/signup" className="w-full md:w-auto">
            <Button
              variant="outlined"
              size="large"
              className="w-full md:min-w-[200px] border-white text-white hover:bg-white/10"
            >
              Download App
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
