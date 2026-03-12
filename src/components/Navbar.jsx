import React from "react";
import { Link } from "react-router-dom";
import { HiSparkles } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm">
      <div className="container mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex items-center">
            <img
              src="/logocraft.png"
              alt="HandCraft Logo"
              className="h-16 w-28 object-cover" // h-10 se height adjust karein
            />
          </div>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
          <Link
            to="/"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300 hover:scale-105"
          >
            About
          </Link>
          <Link
            to="/collections"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300 hover:scale-105"
          >
            Collections
          </Link>
          <Link
            to="/crafts"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300 hover:scale-105"
          >
            Crafts
          </Link>
          <Link
            to="/contact"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300 hover:scale-105"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 group">
            <BsHandbag className="w-5 h-5 text-stone-700 group-hover:text-rose-600 group-hover:scale-110 transition-all duration-300" />

            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse border-2 border-white"></span>
          </button>

          <button className="md:hidden p-2 text-stone-700 hover:text-rose-600 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
