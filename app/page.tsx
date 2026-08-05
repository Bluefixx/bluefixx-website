import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex-grow flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-100/50 to-white pt-20 pb-24 md:pt-32 md:pb-40 px-6">
        {/* Background Decorative Blurs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary-100/60 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary-100/80 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8 z-10">
            <span className="text-label tracking-[1px] uppercase bg-primary-100 text-primary-900 px-3.5 py-1.5 rounded-full font-bold">
              Launching Soon in 2026
            </span>
            <h1 className="text-h1 text-[#001B40] tracking-tight">
              Linking Skilled Hands With Great Opportunities
            </h1>
            <p className="text-s1 text-neutral-600 max-w-xl">
              BlueFixx is the leading marketplace connecting certified blue-collar professionals with local job placements and trusted homeowners. Built to empower trade expertise.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/download"
                className="btn-large flex w-full sm:w-auto items-center justify-center gap-2 bg-primary-900 text-white hover:bg-primary-800 transition-all duration-300 px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/workers"
                className="btn-large flex w-full sm:w-auto items-center justify-center border-2 border-primary-900 text-primary-900 hover:bg-primary-100 transition-all duration-300 px-8 py-3.5 rounded-lg"
              >
                Hire Talents
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4 border-t border-neutral-200 w-full">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-300 flex items-center justify-center text-xs font-bold text-neutral-700">W1</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-400 flex items-center justify-center text-xs font-bold text-neutral-700">W2</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-500 flex items-center justify-center text-xs font-bold text-neutral-700">W3</div>
              </div>
              <p className="text-c2 text-neutral-500">
                Join <span className="font-semibold text-primary-900">10,000+</span> blue-collar professionals on the waitlist.
              </p>
            </div>
          </div>

          {/* Right Mockup/Illustration Column */}
          <div className="lg:col-span-5 flex justify-center z-10">
            <div className="relative w-full max-w-[340px] aspect-[9/18] bg-[#001B40] rounded-[48px] p-3 shadow-2xl border-4 border-neutral-800">
              {/* Speaker / Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-neutral-800 rounded" />
              </div>

              {/* App Screen Placeholder */}
              <div className="w-full h-full bg-neutral-100 rounded-[38px] overflow-hidden flex flex-col justify-between p-6 pt-16 relative">
                <div className="flex flex-col gap-4">
                  {/* Mock Navbar */}
                  <div className="flex justify-between items-center">
                    <span className="text-c3 font-bold text-[#102A43]">BlueFixx App</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-200" />
                  </div>
                  {/* Mock Card */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200/50 flex flex-col gap-2">
                    <span className="text-c3 text-neutral-400">Available Job Near You</span>
                    <span className="text-b4 font-semibold text-[#001B40]">Professional Plumber</span>
                    <div className="flex justify-between items-center text-c2 pt-2 border-t border-neutral-100">
                      <span className="text-green-200 font-bold">$45/hr</span>
                      <span className="text-neutral-400">1.2 miles</span>
                    </div>
                  </div>
                </div>

                {/* Mock CTA */}
                <div className="flex flex-col gap-2">
                  <div className="bg-primary-900 text-white py-3 rounded-lg text-center font-semibold text-xs cursor-pointer shadow-md hover:bg-primary-800 transition-colors">
                    Accept Opportunity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillar Grid Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <h2 className="text-h2 text-primary-900">Designed to Empower the Trades</h2>
            <p className="text-b1 text-neutral-600">
              Connecting qualified trade professionals with businesses and homeowners looking for specialized local expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-neutral-200 hover:bg-neutral-300 transition-colors rounded-2xl flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-h4 text-[#001B40]">Verified Credentials</h3>
              <p className="text-b3 text-neutral-600">
                Every trade partner on BlueFixx undergoes strict identity and certification verification to maintain premium quality.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-neutral-200 hover:bg-neutral-300 transition-colors rounded-2xl flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-h4 text-[#001B40]">Geo-Located Jobs</h3>
              <p className="text-b3 text-neutral-600">
                Instantly browse, claim, or post job listings pinned to precise coordinates to minimize travel times and fuel expenses.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-neutral-200 hover:bg-neutral-300 transition-colors rounded-2xl flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h.007m-.007 3h.007m-.007 3h.007m3-6h.008m-.008 3h.008m-.008 3h.008m-6 6h15M3 3h18v18H3V3z" />
                </svg>
              </div>
              <h3 className="text-h4 text-[#001B40]">Digital Work Records</h3>
              <p className="text-b3 text-neutral-600">
                Earn customer reviews, track job completion times, and construct a portable, verified work record to secure higher-paying roles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
