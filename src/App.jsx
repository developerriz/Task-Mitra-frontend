import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import FloatingContact from "./components/FloatingContact/FloatingContact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col bg-white text-gray-800">
        {/* Header (always visible) */}
        <Header />
        <ScrollToTop />
        {/* Page content */}
        <main className="flex-grow pt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer (always visible) */}
        <FloatingContact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
