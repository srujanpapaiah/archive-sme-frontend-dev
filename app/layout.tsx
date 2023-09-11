import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "PWSkills SME Dashboard",
  description: "A unified dashboard for PWSkills SME's",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />

      <div id="root">{children}</div>

      <Footer />
    </html>
  );
}
