import React from "react";
import { Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        {/* Garage Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">Ranchi Body Garage</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Gandhi Chowk, Brajrajnagar, <br /> Jharsuguda, Odisha
          </p>
        </div>

        {/* Owner Contact Card */}
        <div className="bg-slate-800/60 border border-slate-700 p-4 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold mb-3">Owner Contact</h3>
          <div className="flex items-center gap-2 mb-2">
            <Phone size={18} className="text-blue-400" />
            <a href="tel:+918002860174" className="hover:underline">
              +91 9778149064
            </a>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Phone size={18} className="text-blue-400" />
            <a href="tel:+918002860174" className="hover:underline">
              +91 80028 60174
            </a>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Mail size={18} className="text-green-400" />
            <a href="mailto:rbggarage@gmail.com" className="hover:underline">
              ranchibodybuilders@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Instagram size={18} className="text-pink-400" />
            <a
              href="https://instagram.com/rbggarage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @rbggarage
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center md:items-end text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Ranchi Body Garage</p>
          <p className="mt-1">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
