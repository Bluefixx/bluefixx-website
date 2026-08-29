import React from "react";
import CookieHero from "../components/cookies/CookieHero";
import CookieContent from "../components/cookies/CookieContent";
import GetStarted from "../components/GetStarted";

export default function CookiesPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <CookieHero />
      <CookieContent />
      <GetStarted />
    </div>
  );
}
