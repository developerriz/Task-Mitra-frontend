import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import { postLead } from "../utils/api";

function Contact() {
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
      console.error("Error submitting form:", err);
      setError(err.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get in Touch
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Have questions or need a service quote? Reach out to TaskMitra —
            we’re here to help you grow.
          </p>
        </div>

        {/* Contact Details + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* --- Left Side: Info + Map --- */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-600" />
                <span>Silbori, Bechimari, Darrang, Assam — 784514</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-600" />
                <a href="tel:+919395950025" className="hover:text-blue-600">
                  +91 93959 50025
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-600" />
                <a
                  href="mailto:taskmitrasolution@gmail.com"
                  className="hover:text-blue-600"
                >
                  taskmitrasolution@gmail.com
                </a>
              </li>
            </ul>

            {/* Google Map */}
            <div className="mt-6">
              <iframe
                title="TaskMitra Location - Silbori, Bechimari"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57492.90841703105!2d91.78763089999999!3d26.454276949999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a1c8efcfc165f%3A0xe83e80179917cc02!2sSilbori%2C%20Bechimari%2C%20Assam%20784514!5e0!3m2!1sen!2sin!4v1731404154860!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded-2xl border-0"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* --- Right Side: Form --- */}
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>

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
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="mr-2" /> Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
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
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
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
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none bg-white"
                  >
                    <option value="">Select Service Interested</option>
                    <option value="Solar Installation">
                      Solar Installation
                    </option>
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
                    <MessageSquare size={16} className="mr-2" /> Message *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none resize-none"
                  ></textarea>
                </div>

                {/* Error Message */}
                {error && <p className="text-sm text-red-600">{error}</p>}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition w-full ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <Send size={18} />
                  {loading ? "Submitting..." : "Submit"}
                </button>
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600">
                    Need immediate assistance? Call us at{" "}
                    <span className="font-semibold text-blue-600">
                      +91 9395950025
                    </span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
