"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/signup" || pathname === "/signin";

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main className="flex-1 flex flex-col">{children}</main>
      {!isAuthPage && <Footer />}
    </>
  );
}
