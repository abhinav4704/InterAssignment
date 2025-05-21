import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaReact, FaNode, FaDatabase, FaMobileAlt, FaLaptopCode } from "react-icons/fa";

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

const AboutPage = () => {
  return (
    <div className="min-h-screen text-white px-8 py-12 space-y-24 relative">
      {/* Sticky heading */}
      <div className="sticky top-24 text-center z-10">
        <h2 className="text-5xl font-bold text-white bg-black/50 py-4 px-8 rounded-xl backdrop-blur-md inline-block">
          Our Developer Skills
        </h2>
      </div>

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
              className="max-w-3xl mx-auto p-6 bg-black/30 backdrop-blur-lg rounded-2xl shadow-lg text-center"
            >
              <div className="flex flex-col items-center space-y-4">
                {skill.icon}
                <h3 className="text-2xl font-semibold">{skill.title}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutPage;
