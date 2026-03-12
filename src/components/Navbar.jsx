import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiSparkles } from "react-icons/hi";
import { BsHandbag, BsX } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm">
      <div className="container mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex items-center">
            <img
              src="/logocraft.png"
              alt="HandCraft Logo"
              className="h-16 w-28 object-cover"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
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

        {/* Right Side Icons & Button */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 group hidden sm:block">
            <BsHandbag className="w-5 h-5 text-stone-700 group-hover:text-rose-600 group-hover:scale-110 transition-all duration-300" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse border-2 border-white"></span>
          </button>

          {/* <Link to="/login">
            <button className="px-6 py-2 bg-gradient-to-r from-rose-600 to-orange-500 text-white text-sm font-bold rounded-full hover:shadow-xl hover:shadow-rose-500/40 transition-all duration-300 transform hover:-translate-y-0.5 hidden sm:block">
              Sign In
            </button>
          </Link> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-stone-700 hover:text-rose-600 transition-colors"
            onClick={() => setIsOpen(true)}
          >
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

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Slide-in Menu Container */}
        <div
          className={`absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-6 border-b border-stone-100">
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-500 hover:text-rose-600 transition-colors"
            >
              <BsX className="w-8 h-8" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col p-6 space-y-6">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif font-bold text-stone-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif font-bold text-stone-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300"
            >
              About
            </Link>
            <Link
              to="/collections"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif font-bold text-stone-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300"
            >
              Collections
            </Link>
            <Link
              to="/crafts"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif font-bold text-stone-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300"
            >
              Crafts
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif font-bold text-stone-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300"
            >
              Contact
            </Link>

            <div className="pt-6 border-t border-stone-100">
              {/* <Link to="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-3 bg-stone-900 text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-stone-800 transition-all duration-300">
                    Sign In
                  </button>
               </Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
