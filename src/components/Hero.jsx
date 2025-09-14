import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        
        {/* Slogan */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          "Strong Bodies, Stronger Trucks!"
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          At <span className="text-yellow-400 font-semibold">Ranchi Body Garage</span>, 
          we turn your chassis into reliable, rugged, and road-ready machines with 
          precision craftsmanship and top-class finishing.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="#services"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-300 transition"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Extra punch line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 text-sm italic text-gray-400"
        >
          "Jaha Truck Bante Hain – Sirf Steel Nahi, Bharosa Bhi Jodte Hain!"
        </motion.p>

      </div>
    </section>
  );
}
