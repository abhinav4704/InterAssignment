import React from "react";
import GlassButton from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 rounded-4xl backdrop-blur-md bg-white/10 border border-white/20 shadow-md z-50">
      <div className="text-black font-bold text-lg sm:text-xl px-2">Elite8</div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        <GlassButton to="/">Home</GlassButton>
        <GlassButton to="/about">About</GlassButton>
        <GlassButton to="/projects">Projects</GlassButton>
        <GlassButton to="/contact">Contact</GlassButton>
      </div>
    </nav>
  );
};

export default Navbar;
