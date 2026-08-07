import React from "react";
import Image from "next/image";

const reasons = [
  {
    number: 1,
    title: "Verified workers",
    description: "Post a job in 60 seconds and receive multiple quotes within the hour from local pros.",
  },
  {
    number: 2,
    title: "Trusted marketplace",
    description: "No hidden fees or surprise costs. See exactly what you're paying for before the work starts.",
  },
  {
    number: 3,
    title: "Easy hiring",
    description: "We prioritize local talent to ensure faster response times and community economic growth.",
  },
  {
    number: 4,
    title: "Professional growth",
    description: "The only platform that actively integrates apprenticeships into real projects for the next gen.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative w-full bg-white py-[124px] md:py-[96px] px-6 lg:px-[64px] overflow-hidden">
      {/* Background Curls - Desktop */}
      <div className="hidden lg:block absolute top-0 left-0">
        <Image
          src="/images/curl-left.svg"
          alt=""
          width={280}
          height={280}
          className="w-auto h-auto max-w-[200px] xl:max-w-none"
        />
      </div>
      <div className="hidden lg:block absolute top-0 right-0">
        <Image
          src="/images/curl-right.svg"
          alt=""
          width={280}
          height={280}
          className="w-auto h-auto max-w-[200px] xl:max-w-none"
        />
      </div>

      {/* Background Curls - Mobile */}
      <div className="lg:hidden absolute top-0 left-0">
        <Image src="/images/curl-top-mobile.svg" alt="" width={120} height={120} />
      </div>
      <div className="lg:hidden absolute bottom-0 right-0">
        <Image src="/images/curl-bottom-mobile.svg" alt="" width={120} height={120} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-poppins font-semibold md:font-bold text-[24px] md:text-[30px] leading-[31.2px] md:leading-[36px] tracking-[0px] text-[#191C1E] md:text-black text-center mb-12 md:mb-16">
          Why choose BlueFixx?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-12">
          {reasons.map((reason) => (
            <div key={reason.number} className="flex flex-col items-center text-center group">
              {/* Number with Radial Gradient */}
              <div
                className="w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-[12px] border border-[#D1D1D1] flex items-center justify-center mb-6 shadow-[0px_4px_10px_rgba(0,0,0,0.1)] md:shadow-none transition-transform group-hover:scale-105"
                style={{
                  background: "radial-gradient(circle at center, #001128 0%, #0092D0 100%)"
                }}
              >
                <span className="font-montserrat font-normal md:font-medium text-[16px] md:text-[24px] leading-[24px] text-white">
                  {reason.number}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-montserrat md:font-poppins font-semibold md:font-bold text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] tracking-[0.28px] md:tracking-normal text-[#191C1E] md:text-black">
                  {reason.title}
                </h3>
                <p className="font-montserrat font-normal text-[16px] md:text-[14px] leading-[24px] md:leading-[20px] text-[#45464D] md:text-[#4C4546]">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
