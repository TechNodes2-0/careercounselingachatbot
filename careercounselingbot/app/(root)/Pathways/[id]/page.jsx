import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <div>
      <div class="bg-slate-900 text-white p-8">
        <article>
          <h1 class="text-4xl font-bold mb-4">
            Computer Science Career Pathways
          </h1>
          <p class="text-sm text-gray-400 mb-6">
            Build software and develop computing systems.
          </p>
          <div class="flex gap-4 mb-6">
            <button class="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 flex items-center gap-2 bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              Share
            </button>
            <button class="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 flex items-center gap-2 bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              Tweet
            </button>
            <button class="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 flex items-center gap-2 bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              Copy link
            </button>
          </div>
          <h2 className="mb-4 text-3xl font-bold">What is Computer Science?</h2>
          <p class="mb-4">
            Computing is part of everything we do. Computing drives innovation
            in engineering, business, entertainment, education, and the
            sciences—and it provides solutions to complex, challenging problems
            of all kinds. Computer science is the study of computers and
            computational systems. It is a broad field which includes everything
            from the algorithms that make up software to how software interacts
            with hardware to how well software is developed and designed.
            Computer scientists use various mathematical algorithms, coding
            procedures, and their expert programming skills to study computer
            processes and develop new software and systems.
          </p>
        </article>
        <div className="flex items-center justify-center">
          <Image src="/roadmap.png" alt="Roadmap" width={800} height={400} />
        </div>
        <aside class="mt-8">
          <div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm mb-6"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  Recommended Topics
                </h3>
                <p class="text-sm text-muted-foreground">
                  Explore our curated list of topics to enhance your knowledge.
                </p>
              </div>
              <div className="max-w-5xl px-8 mx-auto my-5">
                <div className="grid grid-cols-3 gap-8">
                  <Link
                    className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
                    href="#"
                  >
                    Computer Science
                  </Link>
                  <Link
                    className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
                    href="#"
                  >
                    Electrical Engineering
                  </Link>
                  <Link
                    className="block py-4 px-6 bg-[#2b2d3a] rounded-md text-center border border-[#30363d] hover:bg-[#30363d]"
                    href="#"
                  >
                    Mechanical Engineering
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
