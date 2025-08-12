import React from "react";
import logo from "../../public/logo.png";
import { Link as Links } from "react-scroll";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="text-[#cec0a7] py-4 px-7">
      <div className="flex justify-between items-center">
        <Link to='/'><img className="w-9 hover:rotate-360 transition-transform duration-300 cursor-pointer" src={logo} alt="Logo" /></Link>
        <ul className="flex gap-9 text-xl">
          <Links to="about" smooth={true} duration={500} className="cursor-pointer">
            <li className="relative group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#cec0a7] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Links>
          <Links to="skills" smooth={true} duration={500} className="cursor-pointer">
            <li className="relative group">
              Skills
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#cec0a7] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Links>
          <Links to="education" smooth={true} duration={500} className="cursor-pointer">
            <li className="relative group">
              Education
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#cec0a7] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Links>
          <Links to="projects" smooth={true} duration={500} className="cursor-pointer">
            <li className="relative group">
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#cec0a7] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Links>
          <Links to="contact" smooth={true} duration={500} className="cursor-pointer">
            <li className="relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#cec0a7] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Links>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;