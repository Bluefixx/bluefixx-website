import React from "react";
import PrivacyHero from "../components/privacy/PrivacyHero";
import PrivacyContent from "../components/privacy/PrivacyContent";
import GetStarted from "../components/GetStarted";

export default function PrivacyPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <PrivacyHero />
      <PrivacyContent />
      <GetStarted />
    </div>
  );
}
