"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Ramesh Kumar",
      location: "OMR, Chennai",
      text: "We installed invisible grills for our balcony on OMR. Excellent finish, completely rust-proof, and the views are spectacular. Highly recommended for high-rise apartments.",
      rating: 5,
    },
    {
      name: "Priya Srinivasan",
      location: "Adyar, Chennai",
      text: "The safety nets installation was quick and professional. It gives us peace of mind with kids and our pet cat. Great service and transparent pricing!",
      rating: 5,
    },
    {
      name: "Subramanian S.",
      location: "Velachery, Chennai",
      text: "We got the ceiling pulley cloth hanger installed. Super space saver for our utility balcony. The crew was polite, efficient, and cleaned up everything after installation.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-24 scroll-mt-12" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-orange bg-orange-50 px-3.5 py-1.5 rounded-full inline-block self-center">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            What Our Customers Say
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Verified feedback from homeowners and commercial property managers across Chennai.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col gap-5 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-bold text-slate-800">{review.name}</span>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{review.location}</span>
                </div>
                <div className="p-2 bg-white rounded-full shadow-xs text-accent-orange shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
              </div>

              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent-orange fill-accent-orange" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
