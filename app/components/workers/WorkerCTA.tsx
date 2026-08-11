import React from "react";
import Button from "../Button";
import Link from "next/link";

export default function WorkerCTA() {
  return (
    <section className="w-full py-[64px] md:py-[96px] px-4 md:px-[64px] bg-[#ECEEF0] md:bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#001B40] border-0 md:border-2 border-[#001B40] rounded-[16px] md:rounded-[8px] p-[39px_40px] md:p-[48px] flex flex-col items-center text-center gap-6 md:gap-8">
          <div className="flex flex-col gap-3 md:gap-4 max-w-[600px]">
            <h2 className="font-poppins font-normal md:font-semibold text-[16px] leading-[25.6px] md:leading-[24px] text-white">
              Ready to secure your next project?
            </h2>
            <p className="font-montserrat font-normal text-[16px] leading-[25.6px] md:leading-[24px] text-[#FEFCFF] md:text-white">
              Applications are processed within 48 hours. Get your tools ready.
            </p>
          </div>
          <Link href="/signup">
            <Button variant="white" size="large" className="!text-[#001B40] w-full md:w-auto">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
