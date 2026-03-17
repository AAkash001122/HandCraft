import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

const CollectionsSlider = () => {
  // ============================================================
  // 1. DATA (Same as before)
  // ============================================================
  const collectionsData = [
    { id: 1, title: "Basket hampers 999/-", img: "15.jpg" },
    {
      id: 2,
      title: "Customised photo resin keychain price - 299/-",
      img: "16.jpg",
    },
    {
      id: 3,
      title: "Customised resin photo  frame price 399/-",
      img: "17.jpg",
    },
    { id: 4, title: "Peacock tealighht holder price 299/-", img: "18.jpg" },
    { id: 5, title: "Bracelet price 99/-", img: "19.jpg" },
    {
      id: 6,
      title: "Heart customised resin photo frame  price 699/-",
      img: "20.jpg",
    },
    { id: 7, title: "Dream catcher price 199/-", img: "21.jpg" },
    { id: 8, title: "Shagun for any occasion", img: "22.jpg" },
    { id: 9, title: "Dream catcher price 99/-", img: "23.jpg" },
    { id: 10, title: "Jewellery set 399/-", img: "24.jpg" },
    { id: 11, title: "Gift set -499", img: "25.jpg" },
    { id: 12, title: "Luxury hamper for bride ", img: "26.jpg" },
    { id: 13, title: "Basket hampers price 699/-", img: "27.jpg" },
    { id: 14, title: "Customised toran at just 299/-", img: "28.jpg" },
    { id: 15, title: "Glass Blowing", img: "29.jpg" },
    { id: 16, title: "Customised toran price 699/-", img: "30.jpg" },
    { id: 17, title: "Roli chawal plate 79/-", img: "31.jpg" },
    { id: 18, title: "Customised peacock toran", img: "32.jpg" },
    { id: 19, title: "Miniature Art", img: "33.jpg" },
    { id: 20, title: "Golden hanging cage with peacock 699/-", img: "34.jpg" },
    { id: 21, title: "Designer tea light holder price 999/-", img: "35.jpg" },
    { id: 22, title: "Pupprt design tea light holder", img: "36.jpg" },
    { id: 23, title: "Hexagon resin photo frame price 2500/-", img: "37.jpg" },
    { id: 24, title: "Customised resin heart key ring", img: "38.jpg" },
    { id: 25, title: "Customised hamper price 1199/-", img: "39.jpg" },
  ];

  const row1Data = collectionsData.slice(0, 13);
  const row2Data = collectionsData.slice(13, 25);

  // ============================================================
  // MODAL STATE & HANDLERS
  // ============================================================
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedProduct(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  // ============================================================
  // 2. SCROLL ROW COMPONENT
  // ============================================================
  const InfiniteScrollRow = ({ data, direction }) => {
    const sliderRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const startX = useRef(0);
    const scrollLeft = useRef(0);

    useLayoutEffect(() => {
      const slider = sliderRef.current;
      if (direction === "right" && slider) {
        slider.scrollLeft = slider.scrollWidth / 2;
      }
    }, [data, direction]);

    useEffect(() => {
      const slider = sliderRef.current;
      let animationFrameId;
      const speed = 1;

      const step = () => {
        if (slider && !isPaused && !isDragging) {
          if (direction === "left") {
            slider.scrollLeft += speed;
            if (slider.scrollLeft >= slider.scrollWidth / 2) {
              slider.scrollLeft = 0;
            }
          } else {
            slider.scrollLeft -= speed;
            if (slider.scrollLeft <= 0) {
              slider.scrollLeft = slider.scrollWidth / 2;
            }
          }
        }
        animationFrameId = requestAnimationFrame(step);
      };

      animationFrameId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, isDragging, direction]);

    const handleMouseDown = (e) => {
      setIsDragging(true);
      startX.current = e.pageX;
      scrollLeft.current = sliderRef.current.scrollLeft;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (x - startX.current) * 2;
      sliderRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUpOrLeave = () => {
      if (!isDragging) return;
      const slider = sliderRef.current;
      if (slider) {
        const halfWidth = slider.scrollWidth / 2;
        if (slider.scrollLeft < 0) {
          slider.scrollLeft = halfWidth + slider.scrollLeft;
        } else if (slider.scrollLeft > halfWidth) {
          slider.scrollLeft = slider.scrollLeft - halfWidth;
        }
      }
      setIsDragging(false);
    };

    const handleTouchStart = (e) => {
      setIsDragging(true);
      startX.current = e.touches[0].pageX;
      scrollLeft.current = sliderRef.current.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX;
      const walk = (x - startX.current) * 2;
      sliderRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleTouchEnd = () => {
      handleMouseUpOrLeave();
    };

    const handleContainerLeave = () => {
      handleMouseUpOrLeave();
      setIsPaused(false);
    };

    return (
      <div
        ref={sliderRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto cursor-grab active:cursor-grabbing mask-gradient scrollbar-hide select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleContainerLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
      >
        {[...data, ...data].map((item, i) => (
          <Card key={`${direction}-${item.id}-${i}`} item={item} index={i} />
        ))}
      </div>
    );
  };

  // ============================================================
  // 3. CARD COMPONENT
  // ============================================================

  const Card = ({ item, index }) => {
    return (
      <div
        className="relative w-[70%] sm:w-[60%] md:w-[48%] lg:w-64 h-64 sm:h-72 md:h-80 lg:h-80 flex-shrink-0 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(244,63,94,0.25)] hover:border-rose-300 transition-all duration-500 hover:-translate-y-2 overflow-hidden group/card cursor-pointer"
        style={{
          animation: `floatCard 6s ease-in-out infinite`,
          animationDelay: `${index * 0.3}s`,
        }}
        // Added Click Handler
        onClick={() => openModal(item)}
      >
        <div className="h-[65%] w-full overflow-hidden bg-stone-100 pointer-events-none">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
          />
        </div>

        <div className="h-[35%] p-3 sm:p-4 flex flex-col justify-center relative z-10 bg-white pointer-events-none">
          <h3 className="text-sm sm:text-base md:text-lg text-stone-900 font-bold truncate">
            {item.title}
          </h3>
          <p className="text-[10px] sm:text-xs text-rose-600 font-semibold uppercase tracking-wider mt-1">
            Handcrafted
          </p>

          <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-stone-800 text-white flex items-center justify-center opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-lg hover:bg-rose-600 pointer-events-auto">
            <svg
              className="w-2.5 h-2.5 sm:w-3 sm:h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  // ============================================================
  // 4. MAIN RENDER
  // ============================================================
  return (
    <section className="py-12 sm:py-20 bg-stone-50 overflow-hidden relative select-none">
      {/* Responsive Blobs using standard scale */}
      <div className="absolute top-10 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-rose-200 rounded-full blur-[80px] sm:blur-[120px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-amber-100 rounded-full blur-[80px] sm:blur-[120px] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 mb-8 sm:mb-12 relative z-10 pointer-events-none">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Explore Our <br />
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-500 to-emerald-600">
              Collections
            </span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-sm sm:text-base">
            Discover unique handcrafted treasures made with love. <br />
          </p>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8 relative z-10 w-full">
        <div className="w-full">
          <InfiniteScrollRow data={row1Data} direction="left" />
        </div>
        <div className="w-full">
          <InfiniteScrollRow data={row2Data} direction="right" />
        </div>
      </div>

      {/* ============================================================ */}
      {/* PREMIUM POPUP MODAL (Added) */}
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
            {/* Close Button (Raw SVG) */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur rounded-full text-stone-500 hover:text-rose-600 hover:bg-white shadow-md transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Left: Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-stone-100 relative overflow-hidden group">
              <img
                src={selectedProduct.img} // Using 'img' property from collectionsData
                alt={selectedProduct.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r"></div>
            </div>

            {/* Right: Details Section */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center bg-white relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

              {/* Category Tag (Defaulting to "Collection" since not in data) */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-bold uppercase tracking-wider">
                  Collection
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-4 leading-tight">
                {selectedProduct.title}
              </h2>

              {/* Generic Description */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
                This exquisite handcrafted item is made with premium quality
                materials. Perfect for gifting or adding a touch of elegance to
                your space. Each piece is unique and crafted with love.
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
                  <button className="flex-1 bg-gradient-to-r from-rose-600 to-orange-500 text-white py-4 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    {/* Envelope Icon (Raw SVG) */}
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Enquire Now
                  </button>
                  <button className="px-6 py-4 rounded-xl border-2 border-stone-200 text-stone-700 font-bold text-sm hover:border-rose-400 hover:text-rose-600 transition-colors flex items-center justify-center gap-2">
                    {/* Heart Icon (Raw SVG) */}
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .mask-gradient {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default CollectionsSlider;
