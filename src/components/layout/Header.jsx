import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect scroll for shadow / glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    // { name: "Projects", path: "/projects" },
    { name: "Clients", path: "/clients" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-lg border-b border-gray-100"
          : "bg-white/60 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:py-3">
        {/* ✅ Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-700 tracking-tight">
            Task<span className="text-orange-500">Mitra</span>
          </span>
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-blue-600 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-600 after:bottom-[-5px] after:left-0"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="ml-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Request Callback
          </Link>
        </nav>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-gray-700 hover:text-blue-600 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Drawer (animated) */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-3 px-6 py-5">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium rounded-md px-3 py-2 transition ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
          >
            Request Callback
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
