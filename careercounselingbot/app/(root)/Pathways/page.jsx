import React from "react";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="bg-[#1a1d23] min-h-screen text-white">
      <header className="py-20 text-center">
        {/* <div className="bg-[#161b22] py-2 px-4 inline-block rounded-md">
          <span className="text-blue-500">NEW</span> Announcing roadmaps for
          teams.{" "}
          <Link className="underline" href="#">
            Learn more!
          </Link>
        </div> */}
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
            Role Career Roadmaps
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <a
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              Frontend
            </a>
            <a
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              Backend
            </a>
            <a
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
              href="#"
            >
              DevOps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
