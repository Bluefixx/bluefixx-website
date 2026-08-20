import React from "react";

type ButtonProps = {
  variant?: "solid" | "outlined" | "white";
  size?: "giant" | "large" | "medium" | "small" | "tiny";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  variant = "solid",
  size = "medium",
  children,
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  // Sizes correspond to classes defined in globals.css
  const sizeClasses = {
    giant: "btn-giant px-6 py-3 rounded-lg h-[54px]",
    large: "btn-large px-5 py-2.5 rounded-lg h-[44px]",
    medium: "btn-medium px-4 py-2 rounded-md h-[38px]",
    small: "btn-small px-3 py-1.5 rounded-md h-[32px]",
    tiny: "btn-tiny px-2 py-1 rounded-sm h-[26px]",
  };

  // Variants as 
  const variantClasses = {
    solid: "bg-primary-900 text-white hover:bg-primary-800 border border-transparent disabled:bg-primary-200",
    outlined: "bg-transparent text-primary-900 border-[2px] border-primary-900 hover:bg-primary-100 disabled:border-primary-200 disabled:text-primary-200",
    white: "bg-white !text-black hover:bg-white/90 border border-transparent",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center font-sans font-semibold transition-all duration-200 select-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
