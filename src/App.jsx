import React from "react";
import { Routes, Route } from "react-router-dom";

import bgImage from "./assets/black8k.jpg";
import Navbar from "./components/navbar";
import HomePage from "./components/Homepage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";
import ContactPage from "./components/ContactPage.jsx";

const App = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="pt-24"> {/* Add padding top to prevent overlap with fixed navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
