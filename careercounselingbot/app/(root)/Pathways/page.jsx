import React from "react";
import Link from "next/link";

const HeroSection = async () => {
  return (
    <div className="bg-[#1a1d23] min-h-screen text-white">
      <header className="py-20 text-center">
        <h1 className="mb-4 text-5xl font-bold text-gradient">
          Career Pathways
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-center">
          Explore the career roadmaps for various roles in software engineering
          and technology.
        </p>
      </header>
      <section className="py-20">
        <div className="max-w-5xl px-8 mx-auto">
          <h2 className="mb-8 text-2xl font-semibold text-cyan-500">
            Career Pathways After 10th Std
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <Link
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="/Pathways/ComputerScience"
            >
              Diploma in Engineering
            </Link>
            <Link
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              11th and 12th Science/Commerce/Arts
            </Link>
            <Link
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              Diploma in Computer Applications (DCA)
            </Link>
            <Link
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              Diploma in Animation and Multimedia
            </Link>
            <Link
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              Diploma in Interior Design
            </Link>
            <Link
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              Diploma in Hotel Management
            </Link>
            <Link
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              Diploma in Information Technology
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-5xl px-8 mx-auto">
          <h2 className="mb-8 text-2xl font-semibold text-cyan-500">
            Career Pathways After 11th and 12th Std
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <Link
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="/Pathways/ComputerScience"
            >
              Computer Science
            </Link>
            <Link
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              Engineering (B.E/B.Tech)
            </Link>
            <Link
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              B.Sc. (Bachelor of Science)
            </Link>
            <Link
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              BCA (Bachelor of Computer Applications)
            </Link>
            <Link
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              B.Com (Bachelor of Commerce)
            </Link>
            <Link
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              B.A. (Bachelor of Arts)
            </Link>
            <Link
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              BBA (Bachelor of Business Administration)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
