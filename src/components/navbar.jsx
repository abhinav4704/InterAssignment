import React from "react";
import GlassButton from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] rounded-4xl     max-w-4xl flex items-center justify-between px-6 py-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-md z-50">
      <div className="text-black font-bold text-xl px-4">Elite8</div>

      <div className="flex gap-3">
        <GlassButton to="/">Home</GlassButton>
        <GlassButton to="/about">About</GlassButton>
        <GlassButton to="/projects">Projects</GlassButton>
        <GlassButton to="/contact">Contact</GlassButton>
      </div>
    </nav>
  );
};

export default Navbar;
