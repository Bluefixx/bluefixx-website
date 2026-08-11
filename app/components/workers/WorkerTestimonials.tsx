"use client";

import React from "react";
import ReusableTestimonials, { TestimonialData } from "../ReusableTestimonials";

const workerTestimonials: TestimonialData[] = [
  {
    id: 1,
    name: "David S.",
    role: "PROFESSIONAL PLUMBER",
    image: "/images/david.jpg",
    text: '"BlueFixx changed how I run my plumbing business. The leads are high quality and the payment system is seamless."',
    stars: 5,
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "HOMEOWNER",
    image: "/images/sarah.jpg",
    text: '"Finding a reliable electrician used to be a nightmare. On BlueFixx, I found someone verified and ready to work in 10 minutes."',
    stars: 5,
  },
  {
    id: 3,
    name: "James L.",
    role: "APPRENTICE ELECTRICIAN",
    image: "/images/james.jpg",
    text: '"As an apprentice, the platform gave me my first real break. Working under verified masters has accelerated my learning 2x."',
    stars: 5,
  },
];

export default function WorkerTestimonials() {
  return (
    <ReusableTestimonials
      testimonials={workerTestimonials}
      heading="Voice of the Fixxers"
      subheading="Join 5,000+ tradespeople growing their business."
      mobileBgColor="bg-[#ECEEF0]"
      headingStyles="font-poppins font-normal md:font-semibold text-[16px] leading-[25.6px] md:leading-[24px] tracking-[0px] text-black"
      subheadingStyles="font-montserrat font-normal text-[16px] leading-[25.6px] md:leading-[24px] tracking-[0px] text-[#45464D] md:text-[#4C4546]"
    />
  );
}
