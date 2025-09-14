import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.JPG";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";

const images = [img10, img11, img13, img14, img15, img16, img12,img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="gallery"
      className="py-16 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-slate-800">
          📸 Our <span className="text-blue-600">Awesome</span> Gallery
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`gallery-${i}`}
                className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal / Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="max-w-[95vw] max-h-[85vh] rounded-2xl shadow-2xl border-4 border-white"
                />
                {/* Close Button */}
                <button
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 text-black text-xl font-bold shadow-lg hover:bg-gray-100 transition"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
