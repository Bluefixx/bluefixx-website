"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How does BlueFixx verify workers?",
    answer: "Every worker undergoes a rigorous background check and skills verification process before joining our network. We verify their identity, certifications, and past work history to ensure quality and safety.",
  },
  {
    question: "Is the apprentice program available everywhere?",
    answer: "Our apprentice program is currently rolling out across major cities in Africa. We are actively expanding to more regions to connect eager learners with certified masters.",
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "Your satisfaction is our priority. With our secure escrow-style payments, funds are only released when you are happy with the work. Our support team is also available 24/7 to mediate any issues.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white md:bg-white py-[96px] px-4 md:px-6 lg:px-[64px] relative">
      <div className="md:hidden absolute inset-0 bg-[#F7F9FB] -z-10" />
      <div className="max-w-3xl mx-auto">
        <h2 className="font-poppins font-semibold md:font-bold text-[24px] md:text-[30px] leading-[28px] md:leading-[36px] tracking-[0px] text-[#191C1E] md:text-black text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white md:bg-white border border-[#C6C6CD] md:border-[#D1D1D1] rounded-[12px] md:rounded-none overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer group"
              >
                <span className="font-montserrat font-semibold md:font-bold text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] tracking-[0.28px] md:tracking-normal text-[#191C1E] md:text-black">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[#191C1E] md:text-black transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="font-montserrat font-normal text-[14px] leading-[20px] text-[#45464D] md:text-[#4C4546]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
