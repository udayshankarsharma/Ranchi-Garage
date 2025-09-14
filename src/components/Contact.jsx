import React from "react";
import { Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-blue-50 via-slate-100 to-purple-50"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-slate-800">
          📞 Contact / <span className="text-blue-600">Book Service</span>
        </h2>

        <div className="bg-white shadow-xl rounded-2xl p-8 border border-slate-200">
          {/* For Netlify forms: data-netlify and hidden input required */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="grid gap-4"
          >
            <input type="hidden" name="form-name" value="contact" />

            <input
              name="name"
              placeholder="Your Name"
              className="border border-slate-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />

            <input
              name="phone"
              placeholder="Phone / WhatsApp"
              className="border border-slate-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />

            <input
              name="email"
              placeholder="Email (optional)"
              className="border border-slate-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <textarea
              name="message"
              placeholder="Service details / chassis no."
              className="border border-slate-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              rows="4"
            />

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition"
              >
                <Send size={18} /> Send Message
              </button>

              <a
                href="tel:+918002860174"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md transition"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
