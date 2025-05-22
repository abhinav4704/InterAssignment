import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import bgImage from "./assets/black8k.jpg";
import Navbar from "./components/navbar";
import HomePage from "./components/Homepage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import Footer from "./components/Footer.jsx";
import SmoothCursor from "./components/Smoothcursor.jsx";

const App = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Smooth Cursor */}
      <SmoothCursor />

      {/* Fixed Background Image with black fallback */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-center bg-cover -z-10 transition-all duration-700"
        style={{
          backgroundColor: bgLoaded ? "transparent" : "black",
          backgroundImage: bgLoaded ? `url(${bgImage})` : "none",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="pt-28"> {/* padding top to prevent overlap with fixed navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
