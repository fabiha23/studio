import React from "react";
import logo from "../../public/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="text-[#D1D1C7] py-4 px-7">
      <div className="flex justify-between items-center">
        <img className="w-9 hover:rotate-12 transition-transform duration-300" src={logo} alt="Logo" />
        <ul className="flex gap-9 text-xl">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            <li className="relative group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D1D1C7] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer">
            <li className="relative group">
              Skills
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D1D1C7] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="education" smooth={true} duration={500} className="cursor-pointer">
            <li className="relative group">
              Education
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D1D1C7] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
            <li className="relative group">
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D1D1C7] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer">
            <li className="relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D1D1C7] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;