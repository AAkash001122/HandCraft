
import React, { useState } from "react";
import { BsHandbag, BsHeart, BsStarFill } from "react-icons/bs";

// Dummy Data for Products
const products = [
  {
    id: 1,
    name: "Ceramic Vase",
    price: "$129",
    category: "Ceramics",
    img: "/41.jpg", // Updated
    badge: "New",
  },
  {
    id: 2,
    name: "Leather Journal",
    price: "$45",
    category: "Leather",
    img: "/42.jpg", // Updated
    badge: "Bestseller",
  },
  {
    id: 3,
    name: "Woven Basket",
    price: "$65",
    category: "Textile",
    img: "/43.jpg", // Updated
    badge: "",
  },
  {
    id: 4,
    name: "Golden Hoops",
    price: "$89",
    category: "Jewelry",
    img: "/44.jpg", // Updated
    badge: "Sale",
  },
  {
    id: 5,
    name: "Artisan Pot",
    price: "$210",
    category: "Ceramics",
    img: "/45.jpg", // Updated
    badge: "",
  },
  {
    id: 6,
    name: "Silk Scarf",
    price: "$55",
    category: "Textile",
    img: "/46.jpg", // Updated
    badge: "Trending",
  },
  {
    id: 7,
    name: "Wooden Bowl",
    price: "$75",
    category: "Wood",
    img: "/47.jpg", // Updated
    badge: "",
  },
  {
    id: 8,
    name: "Silver Ring",
    price: "$120",
    category: "Jewelry",
    img: "/48.jpg", // Updated
    badge: "New",
  },
];

const categories = ["All", "Ceramics", "Leather", "Textile", "Jewelry", "Wood"];

const ExploreStore = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic (optional, for future use)
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="min-h-screen bg-stone-50 py-20 px-6 lg:px-12 font-sans text-stone-800">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold italic font-serif tracking-tight mb-4">
            Our{" "}
            {/* Updated: Vibrant Logo Mix Gradient (Right to Left) */}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
              Collections
            </span>
          </h1>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            Explore our curated selection of handcrafted goods, made with love
            by artisans worldwide.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-stone-900 text-white shadow-lg"
                  : "bg-white text-stone-600 border border-stone-200 hover:border-stone-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-4 bg-stone-100 border border-stone-100">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge */}
                {product.badge && (
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow ${
                      product.badge === "Sale"
                        ? "bg-rose-500 text-white" // Rose (Flower)
                        : product.badge === "New"
                          ? "bg-stone-800 text-white" // Stone (Classic)
                          : product.badge === "Trending"
                            ? "bg-emerald-600 text-white" // Emerald (Leaves)
                            : "bg-orange-500 text-white" // Bestseller to Orange (Warmth)
                    }`}
                  >
                    {product.badge}
                  </div>
                )}

                {/* Hover Overlay Actions */}
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-4 bg-white rounded-full text-stone-900 hover:bg-rose-600 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <BsHandbag className="w-5 h-5" />
                  </button>
                  <button className="p-4 bg-white rounded-full text-stone-900 hover:bg-rose-600 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                    <BsHeart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Card Info */}
              <div className="px-2">
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">
                  {product.category}
                </p>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-stone-800">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-400">
                    <BsStarFill className="w-3 h-3" />
                  </div>
                </div>
                <p className="text-rose-700 font-bold mt-1">
                  {product.price}.00
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreStore;
