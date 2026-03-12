import React from "react";
import { Link } from "react-router-dom";
import { HiSparkles } from "react-icons/hi";
import {
  BsInstagram,
  BsYoutube,
  BsEnvelope,
  BsArrowRight,
  BsTelephone,
  BsGeoAlt,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-white text-stone-600 font-sans relative overflow-hidden border-t border-stone-100">
      {/* Decorative Top Border */}
      <div className="h-1.5 bg-gradient-to-r from-rose-600 via-orange-500 to-emerald-600"></div>

      {/* Newsletter Section */}
      <div className="bg-stone-50 border-b border-stone-100">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100 relative">
            {/* Stitched Border Effect (Handcraft Aesthetic) */}
            <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-stone-200 pointer-events-none"></div>

            <div className="text-center lg:text-left max-w-lg relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight">
                Join the{" "}
                <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-500 to-emerald-600">
                  Artisan
                </span>{" "}
                Club
              </h3>
              <p className="mt-3 text-stone-500">
                Subscribe to get special offers, free giveaways, and unique
                handmade finds.
              </p>
            </div>

            <div className="w-full lg:w-auto relative z-10">
              <form className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full sm:w-auto">
                  <BsEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-80 pl-12 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-full text-stone-800 placeholder-stone-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-600 to-orange-500 text-white text-sm font-bold rounded-full hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Subscribe
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            {/* Logo Section - Icon/Text replaced with Image */}
            <Link to="/" className="inline-block mb-6 group w-fit">
              <img
                src="/logocraft.png" // Yahan apni logo ka path lagao (e.g., /images/logo.png)
                alt="Craft Around US"
                className="h-16 w-42object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <p className="text-stone-500 leading-relaxed mb-8 max-w-sm">
              Discover the beauty of handmade. We connect master craftsmen with
              discerning collectors worldwide.
            </p>

            {/* Social Icons with Colorful Hover - UPDATED */}
            <div className="flex gap-3">
              {[
                {
                  icon: BsInstagram,
                  hoverBg: "hover:bg-rose-600",
                  link: "https://www.instagram.com/craftaroundus?igsh=MmFtM2pkdTV5b3A=",
                },
                {
                  icon: BsYoutube,
                  hoverBg: "hover:bg-red-600",
                  link: "https://youtube.com/@kirticraftsyt?si=1kNlXQkHoL2MsvHr",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-stone-100 text-stone-600 rounded-full flex items-center justify-center ${social.hoverBg} hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns with Themed Colors */}

          {/* Rose Theme */}
          <div className="lg:col-span-2">
            <h4 className="text-stone-900 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
              Quick Shop
            </h4>
            <ul className="space-y-4">
              {[
                "New Arrivals",
                "Best Sellers",
                "Pottery",
                "Textiles",
                "Jewelry",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="group text-sm text-stone-500 hover:text-rose-600 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-rose-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Orange/Amber Theme */}
          <div className="lg:col-span-2">
            <h4 className="text-stone-900 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              Support
            </h4>
            <ul className="space-y-4">
              {[
                "FAQ",
                "Shipping Info",
                "Returns",
                "Contact Us",
                "Track Order",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="group text-sm text-stone-500 hover:text-orange-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emerald Theme */}
          <div className="lg:col-span-2">
            <h4 className="text-stone-900 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Company
            </h4>
            <ul className="space-y-4">
              {[
                "About Us",
                "Our Artisans",
                "Careers",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="group text-sm text-stone-500 hover:text-emerald-600 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-emerald-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Teal Theme */}
          <div className="lg:col-span-2">
            <h4 className="text-stone-900 font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <BsGeoAlt className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <span className="text-stone-500 group-hover:text-teal-700 transition-colors">
                  129, Kartik building, next to Kuber building, Opposite to
                  Lakshmi Industry, Andheri West, Mumbai, Maharashtra 400065
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <BsEnvelope className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <a
                  href="mailto:hello@craftaroundus.com"
                  className="text-stone-500 group-hover:text-teal-700 transition-colors"
                >
                  haanjicraftsbykirti@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <BsTelephone className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-stone-500 group-hover:text-teal-700 transition-colors"
                >
                  +918521735526{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
