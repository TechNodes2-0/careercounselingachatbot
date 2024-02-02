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
      {/* <h2 className="font-bold text-sky-500"> AI chatbot</h2> */}
      <HeroSection />
      <Footer />
    </div>
  );
}

export default page;
