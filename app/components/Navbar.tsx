"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Workers", href: "/workers" },
    { label: "Customers", href: "/customers" },
    { label: "Talents", href: "/talents" },
  ];

  const mobileNavLinks = [
    { label: "For workers", href: "/workers" },
    { label: "For customers", href: "/customers" },
    { label: "For talents", href: "/talents" },
    { label: "How it works", href: "/how-it-works" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-1 md:py-[1px] md:px-6 lg:px-[64px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/icons/logoMain.svg"
            alt="BlueFixx Logo"
            width={60}
            height={76}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-sans text-[14px] leading-[20px] font-normal transition-all duration-200 pb-1 ${isActive
                  ? "text-black border-b-[2px] border-black font-medium"
                  : "text-neutral-600 hover:text-black"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-2 lg:gap-4">
          <Link href="/signin">
            <Button variant="outlined" size="large">
              Sign in
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              variant="solid"
              size="large"
              className="gap-2 group"
            >
              Download App
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-primary-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close SVG
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger SVG
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white border-b border-neutral-300 lg:hidden flex flex-col px-6 py-8 gap-6 shadow-lg animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-5">
            {mobileNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-[14px] leading-[16px] font-semibold text-[#102A43] hover:opacity-80 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-4">
            <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full">
              <Button variant="solid" size="giant" className="w-full">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
