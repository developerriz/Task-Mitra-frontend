import { useEffect, useState } from "react";
import {
  Sun,
  Home as HomeIcon,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  Phone,
  User,
  MessageSquare,
  Shield,
  Award,
  Clock,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { postLead } from "../utils/api";

import solarImage from "./solar.jpg";
import decorImage from "./decor.jpg";
import loanImage from "../images/loan.jpg";
import cateringImage from "../images/catering.jpg";
import plumbingImage from "../images/plumbing.jpg";
import mobileImage from "../images/mobile.jpg";
import constructionImage from "../images/construction.jpg";

// ✅ Contact Form Component (connected to backend)
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (
      !formData.name ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    ) {
      setError("Please fill all required fields.");
      return;
    }
    setLoading(true);
    try {
      await postLead(formData);
      setSubmitted(true);
      setFormData({ name: "", phone: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 sticky top-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
      <p className="text-gray-600 mb-6">
        Fill out the form below and we'll get back to you shortly.
      </p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="text-green-600 text-5xl mb-3 animate-bounce">✓</div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Thank You!
          </h3>
          <p className="text-green-700">
            Your inquiry has been submitted successfully. We'll contact you
            soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <User size={16} className="mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Phone size={16} className="mr-2" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          {/* Service */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Briefcase size={16} className="mr-2" />
              Select Service *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
            >
              <option value="">-- Choose a Service --</option>
              <option value="Solar Installation">Solar Installation</option>
              <option value="Home Decoration">Home Decoration</option>
              <option value="Loan Recovery">Loan Recovery</option>
              <option value="Catering Services">Catering Services</option>
              <option value="Plumbing Services">Plumbing Services</option>
              <option value="Mobile Repairing">Mobile Repairing</option>
              <option value="Construction Services">
                Construction Services
              </option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <MessageSquare size={16} className="mr-2" />
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder="Tell us about your requirements..."
            />
          </div>

          {/* Error */}
          {error && <p className="text-sm text-red-600">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>
        </form>
      )}
    </div>
  );
};

// ✅ Service Detail Component
const ServiceDetail = ({ service, onBack }) => {
  const Icon = service.icon;
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <Icon size={48} className="text-blue-600 mr-4" />
              <h1 className="text-3xl font-bold text-gray-800">
                {service.title}
              </h1>
            </div>
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg mb-6"
            />
            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.fullDescription}
            </p>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              What We Offer:
            </h2>
            <ul className="space-y-3 mb-8">
              {service.details.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

// ✅ Home Component
const Home = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const featuredServices = [
    {
      id: 1,
      title: "Solar Installation",
      icon: Sun,
      image: solarImage,
      description:
        "Expert solar panel installation for residential and commercial properties. Complete end-to-end solutions with maintenance support.",
      details: [
        "Residential & Commercial setups",
        "AMC & Maintenance",
        "Energy Efficiency Consultation",
        "Grid & Off-grid Systems",
      ],
      fullDescription:
        "Our solar installation services deliver complete renewable energy solutions. From design and installation to long-term maintenance, we ensure optimal performance and reduced electricity costs for homes and businesses.",
    },
    {
      id: 2,
      title: "Home Decoration",
      icon: HomeIcon,
      image: decorImage,
      description:
        "Transform your living spaces with our professional interior design and home decor services tailored to your vision.",
      details: [
        "Interior & Exterior Design",
        "Wall Painting & Lighting",
        "Furniture & Layout Setup",
        "Curtains, Flooring & Styling",
      ],
      fullDescription:
        "We provide complete home decoration services to help you achieve your dream space. From concept to completion, our experts focus on aesthetics, comfort, and functionality to bring your ideas to life.",
    },
  ];

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  if (selectedService)
    return (
      <ServiceDetail
        service={selectedService}
        onBack={() => setSelectedService(null)}
      />
    );

  return (
    <div className="bg-white">
      {/* ✅ HERO SECTION */}
      <section className="relative bg-slate-50 pt-20 pb-32 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            Trusted Service Provider Across India
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Services <br />
            <span className="text-blue-600">Made Simple</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            From solar installations to home makeovers — TaskMitra delivers
            quality, trust, and satisfaction across every project.
          </p>

          {/* ✅ CTA Button (centered + animated arrow) */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/services")}
              className="group bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center"
            >
              Explore Services
              <ArrowRight
                size={20}
                className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ✅ WHY CHOOSE US */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose <span className="text-blue-600">TaskMitra?</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                icon: Shield,
                title: "Verified Professionals",
                desc: "We connect you with trusted, background-checked experts.",
              },
              {
                icon: Clock,
                title: "On-Time Services",
                desc: "Punctual, efficient, and quick service delivery every time.",
              },
              {
                icon: Award,
                title: "Quality Guaranteed",
                desc: "We prioritize excellence and 100% customer satisfaction.",
              },
              {
                icon: Users,
                title: "Pan-India Network",
                desc: "Our team delivers reliable services across major cities.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <Icon size={36} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FEATURED SERVICES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Featured Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized solutions delivered by experienced professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="group bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover rounded-t-2xl"
                  />
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                        <Icon size={28} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <ul className="text-gray-500 text-sm space-y-1">
                          {service.details.slice(0, 3).map((point, i) => (
                            <li key={i} className="flex items-center">
                              <span className="text-blue-600 mr-2">✓</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ IMAGE CAROUSEL */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Service Highlights
          </h2>
          <p className="text-lg text-gray-600 mb-14">
            A glimpse of the professional services we deliver across India
          </p>

          <div className="relative overflow-hidden">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {[
                { name: "Loan Recovery", img: loanImage },
                { name: "Catering Services", img: cateringImage },
                { name: "Plumbing", img: plumbingImage },
                { name: "Mobile Repairing", img: mobileImage },
                { name: "Construction Services", img: constructionImage },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="mx-4 w-[340px] sm:w-[300px] md:w-[360px] h-[220px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-500 bg-gray-100 relative group"
                >
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500"></div>
                  <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-semibold tracking-wide">
                    {service.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
