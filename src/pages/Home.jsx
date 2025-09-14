import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white font-[Poppins]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-950 shadow-md">
        <h1 className="text-2xl font-bold text-yellow-400">Ranchi Body Garage</h1>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
          <li><a href="#gallery" className="hover:text-yellow-300">Gallery</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-16 bg-gradient-to-r from-yellow-500 to-yellow-300 text-gray-900">
        <h2 className="text-4xl font-bold mb-4">Rugged Builds. Reliable Roads.</h2>
        <p className="text-lg">Custom Truck Body Solutions for Tata & Ashok Leyland</p>
        <div className="mt-6">
          <a href="#contact" className="bg-gray-900 text-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-gray-800">Get a Quote</a>
        </div>
      </header>

      {/* About Us Preview */}
      <section className="px-6 py-12 text-center">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Welcome to Ranchi Body Garage</h3>
        <p className="max-w-2xl mx-auto">
          Located at Gandhi Chowk, Brajrajnagar, Jharsuguda, Odisha — we specialize in full truck body fabrication,
          cabin building, wiring and more for bare chassis.
        </p>
      </section>

      {/* Services Preview */}
      <section id="services" className="px-6 py-12 bg-gray-800">
        <h3 className="text-2xl font-semibold text-yellow-400 text-center mb-8">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-lg mb-2">Full Cabin Fabrication</h4>
            <p>From sheet metal to glass fitting, we build robust cabins for any chassis.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-lg mb-2">Custom Body Building</h4>
            <p>Tipper, container, open bodies — all customized to your load needs.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-lg mb-2">Wiring & Painting</h4>
            <p>Full electrical setup and painting for a brand-new, road-ready look.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-950 mt-16">
        <p className="text-sm text-gray-400">© 2025 Ranchi Body Garage. Built with pride at Gandhi Chowk, Brajrajnagar.</p>
      </footer>
    </div>
  );
};

export default Home;
