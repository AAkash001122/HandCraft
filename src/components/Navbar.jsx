import React from "react";
import { Link } from "react-router-dom";
import { HiSparkles } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-[#FDFCF8]/80 backdrop-blur-lg border-b border-stone-100">
      <div className="container mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-stone-900 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <HiSparkles className="text-amber-400 w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-stone-900">
              HandCraft<span className="text-amber-600">.</span>
            </span>
            <span className="text-[8px] text-stone-400 tracking-widest uppercase -mt-0.5 hidden sm:block">
              Handcrafted Goods
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
          <Link to="/" className="hover:text-amber-700 transition-colors duration-300">Home</Link>
          <Link to="/about" className="hover:text-amber-700 transition-colors duration-300">About</Link>
          <Link to="/collections" className="hover:text-amber-700 transition-colors duration-300">Collections</Link>
          <Link to="/crafts" className="hover:text-amber-700 transition-colors duration-300">Crafts</Link>
          <Link to="/contact" className="hover:text-amber-700 transition-colors duration-300">Contact</Link>
        </div>

        {/* Right Side Icons & Buttons */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 group">
            <BsHandbag className="w-5 h-5 text-stone-700 group-hover:text-amber-700 transition-colors" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
          </button>
          
          <Link to="/login">
            <button className="px-5 py-2 bg-stone-900 text-white text-sm font-semibold rounded-full hover:bg-stone-800 transition-all duration-300 shadow-md hover:shadow-lg hidden sm:block">
              Sign In
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-stone-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;