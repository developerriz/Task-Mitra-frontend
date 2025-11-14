import { useState, useEffect } from "react";
import {
  Sun,
  Home,
  Briefcase,
  Utensils,
  Wrench,
  Smartphone,
  Construction,
  ArrowLeft,
  Mail,
  Phone,
  User,
  MessageSquare,
} from "lucide-react";
import { postLead } from "../utils/api"; // ✅ backend helper

// ✅ All service data
const servicesData = [
  {
    id: 1,
    title: "Solar Installation",
    icon: Sun,
    description:
      "Complete solar energy solutions for residential, commercial, and industrial clients with installation, AMC, and maintenance support.",
    details: [
      "Residential rooftop solar setups",
      "Commercial & industrial installations",
      "Annual Maintenance Contracts (AMC)",
      "Panel cleaning & performance monitoring",
      "Energy efficiency consultation",
      "Grid-tied and off-grid systems",
    ],
    fullDescription:
      "Our solar installation services provide end-to-end solutions for harnessing clean, renewable energy. We specialize in designing and installing customized solar power systems that meet your specific energy needs while reducing electricity costs and carbon footprint.",
  },
  {
    id: 2,
    title: "Home Decoration",
    icon: Home,
    description:
      "Transform your living spaces with our professional interior and exterior decoration services tailored to your style and budget.",
    details: [
      "Interior design consultation",
      "Wall painting & texturing",
      "Furniture arrangement & styling",
      "Lighting design & installation",
      "Curtains & blinds setup",
      "Complete home makeovers",
    ],
    fullDescription:
      "We bring your vision to life with comprehensive home decoration services. Our team of experienced designers and craftsmen work closely with you to create beautiful, functional spaces that reflect your personality and enhance your lifestyle.",
  },
  {
    id: 3,
    title: "Loan Recovery",
    icon: Briefcase,
    description:
      "Specialized recovery services for NBFCs, credit companies, and banks with efficient field collection and documentation.",
    details: [
      "Field collections & on-site visits",
      "Skip tracing & defaulter tracking",
      "Customer verification & KYC",
      "Collection reporting & documentation",
      "Legal compliance support",
      "Negotiation & settlement assistance",
    ],
    fullDescription:
      "Our loan recovery services help financial institutions recover outstanding debts efficiently and professionally. We employ ethical practices and maintain compliance with all regulatory requirements while maximizing recovery rates.",
  },
  {
    id: 4,
    title: "Catering Services",
    icon: Utensils,
    description:
      "Professional catering solutions for events, corporate functions, and daily meal requirements with diverse menu options.",
    details: [
      "Event catering (weddings, parties)",
      "Corporate meal services",
      "Custom menu planning",
      "Multi-cuisine options",
      "Buffet & plated service",
      "Equipment & staff provision",
    ],
    fullDescription:
      "Our catering services deliver exceptional culinary experiences for any occasion. From intimate gatherings to large-scale events, we provide delicious food, professional service, and complete event support to make your function memorable.",
  },
  {
    id: 5,
    title: "Plumbing Services",
    icon: Wrench,
    description:
      "Comprehensive plumbing solutions including installation, repair, and maintenance for residential and commercial properties.",
    details: [
      "Pipe installation & repair",
      "Leak detection & fixing",
      "Bathroom & kitchen fitting",
      "Water heater installation",
      "Drainage & sewage solutions",
      "24/7 emergency services",
    ],
    fullDescription:
      "Our expert plumbers provide reliable solutions for all your plumbing needs. Whether it's a minor repair or major installation, we ensure quality workmanship, timely service, and lasting results that keep your water systems running smoothly.",
  },
  {
    id: 6,
    title: "Mobile Repairing",
    icon: Smartphone,
    description:
      "Expert mobile device repair services for all brands with genuine parts and warranty on repairs.",
    details: [
      "Screen replacement & repair",
      "Battery replacement",
      "Software troubleshooting",
      "Water damage repair",
      "Charging port & speaker repair",
      "Same-day service available",
    ],
    fullDescription:
      "We provide professional mobile repair services for smartphones and tablets of all brands. Our skilled technicians use genuine parts and advanced tools to restore your device to optimal condition quickly and affordably.",
  },
  {
    id: 7,
    title: "Road/Bridge Construction",
    icon: Construction,
    description:
      "Large-scale infrastructure development including road construction, bridge building, and civil engineering projects.",
    details: [
      "Road construction & resurfacing",
      "Bridge & flyover construction",
      "Infrastructure development",
      "Site preparation & earthwork",
      "Quality testing & compliance",
      "Project management & execution",
    ],
    fullDescription:
      "Our construction division specializes in building robust infrastructure that stands the test of time. With experienced engineers and modern equipment, we deliver high-quality road and bridge construction projects on schedule and within budget.",
  },
];

// ✅ Service Detail Page (with backend form)
const ServiceDetail = ({ service, onBack }) => {
  const IconComponent = service.icon;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: service?.title || "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // scroll to top on mount
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

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
      setFormData({
        name: "",
        phone: "",
        service: service.title || "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err.message || "Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <IconComponent size={48} className="text-blue-600 mr-4" />
              <h1 className="text-3xl font-bold text-gray-800">
                {service.title}
              </h1>
            </div>
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

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>Why Choose Us?</strong> We combine expertise, quality
                service, and customer satisfaction to deliver exceptional
                results every time.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll get back to you shortly.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-green-600 text-5xl mb-3 animate-bounce">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-green-700">
                  Your inquiry has been submitted successfully. We'll contact
                  you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="mr-2" /> Full Name *
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
                    <Phone size={16} className="mr-2" /> Phone Number *
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
                    <Briefcase size={16} className="mr-2" /> Select Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                  >
                    <option value="">-- Choose a Service --</option>
                    {servicesData.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare size={16} className="mr-2" /> Message *
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

                {/* Submit */}
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

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                Need immediate assistance? Call us at{" "}
                <span className="font-semibold text-blue-600">
                  +91 9395950025
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Main Services Page
export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  if (selectedService) {
    return (
      <ServiceDetail
        service={selectedService}
        onBack={() => setSelectedService(null)}
      />
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          TaskMitra provides professional on-ground and business support
          services to help companies operate efficiently and grow sustainably.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 text-center flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div>
                <div className="flex justify-center mb-4">
                  <IconComponent size={40} className="text-blue-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="text-sm text-gray-500 space-y-1 text-left px-4">
                  {service.details.slice(0, 4).map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <button className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
                  Know More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
