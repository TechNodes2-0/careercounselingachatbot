import React from "react";
import { connectToDatabase } from "../database/index";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/shared/HeroSection";
import Footer from "../components/shared/Footer";
function page() {
  connectToDatabase();

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default page;
