import React from "react";

const ContactPage = () => {
  return (
    <div>
        <div className="max-w-3xl mx-auto p-8 text-gray-800">
  <h2 className="text-4xl font-semibold mb-6">Get In Touch</h2>
  
  <p className="mb-6">
    Whether you have questions, want to discuss a project, or just want to say hi — I’d love to hear from you!
  </p>

  <ul className="mb-8">
    <li><strong>Email:</strong> abhinav4704@gmail.com</li>
    <li><strong>LinkedIn:</strong> www.linkedin.com/in/abhinav-l/</li>
    <li><strong>GitHub:</strong> github.com/abhianv4704</li>
  </ul>

  <form className="flex flex-col space-y-4 max-w-md">
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
               transition-all duration-300"
  />
  <button className="px-6 py-3 rounded-4xl backdrop-blur-md bg-white/10 border border-white/30 text-white 
                     shadow-md hover:bg-white/20 hover:shadow-cyan-400/50 
                     focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300">
    Send Message
  </button>
</form>


</div>

    </div>
  );
};

export default ContactPage;
