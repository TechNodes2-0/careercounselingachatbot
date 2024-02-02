import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <div>
      <footer className="shadow bg-slate-800">
        <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/6873/6873405.png"
                className="h-8"
                alt="Flowbite Logo"
                width={32}
                height={32}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Creer Counseling Bot
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Creer Counseling Bot™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
