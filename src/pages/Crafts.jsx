import React from "react";
import { HiSparkles, HiChip } from "react-icons/hi";

const Crafts = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-6 lg:px-12 font-sans text-stone-800">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">
            The Art of <span className="italic font-serif text-amber-700">Craft</span>
          </h1>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            Discover the meticulous process behind every creation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-[#FDFCF8] p-8 rounded-3xl border border-stone-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 bg-stone-900 rounded-2xl w-fit text-amber-400 mb-6">
              <HiSparkles className="w-8 h-8"/>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Hand Selection</h3>
            <p className="text-stone-500">Every raw material is hand-picked by our artisans to ensure the highest quality and sustainability.</p>
          </div>

          <div className="bg-[#FDFCF8] p-8 rounded-3xl border border-stone-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 bg-stone-900 rounded-2xl w-fit text-amber-400 mb-6">
              <HiChip className="w-8 h-8"/>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Traditional Techniques</h3>
            <p className="text-stone-500">We use age-old methods passed down through generations, preserving cultural heritage in every piece.</p>
          </div>

          <div className="bg-[#FDFCF8] p-8 rounded-3xl border border-stone-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 bg-stone-900 rounded-2xl w-fit text-amber-400 mb-6">
              <HiSparkles className="w-8 h-8"/>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Finishing Touches</h3>
            <p className="text-stone-500">The final polish and detailing are done with precision, giving each product its unique character.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Crafts;