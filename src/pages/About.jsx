import React from "react";
import { HiSparkles } from "react-icons/hi";

const About = () => {
  return (
    <section className="min-h-screen bg-stone-50 py-20 px-6 lg:px-12 font-sans text-stone-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">
            Our{" "}
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
              Story
            </span>
          </h1>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            Preserving the art of handmade craftsmanship since 1995.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-14 border-t-4 border-l-4 border-rose-500 rounded-tl-3xl"></div>
            <img
              src="/35.jpg"
              alt="Artisan Working"
              className="rounded-3xl shadow-2xl w-full h-96 object-cover relative z-10" // Added h-96 and object-cover
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-stone-900">
              Dedicated to the Art of Making
            </h2>
            <p className="text-stone-600 leading-relaxed">
              At Artisan, we believe that every object tells a story. Our
              journey began three decades ago with a simple mission: to connect
              master craftsmen with discerning collectors who value the beauty
              of imperfection and the warmth of human touch.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We work directly with artisans from remote villages, ensuring fair
              trade and sustainable practices. Each piece in our collection is a
              testament to skills passed down through generations.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-stone-100 text-center flex-1">
                <p className="text-3xl font-bold text-rose-600">15+</p>
                <p className="text-xs text-stone-500 mt-1">Years Experience</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-stone-100 text-center flex-1">
                <p className="text-3xl font-bold text-orange-500">50+</p>
                <p className="text-xs text-stone-500 mt-1">Master Artisans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
