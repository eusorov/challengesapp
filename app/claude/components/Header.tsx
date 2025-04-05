"use client";
import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-green-500 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white">
            Challenges
          </a>
          <nav className="hidden items-center space-x-6 md:flex">
            <a
              href="#"
              className="text-white transition duration-300 hover:text-blue-100"
            >
              Home Challenge
            </a>
            <a
              href="#"
              className="text-white transition duration-300 hover:text-blue-100"
            >
              Join Challenge
            </a>
            <a
              href="#"
              className="text-white transition duration-300 hover:text-blue-100"
            >
              Your Progress
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="rounded-full bg-white px-4 py-2 font-semibold text-blue-500 transition duration-300 hover:bg-blue-100"
            >
              Sign In
            </a>
            <button
              className="text-white md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mt-4 rounded-lg bg-white py-2 shadow-lg md:hidden">
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-blue-50"
            >
              Home Challenge
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-blue-50"
            >
              Join Challenge
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-blue-50"
            >
              Your Progress
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
