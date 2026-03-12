import React from "react";
import { Link } from "react-router-dom";

import { HiSparkles } from "react-icons/hi";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
  BsEnvelope,
  BsArrowRight,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 font-sans relative overflow-hidden">
      {/* Changed Accent Line to Rose (Flower color) */}
      <div className="h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

      <div className="border-b border-stone-800">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Join the{" "}
                {/* UPDATED: Applied Vibrant Logo Mix Gradient (Left to Right) matching Hero Section */}
                <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-500 to-emerald-600">
                  Artisan
                </span>{" "}
                Club
              </h3>
              <p className="mt-2 text-stone-500 max-w-md">
                Subscribe to get special offers, free giveaways, and
                once-in-a-lifetime deals.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <form className="flex items-center bg-stone-800 p-2 rounded-full border border-stone-700 focus-within:border-rose-500 transition-colors">
                <BsEnvelope className="w-5 h-5 ml-4 text-stone-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full md:w-64 bg-transparent border-none outline-none text-white px-4 py-2 text-sm placeholder-stone-600"
                />
                {/* Changed Button to Vibrant Gradient */}
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-rose-600 to-orange-500 text-white text-sm font-bold rounded-full hover:shadow-xl hover:shadow-rose-500/30 transition-all duration-300 flex items-center gap-2"
                >
                  Subscribe
                  <BsArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-stone-800 group-hover:bg-stone-700 rounded-full flex items-center justify-center transition-colors">
                {/* Changed Icon Color to Rose */}
                <HiSparkles className="text-rose-500 w-5 h-5" />
              </div>
              {/* Changed Brand Text to Stone 100 (Softer) and Accent to Rose */}
              <span className="text-2xl font-bold text-stone-100 tracking-tight">
                Craft Around US<span className="text-rose-500">.</span>
              </span>
            </Link>
            <p className="text-stone-500 leading-relaxed mb-6 max-w-sm">
              Discover the beauty of handmade. We connect master craftsmen with
              discerning collectors worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 hover:bg-rose-600 text-stone-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                <BsFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 hover:bg-rose-600 text-stone-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                <BsInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 hover:bg-rose-600 text-stone-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                <BsTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 hover:bg-rose-600 text-stone-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
              >
                <BsPinterest className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              Quick Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  Pottery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  Textiles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  Jewelry
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  Our Artisans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
          <p>© Craft Around us All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">
            Crafted with <span className="text-rose-500">♥</span> for Art Lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
