"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const sections = [
  { id: "collection", title: "1. Collection of Information", num: "01" },
  { id: "use", title: "2. Use of Information", num: "02" },
  { id: "sharing", title: "3. Sharing of Information", num: "03" },
  { id: "security", title: "4. Data Security", num: "04" },
  { id: "rights", title: "5. Your Rights & Choices", num: "05" },
  { id: "updates", title: "6. Updates & Contact", num: "06" },
];

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState("collection");
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
                className={`pl-4 border-l-2 py-1 font-montserrat text-[16px] transition-colors ${activeSection === section.id
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
                <path d="M3 5H17M3 10H17M3 15H17" stroke="#001B40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Table of Contents
            </div>
            <svg
              className={`transition-transform ${isMobileMenuOpen ? "rotate-180" : ""}`}
              width="20" height="20" viewBox="0 0 20 20" fill="none"
            >
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#001B40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

          {/* Section 01: Collection of Information */}
          <div id="collection" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12 md:border-b md:border-[#C2C7D1]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#E1E8FD] p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">01</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">Collection of Information</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  We collect personal and non-personal information that you provide to us directly when creating an account, updating your profile, using our messaging systems, or making payments on the Platform.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Image src="/icons/check.svg" alt="check" width={20} height={20} className="mt-1" />
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                      <span className="font-bold">Account Registration:</span> Name, email address, phone number, and verification documents (like government-issued ID for professional workers).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image src="/icons/check.svg" alt="check" width={20} height={20} className="mt-1" />
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                      <span className="font-bold">Profile Details:</span> Profile picture, skills, location, work history, certification, and portfolio items.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image src="/icons/check.svg" alt="check" width={20} height={20} className="mt-1" />
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                      <span className="font-bold">Payment Data:</span> Secure billing information, bank account details, and payment histories collected via our escrow systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 02: Use of Information */}
          <div id="use" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12 md:border-b md:border-[#C2C7D1]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#E1E8FD] p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">02</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">Use of Information</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  BlueFixx uses your data to facilitate marketplace functions, secure transactions, and maintain community trust. We use your details to:
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Image src="/icons/check.svg" alt="check" width={20} height={20} className="mt-1" />
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                      Provide, operate, personalize, and improve our services, matching engines, and recommendation systems.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image src="/icons/check.svg" alt="check" width={20} height={20} className="mt-1" />
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                      Process secure escrow transactions, verify profiles, and prevent fraudulent activity.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image src="/icons/check.svg" alt="check" width={20} height={20} className="mt-1" />
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                      Communicate with you regarding service updates, customer support, and system security alerts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 03: Sharing of Information */}
          <div id="sharing" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12 md:border-b md:border-[#C2C7D1]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#E1E8FD] p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">03</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">Sharing of Information</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  We share your data only to the extent necessary to connect users and deliver requested services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#E9EDFF] border border-[#C2C7D1] rounded-[4px] p-4 flex flex-col gap-2">
                    <h4 className="font-montserrat font-medium text-[16px] text-[#001B40]">Customer & Worker Connections</h4>
                    <p className="font-montserrat text-[12px] md:text-[14px] text-[#45464D] md:text-[#525252]">
                      Sharing contact information, locations, and profile details with matches to execute scheduled jobs.
                    </p>
                  </div>
                  <div className="bg-[#E9EDFF] border border-[#C2C7D1] rounded-[4px] p-4 flex flex-col gap-2">
                    <h4 className="font-montserrat font-medium text-[16px] text-[#001B40]">Service Providers</h4>
                    <p className="font-montserrat text-[12px] md:text-[14px] text-[#45464D] md:text-[#525252]">
                      Sharing transactional data with verified third-party payment gateways, hosting providers, and SMS alert services.
                    </p>
                  </div>
                </div>
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  We will never sell or rent your personal contacts, email addresses, or verification details to external marketing agencies or advertisers.
                </p>
              </div>
            </div>
          </div>

          {/* Section 04: Data Security */}
          <div id="security" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12 md:border-b md:border-[#C2C7D1]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#E1E8FD] p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">04</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">Data Security</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  We implement robust technical and organizational measures to safeguard your personal data against loss, theft, alteration, or unauthorized access.
                </p>
                <div className="bg-[#EAF3FF] border-l-4 border-[#001B40] rounded-[4px] p-4 md:p-6 flex items-start gap-3">
                  <p className="font-montserrat text-[12px] md:text-[16px] leading-[16px] md:leading-[24px] text-[#001B40]">
                    All transaction pathways are encrypted using Secure Sockets Layer (SSL) standards, and database records are kept strictly under modern tokenized security configurations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 05: Your Rights & Choices */}
          <div id="rights" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12 md:border-b md:border-[#C2C7D1]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#E1E8FD] p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">05</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">Your Rights & Choices</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  Depending on your legal jurisdiction, you may have specific rights regarding your personal information. These include the right to:
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Image src="/icons/check.svg" alt="check" width={20} height={20} className="mt-1" />
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                      Access, correct, update, or request deletion of the personal information we hold about you.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image src="/icons/check.svg" alt="check" width={20} height={20} className="mt-1" />
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                      Withdraw your consent to processing at any time, or opt-out of marketing communications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 06: Updates & Contact */}
          <div id="updates" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#E1E8FD] p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">06</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">Updates & Contact</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  We reserve the right to modify this Privacy Policy at any time. Changes will be posted to this page along with an updated "Last Updated" timestamp. We encourage you to check back regularly.
                </p>
              </div>
            </div>

            <div className="hidden md:block w-full h-[1px] bg-[#C2C7D1] mt-8 mb-8" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="hidden md:block font-montserrat font-bold text-[14px] leading-[16.8px] text-[#525252]">
                Have questions about your data privacy?
              </p>
              <Link href="/contact" className="w-full md:w-auto">
                <Button className="w-full md:w-auto bg-[#001B40] text-white py-4 px-8 rounded-[8px] h-auto font-poppins font-semibold text-[14px]">
                  Contact Privacy Officer
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
