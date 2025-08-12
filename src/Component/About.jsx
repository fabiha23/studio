import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-72px)] flex flex-col items-center justify-center gap-12 px-6 py-20 text-[#cec0a7] relative overflow-hidden"
    >
      {/* Text Section */}
      <div className="max-w-4xl space-y-8 text-left relative z-10">
        <div className="space-y-2">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">
            About Me
          </h2>
          <div className="w-1/2 h-1 bg-gradient-to-r from-[#cec0a7] to-transparent"></div>
        </div>

        {/* Two concise paragraphs without border */}
        <div className="space-y-8">
          <p className="text-lg opacity-90 leading-relaxed py-1">
            I am a full-stack web developer specializing in the MERN stack. I began my programming journey with simple HTML and CSS, and gradually expanded my skills to React, Node.js, Tailwind, and GSAP. I’m currently exploring problem-solving and diving into DSA while learning TypeScript and Next.js. I’m passionate about building websites with advanced 3D animations using Three.js and GSAP.
          </p>

          <p className="text-lg opacity-90 leading-relaxed py-1">
            Beyond coding, I love painting, baking, and traveling. I enjoy spending time with my loved ones and meeting new people. Nature is my happy place—I find joy in caring for my plants and soaking up the peaceful beauty of the outdoors.
          </p>
        </div>

        <button className="group bg-[#cec0a7] hover:bg-[#e0e0d8] text-black font-semibold py-3 px-8 rounded-full flex items-center gap-2 mx-auto lg:mx-0 transition-all duration-300 hover:scale-105">
          Let's Connect
          <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
        </button>
      </div>
    </section>
  );
};

export default About;
