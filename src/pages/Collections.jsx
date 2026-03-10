import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Collections = () => {
  const collections = [
    { id: 1, name: "Modern Pottery", count: "24 Items", img: "/1.jpg" },
    { id: 2, name: "Hand Woven Textiles", count: "18 Items", img: "/2.jpg" },
    { id: 3, name: "Artisan Jewelry", count: "32 Items", img: "/3.jpg" },
    { id: 4, name: "Rustic Woodwork", count: "12 Items", img: "/52.jpg" },
    { id: 5, name: "Ceramic Vases", count: "45 Items", img: "/15.jpg" },
    { id: 6, name: "Leather Crafts", count: "15 Items", img: "/31.jpg" },
    { id: 7, name: "Glass Blowing", count: "8 Items", img: "/7.jpg" },
    { id: 8, name: "Macrame Decor", count: "22 Items", img: "/8.jpg" },
    { id: 9, name: "Silk Sarees", count: "30 Items", img: "/9.jpg" },
    { id: 10, name: "Stone Sculpture", count: "10 Items", img: "/41.jpg" },
  ];

  return (
    <section className="min-h-screen bg-white py-20 px-4 lg:px-12 font-sans text-slate-900 relative overflow-hidden">
      {/* CSS ANIMATIONS FOR CIRCLES */}
      <style jsx>{`
        @keyframes slideRight {
          0% {
            transform: translateX(-20%) translateZ(0);
          }
          50% {
            transform: translateX(10%) translateZ(0);
          }
          100% {
            transform: translateX(-20%) translateZ(0);
          }
        }
        @keyframes slideLeft {
          0% {
            transform: translateX(20%) translateZ(0);
          }
          50% {
            transform: translateX(-10%) translateZ(0);
          }
          100% {
            transform: translateX(20%) translateZ(0);
          }
        }
        .circle-slider-right {
          animation: slideRight 15s ease-in-out infinite;
        }
        .circle-slider-left {
          animation: slideLeft 18s ease-in-out infinite;
        }
      `}</style>

      {/* BACKGROUND: 2 CIRCLE TYPE SLIDER ANIMATIONS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circle 1: Violet/Pink Gradient (Slides Left to Right) */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full blur-[120px] opacity-30 circle-slider-right"></div>

        {/* Circle 2: Blue/Indigo Gradient (Slides Right to Left) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-bl from-blue-500 to-indigo-600 rounded-full blur-[120px] opacity-30 circle-slider-left"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Explore{" "}
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
              Collections
            </span>
          </h1>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Curated categories of our finest handcrafted goods.
          </p>
        </div>

        {/* GRID: 2 Rows x 5 Columns (Desktop) */}
        {/* Responsive: 2 cols (mobile) -> 3 cols (tablet) -> 5 cols (desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {collections.map((item) => (
            <Link
              to={`/collections/${item.id}`}
              key={item.id}
              className="group relative h-[300px] cursor-pointer bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-2 border border-slate-100"
            >
              {/* Image */}
              <div className="relative h-[65%] w-full overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ease-out"
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Text Content */}
              <div className="p-4 relative h-[35%] flex flex-col justify-center">
                <h3 className="text-sm font-bold text-slate-800 leading-tight group-hover:text-violet-700 transition-colors truncate">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[10px] font-semibold text-slate-400">
                    {item.count}
                  </p>
                  <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-violet-600 transition-colors shadow-sm">
                    {/* <BsArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white" /> */}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
