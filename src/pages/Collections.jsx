import React from "react";
import { Link } from "react-router-dom";

const Collections = () => {
  const collections = [
    { name: "Pottery & Ceramics", count: "24 Items", img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800&auto=format&fit=crop" },
    { name: "Textiles & Weaves", count: "18 Items", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800&auto=format&fit=crop" },
    { name: "Artisan Jewelry", count: "32 Items", img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop" },
    { name: "Woodwork", count: "12 Items", img: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="min-h-screen bg-[#FDFCF8] py-20 px-6 lg:px-12 font-sans text-stone-800">
      <div className="container mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">
            Browse <span className="italic font-serif text-amber-700">Collections</span>
          </h1>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            Curated categories of our finest handcrafted goods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((item, index) => (
            <div key={index} className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer">
              <img 
                src={item.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={item.name} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 z-10 text-white">
                <h3 className="text-3xl font-bold mb-2">{item.name}</h3>
                <p className="text-stone-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {item.count}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Collections;