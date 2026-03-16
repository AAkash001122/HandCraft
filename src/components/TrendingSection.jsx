import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEnvelope, BsHeart, BsArrowRight, BsX } from "react-icons/bs";

const TrendingSection = () => {
  // ============================================================
  // DATA
  // ============================================================
  const trendingProducts = [
    {
      id: 1,
      title: "Customised toran price 699/-",
      category: "Decor",
      image: "/30.jpg",
      tag: "New",
      tagColor: "bg-rose-100 text-rose-700",
    },
    {
      id: 2,
      title: "Roli chawal plate 79/-",
      category: "Puja Essentials",
      image: "/31.jpg",
      tag: "Bestseller",
      tagColor: "bg-orange-100 text-orange-700",
    },
    {
      id: 3,
      title: "Customised peacock toran",
      category: "Decor",
      image: "/32.jpg",
      tag: null,
      tagColor: "",
    },
    {
      id: 4,
      title: "Miniature Art",
      category: "Art",
      image: "/38.jpg",
      tag: "Hot",
      tagColor: "bg-amber-100 text-amber-700",
    },
    {
      id: 5,
      title: "Golden hanging cage with peacock 699/-",
      category: "Decor",
      image: "/34.jpg",
      tag: "Sale",
      tagColor: "bg-red-100 text-red-700",
    },
    {
      id: 6,
      title: "Designer tea light holder price 999/-",
      category: "Lighting",
      image: "/35.jpg",
      tag: null,
      tagColor: "",
    },
    {
      id: 7,
      title: "Block Print",
      category: "Textile",
      image: "/36.jpg",
      tag: "New",
      tagColor: "bg-rose-100 text-rose-700",
    },
    {
      id: 8,
      title: "Hexagon resin photo frame price 2500/-",
      category: "Gifts",
      image: "/37.jpg",
      tag: null,
      tagColor: "",
    },
    {
      id: 9,
      title: "Jute Bags",
      category: "Fashion",
      image: "/38.jpg",
      tag: "Trending",
      tagColor: "bg-emerald-100 text-emerald-700",
    },
    {
      id: 10,
      title: "Customised hamper price 1199/-",
      category: "Gifts",
      image: "/39.jpg",
      tag: null,
      tagColor: "",
    },
  ];

  // State for Popup
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling background
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  // Generic description generator since data doesn't have it
  const getDescription = (category) => {
    return `Exquisite handcrafted ${category.toLowerCase()} item, made with premium quality materials. Perfect for gifting or adding a touch of elegance to your space. Each piece is unique and crafted with love.`;
  };

  return (
    <section className="py-20 lg:py-32 bg-stone-50 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-200 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold italic font-serif tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-500 to-emerald-600">
              Trending{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-500 to-emerald-600">
                Now
              </span>
            </h2>
            <p className="mt-2 text-stone-500 text-lg">
              Loved by our community worldwide.
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-stone-300 text-stone-800 font-bold hover:bg-white hover:border-rose-400 hover:text-rose-600 hover:shadow-lg transition-all duration-300 group">
            View All{" "}
            <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => openModal(product)} // Open Modal on Click
              className="group relative bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-rose-500/15 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-stone-100">
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

                {/* Hover Action Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 bg-gradient-to-t from-stone-900/90 to-transparent">
                  <div className="flex gap-2 justify-center">
                    <button className="flex-1 bg-white text-stone-900 py-2.5 rounded-lg font-bold text-xs hover:bg-gradient-to-r hover:from-rose-600 hover:to-orange-500 hover:text-white transition-colors shadow-lg flex items-center justify-center gap-1">
                      Quick View
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to wishlist logic here
                      }}
                      className="p-2.5 bg-white text-stone-900 rounded-lg shadow-lg hover:text-rose-600 transition-colors"
                    >
                      <BsHeart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow relative z-10 bg-white">
                <p className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold mb-1">
                  {product.category}
                </p>
                <h3 className="text-sm font-bold text-stone-800 leading-tight mb-2 group-hover:text-rose-700 transition-colors line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-stone-500 text-xs leading-relaxed mt-auto">
                  Handcrafted with love.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center items-center gap-2">
          <button
            className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-300 cursor-not-allowed"
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
          <button className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-600 to-orange-500 text-white shadow-lg shadow-rose-500/30 font-bold text-sm">
            1
          </button>
          <button
            className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-300 cursor-not-allowed"
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

      {/* ============================================================ */}
      {/* PREMIUM POPUP MODAL */}
      {/* ============================================================ */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row transform transition-all duration-300 scale-100 opacity-100 animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur rounded-full text-stone-500 hover:text-rose-600 hover:bg-white shadow-md transition-all duration-200"
            >
              <BsX className="w-6 h-6" />
            </button>

            {/* Left: Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-stone-100 relative overflow-hidden group">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Gradient Overlay on Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r"></div>
            </div>

            {/* Right: Details Section */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center bg-white relative overflow-hidden">
              {/* Decorative Background Element inside Modal */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

              {/* Category Tag */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-bold uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                {selectedProduct.tag && (
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold ${selectedProduct.tagColor}`}
                  >
                    {selectedProduct.tag}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-4 leading-tight">
                {selectedProduct.title}
              </h2>

              {/* Description */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
                {getDescription(selectedProduct.category)}
              </p>

              {/* Price / Action Area */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-stone-400 uppercase font-semibold">
                      Status
                    </p>
                    <p className="text-emerald-600 text-sm font-bold flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                      In Stock
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/enquiry"
                    onClick={closeModal}
                    className="flex-1 bg-gradient-to-r from-rose-600 to-orange-500 text-white py-4 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <BsEnvelope className="w-4 h-4" />
                    Enquire Now
                  </Link>
                  <button className="px-6 py-4 rounded-xl border-2 border-stone-200 text-stone-700 font-bold text-sm hover:border-rose-400 hover:text-rose-600 transition-colors flex items-center justify-center gap-2">
                    <BsHeart className="w-4 h-4" />
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrendingSection;
