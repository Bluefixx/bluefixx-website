import React from "react";
import FAQHero from "../components/faq/FAQHero";
import FAQContent from "../components/faq/FAQContent";
import GetStarted from "../components/GetStarted";

export default function FAQPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <FAQHero />
      <FAQContent />
      <GetStarted />
    </div>
  );
}
