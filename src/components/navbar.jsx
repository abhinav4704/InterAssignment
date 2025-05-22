import React from "react";
import GetButton from "./Button";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-4xl px-4 py-3 rounded-4xl backdrop-blur-md bg-white/10 border border-white/20 shadow-md z-50 flex items-center justify-between">

      <div className="text-black font-bold text-lg sm:text-xl px-2">Elite8</div>
      <div className="flex gap-2 sm:gap-3">
        <GetButton to="/" icon={FaHome} label="Home" />
        <GetButton to="/about" icon={FaUser} label="About" />
        <GetButton to="/projects" icon={FaProjectDiagram} label="Projects" />
        <GetButton to="/contact" icon={FaEnvelope} label="Contact" />
      </div>
    </nav>
  );
};

export default Navbar;
