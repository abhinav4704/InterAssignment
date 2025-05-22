import React from "react";
import { Link, useLocation } from "react-router-dom";

const GetButton = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center justify-center gap-2 px-3 py-2 rounded-2xl transition-all duration-300 text-sm sm:text-base 
        ${isActive
          ? "bg-black/40 text-white font-semibold"
          : "bg-white/10 text-black hover:bg-white/20"
        }
        backdrop-blur-md border border-white/30 shadow-md`}
    >
      {/* Icon for mobile */}
      <span className="sm:hidden">
        <Icon className="text-lg" />
      </span>
      {/* Text label for desktop */}
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
};

export default GetButton;
