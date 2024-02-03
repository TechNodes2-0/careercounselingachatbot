import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <div>
      <div className="h-[750px] bg-slate-900">
        <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="block text-4xl font-medium text-gray-200 sm:text-5xl md:text-6xl lg:text-7xl">
                Career Counseling Bot
              </h1>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-400">
                DevRoute Navigator focuses on technology ecosystems like React,
                providing an interactive hierarchical tree structure.
              </p>
            </div>

            <div className="text-center">
              <Link
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-center text-white border border-transparent rounded-full shadow-lg gap-x-3 bg-gradient-to-tl from-blue-600 to-violet-600 shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
                href="/chat"
              >
                Get started
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round" // Corrected attribute name
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
