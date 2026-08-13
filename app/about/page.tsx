import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutFoundation from "../components/about/AboutFoundation";
import BluefixxEdge from "../components/about/BluefixxEdge";
import OurStory from "../components/about/OurStory";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <AboutHero />
      <AboutFoundation />
      <BluefixxEdge />
      <OurStory />
    </div>
  );
}
