import React from "react";

const GetStartedButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 rounded-2xl backdrop-blur-md bg-black/30 text-white border border-white/20 shadow-lg transition-all duration-300 hover:bg-black/50 hover:scale-105"
    >
      Get Started
      
    </button>
  );
};

export default GetStartedButton;
