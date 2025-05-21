import React from "react";
import GlassButton from "./Button";
import { Link } from "react-router-dom";
import GetStartedButton from "./getstarted.jsx";
import laptopImage from "../assets/laptop.jpeg"; // Replace with your image path
import TestimonialsCarousel from "./testimonial.jsx";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="p-10 min-h-screen flex items-center justify-center">
        <div className="backdrop-blur-md bg-black/30 border border-white/20 shadow-lg rounded-3xl p-10 max-w-5xl w-full text-white text-center space-y-8">
          <h1 className="text-5xl font-bold text-white/80 drop-shadow-md">
            Build Scalable, Responsive Web Apps That Impact Thousands
          </h1>
          <p className="text-lg leading-relaxed text-white/90 drop-shadow-sm">
            From sleek frontends to scalable backends, we build modern web solutions using the MERN stack that engage users and scale effortlessly.
          </p>
          <GetStartedButton />
        </div>
      </div>

      {/* Sticky Scroll Section */}
      <div className="relative h-[200vh] bg-white">
        <div className="sticky top-0 h-screen flex items-center justify-center bg-black text-white z-10">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-10 space-y-10 md:space-y-0 md:space-x-12">
            {/* Text */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold">We Build Websites</h2>
              <p className="text-lg text-white/80">
                Our team designs and develops stunning websites that are
                responsive, fast, and tailored to your brand identity. Let your
                online presence speak volumes.
              </p>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={laptopImage}
                alt="Laptop with website"
                className="rounded-xl shadow-lg max-h-[400px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content continues here... */}
      <div className="bg-white min-h-screen">
      <div className=" pt-50 pl-50 text-black ">
        <h3 className="text-3xl font-bold mb-4">More About Our Services</h3>
        <p className="text-lg">
          Whether you need a landing page, an e-commerce solution, or a full-stack dashboard, we’ve got the tools and team to make it happen.
        </p>
        
      </div>
      <div className="pt-20">
      <TestimonialsCarousel/></div>
      </div>
    </div>
  );
};

export default HomePage;
