import React, { useEffect } from "react";
import GlassButton from "./Button";
import { Link } from "react-router-dom";
import GetStartedButton from "./getstarted.jsx";
import laptopImage from "../assets/laptop.jpeg";
import TestimonialsCarousel from "./testimonial.jsx";
import { motion } from "framer-motion";
import GetButton from "./Button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="p-6 sm:p-10 min-h-screen flex items-center justify-center"
      >
        <div className="backdrop-blur-md bg-black/30 border border-white/20 shadow-lg rounded-3xl p-6 sm:p-10 max-w-5xl w-full text-white text-center space-y-6 sm:space-y-8 mx-4 sm:mx-0">
          <h1 className="text-3xl sm:text-5xl font-bold text-white/80 drop-shadow-md leading-tight">
            Build Scalable, Responsive Web Apps That Impact Thousands
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-white/90 drop-shadow-sm max-w-xl mx-auto">
            From sleek frontends to scalable backends, we build modern web
            solutions using the MERN stack that engage users and scale
            effortlessly.
          </p>
          <GetStartedButton />
        </div>
      </motion.div>

      {/* Sticky Scroll Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.3 }}
        className="relative bg-white"
      >
        <div className="sticky top-0 flex items-center justify-center min-h-screen bg-black text-white z-10">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 md:px-10 space-y-10 md:space-y-0 md:space-x-12 w-full">
            {/* Text */}
            <motion.div variants={fadeUp} className="w-full md:w-1/2 space-y-6 px-4 md:px-0">
              <h2 className="text-3xl md:text-4xl font-bold">We Build Websites</h2>
              <p className="text-base md:text-lg text-white/80">
                Our team designs and develops stunning websites that are
                responsive, fast, and tailored to your brand identity. Let your
                online presence speak volumes.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeUp}
              className="w-full md:w-1/2 px-4 md:px-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={laptopImage}
                alt="Laptop with website"
                className="rounded-xl shadow-lg max-h-[400px] w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Services & Testimonials */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.3 }}
        className="bg-white min-h-screen px-6 sm:px-10"
      >
        <div className="pt-20 text-black max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">More About Our Services</h3>
          <p className="text-lg">
            Whether you need a landing page, an e-commerce solution, or a
            full-stack dashboard, we’ve got the tools and team to make it happen.
          </p>
        </div>
        <div className="pt-20 max-w-4xl mx-auto px-4 sm:px-0">
          <TestimonialsCarousel />
        </div>
        <div className="max-w-4xl mx-auto mt-10">
          <GetStartedButton />
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
