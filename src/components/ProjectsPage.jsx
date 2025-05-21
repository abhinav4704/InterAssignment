import {React, useEffect} from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Variants for fancy animations
const containerVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 60 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 14,
      duration: 0.6,
    },
  },
};

const sideVariant = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 12,
      duration: 0.6,
    },
  },
});

const pointStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const pointVariant = {
  hidden: { opacity: 0, x: -15 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 80, damping: 10 },
  },
};

const projects = [
  {
    title: "E-commerce Platform",
    description: [
      "Built with the MERN stack",
      "Secure payments & real-time inventory",
      "Custom user dashboards and analytics",
    ],
    image: "/projects/ecommerce.jpg",
  },

  {
    title: "Analytics Dashboard",
    description: [
      "Data-rich UI with D3.js visualizations",
      "Interactive KPIs and filters",
      "Seamless backend integration",
    ],
    image: "/projects/analytics.jpg",
  },

  {
    title: "Real-time Collaboration Tool",
    description: [
      "Live document editing and video chat",
      "Powered by WebSocket and Node.js",
      "Enhanced team productivity",
    ],
    image: "/projects/collab.jpg",
  },
];

const WorkSection = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen px-6 py-20 bg-white/10 backdrop-blur-lg rounded-xl">
      <h2 className="text-5xl font-bold text-center mb-24 text-white">Our Work</h2>

      <div className="space-y-32">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

          return (
            <motion.div
              ref={ref}
              key={index}
              variants={containerVariant}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className={`flex flex-col md:flex-row ${
                !isEven ? "md:flex-row-reverse" : ""
              } items-center gap-12`}
            >
              {/* Image Side */}
              <motion.div
                variants={sideVariant(isEven ? "left" : "right")}
                className="w-full md:w-1/2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl shadow-2xl object-cover w-full h-72 md:h-96"
                />
              </motion.div>

              {/* Text Side */}
              <motion.div
                variants={sideVariant(isEven ? "right" : "left")}
                className="w-full md:w-1/2 text-white space-y-6"
              >
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <motion.div
                  variants={pointStagger}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="space-y-3"
                >
                  {project.description.map((point, i) => (
                    <motion.p
                      key={i}
                      variants={pointVariant}
                      className="text-white/80 text-lg"
                    >
                      • {point}
                    </motion.p>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkSection;
