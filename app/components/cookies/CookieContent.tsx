"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const sections = [
  { id: "what", title: "1. What Are Cookies", num: "01" },
  { id: "how", title: "2. How We Use Cookies", num: "02" },
  { id: "manager", title: "3. Preferences Manager", num: "03" },
  { id: "thirdparty", title: "4. Third-Party Cookies", num: "04" },
  { id: "contact", title: "5. Updates & Contact", num: "05" },
];

export default function CookieContent() {
  const [activeSection, setActiveSection] = useState("what");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cookie states
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    functional: false,
    analytics: false,
    targeting: false,
  });

  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("bluefixx-cookie-consent");
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences((prev) => ({
          ...prev,
          functional: !!parsed.functional,
          analytics: !!parsed.analytics,
          targeting: !!parsed.targeting,
        }));
      }
    } catch (e) {
      console.error("Failed to load cookie preferences", e);
    }
  }, []);

  const handleToggle = (key: "functional" | "analytics" | "targeting") => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    if (saveStatus === "saved") {
      setSaveStatus("idle");
    }
  };

  const handleSave = () => {
    setSaveStatus("saving");
    try {
      localStorage.setItem("bluefixx-cookie-consent", JSON.stringify(preferences));
      setTimeout(() => {
        setSaveStatus("saved");
      }, 600);
    } catch (e) {
      console.error("Failed to save cookie preferences", e);
      setSaveStatus("idle");
    }
  };

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

        {/*Mobile Dropdown Menu*/}
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

          {/* Section 01: What Are Cookies */}
          <div id="what" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12 md:border-b md:border-[#C2C7D1]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#E1E8FD] p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">01</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">What Are Cookies</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit web pages. They are widely used to make websites work, enable security features, remember user preferences, and provide diagnostic performance reports.
                </p>
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  Alongside cookies, we may use local storage, session storage, or web beacons to retrieve info and ensure a high-performing user flow across the BlueFixx Marketplace.
                </p>
              </div>
            </div>
          </div>

          {/* Section 02: How We Use Cookies */}
          <div id="how" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12 md:border-b md:border-[#C2C7D1]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#E1E8FD] p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">02</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">How We Use Cookies</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  We categorize the cookies and storage tokens we deploy into clear functional groups:
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Image src="/icons/check.svg" alt="check" width={20} height={20} className="mt-1" />
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                      <span className="font-bold">Essential:</span> Required for site navigation, secure escrow billing, authentication, and core marketplace functionality. These cannot be disabled.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image src="/icons/check.svg" alt="check" width={20} height={20} className="mt-1" />
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                      <span className="font-bold">Functional:</span> Keep you logged in, save local settings, and preserve search filters during your session.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image src="/icons/check.svg" alt="check" width={20} height={20} className="mt-1" />
                    <p className="font-montserrat text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                      <span className="font-bold">Analytics:</span> Gather aggregated data about which pages are viewed most frequently and help identify layout issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 03: Preferences Manager */}
          <div id="manager" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12 md:border-b md:border-[#C2C7D1]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#E1E8FD] p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">03</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">Preferences Manager</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  Customize your cookie preferences below. These settings will be applied immediately and remembered on your next visit.
                </p>

                {/* Toggles Container */}
                <div className="flex flex-col gap-4 border border-[#C2C7D1] rounded-[8px] p-4 bg-[#F9FAFC]">
                  {/* Essential (Disabled Switch) */}
                  <div className="flex items-center justify-between p-3 border-b border-[#E1E5ED] last:border-b-0">
                    <div className="flex flex-col gap-1 pr-4">
                      <span className="font-montserrat font-bold text-[14px] md:text-[16px] text-[#001B40]">Essential Cookies</span>
                      <span className="font-montserrat text-[12px] text-[#525252]">Required for the platform to function securely.</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-not-allowed">
                      <input type="checkbox" checked disabled className="sr-only peer" />
                      <div className="w-11 h-6 bg-[#001B40] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-disabled:opacity-60"></div>
                    </label>
                  </div>

                  {/* Functional */}
                  <div className="flex items-center justify-between p-3 border-b border-[#E1E5ED] last:border-b-0">
                    <div className="flex flex-col gap-1 pr-4">
                      <span className="font-montserrat font-bold text-[14px] md:text-[16px] text-[#001B40]">Functional Cookies</span>
                      <span className="font-montserrat text-[12px] text-[#525252]">Remember choices you make such as search filters or saved profiles.</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={() => handleToggle("functional")}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-[#C2C7D1] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1563E3]"></div>
                    </label>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center justify-between p-3 border-b border-[#E1E5ED] last:border-b-0">
                    <div className="flex flex-col gap-1 pr-4">
                      <span className="font-montserrat font-bold text-[14px] md:text-[16px] text-[#001B40]">Analytics Cookies</span>
                      <span className="font-montserrat text-[12px] text-[#525252]">Help us measure platform performance and optimize user flows.</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handleToggle("analytics")}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-[#C2C7D1] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1563E3]"></div>
                    </label>
                  </div>

                  {/* Targeting */}
                  <div className="flex items-center justify-between p-3 border-b border-[#E1E5ED] last:border-b-0">
                    <div className="flex flex-col gap-1 pr-4">
                      <span className="font-montserrat font-bold text-[14px] md:text-[16px] text-[#001B40]">Targeting Cookies</span>
                      <span className="font-montserrat text-[12px] text-[#525252]">Used to show relevant promotions or advertisements on partner sites.</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.targeting}
                        onChange={() => handleToggle("targeting")}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-[#C2C7D1] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1563E3]"></div>
                    </label>
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                  <Button
                    onClick={handleSave}
                    className="w-full sm:w-auto bg-[#001B40] text-white py-3 px-8 rounded-[8px] h-auto font-poppins font-semibold text-[14px]"
                    disabled={saveStatus === "saving"}
                  >
                    {saveStatus === "saving" ? "Saving..." : saveStatus === "saved" ? "Saved!" : "Save Preferences"}
                  </Button>
                  {saveStatus === "saved" && (
                    <span className="text-[#10B981] font-montserrat text-[14px] font-medium">
                      ✓ Cookie preferences updated successfully!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Section 04: Third-Party Cookies */}
          <div id="thirdparty" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12 md:border-b md:border-[#C2C7D1]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#E1E8FD] p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">04</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">Third-Party Cookies</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  Some cookies on our site are set by third-party partner integrations. For example, our checkout process utilizes secure integration from Stripe, and traffic metrics are monitored anonymously via Google Analytics.
                </p>
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  We advise reviewing the privacy policies of these third parties to understand their individual data storage practices.
                </p>
              </div>
            </div>
          </div>

          {/* Section 05: Updates & Contact */}
          <div id="contact" className="bg-white rounded-[12px] md:rounded-none border border-[#C2C7D1] md:border-none p-6 md:p-12 flex flex-col gap-6 md:gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#E1E8FD] p-1 rounded-[8px] md:rounded-[12px] w-8 h-8 flex items-center justify-center">
                  <span className="font-montserrat font-bold md:font-normal text-[16px] text-[#001B40]">05</span>
                </div>
                <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-[#001B40]">Updates & Contact</h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#45464D] md:text-[#525252]">
                  This Cookie Policy may be updated periodically to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. The date at the top of the policy will show when it was last modified.
                </p>
              </div>
            </div>

            <div className="hidden md:block w-full h-[1px] bg-[#C2C7D1] mt-8 mb-8" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="hidden md:block font-montserrat font-bold text-[14px] leading-[16.8px] text-[#525252]">
                Have questions about cookie settings?
              </p>
              <Link href="/contact" className="w-full md:w-auto">
                <Button className="w-full md:w-auto bg-[#001B40] text-white py-4 px-8 rounded-[8px] h-auto font-poppins font-semibold text-[14px]">
                  Contact Security Team
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
