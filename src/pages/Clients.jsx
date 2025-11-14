import { useState } from "react";
import { Star, Quote } from "lucide-react";

// ✅ Local client images
import client1 from "../images/client1.jpeg";
import client2 from "../images/client2.jpeg";
import client3 from "../images/client3.jpeg";
import client4 from "../images/client4.jpeg";
import client5 from "../images/client5.jpeg";
import client6 from "../images/client6.jpeg";
import client7 from "../images/client7.jpeg";
import client8 from "../images/client8.jpeg";
import client9 from "../images/client9.jpeg";
import client10 from "../images/client10.jpeg";

function Clients() {
  const clientLogos = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
  ];

  // ✅ Duplicate logos to make continuous scroll seamless
  const repeatedLogos = [...clientLogos, ...clientLogos];

  const testimonials = [
    {
      id: 1,
      name: "Rohit Mehta",
      company: "Regional Manager, HDFC Bank",
      quote:
        "TaskMitra’s field collection team has been extremely professional and efficient. Their response time and reporting quality helped us improve our recovery process significantly.",
    },
    {
      id: 2,
      name: "Ananya Roy",
      company: "Project Head, SolarEdge Renewables",
      quote:
        "Excellent execution and timely completion of our solar installations. Their AMC support is reliable and transparent.",
    },
    {
      id: 3,
      name: "Amit Sharma",
      company: "Operations Lead, Tata Finance",
      quote:
        "Working with TaskMitra has streamlined our on-field verification operations. Great communication and trustworthy staff.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100 min-h-screen py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* --- Page Header --- */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Our Clients & Partners
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Trusted by leading enterprises across India for professional,
          reliable, and scalable support services.
        </p>

        {/* --- Infinite Scrolling Carousel --- */}
        <div className="relative mt-20 overflow-hidden">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {repeatedLogos.map((logo, idx) => (
              <div
                key={idx}
                className="mx-4 w-[400px] h-[250px] flex-shrink-0 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-500 bg-white border border-gray-100"
              >
                <img
                  src={logo}
                  alt={`Client ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- Testimonials --- */}
        <section className="mt-28">
          <h2 className="text-3xl font-semibold text-gray-900 mb-10">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white shadow-md rounded-2xl p-8 relative text-left transition-all hover:-translate-y-1 hover:shadow-xl duration-500"
              >
                <Quote
                  size={28}
                  className="absolute top-6 right-8 text-blue-600 opacity-30"
                />
                <p className="text-gray-600 italic mb-5 leading-relaxed text-[15px]">
                  “{t.quote}”
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-[16px]">
                      {t.name}
                    </h3>
                    <p className="text-xs text-gray-500">{t.company}</p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="mt-28 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 rounded-3xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Partner with Us?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Join our growing list of satisfied clients. Let’s collaborate and
            build sustainable solutions together.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
}

export default Clients;
