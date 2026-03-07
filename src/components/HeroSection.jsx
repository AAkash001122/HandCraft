import React from "react";
import { Link } from "react-router-dom";
import FooterWithCTA from "./FooterWithCTA";


import {
  BsHandbag,
  BsStarFill,
  BsArrowRight,
  BsHeart,
  BsQuote,
} from "react-icons/bs";
import { HiTruck, HiShieldCheck, HiSparkles, HiChip } from "react-icons/hi";

export default function HeroSection() {
  return (
    <>
      <main className="relative bg-[#FDFCF8] font-sans text-stone-800 overflow-hidden selection:bg-amber-100 selection:text-amber-900">
   

        <section className="relative bg-[#FDFCF8] font-sans text-stone-800 overflow-hidden selection:bg-amber-100 selection:text-amber-900">
         
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-amber-100 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-stone-200 rounded-full blur-3xl opacity-50"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-12 py-8 lg:py-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
      
              <div className="space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-full shadow-sm mx-auto lg:mx-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-500">
                    New Collection 2024
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-stone-900 leading-[1.1] tracking-tight">
                  Crafted with <br />
                  <span className="italic font-serif text-amber-700">
                    Soul & Story
                  </span>
                </h1>

                <p className="text-lg text-stone-500 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Discover unique handmade treasures crafted by master artisans.
                  Each piece is a journey of tradition and elegance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              
                  <Link to="/enquiry">
                    <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-stone-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto">
                      Get Enquiry
                      <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>

              
                  <Link to="/store">
                    <button className="px-8 py-4 border-2 border-stone-300 text-stone-700 rounded-full text-sm font-bold uppercase tracking-wider hover:border-stone-400 hover:bg-white transition-all duration-300 w-full sm:w-auto">
                      Explore Store
                    </button>
                  </Link>
                </div>

           
                <div className="flex flex-wrap gap-8 pt-8 border-t border-stone-200 mt-8 justify-center lg:justify-start">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg">
                      <HiTruck className="w-6 h-6 text-amber-700" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-stone-800">
                        Free Shipping
                      </p>
                      <p className="text-xs text-stone-400">
                        Worldwide Delivery
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg">
                      <HiShieldCheck className="w-6 h-6 text-amber-700" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-stone-800">
                        Authenticity
                      </p>
                      <p className="text-xs text-stone-400">100% Handmade</p>
                    </div>
                  </div>
                </div>
              </div>

          
              <div className="relative h-[500px] lg:h-[600px] w-full">
                <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-700 z-10">
                  <img
                    src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=1000&auto=format&fit=crop"
                    alt="Handcrafted Pottery"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent"></div>
                </div>

                <div className="absolute bottom-10 left-0 w-1/2 h-1/2 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform -rotate-6 hover:rotate-0 transition-all duration-500 z-20">
                  <img
                    src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop"
                    alt="Leather Craft"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute bottom-24 right-4 p-4 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 z-30 hover:scale-105 transition-transform cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=200&auto=format&fit=crop"
                    className="w-16 h-16 rounded-xl object-cover shadow-md"
                    alt="Featured Product"
                  />
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-1">
                      <BsStarFill className="w-3 h-3" />
                      <BsStarFill className="w-3 h-3" />
                      <BsStarFill className="w-3 h-3" />
                      <BsStarFill className="w-3 h-3" />
                      <BsStarFill className="w-3 h-3" />
                    </div>
                    <p className="font-bold text-stone-900 text-sm">
                      Ceramic Vase
                    </p>
                    <p className="text-amber-700 font-bold text-sm">$129.00</p>
                  </div>
                  <button className="p-2 bg-stone-900 text-white rounded-full ml-2 hover:bg-amber-600 transition-colors">
                    <BsHandbag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

     
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">
                Curated{" "}
                <span className="italic font-serif text-amber-700">
                  Collections
                </span>
              </h2>
              <p className="mt-4 text-stone-500 max-w-xl mx-auto">
                Explore our diverse range of handcrafted treasures, made with
                love and precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
              <div className="group relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800&auto=format&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Pottery"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 z-10 text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    Pottery & Ceramics
                  </h3>
                  <p className="text-stone-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Earthen elegance for your home.
                  </p>
                </div>
              </div>

          
              <div className="group relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800&auto=format&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Textiles"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 z-10 text-white">
                  <h3 className="text-3xl font-bold mb-2">Textiles & Weaves</h3>
                  <p className="text-stone-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Handwoven fabrics with tradition.
                  </p>
                </div>
              </div>

  
              <div className="group relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Jewelry"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 z-10 text-white">
                  <h3 className="text-3xl font-bold mb-2">Artisan Jewelry</h3>
                  <p className="text-stone-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Unique adornments for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

       
        <section className="py-20 lg:py-32 bg-[#FDFCF8]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-amber-500 rounded-tl-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1000&auto=format&fit=crop"
                  alt="Artisan Working"
                  className="rounded-3xl shadow-2xl w-full relative z-10"
                />
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-semibold text-stone-900 leading-tight">
                  The Artisan's <br />{" "}
                  <span className="italic font-serif text-amber-700">
                    Promise
                  </span>
                </h2>
                <p className="text-stone-600 leading-relaxed text-lg">
                  We believe in the beauty of imperfection. Every item you
                  purchase supports independent artisans and keeps ancient
                  crafting traditions alive. No machines, just hands and heart.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start group cursor-pointer">
                    <div className="p-3 bg-stone-900 rounded-xl text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <HiSparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-stone-800">
                        Handcrafted Excellence
                      </h4>
                      <p className="text-stone-500">
                        Every piece tells a story of dedication and skill.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group cursor-pointer">
                    <div className="p-3 bg-stone-900 rounded-xl text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <HiChip className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-stone-800">
                        Sustainable Materials
                      </h4>
                      <p className="text-stone-500">
                        Eco-friendly processes that respect our planet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">
                  Trending{" "}
                  <span className="italic font-serif text-amber-700">Now</span>
                </h2>
                <p className="mt-4 text-stone-500">
                  Loved by our community worldwide.
                </p>
              </div>
              <button className="hidden md:flex items-center gap-2 text-stone-800 font-bold hover:text-amber-700 transition-colors">
                View All <BsArrowRight />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
              <div className="group">
                <div className="relative overflow-hidden rounded-3xl mb-4 bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=600&auto=format&fit=crop"
                    alt="Product"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-stone-600 shadow">
                    New
                  </div>
    
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-4 bg-white rounded-full text-stone-900 hover:bg-amber-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <BsHandbag className="w-5 h-5" />
                    </button>
                    <button className="p-4 bg-white rounded-full text-stone-900 hover:bg-amber-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                      <BsHeart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">
                    Ceramics
                  </p>
                  <h3 className="text-lg font-bold text-stone-800">
                    Minimalist Vase
                  </h3>
                  <p className="text-amber-700 font-bold mt-1">$89.00</p>
                </div>
              </div>

              <div className="group">
                <div className="relative overflow-hidden rounded-3xl mb-4 bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600&auto=format&fit=crop"
                    alt="Product"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-amber-100 px-3 py-1 rounded-full text-xs font-bold text-amber-700 shadow">
                    Bestseller
                  </div>
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-4 bg-white rounded-full text-stone-900 hover:bg-amber-500 hover:text-white transition-colors">
                      <BsHandbag className="w-5 h-5" />
                    </button>
                    <button className="p-4 bg-white rounded-full text-stone-900 hover:bg-amber-500 hover:text-white transition-colors">
                      <BsHeart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">
                    Jewelry
                  </p>
                  <h3 className="text-lg font-bold text-stone-800">
                    Golden Hoop Earrings
                  </h3>
                  <p className="text-amber-700 font-bold mt-1">$45.00</p>
                </div>
              </div>

        
              <div className="group">
                <div className="relative overflow-hidden rounded-3xl mb-4 bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=600&auto=format&fit=crop"
                    alt="Product"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-4 bg-white rounded-full text-stone-900 hover:bg-amber-500 hover:text-white transition-colors">
                      <BsHandbag className="w-5 h-5" />
                    </button>
                    <button className="p-4 bg-white rounded-full text-stone-900 hover:bg-amber-500 hover:text-white transition-colors">
                      <BsHeart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">
                    Leather
                  </p>
                  <h3 className="text-lg font-bold text-stone-800">
                    Vintage Leather Bag
                  </h3>
                  <p className="text-amber-700 font-bold mt-1">$210.00</p>
                </div>
              </div>

       
              <div className="group">
                <div className="relative overflow-hidden rounded-3xl mb-4 bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600&auto=format&fit=crop"
                    alt="Product"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-4 bg-white rounded-full text-stone-900 hover:bg-amber-500 hover:text-white transition-colors">
                      <BsHandbag className="w-5 h-5" />
                    </button>
                    <button className="p-4 bg-white rounded-full text-stone-900 hover:bg-amber-500 hover:text-white transition-colors">
                      <BsHeart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">
                    Textile
                  </p>
                  <h3 className="text-lg font-bold text-stone-800">
                    Woven Basket Set
                  </h3>
                  <p className="text-amber-700 font-bold mt-1">$65.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-20 lg:py-32 bg-[#FDFCF8] overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">
                Words from our{" "}
                <span className="italic font-serif text-amber-700">
                  Collectors
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
   
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500 relative">
                <BsQuote className="absolute top-6 right-6 w-10 h-10 text-stone-100" />
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p className="text-stone-600 mb-8 relative z-10">
                  "The quality is unmatched. You can truly feel the effort put
                  into every detail. It's now the centerpiece of my living
                  room."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="w-12 h-12 rounded-full object-cover"
                    alt="User"
                  />
                  <div>
                    <p className="font-bold text-stone-800">Sarah J.</p>
                    <p className="text-sm text-stone-400">Interior Designer</p>
                  </div>
                </div>
              </div>

       
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500 relative">
                <BsQuote className="absolute top-6 right-6 w-10 h-10 text-stone-100" />
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p className="text-stone-600 mb-8 relative z-10">
                  "I bought a gift for my mother, and she was moved to tears.
                  The packaging was also beautiful. A premium experience
                  overall."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="w-12 h-12 rounded-full object-cover"
                    alt="User"
                  />
                  <div>
                    <p className="font-bold text-stone-800">Mike R.</p>
                    <p className="text-sm text-stone-400">Verified Buyer</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500 relative">
                <BsQuote className="absolute top-6 right-6 w-10 h-10 text-stone-100" />
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p className="text-stone-600 mb-8 relative z-10">
                  "Supporting artisans while getting unique decor is a win-win.
                  The delivery was fast and the product is exactly as shown."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    className="w-12 h-12 rounded-full object-cover"
                    alt="User"
                  />
                  <div>
                    <p className="font-bold text-stone-800">Emily T.</p>
                    <p className="text-sm text-stone-400">Art Collector</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterWithCTA />
      </main>
    </>
  );
}
