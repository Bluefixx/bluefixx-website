import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { name: "facebook", icon: "/icons/facebook.svg", href: "https://facebook.com" },
    { name: "instagram", icon: "/icons/instagram.svg", href: "https://instagram.com" },
    { name: "linkedin", icon: "/icons/linkedin.svg", href: "https://linkedin.com" },
    { name: "x", icon: "/icons/x.svg", href: "https://x.com" },
  ];

  const platformLinks = [
    { label: "Find Workers", href: "/workers" },
    { label: "List Business", href: "/list-business" },
    { label: "Apprenticeships", href: "/apprenticeships" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookie Settings", href: "/cookies" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "/help" },
    { label: "Safe Hiring Guide", href: "/safe-hiring" },
    { label: "Trust & Safety", href: "/trust" },
  ];

  return (
    <footer className="w-full bg-white border-t border-[#C4C5DA] font-sans pt-12 md:pt-16 pb-8">
      {/* Top section: logo/intro and link columns */}
      <div className="mx-auto px-6 md:px-[64px] flex flex-col md:flex-row justify-between gap-12 md:gap-8 pb-12">

        {/* Brand Column */}
        <div className="flex flex-col gap-6 max-w-sm">
          <Link href="/">
            <Image
              src="/icons/logo.svg"
              alt="BlueFixx"
              width={368}
              height={42}
              className="object-contain"
            />
          </Link>
          <p className="text-[16px] leading-[24px] font-normal font-sans text-[#444657] md:text-[#444657] max-md:text-[#45464D]">
            The leading marketplace for global trade expertise and reliable home maintenance solutions.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-85 transition-opacity"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Links Columns Container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Platform */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] leading-[14px] font-semibold text-[#151C27] max-md:text-black tracking-[0.7px] max-md:tracking-[0.28px]">
              Platform
            </h4>
            <div className="flex flex-col gap-3">
              {platformLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[14px] leading-[20px] font-normal text-[#444657] hover:text-[#001B40] underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] leading-[14px] font-semibold text-[#151C27] max-md:text-black tracking-[0.7px] max-md:tracking-[0.28px]">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[14px] leading-[20px] font-normal text-[#444657] hover:text-[#001B40] underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] leading-[14px] font-semibold text-[#151C27] max-md:text-black tracking-[0.7px] max-md:tracking-[0.28px]">
              Legal
            </h4>
            <div className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[14px] leading-[20px] font-normal text-[#444657] hover:text-[#001B40] underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support (Desktop Only) */}
          <div className="hidden md:flex flex-col gap-4">
            <h4 className="text-[14px] leading-[14px] font-semibold text-[#151C27] tracking-[0.7px]">
              Support
            </h4>
            <div className="flex flex-col gap-3">
              {supportLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[14px] leading-[20px] font-normal text-[#444657] hover:text-[#001B40] underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Download Section (Responsive Alignment) */}
      <div className="max-w-7xl mx-auto px-6 md:px-[64px] flex flex-col items-start md:items-end gap-3 pb-8">
        <span className="text-[12px] leading-[16px] font-medium text-[#001B40] tracking-normal uppercase">
          Download App
        </span>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:opacity-90 transition-opacity">
            <Image
              src="/icons/playstore.svg"
              alt="Get it on Google Play"
              width={135}
              height={40}
              className="h-10 w-auto"
            />
          </a>
          <a href="#" className="hover:opacity-90 transition-opacity">
            <Image
              src="/icons/appstore.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </a>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="w-full border-t border-[#C4C5DA] pt-6">
        <div className="max-w-7xl mx-auto px-6 md:px-[64px] flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-[14px] text-center md:text-left font-sans font-semibold md:font-semibold max-md:font-normal text-[#444657] max-md:text-[#76777D] leading-[14px] max-md:leading-[21px] tracking-[0.7px] max-md:tracking-[0px]">
            © 2026 BlueFixx Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
