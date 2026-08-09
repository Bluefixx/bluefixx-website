import React from "react";
import WorkerHero from "../components/workers/WorkerHero";
import WorkerBenefits from "../components/workers/WorkerBenefits";
import MembershipPath from "../components/workers/MembershipPath";

export default function WorkersPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <WorkerHero />
      <WorkerBenefits />
      <MembershipPath />
    </div>
  );
}
