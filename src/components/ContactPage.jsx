import React, { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 py-12 sm:py-20">
      <div className="max-w-3xl mx-auto p-6 sm:p-8 text-gray-800">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-white">Get In Touch</h2>

        <p className="mb-6 text-white/90 text-base sm:text-lg">
          Whether you have questions, want to discuss a project, or just want to say hi — I’d love to hear from you!
        </p>

        <ul className="mb-8 text-white/80 space-y-2 text-sm sm:text-base">
          <li><strong>Email:</strong> abhinav4704@gmail.com</li>
          <li><strong>LinkedIn:</strong> www.linkedin.com/in/abhinav-l/</li>
          <li><strong>GitHub:</strong> github.com/abhianv4704</li>
        </ul>

        <form className="flex flex-col space-y-4 max-w-md mx-auto sm:mx-0">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-black/30 border border-white/60 text-white placeholder-white/70
              focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400
              transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-black/30 border border-white/60 text-white placeholder-white/70
              focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400
              transition-all duration-300"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded-md bg-black/30 border border-white/60 text-white placeholder-white/70
              focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400
              transition-all duration-300 resize-y"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-4xl backdrop-blur-md bg-white/10 border border-white/30 text-white 
              shadow-md hover:bg-white/20 hover:shadow-cyan-400/50 
              focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
