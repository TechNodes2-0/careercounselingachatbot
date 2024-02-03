import React from "react";
import Link from "next/link";
import careerPathwaysData from "../../../data/CareerData";

const HeroSection = () => {
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

      {careerPathwaysData.map((careerPathway) => (
        <section key={careerPathway.title} className="py-20">
          <div className="max-w-5xl px-8 mx-auto">
            <h2 className="mb-8 text-2xl font-semibold text-cyan-500">
              {careerPathway.title}
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {careerPathway.pathways.map((pathway) => (
                <Link
                  key={pathway.id} // Assuming each pathway has a unique id
                  href={`/Pathways/1`}
                >
                  <div className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]">
                    {pathway.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default HeroSection;
