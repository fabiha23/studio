import React, { useState } from "react";
import logo from "/logo.png";
import { Link as Links } from "react-scroll";
import { Link } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["about", "skills", "education", "projects", "contact"];

  return (
    <nav id="navbar" className="text-[#cec0a7] py-4 px-7 relative z-50">
      {/* Desktop Navbar - visible md and above */}
      <div className="hidden md:flex justify-between items-center">
        <Link to="/">
          <img
            className="w-9 hover:rotate-360 transition-transform duration-700 cursor-pointer"
            src={logo}
            alt="Logo"
          />
        </Link>

        <ul className="flex gap-9 text-xl">
          {navItems.map((section) => (
            <Links
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li className="relative group">
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#cec0a7] transition-all duration-300 group-hover:w-full"></span>
              </li>
            </Links>
          ))}
        </ul>
      </div>

      {/* Mobile Hamburger Button - visible below md */}
      <div className="md:hidden flex justify-between items-center">
        <Link to="/">
          <img
            className="w-9 hover:rotate-360 transition-transform duration-700 cursor-pointer"
            src={logo}
            alt="Logo"
          />
        </Link>

        <button
          className="text-2xl focus:outline-none cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-transparent backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden
        `}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-3xl text-[#cec0a7] focus:outline-none cursor-pointer"
            aria-label="Close Menu"
          >
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col items-start space-y-8 mt-10 ml-10">
          {navItems.map((section) => (
            <Links
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative group py-2">
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#cec0a7] transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Links>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
