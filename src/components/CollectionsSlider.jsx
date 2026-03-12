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
  // 2. SCROLL ROW COMPONENT (Handles Auto + Drag)
  // ============================================================
  const InfiniteScrollRow = ({ data, direction }) => {
    const sliderRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // Drag State
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    // Set initial scroll position for Right-moving row
    useLayoutEffect(() => {
      const slider = sliderRef.current;
      if (direction === "right" && slider) {
        slider.scrollLeft = slider.scrollWidth / 2;
      }
    }, [data, direction]);

    // Auto Scroll Animation Loop
    useEffect(() => {
      const slider = sliderRef.current;
      let animationFrameId;
      const speed = 1; // Adjust speed here (higher = faster)

      const step = () => {
        if (slider && !isPaused && !isDragging) {
          if (direction === "left") {
            // Move Left (Scroll Left increases)
            slider.scrollLeft += speed;
            // Infinite Loop Reset
            if (slider.scrollLeft >= slider.scrollWidth / 2) {
              slider.scrollLeft = 0;
            }
          } else {
            // Move Right (Scroll Left decreases)
            slider.scrollLeft -= speed;
            // Infinite Loop Reset
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

    // --- Drag Handlers (Mouse) ---
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

    // --- Drag Handlers (Touch) ---
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

    // Combined handler for Mouse Leave
    const handleContainerLeave = () => {
      handleMouseUpOrLeave();
      setIsPaused(false);
    };

    return (
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing mask-gradient scrollbar-hide select-none"
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
        className="relative w-[220px] h-[280px] flex-shrink-0 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(244,63,94,0.25)] hover:border-rose-300 transition-all duration-500 hover:-translate-y-2 overflow-hidden group/card cursor-pointer"
        style={{
          animation: `floatCard 6s ease-in-out infinite`,
          animationDelay: `${index * 0.3}s`,
        }}
      >
        {/* Image Area */}
        <div className="h-[65%] w-full overflow-hidden bg-stone-100 pointer-events-none">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
          />
        </div>

        {/* Content Area */}
        <div className="h-[35%] p-4 flex flex-col justify-center relative z-10 bg-white pointer-events-none">
          <h3 className="text-stone-900 font-bold text-lg truncate">
            {item.title}
          </h3>
          <p className="text-rose-600 text-xs font-semibold uppercase tracking-wider mt-1">
            Handcrafted
          </p>

          {/* Hover Button */}
          <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-lg hover:bg-rose-600 pointer-events-auto">
            <svg
              className="w-3 h-3"
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
    <section className="py-20 bg-stone-50 overflow-hidden relative select-none">
      {/* Background Decorative Blobs - Matching Theme */}
      <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-rose-200 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-amber-100 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

      {/* Header */}
      <div className="container mx-auto px-4 mb-12 relative z-10 pointer-events-none">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Explore Our <br />
            {/* UPDATED: Vibrant Logo Mix Gradient (Left to Right) */}
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-500 to-emerald-600">
              Collections
            </span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Discover unique handcrafted treasures made with love. <br />
            <span className="text-xs text-rose-500 mt-2 block opacity-70">
              (Drag to slide)
            </span>
          </p>
        </div>
      </div>

      <div className="space-y-8 relative z-10 w-full">
        {/* ROW 1: Moves Left */}
        <div className="w-full">
          <InfiniteScrollRow data={row1Data} direction="left" />
        </div>

        {/* ROW 2: Moves Right */}
        <div className="w-full">
          <InfiniteScrollRow data={row2Data} direction="right" />
        </div>
      </div>

      {/* STYLES */}
      <style jsx global>{`
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
        /* Hide Scrollbar but keep functionality */
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
