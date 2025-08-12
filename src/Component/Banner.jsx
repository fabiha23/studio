import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="min-h-[calc(100vh-72px)] text-[#cec0a7] px-6 pt-8 justify-center relative">
      {/* Name with responsive sizing */}
      <h1 className="font-medium text-8xl md:text-9xl lg:text-[220px] leading-none my-6 bg-gradient-to-t from-black/40 to-[#cec0a7] bg-clip-text text-transparent">
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
        <a
  href="/resume.pdf"
  download="Fabiha_Resume.pdf"
  className="bg-[#cec0a7] hover:bg-[#e0e0d8] text-lg md:text-xl font-bold text-black py-2 px-5 rounded-full flex items-center gap-1 transition-all mt-8 w-fit cursor-pointer hover:scale-101 duration-300 will-change-transform group"
>
  Download Resume
  <FiArrowUpRight
    size={24}
    className="group-hover:rotate-45 transition-transform"
  />
</a>

      </div>

      {/* Social Icons - Bottom Right Corner */}
      <div className="absolute bottom-8 right-8 flex gap-6">
        <a
          href="https://github.com/fabiha23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#cec0a7] hover:text-white transition-all hover:scale-105 duration-300"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#cec0a7] hover:text-white transition-all hover:scale-105 duration-300 "
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://facebook.com/fabiha.amatullah.2024"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#cec0a7] hover:text-white transition-all hover:scale-105 duration-300"
        >
          <FaFacebook size={28} />
        </a>
      </div>
    </section>
  );
};

export default Banner;
