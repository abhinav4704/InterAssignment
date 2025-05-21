import React from "react";
import { FaArrowRight } from "react-icons/fa";

const GetStartedButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        px-6 py-2 rounded-3xl backdrop-blur-md bg-black/30 text-white 
        border border-white/20 shadow-lg transition-all duration-300 
        hover:bg-black/50 hover:scale-105 inline-flex items-center gap-2
      "
    >
      Get Started
      <FaArrowRight
        className="transition-transform duration-300"
        style={{ willChange: "transform" }}
      />
      <style jsx>{`
        button:hover svg {
          transform: translateX(6px);
        }
      `}</style>
    </button>
  );
};

export default GetStartedButton;
