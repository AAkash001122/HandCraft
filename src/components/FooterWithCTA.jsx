
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiSparkles } from "react-icons/hi";
import { BsHandbag, BsX } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-12 py-3 flex items-center justify-between">
        
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex items-center">
            <img
              src="/logocraft.png"
              alt="HandCraft Logo"
              className="h-14 md:h-16 w-auto max-w-[120px] object-contain"
            />
          </div>
        </Link>

    
        <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium text-stone-600">
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
       
          <button className="relative p-2 group hidden sm:block">
            <BsHandbag className="w-5 h-5 text-stone-700 group-hover:text-rose-600 group-hover:scale-110 transition-all duration-300" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse border-2 border-white"></span>
          </button>

       
          <Link to="/login">
            <button className="hidden sm:block px-6 py-2 bg-gradient-to-r from-rose-600 to-orange-500 text-white text-sm font-bold rounded-full hover:shadow-xl hover:shadow-rose-500/40 transition-all duration-300 transform hover:-translate-y-0.5">
              Sign In
            </button>
          </Link>

  
          <button
            className="md:hidden p-2 text-stone-700 hover:text-rose-600 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* ========================================== */}
      {/* MOBILE MENU DRAWER (FULLY RESPONSIVE) */}
      {/* ========================================== */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
     
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

       
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
   
          <div className="flex justify-between items-center p-5 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <img src="/logocraft.png" alt="Logo" className="h-8 w-auto object-contain" />
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 text-stone-500 hover:text-rose-600 transition-colors">
              <BsX className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links (Scrollable if needed) */}
          <div className="flex flex-col p-6 space-y-6 h-[calc(100%-70px)] overflow-y-auto">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif font-bold text-stone-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300 pb-2 border-b border-transparent hover:border-stone-100"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif font-bold text-stone-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300 pb-2 border-b border-transparent hover:border-stone-100"
            >
              About
            </Link>
            <Link
              to="/collections"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif font-bold text-stone-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300 pb-2 border-b border-transparent hover:border-stone-100"
            >
              Collections
            </Link>
            <Link
              to="/crafts"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif font-bold text-stone-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300 pb-2 border-b border-transparent hover:border-stone-100"
            >
              Crafts
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif font-bold text-stone-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-orange-500 hover:to-emerald-600 transition-all duration-300 pb-2 border-b border-transparent hover:border-stone-100"
            >
              Contact
            </Link>

            {/* Mobile Sign In Button (Full Width) */}
            <div className="pt-6 mt-4">
               <Link to="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-4 bg-stone-900 text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-stone-800 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                    Sign In
                  </button>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
