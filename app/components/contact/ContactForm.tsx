import React from "react";
import Input, { TextArea } from "./Input";
import Button from "./Button";

export default function ContactForm() {
  return (
    <div className="w-full bg-white rounded-[8px] border border-[#C4C6CF4D] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-6 md:p-[48px_48px_195px_48px] flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] leading-[30px] md:leading-[38px] tracking-[0px] text-[#191C1E]">
          Send us a message
        </h2>
        <p className="md:hidden font-montserrat font-normal text-[14px] leading-[20px] text-[#44474E]">
          We're here to help you with any questions or support you may need.
        </p>
      </div>

      <form className="flex flex-col gap-6 md:gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            id="full-name"
            label="Full Name"
            placeholder="John Doe"
            required
          />
          <Input
            id="email"
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="subject"
            className="block font-montserrat font-semibold md:font-normal text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] tracking-[0.28px] md:tracking-[0px] text-[#45464D] md:text-[#434655] mb-2"
          >
            Subject
          </label>
          <div className="relative w-full">
            <select
              id="subject"
              className="w-full bg-[#FAFAFA] border border-[#C3C6D7] rounded-[8px] py-[22px] px-[24px] text-[16px] font-montserrat text-[#131B2E] appearance-none focus:outline-none focus:border-[#001B40] transition-colors"
              defaultValue="General Inquiry"
            >
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Partnership</option>
              <option>Others</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#44474E" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <TextArea
          id="message"
          label="Message"
          placeholder="How can we help you?"
          required
        />

        <div className="w-full md:w-auto">
          <Button
            type="submit"
            variant="solid"
            className="w-full md:w-auto bg-[#001B40] text-white py-[16px] md:py-[22px] px-[32px] md:px-[48px] rounded-[8px] h-auto font-poppins font-semibold text-[16px]"
          >
            Send Us a Message
          </Button>
        </div>
      </form>
    </div>
  );
}
