import React from "react";
import Link from "next/link";
import Button from "./components/Button";

export default function NotFound() {
  return (
    <div className="w-full flex-grow flex flex-col bg-[#000D1D] relative overflow-hidden min-h-[70vh] items-center justify-center py-20 px-6">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-primary-600/10 blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[200px] h-[200px] rounded-full bg-secondary-600/10 blur-[60px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Large 404 Heading */}
        <h1 className="font-poppins font-extrabold text-[100px] md:text-[150px] leading-none tracking-tighter bg-gradient-to-r from-primary-200 via-primary-400 to-secondary-300 bg-clip-text text-transparent select-none animate-pulse">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] leading-[31px] md:leading-[40px] text-white mt-4 md:mt-6">
          Page Not Found
        </h2>

        {/* Message Description */}
        <p className="font-sans font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-neutral-400 max-w-md mt-4">
          Oops! The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto">
          <Link href="/" className="w-full sm:w-auto">
            <Button
              id="notfound-btn-home"
              variant="white"
              size="large"
              className="w-full sm:min-w-[180px]"
            >
              Go Back Home
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              id="notfound-btn-support"
              variant="outlined"
              size="large"
              className="w-full sm:min-w-[180px] border-white text-white hover:bg-white/10"
            >
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
