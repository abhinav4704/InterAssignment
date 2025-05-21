import React from "react";
import { Link, useLocation } from "react-router-dom";

const GetButton = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-4 py-2 text-sm rounded-4xl backdrop-blur-md border border-white/30 shadow-md transition-all duration-300 
        ${isActive 
          ? "bg-black/40 text-white font-semibold py-1"  // darker background + text white
          : "bg-white/10 text-black hover:bg-white/20"
        }`}
    >
      {children}
    </Link>
  );
};

export default GetButton;
