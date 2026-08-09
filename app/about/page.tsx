import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 px-6 text-center">
      <h1 className="font-poppins font-bold text-4xl md:text-5xl text-[#001B40] mb-6">About Us</h1>
      <p className="font-montserrat text-lg text-[#4C4546] max-w-2xl">
        Discover the mission and vision behind BlueFixx.
      </p>
    </div>
  );
}
