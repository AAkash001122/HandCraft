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
      <main className="relative bg-slate-50 font-sans text-slate-800 overflow-hidden selection:bg-fuchsia-100 selection:text-fuchsia-900">
        <section className="relative bg-white font-sans text-slate-800 overflow-hidden selection:bg-fuchsia-100 selection:text-fuchsia-900">
          {/* VIBRANT BACKGROUND BLOBS */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-violet-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-fuchsia-400 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute top-[40%] left-[30%] w-[20rem] h-[20rem] bg-blue-300 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-12 py-8 lg:py-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur border border-violet-200 rounded-full shadow-sm mx-auto lg:mx-0">
                  <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-violet-600">
                    New Collection 2024
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 leading-[1.1] tracking-tight">
                  Crafted with <br />
                  {/* VIBRANT GRADIENT TEXT */}
                  <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                    Soul & Story
                  </span>
                </h1>

                <p className="text-lg text-slate-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Discover unique handmade treasures crafted by master artisans.
                  Each piece is a journey of tradition and elegance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <Link to="/enquiry">
                    {/* VIBRANT GRADIENT BUTTON */}
                    <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full text-sm font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-fuchsia-500/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                      Get Enquiry
                      <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>

                  <Link to="/store">
                    {/* VIBRANT BORDER BUTTON */}
                    <button className="px-8 py-4 border-2 border-violet-300 text-violet-700 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-violet-50 hover:border-violet-400 transition-all duration-300 w-full sm:w-auto">
                      Explore Store
                    </button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-200 mt-8 justify-center lg:justify-start">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-violet-50 rounded-lg">
                      <HiTruck className="w-6 h-6 text-violet-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-slate-800">
                        Free Shipping
                      </p>
                      <p className="text-xs text-slate-400">
                        Worldwide Delivery
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-violet-50 rounded-lg">
                      <HiShieldCheck className="w-6 h-6 text-violet-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-slate-800">
                        Authenticity
                      </p>
                      <p className="text-xs text-slate-400">100% Handmade</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] lg:h-[600px] w-full">
                {/* VIBRANT IMAGE BORDERS */}
                <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[3rem] overflow-hidden shadow-2xl shadow-violet-500/20 border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-700 z-10">
                  <img
                    src="/15.jpg"
                    alt="Handcrafted Pottery"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/20 to-transparent"></div>
                </div>

                <div className="absolute bottom-10 left-0 w-1/2 h-1/2 rounded-[2rem] overflow-hidden shadow-2xl shadow-pink-500/20 border-4 border-white transform -rotate-6 hover:rotate-0 transition-all duration-500 z-20">
                  <img
                    src="/41.jpg"
                    alt="Leather Craft"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute bottom-24 right-4 p-4 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl shadow-violet-500/10 border border-white/50 flex items-center gap-4 z-30 hover:scale-105 transition-transform cursor-pointer">
                  <img
                    src="/4.jpg"
                    className="w-16 h-16 rounded-xl object-cover shadow-md"
                    alt="Featured Product"
                  />
                  <div>
                    <div className="flex items-center gap-1 text-fuchsia-500 mb-1">
                      <BsStarFill className="w-3 h-3" />
                      <BsStarFill className="w-3 h-3" />
                      <BsStarFill className="w-3 h-3" />
                      <BsStarFill className="w-3 h-3" />
                      <BsStarFill className="w-3 h-3" />
                    </div>
                    <p className="font-bold text-slate-900 text-sm">
                      Ceramic Vase
                    </p>
                    {/* <p className="text-violet-600 font-bold text-sm">$129.00</p> */}
                  </div>
                  <button className="p-2 bg-slate-900 text-white rounded-full ml-2 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 transition-colors">
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
        <section className="min-h-screen bg-slate-50 py-24 px-6 lg:px-12 font-sans text-slate-900 relative overflow-hidden">
          {/* Background Decorative Blobs for Vibrancy */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-200 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-200 rounded-full blur-[120px] opacity-30"></div>

          <div className="container mx-auto max-w-7xl relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-widest mb-4">
                Our Process
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
                The Art of{" "}
                <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                  Craft
                </span>
              </h1>
              <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                Every piece tells a story. From the raw earth to your hands,
                discover the soulful journey behind our handcrafted
                masterpieces.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: The Origin */}
              <div className="group relative bg-white/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/50 hover:shadow-[0_20px_50px_-15px_rgba(124,58,237,0.25)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Background Number */}
                <span className="absolute top-4 right-6 text-8xl font-black text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                  01
                </span>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/30 mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <HiSparkles className="w-8 h-8 animate-pulse" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-violet-700 transition-colors">
                    The Genesis
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    We begin where nature ends. Our artisans travel to the
                    remotest villages to source raw materials—clay from
                    riverbeds, organic cotton, and natural dyes—ensuring every
                    creation is born from the earth's purity.
                  </p>
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Card 2: The Creation */}
              <div className="group relative bg-white/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/50 hover:shadow-[0_20px_50px_-15px_rgba(232,121,249,0.25)] transition-all duration-500 hover:-translate-y-2 overflow-hidden mt-0 md:mt-12">
                <span className="absolute top-4 right-6 text-8xl font-black text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                  02
                </span>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/30 mb-8 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                    <HiHand className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-fuchsia-700 transition-colors">
                    The Hands
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    It's not manufacturing; it's mesmerizing. Every curve is
                    shaped by fingers that have mastered the art over decades.
                    We don't use machines to create the soul; we use human hands
                    that breathe life into inanimate objects.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-fuchsia-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Card 3: The Perfection */}
              <div className="group relative bg-white/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/50 hover:shadow-[0_20px_50px_-15px_rgba(99,102,241,0.25)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <span className="absolute top-4 right-6 text-8xl font-black text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                  03
                </span>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <HiChip className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors">
                    The Alchemy
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    The final polish and detailing are done with laser
                    precision. We blend ancient traditions with modern quality
                    checks to ensure that what you hold isn't just a product,
                    but a legacy that lasts for generations.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
          {/* Vibrant Background Blobs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-fuchsia-400 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-300 rounded-full blur-[140px] opacity-10"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                Words from our{" "}
                <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                  Collectors
                </span>
              </h2>
              <div className="h-1 w-20 mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 hover:-translate-y-2 border border-white/60">
                <BsQuote className="absolute top-8 left-8 w-24 h-24 text-violet-500/10 -z-0 group-hover:scale-110 transition-transform duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">
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
                      <div className="absolute inset-0 rounded-full ring-2 ring-violet-500 ring-offset-2 ring-offset-transparent"></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">
                        Sarah J.
                      </p>
                      <p className="text-xs text-violet-500 font-medium uppercase tracking-wide">
                        Interior Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-500 hover:-translate-y-2 border border-white/60">
                <BsQuote className="absolute top-8 left-8 w-24 h-24 text-fuchsia-500/10 -z-0 group-hover:scale-110 transition-transform duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">
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
                      <div className="absolute inset-0 rounded-full ring-2 ring-fuchsia-500 ring-offset-2 ring-offset-transparent"></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">
                        Mike R.
                      </p>
                      <p className="text-xs text-fuchsia-500 font-medium uppercase tracking-wide">
                        Verified Buyer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2 border border-white/60">
                <BsQuote className="absolute top-8 left-8 w-24 h-24 text-indigo-500/10 -z-0 group-hover:scale-110 transition-transform duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                    <BsStarFill className="fill-current" />
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">
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
                      <div className="absolute inset-0 rounded-full ring-2 ring-indigo-500 ring-offset-2 ring-offset-transparent"></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">
                        Emily T.
                      </p>
                      <p className="text-xs text-indigo-500 font-medium uppercase tracking-wide">
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
