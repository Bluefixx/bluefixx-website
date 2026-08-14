import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";
import TalentGetStarted from "../components/talents/TalentGetStarted";

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Contact Section */}
      <section className="w-full bg-[#F7F9FB] py-[64px] md:py-[96px] px-6 lg:px-[64px]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
          {/* Left Side: Contact Form (50%) */}
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>

          {/* Right Side: Contact Details (50%) */}
          <div className="w-full lg:w-1/2">
            <ContactDetails />
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <TalentGetStarted />
    </div>
  );
}
