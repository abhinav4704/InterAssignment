import React from "react";

const ProjectsPage = () => {
  return (
    <div>
        <div className="max-w-6xl mx-auto p-8 text-white">
  <h2 className="text-4xl font-semibold mb-8">My Projects</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
      <img
        src="https://via.placeholder.com/400x250?text=University+Portal"
        alt="University Portal"
        className="rounded-md mb-4"
      />
      <h3 className="text-2xl font-semibold mb-2">University Portal</h3>
      <p>
        A full-featured platform supporting 100,000+ students for course management, results, and communication.
      </p>
    </div>

    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
      <img
        src="https://via.placeholder.com/400x250?text=Business+Dashboard"
        alt="Business Dashboard"
        className="rounded-md mb-4"
      />
      <h3 className="text-2xl font-semibold mb-2">Business Dashboard</h3>
      <p>
        Real-time analytics and reporting tool for small and medium-sized businesses.
      </p>
    </div>

    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
      <img
        src="https://via.placeholder.com/400x250?text=E-commerce+Site"
        alt="E-commerce Site"
        className="rounded-md mb-4"
      />
      <h3 className="text-2xl font-semibold mb-2">E-commerce Site</h3>
      <p>
        A modern shopping experience optimized for both desktop and mobile users.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default ProjectsPage;
