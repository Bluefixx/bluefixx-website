import React from "react";
import CustomerHero from "../components/customers/CustomerHero";
import WhyChooseCustomers from "../components/customers/WhyChooseCustomers";
import HowItWorks from "../components/customers/HowItWorks";
import SuccessStories from "../components/customers/SuccessStories";
import CustomerGetStarted from "../components/customers/CustomerGetStarted";

export default function CustomersPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <CustomerHero />
      <WhyChooseCustomers />
      <HowItWorks />
      <SuccessStories />
      <CustomerGetStarted />
    </div>
  );
}
