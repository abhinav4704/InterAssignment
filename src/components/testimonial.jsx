import React from "react";

const testimonials = [
  {
    name: "Jane Doe",
    position: "Founder, Startly",
    feedback:
      "Elite8 delivered a stunning platform that exceeded our expectations. Seamless collaboration from start to finish.",
  },
  {
    name: "Michael Chen",
    position: "Product Manager, DevStack",
    feedback:
      "From backend architecture to UI polish, the team showed deep expertise and commitment to quality.",
  },
  {
    name: "Aisha Khan",
    position: "Director, EduPro",
    feedback:
      "They built a university portal that now supports over 1 million students. Robust and scalable work!",
  },
  {
    name: "Carlos Vega",
    position: "CEO, FinServe",
    feedback:
      "Elite8 revamped our dashboard with modern design and performance boosts. Our users love it!",
  },
  {
    name: "Lina Patel",
    position: "Marketing Lead, VibeVerse",
    feedback:
      "They created a responsive and stunning landing page that increased our conversions by 35%.",
  },
  {
    name: "Daniel Osei",
    position: "Founder, HealthMate",
    feedback:
      "The project was delivered with precision and speed. Great communication and support all the way.",
  },
  {
    name: "Emily Park",
    position: "CTO, CodeNest",
    feedback:
      "We needed a full-stack solution on a tight deadline, and they delivered a flawless MVP on time.",
  },
  {
    name: "Tariq Hasan",
    position: "Operations, Zenix Global",
    feedback:
      "Professionalism at its best. We now have a scalable internal tool that saves us hours every week.",
  },
];

// Keyframes for scrolling animation
const styles = `
@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
`;

const TestimonialsCarousel = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="overflow-hidden relative bg-gray-100 py-10 mb-10">
        <div
          className="inline-flex space-x-8 animate-scrollLeft"
          style={{
            animationDuration: "40s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationName: "scrollLeft",
          }}
        >
          {/* Duplicate items for seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="inline-block bg-white shadow-lg p-6 rounded-2xl border h-48 border-gray-200 w-80"
            >
              <div className="text-gray-600 italic mb-4 flex w-full">"{t.feedback}"</div>
              <div className="text-gray-800 font-semibold">{t.name}</div>
              <div className="text-gray-500 text-sm">{t.position}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialsCarousel;
