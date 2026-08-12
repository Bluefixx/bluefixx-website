import React from "react";
import Button from "../Button";
import Link from "next/link";

export default function TalentGetStarted() {
  return (
    <section className="w-full py-[64px] md:py-[96px] px-4 md:px-6 lg:px-[64px] bg-white">
      <div className="max-w-6xl mx-auto bg-[#001B40] rounded-[24px] md:rounded-[16px] p-[64px_40px] md:p-[64px_32px] flex flex-col items-center text-center gap-6 md:gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-poppins font-normal md:font-bold text-[16px] md:text-[32px] leading-[24px] md:leading-[40px] tracking-[0px] md:tracking-[-0.64px] text-white">
            Ready to start your journey?
          </h2>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] tracking-[0px] text-[#7C839B] md:text-[#C6C6C6] max-w-2xl">
            Join thousands of apprentices who have built successful careers through our specialized marketplace programs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <Link href="/signup" className="w-full md:w-auto">
            <Button
              variant="white"
              size="large"
              className="w-full md:min-w-[200px]"
            >
              Get Started Today
            </Button>
          </Link>
          <Link href="/support" className="w-full md:w-auto">
            <Button
              variant="outlined"
              size="large"
              className="w-full md:min-w-[200px] border-white text-white hover:bg-white/10"
            >
              Talk to our Support Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
