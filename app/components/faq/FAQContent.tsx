"use client";

import React, { useState } from "react";
import Image from "next/image";

const tabs = [
  { id: "all", label: "All Questions" },
  { id: "workers", label: "For Workers" },
  { id: "customers", label: "For Customers" },
  { id: "talents", label: "For Talents" },
];

const faqs = [
  {
    category: "workers",
    categoryLabel: "For Workers",
    icon: "/icons/workers.svg",
    questions: [
      { q: "How do I sign up as a service provider?", a: "To sign up, download the BlueFixx app, select 'Join as a Worker', and follow the verification steps." },
      { q: "What is the verification process?", a: "We verify your identity, professional licenses, and conduct a background check to ensure quality." },
    ]
  },
  {
    category: "customers",
    categoryLabel: "For Customers",
    icon: "/icons/customers.svg",
    questions: [
      { q: "How is payment security handled?", a: "Payments are held in escrow and only released once you confirm the job is completed to your satisfaction." },
      { q: "Can I cancel a booking?", a: "Yes, you can cancel within the app according to our cancellation policy." },
    ]
  },
  {
    category: "talents",
    categoryLabel: "For Talents (Apprentices)",
    icon: "/icons/grad-blue.svg",
    questions: [
      { q: "How does the apprenticeship program work?", a: "Our program matches you with experienced professionals for hands-on learning and certification." },
      { q: "Is there a cost to join as a Talent?", a: "Joining the platform is free, though some specialized certification courses may have fees." },
    ]
  }
];

export default function FAQContent() {
  const [activeTab, setActiveTab] = useState("all");
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const filteredFaqs = activeTab === "all" ? faqs : faqs.filter(f => f.category === activeTab);

  return (
    <section className="w-full bg-[#F9F9FF] py-[64px] md:py-[96px] px-6 lg:px-[64px]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 md:px-8 md:py-3 rounded-[8px] md:rounded-[12px] font-montserrat text-[16px] md:text-[14px] transition-all ${
                activeTab === tab.id
                  ? "bg-[#131B2E] md:bg-[#001B40] text-white border-none md:border md:border-[#5E97F6] font-normal md:font-bold"
                  : "bg-[#ECEEF0] md:bg-white text-[#45464D] md:text-[#141B2B] border-none md:border md:border-[#C2C7D1] font-normal md:font-bold"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Support Sidebar (Left on desktop, Second on mobile) */}
          <div className="order-2 md:order-1 w-full md:w-[35%] lg:w-[30%]">
            <div className="bg-[#D6E8FF] md:bg-[#EAF3FF] rounded-[12px] md:rounded-[8px] border border-[#ADC6FF4D] md:border-[#8EBBFF] p-6 md:p-8 flex flex-col gap-2 md:gap-6 h-fit">
              <div className="flex flex-col gap-2">
                <h2 className="font-poppins font-bold text-[16px] md:text-[24px] leading-[24px] md:leading-[31.2px] text-black md:text-[#00355F]">
                  Still have questions?
                </h2>
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#42474F]">
                  Our support team is available 24/7 to help you with any issues you might be facing.
                </p>
              </div>

              {/* Support Cards */}
              <div className="flex flex-col gap-4">
                {/* Chat Card */}
                <div className="bg-white rounded-[8px] md:rounded-[4px] border border-[#C6C6CD] md:border-[#C2C7D1] p-4 flex items-center gap-4 shadow-[0px_4px_10px_rgba(0,0,0,0.05)] md:shadow-none">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-[8px] md:rounded-[12px] bg-[#316BF333] flex items-center justify-center flex-shrink-0">
                    <Image src="/icons/chat.svg" alt="chat" width={24} height={24} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-montserrat font-normal md:font-bold text-[16px] md:text-[14px] text-[#191C1E] md:text-[#141B2B]">
                      Live Chat
                    </h3>
                    <p className="font-montserrat font-normal text-[12px] md:text-[14px] text-[#45464D] md:text-[#42474F]">
                      Response time: ~5 mins
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-[8px] md:rounded-[4px] border border-[#C6C6CD] md:border-[#C2C7D1] p-4 flex items-center gap-4 shadow-[0px_4px_10px_rgba(0,0,0,0.05)] md:shadow-none">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-[8px] md:rounded-[12px] bg-[#316BF333] flex items-center justify-center flex-shrink-0">
                    <Image src="/icons/email-blue.svg" alt="email" width={24} height={24} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-montserrat font-normal md:font-bold text-[16px] md:text-[14px] text-[#191C1E] md:text-[#141B2B]">
                      Email Support
                    </h3>
                    <p className="font-montserrat font-normal text-[12px] md:text-[14px] text-[#45464D] md:text-[#42474F]">
                      Response time: ~24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Image */}
              <div className="relative w-full aspect-[1.5/1] rounded-[4px] overflow-hidden shadow-[0px_4px_10px_rgba(0,0,0,0.1)] mt-2">
                <Image
                  src="/images/path1.png"
                  alt="Support team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Accordion Content (Right on desktop, First on mobile) */}
          <div className="order-1 md:order-2 w-full md:w-[65%] lg:w-[70%] flex flex-col gap-10">
            {filteredFaqs.map((cat, catIdx) => (
              <div key={catIdx} className="flex flex-col gap-6">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="hidden md:flex w-10 h-10 items-center justify-center">
                    <Image src={cat.icon} alt={cat.category} width={24} height={24} />
                  </div>
                  <h2 className="font-poppins font-semibold md:font-bold text-[24px] leading-[33.6px] md:leading-[31.2px] text-black md:text-[#00355F]">
                    {cat.categoryLabel}
                  </h2>
                </div>

                {/* Accordion List */}
                <div className="flex flex-col gap-4">
                  {cat.questions.map((item, qIdx) => {
                    const id = `${cat.category}-${qIdx}`;
                    const isOpen = openIndex === id;
                    return (
                      <div
                        key={qIdx}
                        className="bg-white rounded-[12px] md:rounded-[4px] border border-[#C6C6CD] md:border-[#E5E5E5] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] md:shadow-none overflow-hidden"
                      >
                        <button
                          onClick={() => toggleAccordion(id)}
                          className="w-full p-4 md:p-6 flex items-center justify-between text-left"
                        >
                          <span className="font-montserrat font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[28.8px] text-[#191C1E] md:text-[#001B40]">
                            {item.q}
                          </span>
                          <svg
                            className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                            viewBox="0 0 20 20" fill="none"
                          >
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="#001B40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 md:px-6 md:pb-6 font-montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#45464D] md:text-[#525252]">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
