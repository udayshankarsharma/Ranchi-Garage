import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Service";
import Gallery from "./components/Gallery";
import Map from "./components/Map"
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Gallery />
        <Map/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
