import React from "react";
import TermsHero from "../components/terms/TermsHero";
import TermsContent from "../components/terms/TermsContent";
import GetStarted from "../components/GetStarted";

export default function TermsPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <TermsHero />
      <TermsContent />
      <GetStarted />
    </div>
  );
}
