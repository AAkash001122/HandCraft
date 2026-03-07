import React, { useState } from "react";
import { HiSparkles, HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const GetEnquiry = () => {
  // Simple state for form handling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan tu backend API call karega
    console.log("Enquiry Submitted:", formData);
    alert("Thank you for your enquiry! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-[#FDFCF8] py-20 px-6 lg:px-12 font-sans text-stone-800">
      <div className="container mx-auto max-w-6xl">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">
            Get in <span className="italic font-serif text-amber-700">Touch</span>
          </h1>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            Have a custom request or bulk order in mind? Fill out the form below and our artisans will get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
              <h3 className="text-xl font-bold text-stone-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
                    <HiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Email Us</p>
                    <p className="text-stone-500 text-sm">support@artisan-crafts.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
                    <HiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Call Us</p>
                    <p className="text-stone-500 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-50 rounded-xl text-amber-600">
                    <HiLocationMarker className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Visit Workshop</p>
                    <p className="text-stone-500 text-sm">123 Artisan Lane, Pottery District, NY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-stone-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-600 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-600 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-600 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-600 mb-2">Your Message</label>
                <textarea 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  placeholder="Tell us about your custom requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-stone-900 text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-stone-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Send Enquiry
                <HiSparkles className="w-4 h-4 text-amber-400"/>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GetEnquiry;