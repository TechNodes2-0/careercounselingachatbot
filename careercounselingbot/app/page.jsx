import React from "react";
import { connectToDatabase } from "../lib/mongoose";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/shared/HeroSection";
function page() {
  connectToDatabase();

  return (
    <div className="">
      <Navbar />
      {/* <h2 className="font-bold text-sky-500"> AI chatbot</h2> */}
      <HeroSection />
    </div>
  );
}

export default page;
