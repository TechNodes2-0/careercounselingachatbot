import React from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, auth } from "@clerk/nextjs";
import Image from "next/image";
export default function Navbar() {
  const { userId } = auth();

  return (
    <div className="text-white bg-slate-800">
      <nav className="flex justify-between items-center py-4 px-8 border-b border-[#2b2d3a]">
        <div className="flex items-center space-x-8">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/6873/6873405.png"
            className="h-8"
            alt="Flowbite Logo"
            width={32}
            height={32}
          />
          <Link className="text-base" href="/Pathways">
            Roadmaps
          </Link>
          <a className="text-base" href={`/profile/${userId}`}>
            Profile
          </a>
        </div>
        <SignedIn>
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-xl"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <UserButton />
          </div>
        </SignedIn>

        <SignedOut>
          <div className="flex items-center space-x-4">
            <Link className="text-base" href="/sign-in">
              Login
            </Link>
            <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors bg-blue-600 rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </SignedOut>
      </nav>
    </div>
  );
}
