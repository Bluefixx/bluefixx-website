import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutFoundation from "../components/about/AboutFoundation";
import BluefixxEdge from "../components/about/BluefixxEdge";
import OurStory from "../components/about/OurStory";
import Leadership from "../components/about/Leadership";
import TalentGetStarted from "../components/talents/TalentGetStarted";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <AboutHero />
      <AboutFoundation />
      <BluefixxEdge />
      <OurStory />
      <Leadership />
      <TalentGetStarted />
    </div>
  );
}
