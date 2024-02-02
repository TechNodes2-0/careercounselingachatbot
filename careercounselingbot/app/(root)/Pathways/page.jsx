import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#1a1d23] min-h-screen text-white">
      <header className="py-20 text-center">
        {/* <div className="inline-block bg-[#2b2d3a] px-4 py-1 rounded-full text-xs font-semibold mb-4">
          NEW Announcing roadmaps for teams. Learn more!
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
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center"
              href="#"
            >
              Frontend
            </a>
            <a
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center"
              href="#"
            >
              Backend
            </a>
            <a
              className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center"
              href="#"
            >
              DevOps
            </a>
            {/* Add more role-based roadmap links as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
