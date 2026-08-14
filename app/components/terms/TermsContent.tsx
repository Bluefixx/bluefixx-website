"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms", num: "01" },
  { id: "use", title: "2. Use of Platform", num: "02" },
  { id: "responsibilities", title: "3. User Responsibilities", num: "03" },
  { id: "payment", title: "4. Payment Terms", num: "04" },
  { id: "privacy", title: "5. Privacy & Data", num: "05" },
  { id: "liability", title: "6. Limitation of Liability", num: "06" },
];

export default function TermsContent() {
  const [activeSection, setActiveSection] = useState("acceptance");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="w-full bg-[#F7F9FB] py-[64px] md:py-[96px] px-6 lg:px-[64px]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Left Side: Navigation (Desktop Only) */}
        <div className="hidden lg:flex lg:w-1/4 flex-col gap-6 sticky top-24 h-fit">
          <h2 className="font-poppins font-bold text-[24px] leading-[31.2px] tracking-[0px] text-[#00355F] py-3">
            Contents
          </h2>
          <nav className="flex flex-col gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`pl-4 border-l-2 py-1 font-montserrat text-[16px] transition-colors ${
                  activeSection === section.id
                    ? "border-[#001B40] text-[#001B40] font-semibold"
                    : "border-transparent text-[#525252] hover:text-[#001B40]"
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="lg:hidden w-full mb-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between bg-[#F1F3F9] border border-[#C2C7D1] rounded-[4px] p-4 font-poppins font-semibold text-[14px] text-[#001B40]"
          >
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5H17M3 10H17M3 15H17" stroke="#001B40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Table of Contents
            </div>
            <svg
              className={`transition-transform ${isMobileMenuOpen ? "rotate-180" : ""}`}
              width="20" height="20" viewBox="0 0 20 20" fill="none"
            >
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#001B40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {isMobileMenuOpen && (
            <div className="mt-2 bg-white border border-[#C2C7D1] rounded-[4px] overflow-hidden shadow-lg">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block p-4 font-montserrat text-[14px] text-[#525252] hover:bg-[#F1F3F9] border-b border-[#C2C7D1] last:border-b-0"
                >
                  {section.title}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Main Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-8 md:gap-0 bg-transparent md:bg-white md:border md:border-[#C2C7D1] md:rounded-[8px] md:shadow-sm">
          
          {/* Section 01: Acceptance of Terms */}
          <div id="acceptance" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12 md:border-b md:border-[#C2C7D1]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#E1E8FD] md:bg-[#E1E8FD] p-1 md:p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">01</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">Acceptance of Terms</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  By accessing or using the BlueFixx Marketplace website, mobile application, or any associated services (collectively, the "Platform"), you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and BlueFixx Marketplace.
                </p>
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  If you do not agree to all of these terms, you may not access or use the Platform. We reserve the right to update these terms at any time, and your continued use of the Platform after such changes signifies your acceptance of the new terms.
                </p>
              </div>
            </div>
          </div>

          {/* Section 02: Use of Platform */}
          <div id="use" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12 md:border-b md:border-[#C2C7D1]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#2170E41A] md:bg-[#E1E8FD] p-2 md:p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">02</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">Use of Platform</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  BlueFixx provides a marketplace connecting customers with service professionals ("Workers") and providing opportunities for "Talents" through apprenticeship programs. The Platform facilitates service discovery, communication, and secure payments.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Image src="/icons/check.svg" alt="check" width={20} height={20} className="mt-1" />
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                      <span className="font-bold">Eligibility:</span> You must be at least 18 years old to create an account and use the Platform.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image src="/icons/check.svg" alt="check" width={20} height={20} className="mt-1" />
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                      <span className="font-bold">Account Security:</span> You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image src="/icons/check.svg" alt="check" width={20} height={20} className="mt-1" />
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                      <span className="font-bold">License:</span> We grant you a limited, non-exclusive, non-transferable license to access the Platform for personal or business service procurement purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 03: User Responsibilities */}
          <div id="responsibilities" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12 md:border-b md:border-[#C2C7D1]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#2170E41A] md:bg-[#E1E8FD] p-2 md:p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">03</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">User Responsibilities</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  Users of the Platform agree to act with integrity and professionalism at all times. This includes but is not limited to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#D8E2FF4D] md:bg-[#E9EDFF] border-none md:border md:border-[#C2C7D1] rounded-[12px] md:rounded-[4px] p-4 flex flex-col gap-2">
                    <h4 className="font-montserrat font-medium md:font-normal text-[16px] text-[#001B40]">For Customers</h4>
                    <p className="font-montserrat text-[12px] md:text-[14px] text-[#45464D] md:text-[#525252]">
                      Providing accurate job descriptions, ensuring a safe work environment for professionals, and paying for services rendered in a timely manner.
                    </p>
                  </div>
                  <div className="bg-[#D8E2FF4D] md:bg-[#E9EDFF] border-none md:border md:border-[#C2C7D1] rounded-[12px] md:rounded-[4px] p-4 flex flex-col gap-2">
                    <h4 className="font-montserrat font-medium md:font-normal text-[16px] text-[#001B40]">For Workers</h4>
                    <p className="font-montserrat text-[12px] md:text-[14px] text-[#45464D] md:text-[#525252]">
                      Maintaining valid licenses/certifications, providing truthful expertise descriptions, and fulfilling service obligations to the standard agreed upon.
                    </p>
                  </div>
                </div>
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  Users are strictly prohibited from bypassing the Platform's payment systems or soliciting off-platform transactions for services originally discovered through BlueFixx.
                </p>
              </div>
            </div>
          </div>

          {/* Section 04: Payment Terms */}
          <div id="payment" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12 md:border-b md:border-[#C2C7D1]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#2170E41A] md:bg-[#E1E8FD] p-2 md:p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">04</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">Payment Terms</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  Payments on BlueFixx are handled through our secure escrow-style system. Funds are typically secured upon booking and released to the Worker once the Customer confirms satisfactory completion.
                </p>
                <div className="flex flex-col gap-4">
                  {/* Mobile Card Style */}
                  <div className="md:hidden flex flex-col gap-4 bg-[#F2F4F6] border-l-4 border-[#001B40] rounded-[8px] p-4">
                    <p className="font-montserrat text-[14px] leading-[20px] text-[#45464D]">
                      "Service Fees: BlueFixx charges a platform fee for facilitating the transaction. These fees are disclosed at the time of booking."
                    </p>
                  </div>
                  {/* Desktop Style */}
                  <div className="hidden md:flex flex-col gap-4">
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#525252]">
                      <span className="font-bold">Service Fees:</span> BlueFixx charges a platform fee for facilitating the transaction. These fees are disclosed at the time of booking.
                    </p>
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#525252]">
                      <span className="font-bold">Refunds:</span> Refund requests are governed by our Dispute Resolution policy. Decisions made by our mediation team are final.
                    </p>
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#525252]">
                      <span className="font-bold">Taxes:</span> Users are responsible for reporting and paying any applicable taxes associated with their earnings or payments on the Platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 05: Privacy & Data */}
          <div id="privacy" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12 md:border-b md:border-[#C2C7D1]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#2170E41A] md:bg-[#E1E8FD] p-2 md:p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">05</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">Privacy & Data</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  Your privacy is paramount. By using BlueFixx, you agree to our Privacy Policy, which details how we collect, use, and share your information. We use data to improve platform matching, process payments, and ensure community safety.
                </p>
                <div className="bg-[#2170E40D] md:bg-[#EAF3FF] border-none md:border-l-4 md:border-[#001B40] rounded-[12px] md:rounded-[4px] p-4 md:p-6 flex items-center md:items-start gap-3">
                  <div className="md:hidden flex-shrink-0">
                    <Image src="/icons/privacy.svg" alt="privacy" width={16} height={20} />
                  </div>
                  <p className="font-montserrat italic md:italic text-[12px] md:text-[16px] leading-[16px] md:leading-[24px] text-[#001B40] md:text-[#525252] font-semibold md:font-normal">
                    "We never sell your personal contact information to third-party advertisers. Your data is used solely to facilitate your success on the BlueFixx marketplace."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 06: Limitation of Liability */}
          <div id="liability" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#2170E41A] md:bg-[#E1E8FD] p-2 md:p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">06</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">Limitation of Liability</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  BlueFixx Marketplace is a facilitator and is not an employer of Workers. We are not liable for the quality of work performed by independent contractors, nor are we liable for any indirect, incidental, or consequential damages arising from your use of the Platform.
                </p>
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  While we conduct background checks, we encourage users to exercise their own due diligence when hiring or working through the Platform.
                </p>
              </div>
            </div>
            
            {/* Footer Divider & Questions Section */}
            <div className="hidden md:block w-full h-[1px] bg-[#C2C7D1] mt-8 mb-8" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="hidden md:block font-montserrat font-bold text-[14px] leading-[16.8px] text-[#525252]">
                Have questions about these terms?
              </p>
              <Link href="/contact" className="w-full md:w-auto">
                <Button className="w-full md:w-auto bg-[#001B40] text-white py-4 px-8 rounded-[8px] h-auto font-poppins font-semibold text-[14px]">
                  Contact Legal Support
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
