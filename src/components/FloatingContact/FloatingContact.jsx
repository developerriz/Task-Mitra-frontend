// src/components/FloatingContact/FloatingContact.jsx
import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const companyPhone = "+919395950025"; // ✅ your number here
  const whatsappNumber = "9395950025"; // ✅ without '+' for wa.me link

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* When expanded, show buttons */}
      {isOpen && (
        <div className="flex flex-col items-end space-y-3 mb-2 animate-fadeIn">
          {/* Call Button */}
          <a
            href={`tel:${companyPhone}`}
            className="flex items-center justify-center bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition-all"
            title="Call us"
          >
            <Phone size={22} />
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 text-white w-12 h-12 rounded-full shadow-lg hover:bg-green-600 transition-all"
            title="Chat on WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center bg-blue-600 text-white w-14 h-14 rounded-full shadow-2xl hover:bg-blue-700 transition-all animate-bounce-slow"
        title={isOpen ? "Close" : "Contact Us"}
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}{" "}
        {/* ✅ fixed here */}
      </button>
    </div>
  );
};

export default FloatingContact;
