import React from "react";
import { Link } from "react-router-dom"; // Import Link added
import { BsEnvelope, BsHeart, BsArrowRight } from "react-icons/bs";

const TrendingSection = () => {
  // ============================================================
  // DATA: 10 ITEMS (No Price, No Rating)
  // ============================================================

  const trendingProducts = [
    {
      id: 1,
      title: "Minimalist Vase", // /30.jpg ka actual naam (Pottery)
      category: "Ceramics",
      image: "/30.jpg",
      tag: "New",
      tagColor: "bg-violet-100 text-violet-700",
    },
    {
      id: 2,
      title: "Golden Hoop Earrings", // /31.jpg ka actual naam (Jewelry)
      category: "Jewelry",
      image: "/31.jpg",
      tag: "Bestseller",
      tagColor: "bg-fuchsia-100 text-fuchsia-700",
    },
    {
      id: 3,
      title: "Vintage Leather Bag", // /32.jpg ka actual naam (Leather)
      category: "Leather",
      image: "/32.jpg",
      tag: null,
      tagColor: "",
    },
    {
      id: 4,
      title: "Woven Basket Set", // /33.jpg ka actual naam (Textile)
      category: "Textile",
      image: "/33.jpg",
      tag: "Hot",
      tagColor: "bg-orange-100 text-orange-700",
    },
    {
      id: 5,
      title: "Hand Painted Plate", // /34.jpg ka actual naam (Ceramics)
      category: "Ceramics",
      image: "/34.jpg",
      tag: "Sale",
      tagColor: "bg-red-100 text-red-700",
    },
    {
      id: 6,
      title: "Silver Pendant", // /35.jpg ka actual naam (Jewelry)
      category: "Jewelry",
      image: "/35.jpg",
      tag: null,
      tagColor: "",
    },
    {
      id: 7,
      title: "Macrame Wall Hanging", // /36.jpg ka actual naam (Decor)
      category: "Decor",
      image: "/36.jpg",
      tag: "New",
      tagColor: "bg-violet-100 text-violet-700",
    },
    {
      id: 8,
      title: "Clay Sculpture", // /37.jpg ka actual naam (Art)
      category: "Art",
      image: "/37.jpg",
      tag: null,
      tagColor: "",
    },
    {
      id: 9,
      title: "Copper Teapot", // /38.jpg ka actual naam (Kitchen)
      category: "Kitchen",
      image: "/38.jpg",
      tag: "Trending",
      tagColor: "bg-emerald-100 text-emerald-700",
    },
    {
      id: 10,
      title: "Bamboo Chair", // /39.jpg ka actual naam (Furniture)
      category: "Furniture",
      image: "/39.jpg",
      tag: null,
      tagColor: "",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Vibrant Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2">
              Trending{" "}
              <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                Now
              </span>
            </h2>
            <p className="mt-2 text-slate-500 text-lg">
              Loved by our community worldwide.
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-800 font-bold hover:bg-white hover:border-violet-400 hover:text-violet-600 hover:shadow-lg transition-all duration-300 group">
            View All{" "}
            <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* ONE ROW GRID: Responsive columns (2 to 5) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-violet-500/15 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                {product.tag && (
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold shadow-sm z-10 ${product.tagColor}`}
                  >
                    {product.tag}
                  </div>
                )}

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Action Overlay (Slide Up) */}
                <div className="absolute inset-x-0 bottom-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 bg-gradient-to-t from-slate-900/80 to-transparent">
                  <div className="flex gap-2 justify-center">
                    {/* UPDATED: Enquiry Button is now a Link */}
                    <Link
                      to="/enquiry"
                      className="flex-1 bg-white text-slate-900 py-2.5 rounded-lg font-bold text-xs hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:text-white transition-colors shadow-lg flex items-center justify-center gap-1"
                    >
                      <BsEnvelope className="w-3 h-3" /> Enquiry
                    </Link>

                    <button className="p-2.5 bg-white text-slate-900 rounded-lg shadow-lg hover:text-fuchsia-600 transition-colors">
                      <BsHeart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Container (Vertical Layout) */}
              <div className="p-4 flex flex-col flex-grow relative z-10 bg-white">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">
                  {product.category}
                </p>
                <h3 className="text-sm font-bold text-slate-800 leading-tight mb-2 group-hover:text-violet-700 transition-colors line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mt-auto">
                  Handcrafted with love.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center items-center gap-2">
          <button
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 cursor-not-allowed"
            disabled
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30 font-bold text-sm">
            1
          </button>

          <button
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 cursor-not-allowed"
            disabled
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
