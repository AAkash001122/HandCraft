import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

const CollectionsSlider = () => {
  // ============================================================
  // 1. DATA (Same as before)
  // ============================================================
  const collectionsData = [
    { id: 1, title: "Ancient Pottery", img: "15.jpg" },
    { id: 2, title: "Woven Textiles", img: "16.jpg" },
    { id: 3, title: "Golden Jewelry", img: "17.jpg" },
    { id: 4, title: "Leather Craft", img: "18.jpg" },
    { id: 5, title: "Wood Carving", img: "19.jpg" },
    { id: 6, title: "Ceramic Vases", img: "20.jpg" },
    { id: 7, title: "Silk Sarees", img: "21.jpg" },
    { id: 8, title: "Silver Anklets", img: "22.jpg" },
    { id: 9, title: "Hand Bags", img: "23.jpg" },
    { id: 10, title: "Bamboo Art", img: "24.jpg" },
    { id: 11, title: "Stone Sculpture", img: "25.jpg" },
    { id: 12, title: "Cotton Weaves", img: "26.jpg" },
    { id: 13, title: "Brass Items", img: "27.jpg" },
    { id: 14, title: "Rug Making", img: "28.jpg" },
    { id: 15, title: "Glass Blowing", img: "29.jpg" },
    { id: 16, title: "Paper Mache", img: "30.jpg" },
    { id: 17, title: "Embroidery", img: "31.jpg" },
    { id: 18, title: "Bead Work", img: "32.jpg" },
    { id: 19, title: "Miniature Art", img: "33.jpg" },
    { id: 20, title: "Terracotta", img: "34.jpg" },
    { id: 21, title: "Macrame", img: "35.jpg" },
    { id: 22, title: "Block Print", img: "36.jpg" },
    { id: 23, title: "Metal Craft", img: "37.jpg" },
    { id: 24, title: "Jute Bags", img: "38.jpg" },
    { id: 25, title: "Candle Making", img: "39.jpg" },
  ];

  const row1Data = collectionsData.slice(0, 13);
  const row2Data = collectionsData.slice(13, 25);

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
            {/* <span className="text-[10px] sm:text-xs text-rose-500 mt-2 block opacity-70">
              (Drag to slide)
            </span> */}
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