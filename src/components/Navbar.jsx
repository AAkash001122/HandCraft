import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsHandbag, BsX, BsList } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm relative">
      <div className="container mx-auto px-4 md:px-12 py-3 flex items-center justify-between">
        {/* Logo Area */}
        <Link to="/" className="flex items-center z-10">
          <img
            src="/logocraft.png"
            alt="HandCraft Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium text-stone-600">
          <Link
            to="/"
            className="hover:text-rose-600 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-rose-600 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/collections"
            className="hover:text-rose-600 transition-colors duration-300"
          >
            Collections
          </Link>
          <Link
            to="/crafts"
            className="hover:text-rose-600 transition-colors duration-300"
          >
            Crafts
          </Link>
          <Link
            to="/contact"
            className="hover:text-rose-600 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Right Side Icons & Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Bag Icon */}
          <Link to="/cart" className="relative p-2 group">
            <BsHandbag className="w-5 h-5 text-stone-700 group-hover:text-rose-600 transition-colors" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
          </Link>

          {/* Sign In Button - Desktop Only */}
          {/* <Link to="/login" className="hidden sm:block">
            <button className="px-5 py-2 bg-gradient-to-r from-rose-600 to-orange-500 text-white text-xs sm:text-sm font-bold rounded-full hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300">
              Sign In
            </button>
          </Link> */}

          {/* Mobile Menu Button (Hamburger / Close Toggle) */}
          <button
            className="md:hidden p-2 text-stone-700 hover:text-rose-600 transition-colors focus:outline-none z-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <BsX className="w-6 h-6" />
            ) : (
              <BsList className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN CONTAINER */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-stone-100 transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Dropdown Links */}
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="py-3 px-2 text-lg font-medium text-stone-700 hover:text-rose-600 hover:bg-rose-50/50 rounded-lg transition-colors border-b border-stone-50"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="py-3 px-2 text-lg font-medium text-stone-700 hover:text-rose-600 hover:bg-rose-50/50 rounded-lg transition-colors border-b border-stone-50"
          >
            About
          </Link>
          <Link
            to="/collections"
            onClick={() => setIsOpen(false)}
            className="py-3 px-2 text-lg font-medium text-stone-700 hover:text-rose-600 hover:bg-rose-50/50 rounded-lg transition-colors border-b border-stone-50"
          >
            Collections
          </Link>
          <Link
            to="/crafts"
            onClick={() => setIsOpen(false)}
            className="py-3 px-2 text-lg font-medium text-stone-700 hover:text-rose-600 hover:bg-rose-50/50 rounded-lg transition-colors border-b border-stone-50"
          >
            Crafts
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="py-3 px-2 text-lg font-medium text-stone-700 hover:text-rose-600 hover:bg-rose-50/50 rounded-lg transition-colors"
          >
            Contact
          </Link>

          {/* Mobile Sign In Button */}
          <div className="pt-4 mt-2 border-t border-stone-100">
            {/* <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block"
            >
              <button className="w-full py-3 bg-gradient-to-r from-rose-600 to-orange-500 text-white rounded-lg text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all">
                Sign In
              </button>
            </Link> */}
          </div>
        </div>
      </div>

      {/* OVERLAY BACKDROP (Optional but recommended) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
