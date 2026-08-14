import React from "react";
import Image from "next/image";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: string;
  containerClassName?: string;
}

export default function Input({
  label,
  icon,
  id,
  className = "",
  containerClassName = "",
  ...props
}: InputProps) {
  return (
    <div className={`flex flex-col w-full ${containerClassName}`}>
      <label
        htmlFor={id}
        className="block font-montserrat font-semibold md:font-normal text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] tracking-[0.28px] md:tracking-[0px] text-[#45464D] md:text-[#434655] mb-2"
      >
        {label}
      </label>
      <div className="relative w-full">
        {icon && (
          <span className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
            <Image
              src={icon}
              alt={`${label} icon`}
              width={20}
              height={20}
              className="opacity-50"
            />
          </span>
        )}
        <input
          id={id}
          className={`w-full bg-[#FAFAFA] border border-[#C3C6D7] rounded-[8px] py-[22px] ${
            icon ? "pl-[60px]" : "px-[24px]"
          } pr-[24px] text-[16px] font-montserrat text-[#131B2E] placeholder-[#73768680] leading-[100%] tracking-[0px] focus:outline-none focus:border-[#001B40] transition-colors ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  containerClassName?: string;
}

export function TextArea({
  label,
  id,
  className = "",
  containerClassName = "",
  ...props
}: TextAreaProps) {
  return (
    <div className={`flex flex-col w-full ${containerClassName}`}>
      <label
        htmlFor={id}
        className="block font-montserrat font-semibold md:font-normal text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] tracking-[0.28px] md:tracking-[0px] text-[#45464D] md:text-[#434655] mb-2"
      >
        {label}
      </label>
      <textarea
        id={id}
        className={`w-full bg-[#FAFAFA] border border-[#C3C6D7] rounded-[8px] py-[22px] px-[24px] text-[16px] font-montserrat text-[#131B2E] placeholder-[#73768680] leading-[1.5] tracking-[0px] focus:outline-none focus:border-[#001B40] transition-colors min-h-[150px] resize-none ${className}`}
        {...props}
      />
    </div>
  );
}
