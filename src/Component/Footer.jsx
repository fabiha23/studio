import React from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter, FiMail, FiFacebook } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative text-[#cec0a7] py-12 px-6 border-t border-[#3f3f3f]">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Section - Copyright */}
          <div className="text-center md:text-left">
            <p className="opacity-90">© {new Date().getFullYear()} Fabiha Amatullah. All rights reserved.</p>
            <p className="text-sm opacity-70 mt-1">Built with React, TailwindCss</p>
          </div>

          {/* Middle Section - Social Links */}
          <div className="flex gap-6">
            <a 
          href="https://github.com/fabiha23"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl opacity-80 hover:opacity-100 hover:text-[#cec0a7] transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl opacity-80 hover:opacity-100 hover:text-[#cec0a7] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a 
  href="https://facebook.com/fabiha.amatullah.2024" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-2xl opacity-80 hover:opacity-100 hover:text-[#cec0a7] transition-all duration-300"
  aria-label="Facebook"
>
  <FiFacebook />
</a>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="hidden md:flex gap-6">
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              About
            </Link>
            <Link 
              to="skills" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              Skills
            </Link>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              Projects
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <Link
          to="navbar"
          smooth={true}
          duration={500}
          className="absolute -top-16 right-0 w-12 h-12 rounded-full bg-[#cec0a7] text-[#1a1a1a] flex items-center justify-center hover:bg-[#e0e0d8] transition-all duration-300 shadow-lg cursor-pointer"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
