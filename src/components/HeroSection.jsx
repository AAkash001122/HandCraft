import React from "react";
import { Link } from "react-router-dom";
import FooterWithCTA from "./FooterWithCTA";
import CollectionsSlider from "./CollectionsSlider";
import TrendingSection from "./TrendingSection";

import {
  BsHandbag,
  BsStarFill,
  BsArrowRight,
  BsHeart,
  BsQuote,
} from "react-icons/bs";
import {
  HiTruck,
  HiShieldCheck,
  HiSparkles,
  HiChip,
  HiHand,
} from "react-icons/hi";

export default function HeroSection() {
  return (
    <>
      {/* CSS for Left-to-Right Shimmer Animation */}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .animate-shimmer {
            animation: shimmer 3s linear infinite;
            background-size: 200% 100%;
          }
        `}
      </style>

      <main className="relative bg-stone-50 font-sans text-stone-800 overflow-hidden selection:bg-rose-100 selection:text-rose-900">
        <section className="relative bg-[#FFFBF5] font-sans text-stone-800 overflow-hidden selection:bg-rose-100 selection:text-rose-900">
          {/* VIBRANT BACKGROUND BLOBS - Standardized Sizes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-300 rounded-full blur-[100px] opacity-40 animate-pulse hidden sm:block"></div>
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-rose-300 rounded-full blur-[80px] opacity-40 sm:hidden"></div>

            <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-amber-200 rounded-full blur-[100px] opacity-40 hidden sm:block"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-amber-200 rounded-full blur-[80px] opacity-40 sm:hidden"></div>

            <div className="absolute top-[40%] left-[30%] w-48 h-48 bg-emerald-200 rounded-full blur-[100px] opacity-30"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center min-h-[70vh] sm:min-h-[80vh]">
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-1 z-10">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/90 backdrop-blur border border-rose-200 rounded-full shadow-sm mx-auto lg:mx-0">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-rose-700">
                    New Collection
                  </span>
                </div>

                {/* RESPONSIVE TYPOGRAPHY */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold italic font-serif leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
                  Crafted Around Us <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
                    Soul & Story
                  </span>
                </h1>

                <p className="text-sm sm:text-lg text-stone-600 max-w-md mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
                  Discover unique handmade treasures crafted by master artisans.
                  Each piece is a journey of tradition and elegance.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
                  <Link to="/enquiry">
                    <button className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-600 to-orange-500 text-white rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-rose-500/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                      Get Enquiry
                      <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>

                  <Link to="/store">
                    <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-stone-300 text-stone-700 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-stone-50 hover:border-rose-400 hover:text-rose-700 transition-all duration-300 w-full sm:w-auto">
                      Explore Store
                    </button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-stone-200 mt-6 sm:mt-8 justify-center lg:justify-start">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-rose-50 rounded-lg">
                      <HiTruck className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs sm:text-sm font-bold text-stone-800">
                        Free Shipping
                      </p>
                      <p className="text-[10px] sm:text-xs text-stone-400">
                        Worldwide Delivery
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 rounded-lg">
                      <HiShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs sm:text-sm font-bold text-stone-800">
                        Authenticity
                      </p>
                      <p className="text-[10px] sm:text-xs text-stone-400">
                        100% Handmade
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RESPONSIVE IMAGE CONTAINER */}
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full order-2 lg:order-2">
                {/* IMAGE 1 */}
                <div className="absolute top-0 right-0 w-[90%] sm:w-[85%] h-[85%] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl shadow-rose-900/10 border-4 border-white transform rotate-0 sm:rotate-2 hover:rotate-0 transition-all duration-700 z-10">
                  <img
                    src="/15.jpg"
                    alt="Handcrafted Pottery"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
                </div>

                {/* IMAGE 2 */}
                <div className="absolute bottom-4 sm:bottom-10 left-0 w-[70%] sm:w-1/2 h-1/2 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-orange-900/10 border-4 border-white transform rotate-0 sm:-rotate-6 hover:rotate-0 transition-all duration-500 z-20">
                  <img
                    src="/41.jpg"
                    alt="Leather Craft"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* FLOATING CARD */}
                <div className="absolute bottom-4 sm:bottom-24 right-2 sm:right-4 p-3 sm:p-4 bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl shadow-stone-500/10 border border-white/50 flex items-center gap-3 sm:gap-4 z-30 hover:scale-105 transition-transform cursor-pointer">
                  <img
                    src="/4.jpg"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl object-cover shadow-md"
                    alt="Featured Product"
                  />
                  <div>
                    <div className="flex items-center gap-1 text-rose-500 mb-1">
                      <BsStarFill className="w-2 h-2 sm:w-3 sm:h-3" />
                      <BsStarFill className="w-2 h-2 sm:w-3 sm:h-3" />
                      <BsStarFill className="w-2 h-2 sm:w-3 sm:h-3" />
                      <BsStarFill className="w-2 h-2 sm:w-3 sm:h-3" />
                      <BsStarFill className="w-2 h-2 sm:w-3 sm:h-3" />
                    </div>
                    <p className="font-bold text-stone-900 text-xs sm:text-sm">
                      Ceramic Vase
                    </p>
                  </div>
                  <button className="p-1.5 sm:p-2 bg-stone-800 text-white rounded-full ml-1 sm:ml-2 hover:bg-gradient-to-r hover:from-rose-600 hover:to-orange-500 transition-colors">
                    <BsHandbag className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CollectionsSlider />
        <TrendingSection />

        {/* THE ART OF CRAFT SECTION */}
        <section className="min-h-screen bg-stone-50 py-12 sm:py-24 px-4 sm:px-6 lg:px-12 font-sans text-stone-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-rose-200 rounded-full blur-[80px] sm:blur-[120px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 sm:w-[600px] sm:h-[600px] bg-amber-100 rounded-full blur-[80px] sm:blur-[120px] opacity-40"></div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-700 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4">
                Our Process
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold italic font-serif leading-[1.1] tracking-tight mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
                The Art of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
                  Craft
                </span>
              </h1>
              <p className="mt-4 text-stone-500 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed px-2">
                Every piece tells a story. From the raw earth to your hands,
                discover the soulful journey behind our handcrafted
                masterpieces.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="group relative bg-white/70 backdrop-blur-xl p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] border border-white/50 hover:shadow-[0_20px_50px_-15px_rgba(225,29,72,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <span className="absolute top-4 right-6 text-6xl sm:text-8xl font-black text-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                  01
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center text-white shadow-lg shadow-rose-500/20 mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <HiSparkles className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 group-hover:text-rose-700 transition-colors">
                    The Genesis
                  </h3>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                    We begin where nature ends. Our artisans travel to the
                    remotest villages to source raw materials—clay from
                    riverbeds, organic cotton, and natural dyes—ensuring every
                    creation is born from the earth's purity.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-rose-500 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white/70 backdrop-blur-xl p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] border border-white/50 hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden mt-0 md:mt-12">
                <span className="absolute top-4 right-6 text-6xl sm:text-8xl font-black text-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                  02
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 mb-6 sm:mb-8 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                    <HiHand className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 group-hover:text-emerald-700 transition-colors">
                    The Hands
                  </h3>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                    It's not manufacturing; it's mesmerizing. Every curve is
                    shaped by fingers that have mastered the art over decades.
                    We don't use machines to create the soul; we use human hands
                    that breathe life into inanimate objects.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white/70 backdrop-blur-xl p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] border border-white/50 hover:shadow-[0_20px_50px_-15px_rgba(251,146,60,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <span className="absolute top-4 right-6 text-6xl sm:text-8xl font-black text-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                  03
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <HiChip className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 group-hover:text-orange-700 transition-colors">
                    The Alchemy
                  </h3>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                    The final polish and detailing are done with laser
                    precision. We blend ancient traditions with modern quality
                    checks to ensure that what you hold isn't just a product,
                    but a legacy that lasts for generations.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-12 sm:py-20 lg:py-32 bg-stone-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-rose-200 rounded-full blur-[80px] sm:blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 sm:w-[30rem] h-64 sm:h-[30rem] bg-amber-200 rounded-full blur-[80px] sm:blur-[120px] opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-[40rem] h-64 sm:h-[40rem] bg-emerald-100 rounded-full blur-[100px] sm:blur-[140px] opacity-20"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-16 md:py-24">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic font-serif tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
                Words from our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
                  Collectors
                </span>
              </h2>
              <div className="h-1 w-16 sm:w-20 mx-auto bg-gradient-to-r from-rose-500 to-orange-500 rounded-full"></div>
            </div>

            {/* UPDATED: Modern Grid with Animated Rainbow Borders */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 - Light Theme with Rainbow Border */}
              <div className="group relative p-[2px] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Animated Gradient Border Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-orange-500 via-amber-400 via-emerald-500 to-teal-500 animate-shimmer"></div>

                {/* Inner Card Content */}
                <div className="relative bg-white h-full rounded-[22px] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <BsStarFill
                          key={i}
                          className="w-4 h-4 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-stone-600 leading-relaxed mb-6 text-sm">
                      "The craftsmanship is unparalleled. It's not just a
                      product; it's a story that sits in my living room. The
                      texture and finish are divine."
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center text-white font-bold shadow-md">
                      A
                    </div>
                    <div>
                      <h5 className="font-bold text-stone-800 text-sm">
                        Aria Singh
                      </h5>
                      <p className="text-xs text-rose-500 font-medium uppercase tracking-wider">
                        Art Collector
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Dark Theme with Rainbow Border */}
              <div className="group relative p-[2px] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:scale-105 md:z-10">
                {/* Animated Gradient Border Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 via-orange-500 via-rose-500 to-amber-400 animate-shimmer"></div>

                {/* Inner Card Content (Dark) */}
                <div className="relative bg-stone-900 h-full rounded-[22px] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <BsStarFill
                          key={i}
                          className="w-4 h-4 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-stone-300 leading-relaxed mb-6 text-sm">
                      "I bought a handwoven rug, and it completely transformed
                      my space. The colors are vibrant, and the quality is
                      simply superior. Highly recommended!"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-stone-700">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold shadow-md">
                      L
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-sm">
                        Liam Parker
                      </h5>
                      <p className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
                        Interior Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Light Theme with Rainbow Border */}
              <div className="group relative p-[2px] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Animated Gradient Border Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-rose-500 via-teal-500 via-orange-500 to-emerald-500 animate-shimmer"></div>

                {/* Inner Card Content */}
                <div className="relative bg-white h-full rounded-[22px] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <BsStarFill
                          key={i}
                          className="w-4 h-4 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-stone-600 leading-relaxed mb-6 text-sm">
                      "Fast shipping and beautiful packaging. The ceramic vase
                      arrived in perfect condition. It feels good to support
                      real artisans."
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-bold shadow-md">
                      S
                    </div>
                    <div>
                      <h5 className="font-bold text-stone-800 text-sm">
                        Sofia Reyes
                      </h5>
                      <p className="text-xs text-orange-500 font-medium uppercase tracking-wider">
                        Photographer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
