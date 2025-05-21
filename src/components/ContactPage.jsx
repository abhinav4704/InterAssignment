import React from "react";

const ContactPage = () => {
  return (
    <div>
        <div className="max-w-3xl mx-auto p-8 text-white">
  <h2 className="text-4xl font-semibold mb-6">Get In Touch</h2>
  
  <p className="mb-6">
    Whether you have questions, want to discuss a project, or just want to say hi — I’d love to hear from you!
  </p>

  <ul className="mb-8">
    <li><strong>Email:</strong> your.email@example.com</li>
    <li><strong>LinkedIn:</strong> linkedin.com/in/yourprofile</li>
    <li><strong>GitHub:</strong> github.com/yourusername</li>
  </ul>

  <form className="flex flex-col space-y-4 max-w-md">
    <input type="text" placeholder="Your Name" className="p-3 rounded-md bg-white/10 border border-white/30 text-white" />
    <input type="email" placeholder="Your Email" className="p-3 rounded-md bg-white/10 border border-white/30 text-white" />
    <textarea placeholder="Your Message" rows={5} className="p-3 rounded-md bg-white/10 border border-white/30 text-white" />
    <button className="px-6 py-3 rounded-4xl backdrop-blur-md bg-white/10 border border-white/30 text-white shadow-md hover:bg-white/20 transition-all duration-300">
      Send Message
    </button>
  </form>
</div>

    </div>
  );
};

export default ContactPage;
