import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="min-h-[calc(100vh-76px)] text-[#D1D1C7] px-6 pt-8 justify-center relative">
      {/* Name with responsive sizing */}
      <h1 className="font-medium text-7xl sm:text-8xl md:text-9xl lg:text-[220px] leading-none my-8">
        FABIHA
      </h1>

      {/* Content section with better spacing and responsive width */}
      <div className="space-y-6 max-w-2xl pl-3">
        <h2 className="text-2xl md:text-3xl font-light opacity-90">
          Full Stack Web Developer
        </h2>
        
        <p className="text-lg md:text-xl opacity-80 leading-relaxed">
          Creating clean, responsive websites with smooth user experiences.
          Passionate about coding and design that drives real results.
        </p>
        
        {/* Enhanced button with better hover states */}
        <button className="bg-[#D1D1C7] hover:bg-[#e0e0d8] text-lg md:text-xl font-bold text-black py-3 px-6 rounded-full flex items-center gap-1 transition-all mt-8 w-fit cursor-pointer hover:scale-101 duration-300 will-change-transform group">
          Download Resume
          <FiArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
        </button>
      </div>

      {/* Social Icons - Bottom Right Corner */}
      <div className="absolute bottom-8 right-8 flex gap-6">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#D1D1C7] hover:text-white transition-all opacity-90 hover:scale-105 duration-300">
          <FaGithub size={28} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#D1D1C7] hover:text-white transition-all hover:scale-105 duration-300 opacity-90">
          <FaLinkedin size={28} />
        </a>
        <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#D1D1C7] hover:text-white transition-all hover:scale-105 duration-300 opacity-90">
          <FaFacebook size={28} />
        </a>
      </div>
    </section>
  );
};

export default Banner;