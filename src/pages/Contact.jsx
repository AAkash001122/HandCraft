import React, { useState } from "react";
import { HiMail, HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";
import { BsSendCheck, BsArrowRight } from "react-icons/bs";

const Contact = () => {
  // Form State Handling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-[#FDFCF8] font-sans text-stone-800 py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Original Background Decor (Matching Hero) - Animated for modern feel */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30 -z-0 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200 rounded-full blur-3xl opacity-40 -z-0 animate-pulse"
        style={{ animationDuration: "4s" }}
      ></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2 block">
            Support 24/7
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold text-stone-900 tracking-tight mb-4">
            Get in{" "}
            <span className="italic font-serif text-amber-700 underline decoration-amber-200 decoration-4 underline-offset-4">
              Touch
            </span>
          </h1>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto text-lg">
            Have a project in mind or need a custom piece? Let's chat. We'd love
            to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Card 1: Address */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group cursor-pointer">
              <div className="p-4 bg-stone-900 rounded-2xl text-amber-400 group-hover:bg-amber-700 group-hover:text-white transition-colors duration-300 shadow-md">
                <HiLocationMarker className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-800 group-hover:text-stone-900 transition-colors">
                  Our Workshop
                </h3>
                <p className="text-stone-500 text-sm mt-1 leading-relaxed">
                  123 Artisan Lane, Pottery District
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group cursor-pointer">
              <div className="p-4 bg-stone-900 rounded-2xl text-amber-400 group-hover:bg-amber-700 group-hover:text-white transition-colors duration-300 shadow-md">
                <HiMail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-800 group-hover:text-stone-900 transition-colors">
                  Email Us
                </h3>
                <p className="text-stone-500 text-sm mt-1 leading-relaxed">
                  support@artisan-crafts.com
                  <br />
                  sales@artisan-crafts.com
                </p>
              </div>
            </div>

            {/* Card 3: Phone */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group cursor-pointer">
              <div className="p-4 bg-stone-900 rounded-2xl text-amber-400 group-hover:bg-amber-700 group-hover:text-white transition-colors duration-300 shadow-md">
                <HiPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-800 group-hover:text-stone-900 transition-colors">
                  Call Us
                </h3>
                <p className="text-stone-500 text-sm mt-1 leading-relaxed">
                  +1 (555) 123-4567
                  <br />
                  +1 (555) 987-6543
                </p>
              </div>
            </div>

            {/* Card 4: Hours */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group cursor-pointer">
              <div className="p-4 bg-stone-900 rounded-2xl text-amber-400 group-hover:bg-amber-700 group-hover:text-white transition-colors duration-300 shadow-md">
                <HiClock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-800 group-hover:text-stone-900 transition-colors">
                  Business Hours
                </h3>
                <p className="text-stone-500 text-sm mt-1 leading-relaxed">
                  Mon - Fri: 09:00 AM - 06:00 PM
                  <br />
                  Sat: 10:00 AM - 04:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-stone-100 relative overflow-hidden">
            {/* Subtle Decorative element inside form (Using original colors) */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-50 rounded-full -z-0 -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-stone-50 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white focus:ring-4 focus:ring-amber-50 transition-all placeholder-stone-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-stone-50 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white focus:ring-4 focus:ring-amber-50 transition-all placeholder-stone-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-stone-50 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white focus:ring-4 focus:ring-amber-50 transition-all placeholder-stone-400"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-stone-50 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white focus:ring-4 focus:ring-amber-50 transition-all resize-none placeholder-stone-400"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-stone-900 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-stone-800 transition-all duration-300 shadow-lg hover:shadow-stone-900/20 flex items-center justify-center gap-2 group transform active:scale-95"
                >
                  Send Message
                  <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
