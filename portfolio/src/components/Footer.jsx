import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const anioVigente = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/tiago-rodriguez",
      icon: <FaGithub size={28} />,
      hoverColor: "hover:text-gray-500",
    },
    {
      href: "https://www.linkedin.com/in/tiago-rodriguez/",
      icon: <FaLinkedin size={28} />,
      hoverColor: "hover:text-blue-600",
    },
    {
      href: "https://www.instagram.com/tiitirodriguez/",
      icon: <FaInstagram size={28} />,
      hoverColor: "hover:text-pink-500",
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-t from-gray-800 to-black text-gray-400 py-8 px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <p>&copy; {anioVigente} Tiago Rodriguez</p>
          <p>Todos los derechos reservados.</p>
        </div>

        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-110 ${link.hoverColor}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
