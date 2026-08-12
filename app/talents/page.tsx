import React from "react";
import TalentHero from "../components/talents/TalentHero";
import WhyChooseTalents from "../components/talents/WhyChooseTalents";
import PathToMastery from "../components/talents/PathToMastery";
import TalentGetStarted from "../components/talents/TalentGetStarted";

export default function TalentsPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <TalentHero />
      <WhyChooseTalents />
      <PathToMastery />
      <TalentGetStarted />
    </div>
  );
}
