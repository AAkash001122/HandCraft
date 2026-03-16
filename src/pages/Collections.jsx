import React, { useState } from "react";
import { BsArrowRight, BsX } from "react-icons/bs";

const Collections = () => {
  const collections = [
    { id: 1, name: "Customised toran price 699/-", count: "24 Items", img: "/30.jpg" },
    { id: 2, name: "Roli chawal plate 79/-", count: "18 Items", img: "/31.jpg" },
    { id: 3, name: "Customised peacock toran", count: "32 Items", img: "/32.jpg" },
    { id: 4, name: "Rustic Woodwork", count: "12 Items", img: "/52.jpg" },
    {
      id: 5,
      name: "Customised hamper price 1199/-",
      count: "45 Items",
      img: "/15.jpg",
    },
    {
      id: 6,
      name: "Roli chawal plate price 79/-",
      count: "15 Items",
      img: "/31.jpg",
    },
    { id: 7, name: "Glass Blowing", count: "8 Items", img: "/7.jpg" },
    { id: 8, name: "Glass candle", count: "22 Items", img: "/8.jpg" },
    { id: 9, name: "Jar candle 399/-", count: "30 Items", img: "/9.jpg" },
    {
      id: 10,
      name: "Evil eye hanging price 299/-",
      count: "10 Items",
      img: "/41.jpg",
    },
  ];

  // ============================================================
  // MODAL STATE & HANDLERS
  // ============================================================
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);

  const openModal = (item) => {
    setSelectedCollection(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCollection(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="min-h-screen bg-stone-50 py-12 sm:py-20 px-4 lg:px-12 font-sans text-stone-900 relative overflow-hidden">
      {/* CSS ANIMATIONS FOR CIRCLES */}
      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(-20%) translateZ(0); }
          50% { transform: translateX(10%) translateZ(0); }
          100% { transform: translateX(-20%) translateZ(0); }
        }
        @keyframes slideLeft {
          0% { transform: translateX(20%) translateZ(0); }
          50% { transform: translateX(-10%) translateZ(0); }
          100% { transform: translateX(20%) translateZ(0); }
        }
        .circle-slider-right { animation: slideRight 15s ease-in-out infinite; }
        .circle-slider-left { animation: slideLeft 18s ease-in-out infinite; }
      `}</style>

      {/* BACKGROUND: 2 CIRCLE TYPE SLIDER ANIMATIONS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circle 1: Rose/Orange Gradient */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-br from-rose-400 to-orange-300 rounded-full blur-[120px] opacity-30 circle-slider-right hidden sm:block"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[90vw] h-[90vw] bg-gradient-to-br from-rose-400 to-orange-300 rounded-full blur-[100px] opacity-20 circle-slider-right sm:hidden"></div>

        {/* Circle 2: Emerald/Teal Gradient */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-bl from-emerald-300 to-teal-400 rounded-full blur-[120px] opacity-30 circle-slider-left hidden sm:block"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-gradient-to-bl from-emerald-300 to-teal-400 rounded-full blur-[100px] opacity-20 circle-slider-left sm:hidden"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900 tracking-tight mb-4">
            Explore{" "}
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-l from-rose-600 via-orange-500 to-emerald-600">
              Collections
            </span>
          </h1>
          <p className="mt-4 text-stone-500 text-base sm:text-lg max-w-2xl mx-auto">
            Curated categories of our finest handcrafted goods.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {collections.map((item) => (
            // Changed from Link to div for click-to-open-modal functionality
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="group relative h-80 cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-300 hover:-translate-y-2 border border-stone-100"
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
                <h3 className="text-sm font-bold text-stone-800 leading-tight group-hover:text-rose-700 transition-colors truncate">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[10px] font-semibold text-stone-400">
                    {item.count}
                  </p>
                  <div className="w-6 h-6 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-rose-600 transition-colors shadow-sm">
                    <BsArrowRight className="w-3 h-3 text-stone-400 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* PREMIUM POPUP MODAL */}
      {/* ============================================================ */}
      {isModalOpen && selectedCollection && (
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
                src={selectedCollection.img}
                alt={selectedCollection.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r"></div>
            </div>

            {/* Right: Details Section */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center bg-white relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

              {/* Category Tag */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-bold uppercase tracking-wider">
                  {selectedCollection.count}
                </span>
                <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Available
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-4 leading-tight">
                {selectedCollection.name}
              </h2>

              {/* Description */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
                Explore our exclusive collection of {selectedCollection.name}.
                Each item is handpicked to ensure the highest quality and
                craftsmanship. Perfect for elevating your lifestyle or gifting
                your loved ones.
              </p>

              {/* Action Area */}
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
                  <button className="flex-1 bg-gradient-to-r from-rose-600 to-orange-500 text-white py-4 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    <BsArrowRight className="w-4 h-4" />
                    View Collection
                  </button>
                  <button className="px-6 py-4 rounded-xl border-2 border-stone-200 text-stone-700 font-bold text-sm hover:border-rose-400 hover:text-rose-600 transition-colors flex items-center justify-center gap-2">
                    Share
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

export default Collections;
