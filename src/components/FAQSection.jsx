import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// ================= FAQ CARD + ACCORDION DATA =================
const topFAQCards = [
  {
    title: "Can I switch plans later?",
    desc: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    title: "Do you take a commission?",
    desc: "No! You keep 100% of your royalties. We believe artists should be fairly compensated for their work.",
  },
  {
    title: "How long does it take to go live?",
    desc: "Most releases go live within 2–4 weeks, depending on the store. Spotify and Apple Music are typically the fastest.",
  },
  {
    title: "What stores do you distribute to?",
    desc: "We distribute to over 150+ digital stores worldwide including Spotify, Apple Music, Amazon Music, TikTok, and many more.",
  },
];

// ================= FAQ ACCORDION DATA =================
const faqData = [
  {
    question: "What is Digital Music Distribution?",
    answer:
      "Digital music distribution is the process of delivering your music to streaming platforms like Spotify, Apple Music, Amazon Music and more.",
  },
  {
    question: "How do I upload a release?",
    answer:
      "You can upload your release directly from your dashboard by filling in release details and submitting it for review.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Royalties are collected from platforms and paid directly to your selected payout method.",
  },
  {
    question: "How does the pricing work on Digital Music Distribution?",
    answer:
      "We offer transparent pricing plans with no hidden fees. Choose the plan that fits your career stage.",
  },
  {
    question:
      "What tools does Digital Music Distribution offer for artists and labels?",
    answer:
      "We provide analytics, marketing tools, royalty tracking, smart links and advanced release management.",
  },
  {
    question: "What are Smart Links?",
    answer:
      "Smart Links are a single link that automatically directs your listeners to their preferred streaming platform, making it easy to share your music anywhere.",
  },
  {
    question: "What is Digital Music Distribution's white-label solution?",
    answer:
      "Our white-label solution allows you to offer music distribution services under your own brand, while we handle the backend operations and distribution.",
  },
  {
    question: "How much does the white-label service cost?",
    answer:
      "Pricing depends on your usage and number of releases. Contact our sales team for a customized quote.",
  },
  {
    question: "How do I sign up on Digital Music Distribution?",
    answer:
      "You can sign up directly on our website by creating an account and following the onboarding steps.",
  },
  {
    question: "How do I get support if I face issues?",
    answer:
      "Our support team is available via email and live chat to assist you with any issues or questions you may have.",
  },
];

// ================= FAQ SECTION COMPONENT =================
export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#0B0F19] text-white py-24 px-6 md:px-16">
      {/* ================= TOP 4 FAQ CARDS + CTA ================= */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {topFAQCards.map((item, i) => (
            <div
              key={i}
              className="bg-[#111827] border border-gray-700 rounded-xl p-6"
            >
              <h4 className="font-semibold mb-2 text-sm md:text-base">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold">
            Ready to share your music with the world?
          </h2>
          <p className="text-gray-400 mt-4">
            Join thousands of artists who trust Labellift for their music
            distribution
          </p>
          <button className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition px-8 py-3 rounded-xl font-semibold">
            Start Your Music Career
          </button>
          <p className="text-gray-500 text-sm mt-3">
            No credit card required • Cancel anytime
          </p>
        </div>
      </div>

      {/* ================= BIG FAQ ACCORDION ================= */}
      <div className="max-w-4xl mx-auto mt-12 space-y-2">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-800">
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex justify-between items-center py-6 text-left"
            >
              <span className="text-base md:text-lg font-medium">
                {item.question}
              </span>
              <ChevronDownIcon
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  open === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === index && (
              <div className="pb-6 pr-8">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
