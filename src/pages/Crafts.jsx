import React from "react";
import { HiSparkles, HiChip, HiHand, HiLightningBolt } from "react-icons/hi";

const Crafts = () => {
  return (
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
            discover the soulful journey behind our handcrafted masterpieces.
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
                We begin where nature ends. Our artisans travel to the remotest
                villages to source raw materials—clay from riverbeds, organic
                cotton, and natural dyes—ensuring every creation is born from
                the earth's purity.
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
                It's not manufacturing; it's mesmerizing. Every curve is shaped
                by fingers that have mastered the art over decades. We don't use
                machines to create the soul; we use human hands that breathe
                life into inanimate objects.
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
                The final polish and detailing are done with laser precision. We
                blend ancient traditions with modern quality checks to ensure
                that what you hold isn't just a product, but a legacy that lasts
                for generations.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crafts;
