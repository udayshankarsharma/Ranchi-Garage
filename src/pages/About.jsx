import React from "react";

const About = () => {
  return (
    <div className="bg-gray-900 text-white font-[Poppins] min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-gray-900 py-12 text-center">
        <h2 className="text-4xl font-bold mb-2">About Ranchi Body Garage</h2>
        <p className="text-lg max-w-2xl mx-auto">Where Chassis Become Machines</p>
      </section>

      {/* Content */}
      <section className="px-6 py-12 max-w-5xl mx-auto space-y-10">
        {/* Our Story */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Our Story</h3>
          <p>
            Established at the heart of Brajrajnagar, Jharsuguda (Odisha), Ranchi Body Garage has been transforming truck chassis into robust road warriors for over a decade. We specialize in building customized truck bodies for Tata, Ashok Leyland, and other brands, from bare metal to finished machine.
          </p>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Why Choose Us?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>🔧 Decade of hands-on experience in full cabin and body fabrication</li>
            <li>🚚 Expertise in custom truck body building (tipper, open body, container)</li>
            <li>⚡ Complete wiring, electrical fitting, and road-ready setup</li>
            <li>🎨 Premium finishing with high-quality paint and detailing</li>
            <li>📍 Strategically located at Gandhi Chowk, Brajrajnagar</li>
            <li>🤝 Honest pricing, timely delivery & customer-first approach</li>
          </ul>
        </div>

        {/* Infrastructure */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Our Infrastructure</h3>
          <p>
            Our workshop is equipped with advanced fabrication tools, hydraulic lifting setups, MIG/TIG welding stations, and a skilled team that handles metal shaping, grinding, wiring, and painting — all under one roof.
          </p>
        </div>

        {/* Commitment */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Our Commitment</h3>
          <p>
            At Ranchi Body Garage, every truck is treated like our own. We build with precision, paint with pride, and deliver with a promise — making sure every customer drives away satisfied and safe.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-950 mt-16">
        <p className="text-sm text-gray-400">© 2025 Ranchi Body Garage. Built with pride at Gandhi Chowk, Brajrajnagar.</p>
      </footer>
    </div>
  );
};

export default About;
