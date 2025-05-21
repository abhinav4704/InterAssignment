import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black/60 backdrop-blur-sm border-t border-white/10 text-white py-6 px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-white/70">&copy; 2025 Elite8. All rights reserved.</p>

        <div className="flex space-x-6 text-white text-2xl">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:elite8@example.com"
            className="hover:text-red-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
