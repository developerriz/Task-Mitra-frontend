import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* --- Company Info --- */}
        <div>
          <h2 className="text-xl font-semibold text-blue-700">
            Task<span className="text-orange-400">Mitra</span> Solutions Pvt.
            Ltd.
          </h2>
          <p className="text-sm mt-2 text-gray-600 leading-relaxed">
            Empowering Businesses with Ground-Level Solutions across Solar, Loan
            Recovery, and Field Operations.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Registered under{" "}
            <span className="font-semibold">MCA (Private Limited)</span>
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition text-sm font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-blue-600 transition text-sm font-medium"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-blue-600 transition text-sm font-medium"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/clients"
                className="hover:text-blue-600 transition text-sm font-medium"
              >
                Clients
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition text-sm font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Contact Details --- */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-2">
              <MapPin size={18} className="text-blue-600 mt-0.5" />
              <span>Silbori, Bechimari, Darrang, Assam — 784514</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} className="text-blue-600" />
              <a href="tel:+919876543210" className="hover:text-blue-600">
                +91 9395950025
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} className="text-blue-600" />
              <a
                href="mailto:info@taskmitra.in"
                className="hover:text-blue-600"
              >
                taskmitrasolutions@gmail.com
              </a>
            </li>
          </ul>

          {/* WhatsApp Floating Icon */}
          <div className="mt-4">
            <a
              href="https://wa.me/9395950025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-full hover:bg-green-600 transition text-sm font-medium"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* --- Footer Bottom Bar --- */}
      <div className="border-t border-gray-200 mt-6">
        <p className="text-center text-xs text-gray-500 py-4">
          © {new Date().getFullYear()} Task
          <span>Mitra</span> Solutions Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
