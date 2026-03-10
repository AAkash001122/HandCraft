import React from "react";

const CollectionsSlider = () => {
  // ============================================================
  // 1. ADD YOUR IMAGES HERE (Total 25 Items)
  // ============================================================

  const collectionsData = [
    {
      id: 1,
      title: "Ancient Pottery",
      img: "15.jpg",
    },
    {
      id: 2,
      title: "Woven Textiles",
      img: "16.jpg",
    },
    {
      id: 3,
      title: "Golden Jewelry",
      img: "17.jpg",
    },
    {
      id: 4,
      title: "Leather Craft",
      img: "18.jpg",
    },
    {
      id: 5,
      title: "Wood Carving",
      img: "19.jpg",
    },
    {
      id: 6,
      title: "Ceramic Vases",
      img: "20.jpg",
    },
    {
      id: 7,
      title: "Silk Sarees",
      img: "21.jpg",
    },
    {
      id: 8,
      title: "Silver Anklets",
      img: "22.jpg",
    },
    {
      id: 9,
      title: "Hand Bags",
      img: "23.jpg",
    },
    {
      id: 10,
      title: "Bamboo Art",
      img: "24.jpg",
    },
    {
      id: 11,
      title: "Stone Sculpture",
      img: "25.jpg",
    },
    {
      id: 12,
      title: "Cotton Weaves",
      img: "26.jpg",
    },
    {
      id: 13,
      title: "Brass Items",
      img: "27.jpg",
    },

    // ROW 2 ITEMS
    {
      id: 14,
      title: "Rug Making",
      img: "28.jpg",
    },
    {
      id: 15,
      title: "Glass Blowing",
      img: "29.jpg",
    },
    {
      id: 16,
      title: "Paper Mache",
      img: "30.jpg",
    },
    {
      id: 17,
      title: "Embroidery",
      img: "31.jpg",
    },
    {
      id: 18,
      title: "Bead Work",
      img: "32.jpg",
    },
    {
      id: 19,
      title: "Miniature Art",
      img: "33.jpg",
    },
    {
      id: 20,
      title: "Terracotta",
      img: "34.jpg",
    },
    {
      id: 21,
      title: "Macrame",
      img: "35.jpg",
    },
    {
      id: 22,
      title: "Block Print",
      img: "36.jpg",
    },
    {
      id: 23,
      title: "Metal Craft",
      img: "37.jpg",
    },
    {
      id: 24,
      title: "Jute Bags",
      img: "38.jpg",
    },
    {
      id: 25,
      title: "Candle Making",
      img: "39.jpg",
    },
  ];

  // Splitting data for 2 rows
  const row1Data = collectionsData.slice(0, 13);
  const row2Data = collectionsData.slice(13, 25);

  // Helper Card Component
  const Card = ({ item, index }) => {
    return (
      <div
        className="relative w-[220px] h-[280px] flex-shrink-0 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(124,58,237,0.3)] hover:border-violet-300 transition-all duration-500 hover:-translate-y-2 overflow-hidden group/card cursor-pointer"
        style={{
          // Floating animation with staggered delay
          animation: `floatCard 6s ease-in-out infinite`,
          animationDelay: `${index * 0.3}s`,
        }}
      >
        {/* Image Area */}
        <div className="h-[65%] w-full overflow-hidden bg-slate-100">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
          />
        </div>

        {/* Content Area */}
        <div className="h-[35%] p-4 flex flex-col justify-center relative z-10 bg-white">
          <h3 className="text-slate-900 font-bold text-lg truncate">
            {item.title}
          </h3>
          <p className="text-violet-600 text-xs font-semibold uppercase tracking-wider mt-1">
            Handcrafted
          </p>

          {/* Hover Button Overlay */}
          <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-lg hover:bg-violet-600">
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
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-slate-50 overflow-hidden relative">
      {/* Background Decoration (Subtle) */}
      <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-violet-200 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-fuchsia-200 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

      {/* Header */}
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Explore Our <br />
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
              Collections
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Discover unique handcrafted treasures made with love.
          </p>
        </div>
      </div>

      {/* CSS Animations for Scrolling & Floating */}
      <style jsx global>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }
        /* Pause on Hover */
        .slider-container:hover .animate-scroll-left,
        .slider-container:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="space-y-8 relative z-10 slider-container">
        {/* ROW 1: Slides LEFT (Right -> Left) */}
        <div className="flex gap-6 overflow-hidden w-full mask-gradient-left">
          <div className="flex gap-6 animate-scroll-left pl-3">
            {/* Original Items */}
            {row1Data.map((item, i) => (
              <Card key={`r1-${item.id}`} item={item} index={i} />
            ))}
            {/* Duplicate Items for Seamless Loop */}
            {row1Data.map((item, i) => (
              <Card key={`r1-dup-${item.id}`} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* ROW 2: Slides RIGHT (Left -> Right) */}
        <div className="flex gap-6 overflow-hidden w-full mask-gradient-right">
          <div className="flex gap-6 animate-scroll-right pl-3">
            {/* Original Items */}
            {row2Data.map((item, i) => (
              <Card key={`r2-${item.id}`} item={item} index={i} />
            ))}
            {/* Duplicate Items for Seamless Loop */}
            {row2Data.map((item, i) => (
              <Card key={`r2-dup-${item.id}`} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Fade Masks for smooth edges */}
      <style jsx>{`
        .mask-gradient-left {
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
        .mask-gradient-right {
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
      `}</style>
    </section>
  );
};

export default CollectionsSlider;
