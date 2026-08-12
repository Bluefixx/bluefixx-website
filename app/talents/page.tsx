import React from "react";
import TalentHero from "../components/talents/TalentHero";
import WhyChooseTalents from "../components/talents/WhyChooseTalents";

export default function TalentsPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <TalentHero />
      <WhyChooseTalents />
    </div>
  );
}
