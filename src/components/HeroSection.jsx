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
      <main className="relative bg-stone-50 font-sans text-stone-800 overflow-hidden selection:bg-rose-100 selection:text-rose-900">
        <section className="relative bg-[#FFFBF5] font-sans text-stone-800 overflow-hidden selection:bg-rose-100 selection:text-rose-900">
          {/* VIBRANT BACKGROUND BLOBS - CHANGED TO MATCH LOGO COLORS (Pink, Warm Amber, Soft Green) */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-rose-300 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-amber-200 rounded-full blur-[100px] opacity-40"></div>
            <div className="absolute top-[40%] left-[30%] w-[20rem] h-[20rem] bg-emerald-200 rounded-full blur-[100px] opacity-30"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-12 py-8 lg:py-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur border border-rose-200 rounded-full shadow-sm mx-auto lg:mx-0">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-rose-700">
                    New Collection
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold italic font-serif leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
                  Crafted Around Us <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
                    Soul & Story
                  </span>
                </h1>

                <p className="text-lg text-stone-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Discover unique handmade treasures crafted by master artisans.
                  Each piece is a journey of tradition and elegance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Link to="/enquiry">
                    {/* VIBRANT GRADIENT BUTTON - Matching Logo Pink/Coral */}
                    <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-600 to-orange-500 text-white rounded-full text-sm font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-rose-500/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                      Get Enquiry
                      <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>

                  <Link to="/store">
                    {/* VIBRANT BORDER BUTTON - Matching Theme */}
                    <button className="px-8 py-4 border-2 border-stone-300 text-stone-700 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-stone-50 hover:border-rose-400 hover:text-rose-700 transition-all duration-300 w-full sm:w-auto">
                      Explore Store
                    </button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-stone-200 mt-8 justify-center lg:justify-start">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-rose-50 rounded-lg">
                      {/* Icon Color changed to Match Logo Accent */}
                      <HiTruck className="w-6 h-6 text-rose-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-stone-800">
                        Free Shipping
                      </p>
                      <p className="text-xs text-stone-400">
                        Worldwide Delivery
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 rounded-lg">
                      {/* Icon Color changed to Green (Leaves from Logo) */}
                      <HiShieldCheck className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-stone-800">
                        Authenticity
                      </p>
                      <p className="text-xs text-stone-400">100% Handmade</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] lg:h-[600px] w-full">
                {/* VIBRANT IMAGE BORDERS - Warmer shadows */}
                <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[3rem] overflow-hidden shadow-2xl shadow-rose-900/10 border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-700 z-10">
                  <img
                    src="/15.jpg"
                    alt="Handcrafted Pottery"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
                </div>

                <div className="absolute bottom-10 left-0 w-1/2 h-1/2 rounded-[2rem] overflow-hidden shadow-2xl shadow-orange-900/10 border-4 border-white transform -rotate-6 hover:rotate-0 transition-all duration-500 z-20">
                  <img
                    src="/41.jpg"
                    alt="Leather Craft"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute bottom-24 right-4 p-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl shadow-stone-500/10 border border-white/50 flex items-center gap-4 z-30 hover:scale-105 transition-transform cursor-pointer">
                  <img
                    src="/4.jpg"
                    className="w-16 h-16 rounded-xl object-cover shadow-md"
                    alt="Featured Product"
                  />
                  <div>
                    <div className="flex items-center gap-1 text-rose-500 mb-1">
                      <BsStarFill className="w-3 h-3" />
                      <BsStarFill className="w-3 h-3" />
                      <BsStarFill className="w-3 h-3" />
                      <BsStarFill className="w-3 h-3" />
                      <BsStarFill className="w-3 h-3" />
                    </div>
                    <p className="font-bold text-stone-900 text-sm">
                      Ceramic Vase
                    </p>
                    {/* <p className="text-rose-600 font-bold text-sm">$129.00</p> */}
                  </div>
                  <button className="p-2 bg-stone-800 text-white rounded-full ml-2 hover:bg-gradient-to-r hover:from-rose-600 hover:to-orange-500 transition-colors">
                    <BsHandbag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CollectionsSlider />
        <TrendingSection />

        {/* ADDED: THE ART OF CRAFT SECTION */}
        <section className="min-h-screen bg-stone-50 py-24 px-6 lg:px-12 font-sans text-stone-900 relative overflow-hidden">
          {/* Background Decorative Blobs - Matching Logo Colors (Pink, Green, Warm Beige) */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-200 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-100 rounded-full blur-[120px] opacity-40"></div>

          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-widest mb-4">
                Our Process
              </span>
              {/* UPDATED: Applied Vibrant Logo Mix Gradient to match Hero */}
              <h1 className="text-4xl md:text-6xl font-extrabold italic font-serif leading-[1.1] tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
                The Art of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
                  Craft
                </span>
              </h1>
              <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed">
                Every piece tells a story. From the raw earth to your hands,
                discover the soulful journey behind our handcrafted
                masterpieces.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: The Origin */}
              <div className="group relative bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/50 hover:shadow-[0_20px_50px_-15px_rgba(225,29,72,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Background Number */}
                <span className="absolute top-4 right-6 text-8xl font-black text-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                  01
                </span>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center text-white shadow-lg shadow-rose-500/20 mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <HiSparkles className="w-8 h-8 animate-pulse" />
                  </div>

                  <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-rose-700 transition-colors">
                    The Genesis
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                    We begin where nature ends. Our artisans travel to the
                    remotest villages to source raw materials—clay from
                    riverbeds, organic cotton, and natural dyes—ensuring every
                    creation is born from the earth's purity.
                  </p>
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-rose-500 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Card 2: The Creation */}
              <div className="group relative bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/50 hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden mt-0 md:mt-12">
                <span className="absolute top-4 right-6 text-8xl font-black text-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                  02
                </span>

                <div className="relative z-10">
                  {/* Green Gradient for "Hands/Leaves" aspect */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 mb-8 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                    <HiHand className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-emerald-700 transition-colors">
                    The Hands
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                    It's not manufacturing; it's mesmerizing. Every curve is
                    shaped by fingers that have mastered the art over decades.
                    We don't use machines to create the soul; we use human hands
                    that breathe life into inanimate objects.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Card 3: The Perfection */}
              <div className="group relative bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/50 hover:shadow-[0_20px_50px_-15px_rgba(251,146,60,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <span className="absolute top-4 right-6 text-8xl font-black text-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                  03
                </span>

                <div className="relative z-10">
                  {/* Amber/Orange Gradient for "Alchemy/Warmth" */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <HiChip className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-orange-700 transition-colors">
                    The Alchemy
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm md:text-base">
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

        <section className="py-20 lg:py-32 bg-stone-50 relative overflow-hidden">
          {/* Vibrant Background Blobs - Matching Theme */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-200 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-amber-200 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-emerald-100 rounded-full blur-[140px] opacity-20"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-16">
              {/* UPDATED: Applied Vibrant Logo Mix Gradient */}
              <h2 className="text-4xl md:text-5xl font-extrabold italic font-serif tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
                Words from our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
                  Collectors
                </span>
              </h2>
              <div className="h-1 w-20 mx-auto bg-gradient-to-r from-rose-500 to-orange-500 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 hover:-translate-y-2 border border-white/60">
                <BsQuote className="absolute top-8 left-8 w-24 h-24 text-rose-500/10 -z-0 group-hover:scale-110 transition-transform duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-6 bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                  </div>
                  <p className="text-stone-600 mb-8 leading-relaxed text-sm md:text-base">
                    "The quality is unmatched. You can truly feel the effort put
                    into every detail. It's now the centerpiece of my living
                    room."
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        className="w-12 h-12 rounded-full object-cover p-0.5 bg-white shadow-md"
                        alt="User"
                      />
                      <div className="absolute inset-0 rounded-full ring-2 ring-rose-500 ring-offset-2 ring-offset-transparent"></div>
                    </div>
                    <div>
                      <p className="font-bold text-stone-800 text-sm">
                        Sarah J.
                      </p>
                      <p className="text-xs text-rose-600 font-medium uppercase tracking-wide">
                        Interior Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 border border-white/60">
                <BsQuote className="absolute top-8 left-8 w-24 h-24 text-orange-500/10 -z-0 group-hover:scale-110 transition-transform duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-6 bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                  </div>
                  <p className="text-stone-600 mb-8 leading-relaxed text-sm md:text-base">
                    "I bought a gift for my mother, and she was moved to tears.
                    The packaging was also beautiful. A premium experience
                    overall."
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        className="w-12 h-12 rounded-full object-cover p-0.5 bg-white shadow-md"
                        alt="User"
                      />
                      <div className="absolute inset-0 rounded-full ring-2 ring-orange-500 ring-offset-2 ring-offset-transparent"></div>
                    </div>
                    <div>
                      <p className="font-bold text-stone-800 text-sm">
                        Mike R.
                      </p>
                      <p className="text-xs text-orange-600 font-medium uppercase tracking-wide">
                        Verified Buyer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-2 border border-white/60">
                <BsQuote className="absolute top-8 left-8 w-24 h-24 text-emerald-500/10 -z-0 group-hover:scale-110 transition-transform duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-6 bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                  </div>
                  <p className="text-stone-600 mb-8 leading-relaxed text-sm md:text-base">
                    "Supporting artisans while getting unique decor is a
                    win-win. The delivery was fast and the product is exactly as
                    shown."
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative">
                      <img
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        className="w-12 h-12 rounded-full object-cover p-0.5 bg-white shadow-md"
                        alt="User"
                      />
                      <div className="absolute inset-0 rounded-full ring-2 ring-emerald-500 ring-offset-2 ring-offset-transparent"></div>
                    </div>
                    <div>
                      <p className="font-bold text-stone-800 text-sm">
                        Emily T.
                      </p>
                      <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide">
                        Art Collector
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
