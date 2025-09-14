import React from "react";

export default function Navbar(){
  return (
    <header className="bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">Ranchi Body Garage</div>
        <nav className="space-x-6 hidden md:block">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}
