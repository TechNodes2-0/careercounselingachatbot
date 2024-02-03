import React from "react";
import Link from "next/link";

const careerPathwaysData = [
  {
    title: "Career Pathways After 10th Std",
    pathways: [
      {
        id: 1,
        title: "Diploma in Engineering",
        sub: "Build software and develop computing systems.",
        desc: "Computing is part of everything we do. Computing drives innovation in engineering, business, entertainment, education, and the sciences—and it provides solutions to complex, challenging problems of all kinds. Computer science is the study of computers and computational systems. It is a broad field that includes everything from the algorithms that make up software to how software interacts with hardware to how well software is developed and designed. Computer scientists use various mathematical algorithms, coding procedures, and their expert programming skills to study computer processes and develop new software and systems.",
        image: "/roadmap.png",
      },
    ],
  },
  {
    title: "Another Career Pathway",
    pathways: [
      {
        id: 2,
        title: "Data Science",
        sub: "Analyze and interpret complex data sets.",
        desc: "Data science involves the extraction of valuable insights from vast and complex sets of data. Professionals in this field use statistical analysis, machine learning, and data visualization techniques to make informed decisions and predictions. Data scientists work in various industries such as finance, healthcare, and technology, helping organizations leverage their data to gain a competitive advantage.",
        image: "/data-science.png",
      },
      {
        id: 3,
        title: "Graphic Design",
        sub: "Create visually appealing designs for various media.",
        desc: "Graphic designers use their creativity and technical skills to communicate messages through visual elements. They work on a variety of projects, including designing logos, websites, advertisements, and other marketing materials. Graphic design is a dynamic field that combines artistic expression with technological expertise.",
        image: "/graphic-design.png",
      },
    ],
  },
];

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
