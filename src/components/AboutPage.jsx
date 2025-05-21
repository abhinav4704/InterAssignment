import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaMobileAlt,
  FaLaptopCode,
} from "react-icons/fa";

// Skill data
const skills = [
  {
    title: "Frontend Development",
    description: "React.js, TailwindCSS, Responsive UI/UX",
    icon: <FaReact className="text-blue-400 text-3xl" />,
  },
  {
    title: "Backend Development",
    description: "Node.js, Express.js, REST APIs",
    icon: <FaNode className="text-green-500 text-3xl" />,
  },
  {
    title: "Database Management",
    description: "MongoDB, Firebase, SQL",
    icon: <FaDatabase className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Mobile Friendly Design",
    description: "Fully responsive and mobile optimized",
    icon: <FaMobileAlt className="text-purple-500 text-3xl" />,
  },
  {
    title: "Full Stack Apps",
    description: "MERN Stack development with best practices",
    icon: <FaLaptopCode className="text-cyan-400 text-3xl" />,
  },
];

// Client logos
const clients = [
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Netflix", logo: "/logos/netflix.svg" },
  { name: "Spotify", logo: "/logos/spotify.svg" },
  { name: "Airbnb", logo: "/logos/airbnb.svg" },
  { name: "Meta", logo: "/logos/meta.svg" },
  { name: "Uber", logo: "/logos/uber.svg" },
  { name: "Slack", logo: "/logos/slack.svg" },
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white px-8 py-12 space-y-24 relative">
      {/* About Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto space-y-10"
      >
        <h1 className="text-4xl font-bold text-gray-900 text-center">About Elite8</h1>
        <p className="text-gray-800 text-lg text-center">
          At Elite8, we specialize in building scalable, high-performance web applications
          using modern technologies. Our team of experienced developers is dedicated to delivering
          robust, beautiful, and maintainable digital products for businesses of all sizes.
        </p>

        <h2 className="text-2xl font-semibold text-center mt-12">Our Clients</h2>

        <div className="max-w-5xl mx-auto mt-6 rounded-xl overflow-hidden border border-white/30 bg-white/20 backdrop-blur-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-collapse">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center justify-center space-y-2 px-6 py-4 border border-white/30
                ${index >= clients.length - 4 ? "border-b-0" : ""} 
                ${(index + 1) % 4 === 0 ? "border-r-0" : ""}`}
              >
                <img src={client.logo} alt={client.name} className="h-12 object-contain" />
                <p className="text-sm text-black/90 font-semibold">{client.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Sticky Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="sticky top-24 text-center z-10"
      >
        <h2 className="text-5xl font-bold text-white bg-black/50 py-4 px-8 rounded-xl backdrop-blur-md inline-block">
          Our Developer Skills
        </h2>
      </motion.div>

      {/* Skill Cards */}
      <div className="space-y-24 mt-40">
        {skills.map((skill, index) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
          return (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="max-w-3xl mx-auto p-6 bg-black/30 backdrop-blur-lg rounded-2xl shadow-lg text-center border border-white/20 hover:border-cyan-400 transition duration-300 hover:shadow-cyan-500/50"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center space-y-4"
              >
                {skill.icon}
                <h3 className="text-2xl font-semibold">{skill.title}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutPage;
