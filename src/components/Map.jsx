import React from "react";
import { MapPin } from "lucide-react";

export default function Location() {
  // Replace with your garage's latitude & longitude
  const garageLat = 21.86040; 
  const garageLng = 83.91777;

  const handleNavigate = () => {
    // Opens Google Maps with directions from user's current location to garage
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${garageLat},${garageLng}`,
      "_blank"
    );
  };

  return (
    <section id="location" className="py-16 bg-gradient-to-r from-slate-100 to-slate-200">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-6">
          📍 Find Us
        </h2>

        {/* Google Map Embed */}
        <div className="overflow-hidden rounded-2xl shadow-lg mb-6">
          <iframe
            title="garage-location"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCgjvJ6GVYSa-E8ccRfJjMA1F6b7ySSQU0&q=${garageLat},${garageLng}`}
            className="w-full h-80 border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Navigate Button */}
        <button
          onClick={handleNavigate}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
        >
          <MapPin size={20} /> Get Directions
        </button>
      </div>
    </section>
  );
}
