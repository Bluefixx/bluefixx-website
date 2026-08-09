import React from "react";
import FAQ from "../components/FAQ";

export default function FAQPage() {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center pt-20 px-6 text-center">
        <h1 className="font-poppins font-bold text-4xl md:text-5xl text-[#001B40] mb-6">Frequently Asked Questions</h1>
        <p className="font-montserrat text-lg text-[#4C4546] max-w-2xl">
          Everything you need to know about BlueFixx.
        </p>
      </div>
      <FAQ />
    </div>
  );
}
