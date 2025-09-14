import React, { useState } from "react";

const items = [
  {
    title: "Truck Body Fabrication",
    desc: "Custom full truck bodies on Tata & Ashok Leyland chassis.",
    details:
      "We design and build truck bodies with precision engineering, using durable materials and modern techniques to ensure strength and reliability. Our fabrication process includes proper alignment, welding, and load optimization for maximum efficiency."
  },
  {
    title: "Cabin Fabrication",
    desc: "Cabin works, mounting & finishing.",
    details:
      "We specialize in fabricating truck cabins with a focus on driver comfort and safety. From the frame to upholstery, we ensure high-quality mounting and finishing to provide a durable and professional look."
  },
  {
    title: "Wiring & Electricals",
    desc: "Complete wiring, lights, and accessories.",
    details:
      "We offer complete electrical work including wiring harness setup, headlamps, indicators, tail lamps, and additional accessories installation. All wiring is properly insulated and tested for safety."
  },
  {
    title: "Painting & Finishing",
    desc: "High-quality painting and corrosion protection.",
    details:
      "Our painting services use premium automotive paints for long-lasting finish. We provide rust protection, primer coating, and professional spray finish to give trucks a new and shiny look."
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center text-slate-800 mb-12 tracking-wide">
          Our <span className="text-yellow-500">Services</span>
        </h2>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <div
              key={s.title}
              className="p-6 bg-white border border-slate-200 rounded-2xl shadow hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
              onClick={() => setSelectedService(s)}
            >
              <h3 className="text-lg font-bold text-slate-800">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <p className="mt-4 text-xs text-yellow-600 font-semibold">
                Click to Read More →
              </p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative transform scale-95 animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800"
                onClick={() => setSelectedService(null)}
              >
                ✕
              </button>

              {/* Modal Content */}
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
                {selectedService.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">{selectedService.details}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
