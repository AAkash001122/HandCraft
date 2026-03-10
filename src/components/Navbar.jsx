import React from "react";
import { Link } from "react-router-dom";
import { HiSparkles } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          {/* Changed background to a vibrant gradient */}
          <div className="w-9 h-9 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <HiSparkles className="text-white w-4 h-4 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-800">
              HandCraft<span className="text-pink-600">.</span>
            </span>
            <span className="text-[8px] text-slate-500 tracking-widest uppercase -mt-0.5 hidden sm:block font-semibold">
              Handcrafted Goods
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          {/* Added gradient text on hover for vibrant effect */}
          <Link
            to="/"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
          >
            About
          </Link>
          <Link
            to="/collections"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
          >
            Collections
          </Link>
          <Link
            to="/crafts"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
          >
            Crafts
          </Link>
          <Link
            to="/contact"
            className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
          >
            Contact
          </Link>
        </div>

        {/* Right Side Icons & Buttons */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 group">
            <BsHandbag className="w-5 h-5 text-slate-700 group-hover:text-indigo-600 group-hover:scale-110 transition-all duration-300" />
            {/* Changed notification dot to vibrant pink/red with border */}
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full animate-pulse border-2 border-white"></span>
          </button>

          <Link to="/login">
            {/* Changed button to vibrant gradient with glow effect */}
            <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-sm font-bold rounded-full hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-0.5 hidden sm:block">
              Sign In
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-700 hover:text-indigo-600 transition-colors">
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
