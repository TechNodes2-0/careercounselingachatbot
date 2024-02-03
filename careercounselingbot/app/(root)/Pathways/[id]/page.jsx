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
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z" />
              </svg>
              Share
            </button>

            <button class="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 flex items-center gap-2 bg-gray-800">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png"
                alt="heart"
                width={24}
                height={24}
                className="invert"
              />
              Save
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
